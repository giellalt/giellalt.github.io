The list of foreign words
=========================

Incoming text contains many foreign words. Used in isolation, as
spontanous loans, they should be delt with by a POS guesser. Text chunks
in foreign languages represent noise, though, and a good corpus should
mark such chunks with xml tags (&lt;foreign&gt;&lt;/foreign&gt;, etc.).
While waiting for that, and while developing our parser, we have a
stoplist of foreign words. The list was made in the following way:

1.  Large lists of Norwegian, Swedish, Danish, Finnish and English words
    were sorted into one list, called `gt/script/old-foreign.txt`. The
    list was duplicated by an identical list with capital initial letter
    (using case.regex gave too long compilation time)
2.  The list was run through sme.fst, and the overlapping words
    (abonnere, adagio, Adam, addere, etc.) were removed.
3.  In addition, a file `gt/script/new-foreign.txt` was added to the
    cvs, containing Non-Saami words from our corpus files.
4.  Each of these files were turned into fst files. Then the union of
    the two files was made into one binary file, *foreign.fst*

The compilation is included in the Makefile. The source files are in the
`gt/script` catalogue, whereas the binary files are in the `gt/sme/bin`
catalogue. Only `foreign.fst` should be used, the two other ones are
intermediate files.

`foreign.fst` should be used as follows: When investigating Saami words
that the parser cannot cope with, foreign words are just noise. They can
be removed with this command line:

    cat text | preprocess ... | lookup -flags mbTT sme.fst | grep \?' |
    cut -f1 | foreign.fst | grep '\?' | cut -f1 | ...

Now, only the words which are not recognised by the parser, and not part
of the stop list, are included.

The list of foreign words was cut in two because compilation time for
the whole list is very long. The intention with the split is that
*old-foreign.txt* should be left alone. All additional words should be
added to the shorter `new-foreign.txt` file. If this file becomes too
long, it may be transferred over to old-foreign.txt.
