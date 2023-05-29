General documentation for proofing tools
=====================

Linguistic documentation
=====================

-   [Lingustic Documentation for the proofing tools](spelling/index.md)

Documentation for making the speller application
=====================

-   [General release procedure](ProofingToolsReleaseProcedure.md)
-   [Release procedures for spellers](SpellerReleaseProcedures.md)
-   [Registering languages in LibreOffice](spelling/hfst/RegisteringLanguagesInLibreOffice.md)
-   Documentation for turning your morphological analyser into a speller for
    LibreOffice on your own machine can be found on the
    [Using Voikko with Hfst page](/tools/UsingVoikkoWithHfst.hfst)
-   [The Speller Error Model](TheSpellerErrorModel.md)

Research
=====================

-   [Research on proofing](proofresearch/InvestigatingTextProofing.html)

Our proofing tools (for downloading and online use)
=====================

-   [North, Lule and South Saami proofing
    tools](http://divvun.no/korrektur/korrektur.html)
-   [Inari and Skolt Saami and Kven proofing
    tools](http://divvun.no/korrektur/otherlangs.html)
-   [Beta versions of tools for various Uralic
    languages](http://divvun.org/proofing/proofing.html)
- [Adding hyphenation boundaries to manuscripts](proof/hyph/how-to-hyphenate-without-hyphenator.md)

Testing
=====================

-   Test data: we are marking up gold-standard documents with a
    relatively simple, plain-text [error
    markup](spelling/testdoc/error-markup.md). There are separate
    documents for each of the languages we have gold-standard documents
    for:
    -   [ISL - Icelandic](spelling/testdoc/error-markup-isl.html)
    -   [KAL - Greenlandic](spelling/testdoc/error-markup-kal.html)
    -   [SMA - South Sámi](spelling/testdoc/error-markup-sma.html)
    -   [SME - North Sámi](spelling/testdoc/error-markup-sme.html)
    -   [SMJ - Julev Sámi](spelling/testdoc/error-markup-smj.html)
-   The test data is converted to xml and is stored in
    `$GTFREE/stable/goldstandard/converted/` when proofread and checked,
    before that in `$GTFREE/prestable/goldstandard/converted/`
-   You run a speller test using the following command:
    -   new infra:
        `cd $GTBIG/prooftesting && ./autogen.sh &&                      ./configure && make` -
        to run all tests for all languages, cd into one of the language
        subdirs and
        `./autogen.sh &&                      ./configure && make` to
        run the tests for just one language. After `./configure`, you
        can even `cd` into one of the speller tool dirs, and run `make`
        there, to run the tests for one speller only.
    -   old infra:
        `cd $GTHOME/gt && make GTLANG=sma TESTTOOL=pl correct-test`
-   We also have a [plan for creating Unit Tests for the PLX
    conversion](spelling/testdoc/PLXConversionTesting.html) used to
    build our MS Office tools

Other spellers & languages
=====================

[This page](SpellersForOtherNordicLanguages.html) has a list of free and
commercial spellers for other Nordic languages.

# Old documentation


## 2019

Mobile speller meetings 2019: [14-18.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2019-01-1418.html)


## 2013


Proofing-related projects spring 2013

-   New MS Word speller for SME (first), SMJ and SMA.
-   Nordplus-sprog-financed [spelling error corpus and speller test
    project](nordplus/Oversikt.html) - [Workshop
    4-8.3.2013](nordplus/Workshop.html)
-   Updated Hunspell speller + TeX hyphenation for InDesign 5.5+
-   Finalising the Voikko+Hfst speller solution for LibreOffice


PLX conversion meetings 2013: [4.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-04.html) ,
[14.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-14.html) ,
[15.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-15.html) ,
[16.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-16.html) ,
[17.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-17.html) ,
[22.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-22.html) ,
[24.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-24.html) ,
[29.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-29.html) ,
[30.1](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-01-30.html) ,
[5.2](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-02-05.html) ,
[6.2](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-02-06.html) ,
[13.6](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2013-06-13.html) ,

Husnpell conversion meetings 2013:
[12.2](admin/HunspellMeeting2013-02-12.html) ,

## 2012

Meetings 2012: [2.3](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-03-02.html) ,
[2.4](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-04-02.html) ,
[19.4](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-04-19.html) ,
[15.5](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-05-15.html) ,
[23.8](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-08-23.html) ,
[27.9](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-08-23.html) ,
[30.10](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-08-23.html),
[31.10](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-10-31.html),
[01.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-01.html),
[02.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-02.html),
[05.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-05.html),
[06.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-06.html),
[07.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-07.html),
[08.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-08.html),
[09.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-09.html),
[15.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-15.html),
[19.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-19.html),
[20.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-20.html),
[21.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-21.html),
[22.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-22.html),
[26.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-26.html),
[27.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-27.html),
[29.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-29.html),
[30.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-11-30.html),
[3.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-03.html),
[4.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-04.html),
[6.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-06.html),
[10.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-10.html),
[11.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-11.html),
[12.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-12.html),
[13.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-13.html),
[14.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-14.html),
[17.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-17.html),
[18.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-18.html),
[19.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-19.html),
[20.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-20.html),
[21.12](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2012-12-21.html),

## 2011

Meetings 2011: [11.3](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2011-03-11.html),
[17.3](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2011-03-17.html),
[23.8](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2011-08-23.html),
[6.9](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2011-09-06.html),
[15.9](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2011-09-15.html),
[3.11](https://divvungiellatekno.github.io/giellalt.uit.no/proof/admin/Meeting_2011-11-03.html),

[InDesign CS5.5-planar.](proof/admin/InDesign/CS55-planar.html)
