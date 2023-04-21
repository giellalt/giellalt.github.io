# Getting started with the GiellaLT infrastructure on the Mac

This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes what you need to install on the **Mac** to be ready to develop
language tools for your language.

> Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself** . If you only want to use the ready-made grammatical analysers, skip this and see the [Linguistic analysis page](ling/LinguisticAnalysis.html) instead.

# System setup of your Mac before GiellaLT installation

You must first prepare the Mac, by first installing XCode: 

1. [Xcode](InstallingXCode.html)

Proceed with installing a number of command line tools, using one of:

- [HomeBrew](GettingStartedUsingHomebrew.md)
- [MacPorts](GettingStartedUsingMacPorts.md)

# Installing HFST, our linguistic compiler

You need tools to convert your linguistic source code (lexicons, morphology, phonology, syntax, etc.) into usefull tools like analysers, generators, hyphenators and spellers. 

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
- libdivvun (divvun grammar checker components + command line tool)

You get the latest version of all required tools in one go.
**Rerun these 3 commands with regular intervals to get the latest updates.**

HFST is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.

# Some alternative compilers, strictly speaking not needed
 
The following two programs are **not needed**, we just refer to them since the source code is compatible with them:

- If you need a fast compiler for development work you may also install the [Xerox tools](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/fsmbook/home.html).
   It is freely available but is not open source and can not turn the analysers into spellers. The software itself is found under the link
   [NewSoftware](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   `/usr/local/bin/`.
   - **Update:** Lauri Karttunen died in the spring of 2022, and his home page at Standford — with the downloadable software — is not available anymore. The software is still available via the [Wayback Machine](https://web.archive.org). The download links above are updated accordingly.
- You may also use [Foma](https://fomafst.github.io/), but for most languages on this site you will in any case need the program *hfst-twolc* (a program in the hfst family) for the morphophonology.

# Installing an editor

You will need a *text editor* for writing the source files. One of the following
 
- [SubEthaEdit](https://apps.apple.com/us/app/subethaedit/id728530824) is our preferred editor at UiT (Mac only). It has nice syntax modes:
    - modes for [*lexc*, *twolc* and more](https://github.com/divvun/see-modes)
    - mode for [Makefiles](https://github.com/subethaedit/SubEthaEdit-Modes/tree/master/Modes)
- [Atom](http://atom.io) is also a good editor, which works for all operating systems. It has *lexc* and *twolc* modes.
    - Atom is no longer being supported or developed, it has been archived.
- [Textmate](https://macromates.com/) is another good editor. Remember to install the *mate* command line tool for opening files from the command line.
- If you are familiar with **Emacs** or **vim** you might as well continue with what you are used to.

**Now go back to the [Getting Started page](GettingStarted.md) for the next step towards building, using and developing the linguistic analysers.**
