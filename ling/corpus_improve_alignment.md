Example: Sentences as paragraphs
================================

|                                                           |                                                              |
|-----------------------------------------------------------|--------------------------------------------------------------|
| Hallitus esitteli maaliskuussa 2009 uuden                 | Ráđđehus ovdanbuvttii njukčamánus 2009 ođđa                  |
| vähemmistöpoliittisen strategian esityksessään            | unnitlogopolitihkalaš strategiija proposišuvnnas Från        |
| Tunnustamisesta omaan valtaan – Hallituksen kansallisia   | strategiija nášuvnnalaš unnitloguid váras) (prop.            |
| vähemmistöjä koskeva strategia (esitys 2008/2009:158).    | 2008/2009:158).                                              |
| Strategia merkitsee useita muutoksia, jotka koskevat      | Strategiija sisdoallá máŋga rievdadusa                       |
| kansallisten vähemmistöjen oikeuksien vahvistamista ja    | nannen dihte daid nášuvnnalaš unnitloguid vuoigatvuođaid ja  |
| vähemmistöpolitiikan toteuttamisambitioiden parantamista. | alidit gudneáŋgirvuođa got unnitlogopolitihkka galgá         |
| Hallitus panostaa 70 miljoonaa kruunua uudistukseen, jota | čađahuvvot. Ráđđehus bidjá 70 miljovnna ruvnnu reforbmii mii |
| aletaan toteuttaa vuodesta 2010.                          | galgá čađahuvvot 2010 rájis.                                 |

Above is an example of a sentence alignment of two pdf documents. We see
that sentences have been cut off in the middle. The reason for this is
that these pdf documents have been converted as if each sentence is a
paragraph.

The name of the file with this content is
`prestable/tmx/fin2sme/admin/lansstyrelsen.se/faktablad_finska.pdf.tmx.html`

To fix this, one has to:

1.  Find the names of the [metadata](corpus_xsl_file.html) files
    belonging to the above file. Run the command
    `realign --files prestable/tmx/fin2sme/admin/lansstyrelsen.se/faktablad_finska.pdf.tmx.html`  
    Note the metadata names that are printed to the terminal.
2.  Open the metadata files, change the line
    `<xsl:variable name="linespacing" select="''"/>` to become
    `<xsl:variable name="linespacing" select="'all=2'"/>`  
    Save the files.
3.  Run the command
    `realign prestable/tmx/fin2sme/admin/lansstyrelsen.se/faktablad_finska.pdf.tmx.html`
4.  Reload
    `prestable/tmx/fin2sme/admin/lansstyrelsen.se/faktablad_finska.pdf.tmx.html`
    in the web browser to see if the sentence alignment has been
    improved.

The above steps improves the situation somewhat, but the sentence
alignment has not become perfect.

General approach to improving sentence alignment
================================================

To improve the sentence alignment, one must improve the quality of the
converted xml file. The general steps are:

1.  Run the command `realign --files <path-to-tmx-html-file>` to find
    the names of [metadata](corpus_xsl_file.html) and converted files.
2.  Have a look at the converted files to see if they are of bad quality
3.  Set a variable in the [metadata](corpus_xsl_file.html) files to try
    to improve the quality.
4.  Run the command `realign --convert <path-to-tmx-html-file>` to
    reconvert the files
5.  Repeat the above steps until the quality of the converted files seem
    to be ok, then run `realign <path-to-tmx-html-file>` to realign the
    sentences
6.  Open &lt;path-to-tmx-html-file&gt; in a web browser. If alignment is
    good, commit modified files. If not, repeat the steps above.

Improve sentence alignment of pdf files
---------------------------------------

When the sentence alignment between two pdf files is bad, it is possible
to improve it a lot by editing the [metadata](corpus_xsl_file.html) file
and setting various variables that are specific to pdf files.

The following variables in the [metadata](corpus_xsl_file.html) file
affect the content of the converted file:

-   **skip\_pages:**  
    skip specific pages that are not wanted in the converted file
-   **right\_margin, left\_margin, top\_margin, bottom\_margin:**  
    remove text above, below, to the right and left of the main content.
    This is typically removes page numbers, foot notes, reoccuring page
    headers and footers, etc.
-   **inner\_\*\_margin:**  
    remove a rectangle shaped part of the page
-   **linespacing:**  
    as the above example shows, if line spacing in a document is larger
    than the default 1.5, text lines will be converted to paragraphs. To
    improve this, set a larger value for this.

A more thorough documentation of these variables are found in [the
metadata template
file](https://gtsvn.uit.no/langtech/trunk/tools/CorpusTools/corpustools/xslt/XSL-template.xsl).
