Corpus repositories
===================

The corpus is divided in a free part, where texts that we can
redistribute are gathered (essentially, texts in the public domain), and
a bound part, where we gather texts that we can't redistribute.

# The free part

The free part is available in an svn repository that is world readable
available on the address <https://gtsvn.uit.no/freecorpus/>.

Check out a working copy either by adding the above address to your svn
program, or use the command line program like this:
`svn checkout https://gtsvn.uit.no/freecorpus`.

# The bound part

The bound part is available in an svn repository that is accessible only
from the machine gtsvn.uit.no. This repository is readable by people
that have signed [our time limited non disclosure
agreement](http://divvun.no/adm/legal/sd-contract-part-3.html), and is
writable by the corpus maintainers. The address to this repository is
svn://gtsvn.uit.no/boundcorpus.

To check out a working copy, first login to victorio. Then issue the
command `svn co             svn://gtsvn.uit.no/boundcorpus `.

If you would like to have access to the bound corpus, contact us at
[feedback@divvun.no](mailto:feedback@divvun.no?subject=Corpus%20access)

# The directory structure

The main directory in the corpus repository is *orig*. *orig* contains
the original files with the original names (bar spaces replaced with \_)
and in the original format. Metadata about the original file is in an
xsl file in the same directory as the original file, and has the same
name as the original file plus an .xsl extension.

Inside these directories are directories for various languages. They
contain parallel translations to the sami documents. Below is an outline
of the directory structure.

    orig/
        eng/
        fin/
        nob/
        sma/
        sme/
        smj/
        swe/

Inside each of the language directories the structure outlined below is
used.

    admin/
        depts/
        guovda/
        karas/
        others/
        sd/
    bible/
        ot/
        nt/
    facta/
    ficti/
    laws/
    news/
        Assu
        MinAigi
        NRK
        YLE
        other
    science/
         

If you run the [conversion process](corpus_conversion.html) the
directory *converted* is created. It has the same structure as *orig*,
but contains the files converted from the original format to our
internal xml-format. The converted directory contains copies of all the
files in the corpus database.

## Goldstandard corpus files

These 7 overarching genres should be understood as follows:

-   **admin/ :**  
    Texts from administrative bodies
-   **bible/ :**  
    The bible and other religious texts.
-   **facta/ :**  
    Factual texts, e.g. teaching books, descriptive texts. Sakprosa.
-   **ficti/ :**  
    Prose, lyrics, plays and other fiction, political text.
    Skjønnlitteratur.
-   **laws/ :**  
    Laws and similar juridical texts.
-   **news/ :**  
    Newspaper text
-   **science/:**  
    Scientific articles

Todo: Write more about this.

## Goldstandard corpus files

Some parts of our corpus are used as test data for different purposes,
presently mainly for proofing tools. These files have additional markup
to add info about linguistic errors of different types and their
corrections. These files are located within a directory named
goldstandard, which has the same internal structure as shown above:

    orig/         # same orig/ as above
    goldstandard/
        orig/
            sma/
            sme/
            smj/

It is essentially that goldstandard files do NOT enter the regular
corpus, as that will destroy any reliability on reported coverage test
results (by way of lexicalising missing words). So make sure you decide
whether a document is to be used as a regular or goldstandard document
before you add it to the repository, and make sure it is added in only
one location. A goldstandard document can always be demoted to a regular
corpus document, but the other way around is not possible.

# Adding content

To add all files found in a directory to a working copy of a corpus, you
can use the
[add\_files\_to\_corpus](CorpusTools.html#add_files_to_corpus) program.

If you have a file that you want to add to the corpus repository you
have to have a working copy of either the free or bound part of our
corpus.

1.  If it is a freely distributable document, add it to the free part of
    our corpus. If not, add it to the bound part.
2.  Determine the main language:
    `eng, fin, nno, nob, sma, sme, smj, swe`, and then genre:
    `admin, bible, facta, ficti, laws, news`.
3.  Copy the file to the directory $working\_copy/orig/$lang/$genre/.
    For example, a North Saami document in genre "facta", copy the file
    to directory $working\_copy/orig/sme/facta/ in your working copy.
    For the news genre, there are subdirectories for different sources
    of news, and for bible texts, there are subdirectories for ot and
    nt.
4.  Try to convert the document using the command
    `convert2xml <filename>`. This command converts the original
    document to xml, and makes a default metadata document with empty
    values.
5.  Open the metadata file, &lt;filename&gt;.xsl and add metadata to it.
6.  Add and commit these files to the repository by either using the svn
    command line tools or your usual graphical interface to svn.
