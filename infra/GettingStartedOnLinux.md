# Getting started with the GiellaLT infrastructure on Linux

This page is a part of the overall [Getting started](GettingStarted.html) documentation. It describes what you need to install on **Linux** to be ready to develop language tools for your language.

Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself**. If you only want to use the ready-made grammatical analysers, see the [Linguistic analysis page](ling/LinguisticAnalysis.html).


# Installing required auxiliary programs

You need a number of tools for the build chain. Installation **differs** depending on what Linux distribution you have, Ubuntu, Fedora or Centos:


### Ubuntu (all this in one command)

```
sudo apt-get install autoconf automake libtool libsaxonb-java python3-pip \
python3-lxml  python3-bs4 python3-html5lib libxml-twig-perl antiword xsltproc \
poppler-utils wget python3-svn wv python3-feedparser subversion openjdk-11-jdk cmake \
python3-tidylib python3-yaml libxml-libxml-perl libtext-brew-perl icu-devtools
```



### Fedora (18) (this is 3 separate commands)
```
sudo yum install autoconf automake libtool saxon python-pip \
python-lxml python-beautifulsoup4 python3-PyYAML \
python-unittest2 perl-XML-Twig antiword pysvn wv libxslt poppler python-tidy \
wget python-feedparser subversion java-1.7.0-openjdk cmake cpan perl-XML-LibXML

sudo pip install pyth pytidylib

sudo cpan install Text::Brew
```


### Centos 6.4 (this is 3 separate commands)
```
sudo yum install autoconf automake libtool saxon python-pip \
python-lxml python-beautifulsoup4 \
python-unittest2 perl-XML-Twig antiword libxslt poppler \
wget python-feedparser wv pysvn subversion java-1.7.0-openjdk cmake cpan perl-XML-LibXML

sudo pip install pyth pytidylib

sudo cpan install Text::Brew
```


# Installing HFST, our linguistic compiler


You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers.



**NB!** The information below is up-to-date as of **HFST 3.16**.


Run **ONE OF** these sets of commands (*ubuntu* **or** *fedora*, if you installed Linux-on-Windows as part of this documentation, you should choose the **ubuntu** commands):


**On Linux ubuntu:**

```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash

sudo apt-get -f install apertium-all-dev
```


**On Linux fedora (e.g. on gtlab):**

```
curl https://apertium.projectjj.com/rpm/install-nightly.sh |sudo bash

sudo apt-get -f install apertium-all-devel
```

This downloads a shell script (1), makes it executable (2), and runs it (3). The shell script in turn will download and install prebuilt binaries for programs for morphology, syntax and machine translation:

* hfst
* vislcg3
* apertium


You get the latest version of all required tools in one go, no compilation required! :)
Rerun with regular intervals to get the latest updates.

This is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.

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

You will need a text editor for writing the source files. Here are some suggestions:

- [Visual Studio Code (VSCode)](https://code.visualstudio.com/docs/setup/linux) is a nice editor, running on both Windows, Linux and Mac
- [Atom](http://atom.io), see how to [install it on Linux](https://flight-manual.atom.io/getting-started/sections/installing-atom/)
- [gedit](http://projects.gnome.org/gedit/) is the traditional Linux editor
- [kate](http://kate-editor.org/)


# Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.


