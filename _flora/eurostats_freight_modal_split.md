---
title: Eurostats Freight Modal Split
herb_id: eurostats_freight_modal_split
contributors:
- github: emptymalei
  name: LM
data:
- description: ''
  fields:
  - description: Name of the transport mode
    name: transport_mode
  - description: Alpha 2 code of the country
    name: country
  - description: Year of the data
    name: year
  - description: The sum of each mode for each year for each country should be 1
    name: value
  - description: If the value is estimated
    name: is_estimated
  - description: If the value is applicable
    name: not_applicable
  format: csv
  name: freight transport mode share measured by tonne-kilometers
  path: dataset/eurostats_freight_modal_split.csv
  size: 73K
  updated_at: '2020-04-01'
description: The share of each transport modes measured by tonne-kilometers
name: Eurostats Freight Modal Split
references:
- link: https://ec.europa.eu/eurostat/web/transport/data/main-tables
  name: "Raw Data: Modal split of freight transport (t2020_rk320)\t@ Main Tables @\
    \ Eurostats"
- link: https://ec.europa.eu/eurostat/databrowser/view/t2020_rk320/default/table?lang=en
  name: Modal split of freight transport (Data Browser)
- link: https://ec.europa.eu/eurostat/tgm/refreshTableAction.do?tab=table&plugin=1&pcode=t2020_rk320&language=en
  name: "Modal split of freight transport\tCode: t2020_rk320 (% in total inland freight\
    \ tonne-km)"
repository: datumorphism/dataset-eurostats-freight-modal-split
tags:
- Transportation

---