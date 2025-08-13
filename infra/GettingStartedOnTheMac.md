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

You get the latest version of all required tools in one go.
**Rerun these 3 commands with regular intervals to get the latest updates.**

HFST is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.

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
