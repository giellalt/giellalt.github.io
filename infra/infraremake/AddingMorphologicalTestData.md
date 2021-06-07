# Adding morphological test data

Presently we have three types of morphology testing:

* lemma generation
* yaml tests
* lexc tests

These will briefly be presented here, with instructions on how to adapt or
augment them.

# Lemma generation

Included from the `und` template there is a simple shell script to test lemma
generation for nouns. The basic idea is simple: extract all lemmas in the
lexicon (in the `src/morphology/stems/` dir), and try to generate the lemma.
It should always succeed.

In practice it is a bit more complicated, and the script may also need some
adaption to each language.

The adaption is basically that one needs to check that the tag string used for
generating the lemma form actually corresponds to what is used in the language
(and there are languages where the concept of a "lemma" doesn't make that much
sense - if that is so, remove the test script by removing it from the `TESTS`
variable in `test/src/morphology/Makefile.am`).

Complicating factors might be that some nouns do not inflect in singular (the
usual lemma form), and other forms of irregular lemma creation.

The template only gives noun lemma generation, but it is easy to use that script
as a template for doing the same for verbs, adjectives and proper nouns. At least
North, Julev and South Sámi have more elaborate test scripts for all of these
parts-of-speeches. Have a look there for inspiration.

Note that this setup does not work for languages with gender systems, dividing
nouns into different classes. 

# Yaml tests

The most widely used morphological testing are the Yaml tests. The data format
is simple and straightforward, with a simple header followed by the actual test
data:

```yml
Config:
  hfst:
    Gen: ../../../src/generator-gt-norm.hfst
    Morph: ../../../src/analyser-gt-norm.hfst
  xerox:
    Gen: ../../../src/generator-gt-norm.xfst
    Morph: ../../../src/analyser-gt-norm.xfst
    App: lookup

Tests:
  Noun - atim - ok : # -m animate noun
    atim+N+AN+Sg: atim # this is a comment
    atim+N+AN+Pl: atimwak # test
    atim+N+AN+Loc: atimohk # really rare form
```

The yaml syntax is simple, but relies on indenting: two spaces for each level of
data structure nesting.

The header is started by the keyword `Config`, and lists fst's to be used for
analysis and generation, for both Xerox and Hfst. The path is relative to the
test dir `test/src/morphology/`.

The test data is similarly started by the keyword `Tests`, followed by a line
containing the name of the test (`Nound - atim - ok` in the example above).
On the following lines there are one line for each morphosyntactic form, using
the notation `analysis string` followed by colon, followed by
`wordform string`. If there are more than one possible wordform, they are all
on the same line, separated by comma and space, and enclosed in square brackets:

```yml
ненэцьʼ+N+Sg+Loc: [ненэцяӈгана, ненэцяӈгна]
```

Remember to always indent properly!

## Negative Yaml tests

Sometimes it can be valuable to specify negative tests. Usually they should
not be needed, since any overgeneration will be reported as a FAIL. It might
still be a good idea to test for word forms that are known to have caused
problems.

To specify a negative test, add a tilde in front of the word form in the Yaml
data, as follows:

```yml
gierehtse+N+Sg+Acc: [gierehtsem, ~gieriehtsem]
```

Now the Yaml test will only pass if the last word form given is NOT generated,
and is NOT giving any analyses.

## Filenames for Yaml tests

The filenames for the yaml tests are built up with the following components:

* a descriptive part, anything *but underscore* goes
* an underscore
* an fst specificator
* an optional `.ana` or `.gen` specifier
* the suffix `.yaml`

The underscore is the separator between the "free" part and the fst specifier.
By specifying the fst as part of the filename, it is possible to write tests for
all of the produced fst's.

By specifying `.ana` or `.gen` before the `.yaml` suffix, only
*analysis* or *generation* testing will be done on the data. This is useful
for testing transducers that do not naturally come in generation/analysis pairs.

# Lexc tests

It is also possible, and often a very good idea, to add test cases directly to
the LexC source code. The syntax is very similar to the Yaml syntax (and is
parsed and tested by the same machinery that uses the yaml files), and looks
like the following:

```
!!€gt-norm: adjectives
!!€ isvelihks:    isvelihks+A+Attr
!!€ isveligs:     isvelihks+A+Attr
!!€ isvelihks:    isvelihks+A+Sg+Nom
!!€ isveligs:     isvelihks+A+Sg+Nom
```

The first line specifies which transducer to run the test data against, followed
by colon and space, and then the name of the test. There must be **no space**
between the Euro sign and the transducer specifier, and **no space** between the
transducer specifier and the following colon. The string `!!€gt-norm:` is
obligatory (you can replace `gt-norm` with another fst specifier if you want
to test against e.g. a descriptive fst, or an fst with a different tagset), but
the name of the test (*adjectives* in the case above) is optional. If not
specified, the name will be the last seen lexicon name above.

The rest of the lines specify the test data, one line per word form, in two
columns: the first column contains the surface wordform, and the second column
the corresponding analysis string.

**Positive tests** are specified with the string `!!€` at the very beginning
of the line, whereas **negative tests** are specified by the string `!!$` at
the beginning of the line. Then both are followed by a space, then the word
form, then a colon followed by whitespace, and finally the lemma+tags:

```
! Test data:
!!€gt-norm: gierehtse # Odd-syllable test
!!€ gierehtse:           gierehtse+N+Sg+Nom
!!€ gierehtsen:          gierehtse+N+Sg+Gen
!!€ gieriehtsasse:       gierehtse+N+Sg+Ill
!!€ gierehtsem:          gierehtse+N+Sg+Acc
!!$ gieriehtsem:         gierehtse+N+Sg+Acc     ! Block diphthongues in odd syll
```

Note the last line, where we explicitly check that the illegal word form
`gieriehtsem` is never generated or accepted.

Note that there **must be a space** between `!!€` or `!!$` and the following
word form in the test data, and there **must be a colon followed by whitespace**
after the word form and before the lemma+tag string. This syntax allows
multiword expressions as test data.

It is ok to have LexC style comments after the second column, as shown in the
last line.

**NB! Possible pitfal:** due to the way the parsed test data is stored internally
by the test bench, you can **not** use the same lemma more than once for the same
fst within the same lexc file. That is, check that the words you use for testing
are only used in one test each, and you should be fine.

## One-sided (half) tests in lexc

In some cases you may want to run the tests in only one direction: only analysis
or only generation tests. This is **required** when testing specialised fst's
that do not exist in pairs. Here is one example (from Inari Sámi):

```
!!€dict-gt-norm.gen:  # Even-syllable test, generation only
!!€ raattâđ:         raattâđ+V+Inf
```

The `dict-gt-norm` fst is only used for generation (the dictionary analyser
is descriptive, not normative, to allow non-normative input to dictionary lookup,
which means that the analyser and the generator will cover a different set of
word forms, thus they need different sets of data for testing)
and we need to tell the test bench that the fst and the following test data
should only be used for generation testing. This is done by adding the «suffix»
`.gen` to the fst name. If you need to run certain tests only for the analyser,
add the «suffix» `.ana` to the fst name just before the colon.
