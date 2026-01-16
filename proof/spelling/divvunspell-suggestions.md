# Ranking suggestions in divvunspell

## Background

GiellaLT facilitates the use of two epeller engines:

1. [hfst-ospell](https://github.com/hfst/hfst-ospell)
2. [divvunspell](https://github.com/divvun/divvunspell)

We have recently (2024) moved to using _divvunspell_ for the GiellaLT spellers.

- [The Speller Error Model page](../TheSpellerErrorModel.html)
  documents how to rank correction suggestions based on letter
  substitutions.

## Speller testing with divvunspell

There's a prototype-level testing tool in the divvunspell
directory. In order to use it, clone _divvunspell_ (see the
[README](https://github.com/divvun/divvunspell/blob/main/README.md)
file for details. Note that you will need **rust** to use divvunspell.

Use divvunspell like this (here with **sma** as an example, the
command assumes you stand in divvun/divvunspell, the path to and name
of the files containing the test data (here: *typos.tsv* and speller
(here: *sma.zhfst*) will of course vary).:

```
accuracy -o support/accuracy-viewer/public/report.json ../../giellalt/lang-sma/tools/spellchecker/test/typos.tsv  ../../giellalt/lang-sma/tools/spellchecker/sma.zhfst

cd support/accuracy-viewer

npm i && npm run dev
```

View in a browser with `http://localhost:5000` (where the 5-digit
number is given in the feedback).

More info by `accuracy --help`.

## Using the results

The penalty points are explained on [the Speller Error Model
page](../TheSpellerErrorModel.md). The goal is to get values for
corrections as high as possible, this may be done by tweaking the
penalty points.

## Divvunspell documentation pages

- [Divvunspell API, accuracy and regtest documentation](https://divvun.github.io/divvunspell/)

# hfst-ospell

Divvunspell is the speller engine used in the final
spellcheckers, and should thus be the engine used for testing. The
hfst-ospell spelling engine has a nice commandline interface and is
thus useful for interactive testing. Cf.

`hfst-ospell --help`


