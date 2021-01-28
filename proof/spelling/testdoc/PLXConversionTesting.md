# Speller conversion test bench


Done:


* augmented makefile to produce small test speller transducer, based on list of
  test words


Next steps:


* check the size of the PLX output - if reasonable, store it in svn as reference
* add spell checking of the test words as well, store the speller output in svn
* edit manually the speller output to reflect what we want
* edit manually the PLX codes until we get what we want from the speller
* change the regular PLX conversion to reflect the manually tuned test PLX codes


## Problem


This will still be one large test file. What we really want is a number of very small and focused tests.


## Possible solution


* define the test cases in terms of the words (ie classes) involved
* split the PLX data on the test words, so that only data relating to the words for each test case is included.


The test cases should be stored like this:


```
$GTHOME/gt/$GTLANG/polderland/testing/caseN/words.txt        # in svn
                                            expected.plx     # in svn
                                            expected.speller # in svn


                                            speller.lex # <- binary speller file
                                            actual.plx       # NOT in svn
                                            actual.speller   # NOT in svn


                                     /caseAll/ concat all words, sort
                                            expected plx
                                            expected speller
```


Output from each test case:


```
FAIL
PASS
```
