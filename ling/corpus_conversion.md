Corpus conversion
============

# Introduction

This file provides an overview of the [corpus conversion
process](CorpusTools.html#convert2xml). Basically, when a new document
is recieved, it is classified according to the language and genre and
stored as such to the directory structure for the original files. All
the original files are left untouched. The text and structural
information contained in the document is extracted by a conversion
script and transformed to an xml-file. Xml-files are stored in separate,
parallel directory hierarchy where they can be easily accessed and used
as a test material for grammar checkers and spellers. The
metainformation associated with the document, such as the name of the
author, is stored in an xsl-file and appended to the xml-file during the
conversion. The metainformation is used elsewhere, in different corpus
applications.

# Working with the corpus


-   [Adding content to the
    corpus](corpus_repositories.html#Adding+content)
-   [Example session on how to add parallel files to the
    corpus](ParallelCorpusConversion.html)
