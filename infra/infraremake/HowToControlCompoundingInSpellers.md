# How to control compounding in spellers

Speller development requires a lot of fine-tuning to become good. This is¨
especially the case when it comes to compounding. The Giella infrastructure
offers a number of conventions that will make this work a bit easier.

In theory, most compounding languages allow so-called free compounding. In
practice, for both different linguistic and for practical reasons, the
compounding is never completely free. Thus it needs to be restricted to a
certain degree. The code here is written based on the assumption that we start
with a pretty free compounding lexc description, intended for descriptive
purposes, but that we want to add certain restrictions in strictly normative
applications such as spelling checkers.

The basic idea is this: use tags in the lexicon to describe what kind of
compounding is allowed (by default all compounding is allowed).

There are two types of restrictions: position and form. For some languages
there might be more, but that should then be handled from case to case. But
this how-to should provide general inspiration on how to go about implementing
other restrictions.

# Position restrictions

The present set of supported tags and their definition (i.e. positions) is:

* **+CmpNP/First**:  can be first part only, or used standalone
* **+CmpNP/Pref**:  can be prefix only, never alone
* **+CmpNP/Last**:  can be last part only, or used standalone
* **+CmpNP/Suff**:  can be suffix only, never alone
* **+CmpNP/None**:  can not take part in compounds
* **+CmpNP/Only**:  can be part of a compound in all positions, but not used alone

There is another logical possibility, namely being allowed in the middle and
nowhere else (+/- standalone), but in practice this is very rarely needed if at
all. If the support arise, it should not be a problem adding it in the future.

## How to encode

There are a couple of steps to take. They are:

1. add multichars to root.lexc
1. add some flag diacritics to certain lexicons
1. add tags to lexical entries needing restrictions

### Multichar symbols required

There are two types:

1. the +CmpNP/XXX tags listed above
1. flag diacritics multichars

The flag diacritics are already added to most languages and to the `und`
template, but both are repeated here for reference:

Multichar tags:

```
+CmpNP/First     !!≈ * @CODE@ - ... can only be first part in a compound or alone
+CmpNP/Pref      !!≈ * @CODE@ - ... only **first** part in a compound, NEVER alone
+CmpNP/Last      !!≈ * @CODE@ - ... can only be last part in a compound or alone
+CmpNP/Suff      !!≈ * @CODE@ - ... only **last** part in a compound, NEVER alone
+CmpNP/None      !!≈ * @CODE@ - ... can not take part in compounds
+CmpNP/Only      !!≈ * @CODE@ - ... can only be part of a compound, i.e. can never
                 !!                 be used alone, but can appear in any position
```

The flag diacritic symbols that go along with the tags above:
```
 @P.CmpFrst.FALSE@ !!≈ | @CODE@ | Require that words tagged as such only appear first
 @D.CmpPref.TRUE@  !!≈ | @CODE@ | Block such words from entering ENDLEX
 @P.CmpPref.FALSE@ !!≈ | @CODE@ | Block these words from making further compounds
 @D.CmpLast.TRUE@  !!≈ | @CODE@ | Block such words from entering R
 @D.CmpSuff.TRUE@  !!≈ | @CODE@ | Block such words from entering R
 @P.CmpSuff.TRUE@  !!≈ | @CODE@ | Mark that we have passed R
 @D.CmpNone.TRUE@  !!≈ | @CODE@ | Combines with the next tag to prohibit compounding
 @U.CmpNone.FALSE@ !!≈ | @CODE@ | Combines with the prev tag to prohibit compounding
 @P.CmpOnly.TRUE@  !!≈ | @CODE@ | Sets a flag to indicate that the word has passed R
 @D.CmpOnly.FALSE@ !!≈ | @CODE@ | Disallow words coming directly from root.
```

In both cases the code can just be copied and pasted directly in the
`root.lexc` file if it is missing.

### Multichar symbols required in lexicons

There are two types of lexicons requiring flag diacritics that go along with the
tags already mentioned: the compounding lexicon(s) (typically named `R` or
something similar in the Giella `lexc` code), and the final lexicon (typically
called `ENDLEX`). It is the combination of these flag diacritics, and the
flag diacritics that the tags above will be converted to that together enforces
the compounding restrictions.

The details of the `R` lexicon(s) vary from language to language, but to make
the restrictions work, the following set of flags must be part of the `R`
lexicon structure somewhere, such that all compounding passes through the flags:

```
@P.CmpFrst.FALSE@@D.CmpLast.TRUE@@D.CmpNone.TRUE@@U.CmpNone.FALSE@@D.CmpHyph.TRUE@@U.CmpHyph.FALSE@@P.CmpOnly.TRUE@@P.CmpPref.FALSE@@D.CmpSuff.TRUE@@P.CmpSuff.TRUE@
```

**NB!** It is important that this is all on one line, with no spaces between
each symbol!

The `ENDLEX` lexicon has a much shorter list of required flag diacritics:

```
LEXICON EndLex
  @D.CmpOnly.FALSE@@D.CmpPref.TRUE@  # ;
```

(There might be other needs and requirements on this lexicon, what is listed
here is only what is needed for the compounding restrictions.)

### Example code of lexical entries

Here is some example code from North Sámi (`sme`):

```
agibeailáibi+CmpN/First:agi#beai#láj'bi GOAHTI-I "life-long nourishment N" ;
agibeaimuitu+CmpN/First:agi#beai#muj'tu AIGI     "eternal memory N"        ;
ađa+CmpN/Last:ađđam8                    SEAMU    "marrow N"                ;
```

With this `LexC` code, the two first words above will only be allowed to be
used alone, or as the first part of compounds. The third word will only be
accepted as the last part of a compound or when being used alone. Etc.

## How it works

The tags on each lexical entry are converted to flag diacritics.
This is done by two filters in the core, and is the same for all languages.
This is only done for speller fst's.

Now that the lexical entries have flag diacritics, they will only be allowed to
make compounds in accordance with the semantics of the tags originally in the
`lexc` code.

Those tags are somewhat shorter, and much easier to read and maintain. They can
also be easily removed in descriptive and non-speller fst's without trouble.

# Form restrictions

To be written.
