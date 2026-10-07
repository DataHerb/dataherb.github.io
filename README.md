# dataherb.github.io

The DataHerb website, served at https://dataherb.github.io and built by GitHub Pages with Jekyll.

DataHerb v2 is [DataHerb Explorer](https://github.com/DataHerb/dataherb-explorer), a static, forkable data catalog and explorer ([live demo](https://dataherb.github.io/dataherb-explorer/)), with the `dataherb` CLI from [dataherb-python](https://github.com/DataHerb/dataherb-python).

## Layout

```
index.html              landing page
get-started/, add/, job-status.md, ecosystem/, about.md, community/   docs pages (layout: doc)
_data/site_nav.yml      header links;  _data/docs_nav.yml  docs sidebar
_layouts/base.html      page shell; doc, articles, post, dataherb (Flora herb pages) build on it
_includes/v2/           head, header, footer, logo
assets/v2/site.css      the whole design (light and dark); site.js for nav, tabs, copy buttons, TOC
_flora/, flora/         the v1 Flora archive;  _articles/  articles
```

Preview locally with `bundle install && bundle exec jekyll serve`.
