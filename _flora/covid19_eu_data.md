---
title: SARS-COV-2/COVID-19 Cases in Europe
herb_id: covid19_eu_data
contributors:
- github: covid19-eu-zh
  name: covid19-eu-zh
data:
- description: Records of SARS-COV-2 Cases in Switzerland
  fields:
  - description: alpha 2 code of the country (CH)
    name: country
  - description: NUTS 2 (regions) in Switzerland
    name: nuts_2
  - description: number of cases by the specified datetime
    name: cases
  - description: local datetime of the record
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in Switzerland in csv format
  path: dataset/covid-19-ch.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2 Cases in Germany
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: NUTS 1 (states) in Germany
    name: nuts_1
  - description: number of cases by the specified datetime
    name: cases
  - description: number of cases per 100k population; DE did not track this in the
      beginning thus missing values are found
    missing:
    - description: not tracked on those dates
      value: ''
    name: cases/100k pop.
  - description: number of deaths; DE did not track this in the beginning thus missing
      values
    missing:
    - description: not tracked on those dates
      value: ''
    name: deaths
  - description: local datetime of the record
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
  - description: NUTS 2 administrative divisions (states) in Austria
    name: nuts_2
  - description: number of cases by the specified datetime
    name: cases
  - description: recovered patients. started tracking on 2020-03-13
    name: recovered
  - description: number of deaths. started tracking on 2020-03-13
    name: deaths
  - description: local datetime of the record
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
  - description: LAU (city) in Netherland
    name: lau
  - description: number of cases by the specified datetime
    name: cases
  - description: population of the city
    name: population
  - description: number of cases per 100k population by the specified datetime
    name: cases/100k pop.
  - description: local date of the record update on the volksgezondheidenzorg website,
      only the date matters
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
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: local datetime of the record update on the website
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
  - description: local authorities in Scotland, city, town, borough, etc.
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in Scotland in csv format
  path: dataset/covid-19-scotland.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Wales
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: local authorities in Wales
    missing:
    - description: Not yet assigned these cases to local authorities
      value: To be confirmed
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: local datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in Wales in csv format
  path: dataset/covid-19-wales.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Sweden
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: NUTS 3 (counties) in Sweden
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: number of cases per 100k population by the specified datetime
    name: cases/100k pop.
  - description: percent of cases by the specified datetime
    name: percent
  - description: local datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in SE in csv format
  path: dataset/covid-19-se.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in FR
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: local provinces or oversea authorities in France, Oversea and Metropolis
      are also added as conditional sum
    name: nuts_2
  - description: number of cases by the specified datetime
    name: cases
  - description: local datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in FR in csv format
  path: dataset/covid-19-fr.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in PL
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: NUTS 2 (provinces) in PL or sum as the total
    name: nuts_2
  - description: number of cases by the specified datetime
    name: cases
  - description: number of deaths by the specified datetime
    name: deaths
  - description: local datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in PL in csv format
  path: dataset/covid-19-pl.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in CZ
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: NUTS 3 (regions, Kraje) in CZ
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in CZ in csv format
  path: dataset/covid-19-cz.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in EU from ECDC
  fields:
  - description: alpha 2 code of the country
    name: country
  - description: number of cases by the specified datetime
    name: cases
  - description: number of deaths by the specified datetime
    name: deaths
  - description: CET datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases From ECDC
  path: dataset/covid-19-ecdc.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Italy
  fields:
  - description: alpha 2 code of the country (IT)
    name: country
  - description: NUTS 2 (regions) in IT, corresponds to NUTS 2
    missing:
    - description: unassigned indicates the cases are not allocated to the provinces
      value: unassigned
    name: nuts_2
  - description: NUTS 3 (provinces) in IT, corresponds to NUTS 3
    missing:
    - description: Missing value means the cases are for higher administrative division
        levels
      value: ''
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: local datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in IT
  path: dataset/covid-19-it.csv
  size: null
  updated_at: ''
- description: Records of SARS-COV-2/COVID-19 Cases in Norway
  fields:
  - description: alpha 2 code of the country (NO)
    name: country
  - description: NUTS 3 (counties) in Norway, corresponds to NUTS 3
    name: nuts_3
  - description: number of cases by the specified datetime
    name: cases
  - description: datetime of the record update on the website
    name: datetime
  format: csv
  name: SARS-COV-2/COVID-19 Cases in NO
  path: dataset/covid-19-no.csv
  size: null
  updated_at: ''
description: SARS-COV-2/COVID-19 Cases in Europe by Country, State, and Date
name: SARS-COV-2/COVID-19 Cases in Europe
references:
- link: https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html
  name: 'DE: SARS-CoV-2: Fallzahlen in Deutschland, China und weltweit'
- link: https://www.sozialministerium.at/Themen/Gesundheit/Uebertragbare-Krankheiten/Infektionskrankheiten-A-Z/Neuartiges-Coronavirus.html
  name: 'AT: Neuartiges Coronavirus (COVID-19)'
- link: https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19#node-coronavirus-covid-19-meldingen
  name: 'NL: volksgezondheidenzorg.info'
- link: https://www.gov.uk/government/publications/coronavirus-covid-19-number-of-cases-in-england/coronavirus-covid-19-number-of-cases-in-england
  name: 'England: Public Health England'
- link: https://www.gov.scot/coronavirus-covid-19/
  name: 'Scotland: Coronavirus in Scotland - Scottish Government'
- link: https://phw.nhs.wales/news/public-health-wales-statement-on-novel-coronavirus-outbreak/
  name: 'Wales: Public Health Wales statement on Novel Coronavirus (COVID-19) outbreak
    - NHS Wales'
- link: https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2
  name: 'PL: Serwis Rzeczypospolitej Polskiej'
- link: https://onemocneni-aktualne.mzcr.cz/covid-19
  name: "CZ: P\u0159ehled situace v \u010CR: COVID-19"
- link: https://www.ecdc.europa.eu/en/cases-2019-ncov-eueea
  name: 'ECDC: Situation update for the EU/EEA and the UK, as of 19 March 2020'
- link: https://github.com/pcm-dpc/COVID-19
  name: 'IT: pcm-dpc/COVID-19 on GitHub'
- link: https://www.fhi.no/en/id/infectious-diseases/coronavirus/daily-reports/daily-reports-COVID19/
  name: 'NO: Daily reports about coronavirus disease (COVID-19)'
- link: https://github.com/daenuprobst/covid19-cases-switzerland
  name: 'CH: daenuprobst/covid19-cases-switzerland on GitHub'
- link: https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-et-infections-respiratoires/infection-a-coronavirus/articles/infection-au-nouveau-coronavirus-sars-cov-2-covid-19-france-et-monde
  name: 'FR: Infection au nouveau Coronavirus (SARS-CoV-2), COVID-19, France et Monde'
- link: https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/
  name: 'SE: Antal fall av covid-19 - folkhalsomyndigheten'
repository: covid19-eu-zh/covid19-eu-data
tags:
- Health

---