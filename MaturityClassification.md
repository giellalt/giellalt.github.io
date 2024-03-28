# Language resource maturity classification

This page *presents* and *defines* the maturity classification system of this site. At the bottom of the page comes a description of how to add and change maturity tags.


# Maturity classes

In the GielllaLT infrastructure we use a five-step classification to broadly describe the quality and development level of various linguistic resources. These categories are used as labels in README files, on the documentation front page for each resource, as well as in the overview pages for [language models](LanguageModels.md), [dictionaries](https://giellalt.github.io/dicts/DictionarySources.html), [keyboards](KeyboardLayouts.md) and [spell checkers](proof/index.md) (the maturity level of grammar checkers, machine translation applications and speech technology are still undefined). The labels look like the following:

| No. | Label | Type | Colour |
| --- |:----- |:---- | ------ |
|  1.| ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg) | Production  | green |
|  2.| ![Maturity:       Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)		    | Beta | yellow |
|  3.| ![Maturity:      Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)			    | Alpha | red |
|  4.| ![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)	    | Experiment / student exercise | black |
|  5.| ![Maturity:  Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)    | Undefined | grey |


# Maturity class definitions (in reverse order)


Some of the criterias for the various levels are common for all resource pages and listed under **General criteria**. Other criteria are application specific:

## Undefined ![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)

Used when the maturity is not definable, or has not yet been defined/tagged.

## Experiment ![Maturity: Production](https://img.shields.io/badge/Maturity-Experiment-black.svg)

### General criteria

This category also covers student exercises (published with permission). The point of such exercises is not to make a working system, but to explore the possibilities for language technology. Such work can of course be extended and in the end result in a fully working, production tool.

* license not required, but is nice
* may not build at all
* Divvun Manager:
    * might not be available
    * only available in the nightly channel

### Application specific criteria

#### Language model
* fragmentary grammar/model/layout
* less than 1k lexical entries

#### Dictionary
* content set up for experimental purposes

#### Keyboard
* content set up for experimental purposes

#### Spell checker
* content set up for experimental purposes


## Alpha ![Maturity: Production](https://img.shields.io/badge/Maturity-Alpha-red.svg)

### General criteria
* license highly recommended
* Divvun Manager:
    * is available
    * only available in the nightly channel
* rule of thumb: it can be built locally and used for something

### Application specific criteria

#### Language model
* grammar modelmostly complete
* lexicon between 1k and 10k entries

#### Dictionary
* entries from different parts of speech
* lexicon between 1k and 10k entries

#### Keyboard
* layout mostly complete

#### Spell checker
* Program works, corrects text, and is of some use

## Beta ![Maturity: Production](https://img.shields.io/badge/Maturity-Beta-yellow.svg)

### General criteria
* there **should** be a proper license
* CI/CD working for the tools being provided
* Divvun Manager:
    * is available
    * is available in the stable channel
    * **NOT** visible on the front page, only via the `All languages` view
* rule of thumb: it can easily be installed via Divvun Manager - it must be testable by the user community

### Application specific criteria

#### Language model
* grammar model complete
* lexicon has more than 10k entries
* running text coverage above 80 %

#### Dictionary
* different parts of speech treated differently
* lexicon has more than 10k entries

#### Keyboard
* layout complete for all levels and input methods

#### Spell checker
* The number of false positives is below 20 %
* Correction mechanism gives relevant connection in top-5 in most cases
 
## Production ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-rightgreen.svg)

### General criteria
* there **must** be a proper license
* at least one contact person in the language community that is willing to or being payed to be a first line support person and language resource maintainer, public contact email or other contact info
* CI/CD working for the tools being provided
* Divvun Manager:
    * is available
    * is available in the stable channel
    * **IS** visible on the front page
* Release `1.0.0` or higher of either speller or analyser/`giella-XXX` package
* rule of thumb: it is easily installable via the One-click installer or Divvun Manager front page

### Application specific criteria

#### Language model

* grammar/model/layout complete
* lexicon has more than 30k entries (but subject to realworld realities & limits)
* running text coverage above 90 %

#### Dictionary
* lexicon has more than 20k entries
* lemma articles are structured according to lemma type

#### Keyboard
* layout complete and evaluated for all levels and input methods

#### Spell checker
* The number of false positives is below 5 %
* Correction mechanism gives relevant connection in top-5 in almost all cases, in top position in most cases




# Registering maturity

The maturity classification is done using GitHub topics.

Maturity badges in README's, documentation and elsewhere are generated automatically from these topics, and they are also used in the [keyboard](keyboards/KeyboardLayouts.md) and [language resource](LanguageModels.md) lists to group the repos automatically.

## Adding maturity topic tags

Adding maturity tags is done via [GitHub topics](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics), and can only be done by repo or organisation owners or admins. It is also possible to use [`gut`](https://giellalt.github.io/infra/GutUsageExamples.html#task-9-manage-topics-info) to set the topics from the command line if they do not exist, but presently it is not possible to remove or change GitHub topics.

The topic tags corresponding to the labels above are as follows:

* `maturity-prod`  - ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)
* `maturity-beta`  - ![Maturity: Beta      ](https://img.shields.io/badge/Maturity-Beta-yellow.svg)
* `maturity-alpha` - ![Maturity: Alpha     ](https://img.shields.io/badge/Maturity-Alpha-red.svg)
* `maturity-exper` - ![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)

The ![Maturity: Undefined ](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg) category does of course not have a topic - that is the definition of the category. In the lists and tables linked to above it should ideally be empty, but it is listed in any case to easily spot repositories that do not yet have a defined maturity class.

The maturity tags are turned into `json` endpoints for [shield.io](https://shield.io), and stored in the `gh-pages` branch of each repository. This is done automatically by the CI on each push to GitHub, but requires that GitHub Pages have been configured for the repo.

There should be only ONE maturity tag pr repo. — It is technically possible to add more maturity tags to a single repo, but that does not make much sense and will probably cause the `json` file creation to fail.
