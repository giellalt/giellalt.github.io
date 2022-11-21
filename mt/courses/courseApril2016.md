# MT-beaivvit cuoŋománus 

Kursa 2016

## Praktihkalaččat
bistá 5 beaivvi, mii álgit mánnodaga dii. 9




# Prográmmaevttohus:
Trond, ML ja Lene leat hupman MT-vahku sisdoalu birra. Dát lea evttohus:


# MÁNNODAGA




## 0 Bures boahtin
- Doaibmágo? `echo ja | apertium -d. sme-smX`
- Leago HFST ok? Kevina gohččumat ođasmahttit HFST:
	- `wget http://apertium.projectjj.com/osx/install-nightly.sh`
	- `sudo bash install-nightly.sh` 	  				 	 	 	    		  	   		  		
- Mii kompileregoahtit sme + smX + sme-smX
	- [kompileren ja configure](../infra/Compilation.html)
- Vahku prográmma
- Jorgalanprográmmaid stáhtus
	- [Buohtastahttin](sjangertest.html)


## 1 Evalueret sme-teavstta MT-jorgalusa
### Jorgalit guokte oanehis teavstta: čáppagirjjálašvuođa teavstta ja čoahkkingirjji:
- `python check_mt-otpt.py -f pseudo_tmx_data/cahceravgga_sme2smn.tmx` 
- `open otpt_dir/cahceravgga_sme2smn.html` 
- `python check_mt-otpt.py -f pseudo_tmx_data/SP-18-2012_sme2smn.tmx` 
- `open otpt_dir/SP-18-2012_sme2smn.html` 




- geahččat násttiid ja hash
- árvvoštallat gielalaš meattáhusaid
- árvvoštallat syntávssa
- buohtastahttit dan golbma giellapára jorgalusaid kvaliteahta (WER)
	- Evalueren: [http://xixona.dlsi.ua.es/~fran/eval/]


## 2 Buoridit jorgalanfeaillaid


### Mo gávdnat jorgalanfeailla siva
Bargat ieš, oažžut bagadeami


## Bargat násttiid ja hash 
### Missing (násti)
Ovdalgo sáhttá árvvoštallat cealkaga syntávssa dahje váilevaš genererema, de eai galgga leat missing-sánit cealkagis 
- Lasit missing sániid bidixii, ja sánit fertejit leat leksikaliserejuvvon sihke sme- ja smX-FST:s
- [bidix-bargu](../infra/BidixWork.html)


###  Geahččat dan maid analysáhtor ii máhte genereret (hash):

`echo 'cealkka' | apertium -d. sme-smn-dgen` , omd.

`#Pariisa<np><top><sg><loc>`

- buohtastahte analysáhtoriin (`usmX` ja `dsmXNorm`)

``` 
usmn 
Pariisa 
Pariisa	Pariisa+N+Prop+Sem/Plc+Sg+Nom 


dsmnNorm 
Pariisa+N+Prop+Sem/Plc+Sg+Loc 
Pariisa+N+Prop+Sem/Plc+Sg+Loc	Pariisa+N+Prop+Sem/Plc+Sg+Loc	+?
```


Ferte lasihit/divvut FST (omd. addit +Sg+Loc leksikonii masa Pariisa manná)


**Nubbi ovdamearka**:

- `#lávluđ<vblex><der_nomag><n><pl><nom>`
-  buohtastahte analysáhtoriin (`usmX` ja `dsmXNorm`)

``` 
usmn 
lávluđ 
lávluđ	lávluđ+V+Inf


dsmnNorm  
lávluđ+V+Der/NomAg+N+Sg+Nom 
lávluđ+V+Der/NomAg+N+Sg+Nom	lávluđ+V+Der/NomAg+N+Sg+Nom	+?
```

Ferte lasihit/divvut FST (addit +Der/NomAg  leksikonii masa lávluđ manná)




## Leago sme-input riekta?


### Geahččat input:
- `echo 'cealkka' | apertium -d. sme-smn-biltrans`
	- bidix ráddje biltrans-analysa. Jus omd. dihto sátni lea bidixis dušše adjektiivan, 
dalle dat ii sáhte oažžut Adv-analysa, vaikko dat livččii rivttes analysa cealkagis.
	- `usme` čájeha sáni vejolaš analysaid olggobealde bidix
	- jus sátni oažžu boasttu kásusa, omd. genitiivva dan sajis go akkusatiivva, de feaila lea sme syntávssalaš analysas
	- dieđit sme-feailla Lenii, Trondii dahje Duommái 


### Geahččat sme syntávssalaš analysa apertiumas:

`echo 'cealkka' | apertium -d. sme-smn-disam`


### Geahččat sme syntávssalaš analysa olggobeal apertiuma:

Jus buot sánit eai leat mielde bidixis, de lea buoret geavahit dán gohččuma:

`echo 'cealkka' | smedis`



## Manne transfer-njuolggadus ii doaimma?


### Geahččat chunkema:

`echo 'cealkka' | apertium -d. sme-smn-chunker`




# DISTTAGA



## 3 Giellatekno ja Apertiuma taggaformáhtat

- Makkár formáhtat
- Man dihte erohusat
- dáinna gohččumiin oainnát tággaid: 

`echo 'cealkka' | apertium -d. sme-smn-biltrans` 


Dahje don sáhtát iskat eaŋkilsániid:

- `echo "lohkan" | hfst-lookup .deps/sme.automorf.hfst`
- `echo "luuhâm" | hfst-lookup .deps/smn.automorf.hfst`




## 4 Testenbargu: python skriptat
Mis leat dákkár teaksta-máhpat:

1. **texts**  : fiillat dábálaš txt-formáhtas. _sme.txt ja _smX.txt
1. __tmx_data__ : sihke sme ja smX seammá fiillas, okta cealkka háválassii. 
tmx-formáhtain lea vejolaš genereret html-fiilla.
1. **fi.samediggi** : sihke sme ja smn seammá fiillas, okta cealkka háválassii. 
tmx-formáhtain lea vejolaš genereret html-fiilla.
1. __pseudo_tmx_data__ : dušše sme, okta cealkka háválassii. 
tmx-formáhtain lea vejolaš genereret html-fiilla.
1. __otpt_dir/__ : output-directory mas leat fiillat mat leat genererejuvvon python-skriptain.  




- python-skripta ovttagielat teavsttaide: `check_mt-otpt.py`
- python-skripta guovttegielat teavsttiade, ja mas lea WER: `wercheck_mt-otpt.py`


## Jorgalit teavstta mii lea juo jorgaluvvon, ja buohtastahttit jorgalusaid:
Jorgalit dihto fiilla, ja rahpat bohtosa:

1. `python wercheck_mt-otpt.py -f tmx_data/100writers_sme2smn.tmx` 
1. `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


Jorgalit olles máhpa, ja rahpat bohtosa:

1. `python wercheck_mt-otpt.py -d tmx_data/` 
1. `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


## Jorgalit teavstta mii ii leat jorgaluvvon ovdal:
Jorgalit dihto fiilla, ja rahpat bohtosa:

1. `python check_mt-otpt.py -f mappe/file` 
1. `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


Jorgalit olles máhpa, ja rahpat bohtosa:

1. `python check_mt-otpt.py -d tmx_data/` 
1. `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.




## 5 Buoridit jorgalanfeaillaid

- Bargat ieš, oažžut bagadeami
- Lasit cealkkapáraid testensiidduide, ja karakterisere daid lingvisttalaččat
	- [sme-smn](http://wiki.apertium.org/wiki/North_Saami_and_Inari_Saami/Pending_tests)
	- [sme-sma](http://wiki.apertium.org/wiki/North_Saami_and_South_Saami/Pending_tests)
	- [sme-smj](http://wiki.apertium.org/wiki/North_Saami_and_Lule_Saami/Pending_tests)






## Lexical selection

Jus lea eanet go okta vejolaš jorgalus, de sáhttá ráhkadit njuolggadusaid -lrx-fiillas. 
omd. sämikielâlâš + human vs sämikiel 


Lasit bidixii

- sámegielat = sämikielâlâš
- sámegielat = sämikiel


Geavat dán gohččuma vai oainnát taggaid

- `echo 'Doppe lea ollu sámegielat olbmot.' | apertium -d. sme-smn-biltrans` 

```
^Doppe<adv><sem_plc><@ADVL→>/Tobbeen<adv><sem_plc><@ADVL→>$ 
^leat<vblex><iv><indic><pres><p3><pl><@+FMAINV>/leđe<vblex><indic><pres><p3><pl><@+FMAINV>$ 
^ollu<adv><@←ADVL>/ennuv<adv><@←ADVL>$ 
^sámegielat<adj><sem_hum><attr><@→N>/sämikiel<adj><sem_hum><attr><@→N>/sämikielâlâš<adj><sem_hum><attr><@→N>$ 
^olmmoš<n><sem_hum><pl><nom><←ext→><@←SUBJ>/olmooš<n><sem_hum><pl><nom><←ext→><@←SUBJ>$
^.<sent>/.<sent>$^.<sent>/.<sent>$ 
```


Lasit -lrx-fiilii:


```
  <rule weight="1.0">
    <match lemma="sámegielat">
      <select lemma="sämikiel"/>
    </match>
  </rule>


  <rule weight="0.5">
    <match lemma="sámegielat">
      <select lemma="sämikielâlâš"/>
    </match> 
  </rule>


  <rule weight="0.6">
   <match lemma="sámegielat" tags="adj.sem_hum.attr.*">  (sámegielat<adj><sem_hum><attr><@→N>)
      <select lemma="sämikielâlâš"/>
   </match>
<or>
   <match tags="n.sem_hum.*"/>     (omd. olmmoš<n><sem_hum><pl><nom>)
   <match tags="n.*.sem_hum.*"/>   (omd. oahpaheaddji<n><nomag><sem_hum><pl><nom>)
 </or>  
  </rule>
```


Nubbi ovdamearka dás: [Lexical selection](../infra/LexicalSelection.html)




# GASKAVAHKU




## 6 Hash-listtuiguin bargat

Hash-listu ráhkaduvvo teavsttaid jorgaleami vuođul, ja buot dábáleamos čuolmmat bohtet listtu bajimussii.
Nu ahte **čuolmmat sorterejuvvojit frekveanssa mielde**.


Jus don háliidat ráhkadit ođđa hash-listtu ieš, dahje don háliidat ohcat ovdamearkkaid, de fertet
genereret ođđa jorgalusaid: [genereret jorgalusaid](../infra/Paralleltexts.html)


Loga eanet hash-listtuid birra dás: [hash-listtut](../infra/HashList.html)




dev/hash-fi-report.fi


```
  27 #sosiaal<adj><cmp_sgnom><cmp_splitr>  sosiála-  sosiaal-	sosiaal+A+Cmp/Attr+Cmp/SplitR
  21 #sosiaal<adj><cmp_sgnom><cmp>syergi
  14 #jieškote<prn><ind><sg><gen>
  14 #Sosiaal<adj><cmp_sgnom><cmp_splitr>
  12 #vääri<n><cmp_sgnom><cmp>#ovdâsteijee<n><nomag><sg><loc><south>
   9 #Sosiaal<adj><cmp_sgnom><cmp>syergi
   7 #riehtiministeriö<n><sg><gen>  riehtiministeriö	riehti+N+Cmp/SgNom+Cmp#ministeriö+N+Sg+Acc
   6 #Ume<np><top><sg><loc>  Ume+N+Prop+Sem/Org+Sg+Loc
```


Ulbmil: Ipmirdit ja divvut feaillaid.


Gohččumat:


```
cat dev/hash-report.freq |egrep -v '(cmp|<np-d"#" -f2|cut -d"<" -f1|hfst-lookup smj-sme.automorf.hfst |see
cat dev/hash-report.freq |egrep -v '(cmp|<np>|<top>|der_)'|see
```


# DUORASTAGA


## 7 Bidix-sanity

Bidix-sanity listu ráhkaduvvo bidix-listtu vuođul. **Čuolmmat sorterejuvvojit alfabehtalaččat**.


`sh bidix-sanity.sh > sanityoutput` 


Lea vejolaš heivehit sanityoutput nu ahte oaččut listtu mas eai leat namat, 
ja mas smX-sánit leat sorterejuvvon sáni loahpa mielde. 
Dalle lea álkit árvvoštallat sániid (seammá sánit bohtet maŋŋálaga) ja maiddái kopieret sániid FST:i.


Go leat `dev`-máhpas:


`sh sortedsanityoutput_withoutprop.txt`


Loga eanet [bidix-sanity birra](../infra/bidixsanity.html).


# BEARJADAGA


## 8 Testen
### Regression tests

`./t/regression-tests`


### Pending tests

`./t/pending-tests`


[Loga eanet](../infra/Testing.html)


## 9 Derivašuvnnat

- Taggaid harmoniseren (seammá tagga buot gielain)


### Harmoniserte tagger som forteller funksjon:

- Der/A, Der/Adv, Der/Dimin, Der/NomAct, Der/NomAg, Der/AAdv
- Der/PassL, Der/PassS, Der/Pass
- Der/InchL, Der/Caus (Der/ahtte smj)


Forslag om nye tagger som forteller funksjon:

- pass: Der/halla Der/PassD => Der/PassH Der/PassD Der/PassT 


### Andre harmoniserte tagger:

- Der/st, Der/l, Der/d , Der/lasj, Der/sasj, Der/vuota
- kaus: Der/h Der/ht Der/d Der/tt


Forslag om nye harmoniserte tagger:

- Der/alla -  Der/alle (sma) => Der/alla
- Der/lágan  Der/laakan  Der/lagan => Der/laakan
- Der/lágaš => Der/laagasj
- Der/las +Der/lis (vearba => adj) => Der/las Der/lis
- Der/t smj: Der/k =>  Der/k
- Der/upmi -- Der/NomActPass , eller er det nok at vi har Der/PassL i strengen før Der/NomAct: \\
`fuomášit+V+TV+Der/PassL+V+IV+Der/upmi+N+Sg+Nom`: fuomášupmi  \\
=> `fuomášit+V+TV+Der/PassL+V+IV+Der/NomAct+N+Sg+Nom` \\
`fuomášit+V+TV+Der/NomAct+N+Sg+Nom` : fuomášeapmi




Resten av sme-taggene - ikke diskutert, og mange av dem er ikke så viktige for MT

- Der/meahttun 
- Der/heapmi +Der/ahtes
- Der/jagaš Der/jagáš => Der/jagasj
- Der/keahtta <=== marginal ikke-normativ derivasjon for substantiver, samme form som VAbess 
- Der/adda 
- Der/amoš 
- Der/asti 
- Der/at 
- Der/dáfot 
- Der/eamoš 
- Der/easti 
- Der/geahtes 
- Der/has 
- Der/heapmi 
- Der/huhtti 
- Der/huvva 
- Der/muš 
- Der/nuolus 
- Der/náittot 
- Der/seagat 
- Der/stuvva 
- Der/stávval
- Der/supmi 
- Der/suttat 
- Der/veara 
- Der/viđi 
- Der/viđá 
- Der/ár




## 10 Missinglisttuiguin bargat

[missinglisttut](/mt/infra/MissingList.html)




## 11 Gávdnat meattáhusaid sme-inputas

* váilevašvuođat FST:s
* boasttudisambigueren


## 12 Syntávssalaš áššit

* čoaggit ovdamearkkaid
* gos čoavdit daid, ja mo


## 13 Transfer-njuolggadusat

Bargat syntávssalaš áššiiguin






# Bargu ovdal geassemánu MT-vahku.




## FST


### Buohkaide


Derivašuvnnat MT perspektiivvas


### smn


Adjektiivvat, Px, 




## MT


### Buohkaide


- bidix-sanity
- missing-lists politihkalaš domenas
- hash


### smj


bidix


### smn


## Teknihkalaš áššit


- Korpus: Paralleallateavsttat
- Scriptat: bleu/wer
- Ođđa jorgaluvvon korpus juohke idja
- Buoridit kompilerenrutiinnaid (FST)


# Boahtteáiggi fáttát

- Metodologiija: Naba jos háliida jorgalit girjji
- prográmmat dasa




