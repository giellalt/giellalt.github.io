# How To Configure And Optimise Spellers

There are a number of different spellers being supported (or on the way to be supported) in our infrastructure:

* fst-based spellers:
    * zhfst files
    * extensions for LibreOffice (oxt-files) based on LibreOffice-voikko

# Speller configuration

The basic configuration for building spellers is:

```sh
./configure --enable-spellers
```

There is one optimisation flag that is turned on by default:
`--enable-minimised-spellers`. For some languages this optimisation is
counterproductive, causing the speller to become very slow and unresponsive. If
this is the case, *disable* this optimisation as follows:

```sh
./configure --enable-spellers --disable-minimised-spellers
```

You should also play a bit with the next configuration option, and see which
combination of optimisations yeld the best performance.

# Fst optimisations

Some languages, notably Greenlandic (`kal`), compiles into a very large net.
Hfst supports something called *hyper-minimisation* in which paths are
replaced with automatically generated flag diacritics, such that otherwise
similar paths can be collapsed without changing the semantics of the language
model. This type of minimisation has a profound effect on some languages, and a
minimal effect on others. In some cases it has even increased the size of the
resulting fst. For Greenlandic the effect is stunning: from being a more or
less unusable behemoth at 160 Mb and more, the acceptor for the Greenlandic
speller (when combined with minimised spellers as described above) is reduced
to a mere 6,3 Mb. To turn on this type of fst size optimisation, configure as
follows:

```sh
./configure --enable-spellers --enable-hyperminimisation
```

Whether this option helps or not must be tested for each language, and
preferably documented. You can see how this and the previous option affects the
speller file sizes for three languages (`fin, kal, sme`)
[here](ExampleOfFileSizesWithOptimisations.md).

# Error model optimisations

The default error model has two important properties:

* alphabet size
* transition weights

Further details about the error model and its parts and build configuration can
be found on a [separate page](../../proof/TheSpellerErrorModel.md).

## Alphabet size

The alphabet size has a huge impact on the size of the final error model fst,
and with that, also the speed of creating suggestions. The smaller the alphabet
the smaller and speedier the fst. To ensure you have as small an alphabet as
possible, look carefully on the alphabet definition in the following file:

```sh
tools/spellcheckers/editdist.default.txt
```

Those characters will be used to create a simple edit distance 1 error
model (this model is concatenated with itself to enable corrections of edit
distance 2).

## Transition weights

The default error model created above is quite rough, as all transitions are
equally possible. To improve this, you can specify weights for specific
transition pairs (in the same file as above):

```
ø	ö	5
```

The default weight is 10, and the above line says that replacing *ø* with
*ö* should only have a weighxt of 5, and thus be more likely than the
default. The columns are TAB separated.

Using this system, it is possible to tune the default error model to improve
the order of the suggestions by using general single-letter rules.

To enable the error model to correct longer sequences of letter combinations,
one should edit the file
`tools/spellcheckers/strings.default.txt`. It follows a similar
but not identical structure as the previous file:

```
øø:öö	2
ää:ææ	2
```

It is also possible to add whole word replacements to the error model by editing
the file `tools/spellcheckers/words.default.txt`. Whole-word
replacements are typically given the weight "0.0", to ensure they are on the
top of the suggestion list:

```
jih:jïh	0.0
```

In the future it will be possible to use a file of collected typos and their
corrections as the basis for whole-word corrections.

# Fine tuning the suggestion order

In the previous section we looked at how we could fine-tune the suggestions
based on the error - what type of changes we had to do to arrive at a correct
word. This is good in itself, but it does not differentiate between to
suggestions with the same weighting where one is a frequent word and the other
is not, or where one word is a compound and the other is not. Neither does it
move rare word forms down on the suggestion list. To add such behavior, we need
to add weights to the fst that will end up as the acceptor.

## Morphology-based weighting

Morphology-based weighting is done by adding weights to the morphological or
morphosyntactic tags in the analyser. You do this by modifying the file
`tools/spellcheckers/weights/tags.reweight`. The file
contains TAB separated values, two columns:

1. the tag itself
1. the weight that should be given to the tag

Comments can be added as lines starting with **#**.

Below is an example of how this can be done, taken from `sme`:

```
+Cmp	+2
+Der	+1
+Der1	+1
+Der2	+1
+Der3	+1
+Der4	+1
+Der5	+1
+PxSg1	+3
+PxSg2	+3
+PxSg3	+3
+PxPl1	+3
+PxPl2	+3
+PxPl3	+3
+Use/SpellNoSugg	+10000
+Cmp/Hyph	+10000
+Cmp/SplitR	+10000
```

The weights are added to the other weights given to a word form, and should be
chosen to align with the rest of the weights being used. Corpus weights are
typically between `6` and `12` (but will vary depending on the size of the
corpus), and the default weight for editing distance operations is `10`. Very
high weights will cause a word form not to be suggested at all, or very rarely.

## Corpus-based weighting

You turn on frequency-based weighting by doing two things:

1. Create a speller corpus
1. Enable the use of the speller corpus

## Creating a speller corpus

This is very simple: just store a large amount of text in the file
`tools/spellcheckers/weights/spellercorpus.raw.txt`. The
content does not have to be sorted, split or clean in anyway - basic cleaning
and sorting is done automatically, and all incorrect words will be filtered out
automatically.

If you are using texts that are copyrighted, you can use the following Perl
one-liner to scramble the words or lines in the text, so that the original text
is not reconstructable:

```sh
perl -MList::Util=shuffle -e 'print shuffle(<>);' < myfile.txt \
> tools/spellcheckers/weights/spellercorpus.raw.txt
```

After this, the text is fine for inclusion in the corpus.

Use a lot of text, so that also the not-so-frequent word forms are covered -
that will help a lot in improving the suggestion quality.

## Enabling the use of the speller corpus

Having a text corpus (which provides us with frequency data) is not enough, you
also need to enable the use of it. This is done by editing
`tools/spellcheckers/Makefile.mod-desktop.am`, so that it contains the
following line (the line should already be there, but with the value *no*):

```make
ENABLE_CORPUS_WEIGHTS=yes
```

You can temporarily disable the use of frequency data, e.g. for evaluation and
development purposes, by changing *yes* to *no*.

## Both

It can also be quite helpful to combine the use of frequency (corpus) weights
and tag-based (morphology) weights. You need to experiment and test a bit to
arrive at the best configuration for a given language.

# Time-stamping the spellers

The spellers do all get an easter egg with build date and version info. But
this information does not get automatically updated. To ensure you have a
correct timestamp in your easter egg, do:

```sh
cd tools/spellcheckers/
make clean
make
```

The reason you should `cd` into `tools/spellcheckers/` first, is so that
you don't have to rebuild everything, just the spellers and the easter egg.

# Easter egg trigger

The trigger string is *nuvviDspeller*. Copy and paste this word into any
speller we have made or echo it into a speller on the command line, and the
suggestions should contain the version information.

# Testing spellers

The speller may be tested on data from `test/data/typos.txt`. In order to do
this, you need `Text/Brew.pm` (a Perl module, it should be installed if you
follow the default setup procedure). To test, stand in the $LANG (lang-sme,
etc) directory and write:

```sh
devtools/test_ospell-office_suggestions.sh 
open devtools/speller_result_typos.to.se.html
```
