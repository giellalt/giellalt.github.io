

***You do not need the rest of this page***

# (Probably) obsolete documenttion




It containts explanations for how to run web servers


Developing special tools in addition to the core linguistic analysers can require additional software. Here's some additional software you might need depending on what you need to do.

- [Software for proofing developments](install-overview.html) 
- [


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


