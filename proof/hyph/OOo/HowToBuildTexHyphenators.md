Hyphenators
===========

**NB!** This is information from the old infrastrucure (from a Readme file). It
will be updated to reflect the new infra as things are transferred and made to
work properly.


----


This dir contains files to produce TeX hyphenation patterns, using the tool
`patgen` (included in most *TeX distributions).


Usage (using **sme** as the example language, replace *sme* with the relevant language code as needed):


```
cd $GTLANGS/lang-sme/
make GTLANG=sme texpatterns


*** Building sme-hyph.dic ***


touch sme/hytex/sme-hyph.dic
cp -f sme/hytex/sme-hyph.dic sme/hytex/sme.pat
patgen sme/bin/hyphenated-wordlist.dic sme/hytex/sme.pat sme/hytex/sme-hyph.dic sme/hytex/sme.tra
This is PATGEN, Version 2.4 (TeX Live 2011/MacPorts 2011_5)
left_hyphen_min = 1, right_hyphen_min = 2, 41 letters
0 patterns read in
pattern trie has 334 nodes, trie_max = 427, 0 outputs
```


When asked, answer with the following values (integers with spaces between):


```
hyph_start, hyph_finish: 1 2
pat_start, pat_finish: 2 4
good weight, bad weight, threshold: 1 1 1
```


You may have to answer the last two questions twice, the second time after some processing. Finally, you may print a hyphenated test file by answering 'y' to the final question.


That's it.
