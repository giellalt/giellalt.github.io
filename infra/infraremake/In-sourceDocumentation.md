How to write documentation as comments in your source code.


There is now preliminary support for writing structured comments to document the
code directly in the source. That is, the lexicon structure, organisation and
content is documented directly *with* the lexicon, as comments in a certain
format. This document describes how this is done.


First come some general notes, then an overview over differences between lexc, twolc and vislcg3 source files. At the end there is an overview of the compilation procedure.


# General notes


The basic idea is that comments following a certain format will be extracted and
converted to another format more suitable for publishing for a wider audience.


* **Basic rule**:  Everything that is supposed to be included in the published
 documentation **must** start with a double comment char followed by a space,
 e.g. in LexC or TwolC it could look like the following:


```!! Some documentation text here.```


Such comments will be extracted, and converted to a jspwiki document for further processing.


That is, to write comments that should become part of the public documentation, you *first* type **two exclamation marks,** *then* **one space,** and *then* the **jspwiki markup** you want. To get a heading, you thus type the following:


```
...some LexC code...
##  !!!Top-level heading
...some LexC code...
```


In the resulting jspwiki dokument this is turned into:


```
# Top-level heading
```


* **Ignored comments**:  If a **single** comment char is used, that comment is ignored,
    and will **not** be part of the generated documentation.


* **Formatting convention**:  For all source file types, the comments use jspwiki
markup [http://www.jspwiki.org/wiki/TextFormattingRules]. In addition, there is
support for specifying test data.


* **Raw copy of source code**:  To copy a line of source code as is into the
    documentation, add *two* comment symbols followed by an equal sign `!!=`
    (keeps all whitespace) or *two* comment symbols followed by the almost
    equal to sign `!!≈` (removes all excessive whitespace) at the
    end of the line you want to copy (possibly followed by your own comments).
    The copied code is stored in the variable @CODE@, which can be used to insert
    the code whereever it is needed.
    This is useful e.g. when you want to cite the code as it is used.


Example (the extra space in the triple { and } in the example is only needed to avoid double triplets, and should not be included in the actual code):


```
##  !!Symbols that need to be escaped on the lower side (towards twolc):
##  ` {
 %[%>%] !!= @CODE@ - Literal >
 %[%<%] !!= @CODE@ - Literal <
##  ` }
```


This should give the following jspwiki fragment:


```
## Symbols that need to be escaped on the lower side (towards twolc):
` {
 %[%>%]  - Literal >
 %[%<%]  - Literal <
` }
```


In this case we need to encapsulate the multichar symbol declaration within jspwiki source code tags, because otherwise jspwiki will interpret the symbol declaration as links. And we can't escape the bracket using the double bracket notation, because then we are altering the LexC source code. Instead we surround the lines with triple { and }, and just copy the lines in question using the `!!=` notation.


The full syntax and specification for the markup conventions has its own [specification page](In-sourceDocumentationSpecification.html).


# LexC notes


## Conventions


Each lexicon is documented **below** the keyword *LEXICON*. It is possible to use the keyword @LEXNAME@ in the text, where it will be replaced with the actual lexicon name. A typical lexicon could looke like the following:


```
###  ================================
##  !!!Nominal inflection sublexica
###  ================================


LEXICON N_ODD
##  !!Inflection for odd-syllable nouns: lexicon @LEXNAME@
###  -------------------------------------------------------
### 
##  Short descrioption of this lexicon, and its purpose.
### 
 +N+Sg: N_ODD_SG ;
 +N+Pl: N_ODD_PL ;
 +N:    N_ODD_ESS ;
  +N+SgNomCmp:e%^DISIMP R ;
  +N+SgGenCmp:e%>%^DISIMPn R ;
  +N+PlGenCmp:%>%^DISIMPi R ;
  +N+Der1+Der/Dimin+N:%»adtj GIERIEHTSADTJE ;
```


## Test data


```
###  Test data:
## €gt-norm: gierehtse # Odd-syllable test
## € gierehtse           gierehtse+N+Sg+Nom
## € gierehtsem          gierehtse+N+Sg+Acc
## $ gieriehtsem         gierehtse+N+Sg+Acc # negative test - don't accept this!
## € gierehtsen          gierehtse+N+Sg+Gen
```


**NB!** The negative test data convention is not yet fully functional. For now it is best to avoid it.


Presently, the above test data will give the following yaml file (sans header):


```
  gierehtse: # Odd-syllable test #
    gierehtse+N+Sg+Nom: gierehtse #
    gierehtse+N+Sg+Acc: gierehtsem #
    gieriehtsem: ~gieriehtsem # gierehtse+N+Sg+Acc
    gierehtse+N+Sg+Gen: gierehtsen #
```


The negative test data is *NOT* the way it should be, and this test will fail.
It **should** end up like this:


```
  gierehtse: # #
    gierehtse+N+Sg+Nom: gierehtse #
    gierehtse+N+Sg+Acc: [gierehtsem, ~gieriehtsem] #
    gierehtse+N+Sg+Gen: gierehtsen #
```


This will be fixed in a future version of the test bench.


# Twolc notes


*Support for TwolC files is not yet implemented.*


Follows the same structure as the LexC comments, except that it documents **twol rules** instead of lexicons.


A future version might also allow for documentation of Alphabet, Sets and Definitions.


To Be Written.


## Twolc test data


*Support for TwolC files is not yet implemented.*


Similar to LexC, except that the output is turned into twolc test pairs used in the pair-testing tool.


To Be Written.


# Xfst script and regex files


*Support for Xfst files is not yet implemented.*


# CG3


*Support for CG3 files is not yet implemented.*




# Compilation procedure


The documentation files are compiled when you write `make` in the $lang catalogue ($lang meaning any language catalogue in langs/). There is a makefile in the $lang/doc catalogue that governs which sourcefiles to harvest for documentation. Linking to the generated files is done automatically, in the generated file $lang/doc/Links.jspwiki.


As a default, only the *root.lexc* file is scheduled for generating a documentation
file. In order to add documentation for more source files, open the `doc/Makefile.am`
file, and comment in the relevant file in the JSP_PAGES list (nouns_stems.jspwiki for src/morphology/stems/nouns.lexc, etc). The jspwiki files will then be files, and linked to.


In order to compile again (regardless of compilation status), do `make -B` in $lang/doc.


Check in the converted jspwiki files:


`svn ci -m "documentation update" doc/*.jspwiki`


# Debugging


In order to find out what file is broken, write (in *$lang/doc*):


```
forrest
```


This will tell you what file is broken, unfortunately without a line number
telling you where. In order to find the error (in case you do not spot it),
you must remove parts of the file, one after another, and reload the documentation
(cmd R in the browser when running the pages as localhost on your own machine).


To debug the documentation added to e.g `som/src/morphology/stems/nouns.lexc`,
inspect and edit the file `som/doc/nouns-stems.jspwiki`, and check the page
[http://localhost:8888/lang/som/nouns-stems.html] in a locally running copy
of forrest. When everything is fine, do the necessary changes in stems/nouns.lexc,
compile again.


## Debugging procedure


The error messages from forrest are notoriously unhelpful, typically of the type


```
nouns-affixes.html	BROKEN: Couldn't accept input hardbreak ["\n\n"]
```


The "input hardbreak" tells that somewhere there is an error in the document.
Unfortunately it is not related to the presence of two newlines, but may be due
to any jspwiki syntax error. The error from the browser (when opening the file locally)
may be slightly better, eg. in this case it was


```
Couldn't accept input emitem ["''"]
```


In this case the error was italics embedded in monotype:


```
`*син син(м)-*`
```


Common errors:


* Other errors include single _ instead of double ones as bold
* and single _ inside italics
* stacked formatting symbols, italics AND bold
* square brackets are links in jspwiki
* Jumping directly from !!! to ! etc.


The best advice if you do not spot the error is to open the broken file
(here: *nouns-affixes.jspwiki*) in a test editor, and remove parts of it until
you find the syntax error (reload the file in the editor, say
`http://localhost:8888/lang/udm/root-morphology.html`
in order to see when the error is fixed. The jspwiki syntax may be inspected
[here|/infra/jspwiki-howto.html], and on [the jspwiki documentation page](http://www.ecyrd.com/JSPWiki/wiki/JSPWikiDocumentation).






