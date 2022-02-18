# The directory structure of the *GiellaLT* infrastructure

This is an overview of the file structure for each language
catalogue found in the GiellaLT infrastructure, i.e.
over the repositories **giella-core** and each of the **lang-$ISO**
repositories.

##  The directory structure of the lang-XXX repositories

Each language has its own repository, named with a prefix `lang-` followed by the
[ISO 639-3](http://en.wikipedia.org/wiki/List_of_ISO_639-3_codes) code, and possibly
extended according to BCP47 if needed.

Each language repository contains the following directories:

* `docs` (folder where we write language-specific documentation)
* `m4` (support files for compilation)
* `misc` (a grab bag dir for anything you don't want in svn - all files are
  ignored)
* `src` (this is where the linguistic source files are)
    * `cg3` (see below)
    * `filters` (language-specific filters)
    * `fst` (see below)
    * `hyphenation` (each phenomenon its folder)
    * `orthography` (capital letters, spellrelax)
    * `phonetics` (for different scripts for phonetic transcription)
* `test` (see below)
* `tools` (tools we build, both proofing tools and other tools)

Here's a tree view of the structure, shown for the undefined language `und`
(and thus the dir structure of all languages):

```
und$ tree -d
.
├── devtools
├── docs
├── m4
├── misc
├── src
│   ├── cg3
│   ├── filters
│   ├── fst
│   │   ├── affixes
│   │   └── stems
│   ├── hyphenation
│   ├── orthography
│   ├── phonetics
│   ├── tagsets
│   └── transcriptions
├── test
│   ├── data
│   ├── src
│   │   ├── morphology
│   │   ├── phonology
│   │   └── syntax
│   └── tools
│       ├── hyphenators
│       ├── mt
│       │   └── apertium
│       └── spellcheckers
└── tools
    ├── analysers
    ├── grammarcheckers
    ├── hyphernators
    ├── mt
    │   ├── apertium
    │   └── cgbased
    ├── shellscripts
    ├── spellcheckers
    └── tokenisers
```

Some directories are described in further detail below.

##  The `fst` folder under `lang-XXX/src/`

* `root.lexc` (defines tags and basic parts of speech)
* the folder `affixes/` (here we find the lexc morphology files)
* the folder `stems/` (lexc stem files, the lists of words)

The `fst/` folder itself might also contain some lexc files, like:

```
clitics.lexc
compounding.lexc
```

###  The `Makefile.am` file in `src/fst/`

The makefile defines two, perhaps four variables (the two first must be defined)

1. GT_LEXC_ROOT=root.lexc (defining the root of lexc)
1. GT_LEXC_SRC= (listing all the other source files, except generated ones)
1. GENERATED_LEXC_SRCS= (listing lexc source files that originate as something else, e.g. xml)
1. GT_XML_SRC= (defining possible xml source files)

We define all the source files we need to build the transducers. The build system will take care of putting them together and compiling them.

```
include $(top_srcdir)/../giella-core/am-shared/lexc-include.am
```

This statement includes the majority of the build instructions. You should never need to touch the included file.

##  The `orthography/` folder

Here we take care of initial capitalisation, of systematic spelling relaxation,
and of alternative orthographies, if needed. Note that
spellrelax now is language-specific.

##  The `phonetics/` folder under `lang-XXX/src/`

This folder contains files for conversion to IPA.

##  The `cg3/` folder under `lang-XXX/src/`

This folder contains `disambiguation.cg3`.

The files `functions.cg3, dependency.cg3` for sma, sme, smj and smn are in
`giella-shared/smi/src/cg3/`. Faroese also uses the common
`dependency.cg3`, but has its own `functions.cg3`.

##  The `test/` catalogue under `langs-XXX/`

Within it there are several subdirs for different tools to test. Each test is wrapped in a shell script that emits one of the following values, depending on the outcome of the test:

* 0 = success
* 77 = skipped test
* 99 = hard fail (e.g. out-of-memory crashes etc.)
* any other value is a regular fail

If you need a new test, just write a shell script that follows this convention, and **add it to the TESTS variable in the Makefile.am file.** That's it.

Also take care that the shell script uses AM variables for all references to files and commands outside the script which can not be assumed to be universally available. This will make the test scripts portable.

##  Transducers

What kind of and how many transducers we produce varies from language to language.
The binary files are built in `lang-XXX/src/`, with
the naming conventions [described here](TransducerNamesInTheNewInfra.html).

For some languages (at least sme and sma) the content of and difference between the transducers is explained on [the documentation page of each language](/LanguageModels.html)

## Language-independent repositories

The repositories `giella-core` and `giella-shared` are dependents of all other repositories.
The former is for
language-independent technical files and build instructions, and the latter is for
language-independent filters, and linguistic resources shared among many or all languages.

Both are automatically checked out (svn) or cloned (git) when initially configuring a new language.

##  giella-core

The repository `giella-core` contains scripts used for all languages.

* am-shared (language-independent build files for all `lang-XXX` repositories)
* scripts (scripts used by the GT infrastructure)
* schemas (for languages having their lexica in xml)
* devtools
