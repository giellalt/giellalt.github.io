# Getting started with the GiellaLT infrastructure



You probably came here from our
[Getting Started guide](../GettingStarted.html). This page explains how to check out the source code you need and how to set it up.


# 1. Check out the source code for language modelling


1. **Find the three-letter code of the language you work on**
- Make sure you know the three-letter **ISO 639-3** code of your language (see e.g. the infobox of the Wikipedia article for your language).
- In case you don't know whether we have a model for your language, the GiellaLT languages are found on [this list](../../LanguageModels.html).
- Then proceed to the next point:
1. **Then fetch the source files for the languages you want, using *svn* or *git***
- [See this document for how to set up the files](../SetUpTheFiles.html)


# 2. Getting started with your language


When you have installed and checked out your language(s) as explained above, do the following (we assume you put the files in a folder called **giellalt** under your home directory, you may change name and location as you like). Also, replace XXX with the ISO code of your language.


```
cd $HOME/giellalt/lang-XXX
./autogen.sh -l
./configure
```  

Now you are ready to start working.

If the file tree you downloaded looks confusing, you may have a look at [this overview](NewinfraCatalogues.html).



# Now go back to to [Getting Started page](../GettingStarted.html) for the last step towards building, using and developing the linguistic analysers.
