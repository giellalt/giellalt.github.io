Extracting sentences for precision testing
============================


This document explains how you may harvest sentences  that get error tags in large corpora. The first command gives all the sentences, and the second splits them according to tag and formats them for yaml testing.

# Commands

The commands assume you stand in `lang-$lang/tools/grammarchecker/` and have compiled the grammarchecker.

## Take all sentences from text and collect the positives

You need to preprocess the corpus so that you get one sentence on each line. With `hfst-tokenise` in place you do this as follows:

The corpustext used as input will vary from language to language. Be careful not to include texts used in goldcorpus markup. The texts to use here are documented on the grammarchecker documentation page for the language in question. We assume you stand in `lang-smn` and have your test corpus in `misc/corpustext.txt` (exchange `smn` with your own language):


```sh
# in lang-smn, exchange smn with your code below.
cat misc/corpustext.txt |\
hfst-tokenise -i tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst |\
sed 's/ \([.?!] \)/\1£/g;'|\
tr '£' '\n'|\
sed 's/ \([:;,]\)/\1/g;'|\
divvun-checker -a tools/grammarcheckers/smn.zcheck|\
grep -v '{"errs":\[\],"text":"' > misc/positives.csv
```


The file `positives.csv` will then contain all sentences where the grammarchecker has given an alarm (hence naming it *positives*).



## Order the positives according to rule type 


Each rule (type) has its tag. In order to test the effect of one specific rule we extract all sentences marked with the tag assigned by the the rule or rules in question. Here we use msyn-posspl-ill-gen as a tag example). We use the output from the last command as input, and store it in a file we call `candidates-...` (candidates to yaml tests),  but you may of course choose any name.

```sh
cat misc/positives.csv |\
grep  '"msyn-posspl-ill-gen"'|\
rev|\
cut -d'"' -f2|\
rev|\
sed 's/^/  - "/'|\
sed 's/$/"/' \
> tools/grammarcheckers/tests/candidates-posspl-ill-gen.yaml
```

This command greps the tag from the positives.csv file. The sentence is at the end of the line. The number of fields may change from rule to rule, the command thus cuts the sentence from behind. The sentence is formatted so that it can be added to the yaml fileset in the `grammarchecker/tests` catalogue.

You may then make a list of all rule tags in the grammarchecker, search for each tag in `positives.csv` and store the result in one file for each tag, with a `for` loop. Copy the following (**Note** in the line beginning with `Variant:` you should exchange `smn` with the relevant language code), store it in misc, e.g. as candidates.sh, and run it (stand in `misc` and type the command `sh misc/candidates.sh`):


```sh
#!/bin/bash

for i in `cat taglist.txt`; do
	echo 'Config:
  Spec: ../pipespec.xml
  Variant: smngram-dev

Tests:' > ../tools/grammarcheckers/tests/candidates-$i.yaml
	grep "\"$i\"" positives.csv | rev| \
	    cut -d'"' -f2| rev| sed 's/$/"/'| \
	    sed 's/^/  - "/' \
	    >> ../tools/grammarcheckers/tests/candidates-$i.yaml
done
```



## Integrating the result in regression testing

After having a look, store the sentences, e.g. (as for the example above) to a yaml file `tests/neg-posspl-ill-gen.yaml` file. Then you may test for regression, e.g. with `make check` or (file by file) with the usual command (standing in `tools/grammarchecker`): 

```sh
gramcheck-test.py tests/neg-posspl-ill-gen.yaml -c
```


