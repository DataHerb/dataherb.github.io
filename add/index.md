---
layout: page
title: List Your Dataset on DataHerb
permalink: /add/
exclude: true
comments: true
---

Adding your dataset is free and easy. You manage your datasets, DataHerb makes it easy to be accessed.

> Datasets that can be used to enhance machine learning datasets are the priorities at the moment. These datasets can be very helpful to the open data community as well as all data scientists/engineers.

## List Your Dataset on DataHerb

It only takes **two steps**:

1. [Create your GitHub repository to host your data.](#create-your-github-repository-to-host-your-data)
2. [Add your GitHub repository name to DataHerb.](#add-your-github-repository-name-to-dataherb)

Everything else will be done automatically by GitHub Actions.

### Create your GitHub repository to host your data

> If you have generic questions about GitHub, please [leave a comment](#comments) so we could improve this tutorial.

1. Go to [github.com and click on the + on the top right](https://github.com/new)
2. Create a repository for your data. [GitHub Help](https://help.github.com/en/github/getting-started-with-github/create-a-repo)
3. Create a `.dataherb` folder in the root of your repository.
4. Place your data files in a folder such as `dataset`.
5. Create a file `metadata.yml` in the `.dataherb` with the following content:

   ```
   name: [Name of your dataset]
   description: [Describe your dataset here]
   contributors:
   - name: [Name of the the first contributor]
   data:
   - name: [name of your data file, optional]
     path: [path_to_your_data_file.csv]
     format: csv
     size: [size of your data file]
     fields:
     - name: [name of the first colomn]
       description: [description of the first column]
     - name: [name of the second colomn]
       description: [description of the second column]
   references:
   - name: [Name of the first reference]
     link: [https://link_to_your_first_reference]
   ```

   For example, the folder structure in this demo project `datumorphism/geonames-timezones` is

   ```
   .
   ├── README.md
   ├── dataset
   │   ├── geonames_timezone.csv
   │   └── geonames_timezone.json
   └── .dataherb
       └── metadata.yml
   ```

   The `.dataherb/metadata.yml` file has the following content.

   ```
   name: Geoname Timezones
   description: IANA Timezone IDs in different countries from Geonames
   contributors:
   - name: Datumorphism
      github: datumorphism
   data:
   - path: dataset/geonames_timezone.csv
      name: timezones in csv format
      format: csv
      size: 14K
      updated_at: "2020-02-12"
      fields:
         - name: country_code
         description: Alpha 2 country code
         - name: timezone_id
         description: IANA timezone id, www.iana.org
         - name: gmt_offset
         description: GMT offset in January 1st
         - name: dst_offset
         description: Day light saving offset in July 1st
         - name: raw_offset
         description: Raw offset, independant of DST
   - path: dataset/geonames_timezone.json
      format: json
      size: 58K
      updated_at: "2020-02-12"
      fields:
         - name: country_code
         description: Alpha 2 country code
         - name: timezone_id
         description: IANA timezone id, www.iana.org
         - name: gmt_offset
         description: GMT offset in January 1st
         - name: dst_offset
         description: Day light saving offset in July 1st
         - name: raw_offset
         description: Raw offset, independant of DST
   references:
   - name: Geonames Download Server
      link: https://download.geonames.org/export/dump/
   ```
6. Add, Commit, and Push the contents to GitHub.


### Add your GitHub repository name to DataHerb.


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
