# Adding a new language to the Github infrastructure

Languages reside within the [GiellaLT](https://github.com/giellalt) organisation,
and new languages should be added there.

## Prerequisites

You need [gut](https://github.com/divvun/gut) to be able to add a new language
the way it is intended.

## How to add a new language

```sh
gut template generate -t template-lang-und -d lang-XXX
```

Replace XXX with the code of the language you want. `lang-XXX` is really only the name of the new directory/repo, but the name of the repo should follow this pattern. The command is similar for keyboards, just with a different template.

The command will prompt you for the essential data, as follows:

```
__UND__: 3-letter ISO code, e.g. pma.
__UND2C__: 2-letter ISO code if it exists, 3-letter otherwise
__UNDEFINED__: Language name in English
__LICENSE__: License type, e.g. LGPL-3.0
__REPO__: language repository name, e.g. lang-pma 
```

This command can also be used to superimpose the GiellaLT dir and file structure on an existing repo, e.g. when importing an LT project into the GiellaLT infrastructure. Presently the command will fail, although the new structure has been added, so one can ignore the error, and proceed to verify and add&commit the changes.

Then do a few preparatory steps:

```sh
cd lang-XXX/
chmod a+x autogen.sh # make autogen.sh executable
git branch -m main #  gut creates master as the branch name, we use main nowadays
cd ..
```

When the dir is created, and the content is checked, add it to the GiellaLT
GitHub organisation as follows:

```sh
gut create repo -d . -o giellalt -r lang-XXX -p
```

(Use option `--clone` if the language repo is created in another dir than the
existing language repositories.)

The `-d` option should point to the ***parent*** dir of the target — it makes it possible to add multiple language repos at a time, assuming they are all located within the same parent directory. The `--clone` option makes sure that the new repo/s is/are directly cloned and made part of the local GiellaLT repos.
The regex is presently required, but will probably be made optional.

After moving/pushing the new repo, remember to:

- add webhook for Zulip<br/>
  To make sure that GitHub activities are logged in Zulip. Copy the webhook data
  from another existing repo, and just change the channel (you probably need to
  create the channel in Zulip first)
- set a description — manually using the GitHub web interface, or using gut (see higher up on this page)
- set a website — same as previous
- [add topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics).
  See other languages for examples. Remember to add maturity classification, language family and geographic location.
- check [write access, team association etc](https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github)
- turn on [GitHub pages](https://docs.github.com/en/pages/quickstart) in a two-step process:
    - select the branch `main`, and use the `/docs` directory as the source. Let the documentation build run at least once. This will create the branch `gh_pages`.
    - now select the newly created branch `gh_pages`, with `/ (root)` as the source. Done!
- to make CI & CD work for keyboards:
    - ask the DevOps person to add a config for the new languages ([run some of this](https://github.com/divvun/taskcluster-config) to make TaskCluster pick up some secrets etc for the new languages)
    - aks DevOps to add entries for the new packages in Páhkat to get them to upload to the Páhkat repo, and thus make them available in Divvun Manager via the nightly channel
- final steps:
    - to get spellers in Divvun Manager for `lang-XXX` repos, edit `manifest.toml.in`:
        - add a proper product ID (ie a UUID string, using e.g. `uuidgen` or similar)
        - run `./autogen.sh && configure`, and commit the changes in `manifest.toml`
        - create an entry in pahkat (must be done manually by Pahkat maintainers ATM)
    - for `keyboard-XXX` repos:
        - add a proper UUID string in `XXX.kbdgen/targets/win.yaml` (use `uuidgen` or similar)

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

----

> ![Warning sign](../../images/Warning.svg)
>
> **OLD, OBSOLETE INFO BELOW**
>
> Kept because the prooftesting dir has not moved to GitHub yet.

# Adding a new language to the `$GTBIG/prooftesting` dir

The procedure is the same as above, but by adding a template to the command:

```sh
cd $GTHOME/langs
$GTCORE/scripts/new-language.sh LANGCODE [[TEMPLATECOLL]
```

where

* TEMPLATECOLL (optional, usually automatically identified) is the name of the
  template collection to use; presently there are two template collections:
    * `prooftesting` - templates for populating directories for testing proofing
   tools, also organised according to language

This directory contains infrastructure for testing proofing tools for a number
of languages. At present, only spellers are tested, but more tool types will be
added in the future. The prerequisite for being able to test a speller is:

* at least one speller gold-standard document for the targeted language, stored
  in `$GTFREE/[pre]stable/goldstandard/converted/`
* a speller lexicon available in the test infra for that language
* a command line speller for the lexicon(s) in the test infra

The command to set up the basic testing infrastructure for a new language is
exactly as above, with only one path adjustment:

```sh
cd $GTBIG/prooftesting
$GTCORE/scripts/new-language.sh LANGCODE
```

## Result

A new language will be added to the testing infrastructure, ready to be
populated with speller lexicons. Add new lexicons in the appropriate places
(see the other languages for examples), and you should be ready to prepare the
testing for your new language:

```sh
cd LANGCODE
./autogen.sh
./configure
```

If everything is ok, at least one of the speller tests listed at the end of the
`./configure` step should return *yes*, after which you can just run
`make`. If there is test data available in `$GTFREE`, the test(s) will run,
and after a while the test results are written to an xml file.
