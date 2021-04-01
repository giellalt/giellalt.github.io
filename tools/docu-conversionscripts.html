Conversion scripts
==================

The conversion scripts are located in `$GTHOME/gt/script` and in
`$GTHOME/giella-core/scripta`. The intention is to move all of them to
giella-core.

The unix utility **iconv** contains ready-made conversion routines for
many code tables. The syntax is as follows:

`$ iconv --from-code=ISO-8859-1 --to-code=UTF-8 < old_file > new_file`

A list of code tables is listed with **iconv --list**.

Case conversion scripts (capital/small letters)
===============================================

Initial capital letter
----------------------

The most improtant caseconvertion scripts are case.regex (caseconv.fst).
They are different form language to language, and located in the
language-specific directories. They form an integrated part of the
Makefiles, and the resulting parsers contain the ability of recognising
initial capital letters.

Letters in all caps (with hfst-tokenize)
----------------------------------------

Hfst's combined preprocessor and morphological analyser is able to
handle input written with capital letters. See [this introduction to
preprocessing](../ling/preprocessor.html).

Letters in all caps (with xfst)
-------------------------------

Using xfst, analysing words written in all caps is not that easy. There
is a script called allcaps.regex. By using this script, ("Duodji" is
accepted, as is "DUODJI", but "DuoDji" is not. These are also located in
the src directories (so far only for sme), and are integrated in the
Makefile. But the resulting allcaps.fst is not compiled together with
sme.fst into a single transducer, as this would have resulted in a too
large network. Instead, it is kept separate in the sme/bin directory,
and when needed, it may be invoked by the following command (assuming
you stand in gt/sme):

... \| lookup -flags mbTT -f src/cap-sme \| ...

Note that the lookup script file is located in sme/src, but the binary
allcaps.fst that the cap-sme file refers to, is located in sme/bin.

The spellrelax scripts
======================

South and Lule Saami have scripts to allow for different practices for
writing *ï¿½* (as ï¿½or i) and for the Norwegian/Swedish ï¿½ï¿½and ï¿½
mix. These are xfst scripts, integrated in the makefiles of sma and smj.
