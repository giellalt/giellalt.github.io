# Developing work: Mostly about evaluating the output of the FST
Here are some tips for the linguist.


## Make an alias to your lang-catalog, e.g. crk


Add this to your .bashrc or .profile: 
```
alias crk="pushd ~/main/langs/crk" 
```


Open a new terminal window: In any catalogue, write 'crk' ENTER.




# How to compile in langs/LANG


```./configure```


Examples for parameters: ```./configure --with-hfst --enable-dicts```


How to get a list of parameters: ```./configure -h```


How to see the parameters which are set: ```head config.log```


# TESTSSCRIPTS


## Test that all tags are declared and written correctly


```sh devtools/tag_test.sh```


## Test that lemmas can be generated (also done with make check)


```sh test/lemma-check.sh```


You can add or remove tests in test/src/morphology/Makefile.am:  


```
GENERATION_TESTS_IN=generate-adjective-lemmas.sh.in  \
                    generate-noun-lemmas.sh.in       \
                    generate-propernoun-lemmas.sh.in \
                    generate-verb-lemmas.sh.in
```


## Run yaml tests  (also done with make check)


```sh test/yaml-check.sh```


## Look at paradigm generation
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




## Make tables with paradigms


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


## Run only one yaml-test
Remove all yamltests (check in your local modifications first!):


```
rm test/src/gt-norm-yamls/*
```
Get the yaml-file you want to test, e.g.: 
```
svn up test/src/gt-norm-yamls/V-mato_gt-norm.yaml
sh test/yaml-check.sh
```




## Make/update all yaml-tests in one for a certain PoS (and a certain pattern?)
This example is adding all verbs into one file:
```
head -11 test/src/gt-norm-yamls/V-AI-matow_gt-norm.yaml > test/src/gt-norm-yamls/U-all_gt-norm.yaml
tail +11 test/src/gt-norm-yamls/V* | grep -v "==" >> test/src/gt-norm-yamls/U-all_gt-norm.yaml```


This example is adding all nouns with final -y into one file:
```
head -11 test/src/gt-norm-yamls/N-AN-amisk_gt-norm.yaml > test/src/gt-norm-yamls/A-Ny-all_gt-norm.yaml 
tail +11 test/src/gt-norm-yamls/N*y_gt-norm.yaml | grep -v "==" >>  test/src/gt-norm-yamls/A-Ny-all_gt-norm.yaml
```




##  Make a new yaml-file
The example is for the inanimate noun ôtênaw. Use an already functioning yaml-file as a starting point (here N-AN-amiskw_gt-norm.yaml). You still have to do a little editing afterwords, like correcting the docu about the lemma, and making it more readable by adding empty lines. And you must of course correct the output. 


```
head -12 test/src/gt-norm-yamls/N-AN-amisk_gt-norm.yaml\
> test/src/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml


cat test/data/NI-par.txt | sed 's/^/ôtênaw/' | dcrk |\
tr '\t' ':' | sed 's/:/: /' | grep -v '^$' |\
sed 's/^/     /' >> test/src/gt-norm-yamls/N-IN-otenaw_gt-norm.yaml
```


Comment: The last sed-command should give 5 whitespaces








