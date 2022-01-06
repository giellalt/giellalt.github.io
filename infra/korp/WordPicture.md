# How to update Ordbild, the WordPicture 

Make sure you have the [CorpusTools](https://giellalt.github.io/ling/CorpusTools.html#) installed.

Follow the instrucitions [here](https://github.com/giellalt/CorpusTools/blob/main/korp_scripts/word_picture/README.md).




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

