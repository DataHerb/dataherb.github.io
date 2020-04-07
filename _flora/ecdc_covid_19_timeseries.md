---
title: COVID-19 Data by ECDC
herb_id: ecdc_covid_19_timeseries
contributors:
- github: DataHerb
  name: DataHerb
data:
- description: ECDC COVID-19 data in JSON format
  fields:
  - description: Data in string format for display purpose
    name: date
  - description: name of the country or territory
    name: authority
  - description: alpha 3 code of the country of the territory
    name: alpha_3
  - description: alpha 2 code of the country or territory
    name: alpha_2
  - description: population of the country or territory in 2018
    name: population_2018
  - description: number of new confirmed cases
    name: cases
  - description: number of new deaths
    name: deaths
  format: json
  name: ECDC COVID-19 data in JSON format
  path: dataset/ecdc_covid19.json
  size: 1.9M
  updated_at: ''
- description: ECDC COVID-19 data in CSV format
  fields:
  - description: Data in string format for display purpose
    name: date
  - description: name of the country or territory
    name: authority
  - description: alpha 3 code of the country of the territory
    name: alpha_3
  - description: alpha 2 code of the country or territory
    name: alpha_2
  - description: population of the country or territory in 2018
    name: population_2018
  - description: number of new confirmed cases
    name: cases
  - description: number of new deaths
    name: deaths
  format: csv
  name: ECDC COVID-19 data in CSV format
  path: dataset/ecdc_covid19.csv
  size: 484K
  updated_at: ''
description: A Copy of the ECDC COVID-19 dataset
name: COVID-19 Data by ECDC
references:
- link: https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide
  name: "ECDC: Download today\u2019s data on the geographic distribution of COVID-19\
    \ cases worldwide"
repository: DataHerb/covid-19-ecdc
tags:
- Health

---