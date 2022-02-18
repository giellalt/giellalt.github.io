XSL-files
=========

The purpose of the xsl files is:

-   Add metadata about the original file. Examples of this is info about
    the author, publishing year, which language it has been translated
    from, who added the file to the repository, pointers to parallel
    files, etc.
-   Add info about which parts of a document to exclude or include. This
    especially handy for pdf documents, which is a fickly file format to
    convert to xml. There is also support to do the same for clean text,
    html and epub files.
-   Add processing instructions, such as the languages to which the text
    is categorized or some information of the text layout.

The xsl-file is created when a file is added to a [corpus
repository](corpus_repositories.html) using
[add\_files\_to\_corpus](/ling/CorpusTools.html#add_files_to_corpus).
The xsl-file is stored to the same directory as the original document,
with the same name as the original document, and suffix `.xsl`.

The variables are defined by expressions as the following:

    <xsl:variable name="title" select="''"/>
    <xsl:variable name="author" select="''"/>
    <xsl:variable name="author-gender" select="'f'"/>
    <xsl:variable name="publisher" select="''"/>
    <xsl:variable name="translated-from" select="''"/>

    <xsl:variable name="mainlang" select="'sme'"/>
                

The information is updated by adding the new value to the
"select"-field, inside single quotes. Most of the fields, such as the
title and the name of the author can contain free text, but the values
of some fields are restricted.

The template for the xsl files is
[$GTHOME/tools/CorpusTools/corpustools/xslt/XSL-template.xsl](https://gtsvn.uit.no/langtech/trunk/tools/CorpusTools/corpustools/xslt/XSL-template.xsl).
How to fill in values are documented in that document.
