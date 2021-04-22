# Presentation of the Divvun and Giellatekno infrastructure


University of Alberta, Edmonton, June 19th


Sjur Moshagen & Trond Trosterud, UiT The Arctic University of Norway


# Content


* Background
* Introduction
* The core
* The languages
* Build structure
* Testing
* Documentation
* The tools we produce
* Summary


# Background


## The problem


* Our original ("old") infrastructure 
** was based upon copy and paste from language to language
** treated different languages differently, for historical reasons
* new languages was added all the time
* also new features and new tools were added for some languages,
** ... but they would not become available for other languages without
   error-prone copy and paste
* Hfst was added as a hack on top of the support for the Xerox tools
** (Xerox = the first fst compiler; Hfst = an open-source implementation)
* it was way too time-consuming and boring to maintain (mainly by Sjur)


## The plan


To create an infrastructure that:
1. scales well both regarding languages and tools
1. has full parity between Hfst and Xerox
1. treats all languages the same
1. is consistent from language to language, supporting cross-language cooperation
1. ... while still being flexible enough to handle variation between the
  languages


## The solution


[../images/S_curve.png]


Details in the rest of the presentation.


# Introduction


Developed by Tommi Pirinen and Sjur Moshagen.


A schematic overview of the main components of the infrastructure:


[../images/newinfra.png]


## General principles


1. Be explicit (use *non-cryptic* catalogue and file names)
1. Be clear (files should be found in non-surprising locations)
1. Keep conventions identical from language to language whenever possible
1. Divide language-dependent and language-independent code
1. Modularise the source code and the builds
1. Reuse resources
1. Know the basic setup of one language -- know the setup of them all
1. Possibility for all tools to be built for all languages
1. Parametrise the build process


## What is the infrastructure?


* a systematic way to go from source code to compiled modules
* a framework for testing the modules
* a way of chaining the modules together into larger functional units


For this to work for many languages in parallel and at the same time, we need:


* conventions
* a fixed directory structure
* a shared build system


## Conventions


We need conventions for:


* filenames
* tags
* file locations


E.g., your source files are located in `src/`:


* in the folders `morphology/stems, morphology/affixes, phonology`, ...
* stem files: `nouns.lexc, verbs.lexc, particles.lexc`, ...
* affix files: `nouns.lexc, verbs.lexc`


## Directory structure


In detail:
```
.
├── am-shared
├── doc
├── misc
├── src
│   ├── filters
│   ├── hyphenation
│   ├── morphology
│   │   ├── affixes
│   │   └── stems
│   ├── orthography
│   ├── phonetics
│   ├── phonology
│   ├── syntax
│   ├── tagsets
│   └── transcriptions
├── test
│   ├── data
│   ├── src
│   └── tools
└── tools
    ├── grammarcheckers
    ├── mt
    │   └── apertium
    ├── preprocess
    ├── shellscripts
    └── spellcheckers
```




## Explaining the directory structure


```
.
├── src                  = source files
│   ├── filters          = adjust fst's for special purposes
│   ├── hyphenation      = nikîpakwâtik >  ni-kî-pa-kwâ-tik
│   ├── morphology       =
│   │   ├── affixes      = prefixes, suffixes
│   │   └── stems        =
│   ├── orthography      = latin <-> syllabics, spellrelax
│   ├── phonetics        = conversion to IPA
│   ├── phonology        = morphophonological rules
│   ├── syntax           = disambiguation, synt. functions, dependency
│   ├── tagsets          = get your tags as you want them
│   └── transcriptions   = convert number expressions to text or v.v.
├── test                 =
│   ├── data             = test data
│   ├── src              = tests for the fst's in the src/ dir
└── tools                =
    ├── grammarcheckers  =
    ├── mt               = machine translation
    │   └── apertium     = ... for certain MT platforms
    ├── preprocess       = split text in sentences and words
    ├── shellscripts     = shell scripts to use the modules we create
    └── spellcheckers    = spell checkers are built here
```


# The core


The core is a separate folder outside the language-specific ones.
It contains:


* templates for the languages
* scripts used for maintenance and testing
* shared resources
** linguistic resources shared among several languages
** language independent fst manipulation


## Shared resources


The shared resources come in two flavours:


* shared linguistic data
* language independent fst manipulation


Shared linguistic data typically is shared only for a subgroup of languages,
like `smi` and `urj-Cyrl`, potentially also `alg` and `ath`.


The fst manipulations remove tags or tagged strings of classes  typically found
in all languages:


* remove non-standard strings (to make a purely normative fst)
* remove semantic tags from fst's where they are not used
* remove morphological boundary symbols from the lower/surface side
* etc.


# Languages


We have split the languages in four groups, depending on the type of work done
on them, and their license:


* **langs**:  These are the languages being actively developed - 43
                     languages
* **startup-langs**:  These are languages that someone has an interest in, but
                     are not actually being developed, and where the linguistic
                     content is thin - 11 languages
* **experiment-langs**:  The name says it all - this is the playground, and these
                     languages are a.o. used for teaching - 3 languages
* **closed-langs**:  These are languages with a closed license, only ISL and
                     DAN at the moment


Available at:


```
svn co https://gtsvn.uit.no/langtech/trunk/langs/ISO639-3-CODE/
```


(replace `ISO639-3-CODE` with the actual ISO code)


# Build Structure


Support for:
* in-source documentation (converted to html)
* in-source test data
* automated tests
* all tools built for all languages - but not everything built by default
* basically technology neutral, but focused on rule based systems (fst's, cg)
* all languages structured the same way
* separation of language independent and language specific features
* all builds are language independent, but most (eventually all) build steps
  allow a language specific post-build step


# Testing


Testing is done with the command `make check`. There is built-in support for
two types of tests:


* in-source test data in lexc and twolc
* specific test files for testing morphological analysis and generation against
  a specific fst


In addition, there is the general support for testing in Autotools (or more
specifically in `automake`), meaning that it is possible to add test scripts
for whatever you like.


# Documentation


The infrastructure supports extraction of in-source documentation written as
comments in a specific format, and will in the end produce html pages.


Documentation written in the actual source code is
more likely to be kept up-to-date than external documentation.


The format supports the use of a couple of variables to extract such things as
lexicon names, a line of code, etc.




# The tools


* Analysers
* Generators
* Number transcriptors
* Specialised analysers and generators
* Spellrelax
* Disambiguators and parsers
* Spellers
* Grammar checkers




## The pipeline for analysis


* take text
* preprocess it (sentences, words)
* give all morphological analyses
* pick the correct ones 
* add grammatical functions
* add dependency relations




## The pipeline for grammar checking


* take text
* preprocess it (sentences, words)
* give all morphological analyses
* make a sloppy disambiguation ("do not trust the input") 
* find error patterns
* mark them 
* give message to the writer




## Two startup scenarios


* Add a new language that does not have machine-readable resources ("Blackfoot")
* Add an existing morphological analyser in an incompatible format, 
  in order to generate the full range of tools offered here ("Innu")


In the latter case it could be possible and even preferable to script the
conversion from the original format to the lexc format, to make it possible to
reimport or update the data.




# Summary


1. This infrastructure makes it possible to 
	1. work with several languages
	1. get several tools and programs out of one and the same source code
1. It is continuously under development
	1. ... all new features automatically become available to all languages
1. It is documented
1. ... and it is available as open source code
