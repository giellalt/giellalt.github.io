
Ranking suggestions in divvunspell
==================================

## Background

GiellaLT facilitates the use of two epeller engines:

1. hfst-ospell (ref)
2. [divvunspell](https://github.com/divvun/divvunspell)

We have recently (2024) moved to *divvunspell*. 

- [The Speller Error Model](../TheSpellerErrorModel.html) dokuments suggestion ranking based on letter substitutions

## Speller testing with divvunspell

There's a prototype-level testing tool in the divvunspell directory.
Clone [divvunspell](https://github.com/divvun/divvunspell) and use it like this (here with **sma** as an example).:

```
accuracy -o support/accuracy-viewer/public/report.json typos.txt sma.zhfst
cd support/accuracy-viewer
npm i && npm run dev
```

View in `http://localhost:5000` (where the 5-digit number is given in the feedback.

More info by `accuracy --help`.


## Interpreting the results

The penalty points are [explained here](../TheSpellerErrorModel.md). The 
