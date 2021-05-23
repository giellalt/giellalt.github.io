# Lookup and composition - a direction primer

**Hfst** and **Xerox** are source code compatible - in most ways. But regarding one point, they are confusingly similar - but still different. This page tries to clear things up.


## "Up" and "down"


In the **Xerox** terminology, *up* means the upper side of the transducer, usually the analysis (lemma plus tag) side, whereas *down* means the lower side of the transducer, the input or word form side in our infrastructure.


In the lexicon files (`LexC` files) the *upper* side is to the left, and the *lower* side is to the right. The same goes for the (two-level or xfst) rules: they are written left-to-right, as in upper-to-lower (`a:b <=> c _ d ;`).


**Hfst** follows the same terminology, but adds a number of synonyms that can cause confusion. See e.g. the man page for `hfst-project` for a list of those synonyms. One such synonym is input, which is confusing becoause it means upper.


## Composition


When you compose the rules with the lexicon, the lower side of the lexicon meets the upper side of the rules. Then the rules are composed with the lexicon, and the final transducer has an upper side identical to the upper side of the original lexicon (i.e. left side of the lexical entry), and a lower side corresponding to the lower (right) side of the rules.


**Hfst** works in exactly the same way as **Xerox** in this case, and when
composing a rule fst with a lexical fst, both **Xerox** and **Hfst** should
give the same result (anything else is a bug in one or the other).


## Lookup


Doing *lookup* is the process of taking an input word and *looking it up* in the transducer, that is, to see if it is accepted (recognised), and possibly getting an analysis back. Simple and well known from our daily work.


But **which side of the fst will be used for lookup?** Which side will be matched against the input word? This is the crucial point - **it is not the same!**


### The Xerox philosophy


(Our interpretation - we have no official sources or references)


The lexicon and the rules are written in the natural direction (for westerners, that is) - left to right. Left to right is orthogonal to the upper:lower terminology, so one needs a convention to map the written upper:lower (i.e. left-right lexicon and rules) to the application (i.e. lookup) of the fst. Since the most frequent/"natural" application is the analysis, the compiled fst is automatically **inverted** when doing lookup, so that the lower side (which was the right side when we wrote the lexicon and the rules) becomes the left side when meeting the actual text.


(Note: I don't think that they actually invert it as an fst operation, just think of it this way.)


This is the natural thing to do in most cases, but it makes the direction of levels in the lexicon and rules the *opposite* of the direction of applying text during lookup:


```
wort+N+Pl+Nom:wort>er + o:ö <=> _ C* >: e r .#.; => wörter
=
wort+N+Pl+Nom:wörter = fst


echo 'wörter' | lookup fst
```


If you think of this in terms of the direction of the text at various levels, the input word for lookup (*wörter*) is at the opposite end of where we actually produced the word form in the fst (to the right of the lexicon and rules).


It does make sense if you imagine the final fst as a vertical construction with the upper side up and the lower side down, where you "look up" from the bottom (word form) to get at the analysis (on the top). In Xerox lookup, down is thus to the left and up is to the right.


### The Hfst philosophy


The **Hfst** team scrapped this analogy, and instead went for a true-to-the-writing-direction philosophy:


When you do lookup on the fst, you actually match the input text to the left side of the lexicon. That is, the lexicon and the rules will apply in the same direction as you wrote them in your source files.


If you follow the writing direction parallel, things will work out fine, whereas the vertical analogy that applies to **Xerox** is turned upside down...)


That is, by default, an **Hfst** fst is a *generator* when following our conventions for writing the lexicon and the rules. Here, up is to the left in the hfst-lookup, and down is to the right, in lookup as well as in all linear representations of up:down. You thus have to *invert* the fst first before you can `lookup` anything when you want to do *analysis* (and "look up the word").


## Practical consequences of this difference


### Lexical fst's
When building **lexical fst's** to be used for
*word form analysis or generation*, it follows from this — from the point of view of the lookup tool — that:
* for **Xerox** the default fst is the *analyser*, and we must `invert` it
  to get the *generator*.
* for **Hfst** the default fst is the *generator*, and we must `invert` it
  to get the *analyser*


In our aliases and shell scripts, we call the analyser *u–* and the generator *d–*. The metaphor behind *uXXX* and *dXXX* thus follows the **Xerox** scheme of "up" and "down".


### Stand-alone LexC files


When writing stand-alone lexc files such as the ones used for conversion between
numerical expressions and their textual counterpart (*10* -> *ten*) and the
other way around, the resulting fst behaves "inverted" when using Xerox, and as
written when using Hfst. To get both fst's to behave the same, the Xerox fst
must be inverted before one uses the `lookup` tool.


### Rule fst's for composition
When building **rule transducers to be composed** with a lexical transducer,
**both behave the same** and nothing special needs to be done for one or the
other.


### Rule fst's for stand-alone use
When building **rule transducers to be used alone,** e.g. when converting from one orthography to another, the same up-down difference in `lookup` applies, and one must *invert* either the **Xerox** or the **Hfst** transducer for them to behave in the same way.


In more detail:
All fst-scripts are of the format *a –> b in context c _ d*.
We must agree whether to turn the fst for hfst or xerox during the compilation process.


Example rule:
```
lat2syll [ t i ] –> ᑎ
```


If we want to say `echo ta | lookup lat2syll ...` and get `ᑕ`, then we want the **Hfst** model. That is, we need to invert the **Xerox** fst in these cases. This must be done in the make files and not in the `.xfscript` files (or we would corrupt the logic for **Hfst**).
