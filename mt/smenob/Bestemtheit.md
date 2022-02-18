



Målet med dette dokumentet er å lage overordna generaliseringar for
bruk av bestemt og ubestemt form i norsk som målspråk.


# Dagens system
Hvilke regler i dagens system velger bestemt/ubestemt, og artikkel eller ikke.
Det meste skjer i t1x (legge til tagger) og t4x (skrive ut):


## t1x:


### Bestemthet
* Macro set_defnes: arg.1: noun/adj, with syn_label
** Default to indefinite, guess definite for certain GF's, genitives, 
Locatives only indefinite in first position with leat. 
Adjectives given to this macro will be (predicative and) indefinite
** ubestemt ved 
*** unc, som legges til i bidix (uncountable)
*** HNOUN, acr, ←ext→
*** sem_domain - gen
*** ekstra, blåse liv, halv million, i tale, i samarbeid
*** noun.pseudo-prop + sg: Nouns that act proper (indefinite in the singular, no determiner) april, bestefar...
*** @←SUBJ + hovedverb til venstre er i passiv
*** modifiseres av adjektiv (men regelen dekker ikke alle typer, f.eks. sint er ikke med)
** bestemt ved,
*** nominativ uten at det er hovedverb til venstre (som nullstilles ved @CSV, @ADVLcs-ela→, @ADVLcs-ine→
*** @OBJ→ ←hab→ @SUBJ→ @←SUBJ gen loc ill com
*** sg, men ikke @←PPRED @←SPRED @←OPRED @ADVL @←ADVL-ela @←ADVL-ine @ADVL→ @ADVL-ela→ @ADVL-ine→ @←ADVL @X ess gen
* Macro set_defnes2: arg.1: noun, arg.2: determiner (or adj, but only if no det).
** Kjører først set_defnes, deretter justeringer i forhold til ordet foran, (bestemt av regelen, hvis det er flere ord):
** indefinite if the determiner is a possessive
** definite if it is a demonstrative
** With superlatives, it's always definite.
** Otherwise, keep old defnes.
** noun.pseudo-prop + @HNOUN: april, bestefar...
* Noen regler definerer defness for enkeltuttrykk


### Artikkel
* macro set_neverdet
** når substantivet ikke har maydetind-tagg
** determinerless_sem : sem_time
** determiner-although-determinerless_sem: måned, dag, uke, år, time, minutt, sekund
* noen regler legger til neverdet
** lquot quotationmark-name rquot clean_noun
*** Váillahit dáidda- ja kulturoasi «Váibmogiella» guorahallamis.
** nom.prop_attr nom.prop.gen nom_head
*** Jođiheaddji Christina Henriksena mielas
** nom.unprop.gen nom_head


## t2x:
* SUBJr PR compl: Sámi oahpaheaddji masteroahput (ind) and Giellabargu mánáidgárddis (def)
** neverdet gir ind


## t3x:
* macroen her er foreløpig fjerna fra reglene


## t4x:


###  Artikkel
* Macro maybe_out_det3: arg.1: chunk, arg.2: determiner or other pre-nominal, arg.3: head-nominal of chunk
** Don't add determiner if chunk ends in np
* Macro maybe_out_det2: arg.1: chunk, arg.2: first word in nominal chunk
** For eg. 'det_nom' or 'adj_nom', to make sure we say 'den andre/lyse hunden' (not 'andre/lyse hunden')
** og: det var lite (*en) kylling i salaten. (ADV + bar NP)
** If pre-nominal is indefinite and nominal definite, we do not output a determiner,
** since it's most likely a compound (eg. ovttaskasolbmui => enslig.adj.ind mennesket.n.def).
** Ignores chunks where pre-nominal is np or genitive.
** No determiner if it already has some determiner other than 'annen', or has a genitive before it
* syn-no-determiner: @←PPRED @HNOUN
* initial-lemh-no-def-determiner: hel
* lemh-no-determiner: mor, ansvar, januar ....
* initial-lemh-no-determiner: fjorårets
* betingelser ellers
** ikke: og en halv
** ikke: n.acr, np, adv, gen, ikke neverdet-tagg
** ikke: adj + nom,  prn + nom
* or:
** ikke det + nom
** annen + nom
** det.sp.def + nom


###  Legg til ubestemt artikkel når 
* maydetind
* not neverdet
* not ess
* not unc
* not sup
* not former-chunk SN or unknown






# OVERSIKT


Her kjem ei døfting av *prinsippa* attom bestemtheit for substantiv 
omsett frå nordsamisk til norsk. Konkrete døme på feilomsetjingar skal
til [Transfer problems-fila](TransferProblems.html). Vi delar oversynet 
inn i *Nominalfraser* (uavhengig av funksjon), *Setningsledd* og *Preposisjonsfraser* (uavhengig av funksjon).


# Nominalfraser


## Possessivkonstruksjonar


* s-konstruksjon: Possessor er bestemt, possessum ubestemt: \\
  mannens bil / *manns *bilen
* til-konstruksjon: Begge er bestemt \\
  bilen til mannen 


## Kvantorkonstruksjonar


Visse kvantorar tar helst bestemt form, andre helst ubestemt:


* bestemt: \\
  alle bilene, 
* ubestemt: \\
  mange, flere, noen,  enkelte, diverse, atskillige, få, ingen \\
  hver, hvilken
* bestemt eintal: \\
  mye, litt, nok, hver


Moteksempel til *alle* def: *Alle målinger viser at* (men *Alle målingene...* er ikkje så ille)


## Det + N


Der sme-input er Det + N har vi bestemt form: *dat ášši* -> *den saka*




## AN-nominalfraser


```
Čájáhus ii leat áibbas dábálaš čájáhus
Utstillinga er ikke helt vanlig utstilling,
```


* **Eintal**: Samisk AN for N i Sg  skal vere norsk EAN (E = en/ei/et).
* **Fleirtal**: AN for N i Pl kan (dvs. skal, som default) vere utan determinativ.


## Unike N


Viss N er unike, og oppfører seg som namn:


```
Oahppit leat beahtahallan go rektor ii váldde ovddasvástádusa ja veahket sin.
Elevene har blitt skuffet når rektoren ikke tar ansvaret og hjelper dem.
==> rektor (fordi skolen berre har ein)
```


* rektor, báhppa, stáhtaministtar, hoavda, jođiheaddji


Døme:


* Doaktáriid searvvi jođiheaddji boahtá. → Leder av legenes forening kommer.




# Setningsledd


## Subjekt


### Subjekt i eksistensial- og habitivsetningar (E-subjekt)


**E-subjekt er ubestemt.** 


Dei kan opptre med og utan utestemt artikkel:


* Mus lea beana --  Jeg har en hund / Jeg har hund
* Gilis lea gávpi -- I bygda er det en butikk / (?) I bygda er det butikk


Vi har *en N* som default, men bør vurdere kva slags N som ikkje skal ha N. 


Taggen maydetind i bidix gir ubestemt art (hvis ikke regel mot). Dette fungerer
for *Mus lea mielki*, men ikkje for *Mus lea beana*. Her treng vi ei
eiga liste for *beana*, som er eit individ, men som kan bli referert til
som *type* (av individ).


### Subjekt til venstre for det finitte verbet 


Subjekt til venstre for det finitte verbet (sg og pl) skal vere bestemt:


* Beana borrá láibbi -- Hunden spiser brødet (for objektet, sjå nedanfor)
* Nissonat leat vuosttažettiin ageren sápmin sámi oppalaš mihttomeriid ovddas. -- Kvinnene har...






### Subjektet mellom det finitte og det infinitte verbet
Subjektet mellom det finitte og det infinitte verbet skal vere bestemt:




### Subjektet til høgre for hovudverbet 
Subjektet til høgre for hovudverbet skal vere bestemt:


* Odne geavahit ásahusat ja earát servodagas sámegiela beaivválaččat.




### Subjekt til venstre for verb i passiv


Subjekt til venstre for verb i passiv er bestemt.


* Raporta sáddejuvvo	gulaskuddamii geassemánus 2008 .
* Rapporten ...


Det er mogleg det same gjeld for aktiv og passiv.


### Subjekt til høgre for verb i passiv
Subjekt til høgre for verb i passiv er ubestemt
* Odne fállojuvvo gáiddusoahppu sámi gielain sihke vuođđoskuvllas ja joatkkaskuvllas .
* Dál fállojuvvo fágaskuvlaoahppu	petroleasuorggis Bergena ja Stavangera fágaskuvllain .
* ... fagskoleopplæring ...






## Objekt


### Topikalisert objekt


Topikalisert objekt (til venstre for verbet) skal vere bestemt


### Objekt i fleirtal etter heile verbalet


```
Suohkan addá sihke dearvvašvuođa-, dikšo- ja fuolahusbálvalusaid.
Kommunen gir både helse-, pleie- og omsorgstjenestene.
Kommunen gir både helse-, pleie- og omsorgstjenester.
```


Slike objekt vil vi ha i fleirtal ubestemt som default.








## Predikativ


Subjektspredikativ som er subjekt lar vi vere ubestemt


Vi har:


* Čáhppes ivdni lea čáppa ivdni. -- Den svarte fargen er pen farge.
** (heilt riktig, bortset frå at AN skal vere EAN)


# Preposisjonsfraser


Dette er vanskeleg.


## på


def og indef er ca 50/50


### på def:


* på + hytta, fjellet, skolen, bildet, markedet, jobben, agendaen, såret, lufta, legevakta, klokka, døra, dataen, ...
** Alle desse er unike på den måten at det i kvar situasjon berre er ei hytte, eit fjell, ein skole, eit bilete, ...


### på indef


* på + jobb, bilkjøp, kurs, arbeid, kafé, kino, restaurant
** Alle desse refererer til fenomenet
* tenke på jobb, kropp,
** V + på N






### på E indef


* på en + artikkel, linje, regning, måned, strand, ...
** Alle desse refererer til  eit medlem av eit sett (det finst mange artiklar, linjer, rekningar, og vi vel ut ei av dei)




## Andre preposisjonar


(Det kjem meir her, men generaliseringane for *på* vil sannsynlegvis gjelde også andre).


### med indef


* reise med buss/fly/tog...


### Objekt indef


* ta buss/fly/tog...
* kjøre bil
* spille gitar/piano/tromme...
* ha tid til


### til indef


* til frokost/lunsj/middag


###  Q N.Pl.Loc = Q av N-defpl


```
Unnimustá okta čállosiin galgá gieđahallat lohkama 
Minst i en tekst skal behandle studien
Minst en av tekstene skal behandle skriving
```




### N av N


Slik var regelen:
* dáčča skuvlla kopija → kopi av den norske skolen (kopi av norsk skole, ser bra ut for meg) (nom.gen nom.gen nom_head)


### som N




Her må vi ha ubestemt *samisklærer*:

 
* Sámi oahpaheaddji masteroahput besset álggahuvvot → Masterutdanninger som samisk lærer får startes. (nom.gen nom.gen nom_head)




