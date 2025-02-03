# Defining alternative orthographies

Many languages have alternative orthographies, from very straight-forward variation in how long vowels are marked (e.g. Plains Cree, where SRO suggests using `^`, as in `â`, but where there is an alternative tradition using macron, as in `ā`), to historical / older orthographies that is quite different from today's.

The GiellaLT infrastructure should be able to handle most if not all cases, as long as there is a systematic relationship between them on some level. And as long as we talk about the same language, there usually is.

## Short overview

This is what you need:
- names for each orthographic variant
- rules for the relationship between them
- possibly some alternating forms in the lexicon or morphology

The rules function as FST filters that converts from one to the other, but more complex rule systems involving the full lexical transducer can be built as well.

## Details

### Names and configuration

File: `configure.ac`, around line 100.

The following variables are relevant:

```sh
AC_SUBST([DEFAULT_ORTH], [""])
AC_SUBST([ALT_ORTHS], [""])
AM_CONDITIONAL([WANT_ALT_ORTH_PROOFTOOLS], [ false ])
```

By default the first two variables are empty, but both needs to be specified if you have more than one orthography. If you have several alternative orthographies (like several historical ones, for example), just list them all space separated.

The name itself must be at most eight - 8 - characters long, start with a letter, and only contain ascii letters and digits. Make the name easy to recognise, memorise and type.

The third variable, `WANT_ALT_ORTH_PROOFTOOLS`, specifies whether the build system should make proofing tools for the alternative orthographies or not. If the alternative orthography is a contemporary one, the answer is typically yes (specify `true` as the value), if the other orthographies are older variants, the answer is proably no (specify `false`). At present this is an all or nothing setting - you can't have proofing tools for some variants and not for others. Proofing tools are always built for the default orthography.

#### Enabling alternative orthographies

Even if you have denifed the alternative orthography/-ies, and added all additional files, nothing will be compiled by default, as in most cases the extra orthographies just make the compilation take more time. So to actually build all FST's for the additional orthography/-ies, you also need to enable them as follows:

```sh
./configure --enable-altorths
```

### Conversion rules and corresponding files

Presently the system offers three ways of specifying the relationship between orthographies:

- simple surface mapping
- surface mapping with morphological borders
- deep structure mapping

#### Surface mapping

If the mapping from the default orthography to the alternative orthography can be done based on the surface form of the default orthography, specify this in a file named one of:

```make
src/fst/orthography/$(DEFAULT_ORTH)-to-$(ALTORTH).regex
src/fst/orthography/$(DEFAULT_ORTH)-to-$(ALTORTH).xfscript
```

where `$(DEFAULT_ORTH)` is replaced with the name you defined for the default orthography in `configure.ac` above, and `$(ALTORTH)` is replaced with the name for the alternative orthography. If there are several alternative orthographies, you need one file for each orthography.

Whether you use a simple `.regex` file or a more complex `.xfscrip` file depends on the complexity of the mapping, you choose what you think is the best option.

You also need to specify the new file(s) in the `make` file `src/fst/orthography/Makefile.am`, to ensure the conversion regex/script is compiled into an FST.

If you have turned off proofing tools for the alternative orthographies, this is it. You are ready to build and start analysing texts in the alternative orthographies!

#### Surface mapping with morphological borders

If the mapping is not possible directly from the surface form, but would need morphological borders as a guide, the setup is almost identical to the previous one, but the filenames are slightly different:

```make
src/fst/orthography/raw-to-$(ALTORTH).regex
src/fst/orthography/raw-to-$(ALTORTH).xfscript
```

The `raw` analyser is the generated file `src/fst/analyser-raw-gt-desc.hfst`, which contains all symbols on both sides of the FST, including all morphological borders defined in the source code. These borders are removed before turning the FST into a real analyser, but they are kept in the `raw` FST exactly for these and similar purposes: morphological borders are very useful for certain applications.

Write the conversion script with the borders in mind, and add them to the `make` file as above, and you are ready to go.

#### Deep structure mapping

There are many cases where a direct mapping is not possible, even with the help of morphological borders. In these cases the mapping is instead based on the internal representation in the lexicon. Here's an example from North Sámi:

```
Irak9-soahºti => Irak-soahti
```

The use of special symbols internally, like `k9` and `º`, can be seen as generalisations or abstractions over the morphology or the phonology in the language that is not always expressed in the modern orthgraphy, but maps easily to older orthographies.

That is, by using this internal representation as the starting point, one can usually overcome ambiguities and underspecifications in the default orthography.

Be aware that this mapping does not happen by itself. It needs planning from the beginning. Often it is enough to be systematic in a linguistic sense, and define classes and archephonemes that make sense from a linguistic point of view, as such classes and archephonemes often reflect language history, and as such makes the mapping possible.

Symbols as the ones above are removed or converted to regular letters in the default orthography, thus we need to add the conversion script at an earlier stage in the FST build process to be able to use them for conversion to alternative orthographies.

These are the steps:

1. create a new phonology file, named `src/fst/morphology/phonology.ALTORTH.twolc` — replace `ALTORTH` with the name of the alternative orthography you defined above. It might be easiest to just copy the existing phonology file, and modify that one, instead of starting from scratch.
1. add the file to the `make` file `src/fst/morphology/Makefile.modifications-phon.am`, in the variable `GT_PHONOLOGY_SUPPLEMENTS`
1. modify the content of the file until it gives the desired output. Good knowledge of the lexicon and the language is necessary.

#### Direction of mapping

The direction of the mapping is always TO the alternate orthography. This is just a reflection of how FST's are built in the GiellaLT infrastructure, and does not imply any semantics in any way.

The build logic is as follows:

```
analysis:intermediate
  .o.
    intermediate:surface-default
      .o.
        surface-default:surface-altorth
```

(and similar for the other mapping variants)

That is, the FST's and their source code representation are always built from left to right as analysis to surface. Because of this, the mapping between the default orthography and the alternate orthography/-ies always happen in this direction, and the source code as well as the filename must match this pattern.

When the final analyser is put to use, it is of course applied in the other direction.

### Tags and lexical alternations

Sometimes there are morphological changes that can't be covered by the mapping rules only. You can specify additions to the `lexc` code that only applies to a certain orthography by using tags on the following format: `+AltOrth/xxx`, where `xxx` is the name of the alternative orthography you specified above.

If the alternative orthography was named `bergslan`, and you wanted to add a line for a distinct accusative case that later has merged with genitive, you could do that as follows:

```
+Acc+AltOrth/bergslan:m
```

It is also possible to define negative `+AltOrth` tags — tags that mark a LexC entry as valid for all orthographies except the specified one. You do that by adding a minus sign `-` in front of the orthography name, like this: `+AltOrth/-bergslan`.

Remember to define all tags in the file `src/fst/morphology/root.lexc`!

The build system automatically creates filters that removes all entries not belonging to the specified orthography. Everything unmarked is valid for all orthographies (but subject to the surface mapping discussed above).

## Usage

Use as other analysers:

```sh
echo text | hfst-lookup -q src/fst/analyser-gt-desc.ALTORTH.hfstol
```

The input is in the old orthography, the output / lemma will be in the default orthography.
