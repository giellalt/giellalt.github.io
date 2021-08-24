# Sitebuild problems

# The sites to check


These sites are built on the [xserve](xserve.html)


* [http://giellatekno.uit.no]
* [http://divvun.no] - ingen Last Published (TODO: fix)
* [https://giellalt.uit.no] - ingen Last Published (TODO: fix)
* [http://oahpa.no]
* [http://dicts.uit.no]


Check the *Last Published* date in the lower right corner on the sites above. It should not be more than
24 hours old. If it is, the site has not rebuilt properly.


## Invalid xml files
* run `forrest validate` in one of the `xtdoc/` directories
* run `forrest` and check the onscreen log


## Other reasons


If the xml files are valid, then there probably is a problem with one of the .jspwiki files


Check the build logs on the xserve
* divvun.no: `/Users/sd/gtsvn/xtdoc/divvun/buildlogyyyy-mm-dd-tt-mm`
* techdoc: `/Users/sd/gtsvn/xtdoc/techdoc/buildlogyyyy-mm-dd-tt-mm`
* divvun.org: `/Users/sd/gtsvn/xtdoc/divvun.org/buildlogyyyy-mm-dd-tt-mm`
* giellatekno: `/Users/gtuit/gtsvn/xtdoc/gtuit/buildlogyyyy-mm-dd-tt-mm`
* oahpa: `/Users/gtuit/gtsvn/ped/buildlogyyyy-mm-dd-tt-mm`
* dicts: `/Users/gtuit/gtsvn/xtdoc/dicts/buildlogyyyy-mm-dd-tt-mm`
