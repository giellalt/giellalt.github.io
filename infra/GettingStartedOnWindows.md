
# Getting started with the GiellaLT infrastructure on Windows


Ever since Windows 10, Anniversary Update 2018, it has been possible to install a Linux system on Windows. Follow the following instructions to install Linux/bash on Windows 10.


Note that  If you only want to use the ready-made grammatical analysers (as explained on the [Linguistic analysis page](ling/LinguisticAnalysis.html).

this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself**.

## Installation


* [Short version](InstallingLinuxOnWindows.html). Have a look at this page first (it explains what to install), and then, if needed, look at the next bulletpoint for how to do it. 
* [Long version with illustrative pictures](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

Then return here.

## Set up the work environment


To access Windows files from the linux window, do `ls /mnt/` and navigate from there. A good idea would be to make an alias in the *.profile* file of your linux home folder, e.g. something along the lines of:

```
alias lgtech = "pushd /mnt/c/Users/YourUserName/Documents/lgtech"
```

... where **YourUserName** should be replaced with just that. The path starts with `/mnt/`, you should check that the rest of the path is what you want.

Then writing `lgtech` will bring you directly to the relevant folder. You then may want to install all language technology files here. 

The good thing with installing them here and not under the home directory is that you can access the files with Windows programs as well (but remember to use *UTF-8* encoding!)

Then follow the instructions [for Linux](GettingStartedOnLinux.html) to
get the things you need for participating in the development of
language technology tools. Rembember that if you only want to use the tools, you may stop here and instead just download the analysers, see the page on [linguistic analysis](https://giellalt.uit.no/ling/LinguisticAnalysis.html)



# Installing required auxiliary programs

You need a number of tools for the build chain. We assume you have installed Ubuntu on your Windows machine. If you installed some other Linux version, look at its documentation for how to install programs like the ones below):


### Ubuntu (all this in one command)

```
sudo apt-get install autoconf automake libtool libsaxonb-java python3-pip \
python3-lxml  python3-bs4 python3-html5lib libxml-twig-perl antiword xsltproc \
poppler-utils wget python3-svn wv python3-feedparser subversion openjdk-11-jdk cmake \
python3-tidylib python3-yaml libxml-libxml-perl libtext-brew-perl
```



# Installing our standard linguistic compilers

## hfst, vislcg3 and apertium

You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers.


To get that, run these two commands in the terminal (e.g. after having written `cd ENTER`):


```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash

sudo apt-get -f install apertium-all-dev
```


This downloads a shell script (1), makes it executable (2), and runs it (3). The shell script in turn will download and install prebuilt binaries for programs for morphology, syntax and machine translation:

* hfst (several subprograms)
* vislcg3
* apertium (several subprograms)

Rerun with regular intervals, e.g. once a year, to get the latest updates.

*hfst* is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs. 


## Two other compilers (alternatives to *hfst*)
 
The following two programs are **not needed**, we just refer to them since the source code is compatible with them. If you don't know whether you need them, just skip them.

- If you need a fast compiler for development work you may also install the [Xerox tools](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/fsmbook/home.html).
   It is freely available but is not open source and can not turn the analysers into spellers. The software itself is found under the link
   [NewSoftware](https://web.archive.org/web/20220303052838/https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   `/usr/local/bin/`. 
   - **Update:** Lauri Karttunen died in the spring of 2022, and his home page at Standford — with the downloadable software — is not available anymore. The software is still available via the [Wayback Machine](https://web.archive.org). The download links above are updated accordingly.
- You may also use [Foma](https://fomafst.github.io/), but for most languages on this site you will in any case need the program *hfst-twolc* (a program in the hfst family) for the morphophonology.




# Installing an editor

In order to participate in the development work, you need an
**editor**, a program for editing text files. Here are some candidates:

- [Visual Studio Code(VSCode)](https://code.visualstudio.com/download) (take the version for Windows)
- [Atom for Windows](http://atom.io) is a good choice as well.  
- [EditPad lite](https://www.editpadlite.com/). This is a simple and nice editor for Windows. 
- [jEdit](http://www.jedit.org) should be fine (requires
Java, but that is already recommended for our infrastructure, and
should be in place when you have come this far).
- Window's own NotePad. No syntax colouring, but very robust. Note that we use UTF-8.
- Since ubuntu is Linux, editors like *vim* or *emacs* will do, if you are familiar with one of these, stick to them.

Any other editor handling UTF-8 should be fine as well.




# Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.


