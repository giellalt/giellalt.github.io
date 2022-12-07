Grammarchecker Tutorial
=======================

This presentation is meant for linguists wanting to write a grammarchecker. It is a revised version of a tutorial held in Helsinki in 2018.


# Introduction


## Error types and grammarcheckers


Whereas spellcheckers are for correcting **nonwords**, words that are not in the lange (or grammarmodel), grammarcheckers are for correcting **words that are found in the language** (written according to the norm). They are called *real-word errors*, i.e. errors we were not able to correct without looking at the context. Realword erros may be of different types:


* typos resulting in nonword errors
* word order errors
* inflection errors
* split compounding






## Two parameters to tune: Sloppiness and target group


Grammarcheckers may be made with different priorities in mind, here ordered according to two parameters.


### Sloppiness


The degree of sloppiness is governed by two conflicting goals (as always):


- Goal 1: *Be strict*.
	- (find too much: wolf, wolf!)
	- Find all the errors:
	- (price: many false alarms and bad precision)
- Goal 2: *Be sloppy*.
	- (find too little: let the culprit slip through)
	- Avoid false alarms:
	- (price: few detected errors and bad recall)


### Two target groups:


* L2 writers: 
	- We know what errors they make, and model them
  (subptype: L1 writers that break the norm in ways we can anticipate)
* L1 writers: 
	- We cast a web as wide as possible, identifying  grammatical constructions, hoping to capture realword errors


In minority language settings, differing between L1 and L2 is hard,
since "L1" in this context implies not only mother tongue proficiancy,
but also "being socialised into a written culture".
So, for the one extreme (looking for known errors),
we look for errors that are likely to be produced
(be it by L1 or L2 writers, but the L2 ones produce more)


(**Analogy**: We look for the keys where we lost them --
the challenge is to know where they were lost)


For the other extreme (looking for safe errors),
we look for errors that are likely to be found at no risk of being wrong


(**Analogy**: We look for the keys everywhere, but especially where they are easy
to be found, even where we probably did not loose them -- because we
are in reality looking for something else than keys)




### How do we do this?


By morphologically analysing the input ...


* and then disambiguating the sentences in a somewhat sloppy fashion
  (if we look for determiner gender errors we cannot say that a word
  is a determiner only if it agrees with the head word in gender)
* and then **IDENTIFY ERROUNEOUS PATTERNS**
  This is an important point:
  We do not look for correct sentences (and deem the rest wrong),
  we look for wrong ones (and deem the rest correct)




This we do with finite state transducers and constraint grammar.






# Crash course in CG




[http://visl.sdu.dk/cglab.htm](http://visl.sdu.dk/cglab.htm)


PRE-RUN: Morphological analyzer, all readings


To learn CG: Use the sentences:
*The man walks in the park. I walks in the park.*




# The grammar checker part


Pipeline overview


(TODO: Add link to pipeline)


Explain the parts and the technologies used in the pipeline.


Graphics based on Wiechetech 2017 (PhD thesis).


Interesting points:
- tokenisation
- mwe disambiguation (compounds written apart, ambiguous mwe's)
- spell checker
- whitespace analysis and error markup
- error detection and classification






# Preparations


(TODO: Refer to installation page for grammarchecker tools)


## Required software:


* hfst (install-nightly.sh, see [http://giellalt.uit.no/doc/infra/GettingStarted.html]),
  cf. also [http://giellalt.uit.no/tools/docu-vislcg3.html]
* divvun-gramcheck (see [https://github.com/divvun/divvun-gramcheck])



 

 
## Compiling:


For all languages:

```
cd $GTLANGS/lang-$LANG

./configure --enable-grammarchecker --enable-alignment --enable-reversed-intersect

make -j
```




# The hands-on session


## Languages:


* The demo / common instruction language used here : **Finnish**
* Minority languages to test: The ones with a CG in the GiellaLT infra
  fao, kpv, smn, myv, sje, fkv, rus, est (est in experiment-langs)


There is set up a grammar checker infrastructure for all the GiellaLT languages
(but in order to work well they need an FST and a CG of good quality).


## Prerequisites:




###  a. "The L1 grammarchecker"

- Identify constructions that can be identified (looking for realword errors).
  - Example: Gen + Po
  - The goal here is to cast the net as fine over the text as possible
  - The challenge is to avoid false alarms




###  b. "The L2 grammarchecker"
  * Get hands on a corpus of real errors (L2) \\
    This is especially relevant in a revitalisation setting
  * Revitalisation writers will also be more tolerant towards false alarms
  * (well, I am, anyway)






## Error types to write rules for:


###  0. low-hanging fruits:


- space and punctuation errors
- disambiguated spell-checker suggestions - not now due to speed issues/bugs






###  a. L1 writers: We test case + postposition sentences


   precision: (= no false alarms!!!)






###  b. L2 writers: We test some real errors


* *Minä en olin täällä.* (corr: Minä en ollut täällä.)
* *Minä ostin omena.* (corr: Minä ostin omenan.)


   recall: (find all errors!!!)








# Commands, etc


Stand in your langs/LANG cataloge in the giellaLT file tree.




```
cd tools/grammarcheckers
echo "Hän ei tulee." | hfst-tokenise -g ../tokenisers/tokeniser-gramcheck-gt-desc.pmhfst | vislcg3 -g disambiguator.cg3 -t | vislcg3 -g grammarchecker.cg3 -t
```


This pipeline is one of several possible ones. The different options are collected
in different **modes**, and used as follows: Instead of the above, you may get
the same result by writing:


```
echo "Hän ei tulee." | sh modes/fingram.mode
```




The list of modes is as follows (LANG = fin, ...):


```
LANGgram.morph-mode	    = tokenises the input
LANGgram.mwe-dis-mode   = .. and do mwe-disambiguation
LANGgram.mwe-split-mode = .. and do the cg-mwesplit
LANGgram.blanktag-mode  = .. and check for compounds
LANGgram.spell-mode	    = .. and send to speller
LANGgram.disam-mode	    = .. and disambiguate
LANGgram.gc-mode        = .. and do the grammarchecking
LANGgram.mode		   = .. and run speller suggestion
```


To run without spellerchecking, add "nospell-" after ".", as follows:


```
LANGgram-nospell.mode		   = .. and run speller suggestion
etc.
```
