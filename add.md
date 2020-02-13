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

1. Go to [github.com and click on the + on the top right](https://github.com/new)
2. Create a repository for your data.
3. Create a folder `dataset` and place your data file in this folder.
4. Inside the folder `dataset` alongside with your data file, create a file `metadata.yml`  with the following content:

   ```
   name: [Name of your dataset]
   description: [Describe your dataset here]
   contributors:
   - name: [Name of the the first contributor]
   data:
   - path: [path_to_your_data_file.csv]
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

   For example, one could have the following folder structure in the repository `DataHerb/currency-exchange`;

   ```
   .
   ├── README.md
   └── dataset
       ├── ecb_currency_exchange.csv
       └── metadata.yml
   ```

   The `metadata.yml` could have the following content

   ```
   name: Currency Exchange Rate
   description: Currency exchange rate from central european bank on 2020-02-05.
   contributors:
   - name: Miao
   data:
   - path: ecb_currency_exchange.csv
     format: csv
     size: 452B
     fields:
     - name: country
       description: alpha 3 code of the countries
     - name: to_euro_rate
       description: The rate to convert it to EUR
    references:
    - name: Euro foreign exchange reference rates from European Central Bank
      link: https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html
   ```


### Add your GitHub repository name to DataHerb.


1. Go to [DataHerb/dataherb-flora](https://github.com/DataHerb/dataherb-flora).
2. Create a new file inside the folder `flora`: [Use this link and click on the *Create new file* button](https://github.com/DataHerb/dataherb-flora/tree/master/flora).

   The file name should be descriptive. Do not use spaces in the file name. The file should contain

   ```
   - name: Name of the dataset
     repository: repository_owner/repository_name
     tags:
       - Tag your data
   ```

   For example, one could have a file with the name `ecb_currency_exchange.yml` and the following content.

   ```
   - name: Currency Exchange Rate from European Central Bank
     repository: Dataherb/currency-exchange
     tags:
       - Finance
   ```

3. Create a new Pull Request and tell us what you have added.

> We do not take your data. The data page will link to your GitHub repository and the corresponding data files.

