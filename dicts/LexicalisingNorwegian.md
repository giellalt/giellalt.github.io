



For analysis of Norwegian we may use either the Oslo-Bergen tagger 
(obt) or the nob finite state transducer (nob.fst) from Giellatekno. 
The Giellatekno fst is based 
upon a wordform list and contains approximately 2000 unclassified 
verbs and 2700 unclassified nouns. At the outset, the obt pipeline
is thus better. On the positive side for the gt fst is its flexibility.
For Neahttadigisánit we use the gt fst, and therefore we lexicalise
all compouds found in the dictionary.


The gt fst is found in `$GTHOME/langs/nob`, and is thus part of
the new infrastructure, with the stems in `src/morphology/stems`.
The nouns, verbs and adjectives are given the continuation lexica
found in [Bokmålsordboka](http://bokmalsordboka.html), the inflection
code system is also found at the top of the files in both the
`stems/` and the `affixes/` catalogues.


# Lexicalisation


The nob.fst may be set up to include or exclude dynamic compounds.
To check today's behaviour, check for the words *hybelkanin*
(lexicalised) and *hybelhest* (not lexicalised). If both are accepted,
dynamic compounding is ON, if only the former is accepted, it is OFF.
The behaviour is regulated by commenting in and out 3 lines of the
lexicon R in `src/morphology/root.lexc`.


Turn dynamic compounding off (if needed), and find unknown verbs 
for example as follows:


```
cat file|preprocess|rev|sort|rev|uniq|unob|grep '?'|cut -f1
```


Add words to the files in `src/morphology/stems/` by following
the pattern indicated on the top of each file. When words may be 
both masculine and feminine (like *boka* vs. *boken*), choose
feminine. The analyser treats all feminines as potential masculines.










