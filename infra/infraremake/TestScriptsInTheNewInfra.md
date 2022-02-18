# Testscripts for use in the Giellalt infrastructure

Testing relies on the testing infrastructure provided by
Autotools (Automake, Autoconf, etc., see [[1]](#footnote1)). It is actually pretty simple:

1. write a shell script, perl script, or other executable, and return correct exit values
1. add that executable to the `TESTS` variable in the `Makefile.am` file in the dir where the executable is located
1. run the command `make check` - this will also rebuild any targets not up-to-date

# Existing shell scripts for testing

Presently (January 2014) there are quite a few shell scripts for testing the
morphology and the lexicon, and nothing else. The following shell scripts are
found for all languages:

|  Shell script                      | Explanation
|:---------------------------------- |:---
| `generate-noun-lemmas.sh`          | will check that the lemma can generate itself
| `run-gt-desc-yaml-testcases.sh`    | will run all yaml tests written for the *descriptive* analyser/generator
| `run-gt-norm-anayaml-testcases.sh` | will run yaml test for *analysis only* against the normative analyser
| `run-gt-norm-genyaml-testcases.sh` | will run yaml test for *generation only* against the normative generator
| `run-gt-norm-yaml-testcases.sh`    | will run all yaml tests written for the *normative* analyser/generator
| `run-lexc-testcases.sh`            | will run tests written as part of the lexc source files

Many languages have an extensive set of so called YAML tests,
[test data written in the yaml format](AddingMorphologicalTestData.html#yaml-tests).
Some also have tests written
[directly in the lexc source code](AddingMorphologicalTestData.html#lexc-tests).
But we need more tests. Please use the receipt here to add more tests for
all sorts of testing needs.

# What to add to Makefile.am

All shell scripts or other test scripts that should be run should be listed in
the variable `TESTS`. As we only want to test things that we actually build,
we only assign test scripts to this variable inside a conditional for building
the corresponding target. An example from
`test/tools/spellcheckers/Makefile.am`:

The philosopy is *Only test spellers if we build spellers*. The **if** conditinal is as follows: 

```make
TESTS=

# Only test spellers if we build spellers:
if WANT_SPELLERS
TESTS+=test-zhfst-file.sh
endif # WANT_SPELLERS
```

That is, the `TESTS` variable is empty by default (i.e. no tests will be run),
but if we have configured the language in question to build spellers, the test
script `test-zhfst-file.sh` will be run.

During development it is common that some tests fail. In such cases the
test script should also be assigned to the variable `XFAIL_TESTS` (in addition
to the variable `TESTS`). This assignment does not have to be conditional,
since only test scripts also listed in the variable `TESTS` will be
considered.

When the development has progressed to the point where the test actually PASSes,
that will cause the `make check` command to break, with an uneXpected PASS -
`XPASS`. This makes it obvious that a qualitative change has happened.
From now on the test should always PASS (otherwise it is a regression), and we
remove the test script from the variable `XFAIL_TESTS`. After this the test
will PASS as expected the next time we run `make check`.

If you have tests that test that something *does* fail (e.g. when given bad
input), you should design the test script such that the exit value is zero when
the actual test fails, and non-zero otherwise. That is, reverse the logic within
the test script, such that the logic within the `Makefile.am` files remains
the same.

# Naming conventions for yaml tests

Some parts of the naming conventions are described on
[this page](AddingMorphologicalTestData.html#filenames-for-yaml-tests). There are
a couple of additional things to note:

* the name of the shell script is completely free form, but should for clarity
  reflect the fst being tested;
* the fst specifier in the yaml file name (see the docu linked to above)
  **must** be specified in the shell script.
* the *location* of the yaml testing *shell script* is crucial - it must be
  located in a directory within `test/` parallell to the directory where the
  fst being tested is located. That is, if the fst file(s) you want to test is
  located in `$GTLANG/tools/mt/apertium/`, then the shell script for running
  the yaml tests **must** be located in `$GTLANG/test/tools/mt/apertium/`. The
  yaml files themselves can be in another directory, in which case that
  directory must be specified in the shell script. The default is that the yaml
  files are in the same dir as the shell script for running the yaml tests.

## Adding yaml tests for a new fst class

To add a new shell script to test a new type of fst('s), it is easiest to just
copy one of the existing shell scripts, and change the fst specifier at the
beginning of the shell script. Also consider whether you want to put the yaml
files in a subdirectory, which must be specified at the same location.

# Details on how to write new testing shell scripts

As mentioned above, any shell script or other script (perl, python) - even a
compiled binary - can serve as a test script. The only requirement is that the
correct exit value is produced depending on the outcome of the test.
The possible exit values are:

*  0 - the test succeeded
* 77 - the test was skipped for some reason (test data not found, some other
       precondition not met)
* 99 - a hard failure (such as segmentation fault, etc - not very useful to us)
* any other value - the test failed

If you need to reference data files, you have access to the variable `$srcdir`
(both from Automake and from the environment). This variable points to the
source directory of the test script, i.e. the dir in which the Makefile.am file
is located. *Every other location must be relative to this dir!* If done
properly, the tests will then work also when the source code is built and tested
out-of-source (so-called VPATH building).

Test scripts can be as simple or complicated as you want, as long as it
fullfills the basic requirements:

* correct exit value (see above)
* all path and file references are relative to the local dir, specified using
  `$srcdir`

Here is an example of a very simpe test script (a shell script, starting with `#!/bin/sh`):

```
#!/bin/sh
TOOLDIR=$srcdir/../../tools/src
for i in .sfst .ofst .foma; do
    if ((test -z "$i") || $TOOLDIR/hfst-format --list-formats \
           | grep $i > /dev/null); then
        if test -f cat2dog$i ; then
            if ! $TOOLDIR/hfst-invert cat2dog$i > test ; then
                exit 1
            fi
            if ! $TOOLDIR/hfst-compare -s test dog2cat$i  ; then
                exit 1
            fi
            rm test;
        fi
    fi
done
```

The script (taken from the Hfst3 distro) loops over the fst suffixes, and for
each suffix, tests whether such an fst exists, then tries to invert it and then
compare it. If any of the tools `hfst-invert` or `hfst-compare` fails, the
shell script exits with a value of 1, ie the whole shell script - and thus the
test - fails.

This script can easily be adapted and extended for our purposes, to e.g. test
that the output of an analysis matches a certain expected output (`diff`
should exit with `0`), or that certain input words all give at least one
suggestion, etc.

# Footnotes

<a name="footnote1">[1]</a>: <https://www.gnu.org/software/automake/manual/html_node/Scripts_002dbased-Testsuites.html>
