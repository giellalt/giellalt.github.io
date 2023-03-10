Introduction to working on corpora at Giellalt
==============

This document will teach the user how to convert files in the corpus
repositories to xml, and how to extract text from these documents.

Converting the corpus to xml
============================

To be able to convert files in our repository, you have to [check out
our tools and do a basic setup](/infra/anonymous-svn.html#Preparation).

The corpus is stored using
[svn](http://en.wikipedia.org/wiki/Apache_Subversion). Check out the
[free part](corpus_repositories.html#The+free+part) and, if you have
access to it, [the restricted
part](corpus_repositories.html#The+bound+part).

To be able to easily use the content of the corpus, we need to convert
the original files stored in various formats to a
uhttps://giellalt.uit.no/infra/anonymous-svn.html\#Preparationniform
format. This is achieved using the script convert2xml.

To convert all the original files inside a repository to xml, open a
terminal and go to the working copy, and issue the command:

    convert2xml orig

If you want to convert a specific file, issue the command:

    convert2xml <filename>

The graphical show that follows indicate lines looking like this:
"...\|......". Here, each symbol represents a file. The dots indicate
"(formally) successful conversion", and the pipe symbols indicate flawed
conversion. Note that the conversion will be flawed if you are offline
while converting, as the conversion scripts takes the dtd from the net
(we should consider making this more robust).

Extract text from the corpus
============================

The converted xml files are found in the `converted/` catalogue. To get
all North Saami text, issue the command `ccat -a -r -l sme converted`.
To get other languages, exchange `sme` with e.g. `sma` (South Sami) or
`smj` (Lule Sami). The options available for `ccat` are listed with the
command `ccat -h`.

Divvun/Giellatekno corpus documentation
=======================================

-   The tagged corpus files
    -   [How to create an analyzed corpus](corpus_analyze.html)
    -   [A plan for building our external corpus](corpus_plan.html)
    -   [The &lt;Correct!&gt; corpora](correct-dir.html)
-   The parallel corpus files
    -   [ParallelCorpusConversion](ParallelCorpusConversion.html)

Other corpora
=============

-   [How to use Wikipedia as a corpus](WikipediaAsCorpus.html)
-   [How to build corpora from Wikipedia
    editions](wikipedia_as_corpus.html)

Old links (kept for now)
========================

[DTD -discussion](corpus_dtd.html)

[Conversion](corpus_conversion.html)
