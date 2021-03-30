**Merk! Omlegginga denne sida fortel oss er gjennomført**

Formål: byggja eit alternativ til `preprocess`
og `lookup2cg`. Begge perl-skripta inneheld lingvistisk prosessering, og denne
prosesseringa må anten flyttast til andre komponentar (fst eller cg) eller
fjernast heilt.


Saker:

- Preprocess
- Lookup2cg




# Preprocess


preprocess + lookup -> hfst-proc2


Testsetning:
```
echo "Svein Holmestrand ozai doarjjaolbmo guovtti diibmui vahkkui, Kárášjoga gielda biehttalii dán veahki addimis. Holmestrand váiddii biehttaleami Finnmárkku Fylkkamánnái, ja oažžu dál logi diimmu doarjjaolbmoveahki." | hfst-proc2 --xerox -w tools/preprocess/preprocessor-gt-desc.pmhfst|l
```


Testsetning endra til ei kasusform av *Kárášjoga gielda*, slik at vi får testa
at kasusbøygde former fungerer som dei skal:
```
echo "Svein Holmestrand ozai doarjjaolbmo guovtti diibmui vahkkui, Kárášjoga gielddas biehttalii dán veahki addimis. Holmestrand váiddii biehttaleami Finnmárkku Fylkkamánnái, ja oažžu dál logi diimmu doarjjaolbmoveahki." | hfst-proc2 --xerox -w tools/preprocess/preprocessor-gt-desc.pmhfst 
```




For meir systematisk testing, bruk gullkorpuset:
```
$GTBIG/gt/sme/corp/sme-goldcorpus.txt
```


Analyser med både gamalt og nytt oppsett, jamfør utdata.


Nyaste hfst (svn 4228) gjev fleire identiske analyser:
```
vahkkui	vahkku+N+Err/Sub+Sg+Ill	0
vahkkui	vahkku+N+Sg+Ill	0
vahkkui	vahkku+N+Err/Sub+Sg+Ill	0
vahkkui	vahkku+N+Sg+Ill	0
vahkkui	vahkat+V+IV+Der/PassS+V+IV+Ind+Prt+Sg3	0
```


Vi vil bere ha éi, dvs unike analyser.


1. start med gullkorpus, sjå på forskjellar.


Bruk skriptet `perl $GTHOME/gt/script/sort-cohort.pl` for å sikra at ikkje
skilnader i rekkjefylgja i analysene i kohorten gjev utslag.


Vi har eit problem med longest match og tvetydige punktum:


```
2010.	2010+A+Ord+Attr	0
dr. Petersen
```


## Lingvistikk i preprocess


### Intransitive forkortingar


```
echo "Fitnodat lea A.S. Nu dat lea." | preprocess --abbr=abbr.txt
Fitnodat
lea
A.S.
.
Nu
dat
lea
.
```


vs.


```
echo "Fitnodat lea A.S. ja nu dat lea." | preprocess --abbr=abbr.txt
Fitnodat
lea
A.S.
ja
nu
dat
lea
.
```


vs.


```
echo "Fitnodat lea A.S. Nu dat lea." | hfst-proc2 --xerox tools/preprocess/preprocessor-gt-desc.pmhfst 
Fitnodat	fitnodat+N+Sg+Nom


lea	leat+V+IV+Ind+Prs+Sg3


A.S.	A.S+N+ABBR+Gen
A.S.	A.S+N+ABBR+Acc
A.S.	A.S+N+ABBR+Nom
A.S.	A.S+N+ABBR+Attr


Nu	nu+Adv


dat	dat+Pron+Dem+Pl+Nom
dat	dat+Pron+Dem+Sg+Nom
dat	dat+Pcle


lea	leat+V+IV+Ind+Prs+Sg3


.	.+CLB
```


Setningsgrensa forsvann i `hfst-proc2`-varianten.


### Numerale uttrykk
```
preprocess>echo "Fitnodat lea 20. ja nu dat lea." | preprocess --abbr=abbr.txt
Fitnodat
lea
20.
ja
nu
dat
lea
.
```


vs


```
preprocess>echo "Fitnodat lea 20. Nu dat lea." | preprocess --abbr=abbr.txt
Fitnodat
lea
20
.
Nu
dat
lea
.
```


Vi har med hfst-proc2:
```
20.
20.	20+A+Ord+Attr	0,000000
```


Vi vil ha:
```
20.
20.	20+A+Ord+Attr	0,000000
        .+CLB-potensiell
20	20+Num+Sg+Nom 0,000000
       .+CLB
Neste
ord
...
```


og så disambiguerer vi Attr vs Nom avh av CLB og Neste ord..


Tilsvarande kan vi faktisk gjere det med intransitive forkortingar.
(*Dat lea A.S. Šillju.*)


Jf. [http://www.korrekturavdelingen.no/K4Forkortelser.htm]
```
Mun boađán 20.02 !
Boađátgo 20. ?
Mii háliidit leat a.s!
Mii háliidit leat a.s.!
≠```


Fleire døme:
* Erenomážit boazosápmelaččaid mielas lei dát oahppu dušši, go sin mánát han galggašedje viidásat bargat boazodoaluin. Ja maid vel boazodoalus ge dárogielain, norgga historjjáin, matematihkain jna.? 
* Gámasgoikademiin, bassamiin, neaskimiin, vuoidamiin, galle gottura gápmasat ja galle gápmasa ovtta gotturis jna.?




## Bug i hfst-proc2 eller i pmatch-skriptet vårt


```
Juos gorreválggain
=>
Juos go
r
r
e
válggain
```


og:
```
rehket-bihtáid 
=>


rehket-	rehket+N+Sem/Money_Txt+SgGenCmp+RCmpnd	0
rehket-	rehket+N+Sem/Money_Txt+SgNomCmp+RCmpnd	0


bihtáid	bihttá+N+Sem/Part_Prod-cogn+Err/Sub+Pl+Acc	0
bihtáid	bihttá+N+Sem/Part_Prod-cogn+Err/Sub+Pl+Gen	0
bihtáid	bihttá+N+Sem/Part_Prod-cogn+Pl+Acc	0
bihtáid	bihttá+N+Sem/Part_Prod-cogn+Pl+Gen	0
```




# Lookup2cg


* utfordring: lookup2cg inneheld lingvistikk
* arbeid: flytta lingvistikken over i lingvistiske komponentar


Arbeid framover:
* lookup2cg - vi gjer ingenting med denne
* forskjellar mellom lookup2cg og hfst-proc2
** lemma av derivasjonar (når det kjem samansetjing etter) -> vi ser bort frå denne
** lemma av samansetjingar -> vi ser bort frå denne
** stjerne-POS -> underlesingar + cg-conv
** lokal disambiguering -> vekting + spesifiserte vektklasser
** ...


Handtering av skilnadene:
* sjå bort frå dei (dei er ikkje viktige)
* flytta til fst
* flytta til cg3
* fst+cg-conv (=underlesing)


Døme på mogleg utformat:
```
echo borrojuvvojin | usme 
borrojuvvojin	borrat+V+TV+Der/PassL+V+IV+Ind+Prt+Sg1


correct$ echo borrojuvvojin | usme | lookup2cg
"<borrojuvvojin>"
	 "borrat" V* TV* Der/PassL V IV Ind Prt Sg1
```


Ciprian vil ha: "borrojuvvot" som lemma, som ikke finnes i FST


Slik, men det er ikke mulig (?):
```
"<borrojuvvojin>"
	 "borrojuvvot" V IV Ind Prt Sg1
    	 "borrat" V* TV* Der/PassL 
```
Slik er to etasjar:
```
"<borrojuvvojin>"
	 "borrojuvvojin" V IV Ind Prt Sg1
	       "borrat" V TV Der/PassL
```


```
echo beavdelágan | usme | lookup2cg
"<beavdelágan>"
	 "beavdi" N* SgNomCmp Der/lágan v1 A Attr
```


Ciprian vil ha: "beavdelágan" som lemma, som ikke finnes i FST


evt generere en del av analysen tilbake til FST for å generere et lemma (jf est)




Tre prinsipp:


# **Vis alt**: Vis all avleiing, og prioriter dynamisk avleiing heller enn leksikaliserte former
# **Vis ingenting**: Leksikaliser all avleiing dynamisk, stå att med bøyingsmorfologi
# **Vis leksikon**: Bruk leksikaliserte former, men vis dynamisk avleiing og ikkje lag dynamisk leksikalisering






praktiske bruk:
# ordbok: 
## vi bruker leksikaliserte former i den grad det finnes som ord i XXX-smX
## vi bruker Der-taggen og dens lemma for å gi oversetting når vi ikke har ordparet i ordboka
# MT: 
## vi bruker leksikaliserte former i den grad det finnes som ord i bidix
## for dem det ikke finnes, bruker vi Der-taggene for å generere tilsvarende i målspråket
# Korp
## for å søke på lemmaer er det bra med leksikaliserte former
   som *liktenviessu*
## for å søke på bestemte typer derivasjoner eller produktivitet, trenger vi Der-taggen og rotlemma
# disambiguering
## bra å vite derivasjon for en del disambiguering
# Grammatikkontrollen


Fleire døme:
```
echo echo liktenbeavdi | usme | lookup2cg
"<liktenbeavdi>"
	 "liktenbeavdi" N Sg Nom


echo liktenviessu | usme | lookup2cg
"<liktenviessu>"
	 "likten#viessut" V* IV* Der/NomAg N Sg Nom
	 "likten#viessut" V* IV* Der/NomAg N Sg Gen
	 "likten#viessut" V* IV* Der/NomAg N Sg Acc




correct$ usme
geallan
geallan	geallat+V+TV+PrfPrc
geallan	geallat+V+TV+Actio+Nom
geallan	geallat+V+TV+Actio+Gen
geallan	geallat+V+TV+Ind+Prt+ConNeg
geallan	geallat+V+TV+Der/NomAct+N+Sg+Nom
geallan	geallat+V+TV+Der/NomAct+N+Sg+Gen


^C
usme
geallan
geallan	geallat+V+TV+PrfPrc
geallan	geallat+V+TV+Actio+Nom
geallan	geallat+V+TV+Actio+Gen
geallan	geallat+V+TV+Ind+Prt+ConNeg
geallan	geallat+V+TV+Der/NomAct+N+Sg+Nom
geallan	geallat+V+TV+Der/NomAct+N+Sg+Gen


^C
echo geallanbeavdi | usme | lookup2cg
"<geallanbeavdi>"
	 "geallan#beavdi" N Sg Nom




echo geallan | usme | lookup2cg
"<geallan>"
	 "geallat" V* TV* Der/NomAct N Sg Gen
	 "geallat" V* TV* Der/NomAct N Sg Nom
	 "geallat" V TV PrfPrc
	 "geallat" V TV Ind Prt ConNeg
	 "geallat" V TV Actio Gen
	 "geallat" V TV Actio Nom


echo divodanbeavdi | usme | lookup2cg
"<divodanbeavdi>"
	 "divodan#beavdi" N Sg Nom


echo divodanbeavdi | usme
divodanbeavdi	divodeapmi+N+SgCmp+Cmp#beavdi+N+Sg+Nom
divodanbeavdi	divvut+V+TV+Der/d+V+Der/NomAct+N+SgCmp+Cmp#beavdi+N+Sg+Nom
divodanbeavdi	divodit+V+TV+Der/NomAct+N+SgCmp+Cmp#beavdi+N+Sg+Nom
```
