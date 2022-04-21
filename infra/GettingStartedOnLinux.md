# Getting started with the GiellaLT infrastructure on Linux

This page is a part of the overall [Getting started](GettingStarted.html) documentation. It describes what you need to install on **Linux** to be ready to develop language tools for your language.

Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself**. If you only want to use the ready-made grammatical analysers, see the [Linguistic analysis page](ling/LinguisticAnalysis.html).


# Installing required auxiliary programs

You need a number of tools for the build chain. Installation **differs** depending on your Linux distribution (here you must thus find your type of Linux):


### Ubuntu
```
sudo apt-get install autoconf automake libtool libsaxonb-java python3-pip \
python3-lxml  python3-bs4 python3-html5lib libxml-twig-perl antiword xsltproc \
poppler-utils wget python3-svn wv python3-feedparser subversion openjdk-11-jdk cmake \
python3-tidylib python3-yaml libxml-libxml-perl libtext-brew-perl
```



### Fedora (18)
```
sudo yum install autoconf automake libtool saxon python-pip \
python-lxml python-beautifulsoup4 python3-PyYAML \
python-unittest2 perl-XML-Twig antiword pysvn wv libxslt poppler python-tidy \
wget python-feedparser subversion java-1.7.0-openjdk cmake cpan perl-XML-LibXML

sudo pip install pyth pytidylib

sudo cpan install Text::Brew
```


### Centos 6.4
```
sudo yum install autoconf automake libtool saxon python-pip \
python-lxml python-beautifulsoup4 \
python-unittest2 perl-XML-Twig antiword libxslt poppler \
wget python-feedparser wv pysvn subversion java-1.7.0-openjdk cmake cpan perl-XML-LibXML

sudo pip install pyth pytidylib

sudo cpan install Text::Brew
```


# Linguistic software


You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers.

- ***[Install the HFST tools and vislcg3](compiling_HFST3.html)***. This is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.
 
The following two programs are **not needed**, we just refer to them since the source code is compatible with them:
	- If you need a fast compiler for development work you may also install the [Xerox tools](http://www.fsmbook.com).
   It is freely available but is not open source and can not turn the analysers into spellers. The software itself is found under the link
   [NewSoftware](https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   /usr/local/bin/. 
	- You may also use **Foma**, but for most languages on this site you will in any case need hfst for the morphophonology.


# Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.


