# Obsolete documentation

# Compilation

- [_Using Voikko with Hfst_ (turning a morphological analyser into a speller for LibreOffice on your own machine)](/tools/UsingVoikkoWithHfst.html)

# Testing with error markup

- Test data: we are marking up gold-standard documents with a
  relatively simple, plain-text
  _[error markup](spelling/testdoc/error-markup.md)_. There are separate
  documents for each of the languages we have gold-standard documents
  for:
  - [ISL - Icelandic](spelling/testdoc/error-markup-isl.html)
  - [KAL - Greenlandic](spelling/testdoc/error-markup-kal.html)
  - [SMA - South Sámi](spelling/testdoc/error-markup-sma.html)
  - [SME - North Sámi](spelling/testdoc/error-markup-sme.html)
  - [SMJ - Julev Sámi](spelling/testdoc/error-markup-smj.html)
- The test data is converted to xml and is stored in
  `$GTFREE/stable/goldstandard/converted/` when proofread and checked,
  before that in `$GTFREE/prestable/goldstandard/converted/`
- You run a speller test using the following command:
  - new infra:
    `cd $GTBIG/prooftesting && ./autogen.sh && ./configure && make` -
    to run all tests for all languages, cd into one of the language
    subdirs and
    `./autogen.sh && ./configure && make` to
    run the tests for just one language. After `./configure`, you
    can even `cd` into one of the speller tool dirs, and run `make`
    there, to run the tests for one speller only.
  - old infra:
    `cd $GTHOME/gt && make GTLANG=sma TESTTOOL=pl correct-test`
- We also have a [plan for creating Unit Tests for the PLX
  conversion](spelling/testdoc/PLXConversionTesting.html) used to
  build our MS Office tools
