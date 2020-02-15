---
layout: page
title: Create a GitHub Repository to Host a Dataset
permalink: /add/create-repo
exclude: true
comments: true
---


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

> After creating the repository, you could add your dataset to DataHerb index very easily. Please read [this tutorial: Add Your GitHub Repository Name to DataHerb]({{site.base_url}}/add/add-repo-to-dataherb).