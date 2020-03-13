---
layout: articles
title:  "SARS-COV-2/COVID-19 Confirmed Cases in Europe"
date: 2020-03-01 #2014-08-27T11:57:41-04:00
modified: 2020-03-01
subtitle: "Collecting official SARS-CoV-2 data using GitHub Actions"
authors:
- id: covid19-eu-zh
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
charts: true
references:
  - name: "Automated Data Collection: COVID-19/SARS-COV-2 Cases in EU by Country, State/Province/Local Authorities, and Date"
    link: https://github.com/covid19-eu-zh/covid19-eu-data
---

The [covid19-eu-zh/covid19-eu-data](https://github.com/covid19-eu-zh/covid19-eu-data) repository is an experiment of data scraping and aggregation using GitHub Actions.

> covid19-eu-zh is a dynamic and energetic team. Please consider follow their [telegram channel for COVID-19 in Europe in Chinese](https://t.me/s/covid19_eu_zh_c).

## The Dataset

The dataset is being updated hourly. We are collecting data for AT, DE, ES, FR, NL, UK.[^1]

### A Demo: Confirmed Cases in Germany



<script>
function diff(ary) {
    var newA = [];
    for (var i = 1; i < ary.length; i++)  newA.push( ary[i] - ary[i - 1] )
    return newA;
}

function element_diff(arrA,arrB) {
    var newA = [];
    for (var i = 1; i < arrA.length; i++)  newA.push( arrA[i]/arrB[i] )
    return newA;
}

de_url = "https://raw.githubusercontent.com/covid19-eu-zh/covid19-eu-data/master/dataset/covid-19-de.csv"

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


function uniqueRegions(de_data) {
  return de_data.map(row => row.state ).filter(onlyUnique)
}

function regionTraces (de_data, keyword) {

  de_total_cases = de_data.filter(row => (row.state === keyword) && (new Date(row.datetime).getHours() == 15) ).map(row => row.cases);

  de_total_datetime = de_data.filter(row => (row.state === keyword) && (new Date(row.datetime).getHours() == 15)).map(row => row.datetime);
  de_total_datetime_diff = diff(de_total_datetime.map(dt => new Date(dt))).map(dt => dt/(1000*60*60))
  de_total_cases_diff = diff(de_total_cases)

return {
  "cases": de_total_cases,
  "datetime": de_total_datetime,
  "diff": de_total_cases_diff
  }
}

Plotly.d3.csv(
  de_url, (err, de_data) => {

regions = uniqueRegions(de_data)
regions = regions.filter(el => (el != "sum"))
regions.unshift("sum")
console.log(
  "all regions in germany: ",
  regions
)

function makePlot(region) {

  de_total = regionTraces(de_data, region)

  var trace_total = {
    x: de_total["datetime"],
    y: de_total["cases"],
    mode: 'markers',
    type: 'bar',
    name: `Total (${region})`
  };

  var trace_daily = {
    x: de_total["datetime"].slice(1,de_total_datetime.length),
    y: de_total["diff"],
    mode: 'markers+lines',
    yaxis: 'y2',
    type: 'line',
    name: `Daily (${region})`
  };

  var data = [
    trace_total, trace_daily
  ];

  var layout = {
    title: `SARS-COV-2 Confirmed Cases (${region})`,
    yaxis: {title: 'Total Confirmed Cases'},
    yaxis2: {
      title: 'Daily Confirmed Cases',
      titlefont: {color: 'rgb(148, 103, 189)'},
      tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right'
    },
    legend: {"orientation": "h"}
  };

  Plotly.newPlot("de-cases", data, layout);
}

makePlot("sum")


var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    regionSelector = innerContainer.querySelector('.region');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(regions, regionSelector);

function updateRegion(){
    makePlot(regionSelector.value);
}

regionSelector.addEventListener('change', updateRegion, false);

  }
)

</script>

<div id="barcharts">
    <div class="barcharts" data-num="0">
      <div class="control-row">
          Select Region: <select class="button region">
          </select>
        </div>
      <div class="plot" id="de-cases"></div>
    </div>
  </div>




## Data Collection

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

We use Germany as an example. In the workflow for Germany, we have two triggers, pushing to master branch and schedule. The job steps are

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


[^1]: For Spain, we only download the record PDF files. For UK, we are only collecting England for now.
