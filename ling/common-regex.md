# Utility regexes found in gt/common/src


The following is the beginning of documentation of the different utility regexes found in `$GTHOME/gt/common/src/`. To be extended as more is found.


# tag-pos.fst


In order to make pos.fst we need a binary tag-pos.fst
This goal depends on tag-pos.regex. The way it
is done is that all tags except the POS one are deleted.


# tag-not-save.fst
We want to delete the +TV +IV tags for the generator (and other
tags later on. For that we need our tag-deleter.


# hyphen-convert.fst


No documentation yet


# hyphen-remove.fst


No documentation yet


# tag-inclusion-filter.fst


No documentation yet


# tag-no.fst


No documentation yet


# webadr.fst


This goal is to make a regex for filenames, urls and mail addresses
