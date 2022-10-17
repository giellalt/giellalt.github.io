Extracting sentences for precision testing
============================


This document explains how you may harvest sentences  that get error tags in large corpora. The first command gives all the sentences, and the second splits them according to tag and formats them for yaml testing.

## Commands

The commands assume you stand in `lang-$lang/tools/grammarchecker/` and have compiled the grammarchecker.

### Take all sentences from text and collect the positives



```
cat corpustext.txt |\
sed 's/\. /.£/g;'|\
sed 's/\? /?£/g;'|\
sed 's/\! /\!£/g;'|\
tr '£' '\n'|\
divvun-checker -a smn.zcheck|\
grep -v '{"errs":\[\],"text":"' > positives.csv
```

The file `positives.csv` will then contain all sentences where the grammarchecker has given an alarm (hence "positives").



### Order the positives according to rule type 


Each rule (type) has its tag. In order to test one rule at a type we extract all sentences marked with the same tag. Here we use msyn-posspl-ill-gen as a tag example). We use the output from the last command as input.

```
cat positives.csv |\
grep  '"msyn-posspl-ill-gen"'|\
rev|\
cut -d'"' -f2|\
rev|\
sed 's/^/  - "/'|\
sed 's/$/"/' \
> neg-posspl-ill-gen.yaml
```

This command greps the tag from the positives.csv file. The sentence is at the end of the line. The number of fields may change from rule to rule, the command thus cuts the sentence from behind. The command then saves the sentences to a file with the same name (`neg-` instead of `msyn-` in the assumption that the sentences are false positives, but you may of course choose any name. The sentence is formatted so that it can be added to the yaml fileset in the `grammarchecker/tests` catalogue.

### Integrating the result in regression testing
After having a look, store the sentences, e.g. (as for smn) to the existing `tests/neg-posspl-ill-gen.yaml` file. Then you may test for regression, e.g. with `make check` or (file by file) with the usual command: 

`gramcheck-test.py tests/neg-posspl-ill-gen.yaml -c`


