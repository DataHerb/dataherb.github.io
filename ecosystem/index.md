---
layout: doc
title: Ecosystem
description: The pieces that make up DataHerb.
permalink: /ecosystem/
---

1. [DataHerb Explorer]({{ site.explorer_repo }}): the static catalog and explorer you fork and configure with `dataherb.config.yml`. [Live demo]({{ site.explorer_url }}).
2. [DataHerb Python Package]({{ "/ecosystem/dataherb-python" | relative_url }}): the `dataherb` command-line tool that drafts metadata, builds and validates catalogs, and writes job status files.
3. [Job status spec]({{ site.explorer_repo }}/blob/main/docs/job-status-spec.md): the `dataherb.status/v1` file format pipelines write so the catalog can show freshness and failures.
4. [Flora (v1)]({{ "/flora/" | relative_url }}): the original DataHerb dataset index, kept for reference.
