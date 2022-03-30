#  Plan for neste infra-oppgradering


Planen inneheld nokre hovudelement, og mange små delsteg. Hovudelementa er:


* fleire fellesfiler
* enklare konfig
* enklare katalogstruktur
* testdata og testskript nærmare kjeldekoden testen gjeld
* flytta frå vår eigen svn til Github


#  Fleire fellesfiler


* felles numeralfil
* felles acro-fil for samiske språk (ikkje eigentleg infra-spesifikt)


#  Enklare konfig


* få dependensar som det er enkelt å installera
** kløyva dokumentasjonen
** berre påkravde dependensar, ikkje anna tull
* fjerna forrest
* korleis sjekka ut eitt vs nokre vs mange vs alle språk


#  Enklare katalogstruktur


* flatare katalogstruktur - tools-katalogen berre på to nivå (tools/$TOOLTYPE/)
** unnatak for MT - vi vil framleis skilja mellom apertium og cg-mt
* leggja til full støtte for BCP47 som namn på språkkatalogane, ikkje berre ISO
  639-3;


#  Testar nærmare testobjekt


* flytta testane til underkatalogar til dei katalogane vi vil testa:
** døme: `test/src/morphology/` blir flytta til `src/morphology/test/`
** dette fylgjer den eine vanlege praksisen i open-kjeldekode-miljøet (det
   noverande systemet fylgjer den andre)
** fordel: testdata er mykje nærmare det vi vil testa
** ulempe: veit ikkje enno, men det kan vera ein del styr med å få testoppsettet
   til å fungera like smidig som det gjer no


#  Flytta til github:


* språkuavhengige byggje- og konfig-filer i eige repo, som submodul for kvart
  språk
* giella-shared og giella-core som sub-modular (men kan overkøyrast ved bygging
  slik at ein kan visa til nyaste, manuelt redigerte kode istf versjonslåst)
* alle lingvistar sjekkar ut med svn (med mindre dei er git-kyndige)
* standard innsjekkingsgrein ulik master, slik at vi held svn-innsjekkingane
  separat for master - automatisk testing og fletting mot master (eller ei anna
  grein) kvar natt
* korleis handterer Apertium dei ulike språkkategoriane i git? Dvs incubator,
  startup, osb.
* må finna ein måte å fletta / oppdatera alle språka på i git, slik at vi
  framleis skalerer når det gjeld språk


##  Fordelar


* meir synlegheit
* lettare for andre å bidra (kløyv og vinn med same sinn!)
* betre og lettare CI/CD
* lettare å nå alle relevante partar (e-post er kjend for alle som sjekkar inn,
  truleg mogleg å setja opp eit forum, e-postliste e.l. til alle innsjekkarar)
* lettare å testa ut endringar i byggjefilene: eg legg dei i ei eiga grein, og
  byter til den medan eg testar - når alt er klart flettar eg inn endringane, og
  oppdaterer alle språka til å nytta ny versjon


##  Ulemper


* arbeidet med giella-shared-filer blir meir komplisert fordi vi krev at ein skal kunna operera med svn (git-svn)


Her er nokre idear til korleis det kan gjerast:


* git submodule: funkar ikkje med svn-utsjekking frå github
* git subtree: funkar med git-svn (trur eg, må testast!), men blandar koden frå begge repoa i eitt lokalt tre
* lokal utsjekking som del av autogen.sh:


1. sjekk om det er .git eller .svn
1. sjekk ut lista av depsar med rett verkty (git eller svn)
1. gå vidare med autogen.sh-oppsettet


Problem med denne siste løysinga: krev separat oppdatering av dependensane, det
går ikkje automatisk med `svn up` (men kanskje med `svn up *`). Eller så med
eit eige make-mål: `make update`, som sjekkar at all kode og alle dependensane
er nyaste versjon.


Ein annan variant: eit separat skript med eit forklårande namn:


```get-dependencies-for-svn-users.sh```


og med klåre instruksjonar om å køyra dette fyrst (ein gong). Dette kan ein
kombinera med versjonstestar av dependensane for å oppdaga når dei er utdaterte,
og gje ei passande melding då (eller berre automatisk oppdatera dei).


Om eit slikt oppsett fungerer tilfredsstillande for svn-brukarar, kan
git-brukarar få det same automatisk med `git submodule`, og då burde alle vera
nøgde.


##  Git-infra-vedlikehald


Oppdatera alle språk til å nytta ny versjon av dep X (t.d. `giella-shared`)
fletta inn endringar frå eit templat:
* sjekka dato for siste templatfletting i kvart språk (versjonsnr kan ikkje
  nyttast i git)
* sjekka endringar i templatet etter den datoen
* fletta inn diffen mellom templat og lokale filer
* sjekka inn og dytta ut endringane halv-automatisk
