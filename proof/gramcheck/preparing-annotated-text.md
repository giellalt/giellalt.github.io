# Preparing annotated text for testing

This document presents the pipeline for adding an error-marked text to the corpus and run it through grammarchecker testing for  precision and recall.

Documents for testing should represent the target group of the grammar checker and potentially contain errors. They should be stored in `\*corpus/orig/$LANG/catalogename/`
where the *cataloguename* (and eventual subcatalogues) should be a catalogue reserved for annotated files for grammarchecker testing.

1. Mark errors as explained in the [Principles of error markup](../spelling/testdoc/error-markup.html) document
1. Save the file as `filename.correct.txt` (i.e. the filename must end in *.error.txt*)
1. Add the file to the corpus with the command `convert2xml filnamn.correct.txt`
1. This creates a file `filnamn.correct.txt.xsl`. In this file, change **conversion_status** from `standard` to `correct`. Add other metadata. Reference to original file may e.g. be given in the filename slot.
1. Convert from corrected file to goldstandard with the command `convert2xml --goldstandard filename.correct.txt`. Given an original file `orig/smn/testcorp/wiki/filename.correct.txt` he resulting file will by using this command be stored in `goldstandard/converted/smn/testcorp/wiki/filename.correct.txt.xml`
1. Supposing you have (one or) several files and/or catalogues under *goldstandard/converted/smn*, you may then run the command (with `smn` as an example):
`gramcheck_comparator.py $GTLANGS/lang-smn/tools/grammarcheckers/smn.zcheck goldstandard/converted/smn > <testfile-output> `
1. or eventually send it to standard output with nice colours: 
`gramcheck_comparator.py $GTLANGS/lang-smn/tools/grammarcheckers/smn.zcheck goldstandard/converted/smn -c`

You may at any point reopen the file `filename.correct.txt`, add or revise the error marking, and run the procedure again.






