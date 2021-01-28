# Testing our grammatical tools


This document contains an overview of the testing suits we have for our different analysers.


Exchange xxx with the language code in question.
$TARGET is the directory of the language, e.g. gt/sme, for sme.


# Testing morphological tools


## Morphophonology


cd $TARGET/testing && make pair-test


## Selftest


Does the analyser recognise all entries in the lexicon?


```
cd gt/
make selftest
```


(Here we might have a look at the Book.)


# Testing proofing tools


When testing proofing tools, it is possible to choose between different engines,
such as the Polderland command-line speller (default speller engine), the
command-line interface to hunspell, etc. The available engines are listed below under each proofing tool section.


## Speller testing


```gt$ make spelltest TARGET=xxx [TESTTOOL=yy] [DATE=ddmmyyyy]```


Available speller engines:


* hu - hunspell
* pl - Polderland command line (default)
* mw - Microsoft Word through AppleScript


### Regression test


### Baseform test


### Typos test


### Correct-corpus test


## Hyphenator testing


```gt$ make hyphtest TARGET=xxx```


### Hyphenator regression testing


To only test regressions, do:


```gt$ make hyphregression TARGET=xxx [TESTTOOL=yy]
```


# Testing syntactic analysis


To run all syntactic tests:


gt$ make cgtests TARGET=xxx


Note that this test cannot be run on victorio (unless you modify the gt Makefile).


## Morphological analysis consistence test


-- not yet written --


## Disambiguator test


gt$ make distest TARGET=xxx


## Dependency test


make deptest
