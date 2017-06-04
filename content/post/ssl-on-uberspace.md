+++
date = "2017-06-05T18:52:02+02:00"
description = "How easy can it be to use Let's Encrypt?"
draft = false
tags = ["Development"]
title = "SSL on uberspace"
+++

With Let's Encrypt in place there really isn't an excuse for not using HTTPS on your website!  
[Uberspace](https://uberspace.de/) really amazed me when I wanted to set up HTTPS for this blog.

With some [really well documented commands](https://wiki.uberspace.de/webserver:https#let_s-encrypt-zertifikate) you can **easily create and setup a Certificate from Let's Encrypt**.  
All you have to do is using the prepared commands:

``` bash
# create the Let's Encrypt config files
$ uberspace-letsencrypt

# create the certificate files
$ letsencrypt certonly

# add certificate to server
uberspace-add-certificate -k ~/.config/letsencrypt/live/www.domain1.tld/privkey.pem -c ~/.config/letsencrypt/live/www.domain1.tld/cert.pem
 
```


And it gets even better: You can **renew your certificate with a cronjob**, which is also described in detail on the uberspace wiki.

If you are searching for a cheap german hoster and are comfortable with using the command line I can definitively recommend Uberspace.
