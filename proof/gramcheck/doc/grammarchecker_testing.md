Grammarchecker testing
======================

The grammarchecker.cg3 ruleset may be tested in a number of ways.


## Regression testing

### Building test file for regression testing

In ``lang-$LANG/tools/grammarchecker/tests``, add files *testfile.yaml* with the following format:

```
Config:
  Spec: ../pipespec.xml
  Variant: smngram-dev

Tests:
  - "Muu šiljoost {lii}£{láá} kyehti rástágáá."
```

Note: The lines following "Config:" and "Tests:" start with two spaces. The testsentences are quoted. The error marking could be more detailed, it is documented in the [principles of error marking](../spelling/testdoc/error-markup.html) document.

### Testing the whole set of test files

#### Overview

The test are run by standing in ``tools/grammarchecker`` and writing ``make check``. This will give  a report on whether the tests passed or failed.

#### Overview in tabular form

```
for i in tools/grammarcheckers/tests/*.yaml; do echo $(basename $i) $(gramcheck-test.py -c -o final $i 2>/dev/null); done
```

The output may then be turned into a table or whatever.


### Testing file by file

To get a more detailed report for each sentence in the different files, do the following, where FILENAME.yaml is the name of the file you want to test (change **sme** to your relevant language):

```
gramcheck-test.py $GTLANGS/lang-sme/tools/grammarcheckers/tests/FILENAME.yaml -c
```



## Testing for false alarms

Run your hopefully correct text (here called `mainly_correct_textfile.txt`) through the grammarchecker (here: **smn**, standing in `lang-smn`), and inspect the result for false alarms.

```
cat mainly_correct_textfile.txt | sh tools/grammarchecker/modes/trace-smngram.mode > misc/xx_falsealarmcheck.txt
```
These sentences may also be extracted and formatted for regression testing, se below.


## Building a corpus of positives (false alarm candidates)

This is documented  in the file [Extracting sentences for precision testing](../extracting-precision-sentences.md).
