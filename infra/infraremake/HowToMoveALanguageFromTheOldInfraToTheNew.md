# The basic outline


* create [a new language directory](../HowToAddANewLanguage.md)
* commit your new language dir
* svn-move the files from the old infra to the new (details below)
* update makefile source file definitions
* run `make check` to see that everything compiles and passes the tests
* commit your changes


# Details regarding moving the source files


The [directory structure](NewinfraCatalogues.html) contains more levels than in the old infra, and some source files are now split into several source files. Also, many filenames have changed, hopefully such that it is easier to get an idea of what the content is just based on the filename.


All of this means that you need to be a bit careful when moving files from the old infra. Here are some points to remember:


## The .lexc files


The main morphology `lexc` file, typically named `LANG-lex.txt` in the old infra, is split into several files:


* `root.lexc` in the `morphology/` dir - it contains only the `Root` lexicon and the `Multichar_Symbols` definitions.
* `compounding.lexc` - also in the `morphology/` dir - contains the `Rxxx` lexicons to control compounding
* `POS.lexc` - one file each for the affix morphology of each POS described in the old file - are placed in the `morphology/affixes/` dir:
** `affixes/adjectives.lexc`
** `affixes/nouns.lexc`
** `affixes/verbs.lexc`


Other lexc files are renamed as follows:
* full POS name
* they always end in `.lexc`


Remember to update the source file definitions in `src/morphology/Makefile.am` to contain all and only the actual source files.


## The disambiguation and dependency files


The language-specific disambiguation file is placed within `src/syntax/`, and now has the suffix `.cg3`. The full filename is `disambiguation.cg3`.


The language-independent dependency file is *currently* placed in the same directory, but should probably be moved to a shared directory.


## Twolc files / phonological xfst script files


These are placed in `src/phonology/` and end in `.twolc` or `.xfscript` respectively. The filename is `LANG-phon.twolc` or `LANG-phon.xfscript`.


## The clock, numbers and date files


These go into `src/transcriptions/` and are named the same as earlier.


## Orthographical conventions


These go into `src/orthography/` and are named as follows:


```
allcaps.xfscript
inituppercase.regex
```




##  Filters


Into `src/filters` go various language specific filters.


These keep the same name as before, after being moved:


* derivation-filter.regex 
* focus-filter.regex 




## Yaml files


If there are any yaml test files defined for a language, they should go into `test/src/morphology/` where they will be picked up automatically, *with the following caveat*: the **filename** must end not only in `.yaml` but also including the selective part of the transducer name for the transducer you want to use for the test.


Presently there are two shell scripts for running yaml tests: `run-gt-norm-yaml-testcases.sh.in` and `run-gt-desc-yaml-testcases.sh.in`, for running tests agains the **normative** `gt-norm` and **descriptive** `gt-desc` transducers respectively.


You indicate the target transducer (and shell script) by specifying the identifying part of the transducer name as the last part of the yaml test file name (before the `.yaml` suffix), and separated from the rest of the filename with an underscore, like this:


```
adjective-tests_gt-norm.yaml
```


where the essential part is `_gt-norm` - that is the part that tells the shell scripts whether to include the yaml tests or not (and thus which transducer to run the test data against). In this case the transducer names are `analyser-gt-norm.xfst` (or `.hfst`) and `generator-gt-norm.xfst`.


If you want to run a test set against, say, a normative Oahpa transducer, the analyser will be named `analyser-oahpa-gt-norm.xfst`, the shell script should be named `run-oahpa-gt-norm-yaml-testcases.sh.in`, and the yaml test files should have names ending in `_oahpa-gt-norm.yaml`.


## Other test files


There are several other test files used in the old infra. Most of the tests they are used for are not yet integrated in the new infra. These files should be moved to their natural location in the new infra with the filename they have. If you are unsure of what the natural location is, please ask Sjur.
