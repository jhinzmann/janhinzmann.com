+++
title = "About this blog"
date = "2017-06-04"
slug = "about-this-blog"
tags = []
description = "insights into the history, future and technical aspects of the blog of Jan Hinzmann"
type = "page"
[menu.main] 
  weight = 30
+++

## History
The idea of creating a blog is tracking me for some time now.  
I've seen so many posts that described how helpful it can be for developers to write about what you do in order to reflect and/or document your thoughts.  
The second and maybe even more important aspect for me is, that I can fiddle around with some new things.  
Some months ago I started with some scribbles. Since I'm no designer and I didn't want to use a ready theme, I knew I would go with a fairly simple design.  
After that I tried to write my first post ([First oss contribution]({{< relref "first-oss-contribution.md" >}})) and started with basic templating.  

At first I wanted to use [Ghost](https://ghost.org/) for the blog because

* it looked promising, 
* I wanted to use markdown for writing and 
* an colleague of mine made some positive experience with it.

At that time the 1.0 release of [Ghost](https://ghost.org) seemed to be just around the corner. But after some weeks Ghost 1.0 was still in alpha state, so I decided to give [Hugo](https://gohugo.io/) a try.

## Under the hood

This website is created with [Hugo](https://gohugo.io/).
Hugo is a static site generator written in Go which I use on my local machine for development only. On the serverside this whole website consists of ready to serve html files which makes the hosting part quite easy.
The files are hosted on [Uberspace](https://uberspace.de/). Uberspace offers smaller hosting setups with an huge amount of possibilities from the technical perspective. One example is the easy integration of [Let's encrypt ]({{< relref "ssl-on-uberspace.md" >}}) for the SSL-Certificate.
![Uberspace Badge](/img/uberspace-badge.png)

For the frontend I use a basic Gulp Task that compiles my SCSS to CSS which is then inlined by Hugo.

If you want to have a look at the sourcecode of this website, you can find it [on GitHub](https://github.com/jhinzmann/janhinzmann.com).

## Roadmap

For the future I hope to find some time to add more posts about different aspects of programming or other stuff I think about.
Moreover I want to implement some things for this blog like:

- [ ] automatic deployment
- [ ] evaluate comments
- [x] using hugo taxonomies
- [x] inlining critical css
- [x] SSL
