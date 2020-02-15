---
title: Geonames Postal Codes and Geocoordinates
dataset_id: geonames_postal_codes_geocoordinates
contributors:
- github: datumorphism
  name: Datumorphism
data:
- fields:
  - description: Alpha 2 country code where the postal code is affiliated with
    name: country_code
  - description: postal code in string format
    name: postal_code
  - description: latitude of the postal code
    name: latitude
  - description: longitude of the postal code
    name: longitude
  format: csv
  path: dataset/postal_codes_and_coordinates.csv
  size: 23M
  updated_at: '2020-02-13'
- fields:
  - description: alpha 2 country code the postal code belongs
    name: country_code
  - description: postal code in string format
    name: postal_code
  - description: latitude of the postal code
    name: latitude
  - description: longitude of the postal code
    name: longitude
  format: json
  path: dataset/geonames_timezone.json
  size: 69M
  updated_at: '2020-02-13'
description: 'Postal codes and their geocoordinates parsed from geonames data. The
  dataset covers the following countries: AD, AR, AS, AT, AU, AX, AZ, BD, BE, BG,
  BM, BR, BY, CA, CH, CL, CO, CR, CZ, DE, DK, DO, DZ, EE, ES, FI, FM, FO, FR, GB,
  GF, GG, GL, GP, GT, GU, HR, HU, IE, IM, IN, IS, IT, JE, JP, KR, LI, LK, LT, LU,
  LV, MC, MD, MH, MK, MP, MQ, MT, MW, MX, MY, NC, NL, NO, NZ, PH, PK, PL, PM, PR,
  PT, PW, RE, RO, RS, RU, SE, SG, SI, SJ, SK, SM, TH, TR, UA, US, UY, VA, VI, WF,
  YT, ZA.'
name: Geonames Postal Codes and Geocoordinates
references:
- link: https://download.geonames.org/export/zip/
  name: Geonames Zip Download Server
repository: datumorphism/geonames-postal-codes-geocoordinates
tags:
- Geo

---