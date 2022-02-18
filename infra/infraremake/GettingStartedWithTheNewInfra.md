# Getting started with the GiellaLT infrastructure


## Installation and setup


The required steps for setting up the computer and installing the
auxiliary programs needed are described in our
[Getting Started guide](../GettingStarted.html).


### Check out the source code for language modelling


1. First, decide what language(s) you are interested in working on, from   [the following list](../../LanguageModels.html). Go to the source code by clicking on the `source` link next to the language you want to download.
1. The page [Set up the files](../SetUpTheFiles.html) discusses svn vs. git, and how you check out (svn) or clone (git) the files to your computer.


### Getting started with your language


When you have installed and checked out as explained above, do the following (assuming you put the files in a folder called **giellalt**, or evt. **git/giellalt**):


```
cd $HOME/giellalt/lang-mhr
./autogen.sh -l
./configure
```


(replace **mhr**, the code for Eastern Mari, with the language(s) you checked out). Now
you are ready to start working. More info about where to find the different
pieces of source code can be found on [this page](NewinfraCatalogues.html).


**NOTE** that the command `./configure` assume that you checked out the 
**HFST compilers** (see the [Getting Started](../GettingStarted.html) file). 


To build the transducers and other tools for linguistic analysis, do:


```make -j```


To run the preinstalled tests, do:


```make check```






**WARNING**


You may encounter troubles with your CLASSPATH. We are working on it, 
here is a fix if the compiler complains it is not set:
In the langs directory, write `export CLASSPATH=`.


Happy linguistic coding!
