---
layout: page
title: Add a Dataset
permalink: /add/
exclude: true
comments: true
---

A dataset is a folder of data files plus a metadata file (`dataherb.yml`) next to them. The folder can be a git repository, an S3 prefix, a folder on a web server, or a folder in the explorer repository. Listing it in a catalog takes three steps.

## 1. Describe the data

In the folder that holds the files:

```bash
# [infer] adds duckdb for exact types and row counts of CSV, Parquet and JSON
uv tool install "dataherb[infer] @ git+https://github.com/DataHerb/dataherb-python"
dataherb create . --id orders-daily --name "Daily orders" --format yaml --no-input
```

This writes `dataherb.yml` with one resource per data file, with columns and their types. Fill in the description, owner, tags, license and update frequency. The metadata follows [Frictionless Data Package](https://specs.frictionlessdata.io/data-package/), so v1 `dataherb.json` files and `.dataherb/metadata.yml` folders keep working.

Prefer Parquet for anything over a few MB: the explorer reads only the columns and row groups a query needs.

## 2. Put it where the catalog can read it

- **Git repository**: commit `dataherb.yml` at the repository root.
- **S3**: upload the folder, e.g. `aws s3 sync . s3://my-company-datalake/datasets/orders-daily/`.
- **The explorer repository**: put it under the `local` store's folder.

## 3. List it in the catalog

Add one Markdown file to `catalog/` and open a pull request. The fields go in the YAML front matter; the body is free Markdown shown on the dataset page (caveats, how to join it, who uses it).

```markdown
---
id: orders-daily
store: datalake            # git: use `repo: my-org/orders-daily`
prefix: datasets/orders-daily/
---

## Caveats

Refunds show up one day after the order.
```

For git repositories, `dataherb catalog add` writes these files for you:

```bash
dataherb catalog add my-org/orders-daily
# every repo of an org whose name starts with "dataset"
dataherb catalog add --org my-org --match dataset
```

CI runs `dataherb catalog validate` and `dataherb catalog lint` on the pull request, and the site rebuilds after merge. With `catalog.discover` configured for an S3 prefix, step 3 is unnecessary.

The full guide is [docs/adding-datasets.md]({{ site.explorer_repo }}/blob/main/docs/adding-datasets.md).

## Listing a dataset on the public DataHerb catalog

The [public DataHerb Explorer]({{ site.explorer_url }}) lists the DataHerb `dataset-*` repositories. To add an open dataset, open a pull request on [DataHerb/dataherb-explorer]({{ site.explorer_repo }}) with a new `catalog/<id>.md`.

> The v1 flow (a `.dataherb` folder plus an entry in dataherb-flora) is kept for reference: [create a repository]({{ "/add/create-repo" | relative_url }}), [link it with the flora]({{ "/add/link-repo-with-dataherb" | relative_url }}).
