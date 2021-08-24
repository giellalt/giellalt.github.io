Corpus analysis
==============

# Overview and introduction


One of the goals of the giellatekno-project is to provide easy access to
the text materials for non-commercial purposes such as research. The
text materials will be available through a query processing tool: a tool
with which a user can fetch different types of data from the Sámi
corpora. The raw corpus material is collected in co-operation with the
owners of the documents. The documents are preprocessed so that the
texts can be used in research. The process of text collection is
described in documents [corpus\_conversion.html](corpus_conversion.html)
and [corpus\_conversion\_tech.html.](corpus_conversion_tech.html) This
documents describes the process where the document is transferred to the
graphical corpus interface. The graphical corpus interface is developed
and maintaned by[Textlaboratoriet](http://www.hf.uio.no/tekstlab/)in the
university of Oslo.

# How to parallelize documents


Files that are ready to be parellellised exist in
`$GTFREE/prestable/converted`. The steps to parallelize between sme and
nob are:

1.  Compile the tools needed for further refinement of the input files:
    1.  `cd $GTHOME/gt`
    2.  `make GTLANG=sme`
    3.  `make GTLANG=sme abbr`
    4.  `cd $GTHOME/st/nob/src`
    5.  `make`
2.  Make an anchor file using the command (note that different text
    domains may have different additional anchor files):
    -   `generate-anchor-list.pl --lang1=sme --lang2=nob --outdir=$GTFREE $GTHOME/gt/common/src/anchor.txt                      $GTHOME/gt/common/src/anchor_admin.txt                             `
3.  Compile TCA2, the sentence aligner, using these commands:
    -   `cd $GTHOME/tools/alignment-tools/tca2`
    -   `ant`

The files may be parallellised in commandline mode.

1.  Parallelize the files in `$GTFREE/prestable/converted/sme` and
    `$GTFREE/prestable/converted/nob` using this command:
    -   ``                       for file in `find $GTFREE/prestable/converted/sme -name \*.xml | grep -v .svn`;                       do corpus-parallel.pl --lang1=sme --lang2=nob $file ;                       done                       ``
2.  The output is found in
    `$GTFREE/prestable/tmx/smenob/<sme-filename>.tmx`

The files may also be parallellised in graphical mode.

1.  Issue the command
    -   `                      java -jar $GTHOME/tools/alignment-tools/tca2/dist/lib/alignment.jar                                 `
2.  To load files when starting tca2 in gui mode, issue this command:
    -   `                         java -jar $GTHOME/tools/alignment-tools/tca2/dist/lib/alignment.jar -anchor=<anchorfilename>                      -in1=<thefirstfileofapairtoalign> -in2=<thesecondfileofapairtoalign>                                 `

To parallelize the other way, exchange the values for lang1 and lang2 in
step 2 and 4, and change the find command in step 4 to
`find              $GTFREE/prestable/converted/nob`

# Analyzing the corpus text.


## The files and formats


The project-internal corpus format contains the basic elements, such as
paragraphs, lists and tables that can be extracted from the original
document format. The xml-format of the Saami corpus resources is
documented in [corpus\_conversion.html](corpus_conversion.html)

The original name of the document is preserved in the process with the
suffix indicating the document type, e.g. `file.doc.` When the text is
extracted from the original document and moved to xml-structure the file
gets the extension `.xml`. So the resulting file is `file.doc.xml`. This
file is used as a basis for analysis. The analyzed corpus text is by
default stored to a file `file.doc.analyzed.xml. ` There is one
intermediate format which is used for alignment of the parallel texts,
those files are indicated with suffix `.sent.xml`, e.g.
`file.doc.sent.xml.`

The xml-files reside in either `$GTFREE/converted` or
`$GTBOUND/converted`

## XML-format of the analyzed corpus.


The XML format of the analyzed text is basically the following:

    <p>
     <s>
      <w form="The">
      <reading lemma="the" POS="DET" />
      </w>
      <w form="flies"> 
      <reading lemma="fly" POS="N" />
      </w>
     </s>
    </p>

See the description of the dtd.

## The tool to analyze corpus files: `corpus-analyze.pl`


Usage:

    corpus-analyze.pl [OPTIONS] XML-FILE

The document is stored to the corpus database in xml-format that consist
of sections, paragraphs &lt;p&gt;, lists and tables. Table and list
elements, which often contain numeric data, are excluded from the
document when it's prepared for analysis. The paragraphs that are marked
in some other language than the main language of the document can be
exclulded as well.

The following options regulate the exclusion and inclusion of elements:

    --tables      Take also <table> -elements, which are excluded by default.
    -T  
    --lists       Take also <list> -elements, which are excluded by default.
    -L
    --all         Take all elements.
    -a

The other options:

    --help               Print the help text and exit.
    -h
    --lang <lang>        The main language of the document. The language
                         defines the path to the tools.
    -l <lang>
    --tags=<file>        Location of the file korpustags.txt
    -t <file>
    --output=<file>      The file for output.
    -o <file>
    --add_sentences      Add <s>-tags to the document during analysis.
                         Use with files which are not aligned.
    --s
    --only_add_sentences Add <s> tags using preprocessor and abbr.txt.
                         Do not analyze.
    -n

For example, to analyze the file `$GTFREE/sme/admin/sd/file.doc.xml`

use the following command:

    corpus-analyze.pl --add_sentences --lang=sme --output=file.doc.analyzed.xml $GTFREE/sme/admin/sd/file.doc.xml

The files in the corpus hierarchy do not contain sentence elements
(&lt;s&gt;). Sentence elements are the basic units of analysis and have
to be added with --add\_sentences or -s. If this option is not given,
the &lt;s&gt; tags are assumed to be already added. The
&lt;s&gt;-elements may be added without analysis, with command:

    corpus-analyze.pl --only_add_sentences --lang=sme --output=file.doc.sent.xml $GTFREE/sme/admin/sd/file.doc.xml

At the same time when &lt;s&gt;-tags are added, the sentences are
numbered and given id's. These id's are used in alignment process.

# Parallel files


Each xml-document in the corpus database contains field for parallel
documents, which exist in the corpus hierarchy. For example, the header
section of the North Saami document `file.doc.xml`may contain the
fileds:

    <parallel_text location="file_n.doc" xml:lang="nob"/>
    <parallel_text location="file_s.doc" xml:lang="smj"/>

This means that there are two parallel documents for this document in
the corpus hierarchy. The "location" attribute contains the name of the
parallel file, which is assumed to be found in the same subdirectory as
the file `file.doc.xml`. The information of the parallel files can be
updated to the xml-document by editing the file-specific xsl-file, see
the document
[corpus\_conversion.html](corpus_conversion.html#Parallel+texts) for
instructions. These fields conduct the search and processing of the
parallel texts.

## Preprocessing for alignment


Parallel files are processed by the script `corpus-parallel.pl`. Usage:

    corpus-parallel.pl [OPTIONS] [XML-FILE]

    --help             Print this help text and exit.
    -h
    --dir=<dir>        The directory where the files are searched.
    -d
    --lang=<lang>      The main language.
    -l <lang>
    --plang=<lang>     The language of the parallel document(s).
    -p <lang>
    --list             List the parallel files, use with option --dir.
    -L
    --outdir=<dir>     The directory where the output files are stored.
                       Default is /usr/local/share/corp/tmp
    -o

The parallel documents in some directory may be listed with command:

    corpus-parallel.pl --list --lang=sme --dir=$GTFREE/sme/admin > file-list.txt

The parallel files are preprocessed for alignment by detecting sentence
boundaries, numbering each sentence and placing it inside
&lt;s&gt;-element. The command to use is:

    corpus-parallel.pl --lang=sme --plang=nob $GTFREE/sme/admin/file.doc.xml

The script calls the Perl script corpus-analyze.pl for adding the
sentence-elements. The tools that are used for sentence boundary
detection have to be changed in that script. The resulting files are
stored in `$GTFREE/tmp`, the resulting file names are:
`file.doc.sent.xml, file_n.doc.sent.xml.`

## Aligning documents


The documents are aligned using [TRANSLATION CORPUS ALIGNER (TCA)
2](http://gandalf.aksis.uib.no/tca2/)by Knut Hofland and Øystein Reigem,
slightly modified by us so to easily use it from the command line.

The program gets as input the files that contain numbered
s-elements:`file.doc.sent.xml` and `file_n.doc.sent.xml`.

The program outputs three files:

-   one file that contains the pairings of the sentence-id's. The file
    name is generally `file.doc.sent.xml_file_n.doc.sent.xml.xml` which
    indicates the order of the paired id lists.
-   a file pair where each line corresponds to the parellellised content
    in the other file. These files are named `file.doc.sent_new.txt` and
    `file_n.doc.sent_new.txt`

# Morphological information


The file korpustags.txt contains the list of tags and their internal
distrbution. The list below list is not up-to-date, please see the file
korpustags.txt in cvs.

## Corpus tags


There are the following tag categories:

-   Part of speech: N A V Adv Pron CS CC Adp Po Pr Interj Pcle Num
-   Number or Person/Number: Sg Pl Sg1 Sg2 Sg3 Du1 Du2 Du3 Pl1 Pl2 Pl3
    ConNeg
-   Case: Ess Nom Gen Acc Ill Loc Com
-   Possessive suffix: PxSg1 PxSg2 PxSg3 PxDu1 PxDu2 PxDu3 PxPl1 PxPl2
    PxPl3
-   Clitic: Qst Foc
-   Grade: Comp Superl
-   Attribute: Attr
-   Derivation (We must consider whether to use these..): Pass h upmi
    ...
-   Polarity: Neg
-   Mood: Ind Pot Cond Imprt ImprtII
-   Tense: Prs Prt
-   Nominal verb form: Inf Act PrsPrc PrfPrc VGen VAbess Ger ConNeg
    ConNegII
-   Pronoun type: Pers Dem Interr Refl Recipr Rel Indef
-   Other: PUNCT CLB ABBR ACR
-   Punctuation type: LEFT RIGHT
-   Num type: Ord Card
