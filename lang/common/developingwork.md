Test scripts and routines for development work
==============================================

This page tells how to test the language model, thereby having control over the developmental work. 

We look at 

1. impressionistic testing methods (inspect various forms of output from the fst), 
2. tests for monitoring lexical coverage, 
3. regression tests for morphology and phonology (test against a gold standard) 

When embarking on a new language, the different test approaches often (but not necessarily) become relevant in the order listed above. They are all helpful, though.


# 1. Impressionistic testing

By this impressive title we mean **testing without a predefined correct answer**. Here, there will thus not be any report of **`FAIL`** vs. **`PASS`**, here the linguist must check the output herself or himself.

## Paradigm generation, one lemma at a time

We have a set of routines generating lemmas for words or classes of words :

```sh
sh devtools/verb_minip.sh '^lemma[:+]'
sh devtools/noun_minip.sh '^lemma[:+]'
sh devtools/prop_minip.sh '^lemma[:+]'
sh devtools/adj_minip.sh '^lemma[:+]'
```



## Paradigm generation for large classes of (or even all) lemmas

We have a routine for generating tables of large classes of words. The result is an html file giving a birds' perspective of the analyser.

The command is as follows, one command for each part of speech:

```sh
sh devtools/generate-adj-wordforms.sh
sh devtools/generate-noun-wordforms.sh
sh devtools/generate-prop-wordforms.sh
sh devtools/generate-verb-wordforms.sh
```

> **NOTE!** For languages with gender we typically split the noun file in _generate-msc-wordform.sh_, etc.

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


# 2. Testing for lexical coverage

## Finding missing words in text

The following test setup may be used to test for lexical coverage:

1. Choose a reference text, and keep it constant over time
1. Analyse the text by using the FST
1. Register the words receiving no analysis
1. Work more on the analyser
1. Repeat the procedure 1-3, and compare the new output with the old one

Here is how it is done:

For reference text, you may use `test/data/freecorpus.txt` (if it exists), or eventually pick a text yourself. Your own text you may save in `misc/`.

Analyse it with the following command (change `todaysdate` to just that, evt. with a, b, ... if you plan to test several versions today):

```console
cat test/data/freecorpus.txt |\
    hfst-tokenise -cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst \
    | grep ? | sort \
    | uniq -c | sort -nr > misc/freecorpus.missing.todaysdate
```

The resulting file will be what we refer to as a `missing list`, a frequency sorted list of unknown wordforms. These should be added to the analyser.

After having worked on the analyser for a while, repeat the procedure by using **the exact same test corpus**. UYou then have **two** files containing words missing in the fst (output from the old test and the new). These may then be compared as follows.

`diff misc/freecorpus.missing.lastdate misc/freecorpus.missing.todaysdate | grep "<"`

This command will measure the progress of your work: it will show words that were missing at the time of the last test, but are recognised today.

A potentially even more useful test is the opposite:

`diff misc/freecorpus.missing.lastdate misc/freecorpus.missing.todaysdate | grep ">"`
 
 This will give you all words you were able to recognise last time, but that you for some reason or another are not able to analyse today. The outcome of this command should of course be zero, or no wordforms, as you do not expect your work to make things worse. But every now and then this happens: You may have added a phonological rule that destroys another, you may have changed some path for the worse or you may even accidently have deleted part of the lexicon. All output from this command should thus be studied very carefully.



You can also look at the generation of all members of one continuation lexicon:

```sh
devtools/verb_minip.sh LAAVU
```

You can edit the list of forms in the paradigm files which are mentioned in the scripts, e.g.

```sh
P_FILE="test/data/testnounparadigm.txt"
```

## Adding missing words to the lexc lexicon file

Determine the correct part of speech, find the relevant file in `src/fst/morphology/stems`, and treat the new word accordingly.

There is a script to help you: `missing.py`. To get it, make sure your `giella-core` is up to date (if you can compile the fst of your language, it is). The script may be used as follows (change `word` and `sme` etc. to what fits you):


```
Make a suggestion for a missing word
    echo "word" | missing.py -l sme
Make a suggestion for a multiword expression
    echo "multi word" | missing.py -l sme
Make a suggestion for an unlexicalised compound or derivation
    echo "compoundword" | missing.py -l sme
Make suggestions for a whole corpus, save it to a file
    missing.py \\
        -l sme \\
        --input sme-tokenised-corpus-words.txt \\
        --output missing_sme_corpus.lexc
```

Here are examples from sma, sme, smj:

```
**❯** echo juriste | missing.py -l sma
juriste+N+OLang/NOB+Sem/Hum:jurist ISTE_LOAN ; ! nouns.lexc NounNoPx

**❯** echo váldojurista | missing.py -l sme
!!! Compounds and derivations only !!!
váldojurista+N+CmpN/SgN+CmpN/SgG+CmpN/PlG+Sem/Hum_Pos:váldo#jurisºta GOAHTI-A ; ! nouns.lexc NounNoPx

```

You may also pipe wordlists to missing.py, not only singleton words. Note that 
**the script may not neccessarily be correct**, so make sure you agree. If in doubt, 
check the output with the *Paradigm generation, one lemma at a time*, above.

This testing procedure is work-in-progress (February 2025), see 
[the missing words project page](https://github.com/orgs/giellalt/projects/12) for the latest updates.



# 3. Regression testing

Regression testing is testing against an expected outcome. We thus may
test only what we have decided to test. The regression tests are run automatically.

## Tests embedded in the _make_ procedure



Most regression tests in the GiellaLT infrastructure may be run in one
go, with one of these two commands:

`make check` 
`make devtest` 

The *make check* command gives a short summary of the test results,
some sort of executive summary. The *make devtest* one gives the same
tests, but with far more detail and reference to how to look into the
result in detail.


Depending upon you setup, the _make check_ procedures will test the
following. 

The headlines correspond to output from the _make check_ command given in the terminal). Each text snippet **Making check in** refers to a folder under `lang-XXX`. Some of them contain tests, other do not. We skip the ones that typically contain no tests.

When scrolling through the output of `make check`, you will see summaries in green, like e.g. this one:

```rst
============================================================================
Testsuite summary for Giella smj 0.2.0
============================================================================
# TOTAL: 6
# PASS:  5
# SKIP:  1
# XFAIL: 0
# FAIL:  0
# XPASS: 0
# ERROR: 0
============================================================================
```

The test in question is summarised **above** the green message, offering more detail about what has happened. The following text goes through the different tests:

### The *make check* test for phonology

These tests are written in the `phonology.twolc` file. The tests are
of the format shown here (€ = euro). Single symbols are identical
during input and output, the symbol to the left of the colon is input
from lexc and the one to the left of the colon is output.

```text
!€ e x a m p l e:0 ^DELVOW:0
```

The command `make check` will pick these tests from phonology.twolc
and report on whether the rule has worked or not.

This test may also be run separately, as follows (standing in *lang-xxx*):

```
cat src/fst/morphology/phonology.twolc |grep "^.€ "|\
hfst-pair-test src/fst/morphology/.generated/phonology.lookup.hfst 
```



### The *make check* for orthography

The `orthography` folder contains rules for turning initial capital letters into small (thus, both _Tables_ and _tables_ are plural of `table`), and the `inituppercase` test tests for this.

### The *make check* tests for morphology

Here, there are several tests.

#### The test _./tag_test.sh_

This test finds all tags of the format `+Tag` in the \*.lexc files, and check whether they are declared under `Multichar_Symbols` in `root.lexc`. If not, they are listed here. The error is one of two:

1. You have forgot to declare the tag in `root.lexc`. Do it.
2. There is a typo in your tag. Correct the typo.

The goal is that no tags should be listed, the test will fail until the list is empty.

#### Tests to see whether all lemmas may be generated

The test routine will list tests like

<span type="color:green">XFAIL</span>: generate-adjective-lemmas.sh

<span type="color:red">FAIL</span>: generate-verb-lemmas.sh

You can add or remove tests for adjectives, nouns, propernouns and verbs in `src/fst/morphology/test/Makefile.am`:

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

### Tests for paradigm generation (yaml tests)

Make so-called _yaml files_ in `src/fst/test/gt-norm-yamls`.
Examples are found for all the Saami languages, for `lang-fkv`and for `lang-rmf`.

## Standalone version of *make check* tests

For some of the tests, we have separate commands to do standalone tests (these tests are covered by the _make check_ command as well):

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

### Make/update all yaml-tests in one for a certain PoS (and a certain pattern?)

This example is adding all verbs into one file:

```console
head -11 src/fst/test/gt-norm-yamls/V-AI-matow_gt-norm.yaml > src/fst/test/gt-norm-yamls/U-all_gt-norm.yaml
tail +11 src/fst/test/gt-norm-yamls/V* | grep -v "==" >> src/fst/test/gt-norm-yamls/U-all_gt-norm.yaml
```

This example is adding all nouns with final -y into one file:

```console
head -11 src/fst/test/gt-norm-yamls/N-AN-amisk_gt-norm.yaml > src/fst/test/gt-norm-yamls/A-Ny-all_gt-norm.yaml
tail +11 src/fst/test/gt-norm-yamls/N*y_gt-norm.yaml | grep -v "==" >>  src/fst/test/gt-norm-yamls/A-Ny-all_gt-norm.yaml
```

## Make a new yaml-file

The example is for the inanimate noun ôtênaw. Use an already functioning yaml-file as a starting point (here `N-AN-amiskw_gt-norm.yaml`). You still have to do a little editing afterwords, like correcting the docu about the lemma, and making it more readable by adding empty lines. And you must of course correct the output.

```console
head -12 src/fst/test/gt-norm-yamls/N-AN-amisk_gt-norm.yaml\
    > src/fst/test/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml
cat test/data/NI-par.txt | sed 's/^/ôtênaw/' | dcrk |\
    tr '\t' ':' | sed 's/:/: /' | grep -v '^$' |\
    sed 's/^/     /' >> src/fst/test/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml
```

Comment: The last sed-command should give 5 whitespaces

## Adjustments of the regression testing

### Adjusting yaml testing

These adjustments are for the yaml tests referred to in the section on regression testing above.

#### Run only one yaml-test

Remove all yamltests (check in your local modifications first!):

```console
rm src/fst/test/gt-norm-yamls/*
```

Get the yaml-file you want to test, e.g.:

```console
git restore src/fst/test/gt-norm-yamls/V-mato_gt-norm.yaml
sh test/yaml-check.sh
```



