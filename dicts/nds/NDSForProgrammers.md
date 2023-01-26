#  NDS for Programmers


This is the beginning to the top-down documentation for NDS. Though there are
comments in the source files, this document is intended to bring those
together.


##  Summary of tech stack


The following things are required to get NDS running on its own


- Python 3.9
- Flask (the web framework)
- Jinja template engine
- lxml


Outside of this, you may want to run NDS with a web server such as apache or
nginx.


##  Project dependencies and Makefile stuff


- saxon9.jar
- xmllint


##  How lookups work


###  FST - Lexicon connections


###  extending lookups and generation


##  Rendering: the template system


##  The reader plugin / bookmarklet


###  Development environment, and how to debug / test locally


Will elaborate later, but, wihin the *nds-reader* directory, I have been
running `python -m SimpleHTTPServer` in one terminal, `make rebuild` on
changes in another. Then I go to the test html pages at `localhost:8000/`


A handy tool for running a command while watching for code changes is [pywatch]()


If there is something that doesn't work within the test `html` files, you can
also add a `make bookmarklet-install`, and then run the NDS server locally,
go to the `read/` page and click the button. This is less ideal because less
debugging options will be available.


TODO: write more, but for now, collecting notes and ideas while they are fresh


###  SSL / HTTPS considerations


In order for the reader to work over SSL, on Facebook and Wikipedia, some
sneakiness was required, because the resources couldn't simply be served for
all projects on gtweb in the same way as projects on gtoahpa. The SSL
certificate we have is only good for one subdomain, thus the easiest way was to
get other projects to use this subdomain instead.


This solution requires two parts:


1. Configuration information in NDS that will point the reader to the SSL
subdomain when it downloads the required JS and CSS files; and also to point
the reader at the SSL domain when making dictionary API requests. Following is
a snippet of the YAML config for the project *kyv*:


```
ReaderConfig:
  Settings:
    # host path without scheme (https, http) to reader lookup API, no trailing
    # slash.
    api_host: "sanit.oahpa.no/reader/kyv"
    # URL to serve media from, minus scheme, and no trailing slash.
    media_host: "sanit.oahpa.no" 
```


2.) A setup within nginx to allow proxying of specific requests to the non-SSL
projects via the SSL project. This is left to the reader with admin access to
inspect nginx config files, I will not paste them here for sikkerhets skyld.


##  Debugging


###  Logging


TODO: sprinkle some debug log statements throughout the code


##  Testing 


##  Where there be dragons




