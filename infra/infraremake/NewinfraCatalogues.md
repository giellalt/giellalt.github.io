

This is an overview of the file structure for each language
catalogue found in the GiellaLT infrastructure, i.e.
over the directories **giella-core, langs, startup-langs, experimental-langs**
located under our main catalogue.
The file README in **$GTHOME** also describes some basic properties of
the infrastructure.




#  Catalogue structure


The starting point is the mother catalogue `$GTHOME` (called *main*
if you follow [the standard checkout procedure](/tools/docu-svn-user.html).




##  The catalogues under langs, startup-langs, experimental-langs


In these catalogues language has its own catalogue (folder), the
naming convention is from
[ISO 639-3](http://en.wikipedia.org/wiki/List_of_ISO_639-3_codes).
Each language folder contains the following subfolders:


* `am-shared` (*automake shared*, common commands for fst compilation,
  never changed here, only in giella-core/langs-templates)
* `doc` (folder where we write language-specific documentation)
* `m4` (support files for compilation)
* `misc` (a grab bag dir for anything you don't want in svn - all files are
  ignored)
* `src` (this is where the linguistic source files are)
** `filters` (language-specific filters)
** `hyphenation` (each phenomenon its folder)
** `fst` (see below)
** `orthography` (capital letters, spellrelax)
** `phonetics` (for different scripts for phonetic transcription)
** `cg3` (see below)
* `test` (see below)
* `tools` (tools we build, both proofing tools and other tools)


Here's a tree view of the structure, shown for the undefined language `und` ( thus the dir structure of all
languages):


```
und$ tree -d
.
├── am-shared
├── doc
│   └── resources
│       └── images
├── m4
├── misc
├── src
│   ├── filters
│   ├── hyphenation
│   ├── fst
│   │   ├── affixes
│   │   └── stems
│   ├── orthography
│   ├── phonetics
│   ├── cg3
│   ├── tagsets
│   └── transcriptions
├── test
│   ├── data
│   ├── src
│   │   ├── morphology
│   │   ├── phonology
│   │   └── syntax
│   └── tools
│       └── spellcheckers
└── tools
    ├── analysers
    ├── datagrammarcheckers
    ├── grammarcheckers
    ├── hyphernators
    ├── mt
    │   ├── apertium
    │   └── cgbased
    │   └── filters
    ├── shellscripts
    ├── tokenisers
    └── spellcheckers
        ├── fstbased
        │   ├── foma
        │   └── hfst
        └── listbased
            └── hunspell
```


Some directories are described in further detail below.


##  The morphology folder under langs/$LANG/src/


* `root.lexc` (defines tags and basic parts of speech)
* the folder *affixes* (here we find the lexc morphology files)
* the folder *stems* (lexc stem files, the lists of words)


The folder might also contain some lexc files, like:
```
clitics.lexc
compounding.lexc
```


###  The morphology Makefile.am in src/fst


The makefile defines two, perhaps four variables (the two first must be defined)


1. GT_LEXC_ROOT=root.lexc (defining the root of lexc)
1. GT_LEXC_SRC= (listing all the other source files, except generated ones)
1. GENERATED_LEXC_SRCS= (listing lexc source files that originate as something else, e.g. xml)
1. GT_XML_SRC= (defining possible xml source files)


We define all the source files we need to build the transducers. The build system will take care of putting them together and compiling them.


```
include $(top_srcdir)/am-shared/lesc-include.am
```


This statement includes the majority of the build instructions. You should never need to touch the included file.


##  The orthography folder


Here we take care of initial capitalisation, and of spellrelax. Note that
spellrelax now will be language-specific.


##  The phonetics folder under langs/$LANG/src/


This folder contains files for conversion to IPA.




##  The cg3 folder under langs/$LANG/src/


This folder contains `disambiguation.cg3`.


The files `functions.cg3, dependency.cg3` for for sma/sme/smj are in
`giella-shared/smi/src/cg3/`. Faroese also uses the common
`dependency.cg3`, but has its own `functions.cg3`.


##  The test catalogue under langs/$LANG


Within it there are several subdirs for different kind of tests. Each test is wrapped in a shell script that emits one of the following values, depending on the outcome of the test:


* 0 = success
* 77 = skipped test
* 99 = hard fail (e.g. out-of-memory crashes etc.)
* any other value is a regular fail


If you need a new test, just write a shell script that follows this convention, and **add it to the TESTS variable in the Makefile.am file.** That's it.


Also take care that the shell script uses AM variables for all references to files and commands outside the script which can not be assumed to be universally available. This will make the test scripts portable.


So far we have morphology tests only, but there is a setup for syntax and phonology as well.


##  Transducers




What kind of and how many transducers we produce varies from language to language.
The binary files are stored in `$LANG/src`, with
[the following name conventions](TransducerNamesInTheNewInfra.html).


For some languages (at least sme and sma) the content of and difference between the transducers is explained on [the documentation page of each language](/lang/index.html)




## Language-independent cataloges


`$GTHOME` also contains  the catalogues `giella-core, giella-shared`. the former is for
language-independent technical files, and the latter is for language-independent files,
one subfolder for each language.


##  giella-core


The catalogue `giella-core` contains scripts used for all languages.


* gtdshared
** src
*** filters (regex files for removing tags or strings, for extracting strings or making them optional)
* scripts (scripts used by the GT infrastructure)
* schemas (for languages having their lexica in xml)
* langs-templates
** plxtools (speller tools)
** und (= «undefined language») contans dummy files for new languages, files governing language independent fst compilation, and **und.timestamp** for logging updates.
** smi (common source files for the Saami languages)
* prooftesting-templates
* schemas (for Uralic dictionaries writing lexc in xml)
* scripts
