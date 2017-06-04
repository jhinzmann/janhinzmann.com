+++
date = "2017-02-25"
description = "My first try on contributing to open source back in 2015"
draft = false
tags = ["Development", "Open source"]
title = "My first contribution to open source"

+++

## Back in 2015
The first time I tried to contribute to open source was back in **October 2015**.
I used Sublime together with [Sublime-JSHint](https://github.com/victorporof/Sublime-JSHint) for some project and noticed 
that every file was linted, even the files that I excluded in a `.jshintignore`.

A quick search lead to two issues on GitHub where **other users requested support** for `.jshintignore` files.
One issue was 3 month old, the other one was over 1.5 years old.
Besides the author of Sublime-JSHint responded to the older one, mentioning that it would be a nice feature, no pull request was open.
So I decided to give it a try and forked the plugin.

The plugin was mostly written in python which I didn't use to that day, so I spend some time to look into it.
After finding a way to properly search for `.jshintignore` files and checking files against the given ignore patterns, 
I ended up with **adding round about 60 lines of python code** to the plugin (excluding the python-path-specification library I added).

I prepared a detailed pull request message, linked both issues and opened **my first pull request on GitHub**.
I felt very excited about it and checked regularly for a responses on the pull request, but nothing happened.
As time passed I switched to other hinting/linting systems and actually forgot about my open pull request.
## Better late than never
In February 2017 the pull request was brought back to my attention by an e-mail notification with the following comment:

> I need this so much, 2017 and still not merged

I looked into the two linked issues and found out, that the author of the plugin **requested a rebase of my pull request 
3 month after** I opened it. I didn't get a notification since it was not my issue he commented on and i was not mentioned.
I thought that jshint was outdated but the responses showed me that it was still used. 
I rebased the pull request. As of today it is still not merged 
but it **felt really good to know that it helped at least one dev** out there 
who requested the feature and could use my fork with support for a `.jshintignore` file.
