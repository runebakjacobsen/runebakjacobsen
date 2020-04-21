---
path: /til-20-04-2020
date: 2020-04-20T07:02:49.352Z
title: Today I Learned 20-04-2020
---
Small things today but everything counts!

I had some speed issues with a Gatsby site the initial load was a bit slower than I wanted and knew it should be. Turns out it was the intercom widget on the site that really bugged it down. The solution was super easy and actually built in to the gatsby plugin I am using and it was to give it a delay. So delaying the widget 5 seconds improved the pagespeed score on lighthouse from about 40 to 70 on mobile. Super nice!

More Gatsby performance was needed and [Gatsby has a nice site about how and what to cache](https://www.gatsbyjs.org/docs/caching/). I have the project hosted on netilfy and already had a _`headers` file there so I didn't want to install another plugin. I made this file to take care of everything

```
/static/*
    cache-control: public
    cache-control: max-age=31536000
    cache-control: immutable

/*.woff2
Cache-Control: public, max-age=31536000, immutable

/*.pdf
Cache-Control: public, max-age=31536000, immutable

/*.ico
Cache-Control: public, max-age=31536000, immutable

/*.flv
Cache-Control: public, max-age=31536000, immutable

/*.jpg
Cache-Control: public, max-age=31536000, immutable

/*.jpeg
Cache-Control: public, max-age=31536000, immutable

/*.png
Cache-Control: public, max-age=31536000, immutable

/*.webp
Cache-Control: public, max-age=31536000, immutable

/*.css
Cache-Control: public, max-age=31536000, immutable

/*.js
Cache-Control: public, max-age=31536000, immutable

/*.html
Cache-Control: public, max-age=0, must-revalidate

/sw.js
cache-control: public, max-age=0, must-revalidate

/public/page-data/*
cache-control: public, max-age=0, must-revalidate

/app-data.json
cache-control: public, max-age=0, must-revalidate
```

And last but not least I found a service to make it easy to get custom domain emails without hosting it or having to use GSuite or Office365 namely <https://improvmx.com/>. 

I'm out! See ya