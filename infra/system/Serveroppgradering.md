# Oversyn over prosessar og tenester vi har eller planlegg


Her står først oversyn over maskinene vi har **no** (denne lista må bli oppdatert kontinuerleg),
situasjonen i april 2018, deretter kravspesifikasjonar ("Serveroppdateringar") for oppdatering,
og til slutt ei arbeidsliste.


## Status, eksisterande maskiner


For informasjon om maskinene, sjå [Virtual Servers](../VirtualServers.html)
* divvun.uit.no
* gtsvn-01.uit.no
* gtsvn.uit.no
* gtweb.uit.no
* gtweb-01.uit.no
* gtlab.uit.no (oppgradert)
* gtoahpa-01.uit.no
* gtoahpa.uit.no (slettet)
* satni.uit.no (oppgradert)
* gtdict.uit.no


(oppdatert 29.7.19)




## Situasjonen i april 2018 (før oppdatering og nye servarar)
* Oahpa x 29 (gtoahpa + gtlab) -> prod: gtoahpa; testing: gtlab, begge treng fleire CPU-ar
* NDS x 17 (gtoahpa + gtweb)   -> alle på satni.uit.no
* konteaksta x 2 (gtoahpa + gtlab) -> gtoahpa
* spellerserver x 2 (xserve) -> divvun.uit.no
* grammatikkontrollserver (gtweb) -> divvun.uit.no
* termwiki (satni.uit.no) - ok
* satni.org (satni.uit.no) - ok
* serving av nettsider x 4 (xserve) -> til ulike serverar avhengig av domene(?)
* bygging av nettsider x 4 (xserve) (cpu-intensiv) - ok (men leggja til svn-repo av html som cache mellom bygginga og servinga?)
* jabber (xserve) -> divvun.uit.no
* bugzilla (xserve) -> divvun.uit.no
* Korp x 6 (gtweb) - ok
* gïelese (gtweb) - ok
* Jorgal/MT-testing/Apertium x 2 (gtweb) - ok
* cgi-bin (morfologisk analyse & generering) x 1 (per session) (gtweb) - ok
* svn (gtsvn) - ok
* git (gtsvn) - ok


## Planlagt/i kjømda for mai 2018 og framover (endringa er undervegs)
* oppdateringsserver/nedlasting for Páhka -> divvun.uit.no
* REST -> virtuelt domene api.giella.uit.no mappa til  divvun.uit.no
* byggjetenester for produkta våre (?) -> xserve
* byggje fst-ar -> xserve
* automatiserte oppdateringstenester (devops) -> xserve
** nøyaktig innhald er enno ikkje spesifisert
** mobilappar, tastatur, stavekontrollar, grammatikkontrollar, ordbøker, ...
** oppdaterte nettenester: nettstavekontroll, nettgrammatikkontroll, nettordbøker, ...
** automatisert testing og tilbakemelding


----


#  Status for servarmigrasjon


## divvun.uit.no
###  4.9.18
* Problem: få stavekontrollserver til å fungere med redirection fra port til sti
* Løsning: bruke grammatikkontrollserveren som Kevin har laget, men med helt grunnleggende oppsett.


## gtsvn og gtsvn-01
###  4.9.18
* Status
** Ikke flyttet
* Vurdering
** Problem: Diskplass for svn
** Vi har i dag 493 GB for gtsvn, der 340 GB er heimekatalogar
   og 80 GB er svn-repositorium.
   Vi får 3 TB til nye gtsvn-01.
* **Tidsplan**: tbw.


Arbeidsgang
* Trinn 0: Få 1 TB på gtsvn-01 (**Trond, Sjur**)
* Trinn 1: flytta alle repoar (git og svn) over til gtsvn-01 (**Børre**)
* Trinn 2: byta dns på gtsvn (til gtsvn-gml) og gtsvn-01 (til gtsvn, med alias victorio?) (**Børre**)
** hugs å oppdatera export-sti for heimekatalogar på andre maskiner
* Trinn 3: flytta alle heimekatalogane frå gtsvn-gml til gtlab når gtlab er klar for det
* Trinn 4: slå av og avslutta gtsvn-gml


## gtweb og gtweb-01


###  29.7.19
* Alle NDS-instanser ==> done til gtdict
* Alle Korp-instanser ==> done til gtweb-01
* gïelese ==> done til gtweb-01
* Jorgal/MT-testing/Apertium ==> done til gtweb-01
* cgi-bin (morfologisk analyse & generering) ==> done til gtweb-01


* gtweb-migrasjon til gtoahpa-01 er gjennomfort
* **Tidsplan**: loggfiler skal lagres under svn og gtweb skal slettes i slutten av juli/begynnelsen av august


## gtlab DONE
###  29.7.19
* Oppgradert med følgende:
** CPU: 8
** Minne: 16GB
** OS: Fedora 28


## gtoahpa og gtoahpa-01 DONE


###  29.7.19
* Oahpa-instanser som vi har bestemt å overføre:
** sme_oahpa  ==> done
** sma_oahpa  ==> done
** sms_oahpa  ==> done
** sjd_oahpa  ==> done
** smn_oahpa  ==> done
** est_oahpa  ==> done
** vro_oahpa  ==> done
** fkv_oahpa  ==> done
** myv_oahpa  ==> done
** crk_oahpa  ==> done
* Andre tjenester:
** kuvsje ==> done
** konteaksta ==> done
** sme-NDS ==> done til gtdict
** sma-NDS ==> done til gtdict


* gtoahpa-migrasjon til gtoahpa-01 er gjennomfort, loggfiler er lagret under svn og gtoahpa er slettet


## gtdict DONE
* Alle NDS-instanser er overført her


## satni.uit.no DONE
###  29.7.19
* Oppgradert
* alle NDS-instanser er på gtdict
* andre dicts som var på gtweb er på gtweb-01


----


# Kravspesifikasjon for nye serverar


Dette er kravspesifikasjonen.


##  Hostnavn: gtsvn.uit.no


* CPU: 1
* MINNE: 8GB
* HD: 200 GB -- Vi vil ha 1 TB. TODO: Diskuter med IT.
* OS: CentOS release 6.9 (Final) - det noverande systemet er ok


Prosessar & tenestar som skal gå på maskina:
* svn
* git


### TODO


Endringar i høve til noverande oppsett
* ta ned tjener for heimekatalogdeling (/export), og flytt brukarkatalogane til gtlab.uit.no
* Brukarkontoar: nokre få service-kontoar for dei relevante tenestene (helst fra AD, med sudo-rettigheter)
** for Børre (bga001), Chiara (car010), Ciprian (cge002), Trond (ttr000)
* flytt alle andre brukarkontoar til gtlab
----


##  Hostnavn: gtoahpa.uit.no
* CPU: 2
* MINNE 8GB
* OS: CentOS release 6.9 (Final)
* Brukarkontoar: sjå TODO


Prosessar & tenestar på maskina:
* oahpa, konteaksta,
* NDS for sme, sma


### TODO


Endringar i høve til noverande oppsett
* Oppgradere til CentOS 7
* auka CPU-talet frå 2 til 8
* auka RAM frå 8GB til 16GB
* Brukarkontoar: nokre få service-kontoar for dei relevante tenestene (helst fra AD, med sudo-rettigheter)
** for Chiara (car010), Ciprian (cge002), Lene (lanXXX), Trond (ttr000)
* slå av oppkopling til fellesdisk
* Disk (/home): 700GB


----


##  Hostnavn: gtlab.uit.no


### Noverande
* CPU: 2
* MINNE: 8GB
* OS: Fedora 24 (Twenty Four)
* Brukarkontoar: sjå TODO
* Montering av fellesdisk: ja (men sjå TODO)




Prosessar & tenestar på maskina:
* Oahpa for alle dei andre språka
** kor mange språk?
** er det ein eller fleire prosessar pr språk? dvs kor mykje last pr språk?


### TODO


Endringar i høve til noverande oppsett
* auka CPU-talet frå 2 til 16
* auka RAM frå 8GB til 24GB
* Brukarkontoar: vanlige brukerkontoer, arves fra gtsvn
* OS: installer nyaste Fedora
* Disk (/home): flytta fellesdisk frå gtsvn til denne maskina, utan deling til andre maskiner; disk minst 700GB


----


##  Hostnavn: gtweb.uit.no
* CPU: 2
* MINNE: 8GB
* OS: Fedora 26


Prosessar & tenestar på maskina:
* grammatikkontrollserver
* satni.org (delvis)


### TODO


Endringar i høve til noverande oppsett
* auka CPU-talet frå 2 til 8
* auka RAM frå 8GB til 16GB
* Brukarkontoar: nokre få service-kontoar for dei relevante tenestene (helst fra AD, med sudo-rettigheter)
** for Børre (bga001), Chiara (car010), Ciprian (cge002), Lene (lanXXX), Trond (ttr000),
plus alle tjeneser som har home-directories


* slå av oppkopling til fellesdisk
* Disk (/home): 700GB
* OS: endra til CentOS 7


----


##  NY MASKIN: Hostnavn: divvun.uit.no


Ferdig oppsatt "hardware" og OS


Prosessar & tenester på maskina:
* jabber


Prosessar og tenester som skal koma hit:
* Bugzilla
* stavekontrollserverar
* hjemmesider for dicts.uit.no, giellatekno.uit.no, divvun.no
* grammatikkontrollserver


----


##  Hostnavn: satni.uit.no
* CPU: 4
* MINNE: 16GB
* OS: Fedora 28 (Server Edition)




Prosessar & tenestar på maskina:
* satni.org (eXist (Java))
* termwikien (MediaWiki m/Semantic MediaWiki)


Prosessar og tenester som skal koma hit:
* alle NDS-instansane (Flask)


### TODO


Endringar i høve til noverande oppsett:
* auka RAM frå 16GB til 24GB
* OS: endra til CentOS 7
* auka root-disken frå 15GB til 32GB (minst)


### GJORT


* auka CPU-talet frå 1 til 4
* auka RAM frå 4GB til 16GB
* Disk (/home): auka til 700GB
* Brukarkontoar: nokre få service-kontoar for dei relevante tenestene (helst fra AD, med sudo-rettigheter)
** for Børre (bga001), Chiara (car010), Ciprian (cge002), Lene (lanXXX), Trond (ttr000), Tomi (tpiXXX)
* slå av oppkopling til fellesdisk


# Arbeidsgang bestemt på tidlegare møte


NB! Sjå oppdatert liste over arbeid lenger opp i dokumentet, under status.


# IT: setja opp lokale diskar og partisjonar på alle maskiner
# D/GT: kopiera data for NDS m.m. frå export-disk til lokale diskar
# IT+D/GT (koordinert): Switche /home fra export til lokal disk + restart av eksisterende tjenester
# D/GT: sjekk filrettar og tilgang
# D/GT: testa at alle tenester fungerer som dei skal
# IT: ta ned export-disken
# IT: setja opp nye AD-brukarar
# D/GT: flytta NDS og andre tenester frå gamal maskin til ny etter planen over
# IT: oppdatera dns-oppføringane
