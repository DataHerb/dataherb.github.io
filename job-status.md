---
layout: doc
title: Job status
description: An open file format any pipeline can write, so the catalog can show what is fresh, failing, stuck or stale.
permalink: /job-status/
next: {url: /ecosystem/dataherb-python, title: dataherb CLI}
---

Every job that produces data for the catalog (an Airflow DAG, a GitHub Actions workflow, a cron script, a crawler) writes a small JSON file saying how its last run went. The explorer reads those files to show freshness and failures, both on a **Status** page and as a badge on each dataset.

- **Any orchestrator can write it.** It is a JSON file in a bucket or folder. No API, no agent, no database.
- **The site stays static.** The browser reads the files directly, so status is live without rebuilding the site.
- **One write per run is enough.** Writing at start (`running`) and at the end makes "stuck" detection possible, but is optional.

## Layout

Under a status prefix (configured in `status.sources` of `dataherb.config.yml`), each job owns a folder named after its id:

```text
<prefix>/<job_id>/latest.json                             current state, overwritten on every write
<prefix>/<job_id>/runs/<YYYYMMDDTHHMMSSZ>-<run_id>.json   one file per run (history)
```

`latest.json` is what the site and `dataherb status check` read. Run files are named with the start time first, so a lexical sort is a time sort.

## The document

```json
{
  "spec": "dataherb.status/v1",
  "job": {
    "id": "sales-export",
    "name": "Nightly sales export",
    "owner": "commercial-analytics@example.com",
    "orchestrator": "airflow",
    "expected_interval": "P1D",
    "max_duration": "PT2H"
  },
  "run": {
    "id": "scheduled__2026-10-07T02:00:00+00:00",
    "status": "success",
    "started_at": "2026-10-07T02:00:12Z",
    "finished_at": "2026-10-07T02:14:39Z",
    "message": "32 files processed"
  },
  "last_success": { "id": "...", "status": "success", "started_at": "...", "finished_at": "..." },
  "datasets": [{ "id": "demo-daily-sales", "rows": 11680 }],
  "checks": [{ "name": "no_null_region", "status": "fail", "message": "12 rows" }]
}
```

- `run.status` is one of `queued`, `running`, `success`, `partial`, `failed`, `skipped`, `cancelled`.
- `last_success` is carried forward by writers, so a reader knows a job is stale even when its latest run failed. `dataherb status emit` does this for you.
- `datasets[].id` links the job to catalog datasets; datasets can also name their job with `status_job` in their metadata.
- Any failing `checks[]` entry makes a successful run **degraded**.

## Health

Readers derive one health value per job from `latest.json` and the current time. The first rule that matches wins.

| Health | When |
|---|---|
| `unknown` | no run recorded |
| `stuck` | running or queued for longer than `max_duration` |
| `stale` | running or queued, and the last success is older than `expected_interval × 1.5` |
| `running` | running or queued |
| `failing` | the run failed or was cancelled |
| `stale` | last success older than `expected_interval × 1.5`, or never succeeded |
| `degraded` | the run is partial, or a check failed |
| `healthy` | the run succeeded or was skipped |

The grace factor is configurable (`stale_grace`, default 0.5), so a daily job turns stale 36 hours after its last success. A dataset shows the worst health of its jobs.

## Writing status files

The `dataherb` CLI writes both files, carries `last_success` forward and sets `Cache-Control: no-cache`:

```bash
dataherb status emit --target s3://bucket/_dataherb/status/ \
  --job-id sales-export --status running --expected-interval P1D --max-duration PT2H
# ... the job runs ...
dataherb status emit --target s3://bucket/_dataherb/status/ \
  --job-id sales-export --status success --message "32 files processed"
```

Ready-made emitters: [Airflow callback]({{ site.explorer_repo }}/blob/main/examples/airflow/dataherb_status.py), [GitHub Actions]({{ site.explorer_repo }}/blob/main/examples/github-actions/crawler.yml) (via the explorer's `emit-status` action), and [plain shell]({{ site.explorer_repo }}/blob/main/examples/shell/emit-status.sh).

To alert outside the site, run `dataherb status check` on a schedule. It prints every job's health and exits 1 when any job is failing, stuck or stale.

The full specification, with every field, is [docs/job-status-spec.md]({{ site.explorer_repo }}/blob/main/docs/job-status-spec.md); the JSON Schema is [job-status.schema.json](https://github.com/DataHerb/dataherb-python/blob/master/dataherb/catalog/schemas/job-status.schema.json).
