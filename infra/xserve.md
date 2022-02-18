# xserve

**TODO! update this page!**

Divvun runs divvun/giellatekno's jabber server, hosts the websites [http://divvun.no], [http://divvun.org], [http://giellatekno.uit.no], [http://giellatekno.uit.no/bugzilla] and [http://dicts.uit.no]. It serves as the corpus conversion server. It also runs an instance of SubEthaEdit.


# Web sites
The sites [http://divvun.no] and [http://divvun.org] are updated with these lines in the crontab of the user sd on divvun.no


```
15 20 * * * source $HOME/.bash_profile && svn up $GTHOME && svn up $GTBIG && static-divvun.py --sitehome $GTHOME/xtdoc/techdoc --destination ~/Sites/ en && rm ~/Sites/index.html; svn up $GTHOME && static-divvun.py --sitehome $GTHOME/xtdoc/divvun --destination ~/Sites/ fi no se smj sma sv en
15 18 * * * source $HOME/.bash_profile && svn up $GTHOME && static-divvun.py --sitehome $GTHOME/xtdoc/divvun.org --destination ~/divvun.org/ en
```


The sites [http://giellatekno.uit.no], [http://dicts.uit.no] and [http://oahpa.no] are updated with these lines in the crontab of the user gtuit on divvun.no


```
00 10,18,23 * * * source $HOME/.bash_profile && svn up $GTHOME && svn up $GTBIG && static-divvun.py --sitehome $GTHOME/xtdoc/gtuit --destination ~/Sites/ en
30 18 * * * source $HOME/.bash_profile && svn up $GTHOME && static-divvun.py --sitehome $GTHOME/xtdoc/dicts --destination ~/Sites/dicts/ en
31 10 * * * source $HOME/.bash_profile && svn up $GTHOME && static-divvun.py --sitehome $GTHOME/ped --destination oahpa@oahpa.no:/home/oahpa/public_html/ en
```




All these sites are built by [forrest](http://forrest.apache.org), which generates static html files.


## Signs of trouble


If the services on the xserve fails, this is usually caused by long lasting forrest builds. The reason for these long build times are often caused by misformatted .jspwiki documents. As the forrest builds are cron jobs, builds lasting longer than the interval between cron jobs will lead to a pile of builds going on at the same time, thereby bringing the xserve to it's knees.


## Killing forrest jobs


If this is the case, log on to the xserve and run the commands


```
ps aux|egrep '^(sd|gtuit)'|grep java|grep forrest
```


If these commands produce more than a handfull of lines, stop them all by issuing these commands


```
sudo killall static-divvun.py
ps aux|egrep '^(sd|gtuit)'|grep java|grep forrest|awk '{print $2}'|xargs sudo kill
```


After this is done, stop all cron jobs that belong to gtuit and sd by logging in as these users, running crontab -e and commenting out all jobs.


Then find the file that causes the error. When that is fixed, start the cron jobs again.


## Web server
If the above mentioned domains do not work, restart the web server:


```
sudo serveradmin stop web
sudo serveradmin start web
```


#  Restart mysql on the xserve


Needed by http://giellatekno.uit.no/bugzilla


```
sudo /opt/local/etc/LaunchDaemons/org.macports.mysql5/mysql5.wrapper restart
```


# SubEthaEdit


* Start up the vnc server (as documented in $GTPRIV/admin/README-admin-xserve.txt)
* Log in to the xserve using some vnc client and start SubEthaEdit. Open a few windows and remember to announce them.
* Close the vnc client
* NB! Lastly, **stop** the vnc server as documented in the above mentioned document.


# Jabber
If the jabber server has been brought down, restart it by issuing the commands:


```
sudo serveradmin stop jabber
sudo serveradmin start jabber
```


If the users that have divvun.no as domain cannot log in, log in to divvun.no
using a vnc client.


* Start up the Server Admin program from the Dock
* Go the the iChat item in the left field of the program
* Click settings in the upper icon field
* Add divvun.no to the Host Domains field
* Click Save


