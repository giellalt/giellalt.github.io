# Language resource maturity classification

In the GielllaLT infrastructure we use the following classification to broadly describe the quality and development level of various linguistic resources:

1. Production - colour: green
1. Beta - colour: yellow
1. Alpha - colour: red
1. Experiment / student exercise - colour: black
1. Undefined - colour: grey

These categories are used as labels in README files, on the documentation front page for each resource, as well as in the overview pages for [language models](LanguageModels.md) and [keyboards](KeyboardLayouts.md). The labels should look like the following:

* ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)
* ![Maturity: Beta      ](https://img.shields.io/badge/Maturity-Beta-yellow.svg)
* ![Maturity: Alpha     ](https://img.shields.io/badge/Maturity-Alpha-red.svg)
* ![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)
* ![Maturity: Undefined ](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)

# Maturity class definitions (in reverse order)

The criterias for the various levels (some of these criterias do not apply to keyboards, for obvious reasons) are:

## Undefined ![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)

Used when the maturity is not definable, or has not yet been defined/tagged.

## Experiment ![Maturity: Production](https://img.shields.io/badge/Maturity-Experiment-black.svg)

This category also covers student exercises (published with permission). The point of such exercises is not to make a working system, but to explore the possibilities for language technology. Such work can of course be extended and in the end result in a fully working, production tool.

* license not required, but is nice
* fragmentary grammar/model/layout
* less than 1k lexical entries
* may not build at all
* Divvun Manager:
    * might not be available
    * only available in the nightly channel

## Alpha ![Maturity: Production](https://img.shields.io/badge/Maturity-Alpha-red.svg)

* license highly recommended
* grammar/model/layout mostly complete
* lexicon between 1k and 10k entries
* Divvun Manager:
    * is available
    * only available in the nightly channel
* rule of thumb: it can be built locally and used for something

## Beta ![Maturity: Production](https://img.shields.io/badge/Maturity-Beta-yellow.svg)

* there **should** be a proper license
* grammar/model/layout complete
* lexicon has more than 10k entries
* running text coverage above 80 %
* CI/CD working for the tools being provided
* Divvun Manager:
    * is available
    * is available in the stable channel
    * **NOT** visible on the front page, only via the `All languages` view
* rule of thumb: it can easily be installed via Divvun Manager - it must be testable by the user community

## Production ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-rightgreen.svg)

* there **must** be a proper license
* grammar/model/layout complete
* lexicon has more than 30k entries (but subject to realworld realities & limits)
* running text coverage above 90 %
* at least one contact person in the language community that is willing to or being payed to be a first line support person and language resource maintainer, public contact email or other contact info
* CI/CD working for the tools being provided
* Divvun Manager:
    * is available
    * is available in the stable channel
    * **IS** visible on the front page
* Release `1.0.0` or higher of either speller or analyser/`giella-XXX` package
* rule of thumb: it is easily installable via the One-click installer or Divvun Manager front page

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
