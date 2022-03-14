Denne sida listar opp ting vi vil forbetre, legge til eller utprøve i NDS.

##  Lenkje til bokmerke i mobiltelefon Brukarane vil ha "ein app",
dvs. NDS på mobiltelefonen. Det er planar om nedlastbar NDS, men mens
vi ventar på det kan vi lage ei lenkje på sida som gjer det mogleg å
lage (viser korleis ein kan lage) eit bokmerkesymbol på skrivebordet
på telefonen.

Ei mogleg løysing: https://github.com/docluv/add-to-homescreen
##  Ordbok for nordsamisk-spansk
Status: Demoversjon ligg ute

## Syntetisk tale (TTS) for nordsamisk

Klikk på eit symbol <| og få TTS til å lese opp ordet

Status: TODO. Alle komponentane eksisterer.

## IPA

Klikk på eit symbol og få translitterasjon

TODO: Gå attende i svn-historia og få fram IPA-fst-en (i dag er den endra til eit ortografisk output). Som alternativ kunne vi vurdere Wiktionary sitt skript.

##  Ny logo (og mindre logo for Reader)

Status: TODO

## Forbedre etymologi

Det hadde vore betre å lenkje direkte til artikkelen, men for å få til det må vi hente sanue_id-nummeret frå databasen. Vi kan t.d. legge det inn som ein id i kjeldekoden:

[http://kaino.kotus.fi/algu/index.php?t=sanue&lekseemi_id=6976&hakusana=sátni&sanue_id=2912]

Status: i gang

## Flytte re-node framfor omsetjing

## Fjerne korp-lenkjer frå paradime

Då vi har lagt til lenkjer frå adjektivparadigme til smi.cgi, vert det forvirrande å ha lenkjer frå verbparadigme til Korp. Vi fjerner Korp-lenkjene, sidan det likevel finst lenkje til Korp i analyseboken til høgre.

## Synleggjera alternative skrivemåtar

t.d. diftoŋga/diftoŋŋa, tomáhtá/tomáhtta, tunealla/tunnealla

Vi legg variantane til i xml-fila under lg (l_var?) med ein attributt som viser kva variant det er for generering (v2, v3, ...).
Så vert det generert ulikt paradigme avhengig av kva variant ein trykkar på. Vi legg berre til variantar av lemma, ikkje av omsetjingar.

## DONE
###  Etymologi

Klikk på eit symbol ETYM og få lenkje til Kotus (den finske etymologiske databasen)

Den enkle måten å gjere det på er å lenkje til sida, slik:

[http://kaino.kotus.fi/algu/index.php?t=haku&o=hae&l=1&valinta=1&valintaryhma=1&kieli=45&hakusana=sátni]

Med andre ord:

http://kaino.kotus.fi/algu/index.php?t=haku&o=hae&l=1&valinta=1&valintaryhma=1&kieli=45&hakusana=WORD

... der målspråkkoden er:

* kieli=45 = sme
* kieli=41 = sma
* kieli=46 = sma
* kieli=47 = sms
* kieli=29 = fin
* kieli=29 = fin
* kieli=30 = izh
* kieli=36 = liv
* kieli=60 = myv
* kieli=61 = mjd
* kieli=62 = mhr
* kieli=63 = mrj
* kieli=20 = kom
* kieli=21 = udm
* kieli=3 = yrk

... og grensesnittspråk er:

```
http://kaino.kotus.fi/algu/index.php?t=haku&o=hae&l=1&valinta=1&valintaryhma=1&kieli=45&hakusana=sátni&kkieli=fi
http://kaino.kotus.fi/algu/index.php?t=haku&o=hae&l=1&valinta=1&valintaryhma=1&kieli=45&hakusana=sátni&kkieli=de
http://kaino.kotus.fi/algu/index.php?t=haku&o=hae&l=1&valinta=1&valintaryhma=1&kieli=45&hakusana=sátni&kkieli=en
```

###  Forbedre presentasjon av sammensatte ord

Se "Sammensetninger i nds" i [180926](/admin/giellatekno/180926.html)

### Bug 2406 (egentlig ikke new feature)

Kontekst som dette, blir ikke presentert.
- entry_context: "mun"
  tag_context: "V+Ind+Prs+Sg1"
  template: "(mun) ` word_form `"

### Oppdatere bokmerke
Det er sjekket inn korrigert feedback-adresse (giellatekno@hum.uit.no > giellatekno@uit.no)
i fila apps/dicts/nds/src/neahtta/static/js/bookmarklet.js

Denne skal oppdateres i grensesnittet.

### Linker til Korp fra finsmn og nobsma
link til tospråklig korpus på samme måte som fra nobsme

### Forbedret presentasjon av derivasjoner (behandle derivasjoner som sammensatte ord)

Sammensatte ord fungerer slik idag:
* viessohaddi	viessu+N+Cmp/SgNom+Cmp#haddi+N+Sg+Nom
* Både viessu og (#)haddi sendes til ordboka og vi får oversettelse av begge:
    - viessu = hus, haddi = pris
* Hvis viessohaddi også er i ordboka, så blir også denne presentert med oversetting, øverst

Derivasjoner (alle som starter med Der/ ):
* borralit	borrat+V+TV+Der/l+V+Inf
* Vi ønsker at både borrat og Der/l skal sendes til ordboka, hvor det skal være en entry med forklaringer:
    - borrat = spise, Der/l = gjøre noe raskt, eller starte en bevegelse

Dette skal også gjelde noen infinitte verbformer, f.eks.
* borakeahttá	borrat+V+TV+VAbess
* Også VAbess skal sendes til ordboka, hvor det skal være en entry med forklaringer for denne
    - borrat = spise, VAbess = uten å gjøre det

Vi trenger entrier for  verdier som 'Der/l' eller 'VAbess' i ordboken.

### Legge til l_ref feature også i NDS

Se [om l_ref](dictionarywork.html#Bruk+av+l_ref+i+xml++%28gjelder+bare+VD%29)

###  Legge til informasjon om stammetype

substantiv, verb, adjektiv

* 2syll = likestavelsesstamme
* 3syll = ulikestavelsesstamme
* Csyll = kontrakt stamme

info hentes fra kontinuasjonsleksikonene i
main/langs/sme/src/morphology/stems/nouns.lexc

f.eks. substantiv \\
jáhkka+Sem/Clth:jáhkka GOAHTI-A ;

```
<l pos="N" stem="2syll">jáhkka</l>
```

GOAHTI-A er for 2syll.

Liste over kontinuasjonsleksikonene vs. stem type er i \\
trunk/words/dicts/smenob/scripts/nouns_stemtypes.txt

###  Behandling av derivasjoner med flere analyser

* 1: Når samme lemma + Der-tagg med og uten Err/Orth:
Oppslag og høyremarg: vis bare den uten Err/Orth

```
"skuvla+N+Der/Dimin"

skuvllaš
skuvllaš	skuvla+N+Der/Dimin+N+Sg+Nom <==========
skuvllaš	skuvla+N+Der/Dimin+N+Sg+Gen+Err/Orth-nom-gen
skuvllaš	skuvla+N+Der/Dimin+N+Sg+Acc+Err/Orth-nom-acc
```

* 2: Når samme lemma + Der-tagg uten Err/Orth:
Oppslag: vis bare en gang - Høyremarg: vis alle analyser

```
"skuvla+N+Der/Dimin"

skuvllažiid
skuvllažiid	skuvla+N+Der/Dimin+N+Pl+Gen
skuvllažiid	skuvla+N+Der/Dimin+N+Pl+Acc
```

* 3: Når alle lemma + Der-tagg er med Err/Orth:
Oppslag: vis bare en gang - Høyremarg: vis alle analyser

```
kántuvrraš	kantuvra+Err/Orth-a-á+N+Der/Dimin+N+Sg+Nom
kántuvrraš	kantuvra+Err/Orth-a-á+N+Der/Dimin+N+Sg+Gen+Err/Orth-nom-gen
kántuvrraš	kantuvra+Err/Orth-a-á+N+Der/Dimin+N+Sg+Acc+Err/Orth-nom-acc

```

* 4: Når det er både lemma og lemma + Der-tagg:
Oppslag: vis både leksikalisert lemma (øverst) og lemma med Der-tagg

```
geavahit	geavahit+V+TV+Inf           <=
geavahit	geavvat+V+IV+Der/h+V+TV+Inf <=
```

* 5: Når det lemma + Der-tagg og lemma + Der-tagg  + Der-tagg :
Oppslag: vis bare lemma med færrest dertagger - Høyremarg: vis bare lemma med færrest Der-tagg ? Vet ikke

```
geavahuvvot	geavvat+V+IV+Der/h+V+TV+Der/PassL+V+IV+Inf
geavahuvvot	geavahit+V+TV+Der/PassL+V+IV+Inf  <=

geavahuvvogoahtit	geavvat+V+IV+Der/h+V+TV+Der/PassL+V+IV+Der/InchL+V+Inf
geavahuvvogoahtit	geavahit+V+TV+Der/PassL+V+IV+Der/InchL+V+Inf  <=
```
