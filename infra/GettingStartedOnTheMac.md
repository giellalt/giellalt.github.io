# Getting started with the GiellaLT infrastructure on the Mac

This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes what you need to install on the **Mac** to be ready to develop
language tools for your language.

Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself** . If you only want to use the ready-made grammatical analysers, skip this and see the [Linguistic analysis page](ling/LinguisticAnalysis.html) instead.


# System setup


* You need *these two basic programming tools* (installed **in this order**):
	1. [Xcode](InstallingXCode.html)
	1. [MacPorts](http://www.macports.org) 

if you already use **HomeBrew**, you may skip the *;Minstall the tools below using that one instead)

You will also need a **text editor**. The following three editors all have speical modes for working with morphophonology and syntax.

## Editors

You will need a *text editor* for writing the source files.
 
- [SubEthaEdit](https://apps.apple.com/us/app/subethaedit/id728530824) is the editor we use at UiT (Mac only). 
- [Atom](http://atom.io) is also a good editor, which works for all operative systems
- If you are familiar with **Emacs** we recommend you continue using that.


##  Installing the required tools

You will also need a number of tools for the build chain. On the Mac, you can get them by running the following 3 commands in the terminal (the computer asks for your computer password).

New Macs (**Catalina and newer (macOS 10.15+)**) come with Python 3.7 built-in, and also Perl 5.18. By default, that should be good enough, and the commands below work with the pre-installed versions of both. (These commands are for MacPort users, **Brew** users should use the relevant `brew install` commands instead):

```
sudo port install autoconf automake libtool python39 py39-pip py39-yaml wget bison cmake gawk saxon \
antiword wv libxslt poppler tidy subversion

sudo port select --set pip3 pip39

sudo port select --set python3 python39
```



# Linguistic software


You need tools to convert your linguistic source code (lexicons, morphology,
phonology, syntax, etc.) into usefull tools like analysers, generators,
hyphenators and spellers. 


- [Install the HFST tools and vislcg3](compiling_HFST3.html). This is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs. 
- The following two programs are **not needed**, we just refer to them since the source code is compatible with them:
	- If you need a fast compiler for development work you may also install the [Xerox tools](http://www.fsmbook.com).
   It is freely available but is not open source and can not turn the analysers into spellers. The software itself is found under the link
   [NewSoftware](https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   /usr/local/bin/. 
	- You may also use **Foma**, but for most languages on this site you will in any case need hfst for the morphophonology.


Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.




# Additional software

The rest of the page is mostly obsolete, but note the [proofing development link](install-overview.html) if you want to make proofing tools.

Developing special tools in addition to the core linguistic analysers can require additional software. Here's some additional software you might need depending on what you need to do.


## Software for proofing development

If you want to work with proofing tools, see [Proofing tools to install](install-overview.html).



##  Documentation web server locally (obsolete)

**NOTE! We are migrating our documentation to Github. If you did not know that you needed Forrest, you don't, and should skip this).**

If you still want to compile old-style documentation pages locally on your own machine, you will need Forrest. Install [Forrest](http://forrest.apache.org) by running [these instructions](forrest-howto.html). Forrest requires Java which can be downloaded from [java.com](http://java.com/en/download/mac_download.jsp). 


## Article authoring using LaTeX

```
sudo port install \
TeXShop3      \
texlive-basic \
texlive-bin-extra \
texlive-latex-extra
```


## A long checklistlist

There is also [a page giving the overview for linguistic download](anonymous-svn.html) in order to download and compile the analysers.


## Note for Java avoiders


Some of the tools above require or use Java, notably Saxon and Forrest. Saxon is
used to convert XML-based source files into Lexc files, and Forrest is used to
validate documentation extracted from the source files (in our soon-to-be obsolete documentation).


None of these functions are strictly required for developing language tools. The
lexc files converted from XML are stored in svn, and if Saxon is not available,
the lexc files will be used as is. And if Forrest is not available, the step for
building documentation out of source code comments will just be skipped.


That is, **Java is not required** to do development using the Divvun/Giellatekno
infrastructure, **unless** you specifically work with xml-based lexicons.


