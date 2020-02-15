---
layout: page
title: Add Your GitHub Repository Name to DataHerb
permalink: /add/add-repo-to-dataherb
exclude: true
comments: true
---

> Before adding your github repository to DataHerb, we reqire a `.dataherb` folder and a `metadata.yml` file in your `.dataherb` folder. Please read [this tutorial: Create a GitHub Repository to Host a Dataset]({{site.base_url}}/add/create-repo).

### Add your GitHub repository name to DataHerb

1. Go to [DataHerb/dataherb-flora](https://github.com/DataHerb/dataherb-flora).
2. Create a new file inside the folder `flora`: [Use this link and click on the *Create new file* button](https://github.com/DataHerb/dataherb-flora/tree/master/flora).

   The file name should be descriptive. Do not use spaces in the file name. The file should contain

   ```
   - name: Name of the dataset
     repository: repository_owner/repository_name
     tags:
       - A tag your data
       - Another tag for your data
   ```

   For example, one could have a file with the name `ecb_currency_exchange.yml` and the following content.

   ```
   - name: geonames_timezone
     repository: datumorphism/geonames-timezones
     tags:
       - Geo
   ```

3. Create a new Pull Request and tell us what you have added.

> We do not take your data. The data page will link to your GitHub repository and the corresponding data files.
