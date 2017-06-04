+++
date = "2017-03-20"
description = "My first successfull contribution to open source"
draft = false
tags = ["Development", "Open source"]
title = "Contributing to Neos and Flow"

+++

After my [first attempt]({{< ref "first-oss-contribution.md" >}}) to contribute to open source some time passed until I tried again.  

## Initial problem

One day I wanted to use the PDOCacheBackend for Flow in a project in order to speed up the cache invalidation 
in a Neos backend on a shared hosting environment.
After I added the config to use the Database as backend for the content caches, 
I noticed that **Neos did not create the needed tables on its own**.
I couldn't find anything about this in the documentation,
so I search the codebase and found a `DDL.sql` that was intended to be used for creating the tables 
but actually was only used when storing the caches in a SQLite database.

## Second problem

With the new tables in place I ran into the next problem: some page contents were cropped.
It turned out, that the **database column for the cache entries was to short**. 
The `DDL.sql` used `text` for storing the cached content which defaults to 64kB on MySQL. 
From the commit history I could tell that this was no newly introduced bug. The `DDL.sql` wasn't modified since several versions.
I thought that this kind of bug must have been noticed by others, but I couldn't find anything about it. 
Therefore I checked the SQLite Documentation for an explanation and found out, that SQLite doesn't have fixed-with columns.
Since the whole process, which should have been a task of 5 minutes took way to long and I couldn't find anything related in github issues or the documentation,
I decided to open an [issue](https://github.com/neos/flow-development-collection/issues/884).

## Solution(s)

**Within 4 hours I got the first response** from one of the core developers. 
On the next day I opened two pull request. One for

* [updateing the documentation accordingly](https://github.com/neos/flow-development-collection/pull/885) and one for
* [increasing the max-length on the cache table](https://github.com/neos/flow-development-collection/pull/886).

**Within 40 minutes(!) one of the core developers added some tweaks** to my pull request and gave some feedback. That was way faster than I ever expected.
After some time both pull requests got merged. Obviously these were rather small changes,
but it showed me **how easy it is to contribute to Neos and Flow** and it motivated me to do even more pull requests where I

* [fixed some examples](https://github.com/neos/neos-development-collection/pull/1444) in the Neos documentation and
* [resolved a bug](https://github.com/neos/neos-googleanalytics/pull/24) in the Neos Google Analytics package.
