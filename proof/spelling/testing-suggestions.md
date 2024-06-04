Testing speller suggestions
===========================

We no longer test suggestions with hfst-ospell (there were bugs, and the actual programs use *divvunspell* anyway. We thus test with divvunspell.

# Test procedure

In order to test speller suggestions, clone `github.com/divvun/divvunspell`. Thereafter, do (here, with language code `fit` as an example):

In `divvunspell`, write

```
accuracy -o support/accuracy-viewer/public/report.json ../../giellalt/lang-fit/test/data/typos.txt ../../giellalt/lang-fit/tools/spellcheckers/fit.zhfst`

cd support/accuracy-viewer/

npm i && npm run dev
```

Then, open the test result as explained.


# Evaluate test results


The corpus weight of each target word we get as follows:

`hfst-lookup tools/spellcheckers/analyser-desktopspeller-gt-norm.hfst`

