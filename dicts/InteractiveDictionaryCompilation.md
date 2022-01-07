Interactive Dictionary Compilation
==================================

The Vuosttaš Digisánit was replaced by Neahttadigisánit, and we do not at present have a pipeline for it. This is unfortunate, as VD filled a niche for offline, integrated dictionaries.


In order to present Vuosttaš digisánit to the user, we used the Macintosh Dictionary framework for Mac OS 10.5 and newer. Earlier we used [StarDict](http://stardict.com) for other platforms, now we are sort of looking for an alternative to StarDict.

Documentation was never written. Here are the principles we followed:



The dictionary content is based upon the dictionary files in our 
``words/dicts/smenob/src/`` catalogues (see the source files, and replace
"smenob" with the language pair of your choice). 


For each lemma, we generate the corresponding workforms.
The makefile for generating the dictionary paradigms was found in $LANG/testing/ in the Giellatekno old infra, it is probably still somewhere.

Each wordform was then linked via its lemma to the dictionary explanation.

We compiled dictionaries for North and South Sami, and for Kven (but Kven without morphology).










