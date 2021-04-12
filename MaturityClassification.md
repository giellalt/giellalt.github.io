# Language resource maturity classification

There is a need to clearly communicate the maturity of a language resource code base. For this four categories are used (+ unknown/undefined), as defined below:

1. Production - colour: green
1. Beta - colour: yellow
1. Alpha - colour: red
1. Experiment / student exercise - colour: black
1. Undefined - colour: grey

These categories are used as labels in README files, on the documentation front page for each resource, as well as in the [registry](https://github.com/divvun/registry). The labels should look as follows:

* ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)
* ![Maturity: Beta      ](https://img.shields.io/badge/Maturity-Beta-yellow.svg)
* ![Maturity: Alpha     ](https://img.shields.io/badge/Maturity-Alpha-red.svg)
* ![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)
* ![Maturity: Undefined ](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)

(The badge text `Maturity` is shortened to just `M` in the registry, to keep the length of the badge reasonable.)

The criterias for the various levels are, in reverse order (some of these criterias do not apply to keyboards, for obvious reasons):

## Undefined ![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)

Used when the maturity is not definable, or has not yet been defined.

## Experiment ![Maturity: Production](https://img.shields.io/badge/Maturity-Experiment-black.svg)

This category also covers student exercises (published with permission). The point of such exercises is not to make a working system, but to explore the possibilities for language technology. Such work can of course be extended and in the end result in a fully working, production tool.

* fragmentary grammar/model/layout
* less than 1k lexical entries
* only available by building locally, may not build at all

## Alpha ![Maturity: Production](https://img.shields.io/badge/Maturity-Alpha-red.svg)

* grammar/model/layout mostly complete
* lexicon between 1k and 10k entries
* only available for internal testing
* rule of thumb: it can be built locally and used for something

## Beta ![Maturity: Production](https://img.shields.io/badge/Maturity-Beta-yellow.svg)

* grammar/model/layout complete
* lexicon has more than 10k entries
* running text coverage above 80 %
* CI/CD working for the tools being provided, entries in Divvun Manager with delivery to the nightly channel
* rule of thumb: it can easily get from the nightly channel/Dev app/etc - it must be testable by the user community

## Production ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-rightgreen.svg)

* grammar/model/layout complete
* lexicon has more than 30k entries (but subject to realworld realities & limits)
* running text coverage above 90 %
* at least one contact person in the language community that is willing to or being payed to be a first line support person and language resource maintainer
* CI/CD working for the tools being provided, entries in Divvun Manager, documentation, etc, with delivery to the stable channel
* Release `1.0.0` or higher of either speller or analyser/`giella-XXX` package
* rule of thumb: it is available in the stable channel/default App/etc

# Registering maturity

Maturity badges in README's, documentation and the registry are presently maintained manually. But the maturity level is also used to group languages automatically in the [keyboard](keyboards/KeyboardLayouts.md) and [language resource](LanguageModels.md) lists, in which case it is taken automatically from a correesponding topic tag in the github repo. Over time, all instances of maturity badges should be generated from these topic tags.
