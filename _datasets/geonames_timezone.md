---
title: Geoname Timezones
dataset_id: geonames_timezone
contributors:
- github: datumorphism
  name: Datumorphism
data:
- fields:
  - description: Alpha 2 country code
    name: country_code
  - description: IANA timezone id, www.iana.org
    name: timezone_id
  - description: GMT offset in January 1st
    name: gmt_offset
  - description: Day light saving offset in July 1st
    name: dst_offset
  - description: Raw offset, independant of DST
    name: raw_offset
  format: csv
  name: timezones in csv format
  path: dataset/geonames_timezone.csv
  size: 14K
  updated_at: '2020-02-12'
- fields:
  - description: Alpha 2 country code
    name: country_code
  - description: IANA timezone id, www.iana.org
    name: timezone_id
  - description: GMT offset in January 1st
    name: gmt_offset
  - description: Day light saving offset in July 1st
    name: dst_offset
  - description: Raw offset, independant of DST
    name: raw_offset
  format: json
  path: dataset/geonames_timezone.json
  size: 58K
  updated_at: '2020-02-12'
description: IANA Timezone IDs in different countries from Geonames
name: Geoname Timezones
references:
- link: https://download.geonames.org/export/dump/
  name: Geonames Download Server
repository: datumorphism/geonames-timezones
tags:
- Geo

---