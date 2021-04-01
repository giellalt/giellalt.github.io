Automatic testing
=================

We now have a test bench for automatic testing of the spellers, using
different data sets. The data sets/tests serve different purposes, and
are the following:

-   **regression-test:**  
    tests the speller against a set of known problematic misspellings
    and correct words, to check that newer versions don't break earlier
    fixes; the data set will often contain "constructed" words made to
    highlight certain morphological constructions
-   **typos-test:**  
    tests the speller against a collection of real typographic errors
    and their corrections, as found in our corpus documents or elsewhere
    in real texts — the purpose of the test is to see how well the
    speller handles real errors, both when it comes to detecting them,
    and to give the correct suggesion; the data set should *never*
    contain constructed errors
-   **baseform-test:**  
    extracts all baseforms (=nominative singular, infinitive) found in
    our lexicons, and send them through the speller; to ensure that the
    lexicon is well-formed and that the speller actually recognises all
    (baseforms of the) words it should
-   **correct-test:**  
    runs complete documents manually marked up with error/correction
    tags through the speller; this test will check both lexical
    coverage, calculate precision, recall and coverage, as well as give
    an idea of the quality of the suggestions; for details on marking up
    documents to be used as input, see [this page](error-markup.html)

Below we have briefly described how to run these automatic tests, how to
read the test reports, and then some more details on each test.

Running automatic tests, storing results
----------------------------------------

To run each of the automatic tests above, just `make` the test name as
given, and the `TARGET` as usual (in the `gt/` directory), e.g.:

    make regression-test TARGET=sme

There is one exception, and that is the correct-test, which also
requires a DOC input parameter - the correct document used as input
data:

    make correct-test TARGET=sme DOC=somedoc.correct.doc.xml

There is a short-cut `make` target that will run all but the
`correct-test` at once:

    make spelltest TARGET=smj #will run regression, typos & baseform

In addition, it is possible to specify the tool used for the actual
testing, that is, the speller engine, by giving `make` the parameter
`TESTTOOL`, with one of the following values:

-   **pl:**  
    polderland command-line speller
-   **mw:**  
    Microsoft Word as the engine, iterating over each of the words in
    the input data, and asking Word about its spelling status;
    AppleScript is used to tell Word what to do, and to collect the
    response from Word

In the future, more spelling engines will be added, like hunspell
(**hu**) and possibly aspell (**as**).

The **mw** test engine has some shortcomings due to Word's AppleScript
implementation (or our inability to find our way through the Word
AppleScript dictionary), but it also has the nice feature to be
comletely independent of the real speller engine behind Word. This means
that it is possible to test other spellers than ours, and compare the
test results across languages and speller engines (given reasonably
similar input data).

It is also possible to add the date of the test run as a parameter to
`make`, if one for example would like to update an earlier test run with
corrected test data. This is done with the parameter `DATE`. A full
`make` command for the future hunspell tool would then look something
like:

    make correct-test TARGET=sme DOC=somedoc.correct.doc.xml TESTTOOL=hu DATE=20071020

The output from each test is two xml files, both stored in
`gt/doc/proof/spelling/testing/`. One is a bare-bones standardised xml
representation of the speller output, the other is a Forrest-doc xml
file presenting both the direct test results and some calculated
statistics. To save the test results for the future and at the same time
make them available for others, the xml files should be checked in in
`cvs`.

Finally, to properly include the test results in the Forrest-driven site
of ours, the forrest-doc files should also be added to the menu system
by including a reference in the file `gt/doc/site-proof-frag.xml`.

regression-test
---------------

### Input data

The `regression-test` input data is stored i the file
`$TARGET/polderland/regressions.txt`. The format is quite simple, and
has two forms:

    error<TAB>correction<TAB>#comment
    correct<TAB><TAB>!comment

Comments can either start with \# or !. The first variant is a so-called
*negative* test, where the speller should detect the `error` and give
the `correction` as one of its suggestions. The other variant is
consequently a *positive* test, where we check that the speller actually
recognises correct word forms. Often missing correct suggestions or
false negatives are caused by the *correct* form not being recognised.
The positive tests will help in detecting such cases.

### Reading the test report

The test report for the regression tests have seven main sections:

1.  Overview
2.  True positives
3.  False positives
4.  False negatives
5.  True negatives
6.  Grouped by bug \#
7.  Testpairs not in bugs

Each section is briefly described below.

#### Overview

This gives some basic statistics about the regression test. The most
important figures here are the false negatives and false positives -
they indicate how many testpairs are still failing.

#### True positives

Normally not very relevant reading - these are the correctly recognised
misspellings.

#### False positives

This section lists correct input flagged as misspellings. Check this
briefly to see if there are any patterns in the incorrectly flagged
words. Often a few bugs are failing, so further investigation should be
directed there.

#### False negatives

This is misspellings not detected by the speller. Again, check whether
there is a pattern among the undetected misspellings.

#### True negatives

Normally not very relevant reading - these are the correctly recognised
correct words.

#### Grouped by bug \#

This is really the most relevant section. Here, all failings have a
*light red background*, to make them stand out visually and be easy to
spot. To get an overview of the situation for reported bugs, go directly
to this section, and scroll through it looking for red rows.

All bugs with no red rows can be closed (or should be already), whereas
bugs with red rows (ie broken tests) need further investigation.

For a test pair to show up in this section, the comment column in the
test data has to start with the bug ID.

#### Testpairs not in bugs

This last section contains all test pairs not covered by the previous
section, and is using the same redish background colour to indicate
failed tests. It should be as small as possible, as we want most or all
test pairs to be associated with a bug.

typos-test
----------

### Input data

The `typos-test` input data is stored i the file
`$TARGET/src/typos.txt`. The format is similar to the regression data
file:

    error<TAB>correction<TAB>#comment

Comments can either start with \# or !.

The data is a collection of true misspellings found in different
sources. It should *NOT* contain any made-up examples (they can be put
in the regression.txt file if relevant, otherwise don't use such data).

As part of the testing, all the correct words are also extracted and
used as input to the speller. These should all be accepted, and serve as
positive test cases for the typos-test.

### Reading the test report

The test report for `typos-test` contains the same first five sections
as the regression-test report. The most important things to look at are
the following points:

-   **true positives without (correct) suggestions:**  
    why are the suggestion(s) missing?
-   **false negatives:**  
    any pattern in the undetected misspellings
-   **false positives:**  
    any pattern in the wrongly flagged words
-   **overall statistics:**  
    our target is to detect and correct as many of the known typos as
    possible

baseform-test
-------------

### Input data

The `baseform-test` input data is generated as an extraction of all
lexical entries in our **LexC** files, and is used to ensure that we
actually recognise all the words that we put into the speller. Further,
since we're really not interested in seeing the long list of
*recognised* baseforms, the data is sent two times through the speller.
The first round is used to identify all negative hits (ie all rejected
baseforms), and the second round is used to only analyse those, to get
both some statistics, suggestions (the suggestions can be quite telling
about why a certain word was rejected) and filter out some cases that
are actually recognised (the first filtering is a little over-active).

### Reading the test report

The test report for `baseform-test` contains the same first five
sections as the regression-test report. The most important things to
look at are the following points:

-   **number of false negatives:**  
    this should really go down to zero
-   **false negative patterns:**  
    use any patterns to try to identify why groups of baseforms are
    rejected.
-   **single entries:**  
    a substantial part of the unrecognised baseforms will be undetected
    errors in the lexicon; they should just be corrected

correct-test
------------

### Input data

The `correct-test` input data is an xml document with errors and
corrections marked up. The xml document is a conversion from a similarly
marked-up corpus document, and represent our real-world test scenario
for our spellers (the other test cases are different types of more
technical testing).

This test will usually have to be run several times on a new test
document, as the first run will reveal inconsistencies and mistakes in
the error/correction markup that needs to be fixed before we get
reliable test results.

The test document is read by `ccat`, which produces test data in a
format identical to the other test types, that is:

    error<TAB>correction<TAB>
    correct<TAB><TAB>

Since the input data is a complete document, it is possible to calculate
reliable statistics on precision and recall.

### Reading the test report

The test report for `baseform-test` contains the same first five
sections as the regression-test report. The most important things to
look at are the following points:

-   **test statistics:**  
    in the `correct-test`, the precision and recall figures are real
    measures of the quality of our speller, and should be thoroughly
    followed between speller versions.
-   **false negatives:**  
    that is, undetected spelling errors - these should be as few as
    possible
-   **false positives:**  
    this number should also be low, although it is normally not possible
    to get down to zero
-   **true positives without (correct) suggestions:**  
    we want to be able to correct as many of the detected misspellings
    as possible, which makes this category an interesting study object;
    it should be as small as possible

Manual testing
==============

Program Settings
----------------

In order to obtain measurable results, we set up the programs in the
same way:

-   **Common settings:**  
    -   Check Upper case words (turn off "Ignore Upper case")
    -   Check words with numbers (turn off "Ignore words with numbers")
    -   Ignore words with numbers (leave this options on)
-   **MS Off/Mac:**  
    Word&gt;Preferences&gt;Spelling and Grammar
-   **MS Off/Win:**  
    In the same location?

Types of testing
----------------

-   Technical testing
-   Linguistic testing
    -   Testing the proofing
    -   Testing the suggestions

Technical testing
-----------------

Linguistic testing: Testing the proofing
----------------------------------------

We test `precision`, `recall` and `accuracy`. Precision measures the
actions of the program: Given that it indicates an error, can we trust
that it actually is an error? The recall measures the robustness of the
program: Given that we have written a misspelled word, what are the
chances that the program finds it? These two measures are interlinked: A
strict program will flag for errors often, find many, but also too many.
On the contrary, a program acting on the safe side will flag an error
only when sure to have found one, at the expence of letting through some
erros. The former is better When users really want a correct text, and
the latter is better when the user is annoyed by false alarms, and
really just wants to get rid of the worst errors, at a minimal cost.
Accuracy measures the overall perforance, and takes both the other
measures into account

To obtain these measures we need the following data:

-   **words (wds):**  
    The number of words in the text
-   **true positives (tp):**  
    The number of true errors found by the spellers (red errors)
-   **false positives (fp):**  
    The number of correctly written words claimed to be errors by the
    program (correct words in red)
-   **true negatives (tn):**  
    The number of correctly written words recognised as such (correct
    word, no red line)
-   **false negatives (fn):**  
    The numbers of errors not found by the speller (misspelling without
    redline)

We count wds, tp, fp, fn, and calculate tn as wds - (tp + fp + fn). The
test values are calculated as follows (there is a spreadsheet available
to do this automatically):

-   precision = tp/(tp+fp)
-   recall= tp/(tp+fn)
-   accuracy = tp+tn/all

Linguistic testing: Testing the suggestions
-------------------------------------------

Also here, we test for `precision`, `recall` and `accuracy`.

To obtain these measures we need the following data:

-   **errors (err):**  
    The number of errors in the text
-   **true positives (tp):**  
    The number of true suggestions
-   **false positives (fp):**  
-   **true negatives (tn):**  
-   **false negatives (fn):**  

<!-- -->

-   precision = tp/(tp+fp)
-   recall= tp/(tp+fn)
-   accuracy = tp+tn/all
