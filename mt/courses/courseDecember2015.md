# Kurs i Apertium-MT

Felles kurs for sme-smn, sme-sma, sme-smj


**Tidspunkt: 7-10. desember 2015**


**Sted: Tromsø** 


## Innhald:

- Kva er MT, om prosjektet
- Teknisk: Maskiner skal fungere
- Metodisk: Arbeidsrutiner
- Lingvistisk: 
	- Arbeide med bidix 
	- Arbeide med generering
	- Arbeide med MT-transfer (syntaks)




## Forarbeid


- Installere Apertium 
- Setje opp pending tests - på Apertium-wiki
- Sikre oss at vi har eit fungerande system
- Legge til tilgjengelig materiale i bidix-filene
- Finne parallelltekstar for arbeid på kurset
- Lage system og placeholdere for kursmateriale




# Kurs i Apertium-MT

Felles kurs for sme-smn, sme-sma, sme-smj


**Tidspunkt: 7-10. desember 2015**


**Sted: Tromsø** 


## Innhald:

- Teknisk: Maskiner skal fungere
- Metodisk: Arbeidsrutiner
- Lingvistisk: 
	- Arbeide med bidix 
	- Arbeide med generering
	- Arbeide med MT-transfer (syntaks)




## Forarbeid


- Installere Apertium 
- Setje opp pending tests - på Apertium-wiki
- Sikre oss at vi har eit fungerande system
- Legge til tilgjengelig materiale i bidix-filene
- Finne parallelltekstar for arbeid på kurset
- Lage system og placeholdere for kursmateriale


## Notater:

- [Fellesnotater](coursenotes.html)


## Kursplan:


###  Dag 1

- Kva er MT, om prosjektet ((web+wp) Trond)
	- [presentation](session_mt.pdf)
	- Wiki ContentTranslation
	- apertium.org
- Legge inn aliaser - Lene
- Apertium i vårt system - Fran (gt+gt=ap)
- Apertiums moduler  - Fran
- Apertiums tagger vs giellatekno/divvuns tagger, analyse - Lene
- Apertiums kommandoer
	- apertium -d . sme-sma
	- apertium -d . sme-sma-TILLEGG (morph, biltrans, postchunk)
	- analyse, generering av morfologi hfst-proc sma-sme.automorf.hfst
- Prøve å oversette tekst 
- Evaluering (Fran)
- definere problemer (i hvilken modul) - Lene
- Begynne å redigere bidix - Trond
	- [presentation](session_bidix.pdf)
	- Legge til ord, rette ord, fjerne linjer
	- Validere: `make`


###  Dag 2

- Bidix: Arbeid i praksis (Trond)
	- Arbeid med grunnlag i tekst som ikke har parallell
	- Arbeid med grunnlag i parallelle tekster 
- Lexical selection - Trond/Fran (-eks)
- Dynamisk sammensetning - Lene
- Missinglist - Lene


###  Dag 3

- Generering, hvordan tilpasse FSTer (Trond)
	- Lukka ordklasser
	- Ikke-samsvar i taggene i sme, smn, sma, smj
- Derivasjoner (Lene)
- Syntaks: kvasikode for transferregler (Lene)
	- Posisjon 
	- Om hver posisjon: tag, lemma/sett av lemma (positiv/negativ)
	- Referanse til SL eller TL


###  Dag 4

- Er problemet sme-disambiguering?
- Pending tests og regresjonstester - wiki
- Mer praktisk arbeid
- Ny evaluering
- Planlegge arbeidet videre, arbeidsdeling

1. bidix - 
	1. revisjon (smj?)
	1. bidix - frekvenssortering
	1. bidix - legge til ord fre frekvsortert missinglist
1. leksikalsk seleksjon
1. transfer


###  Etter kurset

- temaundervisning med jevne mellomrom
- kursuke nr. 2 (når?)
- Mål
	- Akademisk: Publikasjoner (NFR, oss) (PhD)
	- Fungerende system (språksamfunnet, oss)
	- Milepæler for forskjellige bruksområder
		- Støttetekst
		- Redigerbar tekst
		- hva er viktigst
	- kontrastiv grammatikk 
		- For artikkel: t.d. hjelpeverb
- Arbeidsmetode
	- Konkret mål for sme2smX Spesifikt korpus
   samfunnsfag for mellomtrinnet, 
   til redigerbar tekst




