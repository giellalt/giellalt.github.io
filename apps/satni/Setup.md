# Strategies and methods for satni.org development


Technologies used:
* XQuery/eXist (Java)
* JS/Mithril/Polythene (UI komponenter, for Mithril)
* Babel for kompilering av JS (pakkar all JS til ei stor js-fil, og lagar bakoverkompatibel kode)
* [Gulp/gulp-exist](https://github.com/olvidalo/gulp-exist)


Maskiner/servarar:
* Development: tomi si maskin
* test deployment server: har ikkje, bør ta i bruk gtlab for dette (med identisk oppsett jf med gtweb)
* deployment server: gtweb (ny server på veg)


Ved oppdateringar/serveromstart:


I utgangspunktet:
* service som startar eXist m.m. automatisk


Dersom ting går gale:
* installer eXist (frå kor, korleis, kva for versjon?)
** http://exist-db.org/exist/apps/doc/advanced-installation.xml
* køyr skript som installerer alt på nytt
** ikkje dokumentert enno - Tomi skriv


To run as the eXist user:
```
sudo -s
su exist
cd
```


At the moment the user id's are assigned to different users in gtweb.uit.no and satni.uit.no. eXist is installed and run by sudo.


* run on the desired server
** run in desired directory (/home/exist/eXist)
 `sudo java -jar /home/exist/installer/eXist-db-setup-3.0-acd0c14.jar -console`
** give amount of memory (2048 MB) (cache 256 default)
** password (ask tomi, sjur, børre)
** if service is not installed, run
 `sudo tools/wrapper/bin/exist.sh install`


* run anywhere
	* deploy satni.org app

```
cd $GTHOME/apps/risten2/backend
gulp deploy --passwd <passwd> (--host gtlab.uit.no)
gulp reindex --passwd <passwd> (--host gtlab.uit.no)
```
** sometimes the restxq registry doesn't register rest endpoints, then do
*** open eXide
*** open /db/apps/satni/modules/SatniResource.xqm
*** delete a line / create a line / whatever change
*** save the file
** store xml files

cd $GTHOME/words
gulp store --passwd <passwd> (--host gtlab.uit.no)
```


Cron ping task:
* now checks that something is running on port 8080 (eXist), but not what is returned
* improvement: verify that the REST request returns expected data structures


We also need a `make check` like gulp(?) command:
* a single command that will run a set of predefined tests to verify code integrity
* it should be easy to add new tests and test cases
* gulp-exist for xquery testing
* XXX for JS testing (UI testing) - (eg. http://nightwatchjs.org/ - nodejs tool using Selenium/WebDriver)


Load testing:
* already documented, requires `ab`  (Apache Benchmarking)
