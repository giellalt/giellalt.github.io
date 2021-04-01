The possibility to use an
[AppleScript](http://www.apple.com/macosx/features/applescript/) to
drive the spell checker in MS Word is now documented as part of the
regular [automated testing documentation](howtotest.html). The
applescript itself is found in
`gt/script/spellcheckWithMSWord.applescript`. Below follows a short
description of how to run the applescript stand-alone, its input
parameters and data, and the output data.

Running the applescript
=======================

The script takes the following three input parameters:

-   **LANGUAGE code:**  
    a three-letter language code identifying the language of the text to
    be proofread. The codes are automatically mapped to the
    corresponding language identifiers used by MS Word. The following
    codes are recognised:
    -   sme (in MS Word this equals Catalan)
    -   smj (in MS Word this equals Basque)
    -   nob
    -   nno
    -   swe
    -   fin
    -   isl
    -   dan
    -   eng
    -   ger
    -   deu
-   **INPUT file:**  
    The text to be proofread. It must be encoded in UTF-16. Presently
    the script expects the text to be preprocessed and filtered, such
    that all words are on one line, and words containing any of
    `[-.:                ]` are removed (these chars "breaks" the input
    strings into separate "words" in MS Word - it might be possible to
    work around, but it isn't worth the effort right now.
-   **OUTPUT file:**  
    The result of the spell-check is stored in this file, in a format
    described below. The output is as well encoded in UTF-16.

It is necessary to run the script from a local terminal session, for the
script to be able to open MS Word in the graphical UI of MacOS X.

The actual command to run the script should be something like:

    osascript script/spellcheckWithMSWord.applescript sme InFile OutFile

Remarks on language codes
-------------------------

In the standard distribution in the Nordic countries, proofing tools for
more languages than listed above is installed (and there are no tools
for Icelandic). It should be easy to expand the list to cover all tools
installed, or even all languages recognised by MS Word. This is left as
an exercise for the future.

Format of the output file
=========================

The output file is a TAB-delimited text file of the following format:

    InputWord<TAB>SpellerStatus<TAB>Suggestions

The suggestions are themselves TAB-separated.

The SpellerStatus field can have two values:

-   **SplCor:**  
    The speller thinks that the input is correct
-   **SplErr:**  
    The speller thinks that the input is incorrect, ie a misspelling

The AppleScript
===============

Here follows a simple pseudocode of the AppleScript. See the source file
for the gory details.

1.  First we setup input and output files
2.  Then the language code is mapped to the corresponding language
    constant in MS Word (the constants have the form of strings, like
    *norwegian bokmol*), and the whole document is set to that language
3.  Then, for each word in the input document:
    1.  ask for its spelling status
    2.  print out the result from the speller, together with any
        suggestions

Testing other languages
=======================

Since the applescript does not rely on any specific spelling engine, but
is just querying MS Word for the spelling status of individual words, it
is possible to test any language for which there is an installed
speller.

Among other things, this makes it possible to compare the spellers of
different languages, both from the same vendor and from different
vendors, given that the test documents share sufficiently similar
spelling error characteristics.

Limitations
===========

Although the applescript option provides the benefit of being speller
engine independent, it has its limitations.

Speed
-----

Scripting the speller in MS Word is slow, even more so as MS Word 2004
is not running natively on the latest and greatest Intel Macs.

Input data
----------

Because of Word's built-in string segmentation in its AppleScript
implementation, some possible input words are not feasible test data.
This is very unfortunate, since it means that the scripted speller
behaves differently from the interactive speller for some types of
input. This is at least true for the following chars:

    - (hyphen)
    : (colon)
    . (full stop)

Technically it means that Word's definition of a word in AppleScript is
different from what it is when used interactively. Basically, the above
characters are considered non-word chars, and will split strings
containing them into separate words on each side of the chars. In
practice, this means that we can't meaningfully test words of the type:

    CD:s (in/on the CD)
    TV-stasjåvnnå (TV station)
    cand.phil.

Since including such words in the test data will just destroy the test
results, they are removed before the test is run. The test result is
because of this not completely covering all cases, but removing such
words is better than destroying the test results.

Platform dependence
-------------------

Because we are using AppleScript, it only runs on the Mac. But the
underlying AppleScript implementation in Word is based on VisualBasic
(VB), and is very close to the VB scripting found in Word for Windows.
It should thus be relatively straightforward for someone knowing VB to
port this script to run on Windows using VB.
