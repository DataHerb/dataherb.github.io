---
layout: articles
title:  "SARS-COV-2/COVID-19 Confirmed Cases in Europe"
date: 2020-03-01 #2014-08-27T11:57:41-04:00
modified: 2020-03-01
subtitle: "Collecting official data"
authors:
- id: lm
comments: true
types:
- 'dataset'
category:
- GitHub
tag:
- 'GitHub Actions'
summary: covid19-eu-zh/covid19-eu-data is an automated COVID-19 confirmed cases data collection experiment using GitHub Actions.
dataset:
  - id: covid19_eu_data
references:
  - name: "Data Mining: Concepts and Techniques"
    link: https://www.amazon.com/Data-Mining-Concepts-Techniques-Management/dp/0123814790
---

The [covid19-eu-zh/covid19-eu-data](https://github.com/covid19-eu-zh/covid19-eu-data) repository is an experiment of data scraping and aggregation using GitHub Actions.

## Structure

The structure of the project is as follows.

```
.
├── README.md
├── dataset     #where the data files lives
├── documents   #where the raw data and files lives
├── now.json    #zeit now setup for a FAAS service
└── scripts     #scripts to download and aggregate data
```

### Scripts

We have a python script for each country for more flexible schedules of each country. We are using classes from `utils.py` so that the scripts all have similar structure.

```
scripts
├── download_at.py
├── download_de.py
├── download_es.py
├── download_fr.py
├── download_nl.py
├── download_uk.py
├── requirements.txt
└── utils.py
```

### Dataset

The dataset folder contains the full dataset of each country and the daily pdates of each country.

```
dataset
├── covid-19-at.csv
├── covid-19-de.csv
├── covid-19-nl.csv
├── covid-19-uk.csv
└── daily
    ├── at
    ├── de
    ├── nl
    └── uk
```

## GitHub Actions

We manage the pipelines using GitHub Actions. The full set of workflows is found in [the original repository](https://github.com/covid19-eu-zh/covid19-eu-data/actions).

We use Germany as an example. In the workflow for Germany, we have two trigger, pushing to master branch and schedule. The job steps are

1. Checkout the repository;
2. Setup python and install python requirements;
3. Run the python script to download and aggregate data;
4. Push data to repository.

{% highlight yaml %}
name: CI Download DE SARS-COV-2 Cases from RKI

on:
  push:
    branches:
      - master
  schedule:
    - cron:  '0 7/1 * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - name: Checkout current repo
        uses: actions/checkout@v2
      - name: Get current directory and files
        run: |
          pwd
          ls
      - uses: actions/setup-python@v1
        with:
          python-version: '3.7' # Version range or exact version of a Python version to use, using SemVer's version range syntax
          architecture: 'x64' # optional x64 or x86. Defaults to x64 if not specified
      - name: Install Python Requirements
        run: |
          python --version
          pip install -r scripts/requirements.txt
      - name: Download Records
        run: |
          python scripts/download_de.py
          ls dataset/daily/de
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git pull
          git status
          git add .
          git commit -m "Update DE Dataset" || echo "Nothing to update"
          git status
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          repository: covid19-eu-zh/covid19-eu-data
          github_token: {% raw  %}${{ secrets.GITHUB_TOKEN }}{% endraw  %}
{% endhighlight %}
