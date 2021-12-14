# Korp installation

*Korp* is a Corpus tool from the Swedish
[Språkbanken](http://sprakbanken.gu.se). We want to install them locally.


# Links to the code



The code for Giellatekno versions of Korp (forked from Språkbanken repositories below) is found here: To install, follow the instructions in the respective **README** files:

* [Korp Backend](https://github.com/giellatekno/korp-backend/tree/gt_20181106) ([README file](https://github.com/giellatekno/korp-backend/blob/dev/README.md))
* [Korp Frontend](https://github.com/giellatekno/korp-frontend/tree/gt_v6.0.1) ([README file](https://github.com/giellatekno/korp-frontend/blob/dev/README.md))


The online Korp is installed on the gtweb server.
Check the [admin documentation](https://gtsvn.uit.no/private/trunk/admin/README-admin-gtweb-01.txt) for installation details.

For reference: Here is the original Språkbanken Korp code that we fork from:

* [Korp Backend](https://github.com/spraakbanken/korp-backend/)
* [Korp Frontend](https://github.com/spraakbanken/korp-frontend/)



# Lemgram
The concept **lemgram** is the Språkbanken way of modeling what linguists and lexicographers refer to as lexemes and lemmas. **Ordbild** uses lemgrams.


## Definitions of the concepts
* **lexeme** = member of an open lexical category, having meaning and form but being neither
* **lemma** = wordform used as representative for lexeme
* **grammatical word** pair of lemma+grammatical properties and wordform
* **paradigm** = set of grammatical words realising a lemma
* **lemgram** = set of wordforms in paradigm


## Generation of lemgrams
Generation of lemgrams from lexc (note: this may be obsolete, read with care):

Use *generator-dict-gt-norm.hfstol*. We remove the tags v1, v2.. from the fst. It is better for the user that all variants of the same paradigm are in the same lemgram. Many fst-lemmas have more than one entry in lexc, so the list should be uniqed before generating forms. I suggest that we start with these files:


### noun-sme-lex.txt:

For nouns, we pick different 3 lists: The ordinary nouns, the actors (NomAg), and the G3-marked nouns.
For the other parts of speech, one command is enough. Commands to filter (ir)relevant forms:

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
