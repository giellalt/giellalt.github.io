# Test scripts and routines for development work

This page tells how to test the language model, thereby having control over the developmental work.

There are in principle two types of testing:

1. You may test the grammar model against an expected result, thereby finding out how far you are from the desired target, as well as to what extent the model has changed since last time you ran the test.
2. You may also do a more impressionistic testing, just generate output (in different ways) and see how the language model behaves.

The former method is good for regression testing (ensuring your model does not get worse). The latter requires knowledge of the language in question. We look at the two methods in turn.

# Regression testing

## Tests embedded in the *make check* procedure

Most regression tests in the GiellaLT infrastructure may be run in one go, with the command

`make check`

Depending upon you setup, the *make check* procedure will test the following. The headlines correspond to output from the *make check* command given in the terminal). Each text snippet **Making check in** refers to a folder under `lang-XXX`. Some of them contain tests, other do not. We skip the ones that typically contain no tests.

When scrolling through the output of `make check`, you will see summaries in green, like e.g. this one:

<span type="color:green">All 5 tests behaved as expected (3 expected failures)</span>

The test in question is summarised **above** the green message, offering more detail about what has happened. The following text goes through the different tests:

### Making check in phonology

These tests are written in the `phonology.twolc` file. The tests are of the format shown here (€ = euro), where the upper line is input from lexc and the lower line is output text.

```
!!€ example^DELVOW
!!€ exampl00
```

The command `make check` will pick these tests from phonology.twolc and report on whether the rule has worked or not.

### Making check in orthography

The `orthography` folder contains rules for turning initial capital letters into small (thus, both *Tables* and *tables* are plural of `table`), and the `inituppercase` test tests for this.

### Making check in morphology

#### The test *./tag_test.sh*

This test finds all tags of the format `+Tag` in the *.lexc files, and check whether they are declared under `Multichar_Symbols` in `root.lexc`. If not, they are listed here. The error is one of two:

1. You have forgot to declare the tag in `root.lexc`. Do it.
2. There is a typo in your tag. Correct the typo.

The goal is that no tags should be listed, the test will fail until the list is empty.

#### Tests to see whether all lemmas may be generated

The test routine will list tests like

<span type="color:green">XFAIL</span>: generate-adjective-lemmas.sh

<span type="color:red">FAIL</span>: generate-verb-lemmas.sh

You can add or remove tests for adjectives, nouns, propernouns and verbs in `test/src/morphology/Makefile.am`:

```make
GENERATION_TESTS_IN=generate-adjective-lemmas.sh.in  \
                    generate-noun-lemmas.sh.in       \
                    generate-propernoun-lemmas.sh.in \
                    generate-verb-lemmas.sh.in
```

List files that you know do not pass under `XFAIL_TESTS=` further down in the file `Makefile.am` (thereby making them green in the test report).

The standard setup for this test is that the language is like Uralic languages: Baseform in nominative, no gender, and verbs in infinitive. If languages deviate from this (as e.g. Norwegian or Romani do) the test setup for this test must be done for each language separately, by editing `Makefile.am`.

### Tests for morphologyrules

Similar tests may be set up for lexc. See `lang-sma` for examples.

### Tests for  paradigm generation (yaml tests)

Make so-called *yaml files* in `test/src/gt-nomr-yamls`.
Examples are found for all the Saami languages, for `lang-fkv`and for `lang-rmf`.

## Standalone tests

For some of the tests, we have separate commands to do standalone tests (these tests are covered by the *make check* command as well):

Test that all tags are declared and written correctly.

```sh
devtools/tag_test.sh
```

Test that lemmas can be generated:

```sh
test/lemma-check.sh
```

Run yaml tests:

```sh
test/yaml-check.sh
```

## Impressionistic testing

By this impressive title we mean tests without a predefined correct answer. Here, there will thus not be any report of **`FAIL`** vs. **`PASS`**, here the linguist must check the output herself or himself.

### Paradigm generation, one lemma at a time

We have a set of routines generating lemmas for words or classes of words :

```sh
sh devtools/verb_minip.sh '^lemma[:+]'
sh devtools/noun_minip.sh '^lemma[:+]'
sh devtools/prop_minip.sh '^lemma[:+]'
sh devtools/adj_minip.sh '^lemma[:+]'
```

You can also look at the generation of all members of one continuation lexicon:

```sh
devtools/verb_minip.sh LAAVU
```

You can edit the list of forms in the paradigm files which are mentioned in the scripts, e.g.

```sh
P_FILE="test/data/testnounparadigm.txt"
```

### Paradigm generation for large classes of (or even all) lemmas

We have a routine for generating tables of large classes of words. The result is an html file giving a birds' perspective of the analyser.

The command is as follows, one command for each part of speech:

```sh
sh devtools/generate-adj-wordforms.sh
sh devtools/generate-noun-wordforms.sh
sh devtools/generate-prop-wordforms.sh
sh devtools/generate-verb-wordforms.sh
```

> **NOTE!** For languages with gender we typically split the noun file in *generate-msc-wordform.sh*, etc.

You can edit the list of forms (include as many or few forms as you like):

```sh
morf_codes="+N+Sg+Nom \
            +N+Sg+Gen"
```

You can edit which cont.lexes to test:

```sh
exception_lexicons="(3JESANEH|3PAPAREH|3VANHIMEH)"
```

You can edit how many lemmas of each cont.lex to test:

```sh
lemmacount=2
```

### Testing for lexical coverage

The following test setup may be used to test for lexical coverage:

1. Choose a reference text, and keep it constant over time
1. Analyse the text by using the FST
1. Register the words receiving no analysis
1. Work more on the analyser
1. Repeat the procedure 1-3, and compare the new output with the old one

Here is how it is done:

For reference text, you may use `test/data/freecorpus.txt` (if it exists), or eventually pick a text yourself. Your own text you may save in `misc/`.

Analyse it with the following command (change `todaysdate` to just that, evt. with a, b, ... if you plan to test several versions today):

```sh
cat test/data/freecor
pus.txt | hfst-tokenise -cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst \
| grep ? | sort \
| uniq -c | sort -nr > misc/freecorpus.missing.todaysdate
```

The resulting file will be what we refer to as a `missing list`, a frequency sorted list of unknown wordforms. These should be added to the analyser.

After having worked on the analyser for a while, repeat the procedure. The result is then **two** files (the old and the new). These may then be compared as follows.

(forthcoming)

## Further adjustment options

### Adjusting yaml testing

These adjustments are for the yaml tests referred to in the section on regression testing above.

#### Run only one yaml-test

Remove all yamltests (check in your local modifications first!):

```sh
rm test/src/gt-norm-yamls/*
```

Get the yaml-file you want to test, e.g.:

```sh
svn up test/src/gt-norm-yamls/V-mato_gt-norm.yaml
sh test/yaml-check.sh
```

#### Make/update all yaml-tests in one for a certain PoS (and a certain pattern?)

This example is adding all verbs into one file:

```sh
head -11 test/src/gt-norm-yamls/V-AI-matow_gt-norm.yaml > test/src/gt-norm-yamls/U-all_gt-norm.yaml
tail +11 test/src/gt-norm-yamls/V* | grep -v "==" >> test/src/gt-norm-yamls/U-all_gt-norm.yaml
```

This example is adding all nouns with final -y into one file:

```sh
head -11 test/src/gt-norm-yamls/N-AN-amisk_gt-norm.yaml > test/src/gt-norm-yamls/A-Ny-all_gt-norm.yaml
tail +11 test/src/gt-norm-yamls/N*y_gt-norm.yaml | grep -v "==" >>  test/src/gt-norm-yamls/A-Ny-all_gt-norm.yaml
```

#### Make a new yaml-file

The example is for the inanimate noun ôtênaw. Use an already functioning yaml-file as a starting point (here N-AN-amiskw_gt-norm.yaml). You still have to do a little editing afterwords, like correcting the docu about the lemma, and making it more readable by adding empty lines. And you must of course correct the output.

```sh
head -12 test/src/gt-norm-yamls/N-AN-amisk_gt-norm.yaml\
> test/src/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml

cat test/data/NI-par.txt | sed 's/^/ôtênaw/' | dcrk |\
tr '\t' ':' | sed 's/:/: /' | grep -v '^$' |\
sed 's/^/     /' >> test/src/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml
```

Comment: The last sed-command should give 5 whitespaces
