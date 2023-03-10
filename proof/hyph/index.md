Hyphenation
===========


# The hyphenation programs themselves

For each language, there are (or should be) two hyphenators, the *pattern hyphenator* and the *fst-based hyphenator*. 

## Pattern hyphenation

For compilation: `./compile --enable-pattern-hyphenators`

The linguistic source code for the pattern hyphenator is in ` lang-xxx/src/hyphenation`. The script is `hyphenation.xfscript`, written in the `xfst`formalism.


 


## FST hyphenation

For compilation: `./compile --enable-fst-hyphenator`

The fst-based hyphenator is in `lang-xxx/tools/hyphenators/`.

The compiled fst-based hyphenator itself is `hyphenator-gt-desc.hfst`. It contains both lexicon-based hyphenation (full morphology) and generic, syllable-based rules (the pattern hyphenation above, used for unknown words).

The file is composed by these files:

```
hyphenator-gt-desc-no_fallback.hfst
hyphenator-rules-desc-weighted.hfst
```

where the former is a full analyser and the latter contains syllable based rules, combined with X-based weights.

Usage (where `-b 0` gives only the best weight):

```
... |\
hfst-tokenise tools/tokenisers/tokeniser-gramcheck-gt-desc.pmhfst |\
hfst-lookup -b 0 tools/hyphenators/hyphenator-gt-desc.hfstol
```

# Integrating hyphenators in software

## LibreOffice/TeX hyphenation

- [overview](TeX/index.md)
- [details](TeX/HowToBuildTexHyphenators.md)


## Ad hoc solutions while waiting for hyphenation in word processors
 
- [How to hyphenate text while waiting for a hyphenator](how-to-hyphenate-without-hyphenator.md)

----



# Very old (2007) meetings

- [22.10.](hyphen-bug-2007-10-22.md) // [5.11](hyph-meeting-2007-11-05.md)
