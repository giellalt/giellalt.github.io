# Make or update spellers for Voikko+HFST


##  Compiling the spellers




The resulting spellers are available both for OpenOffice/LibreOffice, and for command-line tools. The command-line tools and the test bench require that you also [build and install libvoikko](../infra/CompilingVoikkoWithHfst.html).






Languages with analysers working to some degree or better are: 


North Saami, South Saami, Lule Saami, Inari Saami, Kven, Meänkieli, 
Komi Zyrian, Erzya Mordvin, Meadow Mari, Hill Mari, Kven, Faroese, Greenlandic, Tundra Nenets.


* Download and install 
  [LibreOffice 5.0 or newer (the newest version)](http://www.libreoffice.org/download/)
   - it knows about several FU languages,
  e.g. both Komi Zyrian, Komi Permyak, Erzya Mordvin and Meadow Mari.
* (If you already have this LibreOffice, make sure you do not have Voikko 3.x from 2010 
  installed, if you do, uninstall it from the menu)
  `Tools > Extension manager > Voikko (Remove)`. You should have Voikko 4.1 (or newer)
* Download and install Voikko LibreOffice plugin with hfst support - either the Finnish, Greenlandic or North Sámi Oxt file from: 
  [divvun.no/libreofficeoxt.html](http://divvun.no/libreofficeoxt.html)


This is enough to enable hfst-based spell-checkers in LibreOffice (tested).


To build and test:


1. Compile your language with hfst support (here: kpv as example)


```
    cd $GTLANGS/lang-kpv
    ./configure --with-hfst --enable-spellers
    make
    sudo make install
```


(The new speller will then turn up in `/usr/local/share/voikko/3/` as *kpv.zhfst* with today's date.)


2. in LibreOffice, open `Preferences > Language Settings > Voikko`
   and check that the newly installed language is listed 
   (and thus known to Voikko+LibreOffice).








## Using the spellers in OpenOffice / LibreOffice


This can be done with a simple installation of an extesion. The steps are as follows:


- download :
	- one of the spellers at [http://divvun.no/libreofficeoxt.html], or
	- [the default Finnish Voikko with HFST support](https://divvun.no/static_files/voikko-macosx106-i386-static.oxt) - 3 Mb
- Install the addition in OpenOffice / LibreOffice
	- start `OpenOffice / LibreOffice`
	- go to `Tools > Extention manager...` (exact names depends on your language version)
	- Click `"Add..."` and choose the oxt-file you just downloaded click `"Open"` (or similarly)
	- in order to check that Voikko is installed and active, go to the menu
   `LibreOffice/OpenOffice > Preferences > Writing Aids`. In the list right under "Available language modules", check that Voikko is listed, and that it is checked as active in the checkbox. Mark Voikko, and click the Edit button to th right of the list. In the dialogue menu you should find at least Finnish. Check that Voikko is BEFORE  Hunspell in the list of accessible spellcheckers.
	- close OpenOffice/LibreOffice
- compile your hfst spellers as described on the top of the page
- ensure they are active in OpenOffice/LibreOffice (see above)


That's it! Your own transducer directly applied as spellers!


## CAVEATS!!!

This is **Beta quality, at best**

Både hfst som ein del av Voikko og hfst-transdusarane våre er langt i frå ferdige! Det kan finnast problem, og det er kjende feil. Alle lingvistiske problem skal meldast til Github Issues (eller rettast direkte), alle tekniske feil med Voikko, HFST eller OOo-tillegget skal meldast til Sjur eller til Libvoikko-e-postlista (http://lists.puimula.org/listinfo/libvoikko).


**Known errors:**

- OOo-tillegget fungerer BERRE på MacOS X 10.6. og seinare. Det er *ikkje* støtte 
for eldre operativsystem
- hfst-stavekontrollen har ein svært rudimentær forslagsmekanisme - oftast vil det ikkje koma forslag i det heile, og når dei kjem er den korrekte rettinga nesten aldri fyrste forslag


Kjende **forbetringar** i høve til Hunspellstavekontrollane våre:

- samansetjingar fungerer! (men overgenererer sidan transduseren er deskriptiv)


# Running the test bench with voikko+hfst


This requires [libvoikko](../infra/CompilingVoikkoWithHfst.html). The commands are:

```
cd $GTHOME/gt
make <TESTTYPE> GTLANG=sme TESTTOOL=vkhfst
```


where `<TESTTYPE>` is one of:
* regression-test
* typos-test
* wordtype-test
* baseform-test
* correct-test


or `spelltest` to run them all.


# Using voikko on the command line


This also requires [libvoikko](../infra/CompilingVoikkoWithHfst.html). Just type:


```
voikkospell -s -d se
```


See `man voikkospell` for more details and options.


# System-wide speller

Eventually, we will get [VoikkoSpellService](http://verteksi.net/lab/osxspell/) with support for HFST on our computers, which will integrate the voikko speller in the system-wide speller for all languages we compile and install. But at the moment only a single language can be installed, and only in a specific location.
