Overview and introduction
=========================

The bibles are an important source of text in a language. It is even
more imprtant source of parallel text, since the bible translations
generally preserve the format of the text irrespectible of the target
language. In this project, we have recieved bible texts for North and
Lule Sámi, Bokmål, Nynorsk, Swedish and Finnish. Since the bibles have a
specific format which requires separate processing than the other files,
there is a documentation included.

Bible as a text source
======================

In general..

The bible files are part of the general conversion process, which is
described in the
documents[corpus\_conversion.html](corpus_conversion.html) and
[corpus\_conversion\_tech.html.](corpus_conversion_tech.html) This
conversion process is aimed to produce texts that are ready for
linguistic analysis and research. The texts contain some structure, such
as the sections and paragraphs. Similarly, titles, lists and tables are
marked separately. The original files recieved from text producers are
preserved as such and the conversion process is always started from the
original file. The bibles however, have a special structure with books,
chapters and verses; this structure is implemented very differently
depending mostly on the type of the source file. For example,
[paratext](http://confluence.ubs-icap.org/display/USFM/Home) is a rich
description language designed for bibles but in text- or word documents,
less information of the structure of the bible text is available.

One goal of the processint of the bible text is to preserve or restore
the original structure of the text. The bible texts can be better
compared, the text can be searched using verse and chapter number and
the structural information can be used in text alignment.

XML-format of the bible
-----------------------

The XML format of the analyzed text is basically the following:

     <book title="Fyrste Mosebok">
        <chapter number="1">
          <section title="Gud skaper verda">
            <p>
              <verse number="1"> I opphavet skapte Gud himmelen og jorda.   </verse>
              <verse number="2"> Jorda var aud og tom, og mørker låg over havdjupet. 
                                 Men Guds Ande sveiv over vat net. </verse>
              ...
            </p>
            ...
         </section>
       ...
       </chapter>

See the description of the dtd for the exact format. This format is
achieved by simplifying the original structure in some cases. For
example, in many bible versions, the verse is printed without the number
and taken out from the paragraph. Some versions may not have subtitles,
so the section layer may be missing. The paragraph-marks are not added
when they are not explicitely marked in the document.

The available files
-------------------

The xml-formatted bible text is stored at
`corp/orig/lang/nt             `and `ot `-directories. The files are
marked with suffix `.bible.xml.`

Most of the bible texts are under standard license conditions, which are
explained in... At the moment, the corpus hierarchy contains the
following bible texts:

-   **sme and smj:**  
    New Testament

<!-- -->

-   **nno and nob :**  
    Genesisi and Psalms

<!-- -->

-   **swe:**  
    New Testament, Genesis and Psalms

<!-- -->

-   **fin:**  
    New and Old Testaments, 1938 edition

The tool for converting bibles to text: `bible2xml.pl`
------------------------------------------------------

Usage:

    corpus-analyze.pl [OPTIONS] file.bible.xml

The structure of the bible text is converted to the project's internal
format. The verse-markings are removed and the verses are combined to
form longer paragraphs. A sentence many times spreads over more than one
verse, so when the verses are combined, there sentece structure is
preserved.

Technical details of cleaning the bible texts.
----------------------------------------------
