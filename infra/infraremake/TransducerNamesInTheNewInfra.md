# Transducer names

The new infrastructure produces transducers with a different naming scheme than in the old infra. The names are longer and more descriptive.


# Regular transducers


## The information we want to encode


The strings to represent the value for each class is given first. The order
of the info classes represent the order in the filename.


### basictype
* analyser
* generator
* transformer (transducer to transform one kind of representation to another,
  e.g. date expressions from arabic numerals to text, or vice verse)
* automaton (single-level acceptor)


### application
* morphological analysis/generation (default, not specified)
* spellers (one application tag name for each):
** hfstspell (just a transducer/automaton)
** plxspell (needs fullform conversion)
** hunspell (needs fullform conversion)
* hyph - hyphenation
* oahpa - oahpa/error (more tags, broader coverage than standard)
* dict - dictionaries (more visible tags, same content as standard)
* mt - machine translation, typically for Apertium


### tagset
* gt (default)
* apert - apertium
* GTLANG - tags in the target language
* XLANG - tags in some other language, typically a majority language


### normativity
* desc - descriptive
* norm - normative
* restr - restricted to a dialect subset of *norm* (only use with dialect tag)
* single - only one word form pr analysis, used for e.g. MT generators


### dialect
* whatever set of dialects are relevant for the language


### orthography
* whatever set of orthographies are relevant for the language, e.g.
Kleinschmidt for KAL, etc.


### fsttype
* hfst (HFST fst)
* hfstol (HFST optimised lookup fst)
* xfst (Xerox fst)


## Naming scheme


Based on the above list, we get this:


```
basictype-application-tagset-normativity[-dialect][-orthography].fsttype
```


This should give transducers with names like:


* `analyser-oahpa-gt-desc.hfst`
* `generator-mt-apertium-single.hfst`
* `analyser-gt-desc.xfst`


# Transcription transducers


These are not lexical transducers, instead they convert between one
representational format and another, like between dates written as text and
dates written with digits. For this type of transducers there is a separate
basic transducertype: **transcriptor**. The application name specifies what
type of transcription is being done by the transducer, and the direction is
specified using either **digit2text** or **text2digit**.


Possible application names are:


* date
* clock
* number


Conversion to IPA is a variant of this type of transducers, and is named:


* text2ipa


Since no tags are involved in these types of transducers,
**the tagset is left out.**


The transcriptors are sometimes filtered (i.e. some forms are excluded in
one direction or the other) and that is indicated by a suffix *.filtered*.
And because of [the issues with Xerox lookup](LookupAndComposition_ADirectionPrimer.html), whether the fst is
intended for lookup or composition is also indicated by a suitable suffix.


## File name examples


* `transcriptor-date-text2digit.filtered.lookup.xfst`
* `transcriptor-clock-digit2text.filtered.lookup.xfst`
* `transcriptor-text2ipa-desc.hfst`
