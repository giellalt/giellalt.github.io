Cg-plan
=======

Dette dokumentet skisserer eit oppsett for CG-basert MT for sme-nob.


# Skjematisk oversyn


1. Analyse: 
	1. sme hfst-basert gt-pipeline til og med dependens
1. Transfer: 
	1. leksikalsk ...  (kjem)
	1. grammatisk ...  (kjem)
1. Generering: (kjem)


## Dokumentasjon


* [MT forklaring](MTForklaring.html)
* [MT Dependency](MTDependency.html)


## Filstruktur


### Analyse: sme
Vanlege filer frå giella-infrastrukturen
Viss vi evt. skal ha spesielle versjonar må dei ned i tools/mt.


### Transfer


Lage ny mappe:


`sme/tools/mt/cgbased` (evt. eit anna namn).


Filene som skal inn her gjev vi namn frå Eckhard sitt oppsett.


### Generering


Her har vi eit par alternativ:


	1. Hente inn nob direkte frå Apertium til tools/mt/cgmt
	1. Hente nob frå apertium til `external-langs`, på linje med `spa` og `nno`. 
	1. Hente fst frå Ordbanken (jf. nno, og jf. mappa obt i langs/nob)
	1. bruke langs/nob


Det beste er sannsynlegvis (2), men vi kan evt. eksperimentere med nokre av dei andre alternativa også.


## Taggar


Det enklaste vil vere å bruke giella-taggar og ikkje Apertium-taggar. Viss vi så skal ha nob frå apertium vil vi reversere mekanismene i mt/tags.












