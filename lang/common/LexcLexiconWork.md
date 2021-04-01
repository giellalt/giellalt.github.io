
Lexc and Twolc Development
========


Improving the src/morphology/stems files


* Are the words in the correct file? (an adverb may pop up on the noun file: move it to adverbs.lexc)
* Do the words have the correct stem? Fix it
* Do the words have the correct continuation lexicon?


# Derivation


Regular derivation we do in the affixes/ files.


If all verbs may be turned into nouns by adding -ing, then do something along these lines:


```
LEXICON Verbs
bark vmorph ;
kick vmorph ;
sing vmorph ;


LEXION vmorph
+V+Inf # ;
+V+Prs+Sg3:%>s # ;
+V+Der/ing:%>ing nmorph ; ! <=== here we derive


LEXICON nmorph
+N+Sg: # ;
+N+Pl:%>s #;
```


In addition to that, the lexicon Nouns may also contain an
occational lexicalised noun like *shopping*.






