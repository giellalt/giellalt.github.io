# Getting started with the GiellaLT infrastructure on the Mac

This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes what you need to install on the **Mac** to be ready to develop
language tools for your language.

> Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself** . If you only want to use the ready-made grammatical analysers, skip this and see the [Linguistic analysis page](ling/LinguisticAnalysis.html) instead.

## System setup of your Mac before GiellaLT installation

You must first prepare the Mac, by installing XCode:

1. [Xcode](InstallingXCode.html)

Proceed with installing a number of command line tools, using one of:

- [HomeBrew](GettingStartedUsingHomebrew.md) (recommended)
- [MacPorts](GettingStartedUsingMacPorts.md)


## Install HFST et al, our language model compilers

You need tools to convert your linguistic source code (lexicons, morphology, phonology, syntax, etc.) into usefull tools like analysers, generators, hyphenators, spellers and grammar checkers.

Run these commands:

```sh
curl http://apertium.projectjj.com/osx/install-nightly.sh \
     > install-nightly.sh
chmod a+x install-nightly.sh
sudo ./install-nightly.sh
```


This downloads a shell script (1), makes it executable (2), and runs it (3). The shell script in turn will download and install prebuilt binaries for programs for morphology, syntax, machine translation and grammar checking:

- hfst
- vislcg3
- apertium
- libdivvun (divvun grammar checker & tts text processing + command line tools)

At the end of the installation, script will suggest additions of the environment
variables to your profile. **Follow these instructions.**

You get the latest version of all required tools in one go.
**Rerun these 3 commands with regular intervals to get the latest updates.**

HFST is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.

## Installing python toolage

Install python-based scripts using pipx so they are protected from python
version upgrades:

```sh
pipx ensurepath
pipx install git+https://github.com/divvun/morph-test
pipx install git+https://github.com/divvun/GiellaLTLexTools
pipx install git+https://github.com/divvun/GiellaLTGramTools
```

To ensure that the tools work, restart terminals (Cmd+Q). This makes the path
updates of `pipx ensurepath` active.

These tools may need to be updated from time to time:

```sh
pipx upgrade morphtest
pipx upgrade giellaltlextools
pipx upgrade giellaltgramtools
```

E.g. rerun these whenever you rerun the abovementioned install-nightly.

## Git setups

And to ensure that accented letters are properly handled by git on macOS, run the following (may require a relatively new `git` version, tested with `2.40.0`):

```sh
git config --global core.fsmonitor true
git config --global core.quotepath false
git config --global core.precomposeunicode true
```

(See [this](https://www.git-tower.com/help/guides/faq-and-tips/faq/unicode-filenames/mac) for details on the Unicode issues.)

## Setting up gut

Download prebuilt binaries of `gut` [here](https://github.com/divvun/gut).
Then initialise your `gut` installation as follows:

```sh
gut init -r PATH_TO_DIR -t ghp_TOKEN
```

Replace `PATH_TO_DIR` and `ghp_TOKEN` with actual values. Generate your `ghp_TOKEN` by following
[these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Then one can clone all language repositories with this command:

```sh
gut clone -o giellalt -r ^lang-
```

If `gut clone` fails with this message:

> Cannot clone repository with git@github.com:divvun/registry.git because of failed authentication for repository

then use

```sh
gut clone -u -o giellalt -r ^lang-
```

instead (`-u` changes the protocol into `https` instead of `ssh`).

You can set the default protocos to `https` using the `gut init` command (option `-u`).

You can also set your default organisation with the `-o` option for the `gut init` command. Then there is no need to specify the organisation when working against the default GitHub organisation.


## An alternative FST compiler

The following program is **not needed**, but can be used instead of HFST for some languages (those without `.twolc` files): [Foma](https://fomafst.github.io/). It is faster than HFST, but does not have all the tools in the HFST family. The best of both worlds you get by installing HFST and using the Foma backend, which is the default.

One good use of Foma is to compile FSTs using both Foma and HFST, and then run `make check`. Any differences in the output from the two tools are likely to indicate bugs.

__NOTE on Xerox tools:__ we used to support compilers from Xerox, like the original `lexc` and `xfst` tools. The author of these tools, Lauri Karttunen, died in the spring of 2022, and his home page at Standford — with the downloadable software — is not available anymore (but still available at the [Wayback machine](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/fsmbook/home.html)). There is also no-one to maintain the (closed) source code of these tools, and as time goes, the Xerox tools have become more and more problematic to keep supported. We have thus decided to remove all support of the Xerox tools from April 2025 on. While the tools are still downloadable via the Wayback machine at the link [NewSoftware](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/.book2software/), they won't be used by the GiellaLT infrastructure anymore.

## Installing an editor

You will need a _text editor_ for writing the source files. One of the following

- [SubEthaEdit](https://apps.apple.com/us/app/subethaedit/id728530824) is our preferred editor at UiT (Mac only). It has nice syntax modes:
  - modes for [_lexc_, _twolc_ and more](https://github.com/divvun/see-modes)
  - mode for [Makefiles](https://github.com/subethaedit/SubEthaEdit-Modes/tree/master/Modes)
- [Atom](http://atom.io) is also a good editor, which works for all operating systems. It has _lexc_ and _twolc_ modes.
  - Atom is no longer being supported or developed, it has been archived.
- [Textmate](https://macromates.com/) is another good editor. Remember to install the _mate_ command line tool for opening files from the command line.
- If you are familiar with **Emacs** or **vim** you might as well continue with what you are used to.

**Now go back to the [Getting Started page](GettingStarted.md) for the next step towards building, using and developing the linguistic analysers.**


## When Mac OS does not accept your new program

When installing **gut** (above) or other programs, you may get the following error message (or similar messages in other languages):

*Apple kunne ikke fastslå om gut er fri for skadevare som kan skade
Macen eller true personvernet ditt.*

For command line programs, like **gut**, this may be fixed in the
following way (we assume *gut* is found in a folder on your path):

```
xattr -c /usr/local/bin/gut
sudo chmod -x gut /usr/local/bin/gut
sudo chmod a+x /usr/local/bin/gut
```

Replace **gut** with the program that causes problems. 

For graphical programs there is good support online. Just google the
error message.

