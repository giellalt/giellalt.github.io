# How to write your own shell scripts for testing

* Requirements
* Writing the test scripts
* How to run the tests and interpret the results

What this is NOT: this is NOT an overview of the YAML testing framework. You can
find a description of YAML testing on a
[separate page](AddingMorphologicalTestData.html#Yaml+tests).

## Requirements

* be **robust** - check that all prerequisites are met, and bail out if not
* overall goal: all scripts should be **portable**
* exit value according to AM standards
* should not rely on anything outside the own language dir
* should use variables for configured tools
* should use both xfst and hfst, depending on what has been configured
* test only modules that have been built

### Robustness

Check that all prerequisites are met, and bail out if not (exit 77/SKIP)

* are fst's found?
* do we find the input data files
* do we have all tools needed?

### Portability

Portability means it should:
* work on all systems (except Windows)
* work both when you have checked out all of $GTHOME and when you have checked
  out only $GTCORE and one language
* work when the language dir (when checking out single languages) is called
  something else than default
* work for different flavours of the same tool (e.g. for both `awk`
  and `gawk`)

### Exit values

Must be **0 - 255**, where some have a special meaning:
* **0**:  everything went ok = PASS
* **77**:  some precondition was not met, we need to SKIP the test
* **99**:  hard error - we can't continue - STOP
* **everything else**:  FAIL (usually just **1**)

### Do not rely on anything outside the own language dir

* all paths should be relative to the local dir
* do not reference `$GTHOME` and similar variables
* the only variables you can trust are:
** `$srcdir` - the directory in which the original test script is located
** the variables defined and exported by `configure.ac` - but **ONLY** if you
   process the testing script with `configure.ac` (details about this later)

### should use variables for configured tools

Most of the tools we need (and in principle all of them) are (should be)
declared in `configure.ac` or related files (found in `$GTLANG/m4/`.

Autoconf (the tool that parses `configure.ac`) has its own machinery to find
variants of different tools, to define variables for the identified tools, etc.

By using the variables defined in `configure.ac` you can be sure that the
tools actually are available, and you can easily add tests for those variables
in case the tool is not found.

By following this practice, the system becomes more robust and portable.

Details of how to actually do this is given further down.

### It should use both xfst and hfst

... depending on what has been configured.

The new infrastructure treats the Xerox and the Hfst tools on an equal footing,
meaning that some have the Xerox tools installed, some have Hfst, and some have
both.

The test scripts should check for what has actually been built, and what is
available on the system, and use the one or both that is available or configured.

We'll return to the details further down.

### Test only modules that have been built

Example:

* test only generators if generator building have been turned on
* How do we do this? By using Automake conditionals:

```make
TESTS=

# Add your shell scripts for running tests requiring only a generator:
if WANT_GENERATION
TESTS+=test-noun-generation.sh \
	   test-verb-generation.sh \
	   test-adj-generation.sh \
	   test-propernoun-generation.sh
endif # WANT_GENERATION
```

There is a list of all presently defined conditionals
[here](ListOfDefinedAutomakeConditionals.html).

# Writing the test scripts

* what to test
* define variables
* read in test data if needed
* test that all tools and data are found
* make a loop for xfst and hfst if relevant
* write the real test
* add the test script to `Makefile.am`

We will use the test script
`$GTLANGS/sma/test/src/morphology/test-noun-generation.sh.in` as an example
throughout this section.

## What to test

You can test anything that is scriptable or programable. The only requirement is
that the answer can be captured as a YES or NO, i.e. PASS or FAIL.

Here are some ideas:
* test that a syntactic analysis is what you expect (compare with expected, FAIL
  if there is a diff)
* test whether a given non-word gets a specific suggestion in a speller
* test that the hyphenation patterns are correct (this could probably be easily
  done using the YAML testing framework)

### What programming languages can I use?

Anything that can return an exit value. Common choices are:
* shell scripts
* perl scripts
* python scripts

... but also C/C++ a.o. are used.

## Define variables

Typically you start a shell script by defining variables:

```sh
###### Variables: #######
sourcefile=${srcdir}/../../../src/morphology/stems/nouns.lexc
generatorfile=./../../../src/generator-gt-norm
resultfile=missingNounLemmas
```

The variable `${srcdir}` refers to the source dir of the test script, that is,
the directory in which the test script is located.

Here is another variable assignment:

```sh
# Get external Mac editor for viewing failed results from configure:
EXTEDITOR=@SEE@
```

### Variables from configure.ac

If your testing script relies on a lot of external tools, it is a good idea to
make sure that the tools are actually installed on the system. This is the job
of the `configure.ac` file. To make use of this feature, there are a couple of
things to remember:

* the test script filename should end in `.sh.in`
* the testing script must be processed by `configure.ac` — this is done by
  adding two lines as follows to that file:

```M4
AC_CONFIG_FILES([test/src/morphology/test-noun-generation.sh], \
      [chmod a+x test/src/morphology/test-noun-generation.sh])
```

The first line tells autoconf to process the `*.sh.in` file, and produce the
actual `*.sh` file, the second line ensures that the final shell file is
executable.

In this processing all configure.ac variables will be replaced with their actual
value as identifed during the configuration phase. Such variables look like
`@VARIABLE@` in the test script.

## Variables from configure.ac - an example
* we need to use Xerox' `lookup` tool as part of the test
* we use `configure.ac` to check for the availability of `lookup`
* typically, that will set a corresponding variable `LOOKUP` in `configure`
* you reference this variable in your `*.sh.in` file, and when configured,
  the variable is replaced with the actual value
* the variable looks like this in the `*.sh.in` file: `@LOOKUP@`

That is, in a hypothetic test file `test-lemmas.sh.in` we could write
something like:

```sh
LOOKUP=@LOOKUP@
```

The corresponding test file `test-lemmas.sh` will after configuration look
something like:

```
LOOKUP=/usr/local/bin/lookup
```

Then we can add tests in the testing script to check whether `$LOOKUP` is
empty, and if it is, the test script can bail out with a SKIP return value
(**77**).

NB! Sometimes the variable is not empty when the tool is not found, but could
contain strings like `false` or `no` instead. Check the actual value if the
test for the tool doesn't fall out as expected.

## Test that all tools and data are found

We need to test that the data sources used in the test are actually found:

```sh
# Check that the source file exists:
if [ ! -f "$sourcefile" ]; then
	echo Source file not found: $sourcefile
	exit 1
fi
```

Here we use the variable we defined, and if it does not exist, we exit with an
error.

## Make a loop for xfst and hfst if relevant

When doing morphological tests, we want to test both hfst, xfst and foma, as long as they are used. First we define a variable `fsttype`:

```sh
# Use autotools mechanisms to only run the configured fst types in the tests:
fsttype=
@CAN_HFST_TRUE@fsttype="$fsttype hfst"
@CAN_XFST_TRUE@fsttype="$fsttype xfst"
@CAN_FOMA_TRUE@fsttype="$fsttype foma"
```

The strings `@CAN_HFST_TRUE@`, `@CAN_XFST_TRUE@` and `@CAN_FOMA_TRUE@` come from autoconf, and
will tell us what they say.

The we check that the variable is not empty:

```sh
# Exit if both hfst and xerox have been shut off:
if test -z "$fsttype"; then
    echo "All transducer types have been shut off at configure time."
    echo "Nothing to test. Skipping."
    exit 77
fi
```

Finally, the actual loop looks like:

```sh
for f in $fsttype; do
    # Add your test commands here...
done
```

## Read in test data if needed

```sh
###### Extraction: #######
# extract non-compounding lemmas:
grep ";" $sourcefile | grep -v "^\!" \
	| egrep -v '(CmpN/Only|\+Gen\+|\+Der\+| R )' | sed 's/% /€/g' \
	| sed 's/%:/¢/g' | tr ":+" " " \
	| cut -d " " -f1 | tr -d "#" | tr "€" " " | tr "¢" ":" \
	| sort -u | grep -v '^$' > nouns.txt

# extract compounding lemmas:
grep ";" $sourcefile | grep -v "^\!" \
	| grep ' R '| tr ":+" " " | cut -d " " -f1 | tr -d "#" \
	| sort -u > Rnouns.txt
```

## Write the real test

This is an excerpt from the `sma` test file mentioned earlier, and should only
serve as an example:

```sh
###### Test non-compunds: #######
# generate nouns in Singular, extract the resulting generated lemma, store it:
sed 's/$/+N+Sg+Nom/' nouns.txt | $lookuptool $generatorfile.$f \
  | cut -f2 | fgrep -v "+N+Sg" | grep -v "^$" | sort -u \
  \> analnouns.$f.txt # remove backlash!
  
# Generate nouns, extract those that do not generate in singular,
# generate the rest in plural:
sed 's/$/+N+Sg+Nom/' nouns.txt | $lookuptool $generatorfile.$f \
  | cut -f2 | grep "N+" | cut -d "+" -f1 | sed 's/$/+N+Pl+Nom/' \
  | $lookuptool $generatorfile.$f | cut -f2 \
  | grep -v "^$" >> analnouns.$f.txt 
```

The full test script file can be found
[here](https://github.com/giellalt/lang-sma/blob/develop/test/src/morphology/generate-noun-lemmas.sh.in).

## Add the test script to Makefile.am

```make
# List here (space separated) all test scripts that should be run
# unconditionally:
TESTS=
if WANT_GENERATION
# Add your shell scripts for running tests requiring only a generator:
TESTS+=test-noun-generation.sh \
	   test-verb-generation.sh \
	   test-adj-generation.sh \
	   test-propernoun-generation.sh
endif # WANT_GENERATION
# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=generate-noun-lemmas.sh \
            test-propernoun-generation.sh
```

## Add the test script to configure.ac

If we have written an *.in file - as in this example - we need to process it
with configure to replace `@VARIABLE@` style variables with their `configure`
values. To do that, you need to add two lines like the following to
`configure.ac`:

```M4
AC_CONFIG_FILES([test/src/morphology/test-noun-generation.sh], \
      [chmod a+x test/src/morphology/test-noun-generation.sh])
```

With these two lines, `configure` will be able to produce the shell script
that we added to `Makefile.am` above.

# How to run the tests and interpret the results

* basic commands
* what happens upon FAILs
* what  outcomes can there be?

## Basic commands

* `make check` - runs all defined tests
* `make check TESTS=a-test-script.sh` - will run only the test
  script `a-test-script.sh`

To run a subset of tests, `cd` into the subdir containing the subset of tests
you want to run, and do `make check` there. Only the tests in that directory
and its subdirectories will be run.

### Single tests and out-of-source building

(**NB!** Advanced topic - skip if not relevant)

When using
[out-of-source builds](../MultipleConfigurationsAndOutOfSourceBuilding.md) (aka
VPATH builds), running single tests like above will not work, due to the way
Automake treats the `TESTS` variable when there are subdirs with their own
tests. To make it work, you need to restrict `make` to only run in the
local directory where you have the test script you want to run:

```sh
cd to/dir/with/test/script/in/build/tree/
make check TESTS=a-test-script.sh SUBDIRS=.
```

Setting the `SUBDIRS` variable to just a period (meaning "this directory")
forces `make` to ignore the subdirs, and the single test works as intended.

**NOTE:** this is *only* relevant if you have out-of-source builds, and want
to run a *single* test script. If you want to run all test scripts in your
working directory and below (i.e. `make check`), there is no need to do
anything extra - everything works as expected.

## What happens when something fails

The tests are run on a per directory basis, which means that all tests in a
directory will be run, and then `make` will give a report.

If some of the tests FAILed, then that is an error in the view of `make`, and
`make` stops. This is a property of `make` and the `Automake` system. You
can override this behavior with option ` -i, --ignore-errors`. The problem
with using ` -i` is of course that you risk ignoring errors, since the error
message can easily scroll out of view before `make` is done.

## What outcomes can there be?

Testing within the Automake framework can have five outcomes:

* **PASS**:  everything is ok
* **FAIL**:  some condition in the test was NOT met, and make will STOP
* **XFAIL**:  some condition in the test was NOT met, but we are aware of the
          issue, and will handle it later => testing will CONTINUE despite
          the FAIL
* **XPASS**:  everything is ok but we didn't know - we expected a FAIL, but got
          a PASS (an uneXpected PASS) => testing will STOP because of this,
          to ensure that the developer notices the new state of affairs
* **SKIP**:  some precondition was not met, and the test was not performed.
