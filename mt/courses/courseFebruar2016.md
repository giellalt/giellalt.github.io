# MT-beaivvit guovvamánu 8-11. b

Sandra, Maja, Trond, Lene, Ciprian \\
Marja-Liisa fra onsdag


##  Mandag
### Bidix:

- bidix-sanity (test som tester generering av alle sma/smj/smn ord i bidix):\\ `sh bidix-sanity.sh > sanityoutput` (når man står i dev). Les mer om [tolking av output](../infra/bidixsanity.html)
	- dette gir grunnlag for å rette lemma i bidix og å legge til ord i FST
	- vanligvis er mesteparten av linjene i sanityoutput propernouns. Start med de viktigste slik: \\ `grep -v "<np>" sanityoutput | less`
	- Francis skal lage bidix-sanity som tester generering sme i bidix
- missinglister
	- fra tekstene i texts/ - lag sjøl med denne [kommandoen](../infra//MissingList.html)
	- fra relevante tekster i hele korpuset (Trond lager)
		- prioriter substantiv-lister uten sammensetning, og verb- og adjektiv-lister uten derivasjon
		- kommando for å fornye missinglista (ordene som får analyse kan fjernes), eksempel fra smj: \\
`cat dev/sikor.sme.V.freq.noder.missing |hfst-proc sme-smj.automorf.hfst |less `


Missinglist-barggus lea vejolaš geavahit min sátnegirjjiid (ovdamearka sma-katalogas):


- jorgalit buot missing-sániid darogillii: \\
`cat dev/missing_v_noder | smenob | see `
- Jos vastádus lea \\
  Lexicon file '...bin/smenob-all.fst' could not be found or opened \\
  de don fertet dan kompileret \\
  `cd $GTHOME/words/dicts` \\
  `see make-bildict` \\
  (... ja bija SLANG ja TLANG , linjjus 27, 28 dego háliidat, sme + nob lea default) \\
  `make -f make-bildict` \\
  ... ja de dus lea sátnegirji 


Vær OBS på tagger i bidix: 
 
- ordklasse
- `NomAg, G3, G7`
- `Sg` vs `Pl` (andre vegen er ikke nødvendig å merke)
- fra ett ord til multiword expressions:
	- mellomrom merkes med `<b/>`
	- MWE må legges til i FST, gjerne merkes med `Use/MT`


### Parallelltekster: 

- hva og hvordan bruke dem (når du er i apertium-sme-smX)
	- `python check_mt-otpt.py -d tmx_data/ ` 
	- `cat otpt_dir/* > allefiler.html` 
	- `open allefiler.html` (åpnes i Safari)




### Lex-sel

* [lexical selection](../infra/LexicalSelection.html) (eanet go okta vejolaš jorgalus)




##  Tirsdag

Praktisk arbeid med mandagens temaer \\


Derivasjoner fra kildespråk til målspråk, diskusjon om harmonisering, se nederst på denne siden


##  Onsdag


### Stille diagnose, med eksempler fra Majas og MLs lister 


### Testing (regression og pending)

Viktig å legge inn eksempelsetninger for lexical selection og transfer


### Transferregler

- tilpassing av lexc-tagger til MT, og harmonisering av derivasjontagger
- sammensetninger fra kildespråk til målspråk, harmonisering
- omorganisering av transferregler (skal gjøres)




### sme-disambigueren 

- forbedre konvertering fra divvun/gt til apertium (Sjur)
- oppdatere regler (Lene)






### hva andre enn Maja og Sandra kan gjøre i MT og lexc-koden

- legge til sme-propernouns 
- transferregler 




## Torsdag
## Forskningsspørsmål for MT-prosjektet

- hvilke språklige forskjeller finnes?
	- statistikk over forskjellige språkpar
- hvilke språklige forskjeller er vanskelige å løse?
- hvor god er lrx-modellen kontra lex-modellen?
- hvor god er Apertium systemet for språkpar med stor syntaktisk forskjell (sme-sma)?
- forskjell mellom idiomer og språkbilder mellom de samiske språkene?
- sme-smn: tekster skrevet på norsk side vs finsk side 
- hvilke samfunnsmessige konsekvenser kan dette ha?
	- er rele-modellen en brukbar modell? (for hvert språkpar, hvorfor?)
	- hvor stor interesse/nytte for intersamiske ordbøker osv.
- interferens: er nordsamisk interferens verre enn anna interferens?
- forske på posteditprosessen
	- oversettingsprosessen menneske + maskin vs. menneske
	- sammenlikne arbeidsmåter (f.eks. hele tekster vs setning for setning)


## Faglige mål i 2016 (i forhold til NFR-prosjektet)
###  Mulige domener

- årsrapporter, sametingsprotokoller (departementer) (som rele)
- samisk høgskole: sme til andre samiske språk
- sme-sma: samfunnsfagskolebøker (ungdomsskole) (Mii dáppe dál) - kommer ut på sme og sma på våren. "Multi" (matematikk) til sma (finnes på smj).
- sme-smj: skal sjekkes ut
- sme-smn: kommer nye skoleplaner i Finland => nye oversettinger


### Valgt domene til sept. 2016: årsrapporter, sametingsprotokoller


###  Milepæler i forhold systemets brukbarhet

- mål: systemet er så pass bra sametingsoversettere vil posteditere (redigere)
- når: 1. september skal være klart for evaluering som rele-språk med WER osv.


##  Praktisk plan framover
###  Tekster

- finne i korpus tekster som vi har (innafor domenet): 1. april
	- 3-språklige: tmx-format (**Ciprian**)
	- 2-språklige: (**Ciprian**)
	- lage fin-smn ankerliste (**Trond**) 25.2
- samle inn tekster som vi mangler (innafor domenet), vi trenger folk! (**Trond**): 10. mars
- ta kontakt med sametinget for å finne ut av oversettinger (**Sandra**): 15.2


###  FST
- harmonisering av tagger (Der): Der/voete, Der/vuohta, Der/vuota Der/AN  Der/AdjN (denne uka)\\ **Lene**: lager liste over flere 
	- Cmp (**Lene** skriver bugzilla)
	- teste med pronomensetninger i texts/ (**Maja, Sandra**)
	- partikkel vs. adverb (kan være forskjellig PoS i bidix, men man bør vurdere harmonisering i FST) (**Maja, Sandra, ML**)


###  Bidix
- bidix - mål er å halvere missingprosenten fram til neste samling
	- missinglist (fra domenet) (**Trond lager og Maja, Sandra, ML** oversetter)
	- rydde direkte i bidix (**Maja, Sandra, ML**)
	- bidix sanity (**Maja, Sandra, ML**)
	- MWE i smX må legges inn i FST (**Maja, Sandra, ML**)
	- bidix i hht. til tospråklige tekster (**Erika**)


###  LexSel

- lage regler utfra behov man ser i bidix, legge eksempelsetninger i pending test, (**Maja, Sandra, ML**)

###  Transfer 

Løse de mest frekvente problemene: 

- reorganisering: merke chunking med syntaktiske tagger, endre klitika, lage et mønster for navning av chunkene, skal dokumenteres på nett (**Lene, Trond**)
- sjekke konstruksjonstyper: (**alle** samler eksempler og dokumentasjon)
	- objekt- og adverbialplassering
	- NP-intern kongruens
	- numeral-fraser
	- kasusbruk 
	- hjelpeverb


###  Forbedre sme-analyse inn i apertium
- ordne konvertering av *  (**Sjur** snarest mulig)
- forbedre CG analyse (**Lene** snarest mulig)
- forbedre sme FST i forhold til tekster skrevet i Finland (**Thomas**)
	- **Trond** lager missinglister


##  Møter
###  Hangout-tid: mandag 10-12, med temaer

Trond eller Lene holder \\
Første gang: 22. februar


###  Neste samling: 25-29. april


## Derivasjoner: Endring av tagger, harmonisering

(**Maja, Sandra, Lene, Trond**)


### Alle sme-taggene:

Dagens tagger som forteller funksjon:

- Der/A
- Der/Adv
- Der/Dimin
- Der/NomAct 						 
- Der/NomAg
- Der/PassL
- Der/PassS


Forslag om nye tagger som forteller funksjon:

- kaus: Der/ahtti Der/ahtte  Der/dehte => Der/Caus
- inch: Der/goahti => Der/InchL
- pass: Der/halla Der/PassD => Der/PassH Der/PassD Der/PassT 
- Der/at Der/at Der/avt => Der/AAdv


Forslag om nye tagger som med suffikser:

- Der/st Der/stidh => Der/st
- Der/l Der/lidh => Der/l
- Der/laš => Der/lasj 
- Der/alla -  Der/alle (sma) => Der/alla
- kaus: Der/h Der/d Der/htidh => Der/h Der/ht Der/d Der/tt
- Der/d Der/didh => Der/d
- Der/lágan  Der/laakan  Der/lagan => Der/laakan
- Der/lágaš => Der/laagasj
- Der/las +Der/lis (vearba => adj) => Der/las Der/lis
- Der/saš Der/sasj  Der/sas => Der/sasj
- Der/vuohta Der/voete Der/vuota => Der/vuota
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


