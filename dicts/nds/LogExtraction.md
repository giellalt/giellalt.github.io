#  User logs


NDS contains a few means of logging user interaction with the system: 


- Google Analytics
- Dictionary Lookup Log
- HTTP access log


##  Google Analytics


Google Analytics tracks demographic and geographic information about use, and
tracks individual page views versus unique visitors. Many more detailed
possibilities are available here: users' devices, users' languages, how users
navigate the site, page views per visit, as well as live data for who is using
the site currently.


##  Dictionary Lookup Log


The dictionary lookup log contains one line per entry for each lookup that the
morpholexicon performs, from any source: the reader plugin and API, or from the
web interface directly. The file is tab separated, and the format is the
following, though the header isn't included in the file:


```
user_input	success	source_lemma	target_definitions	source_lang	target_lang
```


Some sample data:


```
frynse	True	frynse	riesaldat; riessat, riessut	nob	sme
munnje	False			nob	sme
munnje	True	munnje, mun	til meg; jeg	sme	nob
```


It is meant for easy grepping.


The file is stored in the main NDS server folder, as ```user_log.txt```.


#  morph_log.txt


Mostly error messages if the tools don't work. If they work, no problems.


##  HTTP access log


HTTP access logs allow for a little more detailed look at all of the resources
transferred by each page view, and make it possible to look only at page-views
to the API, or all page views. Anyone looking for statistics on usage of the
reader plugin will need to take a look at this. It is greppable, but because of
the file structure, it can be annoying to grep for very detailed things since
so much data is contained in each line, without consistent delimiters between
each piece of data. However, some good tools exist for browsing such log formats.


