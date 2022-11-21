# Oktasaš notáhtat


## giellaoanádusat
sme : davvisámegiella, smn : anársámegiella, smj : julevsámegiella, sma : lullisámegiella, sms : koltasámegiella, nob : girjedárogiella, nno : ođđadárogiella, fin : suomagiella, eng : eŋgelasgiella




## analysáhtoriid kompileren giellatekno bealde

1. Mana dán katalogii: `cd main/langs/sme/`

- `svn up`
- `./configure --with-hfst --enable-apertium`
- `make`


2. Open a new terminal, mana du giela katalogii, omd. `cd main/langs/sma/`

- `svn up`
- `./configure --with-hfst --enable-apertium`
- `make`


Dáinna oažžu maiddái dábálaš norm- ja desc-xfst.




Dát kompileremat ádjánit guhká, erenoamážit sme.


3. Go kompileremat leat geargan, mana du giela apertiumkatalogii, omd. 

- `svn up` (álo buorre dahkat vaikko ii leat dárbu dán oktavuođas)
- `make`






## alias 

```
alias apsmn="pushd ~/apertium/nursery/apertium-sme-smn"
alias apsma="pushd ~/apertium/nursery/apertium-sme-sma"
alias apsmj="pushd ~/apertium/nursery/apertium-sme-smj" 
alias smn="pushd $GTHOME/langs/smn"
alias sma="pushd $GTHOME/langs/sma"
alias smj="pushd $GTHOME/langs/smj"
alias sme="pushd $GTHOME/langs/sme"
```




## Mii lea MT, prošeavtta birra
...

## Apertium modulat
...

## Apertium gilkorat

`less gt2apertium.cg3r`


## Gohččumat:
giellatekno-bealde: `usmedis`




### Analysa:


Dáppe lea MT-systema analysahtor-output


- `echo "lohkan" | hfst-lookup sme-smn.automorf.hfst`
- `echo "baakoem" | hfst-lookup sma-sme.automorf.hfst`


Dáppe lea analysahtor-output **ovdal** go lea váldojuvvon dušše bidix-sániid.


- `echo "lohkan" | hfst-lookup .deps/sme.automorf.hfst`
- `echo "baakoem" | hfst-lookup .deps/sma.automorf.hfst`


### Genereren:
- `echo "sátni<n><sg><acc>" | hfst-lookup sma-sme.autogen.hfst`
- `echo "baakoe<n><sg><acc>" | hfst-lookup sme-sma.autogen.hfst`


### Jorgalanteasta 1:

- `echo "sáni" | apertium -d . sme-sma`
- `echo "sánis" | apertium -d . sme-sma`


### Jorgalanteasta 2:

1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma-morph`
1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma-disam`
1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma-biltrans`
1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma-chunker`
1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma-interchunk3`
1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma-postchunk`
1. `echo "Don galggat boahtit skuvlii." | apertium -d . sme-sma`


### Jorgalanteasta 3:

- `cat texts/tarina.sme.txt | apertium -d . sme-sma | less`
- `cat texts/tarina.sme.txt | apertium -d . sme-sma-dgen | less` - for debugging






## Bidix-bargu

`see apertium-sme-sma.sme-sma.dix`


### Go lea eanet go okta sátni jorgalusas

```
<e><p><l>ruotabealde<s n="adv"/></l><r>Sveerjen<b/>raedtesne<s n="adv"/></r></p></e>
<e><p><l>davábealde<s n="adv"/></l><r>noerhtelen<s n="adv"/></r></p></e> ```


### <s n="vblex"/>: <iv> ja <tv>

`iv` ja `tv` lea dárbbašlaš dušše sme-bealde, nugo dán ovdamearkkas. doallat+V+TV ja toollâđ+V

`<e><p><l>doallat<s n="vblex"/><s n="tv"/></l><r>toollâđ<s n="vblex"/></r></p></e>`


### Eai leat seamma gilkorat, omd. G3 - Lasit sme-beallái


```
$ usme
ášši	ášši+N+G3+Sg+Nom 
```


```
    <e><p><l>ášši<s n="n"/><s n="g3"/></l><r>ássje<s n="n"/></r></p></e> 
```


### Seamma gilkorat: NomAg dáidá leat sihke sme and smX. Jus ii leat - lasit NomAg bidixii, omd.


```
$ usme
oahpaheaddji	oahpaheaddji+N+NomAg+Sg+Nom
```


```
    <e><p><l>oahpaheaddji<s n="n"/><s n="nomag"/></l><r>xxxxxxx<s n="n"/></r></p></e> 
```


## Special cases - and how to handle them 


### sme lemma is Pl, smX lemma is Sg – or the other way round

Some lemmas are lexicalised as plurals. As long as it is the same for sme and smX, it is no problem. But if the number is not the same for these two languages, then the number tags must be given to the bidix.  


E.g. `ávvodoalut+N+Pl` vs. `juhlálâšvuotâ+N+Sg`. Add plural and singular tags to the bidix:

```
<e><p><l>ávvodoalut<s n="n"/><s n="pl"/></l><r>juhlálâšvuotâ<s n="n"/><s n="sg"/></r></p></e>
```




### sme lemma is an adverb, smX lemma is not lexicalised as adverb, but a noun in locative. 
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


### sme lemma has no counterpart in smX, in stead smn has an inflection of the noun: 
e.g. `haga+Po` vs. abessive case in smn. 




Give explanations and examples at the wiki-pages, and quasicode in the transfer file and a comment about it in the bidix:


```
<e><p><l>haga<s n="po"/></l><r><s n="po"/></r></p></e> <!-- abessive -->
```






## Guokte vejolaš jorgalusa
# In cases where more than one translation is ok, remove the less general (or less common) ones
# You are allowed to leave two translations only in the following case:
## You are able to state explicitly when to use one, and when to use the other, e.g.
### This verb is translated to X for human subjects but to Y for non-human subjects
### This adjective is translated to X when it modifies words for food, but to Y when it does not
### ..
## In that case, you do the following:
### Keep **both** lines
### Open the file `apertium-sme-smn.sme-smX.lrx`, and make a rule.
### Note that if we are not able to formalise the difference, we should just keep one pair.






Omd.
```
    <e><p><l>láhčit<s n="n"/><s n="tv"/></l><r>orniđ<s n="n"/></r></p></e> 
    <e><p><l>láhčit<s n="n"/><s n="tv"/></l><r>lääččiđ<s n="n"/></r></p></e> ```


## lrx-fiillaid struktuvra 
omd. apertium-sme-smn.sme-smn.lrx


Dáppe lea lrx-fiilla ovdamearka. Default lea láhčit = orniđ (1.0 > 0.5). Jos láhčit-vearbba 
máŋŋel boahtá sem_furn, de mis lea lääččiđ (0.5 + 0.6 = 1.1 > 1.0).


```
  <rule weight="1.0">
    <match lemma="láhčit">
      <select lemma="orniđ"/>
    </match>
  </rule>

  
  <rule weight="0.5">
    <match lemma="láhčit">
      <select lemma="lääččiđ"/>
    </match>
  </rule>


  <rule weight="0.6">
    <match lemma="láhčit">
      <select lemma="lääččiđ"/>
    </match>
      <or>
        <match tags="n.sem_furn.*"/>
      </or>
  </rule>
```




## Ráhkadit missinglist, sánit mat eai leat dix-fiillas
```cat texts/*sme.txt | apertium -d . sme-smn | tr '\t' ' '| tr ' ' '\n' |\
tr -d '.,():;?!' | grep '\*' |sort | uniq -c | sort -nr |tr -d '\*' > dev/missinglist.txt```


## Transfer-njuolggadusat - kvasikoda


Mo sáhttá diehtit gosa galgá ráhkadit njuolggadusa:
* jos: sátni x > kasus y = .t1x (transf)
* jos: kasus y > sátni x = .lrx (lexsel) 
** omd. liikon dutnje -> datnem lyjhkem (ill -> acc)


Nubbi čilgehus:
* lrx vállje jorgalusa bidix-fiillas
* t?x vállje struktuvrra


### Quasicode type 1, ovdamearka lea sma:
```if 	slword 1 = liikot  (suorcelanguage)
   	slword 2 = N+Ill  (suorcelanguage)

   
then
      tlword 1 =N+Acc (Targetlanguage) 

      
Example: liikon dutnje => datnem lyjhkem.      
      ```


### Quasicode type 2, ovdamearka lea sma:
If you in the source language have a noun in illativ followed by the verb liikot, then put the noun in accusative in the target language.


Example: liikon dutnje => datnem lyjhkem.




## Testen


### Muitte álo testet ovdalgo šekket sisa:
`make`




### Regression tests
`./t/regression-tests`


### Pending tests
`./t/pending-tests`






