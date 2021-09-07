# Unicode pain points

**TLDR:** Make sure that the surface side of fst's do not contain any multichars, only sequences of individual code points, also in the case of combining diacritics. Details below.

# Combining diacritics background

Many minority and indigenous languages have orthographies that use various diacritics to mark features like length, tone, nasalisation and more. But unlike the majority languages, quite often the combination of base character and diacritic(s) is not available in Unicode as a precomposed combo, and instead one has to use the fallback mechanism of combining diacritics. While nice on paper, it leads to various issues that only arise for these languages, the most relevant for our work are:

- ambiguous tokenisation of input strings
- unreadable rendering of texts

# Tokenisation and text analysis

When working with the lexicon and phonological rules, it is natural to either implicitly or explicitly treat sequences of base characters and combining diacritics as one entity, preferably explicitly defined as a multichar symbol in `lexc`, and in the alphabet section in `twolc` files (in xfst rewrite rules such symbols tend to be more implicilty defined).

As part of the internal processing and rule writing, this is fine. But for the final analysers it can be problematic. Using `hfst-lookup`, it works fine, and the tool will parse the input string either way (as multichars or individual symbols) in accordance with the fst. But when using `hfst-tokenise`, this does not work: the tool assumes a sequence of code point characters. There has been an attempt at working around this restriction, but in the end the simplest solution is to ensure that all multichars on the surface side of an fst are expanded into individual character symbols. For consistency's sake, and to avoid issues separating lemma letters from multichar tags in `hfst-tokenise`, it should be done on both sides of the fst.

To ensure that this is done consistently for all fst's, this is best done as the last processing step of the `raw` fst. Here's an example from [`lang-lut/src/orthography/split-composed-chars.regex`](https://github.com/giellalt/lang-lut/):

```
# Regex to expand multichar symbols (in the fst sense) to a string of
# individual letters. Will make sure that various tools do not choke
# on parsing input strings.

"b̓"  -> {b̓} ,
"c̓"  -> {c̓} ,
"dᶻ" -> {dᶻ},
"gʷ" -> {gʷ},
"kʷ" -> {kʷ},
"k̓"  -> {k̓} ,
"k̓ʷ" -> {k̓ʷ},
"l̕"  -> {l̕} ,
"m̓"  -> {m̓} ,
"n̓"  -> {n̓} ,
"p̓"  -> {p̓} ,
"qʷ" -> {qʷ},
"q̓"  -> {q̓} ,
"q̓ʷ" -> {q̓ʷ},
"t̕"  -> {t̕} ,
"w̓"  -> {w̓} ,
"xʷ" -> {xʷ},
"x̌"  -> {x̌} ,
"x̌ʷ" -> {x̌ʷ},
"y̓"  -> {y̓} ,
"č̓"  -> {č̓} ,
"ƛ̕"  -> {ƛ̕} ,
"ə́"  -> {ə́} ;
```

Then in the `src/Makefile.am` file:

```make
### Split multichar letters early, to avoid repetitive code. ###
### Multichar letters must be split on both sides, and then  ###
### the alphabet pruned, for hfst-tokenise to work without   ###
### issues.                                                  ###
generator-raw-gt-desc.hfst: generator-raw-gt-desc.tmp.hfst \
	         orthography/split-composed-chars.compose.hfst
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex            \
	        @\"orthography/split-composed-chars.compose.hfst\".i \
	    .o. @\"$<\"                               \
	    .o. @\"orthography/split-composed-chars.compose.hfst\" \
	    ;\n\
	 save stack $@.tmp\n\
	 quit\n" | $(XFST_TOOL)
	 $(AM_V_HPRUNE)$(HFST_PRUNE_ALPHABET) -i $@.tmp -o $@
	 $(AM_V_at)rm -f $@.tmp

# Xfst and Foma version:
analyser-raw-gt-desc.%: analyser-raw-gt-desc.tmp.% \
	         orthography/split-composed-chars.compose.%
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex            \
	        @\"orthography/split-composed-chars.compose.$*\".i \
	    .o. @\"$<\"                               \
	    .o. @\"orthography/split-composed-chars.compose.$*\" \
	    ;\n\
	 save stack $@\n\
	 quit\n" | $(XFST_TOOL)
```

# Text rendering

TBW (Cf tidlegare tekst om kildinsamisk.)
