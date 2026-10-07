---
layout: page
title: DataHerb Python Package
permalink: /ecosystem/dataherb-python
exclude: true
comments: true
---

The `dataherb` command-line tool creates dataset metadata, builds the DataHerb Explorer site, and reports job status. The source is [DataHerb/dataherb-python](https://github.com/DataHerb/dataherb-python).

## Install

With [uv](https://docs.astral.sh/uv/):

```bash
uv tool install "dataherb[infer] @ git+https://github.com/DataHerb/dataherb-python"
```

Inside a fork of the explorer, `uv sync` installs it from the repository's `pyproject.toml` and `uv.lock`, and `uv run dataherb ...` runs it.

## Commands

| Command | What it does |
|---|---|
| `dataherb create [folder] --format yaml` | Draft `dataherb.yml` from the data files in a folder. |
| `dataherb catalog build [-o dist] [--strict]` | Build the static site from `dataherb.config.yml` and `catalog/`. |
| `dataherb catalog validate` | Validate the config and catalog entries against the JSON Schemas. |
| `dataherb catalog lint [--min-score N]` | Metadata quality report per dataset. |
| `dataherb catalog add [owner/repo ...] [--org ORG --match PREFIX]` | Write `catalog/<id>.md` entries for git repositories. |
| `dataherb catalog serve [dist]` | Serve a built site locally. |
| `dataherb status emit --target ... --job-id X --status ...` | Write a job status file. |
| `dataherb status check` | Print job health; exit 1 if any job is failing, stuck or stale. |

The JSON Schemas for catalog entries, datasets and status files live in [`dataherb/catalog/schemas/`](https://github.com/DataHerb/dataherb-python/tree/master/dataherb/catalog/schemas).
