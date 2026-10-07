---
layout: page
title: Get Started
description: Run your own DataHerb Explorer
permalink: /get-started/
exclude: true
comments: true
---

DataHerb v2 is [DataHerb Explorer]({{ site.explorer_repo }}): a data catalog and explorer for your organization's open data that is just a static website. Fork it, point one YAML file at your git repositories and S3 buckets, and publish it on GitHub Pages (or S3/CloudFront). See the [live demo]({{ site.explorer_url }}).

## Try it locally

You need [uv](https://docs.astral.sh/uv/).

```bash
git clone https://github.com/DataHerb/dataherb-explorer && cd dataherb-explorer
uv sync                       # installs the dataherb CLI
uv run dataherb catalog build # reads dataherb.config.yml + catalog/, writes dist/
uv run dataherb catalog serve # http://127.0.0.1:8000
```

The demo catalog mixes datasets in the repo, datasets in the DataHerb `dataset-*` git repositories, and simulated job status files.

## Make it yours

1. **Fork** the repository (or use it as a template) and enable GitHub Pages with source "GitHub Actions".
2. **Edit `dataherb.config.yml`**: title, accent colour, links, and your stores (git hosts, S3 buckets, HTTP folders, local folders). See [docs/config.md]({{ site.explorer_repo }}/blob/main/docs/config.md).
3. **Replace `catalog/`** with one Markdown file per dataset, or turn on `catalog.discover` to pick up every `dataherb.yml` under an S3 prefix. See [Add Data]({{ "/add/" | relative_url }}).
4. **Point `status.sources`** at where your jobs write status files, and add the emitter to your jobs. See the [job status spec]({{ site.explorer_repo }}/blob/main/docs/job-status-spec.md).
5. **Delete `demo/`** and the demo scripts.
6. If your data is in S3, set up browser access and CORS: [docs/s3.md]({{ site.explorer_repo }}/blob/main/docs/s3.md). If browsers can't reach public CDNs, set `explorer.duckdb.mode: vendored`.

The site rebuilds on every push to `main`, every hour, and whenever a pipeline sends a `dataset-updated` event.

## The one config file

```yaml
site:
  title: DataHerb Explorer
  description: Internal open data catalog.
  accent: "#2f7d4f"
  repository: https://github.com/my-org/my-explorer

stores:
  github:
    type: git
    raw_url_template: https://raw.githubusercontent.com/{repo}/{ref}/{path}
    token_env: GITHUB_TOKEN        # for private repos, build time only
  datalake:
    type: s3
    bucket: my-company-datalake
    region: eu-central-1
    public_base_url: https://data.internal.example.com

catalog:
  dirs: [catalog]
```

## Job status

Pipelines report their runs as small JSON files following the [`dataherb.status/v1` spec]({{ site.explorer_repo }}/blob/main/docs/job-status-spec.md): a `latest.json` per job plus one file per run. The explorer reads them in the browser and shows which jobs are failing, stuck or stale.

```bash
dataherb status emit --target s3://bucket/_dataherb/status/ \
  --job-id my-crawler --status success --expected-interval P1D
dataherb status check   # exit 1 if any job is failing, stuck or stale
```

Ready-made emitters exist for [Airflow]({{ site.explorer_repo }}/blob/main/examples/airflow/dataherb_status.py), [GitHub Actions]({{ site.explorer_repo }}/blob/main/examples/github-actions/crawler.yml) and [shell]({{ site.explorer_repo }}/blob/main/examples/shell/emit-status.sh).

## How the pieces fit

Read the [architecture notes]({{ site.explorer_repo }}/blob/main/docs/architecture.md). The builder and the JSON Schemas live in the [`dataherb` Python package]({{ "/ecosystem/dataherb-python" | relative_url }}).
