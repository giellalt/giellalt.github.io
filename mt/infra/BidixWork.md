

Bidix-bargu
===========

Fiila lea guovttegielat sátnelisttu man namma lea .dix

Raba dix-fiilla, omd. sme-sma: 

`see apertium-sme-sma.sme-sma.dix`


Iskka leago fiila ortnegis ovdalgo šekket sisa, jus Apertium lea sajáiduhtton mášiidnii: 

`make`


## Njealje bargovuogi

Golbma bargovuogi daidda geat máhttet smX-giela bures, ja njealját vuohki mii heive earáide

1. **Systemáhtalaččat** bargat: Mii divvut ja buoridit sátnepáraid dan ortnega mielde go leat dix-fiillas.

- Mii fertet gulaskuddat earáiguin nu ahte mii juohkit barggu, eatgo loga seammá sátnepáraid.
- Mii bidjat kommentára daidda osiide maid leat divvon (omd 

``` 
<!-- NN has corrected from here --> <!-- NN has corrected to here --> 
```


Láset: dán bargui dárbbašit dušše ovtta subetha-edit-láse, mas mii divvut dix-fiilla. Sáhttá leat buorre iskat analyseret sániid terminálaláses dahje interneahtas. 

2. **Missing-list** ektui: Mii lasihit davvisámi sániid mat leat missinglisttus, ja lasihit smX-jorgalusa. Lasihit sátnepáraid dix-fiilla vuosttaš oassái. Missing-listtut leat dev-máhpas.  \\ Loga eanet [missinglisttu birra](/mt/infra/MissingList.html)

3. **Teavsttaid** ektui: Mii jorgalit teavsttaid MT-vuogádagain, ja lasihit sátnepáraid sme-sániide mat ožžot nástti.
- jorgal teavstta iežat mášiinnas: `cat text/xxxxxxx.sme.txt | apertium -d . sme-smn ` 
- dahje jorgal teavstta [interneahtas](https://gtweb.uit.no/mt/testing/) . Interneahtta-veršuvdna ođasmahttojuvvo dušše oktii jándoris, ja dat mearkkaša ahte it oainne seammás sániid maid leat lasihan.
- Sánit mat ožžot #: Mii iskat analyseret smX-sáni (omd. `usmn`, dahje neahttasiiddus, omd. [anársámegiela](http://giellatekno.uit.no/cgi/d-smn.sme.html)), vejolaččat dix-fiillas ii leat rivttes sátneluohkká. Lasihit sátnepáraid dix-fiilla vuosttaš oassái.

Láset: dán bargui dárbbašit ovtta subetha-edit-láse, mas mii divvut dix-fiilla, ja dasa lassin terminála-láses dahje neahttalohkkis 3 tab: jorgaleami várás, ja sme-analysáhtor ja smn-analysáhtor.


4. **Teavsttaid buohtastahttit** : buohtastahttit sme-teavstta jorgaluvvon teavsttain
Mii bargat seammá láhkai go čilgejuvvon bajábealde (3. Teavsttaid ektui), muhto mii ohcat smX-sániid teavsttas mii lea juo jorgaluvvon.
Dán bargovuohkái mii dárbbašit bálddalasteavsttaid, dahje teavsttaid mat leat jorgaluvvon seammá dáru- dahje suoma vuođđoteavsttas. Dát bargovuohki gáibida ahte leat máŋga láse rabas oktanaga (stuora šearpma), dahje olmmoš sáhttá čálihit sme- ja smX-teavsttaid báhpárii.


**Korpus**: Muhtumin sáhttá leat ávkin geahččat mo sánit geavahuvvojit [korpusis](http://gtweb.uit.no/korp/)




## Go jorgalusas lea eanet go okta sátni

Muhtumin lea eanet go okta sátni jorgalusas, nugo Sveerjen raedtesne. Dalle sáhttit geavahit `<b/>` sániid gaskkas :


```
<e><p><l>ruotabealde<s n="adv"/></l><r>Sveerjen<b/>raedtesne<s n="adv"/></r></p></e>
<e><p><l>davábealde<s n="adv"/></l><r>noerhtelen<s n="adv"/></r></p></e> 

```

Vearbbat:

```
<s n="vblex"/>: <iv> ja <tv>
```

Vearbbat: `iv` ja `tv` lea dárbbašlaččat dušše sme-bealde, nugo dán ovdamearkkain:

*doallat+V+TV* ja *toollâđ+V*

```
<e><p><l>doallat<s n="vblex"/><s n="tv"/></l><r>toollâđ<s n="vblex"/></r></p></e>
```


## Jos eai leat seamma gilkorat, 

omd. sme-sánis lea G3 

Go eai leat seamma gilkorat, omd. G3, de galgat daid lasihit sme-beallái

```
$ usme
ášši	ášši+N+G3+Sg+Nom 
```


```
    <e><p><l>ášši<s n="n"/><s n="g3"/></l><r>ássje<s n="n"/></r></p></e> 
```


## Jos leat seamma gilkorat: 

NomAg dáidá leat sihke sme and smX. Jus ii leat - lasihit NomAg dix-fiilii, omd.


```
$ usme
oahpaheaddji	oahpaheaddji+N+NomAg+Sg+Nom
```


```
<e><p><l>oahpaheaddji<s n="n"/><s n="nomag"/></l><r>xxxxxxx<s n="n"/></r></p></e> 
```


## Special cases - and how to handle them 


### sme lemma is Pl, smX lemma is Sg 

Muhtumin sme lemma is Pl and smX lemma is Sg – or the other way round. \\
Some lemmas are lexicalised as plurals. As long as it is the same for sme and smX, it is no problem. But if the number is not the same for these two languages, then the number tags must be given to the dix-file.  


E.g. `ávvodoalut+N+Pl` vs. `juhlálâšvuotâ+N+Sg`. Add plural and singular tags to the dix-file:

```
<e><p><l>ávvodoalut<s n="n"/><s n="pl"/></l><r>juhlálâšvuotâ<s n="n"/><s n="sg"/></r></p></e>
```




### sme lemma is an adverb, smX is not

sme lemma is an adverb, smX lemma is not lexicalised as adverb, but a noun in locative. 

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


### sme lemma has no counterpart in smX

sme lemma has no counterpart in smX, instead smn has an inflection of the noun: e.g. `haga+Po` vs. abessive case in smn. 

Give explanations and examples at the wiki-pages, and quasicode in the transfer file and a comment about it in the dix-file:


```
<e><p><l>haga<s n="po"/></l><r></r></p></e> <!-- smn: it should be abessive -->
```


### Adjektiiva vástida dihto vearbahápmái

Ovdamearkan lea go davvisámegiel sátni lea geatnegahttojuvvon ja julevsámegielas lea adjektiiva bákkulasj:

```
<e><p><l>geatnegahttit<s n="vblex"/><s n="tv"/><s n="der_passl"/><s n="vblex"/><s n="iv"/><s n="prfprc"/></l><r>bákkulasj<s n="adj"/><s n="sg"/><s n="nom"/></r></p></e>
```

### Leksikaliserejuvvon adjektiiva dušše sme:as

Leksikaliserejuvvon adjektiiva sme:as muhto ii nubbi gielas.

Guokte sme-adjektiivva (guoskevaš, gulavaš) + guokte <prsprc> anárašgielas. Nubbi lea leksikaliserejuvvon (lohtâseijee), muhto nubbi ii. Okta vejolašvuohta lea leksikaliseret dan, nubbi lea lasihit bidixas vearban, na (fuom: bidix-lemma ii leat *kyeskee*, muhto infinitiiva *kuoskâđ* + taggat).


```
<e><p><l>guoskevaš<s n="adj"/><s n="sem_dummytag"/><s n="attr"/></l><r>kuoskâđ<s n="vblex"/><s n="prsprc"/></r></p></e>
<e><p><l>gulavaš<s n="adj"/></l><r>lohtâseijee<s n="adj"/></r></p></e>
```


### Guokte vejolaš jorgalusa

- In cases where more than one translation is ok, remove the less general (or less common) ones
- You are allowed to leave two translations only in the following case:
	- You are able to state explicitly when to use one, and when to use the other, e.g.
		- This verb is translated to X for human subjects but to Y for non-human subjects
		- This adjective is translated to X when it modifies words for food, but to Y when it does not
		- ..
	- In that case, you do the following:
		- Keep **both** lines
		- Open the file `apertium-sme-smn.sme-smX.lrx`, and *make a rule* 
    (see documentation on [lexical selection](LexicalSelection.html))
		- Note that if we are not able to formalise the difference, we should just keep one pair.


Omd.

```
<e><p><l>láhčit<s n="n"/><s n="tv"/></l><r>orniđ<s n="n"/></r></p></e> 
<e><p><l>láhčit<s n="n"/><s n="tv"/></l><r>lääččiđ<s n="n"/></r></p></e> 
```


