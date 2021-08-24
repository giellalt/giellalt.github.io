Converting PDF files
=========
# PDF


This is by far the most problematic format to convert to xml, often needing extensive manipulation of the variables in the metadata documents to get the wanted output in the converted documents.


Portable Document Format (PDF) is a digital document format developed by Adobe Systems and was introduced in in 1993. Each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, graphics, and other information needed to display it.


A loose definition of the format could be "digital paper".


Extracting text from a pdf document can be approximated to that of extracting text using OCR: to retain the "story" of the document, we often need to skip pages, headers, footers, page numbers, foot notes, etc.


# Converted document contains less (or no) text compared to the original document


Decrease margins to 0, then compare document to the converted output.


Then adjust variables to taste.


# Extracting individual articles from a document


Some documents contain many articles written by different authors. To correctly attribute the authors their text, we need to extract their article from the document.


First download the document into a corpus, preferrably using __add_files_to_corpus__. Remove the metadata document of the downloaded document, we will not need it.


Make a soft link to the document, e.g.


```
ln -s original.pdf original-author1-author2.pdf
ln -s original.pdf original-author3-author4.pdf
```


Run convert2xml on both the soft-linked documents to make basic metadata files belonging to these soft linked files.


```
convert2xml original-author1-author2.pdf
convert2xml original-author3-author4.pdf
```


Then use __skip_pages__ in the files `original-author1-author2.pdf.xsl` and `original-author3-author4.pdf.xsl` so that only the wanted pages are left in the converted documents.


# Order in the converted document is not retained


Run the command:
```
pdftohtml -hidden -enc UTF-8 -stdout -nodrm -i -xml documentname.pdf | less
```


to see if order of the text is contained. This is the command that is used by the pdf converter to do the first conversion from pdf to xml. It produces a xml format specific to the [poppler](https://poppler.freedesktop.org/) tools, which pdftohtml is a part of.


If the order of the text from the above content is different from the content of the converted document, then there is a bug in the pdf converter. File a bug on bugzilla. Use the **product**
"Corpus", **component**
"xml conversion".


# Most of the text lines in the pdf documents are interpreted as paragraphs <p>


Have a look at the documentation on linespacing below. 




# Variables specific to pdf documents


# Skipping pages


Typical uses are to skip front page, pages containing tables of content, indexes, etc. In short, removing pages not relevant for the "story" of the document.


```
    <xsl:variable name="skip_pages" select="''"/>


Mark which pages should be ignored.
The format for this is a comma separated list of page numbers
that should be skipped. It is also possible to use ranges.
Examples:
1, 2, 3, 4
1, 6-10, 15, 20, 25-30
```




# Margins


This option is used to remove text outside a given rectangle. Typical uses are to remove page numbers, page headers, page footers, foot notes at the bottom of the page, info boxes on the left or right of the "real" document.


```
    <xsl:variable name="right_margin" select="''"/>
    <xsl:variable name="left_margin" select="''"/>
    <xsl:variable name="top_margin" select="''"/>
    <xsl:variable name="bottom_margin" select="''"/>


Margin of a page in a pdf document expressed as a percentage of
the page width and height.


The default for all margins are 7


Text outside these margins will be ignored.


The format for margin line is:
[all|odd|even](pagenumber)=integer


Margin lines *must* contain the keywords all, even, odd or a page
number followed by a = sign and an integer. Pages with the same margin
may be separated with ;.


The integer must be between 0 and 100.


If there are several values, they are divided by commas.
Setting different margins for odd and even pages is done by writing
e.g. odd=8, even=15
It is also possible to set margins for particular pages:
8=8, 10=12
It is also possible to set margins for odd and even pages and
exceptions from those rules on particular pages.


Examples on how the select part could look:
odd=5, even=8, 8=15, 11=3
all=9, 8=12
1;3;8=20, 4;5;7=10
```


# Removing content from a page


Typical uses of this is to remove info boxes inside the margins of a page.


```
    <xsl:variable name="inner_right_margin" select="''"/>
    <xsl:variable name="inner_left_margin" select="''"/>
    <xsl:variable name="inner_top_margin" select="''"/>
    <xsl:variable name="inner_bottom_margin" select="''"/>


Cut out a part from a page in pdf documents. Has the same format
as *_margin above. For a given page, all four margins
must be defined.
```


# Line spacing


The pdf converter in CorpusTools uses guesswork to glue text lines into paragraphs. Usually documents have a line spacing of 1.5 and less. This means that from the bottom of a line to the bottom of the next line there is maximally 1.5 times larger than the font size.


Some documents, typically student texts, have a larger linespacing. When using the default linespacing, lines in the documents are interpreted as paragraphs leading to output like this:


```
<p>This sentence</p>
<p>is divided</p>
<p>into many paragraphs,</p>
<p>although it clearly</p>
<p>to a human eye,</p>
<p>only is a single</p>
<p>paragraph.</p>
```


Increasing the value for this variable improves this situation.


```
    <xsl:variable name="linespacing" select="''"/>


The default is set to all=1.5.


The format for linespacing is:
[all|odd|even](pagenumber)=float (where float is written as integer.integer,
not integer,integer).


linespacing lines *must* contain the keywords all, even, odd or a page
number followed by a = sign and a floating point number. Pages with the
same linespacing may be separated with ;.


If there are several values, they are divided by commas.
Setting different linespacing for odd and even pages is done by writing
e.g. odd=8, even=15
It is also possible to set linespacing for particular pages:
8=8, 10=12
It is also possible to set linespacing for odd and even pages and
exceptions from those rules on particular pages.


Examples on how the select part could look:
odd=5, even=8, 8=15, 11=3
all=9, 8=12
1;3;8=20, 4;5;7=10
```




