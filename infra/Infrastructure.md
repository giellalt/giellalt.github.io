# Transducer infrastructure

This page gives an overview of our technical documentation.


# Getting started

In case you did not do this already:

* [Installation and setup (Source files and the tools to run them)](infraremake/GettingStartedWithTheNewInfra.html)
* [Directory structure of the language models on git - an overview](infraremake/NewinfraCatalogues.html)
* [Directory structure for our repositories in SVN](OurSVNRepositories.html)


# Lingustic modelling

## Compiling (= building) transducers
* [Defining targets for compilation](infraremake/NewInfraMaintenance.html) 
* [Makefile names and organisation](infraremake/MakefileNamesAndOrganisation.html)
* [List of defined automake conditionals](infraremake/ListOfDefinedAutomakeConditionals.html)
* [Multiple configurations and out of source building](MultipleConfigurationsAndOutOfSourceBuilding.md)
* [How to compile our abbreviation handler abbr.txt](infraremake/AbbreviationCompilation.html)


## The finite state transducers
* [How To Use XML Files As Lexc Sources](infraremake/HowToUseXMLFilesAsLexcSources.html)
* [Example of file sizes with optimisations](infraremake/ExampleOfFileSizesWithOptimisations.html)
* [FST technology overview & future perspective](FSTTechnologyOverview.html)
* [Lookup and composition - a direction primer](infraremake/LookupAndComposition_ADirectionPrimer.html)
* [Understanding up and down in hfst and xerox](infraremake/LookupAndComposition_ADirectionPrimer.html)
* [Transducer name conventions in our infrastructure](infraremake/TransducerNamesInTheNewInfra.html)
* [How to enable tags in natural languages](infraremake/HowToEnableTagsInNaturalLanguages.html)
* [Unicode considerations](Unicode.md)

## Testing and maintaining test scripts
* [Adding test data in the new infra](infraremake/AddingMorphologicalTestData.html)
* [Adding new test scripts in the new infra](infraremake/TestScriptsInTheNewInfra.html)
* [Build your own tests](infraremake/BuildYourOwnTests.html) (also as [slideshow](infraremake/slidy/BuildYourOwnTests.html))
* [Ideas for testing our transducers](infraremake/IdeasForNewinfraTesting.html)


# How to write documentation

## How to write documentation
* [How to write documentation in Markdown](Markdown.html)
* [How to write documentation as comments in your source code](infraremake/In-sourceDocumentation.html)
* [How to debug (correct ERRORS) in the documentation written in the  source code](infraremake/DebuggingSourceDocumentation.html)


## Older documentation


This documentation is  kept for historical reasons.

### Documenting older tools

* [Forrest debugging](infraremake/ForrestDebugging.html) (when the documentation does not generate)


### Planning the 2012 move to newinfra

This documents the move we did from "old" to "new" (present) infrastructure, **in 2012**. 


* [Infra remake](infraremake/InfraRemake.html)
* [New infra overview](infraremake/NewInfraOverview.html)
* [Documentation generators](infraremake/DocumentationGenerators.html) (overview of tools - obsolete)
* [New infra plan](infraremake/NewInfraPlan.html)
* [New infra progress](infraremake/NewInfraProgress.html)
* [New infra technical overview](infraremake/NewInfraTechnicalOverview.html)


### The 2012 move from the old to the (then) new infrastructure

* [Web file names from the old infra](infraremake/WebFilenamesFromOldinfra.html)
* [How to move a language from the old infra to the new](infraremake/HowToMoveALanguageFromTheOldInfraToTheNew.html)
* [Names of the fsts in /opt/smi and in newinfra](QuasicodeForKeepingTrackOfTransducers.html)
  (see also [this list](infraremake/FstNamesInOldAndNewInfra.html))
* [Moving plx and Hunspell to the new infra](infraremake/MovingPLXAndHunspellToTheNewInfra.html)


