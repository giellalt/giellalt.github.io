# Present building
1. spellernonrec
2. plxnonrecder
   1. ` %» %» %» ` - derivations that are lexicalised?
3. `plxnonrec = ( spellernonrec - plxnonrecder ) .o. remove-hyphen`
4. POS specific fst (spellerPOS > spellerPOS-plx)
   1. spellermwe - text file with multi-word PLX entries
      1. spellerverbs.fst - used by both PLX and Hunspell
      2. spellerverbs.txt - PLX variant is made with PLX tags, Hunspell variant is
    just a wordlist without hyphens
   2. spellernouns. ... (see verbs)
   3. spelleradjs. ... (see verbs)
   4. spellerabbrs. ... (see verbs) - rename fst to *others*
   5. spellerproper. ... (see verbs)
   6. spellernums. This is unioned with spellernouns.fst
5. concatenate txt files (4.2.b etc above)
6. build final speller files:
   1. Hunspell - two variants, with and without compounding
   2. PLX

In the POS build targets, abbr = other POS's.


# New dir layout

```
tools/spellcheckers/listbased/          <= build common hunspell/plx files here
                              hunspell/ <= build final hunspell here
                              plx/      <= build final plx here
```

Targets for each dir above:


* listbased:
  * spellernonrec (l. 121 in the old Makefile.plx)
  * POS fst's
* hunspell:
  * spellerPOS-plx.fst > spellerPOS-plx.txt
  * hyph-remove
  * ` cat all plx.txt | sort `
  * convert to hunspell using wordlist2hunspell
* plx:
  * spellerPOS-plx.fst > spellerPOS-plx.txt
  * print version > revsort > mklex > upload


# Work plan

1. make targets for `listbased/`
2. make targets for `hunspell/`
3. add tests
4. decide whether to allow PLX for all languages, or only SMA, SME, SMJ
5. depending the previous choice, integrate PLX building in separate or UND template
