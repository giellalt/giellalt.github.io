Bidix improvement plan
======================


Procedure for bidix improvement:

# The bidix file

The file is found as follows:

- `cd apertium/nursery/apertium-sme-smn`
- `see apertium-sme-smn.sme-smn.dix`


After 75 initial lines of definitions, the bidix contains, in this order:


1. **The initial bidix chapter A** starts at appr line 75
	- Manual additions from text + some loanwords
1. **tEQ1 chapter B** starts at appr line 670
	- words from Cip's bidix run having a  1-1 match sme-smn 
1. **1-m chapter C**  - starts at appr line 5500 
	- Word pairs with one sme and more than one smn, ordered according
   to POS and thereafter sme frequency \\
1. **Names chapter F** line 9500 appr
	- These are foreign names , just ignore them for now


**Todo**: Choose the right smn for each sme in chapter C.


# Procedures 


use xml or xsl mode in SubEthaEdit.


## Procedure for editing existing word pairs


Start on the top of section C.


There will be more that one sme reading, as follows:


```
    <e><p><l>hiljážii<s n="adv"/></l><r>kuuloold<s n="adv"/></r></p></e>
    <e><p><l>hiljážii<s n="adv"/></l><r>šiäđust<s n="adv"/></r></p></e>


    <e><p><l>divttásmuvvat<s n="vblex"/><s n="iv"/></l><r>sovđâđ<s n="vblex"/></r></p></e>
    <e><p><l>divttásmuvvat<s n="vblex"/><s n="iv"/></l><r>suáhuđ<s n="vblex"/></r></p></e>
```


The procedure for editing is:


1. Remove whole lines
1. Remove the lines that give a wrong translation
1. In cases where more than one translation is ok, remove the less general (or less common) ones
1. You are allowed to leave two translations only in the following case:
	1. You are able to state explicitly when to use one, and when to use the other, e.g.
		1. This verb is translated to X for human subjects but to Y for non-human subjects
		1. This adjective is translated to X when it modifies words for food, but to Y when it does not
		1. ..
	1. In that case, you do the following:
		1. Keep **both** lines
		1. Open the file `apertium-sme-smn.sme-smn.lrx`, and write an explanation in the beginning of that file.
		1. Note that if we are not able to formalise the difference, we should just keep one pair. Remove the one you do not want, and remove the whole line.


Correction of errors:


1. Do not correct the sme entries. If they contain errors, delete the whole line
1. If none of the smn translations are correct, you may take one of the sme-smn lines
  and replace the errouneous smn form with a correct one. Mind the > and < symbols.


When the smn translation should consist of more than one word, the blank is
marked with `<b/>`, as follows:


```
<e><p><l>ovddos<b/>guvlui<s n="adv"/></l><r>ovdâskuávlui<s n="adv"/></r></p></e>
```


In most cases, we do not want multiword translations in the bidix, but in the transfer rules.


### When you are done editing, do the following:


1. At the point in the file where you are, make a new empty line.
1. Write a note (appr `<!-- Checked until this line 1.11.15. TT -->` )
1. save the file
1. write `make`, and look for error messages saying e.g. 
apertium-sme-smn.sme-smn.dix:10444: parser error : Opening and ending tag mismatch: section line 75 and e 
You should then look for the error at line 10444 (or the previous line)




## Procedure for adding new word pairs


Give the lemma of both sme and smn. Check the analysis, e.g. ávvudoalut:


`ávvudoalut  ávvodoalut+Err/Orth+N+Pl+Nom` <= the lemma is ávvodoalut




Be aware of that some verbs are IV, other verbs are TV. At the time being we add this tag only to the sme lemma:


```
<e><p><l>birget<s n="vblex"/><s n="iv"/></l><r>piergiđ<s n="vblex"/></r></p></e>
```




## Special cases - and how to handle them 


### sme lemma is Pl, smn lemma is Sg – or the other way round


Some lemmas are lexicalised as plurals. As long as it is the same for sme and smn, it is no problem. But if the number is not the same for these two languages, then the number tags must be given to the bidix.  


E.g. `ávvodoalut+N+Pl` vs. `juhlálâšvuotâ+N+Sg`. Add plural and singular tags to the bidix:

```
<e><p><l>ávvodoalut<s n="n"/><s n="pl"/></l><r>juhlálâšvuotâ<s n="n"/><s n="sg"/></r></p></e>
```




### sme lemma is an adverb, smn lemma is not lexicalised as adverb, but a noun in locative. 


Many adverbs are really inflected nouns, usually locatives, illatives or genetives. Sometimes the lemma can be lexicalised as an adverb in one of the languages, but not in the other language. One could consider if the word should be lexicalised also in the other language. If the bidix-worker is not responsible for the FST for the language in question, she should just leave a comment about it.


E.g. `iđđes` vs. `iđedist`. Give correct tags, and a comment:


```
<e><p><l>iđđes<s n="adv"/><s n="tv"/></l><r>iiđeed<s n="n"/><s n="sg"/><s n="loc"/></r></p></e>  <!-- not same PoS -->
```


### sme lemma is not lexicalised


Sometimes the lemma can be lexicalised as a postposition in one of the languages, but not in the other language. One could consider if the word should be lexicalised also in the other language. If the bidix-worker is not responsible for the FST for the language in question, she should just leave a comment about it.


E.g. `háldui+Po` vs. `haaldun+Po`. Add a comment:


```
<e><p><l>háldui<s n="po"/></l><r>haaldun<s n="po"/></r></p></e> <!-- not in sme -->
```


### sme lemma has no counterpart in smn, in stead smn has an inflection of the noun: 


e.g. `haga+Po` vs. abessive case in smn. 




Give explanations and examples in the contrastive grammar (or another common file for such notes) and a comment about it in the bidix:


```
<e><p><l>haga<s n="po"/></l><r><s n="po"/></r></p></e> <!-- abessive, explained in the contrastive grammar -->
```




## For historical reference: This was done to create the bidix:


1. Diff the manual work done for 
  nursery/apertium-sme-smn/apertium-sme-smn.sme-smn.dix
  since r62163, and put that aside - DONE
1. build a new bidix from fresh data, as follows:
	1. take the 1-1 pair from  words/finsmn/trans-dict/all_sme2smn.csv - DONE
	1. for the 1-m (one-to-many) pairs, 
		1. take the cognates (= Levenshtein =< 3) from 
  words/finsmn/trans-dict/all_sme2smn_lsd_pseudo-sme_v4.xml - DONE
		1. take the remaining 1-m sme words, and order them after sme POS, 
    and thereafter according to sme frequency for manual inspection. 
    This last group should be kept separate - DONE



    







    
