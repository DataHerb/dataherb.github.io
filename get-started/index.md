---
layout: doc
title: Get started
description: Run DataHerb Explorer locally, then fork it and make it your organization's catalog.
permalink: /get-started/
next: {url: /add/, title: Add a dataset}
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

Pipelines report each run as a small JSON file, and the explorer shows which jobs are failing, stuck or stale. See [Job status]({{ "/job-status/" | relative_url }}) for the file format and emitters.

## How the pieces fit

Read the [architecture notes]({{ site.explorer_repo }}/blob/main/docs/architecture.md). The builder and the JSON Schemas live in the [`dataherb` CLI]({{ "/ecosystem/dataherb-python" | relative_url }}).
