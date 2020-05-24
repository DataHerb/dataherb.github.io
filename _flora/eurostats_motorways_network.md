---
title: EU Motorways Network Length
herb_id: eurostats_motorways_network
contributors:
- github: emptymalei
  name: LM
data:
- description: ''
  fields:
  - description: The corresponding transport infrastructure
    name: transport_infrastructure
  - description: Country Alpha 2 Code
    name: country
  - description: NUTS 2 Code of the region
    name: nuts_2
  - description: year of the measurement
    name: year
  - description: length of the motorway network
    name: value
  - description: km, unit of length
    name: unit
  format: csv
  name: motorway networks length in unit of km in CSV format
  path: dataset/motorway_network_unit_km.csv
  size: 91K
  updated_at: '2020-04-14'
- description: ''
  fields:
  - description: The corresponding transport infrastructure
    name: transport_infrastructure
  - description: Country Alpha 2 Code
    name: country
  - description: NUTS 2 Code of the region
    name: nuts_2
  - description: year of the measurement
    name: year
  - description: length per area of the motorway network
    name: value
  - description: km per thousand km, unit of length per area
    name: unit
  format: csv
  name: motorway network length per square km in EU in CSV format
  path: dataset/motorway_network_unit_km_per_thousand_square_km.csv
  size: 105K
  updated_at: '2020-04-14'
description: The lengths of motorways in EU by NUTS 2
name: EU Motorways Network Length
references:
- link: https://ec.europa.eu/eurostat/web/transport/data/main-tables
  name: "Raw Data: Motorways network by NUTS 2 regions (tgs00114)\t@ Main Tables @\
    \ Eurostats"
- link: https://ec.europa.eu/eurostat/databrowser/view/tgs00114/default/table?lang=en
  name: Motorways network by NUTS 2 regions (DataBrowser)
- link: https://ec.europa.eu/eurostat/tgm/table.do?tab=table&init=1&language=en&pcode=tgs00114&plugin=1
  name: Motorways network by NUTS 2 regions (Tables, Graphs, Maps)
- link: https://ec.europa.eu/eurostat/cache/metadata/en/reg_tran_esms.htm
  name: 'Metadata Illustration: Regional transport statistics (reg_tran)'
repository: datumorphism/dataset-eu-motorways-network
tags:
- Transportation

---