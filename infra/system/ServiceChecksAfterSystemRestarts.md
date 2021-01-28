Services to keep an eye on after system restarts - because they need to be operative all the time:


* svn-server
* sátni.org
* our web pages (and their automatic updating)
* the termwiki
* bugzilla
* iChat/Jabber
* SubEthaEdit


For each service, after a system restart you may have to do some manual work to ensure they are actually working. Please see below.


# svn-server


Nothing to do.


# sátni.org


## eXist


If the server has stopped, restart it:
cd /home/tomi/exist/
./bin/startup.sh


Check address `http://gtweb.uit.no:8080/exist/restxq/satni/dictionaries` if it returns JSON response.


If server is running, and no response is received, open eXide `http://gtweb.uit.no:8080/exist/apps/eXide/index.html` and open&save an xquery module at apps/satni/modules/


Above process helps most of the times. If it doesn't, there is most likely a bug to be solved.


## Nginx


Front-end resides on the same server as neahttadigisánit. Restarting nginx should be enough.


# our web pages (and their automatic updating)


The sites


* http://giellatekno.uit.no
* http://dicts.uit.no
* http://oahpa.no
* http://divvun.no
* https://giellalt.uit.no
* http://divvun.org


Have a look at [the info about the xserve](../xserve.html#Web+sites).


To manually update the sites, run the commands found above in the crontab entries.


# the termwiki


Have a look at [the info about gtsvn](../gtsvn.html).


# bugzilla


If http://giellatekno.uit.no/bugzilla does not work, then one must restart mysql.


Have a look at [the info about the xserve](../xserve.html#Restart+mysql+on+the+xserve).


# iChat/Jabber


Have a look at [the info about the xserve](../xserve.html#Jabber).


# SubEthaEdit


Have a look at [the info about the xserve](../xserve.html#SubEthaEdit).
