# *divvunspell*, *accuracy*,  *regtest* ... and *hfst-ospell*

## Background

GiellaLT facilitates the use of two speller engines:

1. [divvunspell](https://github.com/divvun/divvunspell)
2. [hfst-ospell](https://github.com/hfst/hfst-ospell)

We have recently (2024) moved to using _divvunspell_ for the GiellaLT
spellers. Thesting with divvunspell thus reflects the actual behaviour
of the spellers better.

## Installation and documentation

### Divvunspell from the right column of the git page

- Divvunspell may be fetched from **Releases** in the right column
  of [the divvunspell
  github-page](https://github.com/divvun/divvunspell#accuracy)
- If the programs are still not up-to-date, see:
  - [divvunspell
    readme](https://github.com/divvun/divvunspell/blob/main/README.md)
- Technical documentation
  - [Divvunspell API, accuracy and regtest documentation](https://divvun.github.io/divvunspell/)

### Divvunspell and accuracy from the command line

It can (also?) be installed from the command line, as follows:

```
cargo install --path cli
cd crates/accuracy
cargo install --path .
```


### hfst-ospell

hfst-ospell is downloaded as part of the *hfst* package. Under **Step
1** on the [Getting started](../..//infra/GettingStarted.html) page, 
go via the link to your operative system (Mac, Linux, Windows) to the
link to *install-nightly.sh*, and you will get hfst-ospell as well.

## Speller testing with divvunspell

Divvunspell may do a spellcheck on words sent from standard input, or
it may check the spelling of words against a correct form. We look at
both options.

### Testing the spelling of words or word lists

All these three commands will give results:

```
divvunspell suggest --archive tools/spellcheckers/fit.zhfst  "halthun"
echo halthun | divvunspell suggest --archive tools/spellcheckers/fit.zhfst
cat wordlist | divvunspell suggest --archive tools/spellcheckers/fit.zhfst
```

The wordlist should contain one word per line.


### Testing the behaviour of the speller against error-correct pairs

Here, we test a file *typos.tsv* where each lines contains an
`error<tab>correct` pair.

There's a prototype-level testing tool in the divvunspell
directory. Use divvunspell like this (here with **sma** as an example, the
command assumes you stand in `divvun/divvunspell/`, the path to and name
of the files containing the test data (here: `typos.tsv` and speller
(here: `sma.zhfst`) will of course vary).:

```sh
divvunspell accuracy  \
  -o support/accuracy-viewer/public/report.json \
  ../../giellalt/lang-sma/tools/spellchecker/test/typos.tsv \
  ../../giellalt/lang-sma/tools/spellchecker/sma.zhfst

cd support/accuracy-viewer

npm i && npm run dev
```

View in a browser with `http://localhost:5000` (where a 4- or 5-digit
number is given in the feedback).

More info can be found in `accuracy --help`.

### Using the results

The penalty points are explained on [the Speller Error Model
page](../TheSpellerErrorModel.html). The goal is to get values for
corrections as high as possible, this may be done by tweaking the
penalty points.

With the `--verbose` option, there is more info on the results. The
answers are explained on [the readme page explaining the accuracy
program](https://github.com/divvun/divvunspell/tree/add-verbose-weight-details#accuracy-with-detailed-weight-information),
but the main point is that the results should be read as follows:

- **lex:** lexicon weight, includes both frequency weight and tag weights as specified in tools/spellcheckers/weights/tags.reweight
- **mut:** mutator weight, ie the weight added by the error model
- **rew:** position-based reweighting, separated by /:
	- first position
	- middle positions (all but first and last)
    - last position

# hfst-ospell

Divvunspell is the speller engine used in the final
spellcheckers, and should thus be the engine used for testing. The
`hfst-ospell` spelling engine has a nice commandline interface and is
thus useful for interactive testing. Cf.

```sh
hfst-ospell --help
```
