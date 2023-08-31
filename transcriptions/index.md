Transcriptors
=============

The infrastructure has several FSTs for transcribing from one text string to another, uds

# Transcriptors

## Overview


The folder `lang-xxx/src/phonetics` contains setup for various number and symbol representations to their text representation. The source files in the catalogue are:

```
transcriptor-abbrevs2text.lexc         # for abbreviations
transcriptor-clock-digit2text.lexc     # for time expressions
transcriptor-date-digit2text.lexc      # for dates
transcriptor-numbers-digit2text.lexc   # for cardinals and ordinals
```

Each `lexc`file gives rise to two transducers, here with `clock`  as example:

´´´
transcriptor-clock-digit2text.filtered.lookup.hfstol
transcriptor-clock-digit2text.lexc
transcriptor-clock-text2digit.filtered.lookup.hfstol
´´´

The direction (from digit to text or vice versa) is shown in the filename.

## Development

## Testing

### Commands

Here are some resources for testing the transcriptors. You may generate the first 100, or .. numbers as follows:

` yes |head -100|cat -n|cut -c-6|tr -d " "|hfst-lookup src/transcriptions/transcriptor-numbers-digit2text.filtered.lookup.hfstol` 

Then you may check them up against the fst:

`yes |head -100|cat -n|cut -c-6|tr -d " "|hfst-lookup src/transcriptions/transcriptor-numbers-digit2text.filtered.lookup.hfstol |cut -f2|cut -c1-|grep -v '^$'|husma` 


### Documents for testing

We have ready-made files for all numeral formats:

$GTHOME/ped/doc/common/numratesting/cardinal
$GTHOME/ped/doc/common/numratesting/clock    
$GTHOME/ped/doc/common/numratesting/date     
$GTHOME/ped/doc/common/numratesting/ordinal
```

You may thus test with these files (here with `clock` as example):

`cat $GTHOME/ped/doc/common/numratesting/clock |hfst-lookup src/transcriptions/transcriptor-clock-digit2text.filtered.lookup.hfstol`

(If you don't have GTHOME, the files are [here](https://gtsvn.uit.no/langtech/trunk/ped/doc/common/numratesting/)





# Phonetics

The folder `lang-xxx/src/phonetics` contains setup for text-to-IPA transcription.

# Spell relax

The folder `lang-xxx/src/orthography` contains files for translating sloppy writing and non-standard encoding to standard forms.