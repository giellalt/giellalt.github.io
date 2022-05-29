



Dette dokumentet diskuterer prinsipp for korleis vi kan redigere ordbøker
som har vorte snudd, td. frå sme-nob til nob-sme. Problema som blir tatt opp
er dei vi støyter på når ei norsk forklaring til eit samisk, kvensk, ... ord
plutseleg dukkar opp som norsk oppslagsord.


# Overordna spørsmål uansett ordklasse


**Valg av ord i kildespråket**


Poenget må være å legge ordet under kildespråk-ordet som brukeren vil leite etter:

1. Finnes det et ord på kildespråket som dekker innholdet? 
1. Vil det være naturlig for brukeren å leite etter dette ordet? \\
Eksempel *sykne = buohccát* som er korrekt, men verbet *sykne* er ikke vanlig i norsk, annet enn i fast uttrykk som *sykne hen*, derfor bør ordet også legge under adjektivet: *syk A = buohcci A, (å bli syk) buohccát V*
1. Flerordsuttrykk?
	1. ja: men grensesnittet er avgjørende for hvor mange man kan vises
	1. nei: vil gi større artikler, viktig at det blir leselige (f.eks. i forhold til annen info. Evt fordel ved klikk-i-tekst - hvis mulig å få dem opp)
1. Gjøre oppmerksom på at det på målspråket skilles mellom betydninger som det ikke skilles mellom på kildespråket \\
Eksempel *grå A = ránis A, (om hår, skjegg, fjær) čuorgat A*
1. Gjøre oppmerksom at på målspråket bruker man f.eks. et verb for å uttrykke noe som man på kildespråket f.eks. bruker et flerordsuttrykk for. \\
Eksempel *grå A = ránis A*, men også *(se grå ut) rádnát V*
1. Gjøre oppmerksom på at det finnes flere ord å velge mellom \\ 
Eksempel *laks N = luossa N*, men også *(voksen hunnlaks) duovvi N, (voksen hannlaks) goadjin N, (unglask) diddi N* osv. *unglaks N = diddi N* kan også være et eget oppslagsord, hvis unglaks er et naturlig ord å lete etter på kildespråket. \\
Men for *ball* vil det ikke være nødvendig å legge *fotball*, fordi det vil være naturlig ord å lete etter på kildespråket.


**Kildehenvisninger**


1. kildehenvisninger som finnes (som ikke lenger er konsistente)
	1. fad: ordparet kommer fra korpus
	1. nj: ordparet kommer fra N Jernsletten
1. hva gjør vi med kildehenvisninga når vi legger til en oversetting, forbedrer ortografi, legger til en <re> osv?
	1. Eit mogleg svar: la stå heilt til endringa er substansiell, deretter endre/fjerne
1. skal kildehenvisninga vises i grensesnittet?
	1. i tilfelle bør vi tilby to grensesnitt: eitt med og eitt utan 
1. kan kildehenvisninga brukes av Giellagáldu eller andre?
1. legge til informasjon i xml-formatet (signere ved endringer osv)?






# Verb

## Overordna spørsmål

### Fleirordsuttrykk eller ikkje som lemma?


Jf. eit tilfelle som vokse vs. vokse opp:


```
"vokse" (med eksempel vokse opp)
"vokse opp" som eige oppslag
```


Vi har tre alternativ:


1. Berre einskildverb som oppslagsord (med partiklar som underoppslag)
1. Partikkelverb som separate oppslag
1. Begge delar


Konklusjon: ... vil variere frå tilfelle til tilfelle, sjå lenger ned.


## Verbtyper

### Partikkelverb

- bukle til
- bære hen
- dale ned


Dette er moglege kandidatar for å ha fleirordsuttrykk (her: *dale ned*) 
som lemma.


### verb + preposisjon

Her er det tilfelle som

- fokusere på
- folde ut

her vil vi ha *fokusere* som oppslagsord, med to mønster:

* fokusere ei kameralinsa, fokusere blikket (Acc)
* fokusere på ei sak (Ill?)



### verb + adverb/adverbial


Dette er tilfelle som


```
verb + ...fort, hardt, litt, plutseleg, ...
fort + verb + ... (sma)
```






Når målspråkordet er resultat av eit modifisert 
uttrykk (hoppe til, plutselig hoppe til, ..).
Desse må under hovudverbet *hoppe*




*anse for å være dyr - divrrašit V* skal under *dyr*




### verb + objekt


**Type 1**: objektet er nært knytt til verbet


* bake brød
* avlegge ed
* flekke fisk


=> legges under både verbet og også under objektet dersom tilsvarende verb ikke finnes på kildespråket, eller ikke ville være naturlig å lete etter. Eksempler: 

* *molte N = luomi N, (plukke molter) lubmet V* 
* *kake N = gáhkku N, (bake kake) gáhkket V*




**Type 2**: Objektet er ikkje like nært knytt til verbet

* ta et skritt = lávket V
* få posefasong = goarvanit V


=> legges under objektet

* *skritt N = lávki N, (ta et skritt) lávket V*
* *posefasong N = (få posefasong) goarvanit V*


slike "oppslagsord" som "få posefasong" er styrt av målspråket, og ikke av kildespråket.
	
Man legger til en ny <mg> i entryen for å gjøre oppmerksom på at når man skal bruke det norske ordet "skritt" i sammenhengen "ta et skritt", så skal man bruke verbet "lávket" istedenfor substantivet "lávki"



### verb (+ objekt) + PP

Dei mest komplekse av desse bør vi berre fjerne.
Dei andre bør inn under ordet med mest semantisk vekt.
T.d. heller under "ruse" enn under "fisk".


* fange fisk med ruse => ruse V
* flette sennegressknipper => sennegressknippe N
* drive reinflokken ned fra fjellet til et bestemt sted => drive V
* forårsake at noen blir ille omtalt => baksnakke V, omtale V ?
* legge seg mer eller mindre flatt i vannet => fjerne?


### Forklaring som oppslag


* "avgi skjærende lyd", 
* "bruke mange norske ord når man snakker samisk"


Viss vi ikkje finn måtar å gjere om desse til norske lemma 
(ein- eller fleirordsuttrykk), men berre blir ståande med
forklaringar, fjernar vi dei frå nob-X-ordboka.


### refleksive verb


* barbere seg
* gifte seg


Refleksive verb har som regel også ikkje-refleksiv bruk:
*barbere snøkanten, gifte bort dattera si*. Refleksiven
bør vere i re-feltet, for å vise at det faktisk er refleksivt 
på norsk, og for å skilje mellom refleksiv og ikkje-refleksiv
bruk. I nokre tilfelle kan verbet ta refleksivt pronomen også
på samisk (ráhket iežas), i andre tilfelle ikkje (náitalit).
Dette må gå fram av oppslaget.


### Inkoative verb

* begynne å fortelle => fortelle V


### Durative verb

* drive på å farte => farte V


### Kausative verb


* få noen til å gråte => gråte V
* få noen til å hoppe  => hoppe V 




### Passive verb med bli + V


* bli bundet
* bli drept


Viss det er mogleg bruker vi s-passiv-infinitiven som lemma
(bindes, drepes). På den måten kjem oppslagsorda som regel
attmed kvarandre (drepe, drepes). 


For verb som er resultat av vanlig passivavledning, bør det lages oppslag bare hvis kildespråket krever det.




### verb + adjektiv


* farge blå


Verbet *å farge* bør ha eitt eksempel, slik at brukaren
ser at målspråket bruker eit verb avleidd av adjektivet.
Deretter bør *å farge gul* osb. vere eksempel under
gul, osb.


Det tilsvarande gjeld for andre verb avleidd av adjektiv.
I nokre tilfelle finst det slike norske verb 
(*forstørre, forminske*), då bruker vi dei.




### bli + A


* bli døv => døv A
* bli edru => edru A
* bli blekgul => blekgul A




### Verb med restriksjon i lemmaet


* dryppe fra sår => dryppe V



## Sentrale verb


### ta


```
nobsme: 
ta = váldit
ta det med ro
ta en snartur
ta en tur
ta et skritt = lávket
ta et tak
ta forbehold 
ta fort
ta fram
ta hensyn til
ta imot
ta med makt
ta opp på bånd
ta part
ta seg en blund
ta slutt
ta stilling til
```


Nynorskordboka


```
ta
1 gripe
2 røre
3 kalle til seg, velje
4 straffe: eg skal ta deg
5 romme: spanne tar to liter
6 forstå: den tok han fort
7 retning: ta til venstre
8 inkoativ: ta og gå heim

ta affære
ta att
ta av dage
ta av plakaten
ta avstand fra
ta beina på nakken
ta bladet fra munnen
...
ta feil
```


(lista her har omtrent ingen fleirordsuttrykk til felles med nobsme).












