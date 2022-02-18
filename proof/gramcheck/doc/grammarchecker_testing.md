Grammarchecker testing
======================

The grammarchecker.cg3 ruleset may be tested in a number of ways.


## Regression testing

In ``lang-$LANG/tools/grammarchecker/tests``, add files *testfile.yaml* with the following format:

```
Config:
  Spec: ../pipespec.xml
  Variant: smngram-dev

Tests:
  - "Muu šiljoost {lii}£{láá} kyehti rástágáá."
```

Note: The lines following "Config:" and "Tests:" start with two spaces. The testsentences are quoted. The error marking could be more detailed, it is documented in the [principles of error marking](../spelling/testdoc/error-markup.html) document.

The test are run by standing in ``tools/grammarchecker`` and writing ``make check``. This will give  a report on whether the tests passed or failed.

To get a more detailed report, do the following, where FILENAME.yaml is the name of the file you want to test (change **sme** to your relevant language):

gramcheck-test.py $GTLANGS/lang-sme/tools/grammarcheckers/tests/FILENAME.yaml -c
 

## Testing for false alarms

Run your correct text through the grammarchecker (here: **smn**), and inspect the result for false alarms.

```
cat mainly_correct_textfile.txt | sh tools/grammarchecker/modes/trace-smngram.mode > misc/xx_falsealarmcheck.txt
```

