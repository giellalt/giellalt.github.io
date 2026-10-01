# Adding a new language, keyboard, corpus  or dictionary repository

This page explains how to add new repositories to the GiellaLT
infrastructure. The infrastructure has a set of standardised directory
types, where xxx and yyy are ISO language codes::

- **corpus-xxx-orig:** repository of original corpus texts for language xxx
- **corpus-xxx:** repository of converted corpus texts for language xxx
- **dict-xxx-yyy:** bilingual dictionaries from language xxx to language yyy
- **dict-xxx:** monolingual dictionaries for language xxx
- **keyboard-xxx:** keyboard layout and driver for language xxx
- **lang-xxx:** language model for language xxx
- **speech-xxx:*** speech resoures for language xxx

In addition there are some shared repositories, some template repositories and some technical repositories, they will not be treated here.

For GiellaLT to work, all its repositories must be stored **in the
same catalogue** (here arbitrarily called *giellalt*, but if you are using `gut`, it *must* be named `giellalt`), without
grouping directory types in intermediate catalogues.  Thus, **do not**
store e.g. all Saami repositories, all dictionary repositories, etc,
in subdirectories under *giellalt*. As long as all GiellaLT
repositories reside **directly** under the same directory, the
interaction between them will work.


## Prerequisites

:warning: You **_need_** to use [`gut`](https://github.com/divvun/gut)
to be able to add a new language the way it is intended.

:warning: You also need to be at least **admin** to set up a new
repository properly.

## How to add a new language or keyboard

**Bilingual dictionary:**

```sh
gut template generate -t template-dict-undS-undT  -d dict-xxx-yyy
```

**Language:**

```sh
gut template generate -t template-lang-und -d lang-xxx
```

**Keyboard:**

```sh
gut template generate -t template-keyboard-und -d keyboard-xxx
```

Replace xxx with the code of the language you want. `lang-xxx` etc. is
really only the name of the new directory/repo, but the name of the
repo should follow this pattern. The same goes for the keyboard and
dictionary repositories.

The command will prompt you for the essential data, as follows (here
shown for lang-xxx):

```
__UND__: 3-letter ISO code, e.g. pma.
__UND2C__: 2-letter ISO code if it exists, 3-letter otherwise
__UNDEFINED__: Language name in English
__LICENSE__: License type, e.g. `LGPLv3`
__REPO__: language repository name, e.g. lang-pma
```

This command can also be used to superimpose the GiellaLT dir and file structure on an existing repo, e.g. when importing an LT project into the GiellaLT infrastructure. Presently the command will fail, although the new structure has been added, so one can ignore the error, and proceed to verify and add&commit the changes.

Then do a few preparatory steps (`cd keyboard-xxx` for keyboards, etc.):

```sh
cd lang-xxx/
chmod a+x autogen.sh ## make autogen.sh executable
git commit autogen.sh -m "Make autogen.sh executable"
cd ..
```

When the dir is created, and the content is checked, add it to the GiellaLT
GitHub organisation as follows :

```sh
gut create repo -d . -o giellalt -r lang-xxx -p
```
eventually,

```sh
gut create repo -d . -o giellalt -r lang-xxx -p
```

Notes:

- Use option `--clone` if the language repo is created in another dir than the
  existing language repositories.
- Use option `-u`/`--use-https` to use the `https` protocol instead of `ssh`
- skip the `-p`/`--public` option if you want the repo to be private

The `-d` option should point to the **_parent_** dir of the target — it makes it possible to add multiple language repos at a time, assuming they are all located within the same parent directory. The `--clone` option makes sure that the new repo/s is/are directly cloned and made part of the local GiellaLT repos.
The regex is presently required, but will probably be made optional.

### Aftermath

After moving/pushing the new repo, remember to:

- do a `git pull -u origin main` if your setup doesn't automate this
- add webhook for Zulip<br/>
  To make sure that GitHub activities are logged in Zulip. Copy the webhook data
  from another existing repo, and just change the channel parameter (you need to
  create the channel in Zulip first if it does not already exist; channel name should be the ISO 639-3 code for the language; setting up a new Zulip channel requires admin rights)
- set a description — manually using the GitHub web interface, or using gut (see higher up on this page)
- set a website — same as previous
- [add topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics).
  See other languages for examples. Remember to add maturity classification, language family and geographic location.
- check [write access, team association etc](https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github)
- update map coordinates: `../giella-core/devtools/update-language-map.bash`
- to make CI & CD work for keyboards and spellers (a.o. to get them into Divvun Manager):
  - follow [these instructions](https://github.com/divvun/pahkat.uit.no-index?tab=readme-ov-file#adding-new-repos-to-the-pahkat-index) to add the new packages in Páhkat to get them to upload to the Páhkat repo, and thus make them available in Divvun Manager via the nightly channel
  - ask the DevOps person to restart the divvun-web droplet (was: add a config for the new languages ([run some of this](https://github.com/divvun/taskcluster-config) to make TaskCluster pick up some secrets etc for the new languages))
  - for `lang-xxx` repos, edit `manifest.toml.in`:
    - add a proper product ID (ie a UUID string, using e.g. `uuidgen` or similar)
    - run `./autogen.sh && configure`, and commit the changes in `manifest.toml`
  - for `keyboard-xxx` repos:
    - add a proper UUID string in `xxx.kbdgen/targets/win.yaml` (use `uuidgen` or similar)

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
