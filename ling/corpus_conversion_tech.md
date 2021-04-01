Conversion process
==================

[This text in Spanish \~ Este texto en español (translation: Maria
Ramos)](http://www.webhostinghub.com/support/es/misc/documentacion-tecnica)

This document describes the more technical side of the corpus
infrastructure. The document
[corpus\_conversion.html](corpus_conversion.html) contains the user
documentation as well as the description of the basic infrastructure.
The usage of the script convert2xml.pl is documented there, this
document describes the contents of the script.

All the binaries and scripts used in the corpus conversion process are
stored under $GTHOME/gt/script/corpus, except the tools that are already
installed to some common bin. The xsl-files which transfer the
structural information of different source files (docbook2xml.xsl and
xhtml2xml.xsl) and the template for file specific xsl-files
(XSL-template.xsl) are also stored there. The directory
`$GTFREE|$GTBOUND/tmp/` is reserved for temporary files and log files
that are created during the conversion. The log files contain the system
commands executed during the conversion as well as the warnings and
error messages. The log file is named after the file that is converted.

The next sections describe the conversion processes for each document
type and the tools used. The conversion includes hyphen-detection and
language recognition as well as decoding the wrongly utf-8 -encoded
characters.

Word documents
--------------

Microsoft Word documents are converted with the program `antiword` to
produce a docbook xml, and piped to the xslt program xsltproc, that
converts to our XML-format. We have an xsl-document docbook2corpus.xsl,
that is used in converting the document.

RTF documents
-------------

RTF documents are converted to html using
[unrtf](http://www.gnu.org/software/unrtf/), then to our xml format
using
[xhtml2xml.xsl](https://gtsvn.uit.no/langtech/trunk/gt/script/corpus/xhtml2corpus.xsl).

Ávvir xml documents
-------------------

These documents are converted to our xml format using
[avvir2corpus.xsl](https://gtsvn.uit.no/langtech/trunk/gt/script/corpus/avvir2corpus.xsl)

SVG documents
-------------

These documents are converted to our xml format using
[svg2corpus.xsl](https://gtsvn.uit.no/langtech/trunk/gt/script/corpus/svg2corpus.xsl)

Plain text document
-------------------

Plain text documents that are stored to the database should have the
extension `.txt`. The encoding of a text document is solved using the
iconv -tool. If there are special markings for headings and paragraphs,
like in some newspaper texts, they are used in creating the document
structure. Otherwise, the empty lines mark paragraph breaks and short
lines beginning with numbers are treated as titles.

Adobe document
--------------

Pdf documents are converted to plain text using
[pdftotext](http://poppler.freedesktop.org/), and then converted to our
xml format using
[langTools::Corpus::txt\_clean](https://gtsvn.uit.no/langtech/trunk/gt/script/langTools/Corpus.pm)

Web-document
------------

Web documents are first cleaned using the program [HTML
Tidy](http://tidy.sourceforge.net/) , using several command line
options.. The output is converted to xml using the xsl-file
`xhtml2xml.xsl`.

Paratext document
-----------------

Paratext is a file format for publishing and interchanging basic
Scripture texts in multiple languages. It is intended to be used for all
aspects for Bible layout and publishing. The paratext format is based on
backslash codes, format called USFM, see e.g
<http://confluence.ubs-icap.org/display/USFM/Home> The paratext files
are converted using a Perl script paratext2xml.pl which forms basic
xml-structure which roughly corresponds our corpus.dtd. The files that
are added to the corpus repository should have the suffix .ptx.

Hyphenation: add-hyph-tags.pl
=============================

        Usage: add-hyph-tags.pl [OPTIONS] FILES
        Tag the hyphenation marks.
        Options
        --all            search the whole text for hyphenation points.
                     The default is to search only the end of the lines.
        --infile=<file>  the input file.
        --outfile=<file> output file.
        --help           prints the help text and exit.

The script replaces hyphens in the text with tag &lt;hyph/&gt;. The
hyphens are searched by default at the end of the line. The option --all
can be used for replacing the hyphens all over the text. The aim of the
script is to replace only "real" hyphens, i.e. the ones that mark real
hyphenation points. The hyphens in e.g. numeric expressions are not
replaced. The words which precede a hyphen but are not hyphenation
points such as "ja" in expression "davvi-, julev- ja oarjelsámegillii"
are taken into account.

The reason why the hyphens are tagged by default only at the line ends
is the existence of e.g. the following correct hyphenation marks which
do not mark a hyphenation point. Some of these occur at the line ends
and cause errors.

    teknihkalaš-luonddudieđalaš
    Norplus-prográmma
    norgga-ruoŧa
    dánska-norgalaš

The script takes into account the xml-notation of the file. If the last
word of a paragraph marked with &lt;/p&gt; ends with a hyphen, the next
paragraph beginning with &lt;p&gt; is searched for the rest of the word.
Some text extraction tools such as antiword may create this kind of
structures. The script also reformats the text by removing white space,
moving &lt;p&gt;-tags and changing the place of the line break.

Language recognition
====================

The newly created xml-document is parsed and the language of each
paragraph is recognized using the tool `pytextcat`. The tool is
described in the document [Language recognition using
pytextcat](langrec.html). The language recognition tool is not perfect,
but mostly it gets it right.

The document always has a main language, and only the differing
languages are marked in the xml-structure. By default, all the languages
in the language model (there are many) can occur in the document and
they are taken into account in the categorization process. However,
since the e.g. the different Sámi language easily confuse with each
other and Finnish, the language recognizion can be restricted to some
subset of these languages. The document can be explicitely marked as
monolingual, or multilingual containg text fractions of some of the
abovementioned languages. You should set these variables in the
file-specific xsl-file.

XSLT-scripts
============

The structural information, such as titles and paragraphs, that is
contained in MS Word of pdf document is preserved in the xml-document.
The antiword program that is used in converting the Word documents
produces xml docbook format. That format is further transformed to our
xml-format, using xsl-script docbook2xml.xsl. The similar script
xhtml2xml.xsl is used in transforming the structural information in html
document to our xml-format. Pdf-files are first converted to html and
the same xsl-script is used.

Word documents may contain metainformation, such as the name of the
owner of the file, which is preserved as well. The other metainformation
is added to the xml-file through the file-specific xsl-script. The
process is explained in the [usage
documentation](corpus_conversion.html#XSL-files). The file specific
xml-file is copied from the file XSL-template.xsl, located in corp/bin
-directory. It contains variables for adding the metainformation. These
variables always overrides the metainformation coming from the original
document. The metainformation recieved from the web upload script is
stored straight to the file-specific xsl-file, so the information can be
altered manually.

The script `common.xsl` contains instructions for building the final
xml-structure of the corpus file. The structure is validated against the
document type definition, <http://giellatekno.uit.no/dtd/corpus.dtd>
common.xsl is included in every file-specific xsl-script.

There is a special script `empty.xsl `to be used instead of common.xsl
when the document cannot be converted to xml-structure. This can happen
for several reasons, but the most common reason is that the character
encoding in the original document is somehow broken; the Saami
characters may be missing or there are several character encodings used,
when the result of the conversion is not satisfactory. The document
could be removed from the database as well, but e.g. some newspaper
documents are considered to be part of the distribution.

Useful scripts for corpus maintainer
====================================

There are several small scripts for corpus database maintenance and
cleaning. They reside in `gt/script `-catalog. The most important ones
are listed here:

-   **corpus\_summarize.sh:**  
    The script is used for generating summarizing information of the
    corpus files and storing them to cvs, under the catalog
    `gt/doc/lang/corp`. The script calls the Perl-script
    `                corpus_summary.pl`, which generates the summaries.
    The file `corpus-content.xml` contains a list of all the files in
    the corpus database and some relevant information like the license
    and size. The files `corpus-susummary.xml` and
    `corpus-summary-YYYY-MM-DD.xml` contain the total count of the
    documents as well as the number of the documents in different
    subdirectories. The xml-files are further transformed to forrest
    documentation.
-   **corpus\_zip.sh:**  
    The script copies the free-catalog from the corpus database and
    creates zipped tar-archives of it. An archive is created of both the
    xml files and the files that contain only the extracted text in the
    selected language. The archives are copied to the download area.
-   **corpus\_chmod.sh:**  
    The script is used for correcting the group ids and permissions of
    the corpus files in different catalogs. Running the script requires
    sudo rights.
-   **change\_xsl\_generic.py:**  
    for i in \`find . -name \\\*.xsl\`  
    do  
    change\_xsl\_generic.py translator\_fn Pirjo translator\_ln
    Paavaniemi  
    translator\_gender fem translator\_nat FI $i  
    done  
-   **gt2ga.sh:**  
    Copies the selected files to G5 for analysis, compiles the latest
    versions of the tools and runs the analysis for the whole corpus.
    The analyzed files are stored under ga/lang/genre, the whole genre
    in one file. The script is currently used only in G5.
-   **corpus\_fix\_meta.sh:**  
    Some of the corpus directories contain several files with similar
    metainformation, e.g. all the newspaper texts may have the same
    collection information, the name of the newspaper. This script is
    planned for updating several file-specific xsl-files at the same
    time. The directory where the files are searched is given in
    variable inside the script. The script uses xsl-script
    `change_xsl.xsl `for the transformation. The xsl-script should be
    modified for the different uses and the variable containing the path
    to the script changed. The version control of the xsl-files is
    handled automatically, although sometimes stealing a lock is
    necessary and requires some typing.
-   **corpus\_rename.sh:**  
    The names of the corpus files have to face some basic requirements:
    They should be in utf-8 encoding, in NFC, not contain any special
    characters that would harm the shell ("´? etc.), have spaces
    replaced by underscores or removed and have the correct extensions
    (.txt, .html, .doc, .pdf or .ptx). This script searches whole
    directories for filenames and changed them to confront these
    requirements. If the file already has some extension, it is not
    changed.
-   **corpus\_bad\_encoding.sh:**  
    Some of the character set conversions do not succeed well enough for
    the purposes of linguistic analysis. The files may contain different
    encodings in different parts of the file, single unrecognized
    characters or the character set is not recognized at all. Those
    files can be located using this script.
-   **Makefile:**  
    There is a Makefile in /usr/local/share/corp for converting files
    that are not up-to-date concerning the original or file-specific
    xsl-file. Usage: `make LANGUAGE=sme GENRE=facta` or
    `make path/to/file.xml`.

corpus.dtd
==========

corpus.dtd contains the document type definition for the xml-structure.
It is stored in <http://giellatekno.uit.no/dtd/corpus.dtd>The fields are
briefly described in the following:

    document (header,body)

header
------

The document is divided into to elements: header that contains the
metainformation and body for the document content. The header contains
the following fields:

-   **`title`:**  
    The title of the document
-   **`genre`:**  
    The document genre can be one of the following: admin, bible, facta,
    ficti or news.
-   **`author+`:**  
    The author of the document is either person or "unknown".
    -   **`person`:**  
        Person consist of following attributes: firstname, lastname,
        born, sex and nationality.
-   **`translator*`:**  
    If the document is translated, the translator is either "unknown" or
    person.
-   **`translated from*`:**  
-   **`year?`:**  
    Publishing year, or if the document is unpublished, the year the
    document was written.
-   **`place?`:**  
    Publishing place, or if the document is unpublished, the country or
    place where the document was written.
-   **`publChannel`:**  
    Either publication or unpublished
    -   **`publication`:**  
        Consists of elements publisher, ISBN and ISSN.
-   **`collection`:**  
    The name of the journal, book or article collection.
-   **`wordcount`:**  
-   **`availability`:**  
    Either free or license
    -   **`license`:**  
        License type is "standard" or "other". The type "standard"
        indicates a license agreed with the basic contract
-   **`submitter?`:**  
    The person or instance who stored the document to the database.
    Contains elements for name and email address.
-   **`multilingual?`:**  
    If the document is multilingual, this element describes the
    languages that occur in the document.
    -   **`language+`:**  
        Language is given as an xml:lang attribute.
-   **`origFileName?`:**  
    The original name of the file. The filename may change during the
    conversion to xml.
-   **`metada`:**  
    Either "complete" or "uncomplete".
-   **`version`:**  
    Contains version information of different conversion tools.

body
----

The document body contains sections and text-entities (`%text.ent`):

-   **`%text.ent`:**  
    Basic text-entites are list, table, p and pre.
-   **`section `:**  
    Contains sections and text-entities.
-   **`list`:**  
    Consists of paragraphs `p` with type "listitem".
-   **`table`:**  
    Consist of rows:
    -   **row:**  
        Contains paragraphs `p` with type "tablecell".
-   **`p`:**  
    The paragraph type is given as an attribute: title, listitem, text
    or tablecell. Paragraph contains text and elements em, hyph and
    error:
    -   **`em`:**  
        Emphasis type: bold, italic, underline or delimited.
    -   **`hyph`:**  
        Empty hyphenation tag
    -   **`error`:**  
        Error marking in the text, has the correct replacement as an
        attribute.
-   **`pre`:**  
    Programlisting or other unformatted text.

Character decoding: samiChar::Decode.pm
=======================================

Some of the sámi characters are wrongly utf-8-encoded by the conversion
tools, like pdftotext. There is a Perl module samiChar::Decode.pm for
decoding the sámi characters.

SYNOPSIS
--------

               use samiChar::Decode;

               my $file = "file.txt";
               my $outfile = "file.txt";
               my $encoding;
               my $lang = "sme";

               $encoding = &guess_encoding($file, $lang);
               &decode_file($file, $encoding, $outfile);

               $encoding = &guess_text_encoding($file, $outfile, $lang);
               &decode_text_file($file, $encoding, $outfile);

DESCRIPTION
-----------

samiChar::Decode.pm decodes characters to utf-8 byte-wise, using code
tables. It is planned for decoding the Saami characters in a situation,
where the document is converted to utf-8 without knowing the original
encoding. The decoding is implemented by using code table files, so the
module can be used for other conversions as well. The output is however
always utf-8.

The function `guess_encoding `is used for guessing the original
encoding. It takes into account only the most common Sámi characters and
their frequency in the text. The file is further decoded using the
function `decode_file.`The functions `guess_text_encoding `and
`decode_text_file `can be used for guessing the encoding and decoding a
file which is not utf-8 encoded but in it's original encoding. This is
the case with many text files that are not converted by any tool. Thes
functions are implemented using the iconv conversion tool.

### Code tables

Code tables are text files with the following format: Three
space-separated columns:

           Column #1 is the input char (in hex as 0xXX or 0xXXXX))
           Column #2 is the Unicode char (in hex as 0xXXXX)
           Column #3 the Unicode name

Most of the code tables are available at the Unicode Consortium:
<ftp://ftp.unicode.org/Public/MAPPINGS/>

. Some of the code tables like samimac\_roman and levi\_winsam are
composed from two code tables, the one that is used as input encoding
and another that is used as the file was converted to utf-8.

           samimac_roman: codetables samimac.txt and ROMAN.txt
           levi_winsam: codetables levi.txt and CP1258.txt

levi.txt and samimac.txt are available under Trond’s home page at:
[smi-kodetabell.html](http://www.hum.uit.no/a/trond/smi-kodetabell.html).
The codetables are composed using the function
"combine\_two\_codings($coding1, $coding2, $outfile)" which is available
in this package.

These encodings are available:

           latin6 => iso8859-10-1.txt
           plainroman => ROMAN.txt
           CP1258 => CP1258.txt
           iso_ir_197 => iso_ir_197.txt
           samimac_roman => samimac_roman.txt
           levi_winsam => levi_CP1258.txt
           8859-4 => 8859-4.txt
           winsam => winsam.txt

### Guessing the input encoding

The original input encoding is guessed by examining the text and
searching the most common characters. The unicode characters in hex are
listed in hash %Char\_Tables for North Saami for example. The
uncommented characters are the ones that take part into guessing the
encoding.

The encodings are listed in the hash %Charfiles, they are tested one at
the time. The occurences of the selected characters in that encoding are
counted and the one with most occurences is returned. There is a place
for more statistical analysis, but this simple test worked for me.

If there is no certain amount of characters found, the test returns -1,
which means that the characters should be already correctly utf-8
encoded. Or, the encoding was not found from the code tables.

INSTALL
-------

To your own computer: copy the directory `gt/script/samiChar` to
`/System/Library/Perl/5.8.6/`. The module is now installed to victorio.

Web upload interface
====================

The main page of the web upload interface is
<http://www.divvun.no/upload/upload_corpus_file.html>

The source of the page can be found in directory
xtdoc/sd/src/documentation/content/xdocs/upload/. There are two
cgi-scripts involved in the upload, upload.cgi and xsl-process.cgi. They
are both in gt/script/cgi-scripts/ -catalog. upload.cgi uploads the file
the user has selected, converts it to xml and prints out the
metainformation form. The xsl-process.cgi handles the metainformation
form and stores the contents of the fields to the file-specific
xsl-file. The xml-file is converted once more with the updated
metainformation.

All the files remain in the corp/tmp -directory. Every succeeded upload
triggers an email message to the maintainer, who has to move the files
manually to their place. The email notification is send as well if there
is an error during the upload.

The file names are changed to secure ones and orig-hierarchy is checked
for a file with the same content.

Corpus DTD
==========

[Corpus DTD](corpus_dtd.html)
