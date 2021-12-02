

*Korp* is a Corpus tool and *Karp* a Lexicon tool from the Swedish
[Språkbanken](http://sprakbanken.gu.se). We want to install them locally.

We do nothing with *Karp* for now.


# Links 


The Korp code:


* [Korp Backend](http://spraakbanken.gu.se/swe/forskning/infrastruktur/korp/distribution/backend)
* [Korp Frontend](http://spraakbanken.gu.se/swe/forskning/infrastruktur/korp/distribution/frontend)
* [Corpus pipeline](http://spraakbanken.gu.se/swe/forskning/infrastruktur/korp/distribution/corpuspipeline)





# Corpora available
* Free
** skuvlahistorja1-6
** fad
* Bound
** news
** ficti
** NT


# Corpus mixes
* smesme: news + ficti
* nob2sme: fad + skuvlahistorja1-6
* smedep: news + ficti + facta/skuvlahistorja1-6 + bibel/newtestament


# Interface
Menu:
1. search for sme wordforms (kwic-snt in corpus ccat) – corpus: smesme 
1. search for sme lemmas (kwic-snt? in analysed corpus syn) – corpus choices: smesme, nob2sme
1. search for sme and nob in translations (lemma search in sentence aligned sentences) – corpus: nob2sme
1. deepdict sme (lemma search -> dependency daughters in corpus dep) – corpus: smedep 


# Lemgram


## Definitions
* **lexeme** = member of an open lexical category, having meaning and form but being neither
* **lemma** = wordform used as representative for lexeme
* **grammatical word** pair of lemma+grammatical properties and wordform
* **paradigm** = set of grammatical words realising a lemma
* **lemgram** = set of wordforms in paradigm


## Generation
Generation of lemgrams from lexc:


Use *dict-isme-norm.fst* or *generator-dict-gt-norm.xfst* or *generator-dict-gt-norm.hfst*. We remove the tags v1, v2.. from the fst. It is better for the user that all variants of the same paradigm are in the same lemgram. Many fst-lemmas have more than one entry in lexc, so the list should be uniqed before generating forms. I suggest that we start with these files:


For nouns, we pick different 3 lists: The ordinary nouns, the actors (NomAg), and the G3-marked nouns. 
For the other parts of speech, one command is enough. Commands to filter (ir)relevant forms:


### noun-sme-lex.txt: 
*Ordinary words:
```
egrep -v "(G3|ACTOR|CmpN/Only|ShCmp|RCmpnd|\+V\+|^\!)"
```
* ACTOR: 
```
grep N+NomAg
```
* G3: 
```
grep N+G3
```
### verb-sme-lex.txt:
```
egrep -v "(ENDLEX|\+V|^\!)"
```
### adj-sme-lex.txt: 
```
egrep -v "(LEXICON|Der| Rreal | R |^\!)"
```
### adv-sme-lex.txt:
```
egrep -v "(LEXICON| K |^\!)"
```


# Meetings


* 2013: [9.4.|meetings/130409.html]   // [4.12.](meetings/131204.html)
* 2014: [8.1..](meetings/140108.html)






