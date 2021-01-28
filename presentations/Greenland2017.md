This document contains an overview of the topics and training given in Nuuk in
June, 2017. It contains links to the relevant parts of the existing
documentation. The idea is that this page can be used as an overview document
also in other cases.


Basic organisation: presentation of topic, followed by excercises. Roughly one
topic + excercise before lunch and one topic after.


Topics (with a roughly schedule with time left at the end - to be adjusted as
needed):
* Day 1:
** presentation of all tools
** introduction to the infrastructure
** unix crash course
* Day 2:
** dependencies on external tools
** in-source documentation
** tag conventions in the Giella infrastructure
** morpheme boundaries
* Day 3:
** testing
** debugging
** developer tools
* Day 4:
** refactoring the code


#  Presentation Of All Tools


* analysers & generators
* [Korp](http://gtweb.uit.no/korp/)
** infra component: Korpus processing pipeline (converson & analysis)
* dictionaries:
** [NDS](http://sanit.oahpa.no)
** [satni.org](http://satni.org/)
** dictionary content:
*** [$GTHOME/words/dicts/](https://gtsvn.uit.no/langtech/trunk/words/dicts/)
*** [Termwikien](https://satni.uit.no/termwiki/index.php/Váldosiidu/nb)
* proofing tools
** spellers [here](http://divvun.no/korrektur/korrektur.html) and
   [here](http://divvun.org/proofing/proofing.html) and
   [here](http://divvun.no/korrektur/speller-demo.html)
** hyphenators
** [grammar checker](http://gtweb.uit.no/gc/)
* [MT](http://jorgal.uit.no/index.sme.html?dir=sme-nob#translation)
* keyboards:
** [mobile phone keyboards](http://divvun.no/keyboards/mobileindex.html)
** [computer system keyboards](http://divvun.no/keyboards/desktopindex.html)
** the keyboards are built automatically from [very simple text
   files|https://gtsvn.uit.no/langtech/trunk/keyboards/smj/smj_NO-mobile.yaml]
* [speech synthesis](http://divvun.no/tale/tale.html)
* language learning:
** [initial training on a mobile app](http://gielese.no/play/)
** [L2 learning](http://oahpa.no)
** [L1 grammar excercises](http://oahpa.no/sme/usevisl/VISL_spealut.nob.html)


#  Introduction To The Infrastructure


##  Overall goals


* language independent, while still adaptable to the needs of each language
* separation of concerns - build structure vs linguistic work
* scalable:
** add as many languages as you want
** add as many tools as you want
** with a new language, you get whatever all the other languages have
** with a new tool, all languages get a basic version of the tool
* predictable - same thing is called the same in different languages
* understandable - names should be understandable as is
* modular
* technology neutral (but rule-based by default - the only thing that works with
  the languages we work with)
** it supports both Xerox, Hfst and Foma
** it supports Apertium, but could also support other (rule-based) MT systems
* should give strong support to reuse of resources
** shared lexical data
** one fst starting point for every tool


##  Means for achieving the goals


* [shared directory structure](../infra/infraremake/NewinfraCatalogues.html)


#  Unix Crash Course


See [Unix for Linguists](/tools/UnixForLinguists.html)


#  Dependencies On External Tools


##  Language technology tools


* Hfst or Foma or Xerox
* VislCG3


Optional:
* Apertium (MT)


##  Infrastructure support tools


* Autotools
* Forrest (documentation verification and publishing)
* Python
* Subversion
* a number of other tools
  [listed on a separate page](../infra/GettingStartedOnTheMac.html)


##  External dependencies for final products


This varies from product to product. In most cases (like spellers, keyboards and
more) all these dependencies are precompiled by programmers and added as library
resources to be included automatically so that the linguists do not have to have
everything installed and correctly configured for building the end user products
(s)he wants.


The exact details for each product is listed separately in each case, on
individual pages.


#  In-Source Documentation


See [a separate document](../infra/infraremake/In-sourceDocumentation.html).


Tips for in-surce documentation:
* open two terminal widows
* run forrest in one
* run `make` in the other


To run forrest:


```
forrest run -Dforrest.jvmargs="-Dfile.encoding=utf-8 -Djava.awt.headless=true"
```


To debug, edit the generated jspwiki file till the error is found, then correct
it in lexc.


#  Tag conventions in the Giella infrastructure


* [Language Independent Tags In The Giella
  Infra|../ling/LanguageIndependentTagsInTheGiellaInfra.html]


#  Morpheme boundaries


* [Morfeme border markup](../ling/morfem-borders.html)


#  Clean code


Guidelines for clean code:
* all forms should have an analysis
* all analyses should be consistent - same tags for the same feaure, in the same order
* consistent use of whitespace for increased readability


#  Testing


See [this document](../infra/infraremake/AddingMorphologicalTestData.html)


#  Debugging


* [Issues in KAL](/lang//kal/IssuesInGreenlandic.html)


#  Developer Tools


Short intro to the tools in the `devtools/` directory:


```
check_analysis_regressions.sh
generate-*-wordforms.sh
test_ospell-office_suggestions.sh
```


#  Refactoring the code


When the Yaml files are covering the relevant parts of lexc, one can rewrite the
lexc code and at the same time ensure that the analysis doesn't change. One can
also use one of the `devtools/` tools to help in that process.


This can also be seen the other way: when you know what area of the grammar you
want to change, you write yaml tests to specify the intended output, and work on
the grammar until you get there.


# Excercises and practical work


* correct bugs identified
* search for new bugs
* change tags
* run tests
