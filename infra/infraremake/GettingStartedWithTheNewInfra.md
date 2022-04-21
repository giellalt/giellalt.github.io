# Getting started with the GiellaLT infrastructure



You probably came here from our
[Getting Started guide](../GettingStarted.html). This page explains how to check out the source code you need and how to set it up.


# 1. Check out the source code for language modelling


1. **First, decide what language(s) you are interested in working on** 
	- The languages are found on [the following list](../../LanguageModels.html). 
	- Go to the source code by clicking on the `source` link next to the language you want to download.
1. **[Then fetch the source files for the languages you want, using *svn* or *git*](../SetUpTheFiles.html)**


# 2. Getting started with your language


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


# Now go back to to [Getting Started page](GettingStarted.html) for the last step towards building, using and developing the linguistic analysers.
