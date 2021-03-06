# Developing work: 

This is mostly about evaluating the output of the FST.

Here are some tips for the linguist.


## Make an alias to your lang-catalog, e.g. crk


Add this to your .bashrc or .profile (replace */path/to* with the path to your *lang-crk* folder: 
```
alias crk="pushd ~/path/to/lang-crk" 
```


Open a new terminal window: In any catalogue, write 'crk' ENTER.




# How to compile in lang-LANG


```./configure```


Examples for parameters: ```./configure --enable-spellers```


How to get a list of parameters: ```./configure -h```


How to see the parameters which are set: ```head config.log```


# TESTSSCRIPTS

## The *make check* routine

We have made a large set of test scripts. They may be run with the command

```make check```

Tests include:

- test to see whether all tags are declared
- tests to see whether all lemmas may be generated (the test setup for this test must be done for each language separately)
- tests for phonology, morphology and paradigm generation.


You can add or remove tests in test/src/morphology/Makefile.am:  


```
GENERATION_TESTS_IN=generate-adjective-lemmas.sh.in  \
                    generate-noun-lemmas.sh.in       \
                    generate-propernoun-lemmas.sh.in \
                    generate-verb-lemmas.sh.in
```



## Standalone tests


For some of the tests, we have separate commands to do standalone tests (these tests are covered by the *make check* command as well):

Test that all tags are declared and written correctly.

```sh devtools/tag_test.sh```

Test that lemmas can be generated:

```sh test/lemma-check.sh```


Run yaml tests:

```sh test/yaml-check.sh```


## Paradigm generation

We have a set of routines generating lemmas for words or classes of words (these tests are not covered by *make check*):

```
sh devtools/verb_minip.sh '^lemma[:+]'
sh devtools/noun_minip.sh '^lemma[:+]'
sh devtools/prop_minip.sh '^lemma[:+]'
sh devtools/adj_minip.sh '^lemma[:+]'
```

You can look at the generation of all members of one cont.lex:

```sh devtools/verb_minip.sh LAAVU ```


You can edit the list of forms in the paradigm files which are mentioned in the scripts, e.g.


```P_FILE="test/data/testnounparadigm.txt"```

We have a routine for generating tables of large classes of words, the result is an html file giving a birds' perspective of the analyser.


```
sh devtools/generate-adj-wordforms.sh
sh devtools/generate-noun-wordforms.sh
sh devtools/generate-prop-wordforms.sh
sh devtools/generate-verb-wordforms.sh
```


You can edit the list of forms:
```
morf_codes="+N+Sg+Nom \
            +N+Sg+Gen"
```


You can edit which cont.lexes to test:
```exception_lexicons="(3JESANEH|3PAPAREH|3VANHIMEH)"```


You can edit how many lemmas of each cont.lex to test:
```lemmacount=2```


## Adjusting yaml testing
These adjustments are for the yaml tests referred to above.

### Run only one yaml-test
Remove all yamltests (check in your local modifications first!):

```
rm test/src/gt-norm-yamls/*
```
Get the yaml-file you want to test, e.g.: 

```
svn up test/src/gt-norm-yamls/V-mato_gt-norm.yaml
sh test/yaml-check.sh
```

### Make/update all yaml-tests in one for a certain PoS (and a certain pattern?)
This example is adding all verbs into one file:

```
head -11 test/src/gt-norm-yamls/V-AI-matow_gt-norm.yaml > test/src/gt-norm-yamls/U-all_gt-norm.yaml
tail +11 test/src/gt-norm-yamls/V* | grep -v "==" >> test/src/gt-norm-yamls/U-all_gt-norm.yaml
```


This example is adding all nouns with final -y into one file:

```
head -11 test/src/gt-norm-yamls/N-AN-amisk_gt-norm.yaml > test/src/gt-norm-yamls/A-Ny-all_gt-norm.yaml 
tail +11 test/src/gt-norm-yamls/N*y_gt-norm.yaml | grep -v "==" >>  test/src/gt-norm-yamls/A-Ny-all_gt-norm.yaml
```

###  Make a new yaml-file
The example is for the inanimate noun ôtênaw. Use an already functioning yaml-file as a starting point (here N-AN-amiskw_gt-norm.yaml). You still have to do a little editing afterwords, like correcting the docu about the lemma, and making it more readable by adding empty lines. And you must of course correct the output. 


```
head -12 test/src/gt-norm-yamls/N-AN-amisk_gt-norm.yaml\
> test/src/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml


cat test/data/NI-par.txt | sed 's/^/ôtênaw/' | dcrk |\
tr '\t' ':' | sed 's/:/: /' | grep -v '^$' |\
sed 's/^/     /' >> test/src/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml
```


Comment: The last sed-command should give 5 whitespaces








