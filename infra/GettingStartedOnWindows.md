# Getting started with the GiellaLT infrastructure on Windows

Ever since Windows 10, Anniversary Update 2018, it has been possible to install a **Linux** system on Windows. Follow the following instructions to install Linux/bash on Windows 10.

Note that If you only want to use the ready-made grammatical analysers (as explained on the [Linguistic analysis page](ling/LinguisticAnalysis.html).

this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself**.

## Linux on Windows

### Install Linux on Windows 10

- [Short version](InstallingLinuxOnWindows.html). Have a look at this page first (it explains what to install), and then, if needed, look at the next bulletpoint for how to do it.
- [Long version with illustrative pictures](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

### Install Linux on Windows 11

TODO: We should sort these out. While waiting, you are on your own. We want to

- [How to install the Linux Windows Subsystem in Windows 11](https://techcommunity.microsoft.com/t5/windows-11/how-to-install-the-linux-windows-subsystem-in-windows-11/m-p/2701207)
- [Long version with illustrative pictures](https://www.makeuseof.com/windows-11-install-run-bash/)
- [Another long version with illustrative pictures](https://www.howtogeek.com/790062/how-to-install-bash-on-windows-11/)

**Then return here.**

### Set up the work environment

#### Find a place for your files

When you open the Linux terminal window, you are in `/home/yourlinuxusernamn/`. 


Microsoft advices users to work with linux files on the linux part of the harddisk. For a presentation, see this [introduction to working with linux files on Windows](https://learn.microsoft.com/fi-fi/windows/wsl/filesystems#file-storage-and-performance-across-file-systems). Important in this context are the reasons for working in your home catalogue. In order to access your linux files from the Windows file system you should write `\\wsl$` in the address bar of the file system.

In your linux home directory, you should make a folder containing all and only the repositories (catalogues) from [github.com/giellalt](https://github.com/giellalt), you may e.g. call it `giellalt`. 


It is possible to acces the files in your Windows home catalogue as follows: `ls /mnt/c/Users/YourWindowsUserName/`

If you want to process your Windows files in linux you make an alias in the _.profile_ file of your linux home folder, e.g. something along the lines of:

```
alias windoc = "pushd /mnt/c/Users/YourWindowsUserName/Documents/"
```

... where **YourWindowsUserName** should be replaced with your Windows user name (= the name of your home catalogue on Windows).

Then writing `windoc` when you open Linux will bring you directly to the relevant folder.

#### Install what is needed

Then follow the instructions [for Linux](GettingStartedOnLinux.html) to
get the things you need for participating in the development of
language technology tools. Rembember that if you only want to use the tools, you may stop here and instead just download the analysers, see the page on [linguistic analysis](https://giellalt.uit.no/ling/LinguisticAnalysis.html)

## Installing required auxiliary programs

You need a number of tools for the build chain. We assume you installed **Ubuntu** as your Linux version. If you installed some other Linux version, look at its documentation for how to install programs like the ones below):

Install as follows (all this is one command):

```
sudo apt-get install autoconf automake libtool libsaxonb-java python3-pip \
python3-lxml  python3-bs4 python3-html5lib libxml-twig-perl antiword xsltproc \
poppler-utils wget python3-svn wv python3-feedparser subversion openjdk-11-jdk cmake \
python3-tidylib python3-yaml libxml-libxml-perl libtext-brew-perl
```

## Installing our standard linguistic compilers

### hfst, vislcg3 and apertium

You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers.

To get that, run these two commands in the terminal (e.g. after having written `cd ENTER`):

```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash

sudo apt-get -f install apertium-all-dev
```

This downloads a shell script (1), makes it executable (2), and runs it (3). The shell script in turn will download and install prebuilt binaries for programs for morphology, syntax and machine translation:

- hfst (several subprograms)
- vislcg3
- apertium (several subprograms)

Rerun with regular intervals, e.g. once a year, to get the latest updates.

_hfst_ is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.

### Troubleshooting

The following error message has been reported when using some _hfst_ program:

```
hfst-lookup: symbol lookup error: /usr/lib/x86_64-linux-gnu/libhfst.so.55: undefined symbol: fsm_set_option
```

A solution may be to run:

```
sudo apt-get install libfoma0=0.10.0+s305-3~focal1
```

The reason for this seems to be an incongruence in (requirements for) `foma` versions in the nightly installer and the hfst program itself. The fix is to install libfoma directly, as above.

### Two other compilers (alternatives to _hfst_)

The following two programs are **not needed**, we just refer to them since the source code is compatible with them. If you don't know whether you need them, just skip them.

- If you need a fast compiler for development work you may also install the [Xerox tools](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/fsmbook/home.html).
  It is freely available but is not open source and can not turn the analysers into spellers. The software itself is found under the link
  [NewSoftware](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/.book2software/),
  **Binaries Only** is enough. Unpack the files and store them in e.g.
  `/usr/local/bin/`.
  - **Update:** Lauri Karttunen died in the spring of 2022, and his home page at Standford — with the downloadable software — is not available anymore. The software is still available via the [Wayback Machine](https://web.archive.org). The download links above are updated accordingly.
- You may also use [Foma](https://fomafst.github.io/), but for most languages on this site you will in any case need the program _hfst-twolc_ (a program in the hfst family) for the morphophonology.

## Installing an editor

In order to participate in the development work, you need an
**editor**, a program for editing text files. Here are some candidates:

- [Visual Studio Code(VSCode)](https://code.visualstudio.com/download) (take the version for Windows)
- [Atom for Windows](http://atom.io) is a good choice as well.
- [EditPad lite](https://www.editpadlite.com/). This is a simple and nice editor for Windows.
- [jEdit](http://www.jedit.org) should be fine (requires
  Java, but that is already recommended for our infrastructure, and
  should be in place when you have come this far).
- Window's own NotePad. No syntax colouring, but very robust. Note that we use UTF-8. If letters are suddenly garbled you should look for the _text encoding_ menu.
- Since ubuntu is Linux, editors like _vim_ or _emacs_ will do, if you are familiar with one of these, stick to it.

Any other editor handling UTF-8 should be fine as well.

## Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.
