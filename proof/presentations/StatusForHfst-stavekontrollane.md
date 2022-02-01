# Stavekontrollar og fst-ar


av Sjur Moshagen


Tromsø, 10. september 2014


# Status for hfst-stavekontrollane


## skisse over korleis dei er bygd opp
* normativ fst -> vekting -> akseptor
* akseptor-alfabet -> ( redigeringsavstand 1 + bokstavsekvensar ) * 2 + ord
* blir pakka inn i LO-voikko


Alt er Hfst (og Voikko), alt er open kjeldekode.


Normeringa fylgjer offisiell rettskriving, så langt som ho er definert. Viktig
at det ikkje er vi som normerer.


## Problem som no er løyst
* vekting + minimering
* hyperminimering + fart
* integreringa med LibreOffice (Windows har enno ikkje fått dei siste rettingane)


Resultat:
Alle språk kan no kompilerast til raske (nok) stavekontrollar som fungerer i
LibreOffice


Atterhald:
* språkkoden for språket må finnast i både LO og LO-voikko
* det er ikkje alle kombinasjonar av vekting, minimering og hyperminimering som
  gjev raske stavekontrollar - kva som gjev det beste resultatet må testast for
  kvart språk.


# Potensiale for forbetringar av stavekontrollane


* Ideal: den korrekte rettinga skal vera det fyrste og einaste forslaget.
* Ikkje mogleg i praksis, men det er det vi strevar mot


Eg held PLX og Hunspell utanfor - vi har ikkje dei same verktya for å påverka
t.d. forslagsmekanismen. Forbetringar i morfologisk modell (dekning, det å
fjerna sjeldne eller problematiske ordformer) vil sjølvsagt koma
listestavekontrollane til gode automatisk.


## Frekvensvekta leksikon


* hovudideen er sjølvsagt at meir frekvente ord skal koma høgare opp på
  forslagslista
* implementert for finsk
* rammeverket er på plass, men er ikkje gjort tilgjengeleg for andre språk
    * mange språk manglar korpus, men dette er sjølvsagt ikkje noko argument mot å
   gjera dette systemet tilgjengeleg for andre språk


## Morfologivekta leksikon


* samansette ord bør få høgare vekt enn ikkjesamansette ord (samansett i teknisk
  forstand, ikkje lingvistisk)
    * vi har leksikalisert ein stor del av dei samansette orda vi har funne
    * vekting av dynamisk samansette ord gjer at nye ord (usette ord) ikkje kjem
   like høgt opp på lista som kjende (registrerte) samansette ord
* derivasjonar - same logikk som med samansette ord
* vekting av morfologi - bøyingsformsfrekvens eller manuell vekting?
    * dersom to ulike ordformer ellers er like, bør den mest frekvente bli
   føreslått fyrst


### Utfordring


Vi treng ei systematisk bruk av vektar, slik at ikkje vekting på eitt område
slår ut vektinga på eit anna område.


## Feilmodell


* redigeringsavstand
* fonotaksbasert
* sekvensbasert
* heile ord ("typos")


### Redigeringsavstand


Dette er ein svært enkel modell, men er grunnmodellen som alle språk får
automatisk.


### Fonotaksbasert


Jf. Lene sin presentasjon. Ingen ting er gjort her enno.


Det burde vera relativt enkelt å laga ein fonotaksbasert feilmodell, i og med at
vi har heile fst-aparatet tilgjengeleg. Kkonsekvensane for fart og storleik på
feilmodellen er sjølvsagt ukjende inntil vi har prøvd.


### Sekvensbasert


Døme: `ll -> ljj`


Dette er ein enklare modell utan kontekst, som er laga etter modell av det vi
har for PLX.


### Heile ord ("typos")


* `jih -> jïh`
* Dette er ein juksekategori, som dekkjer over svakheiter i resten av feilmodellen
* samtidig er han nyttig for brukarane — dersom vi veit at eit heilt ord er feil
  og vi kjenner rettinga er det ingen grunn til ikkje å føreslå det rette ordet


# Målsetjing


Vi vil bli betre enn engelsk!
