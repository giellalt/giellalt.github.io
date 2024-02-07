Corpus repositories
===================

The corpus is divided in a free part, where texts that we can
redistribute are gathered (essentially, texts in the public domain), and
a bound part, where we gather texts that we can't redistribute.

For each language, there are two corpora: One with open content and one with closed (closed due to copyright reasons). Both corpora are in two, directories, one for original files (*.docx, .pdf, .html, ...*) and one for converted text files.  Search for the corpora under **Repositories** in [github.com/giellalt/](https://github.com/giellalt/). In the repository search field, write

```
corpus-xxx
```

where **xxx** is the ISO code of your language 


# The directory structure


Inside each of the corpus directories (both *corpus-xxx* and *corpus-xxx-orig*) the structure outlined below is
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



## Goldstandard corpus files

Some parts of our corpus are used as test data for different purposes,
presently mainly for proofing tools. These files have additional markup
to add info about linguistic errors of different types and their
corrections. These files are located within a directory named
goldstandard, which has the same internal structure as shown above:

    orig/                 # same orig/ as above
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

