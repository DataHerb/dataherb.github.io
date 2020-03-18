---
title: SARS-COV-2/COVID-19 Cases in Europe
herb_id: covid19_eu_data
contributors:
- github: covid19-eu-zh
  name: covid19-eu-zh
data:
- description: Records of SARS-COV-2 Cases in Germany
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: State of Germany in German
    name: state
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in Germany in csv format
  path: dataset/covid-19-de.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Austria
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: State of Austria
    name: state
  - description: number of cases by the specified datetime
    name: cases
  - description: recovered patients. started tracking on 2020-03-13
    name: recovered
  - description: number of deaths. started tracking on 2020-03-13
    name: deaths
  - description: datetime of the record
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in AT in csv format
  path: dataset/covid-19-at.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Netherland
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: city in Netherland
    name: city
  - description: number of cases by the specified datetime
    name: cases
  - description: population of the city
    name: population
  - description: number of cases per 100k population by the specified datetime
    name: cases/100k pop.
  - description: date of the record update on the volksgezondheidenzorg website, only
      the date matters
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in NL in csv format
  path: dataset/covid-19-nl.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in England
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: local authorities in England, city, town, borough, etc.
    name: authority
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in England in csv format
  path: dataset/covid-19-england.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Scotland
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: local authorities in England, city, town, borough, etc.
    name: authority
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in Scotland in csv format
  path: dataset/covid-19-scotland.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Sweden
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: local authorities in England, city, town, borough, etc.
    name: authority
  - description: number of cases by the specified datetime
    name: cases
  - description: number of cases per 100k population by the specified datetime
    name: cases/100k pop.
  - description: percent of cases by the specified datetime
    name: percent
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in SE in csv format
  path: dataset/covid-19-england.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in FR
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: local provinces or oversea authorities in France, Oversea and Metropolis
      are also added as conditional sum
    name: authority
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in FR in csv format
  path: dataset/covid-19-fr.csv
  size: null
  updated_at: ''
description: SARS-COV-2/COVID-19 Cases in Europe by Country, State, and Date
name: SARS-COV-2/COVID-19 Cases in Europe
references:
- link: https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html
  name: 'SARS-CoV-2: Fallzahlen in Deutschland, China und weltweit'
- link: https://www.sozialministerium.at/Themen/Gesundheit/Uebertragbare-Krankheiten/Infektionskrankheiten-A-Z/Neuartiges-Coronavirus.html
  name: Neuartiges Coronavirus (COVID-19)
- link: https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19#node-coronavirus-covid-19-meldingen
  name: volksgezondheidenzorg.info in NL
- link: https://www.gov.uk/government/publications/coronavirus-covid-19-number-of-cases-in-england/coronavirus-covid-19-number-of-cases-in-england
  name: Public Health England
repository: covid19-eu-zh/covid19-eu-data
tags:
- Health

---