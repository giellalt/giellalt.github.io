Transcriptors
=============

The infrastructure has several FSTs for transcribing from one text string to another, uds

# Overview


The folder `lang-xxx/src/transcriptions/` contains setup for various number and symbol representations to their text representation. The source files in the catalogue are:

```sh
transcriptor-abbrevs2text.lexc         # for abbreviations
transcriptor-clock-digit2text.lexc     # for time expressions
transcriptor-date-digit2text.lexc      # for dates
transcriptor-numbers-digit2text.lexc   # for cardinals and ordinals
```

Each `lexc` file gives rise to two transducers, here with `clock`  as example:

```sh
transcriptor-clock-digit2text.lexc
[...]
transcriptor-clock-digit2text.filtered.lookup.hfstol
transcriptor-clock-text2digit.filtered.lookup.hfstol
```

The direction (from digit to text or vice versa) is shown in the filename.

# Development

TBW.

# Testing

## Commands

Here are some resources for testing the transcriptors. You may generate the first 100 numbers as follows (replace the digits after `seq` according to what you want to test):

```sh
seq 1 100 | \
  hfst-lookup -q src/transcriptions/transcriptor-numbers-digit2text.filtered.lookup.hfstol
```

Then you may check the output against the normative analyser:

```sh
seq 1 100 | \
  hfst-lookup -q src/transcriptions/transcriptor-numbers-digit2text.filtered.lookup.hfstol | \
  cut -f2 | \
  cut -c1- | \
  grep -v '^$' | \
  hfst-lookup -q src/analyser-gt-norm.hfstol
``` 

## Documents for testing

We have ready-made files for all numeral formats:

```sh
$GTHOME/ped/doc/common/numratesting/cardinal
$GTHOME/ped/doc/common/numratesting/clock    
$GTHOME/ped/doc/common/numratesting/date     
$GTHOME/ped/doc/common/numratesting/ordinal
```

You may thus test with these files (here with `clock` as example):

```sh
cat $GTHOME/ped/doc/common/numratesting/clock | \
  hfst-lookup src/transcriptions/transcriptor-clock-digit2text.filtered.lookup.hfstol
```

(If you don't have GTHOME, the files are [here](https://gtsvn.uit.no/langtech/trunk/ped/doc/common/numratesting/)


# Phonetics

The folder `lang-xxx/src/phonetics/` contains setup for text-to-IPA transcription.

# Spell relax

The folder `lang-xxx/src/orthography/` contains files for translating sloppy writing and non-standard encoding to standard forms.