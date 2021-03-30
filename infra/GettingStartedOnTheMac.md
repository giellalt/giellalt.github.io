This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes what you need to install on the **Mac** to be ready to develop
language tools for your language.


Note that this documentation is relevant when you want to participate in '*building and developing the grammatical tools*' yourself. If you only want to use the ready-made grammatical analysers, see the [Linguistic analysis page](ling/LinguisticAnalysis.html).


# System setup


* You need a **text editor** - we recommend
   [SubEthaEdit](https://apps.apple.com/us/app/subethaedit/id728530824) - then
   you can collaborate with us over the net straight from your hard disk (only the
   things you explicitly share or invite peope to). Try [see://divvun.no] and see if
   you find someone to code or write with!
* Basic programming tools (in this order):
** [Xcode](InstallingXCode.html)
** [MacPorts](http://www.macports.org) (to install other tools, see below; if you
   already use HomeBrew, install the tools below using that one instead)


Then you need a number of tools for the build chain.
On the Mac, you can get them by running the following commands:


##  Catalina and newer (macOS 10.15+)


Catalina comes with Python 3.7 built-in, and also Perl 5.18. By default, that should
be good enough, and the commands below work with the pre-installed versions of
both. If you require newer versions of Perl or Python, you probably know what you
need to do.


###  Minimal install


```
sudo port install autoconf automake libtool python39 py39-pip py39-yaml wget bison cmake gawk saxon \
antiword wv libxslt poppler tidy subversion


sudo port select --set pip3 pip39
sudo port select --set python3 python39
```


# Linguistic software


You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers. Install the following
**linguistic programming tools:**


* One or more of:
** [Xerox tools](http://www.fsmbook.com) -
   Freely available, faster compilation, but not open source and no spellers.
   The software is found under the link
   [NewSoftware](https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   /usr/local/bin/.
** [HFST tools, vislcg3, foma](compiling_HFST3.html) -
   Open source. Needed for turning your morphology and lexicon into a
   spellchecker




Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.


There is also [a page giving the overview for linguistic download](anonymous-svn.html) in order to download and compile the analysers. TODO (write these two together).




# Additional software


Developing special tools in addition to the core linguistic analysers can require
additional software. Here's some additional software
you might need depending on what you need to do.




## Software for proofing development


If you want to work with proofing tools, see
*Proofing tools to install* [here](install-overview.html)




##  Documentation web server locally


If you want to have documentation pages locally on your own machine, you need Forrest:


* [Forrest](http://forrest.apache.org) to validate the documentation comments.
  You get it by following [these instructions](forrest-howto.html).
** Forrest requires Java which can be downloaded from
   [java.com](http://java.com/en/download/mac_download.jsp).




### Article authoring using LaTeX


```sudo port install \
TeXShop3      \
texlive-basic \
texlive-bin-extra \
texlive-latex-extra
```


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
