# Setup + requirements


We have a new tool to test the integrity of our `LexC` lexicons: HfstTester.py. The original source code is from [Apertium|http://apertium.svn.sourceforge.net/svnroot/apertium/], but we have our own copy in [the main repository](https://gtsvn.uit.no/langtech/trunk/giella-core/scripts/morph-test.py) (it has been renamed to morph-test.py in the version used in the new infra).


The script requires Python 3.1 or newer. It will check for required modules, and inform the user how to install them if they are missing. There are no requirements beyond that.


# Test data


The test data is quite simple, and in the following form:


```
Config:
  hfst:
    Gen: sma/bin/sma-gen.hfst
    Morph: sma/bin/sma.hfst
  xerox:
    Gen: sma/bin/isma-norm.fst
    Morph: sma/bin/sma-norm.fst
    App: lookup


Tests:
  Noun - gåetie: # -ie stem, root vowel -åe-
    gåetie+N+Sg+Nom: gåetie
    gåetie+N+Sg+Acc: gåetiem
    gåetie+N+Sg+Gen: gåetien
    gåetie+N+Sg+Ill: gåatan
    gåetie+N+Sg+Ine: gåetesne
    gåetie+N+Sg+Ela: gåeteste
    gåetie+N+Sg+Com: [gåetine, göötine]
    gåetie+N+Pl+Nom: gåetieh
    gåetie+N+Pl+Acc: [gåetide, göötide]
    gåetie+N+Pl+Gen: [gåetiej, gööti]
    gåetie+N+Pl+Ill: [gåetide, göötide]
    gåetie+N+Pl+Ine: [gåetine, göötine]
    gåetie+N+Pl+Ela: [gåetijste, göötijste]
    gåetie+N+Pl+Com: [gåetiejgujmie, göötigujmie]
    gåetie+N+Ess: [gåetine, göötine]
```


**Note** how a list of alternate forms are encapsulated by square brackets and separated by commas.


Such test data can easily be generated using our paradigm generator (the output of course needs to be transformed a bit, proofread and checked).


# Usage


To run the default test set, issue one of the following commands:


```
$ cd $GTHOME/gt
$ make GTLANG=xxx fsttester      # testing the Xerox transducers
$ make GTLANG=xxx hfsttester     # testing the HFST transducers
```


This will run the script on the default test file for the specified language, ensuring that the transducers are up-to-date, and report the results in the compact format (see below).


To manually run a test on a test file, do as follows:


```
gt sjur$ HfstTester.py -c sma/testing/sma-tests.yaml
```


**-c** indicates coloured output, `sma/testing/sma-tests.yaml` is the test data file. That file also contains a reference to the analysing and generating transducers to be used in the test.


```gt sjur$ HfstTester.py -h```


gives more details.


The `-t, --test` option takes as argument a test ID, e.g. `-t "Noun - gåata"` in the test data above. Using this, the script will only run this test set, nothing else.


The `-S, --section` option takes as argument the name of a configuration section, e.g. xerox in the example config file above. Example: to test xerox-type transducers, you would call the tool as follows:


```
HfstTester.py -S xerox testfile.yaml
```


**NB!** Presently only rudimentary test files exists for `sma, sme` and `smj`. These files need to be populated with relevant test data. Use these tests to ensure that we get what we want from the morphological transducers, and nothing else, and that we don't break anything in the future.


# Output


The output is a test report of the following form:


```
-----------------------------------------
Test 0: Noun - gåata (Lexical/Generation)
-----------------------------------------
[PASS] gåata+N+Pl+Gen => gåataj
[PASS] gåata+N+Pl+Nom => gåatah
[PASS] gåata+N+Sg+Acc => gåatam
[PASS] gåata+N+Sg+Nom => gåata
[PASS] gåata+N+Pl+Com => gåatajgujmie
[PASS] gåata+N+Sg+Ine => gåatesne
[PASS] gåata+N+Sg+Ela => gåateste
[PASS] gåata+N+Pl+Ine => gåatine
[PASS] gåata+N+Sg+Ill => gåatese
[PASS] gåata+N+Sg+Com => gåatine
[PASS] gåata+N+Pl+Acc => gåatide
[PASS] gåata+N+Pl+Ill => gåatide
[PASS] gåata+N+Pl+Ela => gåatijste
[PASS] gåata+N+Ess => gåatine
[PASS] gåata+N+Sg+Gen => gåatan
Test 0 - Passes: 15, Fails: 0, Total: 15


---------------------------------------
Test 1: Noun - gåata (Surface/Analysis)
---------------------------------------
[PASS] gåataj => gåata+N+Pl+Gen
[PASS] gåatah => gåata+N+Pl+Nom
[PASS] gåatam => gåata+N+Sg+Acc
[PASS] gåata => gåata+N+Sg+Nom
[PASS] gåatajgujmie => gåata+N+Pl+Com
[FAIL] gåatajgujmie => Expected: gåata+N+Pl+Com, Got: gåata+N+PlGenCmpgujmie+CmpN/SgN+CmpN/SgG+CmpN/PlG+N+Sg+Nom
[PASS] gåatesne => gåata+N+Sg+Ine
[PASS] gåateste => gåata+N+Sg+Ela
[PASS] gåatine => gåata+N+Ess
[PASS] gåatine => gåata+N+Pl+Ine
[PASS] gåatine => gåata+N+Sg+Com
[PASS] gåatese => gåata+N+Sg+Ill
[FAIL] gåatese => Expected: gåata+N+Sg+Ill, Got: gåata+N+Sg+Nom+PxSg3
[PASS] gåatine => gåata+N+Ess
[PASS] gåatine => gåata+N+Pl+Ine
[PASS] gåatine => gåata+N+Sg+Com
[PASS] gåatide => gåata+N+Pl+Acc
[PASS] gåatide => gåata+N+Pl+Ill
[PASS] gåatide => gåata+N+Pl+Acc
[PASS] gåatide => gåata+N+Pl+Ill
[PASS] gåatijste => gåata+N+Pl+Ela
[PASS] gåatine => gåata+N+Ess
[PASS] gåatine => gåata+N+Pl+Ine
[PASS] gåatine => gåata+N+Sg+Com
[PASS] gåatan => gåata+N+Sg+Gen
[FAIL] gåatan => Expected: gåata+N+Sg+Gen, Got: gåetie+CmpN/SgN+CmpN/SgG+CmpN/PlG+N+Sg+Ill
Test 1 - Passes: 23, Fails: 3, Total: 26
```


To get a more compact test report, run it as follows:


```
gt sjur$ HfstTester.py -c -f -p sma/testing/sma-tests.yaml
-----------------------------------------
Test 0: Noun - gåata (Lexical/Generation)
-----------------------------------------
Test 0 - Passes: 0, Fails: 15, Total: 15


---------------------------------------
Test 1: Noun - gåata (Surface/Analysis)
---------------------------------------
Test 1 - Passes: 23, Fails: 3, Total: 26
```


To get the most compact test report, run it as follows:


```
$ HfstTester.py -C -x -i -c ./sma/testing/sma-tests.yaml 
Testing Xerox FST dictionaries
[PASS] - Test 0: Noun - gåetie (Lexical/Generation)
[FAIL] - Test 1: Noun - gåetie (Surface/Analysis)
[PASS] - Test 2: Noun - gåata (Lexical/Generation)
[FAIL] - Test 3: Noun - gåata (Surface/Analysis)
[PASS] - Test 4: Noun - maana (Lexical/Generation)
[FAIL] - Test 5: Noun - maana (Surface/Analysis)
[PASS] - Test 6: Noun - bearkoe (Lexical/Generation)
[FAIL] - Test 7: Noun - bearkoe (Surface/Analysis)
[FAIL] - Test 8: Noun - nïejte (Lexical/Generation)
[FAIL] - Test 9: Noun - nïejte (Surface/Analysis)
[PASS] - Test 10: Noun - gierehtse (Lexical/Generation)
[FAIL] - Test 11: Noun - gierehtse (Surface/Analysis)
[PASS] - Test 12: Noun - daktere (Lexical/Generation)
[FAIL] - Test 13: Noun - daktere (Surface/Analysis)
[PASS] - Test 14: Adj - noere (Lexical/Generation)
[FAIL] - Test 15: Adj - noere (Surface/Analysis)
[PASS] - Test 16: Verb - båetedh (Lexical/Generation)
[FAIL] - Test 17: Verb - båetedh (Surface/Analysis)
Total fails: 38
```


To see the details of why it failed in each test, rerun it as above using the `-t, --test` option and the test ID for the test you want to investigate. E.g.:


```
$ HfstTester.py -x -i -c -f -t "Noun - nïejte" ./sma/testing/sma-tests.yaml 
Testing Xerox FST dictionaries
------------------------------------------
Test 0: Noun - nïejte (Lexical/Generation)
------------------------------------------
[FAIL] nïejte+N+Pl+Nom => Expected: nïejth, Got: nïejteh
Test 0 - Passes: 15, Fails: 1, Total: 16


----------------------------------------
Test 1: Noun - nïejte (Surface/Analysis)
----------------------------------------
[FAIL] nïejtigujmie => Expected: nïejte+N+Pl+Com, Got: nïejte+N+PlGenCmp#gujmie+N+Sg+Nom
Test 1 - Passes: 23, Fails: 1, Total: 24


Total fails: 2
```


In this case there's an extra generated Pl Nom form *nïejteh*, which should be further investitaged, and an extra analysis for `Pl Com`, which merely demonstrates the bug with the `-i, --ignore-extra-analyses` option - the analysis should have been ignored, and no FAIL should have been reported.


**Update:** both the above issues have been attended to (there are no FAILs anymore), but they are kept here in the documentation as a useful example of how to use the tool for effective bug-hunting in the transducer.


## Exit value


The exit value equals the number of FAILs in the whole test run. It will exit with 0 if there are no FAILs. If there are more FAILs than 255 (the max exit value), the exit value will not reflect the true number of FAILs, but will be non-zero. This is non-standard and not very clean, and will probably change in the future.


# Future improvements


* Proper debug output support - it should be easy to implement with the logging module.
* Clean separation of the front-end and the back-end (library) part of HfstTester.py, such that the tester can be imported in other python projects and called from there.


# Version history


## 1.9999.1
* even more modularised, very close to a 2.0 release
* now up to ~30 times faster
* replaced -x with -S <SectionName>, where <SectionName> is the name of a configuration section in yaml test files. This opens up for easier handling of new test types and tools in the future
* added number of PASSed/FAILed/totals for each test set in the compact report


## 1.6:
* CODE: cleanup, modularisation
* FEATURE: generation/lexical tests will now always FAIL if the output doesn't match exactly the expected list, including when some forms are *not* generated — earlier, under-generation was not reported at all


## 1.5


* FEATURE: added reporting of totals for PASSes and ignores as well as FAILs. Available using the `-v, --verbose` flag
* CHANGE: removed support for JSON - nobody was really using this format
* CODE: made the code slightly more modular
* CODE: merged the lexical and surface test methods
* BUGFIX: fixed the bug with the `-i, --ignore-extra-analyses` option


## 1.4


* FEATURE: compatible with older versions of Python - the script will test for required modules, and exit gracefully and helpfully if not found. Installing the missing modules makes the script run without problems.
* BUGFIX: fixed utf-8 problem
* BUGFIX: fixed the remaining `-C, --compact` issues


## 1.3


* FEATURE: process the tests in the order given in the test file


## 1.2


* FEATURE: added option `-C, --compact` for a really compact test report; atm buggy when combined with `-i, ignore-extra analyses`
* SPEED: the lookup tool is called only once per test set. Should improve the speed of escpecially hfst testing a lot
* bug fixes


## 1.1


* FEATURE: added option `-i, --ignore-extra-analyses` to ignore FAILs on extraneous analyses. With this option, surface tests will succeed if the expected analysis is found, irrespective of how many other analyses there are. It will FAIL only if the expected analysis is NOT found
* FEATURE: added option `-x, --xerox` to use the Xerox lookup tool instead of the hfst_lookup tool. This enables testing of transducers compiled with the Xerox tools lexc, twolc and xfst.
* FEATURE: the script will now exit with an exit value corresponding to the number of FAILed tests, including 0 for no fails (=the script succeeded). This should make it easier to integrate the script in a larger build system.
* FEATURE/BUGFIX: `stderr` from the lookup tool(s) is now captured in a separate variable, and won't clutter the test results.
* BUGFIX: value lists with UTF-8 strings were sometimes parsed as strings (ie the whole list was seen as one string)


## 1.0


Initial release by [Brendan Molloy](http://brendan.so)
