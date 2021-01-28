# Divvun-presentasjon


# Om Divvun


## Folk i Divvun


# **Børre** – programmerar
# **Duommá** – nordsamisk lingvist
# **Elena** – lulesamisk lingvist
# **Linda** – nordsamisk lingvist, grammatikkontroll
# **Maja** – sørsamisk lingvist
# **Tomi** – programmerar
# **Sjur** – leiar, datalingvist


## Bakgrunnen til Divvun


* Starta som eit prosjekt ved Sametinget hausten 2004
* Finansiert av Sametinget, FAD (noverande KMD), KD og Nordplus
* Det fyrste prosjektet avslutta ved utgangen av 2007, med lansering av stavekontrollar for nordsamisk og lulesamisk
* Divvun II-prosjektet gjekk over tre år 2008-2010, og la til støtte for sørsamisk
* Divvun-gruppa vart flytta frå Sametinget til UiT i 2011, og gruppa vart samtidig gjort permanent
* Divvun er no fullfinansiert av det norske departementet med ansvar for samisk (KMD)


## Divvun sine oppgåver


* Levera språkteknologiske verkty til det samiske samfunnet
* Fokus på dei samiske språka som blir prata i Noreg
* ... men inkluderer i større og større grad arbeid for andre samiske språk
* ... og Divvun har alltid inkludert Sverige og Finland i arbeidet sitt
* All teknologi vi lagar er språkuavhengig, slik at det vi gjer for eitt språk kan enkelt bli brukt for andre språk
* Divvun har morsmålslingvistar for nord-, lule- og sørsamisk


## Divvun sine oppgåver (2)


* Korrekturverkty
* Korpusinnsamling
* Infrastruktur
* TermWikien
* Satni.org
* Tastatur
** mobil
** datamaskin


# Frå Divvun


Dei ulike Divvun-verktya etter kategori:
* Retteprogram
* Tastatur
* Tekst-til-tale
* Språklæring
* Ordbøker og terminologi
* Oversetting


## Retteprogram


* starten på Divvun-gruppa
* det fyrste vi laga
* grunnverkty
* krev eit normert skriftspråk - retteprogrammet rettar alltid i forhold til ei norm
** Divvun normerer ikkje sjølv, men lagar alltid verktya etter dei normeringsvedtaka som finst
** dvs at vi fylgjer vedtaka til Giellagáldu (og dei tilsvarande tidlegare organa)


## Retteprogram (2)


"Ferdige" versjonar for:
* nordsamisk
* lulesamisk
* sørsamisk


… men dei blir endå aldri ferdige.


Språk under arbeid:
* enaresamisk
* skoltesamisk


Alle språk kan enkelt lagast til ein stavekontroll, som er så bra som det morfologien og leksikonet er.


## Retteprogram (3)


Fungerer i:
* MS Office (Windows)
* LibreOffice (Linux, macOS, Windows)
* på heimesida vår


Vi arbeider med å utvida rekkja med program som vi støttar.


## Stavekontroll


* Vi startar med ein beskrivande morfologisk analysator, den same som blir brukt til å analysera tekst
* deretter fjernar vi:
** former og variantar som ikkje er innanform norma
** andre irrelevante ting (spørsmålsteikn, komma, etc)
* då har vi ein analysator som berre kjenner att korrekte ordformer
* på toppen av denne analysatoren legg vi ein model som lagar forslag til rettingar for ord som ikkje finst i stavekontrollen


```
Ord -> Feil/rett? -> Dersom feil, vis raud strek
Brukar klikkar på ord med raud strek -> lag forslag -> vis forslaga
```


## Stavekontroll (2)


Ein stavekontroll er så god som:
* leksikonet (dekningsgrad)
* morfologisk beskrivelse (òg dekningsgrad)
* forslaga
* hastigheita


Vi har verkty for å måla ulike kvaliteter ved stavekontrollane.


## Grammatikkontroll


* neste generasjons retteprogram
* ser orda i samanheng, analyserer heile setninga
* kan finna feil som stavekontrollen ikkje kan finna (ekteordsfeil, dvs skrivefeil som resulterer i eit anna, ekte ord)
* kan òg finna feil mellom ord (morfosyntaktiske feil)
* prosjektet har til no berre jobba med nordsamisk, men rammeverket er på plass for alle språk


Demo


## Retteprogram og normering


* Giellagaldu normerer
* Divvun legg normane inn i verktya
* Folk skriv og produserer tekst med verktya
* Divvun/Giellatekno samlar inn tekst, og legg inn i Korp
* Divvun gir tilbakemelding til Giellagáldu om faktisk språkbruk og utfordringar i normeringa
** og GG kan jo sjølvsagt sjå i Korp sjølve :-)


Det heile blir ein sirkel.


## Tastatur


Divvun har ein eigen infrastruktur for å byggja tastatur for:
* Android
* iPhone/iPad
* Windows
* macOS
* Linux


Alt frå same base.


Målsetjing: å gjera det lett og effektiv å skriva dei ulike samiske språka.


## Tastatur (2)


* Kan òg eksportera til CLDR-format
** CLDR blir brukt som ressurs for alle dei store operativsystema
** Dvs at etter at tastaturet har vorte definert, kan vi gjera vårt for at tastaturet skal finnast over alt
* Giellagáldu bør vera vedtaksorgan for samisk tastaturutforming, dvs at GG sine vedtak om tastaturutforming bør bli offisiell standard
* jobbar no med å få ferdig enaresamisk tastatur slik at det er på plass i god tid før studenteksamen våren 2018
** studenteksamen blir skrive på eit Linux-system, så vi **må** ha ein Linux-definisjon av tastatura
* vil gjerne gjera det same med skoltesamisk
* har laga tastatur for lule- og sørsamisk


## Tastatur (3)


Sørsamisk tastatur:


[images/sma_NO-mac-layout.png]


## Tekst-til-tale


* gjer at datamaskina kan lesa opp tekst for brukaren
* (kort demo)
* vi vil i framtida standardisera tekstprosesseringa slik at alle språk i infrastrukturen vår har den biten på plass


## Språklæring


* Det meste gjort av Giellatekno
* men vi har ein mobilapp for å læra seg grunnleggjadne sørsamisk, utvikla i lag med Aajege på Røros
* [gielese.no](http://gielese.no)


## Oversettelse


* Mykje gjort av Giellatekno
* Divvun har hatt eit prosjekt i lag med GT for å laga maskinomsetjing frå nordsamisk til lule- og sørsamisk
** kvaliteten enno ikkje bra nok, sørsamisk meir ulik nordsamisk enn venta
* I tillegg har vi nedlastbare omsetjingsminne for profesjonelle omsetjarar
* vi jobbar med å få på plass ein arbeidsbenk for omsetjarar
* termar og tilgang på termsamlingar viktig for omsetjarane


## Ordbøker og terminologi


* Giellatekno har NDS
* Divvun har [satni.org](http://satni.org)
* Innhaldet er stort sett det same, men det meste av termane i termwikien er berre tilgjengeleg i [satni.org](http://satni.org)
* Dei to webappane har ulik filosofi og fungerer delvis ulikt -> ulike målgrupper og bruksområde


Demo


## Ordbøker og terminologi (2)


* Divvun har utvikla Termwikien med basis i det arbeidet som er gjort ved Helsingfors universitet
* Divvun har tilpassa og vidareutvikla Termwikien
* .. og vil gjerne utvikla han vidare for at Termwikien skal bli så godt eit verkty som mogleg for Giellagáldu
* endringar i Termwikien blir lagt inn i satni.org kvar kveld
* Termane frå termwikien blir brukt fleire stader:
** dei blir lagt inn i analysatorane / stavekontrollane
** dei blir lagt inn i maskinomsetjinga


## Ordbøker og terminologi (3)


[images/TermWikiProcess.png]
