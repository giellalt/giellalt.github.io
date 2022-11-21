# Plan for setup of machine translation

** NOTE: This documentation is old. It is kept since it may contain methodological points still valid.**


We plan to look at at least [Apertium|http://www.apertium.org/] (a rule-based system, cf. its [wiki](http://wiki.apertium.org/wiki/Main_Page)) and Moses (a statistically-based system). This document discusses the setup of Moses.


# Overview


The programs should be installed on the Xserve machine, in order to facilitate long runs (may last for days).


# Files


We need 5 different programs, cf. the download information on each page:


* alignment.jar, our Bergen-Tromsø sentence aligner
* [Mosesdecoder](http://www.statmt.org/moses/?n=Development.GetStarted) (the mt program itself)
* [giza++](http://www.fjoch.com/GIZA++.html) (word alignment)
* [srilm](http://www.speech.sri.com/projects/srilm/) (language model)
* [mkcls](http://www.fjoch.com/mkcls.html) (word class/POS? training)


They shall be installed on the Xserve, and installed to standard paths.






# The process


* Input is a set of parallel sentences


# Setup


* Files where they belong
* Paths and access
* Modify makefiles


# Make catalogues in gtsvn/mt


Today we have the catalogues:


* courses
* dev
* doc
* giza
* grantapplications
* script


Needed: 


* change giza to wordalign, make one for sentencealign.
* have catalogues for the language pairs, and for the machine runs




# MT systems, usage


## smenob


* A gist system, i.e. in order to get an idea of what is written


## nobsme


## engsme
* Only KDE input




