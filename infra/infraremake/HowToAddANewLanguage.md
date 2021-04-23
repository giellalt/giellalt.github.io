# Adding a new language to the Github infrastructure

Languages reside within the [GiellaLT](https://github.com/giellalt) organisation,
and new languages should be added there.

## Prerequisites

You need [gut](https://github.com/divvun/gut) to be able to add a new language
the way it is intended.

## How to add a new language

Follow [these instructions](https://github.com/divvun/giellalt-svn2git/blob/master/doc/GutUsageExamples.md#task-10-add-a-new-language).

When done, also add entries in the registry and check the README file.

To get spellers via the Divvun Manager (nightly channel only in the beginning), there are two more steps:

* fill in details in the `manifest.toml.in` file
* set up github actions (for now, should be automatic in the future)
* create an entry in pahkat (description forthcoming)

## Result

The above steps will create a new directory for the specified language, and
populate it with the required makefiles, autoconf files and template source
files.

To start doing real work, you must do one set of preparations still:

```sh
cd lang-LANGCODE
./autogen.sh
./configure
```

Now you can start editing the source files, and whenever you want to make sure
everything compiles, run `make`. Run `make check` to ensure that all defined
tests are passed. Remember to update the test suits as you enhance the
linguistic model!

## Setting up the documentation page for the new language

The new language is automatically added to 
[the language documentation page](/LanguageModels.html). The configuration
and support is also in place to build GitHub Pages for the new language,
but those pages will not appear automatically. After your first `svn commit`
(or `git push`), which will trigger a documentation build, you need to go
to the **Settings** for your repo, then select **Pages**, and then select
the branch `gh-pages` for the documentation (documentation directory should
be `root`). Upon the next commit/push, the pages will be built and appear
online.

# Adding a new language to the $GTBIG/prooftesting dir

The procedure is the same as above, but by adding a template to the command:

$ `cd $GTHOME/langs` 

$ `$GTCORE/scripts/new-language.sh LANGCODE [[TEMPLATECOLL]`

where

* TEMPLATECOLL (optional, usually automatically identified) is the name of the
  template collection to use; presently there are two template collections:
** `prooftesting` - templates for populating directories for testing proofing
   tools, also organised according to language

This directory contains infrastructure for testing proofing tools for a number
of languages. At present, only spellers are tested, but more tool types will be
added in the future. The prerequisite for being able to test a speller is:

* at least one speller gold-standard document for the targeted language, stored
  in ```$GTFREE/[pre]stable/goldstandard/converted/```
* a speller lexicon available in the test infra for that language
* a command line speller for the lexicon(s) in the test infra

The command to set up the basic testing infrastructure for a new language is
exactly as above, with only one path adjustment:

$ `cd $GTBIG/prooftesting`

$ `$GTCORE/scripts/new-language.sh LANGCODE`

## Result

A new language will be added to the testing infrastructure, ready to be
populated with speller lexicons. Add new lexicons in the appropriate places
(see the other languages for examples), and you should be ready to prepare the
testing for your new language:

```
cd LANGCODE
./autogen.sh
./configure
```

If everything is ok, at least one of the speller tests listed at the end of the
`./configure` step should return *yes*, after which you can just run
`make`. If there is test data available in `$GTFREE`, the test(s) will run,
and after a while the test results are written to an xml file.
