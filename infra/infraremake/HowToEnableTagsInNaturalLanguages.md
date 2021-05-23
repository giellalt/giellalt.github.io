# How to enable tags in natural languages

To enable tags in a natural language instead of the quite cryptic tags we
normally use (like `+N` etc.), you need to do the following:


1. add a regex file in `$GTLANG/src/tagsets/`
1. specify the regex file and the corresponding
  fst's in `$GTLANG/src/tagsets/Makefile.am`
1. specify the name of the fst's with the new tags
  as targets in `$GTLANG/src/Makefile.am`


The name of the regexes and the name of the localised fst's are related,
such that `tagsets/foo.regex` corresponds to `analyser-foo-desc.hfst` etc.
Typically you would want to use the language code of the natural language the
tags are written in.


## In more detail


### Add a regex file


Since the natural language of the tags will vary a lot depending on the
language of the analyser, the regex is language specific. But to get a starting
point, have a look at `langs/sme/`, or use it as a starting point:


```
cp langs/sme/src/tagsets/nob.regex langs/YOURLANG/src/tagsets/LANGCODE.regex
```


Replace `YOURLANG` and `LANGCODE` with the relevant language codes.
Then start to edit the file to get what you want. For North Sami (`sme`) we
have tags in Norwegian Bokmål (`nob`).


### Specify renaming regex and fst files


For the build system to properly build the fst's that are going to change the
tags, you need to tell it that there is a source file and some targets to be
built. This you specify in `$GTLANG/src/tagsets/Makefile.am`.


Open this file, and list the source file(s) in the variable `GT_TAGSET_SRCS`.
Then list the `hfst` and `xfst` targets in the appropriate sections for the
variable `GT_TAGSETS`.


In the North Sami case, these files are named: `nob.regex`, `nob.hfst` and
`nob.xfst`.


### Specify the new analysers and generators


You also need to tell the build system that you have a new set of analysers and
generators you want to build. This is done in the file
`$GTLANG/src/Makefile.am`. For North Sami, we want to build e.g. the file
`analyser-nob-desc.hfst`. You tell the build system this by adding that name
to the variable `GT_ANALYSERS_HFST`. And similar for other files. Have a look
at North Sámi to see how it is done for the rest of the analysers and generators
you may want.


When these three steps are done, you can type `make`, and you should soon be
greeted with a new set of analysers and generators!
