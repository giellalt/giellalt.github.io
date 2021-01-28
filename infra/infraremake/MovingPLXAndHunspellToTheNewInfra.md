# Present building
# spellernonrec
# plxnonrecder
## ` %» %» %» ` - derivations that are lexicalised?
# `plxnonrec = ( spellernonrec - plxnonrecder ) .o. remove-hyphen`
# POS specific fst (spellerPOS > spellerPOS-plx)
## spellermwe - text file with multi-word PLX entries
### spellerverbs.fst - used by both PLX and Hunspell
### spellerverbs.txt - PLX variant is made with PLX tags, Hunspell variant is
    just a wordlist without hyphens
## spellernouns. ... (see verbs)
## spelleradjs. ... (see verbs)
## spellerabbrs. ... (see verbs) - rename fst to *others*
## spellerproper. ... (see verbs)
## spellernums. This is unioned with spellernouns.fst
# concatenate txt files (4.2.b etc above)
# build final speller files:
## Hunspell - two variants, with and without compounding
## PLX


In the POS build targets, abbr = other POS's.


# New dir layout


```
tools/spellcheckers/listbased/          <= build common hunspell/plx files here
                              hunspell/ <= build final hunspell here
                              plx/      <= build final plx here
```


Targets for each dir above:


* listbased:
** spellernonrec (l. 121 in the old Makefile.plx)
** POS fst's
* hunspell:
** spellerPOS-plx.fst > spellerPOS-plx.txt
** hyph-remove
** ` cat all plx.txt | sort `
** convert to hunspell using wordlist2hunspell
* plx:
** spellerPOS-plx.fst > spellerPOS-plx.txt
** print version > revsort > mklex > upload




# Work plan


# make targets for `listbased/`
# make targets for `hunspell/`
# add tests
# decide whether to allow PLX for all languages, or only SMA, SME, SMJ
# depending the previous choice, integrate PLX building in separate or
  UND template
