Plan For More Keyboards
=======

# Tastaturpakker

|  Pakkenamn| Minoritetsspråk inkludert                  | Maj.språk
| --- | --- | --- 
|  samisk   | sma, smj, sme, sms, smn, sje                | nor, swe, fin
|  k-uralsk | myv, mdf, mrj, mhr, udm, kpv, sjd, koi, yrk | rus
|  ø-finsk  | vro, liv, olo, izh, vot, vep                | est, fin, lav
|  algonquin| crk-Latn, crk-Cans, ciw, bla, hdn           | eng, fra

# Bokstavfrekvens

Kommando for å henta fram bokstavfrekvens:

```sh
cat $GTBIG/langs/LANG/corp/*.txt \
| sed 's/\(.\)/\1 /g;' | tr ' ' '\n' \
|  grep -v '[0-9.,:;A-ZÁŠČ§()]' \
| sort | uniq -c | sort -nr \
|  sed 's/^ *//g;' | see
```

# Algoritme for å lage gode ordlister

## Listebasert

Bestem eit omfang (10000 ord?)

1. Frekvensliste av ordformer: 
	1. Ta dei vanlegaste ordformene i løpande tekst av relevant korpus
	1. Ta dei vanlegaste ordformene i løpande tekst av stort korpus 
	1. .. og fyll til saman 1/3
1. Sentralt ordforråd + generere kjerneparadigmer
1. Vanlegaste 500 av verba og generere indikativformene
1. Sikre at pronomen, adverb, interjeksjonar er med

Test:

Følg denne oppskrifta for norsk og sjå kva som fell ut av eksisterande

## fst-basert

Telefonar har 16Gb eller meir.
Våre fst-ar vil truleg vere maksimalt 20MB i vhfst-formatet. Dette vil vere ok.

## Metode

1. Vekte lista (ovafor) på topp etter frekvensinformasjon
1. Vekte bøyingsformer 
1. Blokkere for uvekta fst-framlegg på under 4 bokstavar
