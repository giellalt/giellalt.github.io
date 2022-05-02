# Getting started with the GiellaLT infrastructure on the Mac

This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes what you need to install on the **Mac** to be ready to develop
language tools for your language.

>Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself** . If you only want to use the ready-made grammatical analysers, skip this and see the [Linguistic analysis page](ling/LinguisticAnalysis.html) instead.




# System setup of your Mac before GiellaLT installation


You must first prepare the Mac, by installing *these two basic programming tools*, **in this order**: 

1. [Xcode](InstallingXCode.html)
1. [MacPorts](http://www.macports.org) 

if you already use **HomeBrew**, you may skip the *;Minstall the tools below using that one instead)


#  Installing required auxiliary programs

You will need a number of tools for the build chain. On the Mac, you can get them by running the following 3 commands in the terminal (the computer asks for your computer password).

New Macs (**Catalina and newer (macOS 10.15+)**) come with Python 3.7 built-in, and also Perl 5.18. By default, that should be good enough, and the commands below work with the pre-installed versions of both. (These commands are for MacPort users, **Brew** users should use the relevant `brew install` commands instead):

```
sudo port install autoconf automake libtool python39 py39-pip py39-yaml wget bison cmake gawk saxon \
antiword wv libxslt poppler tidy subversion

sudo port select --set pip3 pip39

sudo port select --set python3 python39
```



# Installing HFST, our linguistic compiler


You need tools to convert your linguistic source code (lexicons, morphology, phonology, syntax, etc.) into usefull tools like analysers, generators, hyphenators and spellers. 


**NB!** The information below is up-to-date as of **HFST 3.16**.



Run these commands:


```
curl http://apertium.projectjj.com/osx/install-nightly.sh > install-nightly.sh

chmod a+x install-nightly.sh

sudo ./install-nightly.sh
```

This downloads a shell script (1), makes it executable (2), and runs it (3). The shell script in turn will download and install prebuilt binaries for programs for morphology, syntax and machine translation:

- hfst
- vislcg3
- apertium

You get the latest version of all required tools in one go.
Rerun these 3 commands with regular intervals to get the latest updates.




This is our default compiler, and it builds all our tools. It is open source, and it is needed for turning your morphology and lexicon into spellcheckers and other useful programs.

# Some alternative compilers, strictly speaking not needed
 
The following two programs are **not needed**, we just refer to them since the source code is compatible with them:

- If you need a fast compiler for development work you may also install the [Xerox tools](http://www.fsmbook.com).
   It is freely available but is not open source and can not turn the analysers into spellers. The software itself is found under the link
   [NewSoftware](https://web.stanford.edu/~laurik/.book2software/),
   **Binaries Only** is enough. Unpack the files and store them in e.g.
   /usr/local/bin/. 
- You may also use **Foma**, but for most languages on this site you will in any case need hfst for the morphophonology. Foma was installed with hfst.







# Installing an editor

You will need a *text editor* for writing the source files. One of the following
 
- [SubEthaEdit](https://apps.apple.com/us/app/subethaedit/id728530824) is the editor we use at UiT (Mac only). It has *lexc* and *twolc* modes.
- [Atom](http://atom.io) is also a good editor, which works for all operative systems. It has *lexc* and *twolc* modes.
- [Textmate](https://macromates.com/) is a good editor as well. Remember to install the *mate* alias for opening files on the command line.
- If you are familiar with **Emacs** or **vim** you might as well continue with what you are used to.
- 

# Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.

