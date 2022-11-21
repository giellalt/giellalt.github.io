
Bestemtheit
===========

Målet med dette dokumentet er å lage overordna generaliseringar for
bruk av bestemt og ubestemt form i norsk som målspråk.


# Dagens system
Hvilke regler i dagens system velger bestemt/ubestemt, og artikkel eller ikke.
Det meste skjer i t1x (legge til tagger) og t4x (skrive ut):


## t1x:


### Bestemthet
1. Macro set_defnes: arg.1: noun/adj, with syn_label
	1. Default to indefinite, guess definite for certain GF's, genitives, 
Locatives only indefinite in first position with leat. 
Adjectives given to this macro will be (predicative and) indefinite
	1. ubestemt ved 
		1. unc, som legges til i bidix (uncountable)
		1. HNOUN, acr, ←ext→
		1. sem_domain - gen
		1. ekstra, blåse liv, halv million, i tale, i samarbeid
		1. noun.pseudo-prop + sg: Nouns that act proper (indefinite in the singular, no determiner) april, bestefar...
		1. @←SUBJ + hovedverb til venstre er i passiv
		1. modifiseres av adjektiv (men regelen dekker ikke alle typer, f.eks. sint er ikke med)
	1. bestemt ved,
		1. nominativ uten at det er hovedverb til venstre (som nullstilles ved @CSV, @ADVLcs-ela→, @ADVLcs-ine→
		1. @OBJ→ ←hab→ @SUBJ→ @←SUBJ gen loc ill com
		1. sg, men ikke @←PPRED @←SPRED @←OPRED @ADVL @←ADVL-ela @←ADVL-ine @ADVL→ @ADVL-ela→ @ADVL-ine→ @←ADVL @X ess gen
1. Macro set_defnes2: arg.1: noun, arg.2: determiner (or adj, but only if no det).
	1. Kjører først set_defnes, deretter justeringer i forhold til ordet foran, (bestemt av regelen, hvis det er flere ord):
	1. indefinite if the determiner is a possessive
	1. definite if it is a demonstrative
	1. With superlatives, it's always definite.
	1. Otherwise, keep old defnes.
	1. noun.pseudo-prop + @HNOUN: april, bestefar...
1. Noen regler definerer defness for enkeltuttrykk


### Artikkel
1. macro set_neverdet
	1. når substantivet ikke har maydetind-tagg
	1. determinerless_sem : sem_time
	1. determiner-although-determinerless_sem: måned, dag, uke, år, time, minutt, sekund
1. noen regler legger til neverdet
	1. lquot quotationmark-name rquot clean_noun
		1. Váillahit dáidda- ja kulturoasi «Váibmogiella» guorahallamis.
	1. nom.prop_attr nom.prop.gen nom_head
		1. Jođiheaddji Christina Henriksena mielas
	1. nom.unprop.gen nom_head


## t2x:
1. SUBJr PR compl: Sámi oahpaheaddji masteroahput (ind) and Giellabargu mánáidgárddis (def)
	1. neverdet gir ind


## t3x:
1. macroen her er foreløpig fjerna fra reglene


## t4x:


###  Artikkel
1. Macro maybe_out_det3: arg.1: chunk, arg.2: determiner or other pre-nominal, arg.3: head-nominal of chunk
	1. Don't add determiner if chunk ends in np
1. Macro maybe_out_det2: arg.1: chunk, arg.2: first word in nominal chunk
	1. For eg. 'det_nom' or 'adj_nom', to make sure we say 'den andre/lyse hunden' (not 'andre/lyse hunden')
	1. og: det var lite (*en) kylling i salaten. (ADV + bar NP)
	1. If pre-nominal is indefinite and nominal definite, we do not output a determiner,
	1. since it's most likely a compound (eg. ovttaskasolbmui => enslig.adj.ind mennesket.n.def).
	1. Ignores chunks where pre-nominal is np or genitive.
	1. No determiner if it already has some determiner other than 'annen', or has a genitive before it
1. syn-no-determiner: @←PPRED @HNOUN
1. initial-lemh-no-def-determiner: hel
1. lemh-no-determiner: mor, ansvar, januar ....
1. initial-lemh-no-determiner: fjorårets
1. betingelser ellers
	1. ikke: og en halv
	1. ikke: n.acr, np, adv, gen, ikke neverdet-tagg
	1. ikke: adj + nom,  prn + nom
1. or:
	1. ikke det + nom
	1. annen + nom
	1. det.sp.def + nom


###  Legg til ubestemt artikkel når 
1. maydetind
1. not neverdet
1. not ess
1. not unc
1. not sup
1. not former-chunk SN or unknown






# OVERSIKT


Her kjem ei døfting av **prinsippa** attom bestemtheit for substantiv 
omsett frå nordsamisk til norsk. Konkrete døme på feilomsetjingar skal
til [Transfer problems-fila](TransferProblems.html). Vi delar oversynet 
inn i *Nominalfraser* (uavhengig av funksjon), *Setningsledd* og *Preposisjonsfraser* (uavhengig av funksjon).


# Nominalfraser


## Possessivkonstruksjonar


1. s-konstruksjon: Possessor er bestemt, possessum ubestemt: \\
  mannens bil / *manns *bilen
1. til-konstruksjon: Begge er bestemt \\
  bilen til mannen 


## Kvantorkonstruksjonar


Visse kvantorar tar helst bestemt form, andre helst ubestemt:


1. bestemt: \\
  alle bilene, 
1. ubestemt: \\
  mange, flere, noen,  enkelte, diverse, atskillige, få, ingen \\
  hver, hvilken
1. bestemt eintal: \\
  mye, litt, nok, hver


Moteksempel til *alle1. def: *Alle målinger viser at1. (men *Alle målingene...1. er ikkje så ille)


## Det + N


Der sme-input er Det + N har vi bestemt form: *dat ášši1. -> *den saka*




## AN-nominalfraser


```
Čájáhus ii leat áibbas dábálaš čájáhus
Utstillinga er ikke helt vanlig utstilling,
```


1. **Eintal**: Samisk AN for N i Sg  skal vere norsk EAN (E = en/ei/et).
1. **Fleirtal**: AN for N i Pl kan (dvs. skal, som default) vere utan determinativ.


## Unike N


Viss N er unike, og oppfører seg som namn:


```
Oahppit leat beahtahallan go rektor ii váldde ovddasvástádusa ja veahket sin.
Elevene har blitt skuffet når rektoren ikke tar ansvaret og hjelper dem.
==> rektor (fordi skolen berre har ein)
```


1. rektor, báhppa, stáhtaministtar, hoavda, jođiheaddji


Døme:


1. Doaktáriid searvvi jođiheaddji boahtá. → Leder av legenes forening kommer.




# Setningsledd


## Subjekt


### Subjekt i eksistensial- og habitivsetningar (E-subjekt)


**E-subjekt er ubestemt.**


Dei kan opptre med og utan utestemt artikkel:


1. Mus lea beana --  Jeg har en hund / Jeg har hund
1. Gilis lea gávpi -- I bygda er det en butikk / (?) I bygda er det butikk


Vi har *en N1. som default, men bør vurdere kva slags N som ikkje skal ha N. 


Taggen maydetind i bidix gir ubestemt art (hvis ikke regel mot). Dette fungerer
for *Mus lea mielki*, men ikkje for *Mus lea beana*. Her treng vi ei
eiga liste for *beana*, som er eit individ, men som kan bli referert til
som *type1. (av individ).


### Subjekt til venstre for det finitte verbet 


Subjekt til venstre for det finitte verbet (sg og pl) skal vere bestemt:


1. Beana borrá láibbi -- Hunden spiser brødet (for objektet, sjå nedanfor)
1. Nissonat leat vuosttažettiin ageren sápmin sámi oppalaš mihttomeriid ovddas. -- Kvinnene har...






### Subjektet mellom det finitte og det infinitte verbet
Subjektet mellom det finitte og det infinitte verbet skal vere bestemt:




### Subjektet til høgre for hovudverbet 
Subjektet til høgre for hovudverbet skal vere bestemt:


1. Odne geavahit ásahusat ja earát servodagas sámegiela beaivválaččat.




### Subjekt til venstre for verb i passiv


Subjekt til venstre for verb i passiv er bestemt.


1. Raporta sáddejuvvo	gulaskuddamii geassemánus 2008 .
1. Rapporten ...


Det er mogleg det same gjeld for aktiv og passiv.


### Subjekt til høgre for verb i passiv
Subjekt til høgre for verb i passiv er ubestemt
1. Odne fállojuvvo gáiddusoahppu sámi gielain sihke vuođđoskuvllas ja joatkkaskuvllas .
1. Dál fállojuvvo fágaskuvlaoahppu	petroleasuorggis Bergena ja Stavangera fágaskuvllain .
1. ... fagskoleopplæring ...






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


1. Čáhppes ivdni lea čáppa ivdni. -- Den svarte fargen er pen farge.
	1. (heilt riktig, bortset frå at AN skal vere EAN)


# Preposisjonsfraser


Dette er vanskeleg.


## på


def og indef er ca 50/50


### på def:


1. på + hytta, fjellet, skolen, bildet, markedet, jobben, agendaen, såret, lufta, legevakta, klokka, døra, dataen, ...
	1. Alle desse er unike på den måten at det i kvar situasjon berre er ei hytte, eit fjell, ein skole, eit bilete, ...


### på indef


1. på + jobb, bilkjøp, kurs, arbeid, kafé, kino, restaurant
	1. Alle desse refererer til fenomenet
1. tenke på jobb, kropp,
	1. V + på N






### på E indef


1. på en + artikkel, linje, regning, måned, strand, ...
	1. Alle desse refererer til  eit medlem av eit sett (det finst mange artiklar, linjer, rekningar, og vi vel ut ei av dei)




## Andre preposisjonar


(Det kjem meir her, men generaliseringane for *på1. vil sannsynlegvis gjelde også andre).


### med indef


1. reise med buss/fly/tog...


### Objekt indef


1. ta buss/fly/tog...
1. kjøre bil
1. spille gitar/piano/tromme...
1. ha tid til


### til indef


1. til frokost/lunsj/middag


###  Q N.Pl.Loc = Q av N-defpl


```
Unnimustá okta čállosiin galgá gieđahallat lohkama 
Minst i en tekst skal behandle studien
Minst en av tekstene skal behandle skriving
```




### N av N


Slik var regelen:
1. dáčča skuvlla kopija → kopi av den norske skolen (kopi av norsk skole, ser bra ut for meg) (nom.gen nom.gen nom_head)


### som N




Her må vi ha ubestemt *samisklærer*:

 
1. Sámi oahpaheaddji masteroahput besset álggahuvvot → Masterutdanninger som samisk lærer får startes. (nom.gen nom.gen nom_head)




