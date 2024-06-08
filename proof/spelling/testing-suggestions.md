Testing speller suggestions
===========================

We no longer test suggestions with hfst-ospell (there were bugs, and the actual programs use *divvunspell* anyway. We thus test with divvunspell.

# Test procedures

## Creating a nice html page.

In order to test speller suggestions, clone `github.com/divvun/divvunspell`. Thereafter, do (here, with language code `fit` as an example):

In `divvunspell`, write

```
accuracy -o support/accuracy-viewer/public/report.json ../../giellalt/lang-fit/test/data/typos.txt ../../giellalt/lang-fit/tools/spellcheckers/fit.zhfst`

cd support/accuracy-viewer/

npm i && npm run dev
```

Then, open the test result as explained.


## Running a wordlist through divvunspell

The following command takes a wordlist (here, for **fit**), spits it out in *json* format with 5 suggestions, and shows only the words that according to *divvunspell* are spelled incorrectly.

`cat wordlist | divvunspell suggest --json -n 5 -a tools/spellcheckers/fit.zhfst |jq -c|tr '{' '\n'|grep -v ":true"`


# Evaluate test results

In order to evaluate the effect of the suggestion mechanism, one must for each target word (each suggestion) take the corpus weight into consideration. The corpus weight of each target word we get as follows:

`hfst-lookup tools/spellcheckers/analyser-desktopspeller-gt-norm.hfst`

