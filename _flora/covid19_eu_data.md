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
  - description: date of the record update on the volksgezondheidenzorg website, only
      the date matters
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in NL in csv format
  path: dataset/covid-19-nl.csv
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
repository: covid19-eu-zh/covid19-eu-data
tags:
- Health

---