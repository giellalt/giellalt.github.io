

Liste over ting vi har retta opp i transfer filene


Fenomena er lauseleg gruppert etter type (med store bokstavar på nivå 3)


Dette er det vi har fiksa, det blir kopiert over hit frå dokumentet [Transfer Problems](TransferProblems.html) etter kvart, vi har dei i to dokument for å få litt betre oversyn






Forsøk på disposisjon


* Morfologi
** asdf
* Syntaks
** Bestemtheit
** Ordstilling




#  NORSK MORFOLOGI
##  Ang. bøyning i nob


### mat - mater


```
Čohkken 14 eami­álbmoga biepmuid ovtta girjái
Samlet 14 urfolk mater til ei bok
= retta til: Samling 14 urfolk matrettene til ei bok
```


(Det er no bestemtheit som er problem)


Bokmålsordboka bøyer *mat* i fleirtal, og det finst
(heilt marginale) døme på nett. Sjølv vil eg gjerne ha det
berre i eintal i nob-morfologi, men problemet vi har må 
løysast i transfer: Paradigme for *mat* utan +Pl
gjev oss #, og paradigme med sg = pl for *mat* vil
gje oss former med adjektiv i fleirtal
(*14 gode mat til en bok*). Ei løysing er:
* biebmu = mat
* biebmu = matrett


og så ha matrett dersom biebmu i pl. Eg ser på det.


```
<e><p><l>biebmu<s n="n"/></l><r>føde<s n="n"/><s n="m"/></r></p><par n="unc__n"/></e>
<e><p><l>biebmu<s n="n"/><s n="sem_event_food"/></l><r>mat<s n="n"/><s n="m"/></r></p><par n="sg__n"/></e>
```


Samlet 14 urfolks matretter til ei bok.




### Verb imperativ


```
echo Raba uvssa! | apertium -d. sme-nob 
Åpn døra! => Åpne
```


Skifta -pne-verb frå di/e til adl/e, // LØYST




### Bøying: publikumer => publikum  /// LØYST ///
```
Dán jagi lea gehččiin vejolašvuohta TV ja neahta bokte čuovvut giđđajohtima
Dette året har publikumene en mulighet via TV og nettet følge vårflyttinga
Ny MT: Dette året er det på publikum en mulighet via TV-EN og nettet følge vårflyttinga
```


Når geahčči er i fleirtal vil vi ha eintal (publikum) på norsk.


Lene: er det riktig med publikumer i flertall på norsk, eller er det bare publikum? \\
eks. Det er mange slags publikum (publikumer?) \\
Skal dette løses i norsk morfologi (dvs aldri publikumer) eller i transfer (pl => sg)?




### mange navn til feil paradigme slik at vi får genitiv s lagt til -s, /// LØYST ///


f.eks. 


Iver Jåkss hus er i ferd med å ødelegges


Andre ord med feil genitiv:


Kjendiss hus i dårlige situasjonen




### reiner => rein   /// LØYST ///


```
mo Fálá bohccot láhttejit
hvordan #Kvaløya rein oppfører seg
```


Her må vi lage nytt paradigme for *rein* (det er kanskje gjort), der vi bøyer *rein* som *ting* (flere rein, ting)


### million flertall => millioner
```
46,3 miljovnna lassi juolludeapmi
46,3 million tilleggs en bevilgning
```


Også her vil vi ha nytt paradigme for *million*






### barnene  /// LØYST ///


vi vil ha barna, og det har vi fått.




### cmp: nytt problem oppstått : /// LØYST ///
```
apertium-sme-nob$ echo muohtačorgenšiehtadusa | apertium -d. sme-nob
en snø ryddingsavtale


=> en snøryddingsavtale
```






### Kvaløya krever <f> /// LØST
ved å legge til "f" i bidix
```
Ei vårflytting i 2016 Bávttajohka til #Kvaløya<np><top>.
Vårflytting i 2016 Bávttajohka til Kvaløya.


echo Kvaløya | apertium -d. unob-sme-morph
^Kvaløya/Kvaløya<np><top><f>
```






###  Feil adjektivbøying av rømme


```
apertium-sme-nob$ echo Gárgidan luosa lea váikkuheapmi lussii. | \
apertium -d. sme-nob-postchunk
^Den<det><dem><m><sg>$ ^rømme<adj><pp><sg><def>$ ^laks<n><m><sg><def>$ 
^være<vblex><pres>$ ^påvirkning<n><m><sg><ind>$ ^på<pr>$ 
^laks<n><m><sg><def>$^..<sent><clb>$
apertium-sme-nob$ echo Gárgidan luosa lea váikkuheapmi lussii. | 
apertium -d. sme-nob
Den rømmede laksen er påvirkning på laksen.
```


- verb: rømmet, rømmede => rømt, rømte /// LØYST ///
- Men problemet er adjektiv, ikkje verb /// LØYST ///
	- rømme overført frå dim/me til tøm/me








## Genitiv, possessor, osb.


###  Genitivs-s + ubestemt form


- Redaktørens bøkene* er alltid feil  /// LØYST 


**Generaliseringa er:** 

Possessor med -s + bar N


```
echo Doaimmaheddjiid bargu lea garas|apertium -d. sme-nob
Journalistenes arbeid er hardt
```


### Genitivs-s i possessor-NP skal vere bestemt


**Generaliseringa er:** 


N-gen N = bestemt possessor + ubestemt noun


/// LØYST (sjå ovafor)


# PRONOMEN


## Typar pronomen
### refleksivt pronomen /// LØST

```
Dál ferte duođas váldit sámemánáid- ja nuoraid go sii dárbbašit lohkamušaid iežaset gillii.
Nå må ta sant samebarn- og ungdommer når de behøver lesestoff på sitt språk.
=> sitt evt. eget
```




#  SUBSTANTIV
## Bestemtheit


### Ubestemt artikkel i presenteringssetningar


```
Lea illusáhka ahte suohkanstivra mearridii álggahit giellaguovddáža
Det er gladsak at kommunestyret bestemte å starte språksentret, 
Det er ei gladsak at kommunestyret bestemte å starte språksentret, 
```


**Generaliseringa er:** \\
Samisk *Lea N ahte S* skal vere *Det er en/ei/et N at S*


**Løsninga er:** \\
Dette avhenger av substantivet. Ved å legge til maydetind til substantivet i bidix, får vi: 


Det er en gladsak at kommunestyret bestemte å starte språksentret. /// LØYST ///






Trond: Poenget mitt var at *Lea N ahte S* gjeld **alle** N, ikkje berre
ei undergruppe av substantiva. Eg vil tru at *maydetind* er
settet av substantiv som kan ha det ind der andre substantiv ikkje
kan ha det. Generealiseringa av dette drøftar vi i 
[bestemtheitsdokumentet](Bestemtheit.html).






### Ubestemt form etter ii veaháge


```
Jagis 2001 sárdnidii Norgga prinseassa Märtha Louise sámegillii, vaikko sus ii leat ii veaháge sámegielduogáš.
2001   prekte Norges prinsesse Märtha Louise på samisk, selv om hun hun har ikke ikke #noe samiskbakgrunnen.
I 2001 prekte Norges prinsesse Märtha Louise på samisk, selv om hun ikke har noen samiskbakgrunnen.
```


**Generaliseringa er:** 

Norsk skal ha ubestemt form etter negasjon av typen *ikke noe*  (litt som partitiv i finsk)


Lene:
- For denne setninga: Med enkel nekting får vi ubestemt for vi da får ext-tagg. Jeg forbedrer dette i functions.
- legger til veaháš som pron til adj i bidix, og da får vi ubestemt form, fordi ordet blir med i chunken:
	- 2001 prekte Norges prinsesse Märtha Louise på samisk, selv om hun hun har ikke ikke #noe samiskbakgrunn.
/// LØYST ///






## Genitiv, possessor, osb.


###  gen forsvinner i t4x for "åring"
=> 5-åringers tannhelse

```
echo 5-jahkásaččaid bátnedearvvašvuohta ii leat gal mánáid duohken, | apertium -d. sme-nob
a. 5-åringer tannhelsen er ikke virkelig avhengig av barna,
b. 5#år tannhelsen er ikke  avhengig av barna,


sme-nobinterchunk2:
nom<SN><@SUBJ^pre_nom<SN><@→N><ind><pl><gen>{^5<det><qnt><un><pl><guio>$^åring<n><m><pl><ind>$}
```


5-åringenes tannhelse er ikke  avhengig av barna. /// LØYST ///


## Illativ




```
Emil ja su viellja Felix (3) áddeba sámegiela, muhto dábálaččat vástideaba dárogillii. 
Emil og h_ns bror Felix (3) de to forstår samisk, men vanligvis svarer de to til norsk. 


Muhto dábálaččat vástideaba dárogillii. 
men vanligvis svarer de to på norsk. 
```


Med berre *vástideaba* får vi *på norsk*, men med heile setninga 
får vi korrekt *til norsk*.


Regelen i t2x treff på ulik preposisjon, av grunnar 


Lene: fikset i regelen for caseprep /// LØYST ///

- Emil og h_ns bror Felix (3) de to forstår samisk, men vanligvis svarer de to på norsk.




## Lokativ


```
Nubbi vuoiti lea máhcastatniibi, maid Pekka Tuominen lei duddjon stális ja čoarvvis.
Annet er vinneren foldkniv, som #Pekka Tuominen hadde lagd stålet og hornet.
Annet er vinneren foldkniv, som #Pekka Tuominen hadde lagd av stål og horn.
```


**Generaliseringa er** \\
duddjot N+Loc ==> lage av N


Dette gjeld eit sett av verb som betyr å lage, produsere.


Problemet er i disambigueringa. Når det er ok, så vil vi får ADVL-ela som igjen skal gi "av" eller "fra"


Annet er vinneren #foldekniv, som Pekka Tuominen hadde lagd av stål og horn. /// LØST ///




## Essiv


### eaktun


"eaktun" *som betingelse* -> *en betingelse*.


```
Danne lea nana matematihkkagelbbolašvuohta eaktun servodaga ovdánahttimii.
Derfor er sterk matematikkkompetanse som betingelse for samfunnets utvikling.
Vi vil ha:
Derfor er sterk matematikkkompetanse en betingelse for samfunnets utvikling.
```


**Generalisering** er

- *eaktun* bør på liste over essivar som skal omsetjast med *en* og ikkje med *som*
evt. i lexical selection.

/// LØST ///:
Derfor er sterk matematikkkompetanse en betingelse for samfunnets utvikling.






#  ADJEKTIV


## cmp: sakte-TV /// LØYST ///

```
Minuvttas minuktii prográmmaid gohčodit hiljes-TV:n. 
Minutt for minutt de kaller programmene #sakte<adj><sint><pst><mf><sg><ind><guio>TV.
```






##  Cmp /// LØYST ///
ønsket resultat: smávis Cmp => små

```
echo smávvaaviisa | apertium -d. sme-nob
ei litenavis (=> småavis)
```




## Numerus

```
Turisttat besset oaidnit dujiid
Turistene får se duodjier
```

Ein del ord er ubøyelege på norsk, og bör kanskje få defekt paradigme


/// LØST /// i bidix: Turistene får se duodji.




#  PRONOMEN


## Type pronomen




disambigueringsproblem: duođas adv = alvorlig \\
istedenfor duohta adj /// LØYST ///


## Pers pronomen

 su mielas - 
Løses med cg-regler i lex


```
Sara Pettersen čilge ahte son áŋgiruššá dán áššis, danne go su mielas lea olles ášši nu boastut.
Sara Pettersen forklarer at hun ivrer i denne saken, fordi etter hennes oppfatning er en hel sak slik galt.
```



#  SUBSTANTIV






##  Bestemtheit: indef, men ikke artikkel


Legge til en tagg for dette i t1x /// LØYST ///


```
echo Suoma Sámedikki presideanta, Tiina Sanila-Aikio lea duhtavaš konvenšuvnnain 
presidenten I Finland sameting, Tiina Sanila Aikio er fornøyd med en konvensjon
=> konvensjonen
```




ikke artikkel for acr (vi kan ha en unntaksliste, som CD osv) /// LØYST ///

```
NRK sádde vahkkosaš prográmma giđđajohtimis
en NRK sender et ukentlig program på vårflyttinga
```


ikke artikkel for sem_time (vi kan ha en unntaksliste, f.eks. dag) /// LØYST ///

```
Áviisa almmuhuvvo vuossárggain gitta lávvardahkii
Avisen publiseres på mandagene helt til en lørdag => til lørdag
```






##  ruhta


* skenket ruđa --> forære penger, ikkje pengen /// LØYST ///

```
echo skeŋket ruđa | apertium -d. sme-nob
forære penger
```


##  Genitivs-s + ubestemt form


*Redaktørens bøkene* er alltid feil


**Generaliseringa er:**


Possessor med -s + bar N






# ADJEKTIVFRASER






##  Faste uttrykk


###  Ta litt ost: /// LØYST ///


```
 ii leat hárjánan váldit vuostá dákkáriid.
 det har ikke blitt vant å ta i mot slike.
```

 
#  KVANTORFRASER


```
Son ii leat bidjan makkárge heahteveahkkedoaimmaid johtui
H_n har ikke satt noen slags førstehjelpoppgaver i gang.


Son ii leat bidjan makkárge earenoamáš heahteveahkkedoaimmaid johtui
H_n har ikke satt noe slags spesielle førstehjelpoppgavene i gang.
```


Den autentiske setninga (med "earenoamáš") fungerer ikkje.


Problemet er i t4x, regel 9, som gjer om (korrekt) ind til def, og slår til berre når "earenoamáš" er del av NP-en:


```
apertium-postchunk: Rule 9 pre_nom<SN><@←OBJ><def><m><pl><acc><impers><maydetind>{^førstehjelp<n><f><sg><ind><cmp>$^oppgave<n><m><pl><3>$}
```


Problemet var chunkinga i t1x, det er nå fiksa, pluss en lex.selectionregel som gir oversettinga tiltak: \\
H_n har ikke satt noen slags spesielle førstehjelptiltak i gang. /// LØST




#  PREPOSISJONSFRASER


Liste over ting som må forbedres i transfer filene


Fenomena er lauseleg gruppert etter type (med store bokstavar på nivå 3)
For å få betre oversikt flyttar vi ting som er ok over i dokumentet [Solved Transfer Problems](SolvedTransferProblems.html)




Skriv slik: 

- Øverste overskrift: store bokstavar, tema
- Midtre overskrift: Små bokstavar, undergruppe
- Lågaste overskrift: Einskildsaker, disponer gjerne slik:
	- eksempel: sme + mt + korrekt (evt store bokst for nøkkelord), 
	- deretter drøfting 
	- deretter generalisering


#  NORSK MORFOLOGI
##  Bøyning i nob




### Ordklasse og bøying for N/A på -sk


```
Eilif Aslaksen lea máŋgii vuoitán Finnmárkku journalistasearvvi journalistabálkkašumi ja jagis 2015 son vuittii Sámi journalistabálkkašumi
Eilif Aslaksen har mange ganger vunnet Finnmarks journalistklubbs journalistpremie og 2015 vant han Samisks journalistpremie
```


*samisks*


Problemet er at *samisk* blir analysert som substantiv. 


Lene: delvis løst i transferregler (t4x). Men fordi det er 
mange ord med samisk, engelsk osv som får substantivbøyning i nob, 
så bør dette løses i nob, dvs at substantiver som ender på -sk, 
ikke får en genetiv s.


Trond: Problemet med ei slik løysing er at det finst ord på -sk som har -s, som i 
(det autentiske dømet) *Norsk arktisk torsks dumpingssalg gjennom årtider.*
Derimot finn eg ikkje *engelsks* på Google. Eg skal sjå om det er 
mogleg å dele -sk opp i to grupper.






### manglende bindestrek guio mellom acro og substantiv


**OG, VM, EM**


```
OG-golli
#OLgull
OL-gull
```


Output frå sme:

```
echo  OG-golli | apertium -d. sme-nob-postchunk
^OL<n><sg><ind><guio>$^gull<n><nt><sg><ind>$^.<sent><clb>$
```

Analyse av nob:

```
echo VM-gull | apertium -d. unob-sme-morph
^VM-gull/VM-gull<n><nt><sg><ind>/VM-gull<n><nt><pl><ind>/VM-gull<n><nt><sg><ind>/VM-gull<n><nt><pl><ind>$^./.<sent><clb>$
```


Desse var leksikalisert i bidix men ikkje i nob, dei er no leksikalisert
(og sølv og bronse kjem).


Akronym + substantiv med bindestrek er delvis løyst:
Det fungerer for akronym med contlex 


```
VM__n 
```


i nob.dix. Det er det dei færreste akronyma som har, så
vi må sannsynlegvis splitte mange substantiveksika for å få akronym
og andre ord kvar for seg.


Eit akronym som både har dette leksikonet og står i bidix er *AS*, jf:


```
AS-áigi|apertium -d. sme-nob
AS-tid
```


Andre akronym skal få tilsvarande handsaming (kjem etter kvart).










#  PRONOMEN
## Fjerne pronomen
Alt ok, ventar på fleire feil :-)


##  Genus av han/ho
Alt ok, ventar på fleire feil :-)


#  SUBSTANTIV OG SUBSTANTIVFRASER
## Ubestemtheit

```
 på latinen 
```


språknamn.ILL = på språknomn.ubestemtform






## Bestemtheit
Alt ok, ventar på fleire feil :-)












###  Fleirtalsobjekt i bestemt form
Alt ok, ventar på fleire feil :-)




###  Bar NP


Legg til maydetind i bidix for å få ubestemt artikkel:

- For fleirtals-N sett vi ikkje inn *en*
- *en* skal ikkje inn for ord for:
	- utellelig, masse, stoff
	- visse ord: guolli, boazu, hoahppu (fisk, rein, hast ...)


### Bar N i faste uttrykk


```
Son lea barggus.
H_n er i arbeidet.
H_n er i arbeid.
```


Vi treng ei liste over slike (og undersøke unntaka der *i arbeidet* er ok). 


FIXED for sem_act når hovedverbet er til venstre og er *leat*.


```
Son lea barggus.
Hun/han er i arbeid.


Maid áiggot bargat go heaittát barggus?
Hva skal du gjøre når du slutter i jobben?
```




##  A + N i adjektivfraser


###  A + N som ubestemt NP


```
Buorre mánnávuohta bistá eallinagi
Gode barndommen varer livstiden
En god barndom varer livstiden
```


Ein setningsinitial streng *AN* skal bli *en A N*.




## Genitiv, possessor, osb.




###  Possessorfrase med to genitivar


```
Nieidda áhči biila
Bil til jentas far
Bilen til jentas far


Nieidda áhči biila lea boaris
Bilen til jentas faren er gammel
Bilen til jentas far er gammel
```


**Generaliseringa er** \\

Alle N2-gen N1 som blir overført til *N1 til N2* skal ha bestemt N1 og ubestemt N2.






## Illativ
Alt ok, ventar på fleire feil :-)


## Lokativ
Alt ok, ventar på fleire feil :-)


## Komitativ
Alt ok, ventar på fleire feil :-)






## Essiv
Alt ok, ventar på fleire feil :-)


## Numerus
Alt ok, ventar på fleire feil :-)




# ADJEKTIVFRASER


## Ellipse: AP utan N


```
Golbma vuosttas dahket bargolávdegotti.|apertium -d. sme-nob
Tre første de gjør arbeidsutvalget.
De tre første utgjør arbeidsutvalget.
```


Problemet er at utan N i subjektet sett programmet inn "de", jf.:


```
Golbma vuosttas miellahtu dahket bargolávdegotti
Tre første medlemmer gjør arbeidsutvalget.
```


#  KVANTORFRASER


## Num + N
Alt ok, ventar på fleire feil :-)




#  PREPOSISJONSFRASER


## Fleire preposisjonar


### Preposisjonane "i" og "til" frå verb og illativ


```
Norgga Sámediggi lea oassálastán čoahkkimiidda Norgga ráđđehusa delegašuvnna bokte.
Norge Sametinget har deltatt i til møter delegasjonen i Norges regjering via.
```


- oassálastit = delta i
- čoahkkimiidda = til møter


Vi må med andre ord fjerne i (fjerne preposisjonar introdusert av verb) 
når dei står foran preposisjonar frå kasus.


Fleire døme:
delta i på komiteens neste møter


FIXED:


Oversettelsen i bidix fra "delta i" til "delta", og så blei oassálastit lagt til i "ill-i"-verblista




```
Norgga Sámediggi lea oassálastán čoahkkimiidda.
Norge Sametinget har deltatt i møter.
```






#  ADVERB


##  ULIKE ADVERB

- guhkit - lenger ///LØST (men trenger bedre disambiguering)
- siskkáldasat - internt ///LØST
- vuollegaš - ydmyk ///LØST




## Fjerne pcle  /// LØYST ///
de kan være adv og pcle, når det er plce skal den ikke gi noen oversetting


```
<e><p><l>de<s n="pcle"/></l><r><s n="adv"/></r></p></e>


Juovlaruohta de leat ollu juovlaskeaŋkkat juovlamuoraid vuolde.
de #Adv><adv> er julaften mange julegaver under juletrærne. =>
Julaften er det mange julegaver under juletrærne
```


##  Dakkára


```
eaba gávdnan dakkára,
de to fant ikke slikt
```


Fullt eksempel:


```
Soai váillaheigga obbalašgova buot dáhpáhusain Sámis, ja go eaba gávdnan dakkára, de fuobmáiga ieža ráhkadit.
De to savnet totaltbildet på alle hendelser i Sameland, og da de to ikke fant slikt, så oppdaget selv å lage.
Vi vil ha:
Neg: De to savnet totaltbildet av alle hendelser i Sameland, og da de to ikke fant noe slikt, så oppdaget de å lage selv.
Pos: De to savnet totaltbildet av alle hendelser i Sameland, og da de to fant et slikt, ble de glade
```


Tanken er altså at dakkára skal vere 


* sii leat gávdnan dakkára = et slikt 
* sii eai leat gávdnan dakkára = noe slikt ///LØST




**Generaliseringa er:**


* NEG + dakkára = noe slikt  ///LØST
* dakkára = et slikt






##  Flink til å  /// LØST


```
Olbmot leat leamaš čeahpit vuoruhit bátnedearvvašvuođa
Folk har vært flinke prioritere tannhelsen
```


=> Folk har vært flinke å prioritere tannhelsen


**Generaliseringa er:**


lea + Adj + Inf => er Adj TIL Å  Inf, trenger @A< i smesyn








#  VERBALET


## ha/være som hjelpeverb


```
 Olu áviissain lea guhká leamaš váttis dilli
 I mange aviser har det lenge HATT en vanskelig situasjon
 Mange aviser har lenge hatt vanskelig situasjon


Olu guovlluin lea guhká leamaš váttis dilli|apertium -d. sme-nob
I mange områder har lenge vært vanskelig situasjon
```


Dømet (áviissain) er løyst ved å endre det til habitiv. For andre døme
(guovlluin) får vi VÆRT som vi vil ha. Det er andre problem
(manglande DET, artikkel EN), men det høyrer ikkje hit.


**Generaliseringa er** \\
Med det-innsetjing skal vi også ha "å ha" som hjelpeverb, ikkje "å vere" /// LØYST






## vblex.ger til adj.pprs /// LØYST ///

```
Nu čilge Viktor Trosten bivddedettiin Lišmmajávrri alde.
Så forklarer Viktor Trosten fiskende på Lišmmajávri.
```






## Passiv med er, ikkje har \\LØST




```
Buot sisdoallu lea dahkkivuoigatvuođalaččat suddjejuvvon
Alt innhold har #opphavsrettslig<adv> blitt beskyttet 2015 © Ávvir
=> Alt innhold er #opphavsrettslig blitt beskyttet
```


**Generaliseringa er:**


Konstruksjonen `passivsubjekt + lea + V-juvvon` skal ha *være* som hjelpeverb, ikkje *ha*








## Refleksive verb må bli bunde til rett person \\LØST




```
Jurddašan ahte mii galggašeimmet leat čoahkkanan 
Jeg tenker at vi skulle ha samlet oss
```
... men *vi samlet seg* -> oss 






## -huvvon-passiv er partisipp, ikkje Sg1  /// LØYST ///


```
Sámekonvenšuvdna almmuhuvvon ja gaskaboddosaččat dohkkehuvvon
En samekonvensjon blitt annonsert og midlertidig blitt vedtatt
```


*jeg* kjem pga Sg1 på -huvvon, som kjem fordi det ikkje er 
andre finitte verb der. ==> HMAINV eller noko.




#  KOORDINERING


##  Chunke coordination


###  adj_attr conj adj_attr nom   /// LØST

```
Dát lea leamašan guhkes ja áddjás proseassa
Dette har vært en lang og tidkrevende prosess

^adj<SA><@→N><ind><GD><ND>{^lang<adj><sint><pst><GD><ND><3>$}$ 
^conj<@CNP><cnjcoo>{^og<cnjcoo>$}$ 
^pre_nom<SN><@←SPRED><ind><m><sg><nom><impers>{^tidkrevende<adj><pst><mf><sg><3>$ 
^prosess<n><m><sg><3>$}$^default<default>{^.<sent><clb>$}
```






##  ikke artikkel - vi trenger en tagg (lagt til i t1x) som hindrer artikkel i t4x /// LØYST ///

```
Giellabargu mánáidgárddis gáibida ollu barggu sihke bargiin ja vánhemiin.
Språkarbeidet i barnehagen krever et mye arbeid både fra ansatte og forelderen. => ikke 'et'
slik er taggene idag:
pre_nom<SN><@←OBJ><ind><nt><sg><acc><impers>


Dasa mun leange bidjan olu áiggi, searaid ja návccaid
Til det har jeg satt ei mye tid, krefter og evner
```




**Generaliseringa er:**


*olu* + bar NP








##  ikke flertallsbøyning /// LØYST ///

januar

```
Almmuhuvvon odne, dii. 15:38 Ođđajagimánu 18.beaivi 2017
Blitt Annonsert i dag, #kl. 15:38 Januarer den 18.dagen 2017
```


# EIN DEL SAKER ORDNA ETTER DIAGNOSE (tag), og ikkje etter grammatikk


##  Tagger i chunk
### fra sápmi n sg gen til samisk adj

1:  til samiske områder /// LØYST ///

```
 Sámedikkit galget bures beassat váikkuhit movt sámi guovlluid luondduvalljodagaid hálddašuvvojit.
 Sametingene skal godt få påvirke hvordan naturressursene til #samisk<adj><pst><pl><ind> områder de forvaltes over.
#samisk<adj><pst><pl><ind> => samisk<adj><pst><un><pl><ind>
```


2: samiske institusjoner /// LØYST ///

men precase fungerer ikke

```
 Sámi ásahusaid davviguovlluid fierpmádat
Et nettverk nordområdene #samisk<sg><ind><gen> institusjoner

#samisk<sg><ind><gen> => samisk<adj><pst><un><pl><ind>
```










# SETNINGSTILSVAR




##  lohkat + Acc + Inf -> å Nom Inf


```
Jáhkká kulturmáhtu leat oktan ággan
H_n tror kulturkompetansen for å være som et argument
Han tror at kulturkompetanse er et argument
```


**Generaliseringa er:** 

lohkat, jáhkkit ... + Acc + Inf -> tro, ... at N er


Generalisering i transfer er at verbet er leat og får @←ADVL eller @←OBJ

H_n tror kulturkompetansen er et argument. /// LØST






#  LEGGE TIL cnjsub/pr 


##  om
lage regler i t4x for å legge til "om". Eksempler, X markerer innsetting av om


###  ahte : om at /// LØST

```
– Mii leat ožžon ollu fiinna skeaŋkkaid, na ja sávan ain buriid juovllaid, dadjala movttegis Bådåddjo nissonolmmoš go oaččui dieđu ahte/X son lei vuoitán. (diehtu ahte = beskjed om at)
Son muittuha ahte/X seammá go Norggas, de Suomas ge ásset sápmelaččat iešguđet sajiin riikkas. (muittuha ahte = påminner om at)
Son váruha ahte/X dat sáhttet máhccat ruovttoluotta. (váruhit ahte = advarer om at)
```





###  sáhka - tale om /// LØST

```
go lei sáhka X sámemánát geat eai leat oahppan sámegiela ruovttus  (sáhka = /// LØST om)
Dás lea sáhka X mánáid vuoigatvuođas beassat leat mielde váikkuheamen ja mearrideamen. (sáhka = /// LØST om)
Son lohká ahte jus Jovsset Ante Sara vuoitá lágamánnerievttis, de lea sáhka X leamaš máksit ruđaid fas ruovttoluotta. (sáhka = /// LØST om)
Njealje jagi áigi bovttii Sverre Porsanger veahá digaštallama, go sivahalai váhnemiid – iige eiseválddiid – go lei sáhka X sámemánát geat eai leat oahppan sámegiela ruovttus (čujuhus dárogielčállosii). (/// LØST = snakk om)
```

###  knyttet til andre substantiver /// LØST

```
Norggas lea 2005 rájes leamaš soahpamuš X ráđđádallamiin stáhta eiseválddiid ja Sámedikki gaskkas. (soahpamuš + loc = avtale om)
Stuorra boraspirevahágat, lassánan golut ja uhccánan sisaboađut, oktanaga stuorra rievdadusaiguin hálddašeamis ja gáibádusain ahte/X geahpedit boazologu, leat dagahan ealáhussii váttisin einnostit boahtteáiggi. (gáibádus ahte = krav om)
```







# ORDSTILLING




##  Ordstilling: V + OBJ + ADV-PP \\LØST


```
Barggu geažil ferte son Álttás čuovvut dikki,
På grunn av arbeidet må han i følge Alta tinget,
Skal vere
På grunn av arbeidet må han følge tinget i Alta ,
```


**Generaliseringa er:**


Alle adverbial som blir til fraser på norsk skal flyttast etter objektet




## Neg


### Topikalisert Neg skal ikkje ha initialt ikkje


```
In munge sáhte sárdnut ruoššagillii.
Ikke jeg heller kan tale på russisk.
Jeg kan heller ikke tale på russisk. 
```

Lene synes denne tolkningen er bedre:


Heller ikke jeg kan tale på russisk. \\\ LØST \\\

(sárdnut kan bety både snakke og tale, i denne teksten tolker jeg det som tale)


```
In han munge sáhte sárdnut ruoššagillii.
Ikke jo jeg heller kan tale på russisk.
Heller ikke jeg kan skrive. \\\ LØST \\\
```


```
Ii dáiddárstipeanda ge leat sirdojuvvon Sámediggái .
Ikke kunststipendet heller er blitt flyttet til Sametinget .
Kunststipendet er heller ikke blitt flyttet til Sametinget .
```

Lene synes denne tolkningen er bedre:

```
Heller ikke kunstnerstipendet er blitt flyttet til Sametinget. \\\ LØST \\\
```


**Generaliseringa er:** 

- Neg + NP + ge + V ... ==> NP V heller ikke
- Neg + han + NP + ge + V ==> NP V jo heller ikke


## Leddsetning


###  go til om 


```
Sámediggi áigu guorahallat lea go vejolaš rievdadit ohcanalmmuheami. 
Sametinget skal undersøke er  det mulig å forandre søknadspubliseringa.
Sametinget skal undersøke om det er mulig å forandre søknadspubliseringa.
```


**Generaliseringa er:** 

`S V lea go A V ==> S V om det er A å V`


I dag har vi det-insetjing (fint), men *om* manglar, og ordstillinga er feil.


Sametinget skal undersøke om det er mulig å forandre søknadspubliseringa. /// LØYST ///








# DET som formelt subjekt


## Ein "det" for mykje




### Apposisjon  /// LØST for subjekter


```
Finnmarken áviissa váldodoaimmaheaddji, Eilif Aslaksen, lea cealkán eret virggistis
redaktørens i Finnmarken avis, Eilif Aslaksen, har sagt opp fra stillingen..

Eilif Andreas Aslaksen (53) lea bajásšaddan Hilláguras Deanus
Einar Andreas Aslaksen (53) har vokst opp i Hillagurra i Tana
```


**Problemet er:** 

Vi klarer ikkje å sjå det eigentlege subjektet attom apposisjonen. /// LØST for numeraler ala (53) etter navn, i nominativ. Arbeider videre med andre syntaktiske sammenhenger etterhvert som de dukker opp.




### Topikalisert objekt 


```
Journalistihka lea lohkan Norgga journalistaallaskuvllas Oslos (1989–1991)

Vil vil ha en av disse to:
Han har lest journalistikk på Norges journalisthøyskole i Oslo (1989–1991)
Journalistikken har han lest i Norge journalisthøyskole i Oslo (1989–1991)

Slik er den no, her mangler pro:
Har lest journalistikk i Norge journalisthøyskole i Oslo.
```


H_n har lest journalistikk i Norges journalisthøyskole i Oslo.  /// LØST ///








### Topikalisert subjektspredikativ > "er det" eller "er" /// LØST


```
Mu mihttomearri journalistihkas lea, ahte dat álo galgá nu bures go vejolaččat doaimmahuvvot.
Mi målsetting i journalistikk er, at det skal alltid så bra som mulig utføres


(bortsett fra av vi ønsker bestemt form: journalistikken)
```




### Insett "det" som subjekt i relativsetning med relativisert subjekt /// LØST


```
Seammás Bargiidbellodat lea sidjiide leamaš dat áidnu bellodat mas lea leamaš sosialdemokráhtalaš ideologiija vuođđun.


Samtidig har Arbeiderpartiet vært til dem det eneste partiet som har hatt til de sosialdemokratiske ideologis grunn.
```


### Habitiv /// LØST

```
Larsenis lea sámegielmáhttu.
Larsen har samiskkunnskap.
```


### Insett "det" ved topikalisert adverb /// løst


```
Čoahkkimis galgá ráhkaduvvot plána studeantta hárjehallama progrešuvdnii .
På møtet skal det lages en plan for progresjonen i studentens trening .
På møtet skal det lages en plan til en progresjon til students trening
```






### Relativsetning som ikkje skal ha subjekt


```
Sii barget ovttas fitnodagain, mas lea teknihkalaš ovddasvástádus čađahit dán bávkin- ja čuovgavásáhusa, mii bistá sullii logi minuvtta.
De arbeider sammen med firmaet, som har et teknisk ansvar å gjennomføre dette smellingen og lysopplevelsen, som varer omtrent ti minutt.
```


**Generaliseringa er:** \\

Relativsetningar, med relativt pronomen i nominativ (eller for e-setningar, i lokativ) skal aldri ha innsett subjekt. /// LØYST her




###  Relativsetning som skal ha subjekt


```
– Presideanttas han lea politihkalaš sáhka maid galgá ovddidit, ja dat sáhka han manná giela bokte.
- Presidenten jo har et politisk budskap som h_n skal utvikle, og det budskapet jo går via språket.
```


**Generaliseringa er:** \\

Ei relativsetning med relativisert objekt må på norsk ha eksplisitt subjekt \\   
Her: Hab lea NP maid Aux Inf — skal ha subjektspronomen koreferent med Hab      /// LØYST her




### Topikalisert nektingsverb (overskrift)


```
Ii vel dieđe gos áigu bargat
Ikke enda vet hvor skal arbeide


Vi ønsker:
H_n vet ikke enda hvor h_n skal arbeide
```


**Generaliseringa er:** 

Dette er overskriftsyntaks, initial ii gjev prodrop, og vi vil ha inn pronomen


H_n vet ikke enda hvor h_n skal arbeide. /// LØST ///


## Manglande "det"




### Positiv initial dan dihte


Dan dihte leage riekta ja dehálaš go skuvla čielga vugiin dovddasta dat lea maiddái sámi ohppiid skuvla.
Derfor er riktig og viktig fordi skolen på den klare måten innrømmer det det er også skole til samiske elever.
Derfor er DET riktig og viktig fordi skolen på den klare måten innrømmer det det er også skole til samiske elever.


insetting av DET pga @<SPRED, uten at det er subjekt foran:


Derfor er det riktig og viktig fordi skolen på den klare måten innrømmer han det er også skole til samiske elever. \\\ LØST






## Eit subjekt (pro) for lite


### Topikalisert objekt

```
– Dan sáhttá gaskkohagaid bargat, muhto juohke beaivve ná bargat lean dovdagoahtán leat veadjetmeahttun
- Det kan innimellom arbeide, men hver dag slik arbeide jeg har begynt å kjenne å være umulig
– Det kan HAN innimellom arbeide, men å arbeide slik hver dag har jeg begynt å kjenne at er umulig
```


**Generaliseringa er:** 

Topikalisert objekt har ført til prodrop, OBJ + verb (evt: OBJ + sáhttá + Inf)
gjev det-innsetjing.


Det kan h_n innimellom arbeide, men hver dag slik arbeide jeg har begynt å kjenne å være umulig. \\\ LØST


## Subjekt + partisipp


Viss vi har partisipp etter subjektet kan vi **ikkje** setje inn "det".


```
Earret_eará lea Romssa fylkkagielda ásahan Romssa guovllubuohcceviesu oktavuhtii bálvalandoaimma , mii gohčoduvvo Sámi ossodahkan .
Unntatt_annet har Tromsø fylkeskommune etablert Tromsø regionsykehus i forbindelse tjenesteoppgaven , som kalles Samisk avdeling .
```


**Generaliseringa er:**


ADVL + Ind.Prs.Sg3  NP => ADVL + Ind.Prs.Sg3 det NP (men ikkje Ess etterpå)
ADVL + leat.Ind.Prs.Pl3  NP.Pl => ADVL +  er det NP (men ikkje Ess etterpå)
(evt. skal NP vere -Human)


Det er mogleg vi først skal ha reglar for Ess og etterpå reglar for kontekstar utan.




##  Ordstilling: Setningsadverb




```
Sámekonvenšuvdna lea dál gaskaboddosaččat dohkkehuvvon.
Samekonvensjonen har midlertidig blitt nå godtatt. (har nå midlertidig...)
=> Samekonvensjonen er nå midlertidig blitt vedtatt.
```




**Generaliseringa er:**


Setningsadverb etter det finitte verbet  \\LØST




##  Subjekt *det*


### Feilaktig de-innsetting for e-subjekt


```
Tiimmu ovdal gaskaija leat kulturdoalut Kárášjoga čierastanluohkás.
Timen før midnatt er det et kulturarrangement i Karasjok slalåmbakke.
Timen før midnatt de er kulturarrangement i Karasjoks slalåmbakke.


Tiimmu ovdal gaskaija leat kulturdoalut Kárášjoga čierastanluohkás.
Timen før midnatt er det et kulturarrangement i Karasjok slalåmbakke.
Timen før midnatt de er kulturarrangement i Karasjoks slalåmbakke.
```




##  Insetjing av man som subjekt


```
Juohkehažžii galgá ordnet nuvttá vuođđooahpahusa .
Til ethvert skal ordne gratis grunnopplæring .
Vi vil ha:
Til enhver skal man ordne gratis grunnopplæring . /// LØST


Ráddjemis galgá giddet fuomášumi dasa , ...
I avgrensningen skal feste oppmerksomheten til det, ...
```

Vi vil ha:

```
I avgrensningen skal man feste oppmerksomheten til det, ...


Dalle sáhttá guođđit čálli nama eret čujuhusas , nugo čuovvovaš ovdamearkkain :
Da kan forfatteren utelate navnets fra henvisningen , som i følgende eksempler : (feil i smesyn)
Vi vil ha:
Da kan kan man utelate forfatterens navn fra henvisningen , som i følgende eksempler :
```




**Generaliseringa er:**


ADVL (for å vere sikker: Ill) + AUXV + Inf


## Et subjekt (man) for lite


### Topikalisert objjekt "dan"


```
Dan sáhttá gaskkohagaid bargat, muhto juohke beaivve ná bargat lean dovdagoahtán leat veadjetmeahttun
Det kan innimellom arbeide, men hver dag slik arbeide jeg har begynt å kjenne å være umulig
Det kan man innimellom gjøre, men hver dag slik arbeide jeg har begynt å kjenne å være umulig
```


Vi har eit topikalisert objekt, og treng eit dummy-subjekt "man" rett etter det finitte verbet. 
 \\\ LØST med innsetting av DET, se lenger opp






# VERBVALENS


## Setje inn preposisjon


### váidalit


```
Reivves sii váidaledje skuvlla
I brevet klaget #de skolen
I brevet klaget de på skolen
```


Sett inn *på*.


### vuosttaldit


```
Nuba vuosttaldit geassečuoigamiid,
Så protesterer de sommerskirennene
Så protesterer de mot sommerskirennene
```


Sett inn *mot*.


Så protesterer de mot sommerskirennene. \\\ LØST




# FORMATERING




##  stor bokstav i begynnelsen av setninga

```
Njealje jagi áigi bovttii Sverre Porsanger veahá digaštallama
for Fire år siden vekket Sverre Porsanger litt debatten  => For fire
```


For fire år siden vekket Sverre Porsanger litt debatten. /// LØYST ///




diehtojuohkki:informasjonssjef








# FORMELT SUBJEKT "det"
## Ein "det" for mykje


### Apposisjon 


/// LØST for numeraler ala (53) etter navn, i nominativ. Arbeider videre med andre syntaktiske sammenhenger etterhvert som de dukker opp.


# ORDSTILLING


## Ordstilling i NP
### Ordet gitta utanfor NP


FIXED:

```
Vuosttaš plánaid mielde lei Stáda Geaidnodoaimmahat sávvan beassat cegget gaskaboddosaš šalddi GITTA DÁLÁ šaldái
Første etter planene hadde Statens Vegvesen ønsket å få sette opp midlertidig bru helt til nåværende bru.
```


Det som skjer er at adverbet *gitta* blir analysert som del av NPen, og dermed som del av den resulterande PPen.
*gitta* må på ei liste over adverb som ikkje skal vere del av NPen, det gjeld kanskje til og med alle adverb.




FIXED:

```
Mii sávvat beassat cegget gaskaboddosaš šalddi gitta dálá šaldái.
Vi ønsker å få sette opp midlertidig bru helt til nåværende bru.
```


**Generaliseringa er:** 

gitta blir chunka inni NP-en og kjem derfor etter P




## Heilsetning


### Adv Inf


```
Dan dihte fertejit dál bidjat ođđa gaskaboddosaš šalddi billahuvvon šaldi báldii.
Derfor må  man sette nå ny midlertidig bru ved siden av den ødelagte brua. 
Derfor må  man nå sette ny midlertidig bru ved siden av den ødelagte brua. 
```




**Generaliseringa er:** 

- XP VFIN ADVL SUBJ VINFIN
- XP VFIN SUBJ ADVL VINFIN
adverbialet rett etter subjektet
