

(*or: how to fix decomposed Sami letters*)


In Unicode, many glyphs (letter symbols) may either be represented
by one character, or by a sequence of many. The letter á may thus be
either one character á or two characters a and combining ´ . Normalisation
forms are used to standardise the representation.


1. NFKD = Normalization Form Compatibility Decomposition
1. NFKC = Normalization Form Compatibility Composition


The first, NFKD, **decomposes** the characters (á as two characters), 
whereas the second, NFKC, **composes it** (á as one character).


Our North Sami analysers use the **composed** representation.


If you get text with decomposed letters (**UnicodeChecker** will tell you that č is two characters), you must **compose** them with the following command


```
cat infile.txt \
|  uconv -f utf8 -t utf8 -x Any-NFKC > outfile.txt
```


See also `man uconv`


The uconv program should be installed on your machine as part of
the ICU installation.




* [Unicode on normalization](http://unicode.org/reports/tr15/)
* [Exmple script where the command is used](https://github.com/redpony/cdec/blob/master/corpus/utf8-normalize.sh)


