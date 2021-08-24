# Getting started with the GiellaLT infrastructure on Linux

This page is a part of the overall [Getting started](GettingStarted.html) documentation. It describes what you need to install on **Linux** to be ready to develop language tools for your language.

Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself**. If you only want to use the ready-made grammatical analysers, see the [Linguistic analysis page](ling/LinguisticAnalysis.html).


# System setup


* You need a **text editor**.
  [gedit](http://projects.gnome.org/gedit/) or [kate](http://kate-editor.org/)
  are excellent choices.
* [Saxon HE](http://saxon.sourceforge.net/#F9.4HE) (for working with languages
  with XML lexicons)
* [Forrest](http://forrest.apache.org) to validate documentation extracted from
  comments. You get it by following [these instructions](forrest-howto.html).

Then a number of software packages, depending on your Linux distribution:


## Fedora (18)
```
sudo yum install autoconf automake libtool saxon python-pip \
python-lxml python-beautifulsoup4 python3-PyYAML \
python-unittest2 perl-XML-Twig antiword pysvn wv libxslt poppler python-tidy \
wget python-feedparser subversion java-1.7.0-openjdk cmake cpan perl-XML-LibXML

sudo pip install pyth pytidylib

sudo cpan install Text::Brew
```


## Centos 6.4
```
sudo yum install autoconf automake libtool saxon python-pip \
python-lxml python-beautifulsoup4 \
python-unittest2 perl-XML-Twig antiword libxslt poppler \
wget python-feedparser wv pysvn subversion java-1.7.0-openjdk cmake cpan perl-XML-LibXML

sudo pip install pyth pytidylib

sudo cpan install Text::Brew
```


## Ubuntu
```
sudo apt-get install autoconf automake libtool libsaxonb-java python3-pip \
python3-lxml  python3-bs4 python3-html5lib libxml-twig-perl antiword xsltproc \
poppler-utils wget python3-svn wv python3-feedparser subversion openjdk-11-jdk cmake \
python3-tidylib python3-yaml libxml-libxml-perl libtext-brew-perl
```


# Linguistic software


You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers. Install the following
**linguistic programming tools:**


* One or both of:
	* [HFST tools, Foma, Visl CG3](compiling_HFST3.html) -
   Open source. Needed for turning your morphology and lexicon into a
   spellchecker. This is our default compiler, it is open and compiles all our tools.
	* [Xerox tools](http://www.fsmbook.com) -
   Freely available, faster compilation, but not open source and no spellers
   The software is found under the link
   [NewSoftware](https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   */usr/local/bin/*. This does not compile all tools, but it compiles faster.

Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.

There is also [a page giving the overview for linguistic download](anonymous-svn.html) in order to download and compile the analysers. TODO (write these two together).


## Additional software

If you want to work with proofing tools, see [Proofing tools to install](install-overview.html)


## Note for Java avoiders


Some of the tools above require or use Java, notably Saxon and Forrest. Saxon is
used to convert XML-based source files into Lexc files, and Forrest is used to
validate documentation extracted from the source files.


None of these functions are strictly required for developing language tools. The
lexc files converted from XML are stored in svn, and if Saxon is not available,
the lexc files will be used as is. And if Forrest is not available, the step for
building documentation out of source code comments will just be skipped.


That is, **Java is not required** to do development using the Divvun/Giellatekno
infrastructure, **unless** you specifically work with xml-based lexicons.
