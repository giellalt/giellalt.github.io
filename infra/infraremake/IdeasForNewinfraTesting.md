# Ideas for testing


Goal: **We want to test our transducers better**


# Existing tests


1. Paradgim testing against predefined answers: yaml tests
1. Tests written in the lexc and twolc code
1. Testing whether we generate the lemma or not
1. Tests using the lemma list as gold standard (do we generate the lemma)


# Ideas for new tests


* Test for Multichar Symbols on the lower side
* Test for phonotactically illegal strings


# Elaborating the test ideas


## Test for Multichar Symbols on the lower side


Now and then Multichar Symbols slip through twolc and give "words" like \\
`Suome^Vn` pro correct `Suomeen`.


How to test for this:


* Read the set of multichar symbols from root.lexc
* Make a transducer `multichar.fst` of them
* Compose `LANG.fst .o. multichar.fst` in xfst
* list the result (should be empty)


This test one should be able to set up language-independently.
In case we get 


## Test for phonotactically illegal strings




Example, from fkv (this must be adjusted to a script):


* Make a regex accepting strings in Vowel + Vowel + e:
```   regex [ ?* [a|e|i|o|u|ä|ö] [a|e|i|o|u|ä](ö] e  ) ;```
* Compose it with the main fst:
```   xfst -e "regex @\"src/analyser-gt-desc.xfst\" .o. @\"VVe.fst\" ; "```
* print the result with xfst
```   xfst[1]: print lower-words > lower-words.txt```
