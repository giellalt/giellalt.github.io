# Quasicode For Keeping Track Of Transducers

This document follows the `cgi-interface.xsl` and 
`cgi-index.xsl` document. They document what cgi-bin processes 
each and every language is subject to. The processes themselves are
governed by `conf.pl` and other cgi-bin scripts in the www directory.


The source files are compiled in the maintainer's home directory
on gtweb (and for oahpa, on gtoahpa). A suitable command for 
compiling the fsts might be to 
run `makeall.sh` (and thereafter go for a cup of coffee).


After the fsts are compiled they should be copied manually or 
semi-manually to the /opt/smi catalogue by the person who compiled them.


The reason why this is not done automatically (say, by a cronjob) 
is that we want to be sure
fsts are checked before they are put online. With the large number
of fsts we still need to make the process semi-automatic, with scripts
a la *update mhr*. This documents paves the way for such a setup.


In short: *We want to have a selective button to press*, 
called e.g. **web-update LANG**.


A (now outdated) script to do this, and to get inspiration, is:

`$GTLANG/gt/script/fst2opt`


Source files are in these catalogues: 
```
$GTHOME/langs/LANG
$GTHOME/gt/sme/src
```


# List of file names


This list is taken from the sme catalogue, and thus a maximum version.
Other languages contain less.


```
Name in /opt/smi/LANG/bin  | Name in langs/LANG/src
---------------------------+--------------------------
abbr.txt                   = (ikkje i ny infra enno)
clock-LANG.fst             = transcriptor-clock2text-desc.xfst
corr.txt                   = (ikkje i ny infra enno)
date-LANG.fst              = transcriptor-date2text-desc.xfst
dict-iLANG-norm.fst        = generator-dict-gt-norm.xfst
dict-LANG-norm.fst         = analyser-dict-gt-norm.xfst
hyphrules-LANG.fst         = hyphenation/hyphenation.xfst
hyph-LANG.fst              = (ikkje i ny infra enno)
hyph-LANG.save             = (ikkje i ny infra enno)
iclock-LANG.fst            = transcriptor-text2clock-desc.xfst
idate-LANG.fst             = transcriptor-text2date-desc.xfst
iLANG.fst                  = generator-gt-desc.xfst
iLANG-GG.restr.fst         = ikkje i ny infra
iLANG-norm.fst             = generator-gt-norm.xfst
korpustags.LANG.txt        = ../test/data/korpustags.LANG.txt
oahpa-iLANG-norm.fst       = generator-oahpa-gt-norm.xfst
paradigm_full.LANG.txt     = ../test/data/paradigm_full.LANG.txt (temporary place)
paradigm_min.LANG.txt      = ../test/data/paradigm_min.LANG.txt (temporary place)
paradigm.LANG.txt          = ../test/data/paradigm.LANG.txt (temporary place)
paradigm_standard.LANG.txt = ../test/data/paradigm_standard.LANG.txt (temporary place)
ped-LANG.fst input til s/v = ???
ped-tol-LANG.fst           = ???
phon-LANG.fst              = phonetics/text2ipa.xfst
LANG-dep.bin               = syntax/dependency.bin
LANG-dep.rle               = syntax/dependency.cg3
LANG-dis.bin               = syntax/disambiguation.bin
LANG-dis.rle               = syntax/disambiguation.cg3
LANG.fst                   = analyser-gt-desc.xfst (see LANG-site.fst!)
LANG-inum.fst              = transcriptor-text2numbers-desc.xfst
LANG-norm.fst              = analyser-gt-norm.xfst
LANG-num.fst               = transcriptor-numbers2text-desc.xfst
LANG-site.fst sme.fst u/sem= analyser-gt-desc.xfst (see LANG-site.fst!)
smi-syn.rle                = syntax/syntax.cg3
typos.fst                  = ../test/data/typos.fst
```


## Basic files for all


We have analysis and paradigm for all languages

```
LANG.fst       = src/analyser-gt-desc.xfst	    
iLANG.fst      = src/src/generator-gt-desc.xfst	
iLANG-norm.fst = src/src/generator-gt-norm.xfst	
```


# Language-specific files

The distribution is governed by cgi-interface.xsl.
Thus, one possibility is to just copy all files over.


## cgi-interface.xsl


### Syntax


```
if dependency="1", copy:
LANG/src/syntax/dependency.bin /opt/smi/LANG/bin/LANG-dep.bin
LANG/src/syntax/dependency.cg3 /opt/smi/LANG/bin/LANG-dep.rle

if nodisamb="0", copy:
LANG/src/syntax/disambiguation.bin /opt/smi/LANG/bin/LANG-dis.bin
LANG/src/syntax/disambiguation.cg3 /opt/smi/LANG/bin/LANG-dis.rle
LANG/src/...	/opt/smi/LANG/bin/abbr.txt	

if nohyph="0", copy:
LANG/src/hyphenation/hyphenation.xfst  /opt/smi/LANG/bin/hyph-LANG.fst

if orth="1" & lang="kal", copy:
LANG/src/transcriptions/kleinschmidt2norm.xfst /opt/smi/LANG/bin/orth-LANG.fst

if translate_dan="1", copy
LANG/

if translate_nob="1", copy
LANG/


### Other transducers

if orth="1" & lang="ipk", copy:

if phon="1", copy
LANG/src/phonetics/text2ipa.xfst /opt/smi/LANG/bin/phon-LANG.fst


### Paradigm generation

if dialpara="1"

if minpara="1"

if standardpara="1"

if fullpara="1"

```

## cgi-index.xml

if nonum="0"

LANG/src/transcriptions/transcriptor-numbers2text-raw.xfst 	/opt/smi/LANG/bin/LANG-num.fst

if oahpa="1"

src/transcriptions/transcriptor-clock2text-raw.xfst	/opt/smi/LANG/bin/iclock-LANG.fst

src/transcriptions/transcriptor-date2text-raw.xfst	/opt/smi/LANG/bin/idate-LANG.fst

Invert these transducers and copy them to clock-LANG.fst and date-LANG.fst

CHECK: It might be that Oahpa uses fsts stored in he /home/oahpa catalogue.