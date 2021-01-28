# Overview


These are very preliminary notes written down before they are forgotten. More details will be added as we go.


The main purpose is to write down the essentials on how to create a decent error model. An error model is a transducer model of the errors people tend to do, and how they should be corrected. Some errors are more likely than others, and should be rated higher on the suggestion list.


## Prerequisites


You need a working installation of a fairly recent HFST3 version, preferably from svn. Further instructions can be found here.


## How to build a speller


Do the following:


```
cd $GTHOME/gt/
make GTLANG=xxx hfst
```


This will build a speller with the error model specified in the file `$GTHOME/gt/xxx/hfst/default-error-model.txt`. The default model is described below, with additional manual tweaks further down.


# Automatic basic error model


We can get a fairly decent error model by using a tool (a python script) made in the HFST project. It will take a (speller) transducer, extract the alphabet, and use all single-character symbols as the input for creating the error model. The error model itself is then a traditional Lewenstein edit-distance model, where the distance can be specified (default is 1), and one can also add swaps.


The error model produced by the makefile is using an edit distance of 2, including swaps. This automatically generated error model will produce decent suggestions in many cases, but it will need additional tweaking.


All the edits are given a default weight of 1.0. This is useful to know when tuning the error model with replacement pairs (see further down).


# Manual tuning of the error model


## Excluded symbols


There are several symbols in the alphabet that does not need to be part of the error model. A large alphabet creates a large error model, and will slow down the speller. If a certain symbol is not relevant for error correction, consider adding it to the exclusion list.


A list of all the symbols in the transducer can be had with the following command (the example is using `sme`):


```
hfst-summarise -v sme/bin/sme.single.hfstol
```


For `sme` this gives (linewrapped for readability):


```
arc symbols actually seen in transducer:
 , $, %, &, ', *, +, ,, -, ., /, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, :, <, >,
@C.NeedNoun@, @C.NeedsVowRed@, @D.NeedNoun.ON@, @P.NeedNoun.ON@, @U.Cap.Obl@,
@U.NeedsVowRed.OFF@, @U.NeedsVowRed.ON@, @_EPSILON_SYMBOL_@, A, B, C, D, E, F,
G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, `, a, b, c, d, e,
f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,  , £, §, ©, ®, ²,
³, ´, ¹, ¼, ½, ¾, Á, Ä, Å, Æ, Ç, É, Í, Ò, Ó, Ö, Ø, Ü, Þ, á, â, ã, ä, å, æ, ç,
è, é, ê, ë, í, î, ï, ð, ñ, ò, ó, ô, ö, ø, ù, ú, û, ü, ý, Č, č, Đ, đ, Ŋ, ŋ, ō, Š,
š, Ŧ, ŧ, Ž, ž, ‒, –, —, ―, €
```


The multichar symbols are automatically excluded from the error model and do not need special treatment. For the single-char symbols that are irrelevant to spelling error correction, the file `$GTHOME/gt/sme/hfst/default-error-model.txt` has a specific notation (a double ## starts a coment):


```
## Exclusions:
~$
~%
~'
~*
~+
~,
~/
```


Add more chars as needed. You can also specify explicitly which characters you want included, or specify a separate weight for some characters. See the help for further details:


```
editdist.py -h
```


## Specific replacement pairs


The same file also has a section for specifying replacement pairs, optionally with a separate weight. The replacement pair section starts with a double @ sign, and goes as follows:


```
## Transition pairs + weight:
@@
a	á	0.5
s	š	0.5
a	e	0.5
e	a	0.4
```


The format is:


```
input symbol<TAB>replacement<TAB>weight as float number
```


Unless specified otherwise, a pair is symmetric, such that the reverse transition is given the same weight as the specified pair. If that is not desired, specify both directions as above, using different weights.
