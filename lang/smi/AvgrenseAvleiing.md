Avgrense avleiing
=========

Sjå [møtedokumentet](https://divvungiellatekno.github.io/giellalt.uit.no/admin/linguists/200423_AvgrenseAvleiing.html) (frå 23.4. 2020)


Her held vi fram frå møtet:


# Konklusjon frå møtet
* Vi skal endre +Comp og +Superl til +DerN+Der/Comp+A og +DerN+Der/Superl+A (nummeret på DerN må vi sjå på)
** dette medfører endringer i filene for (signer når det er gjort)
*** NDS
*** Apertium
*** Gramchecker?
*** cgi paradigmegenerator
*** andre?
* Vi bør observere og deretter forbetre 12345-grammatikken, og evt andre begrensninger
* måtar å avgrensa derivasjonane på:
** Bare for normativ HFST: ved hjelp av Der12345-grammatikken
** For all analyse/generering: ved hjelp av fortsettingsleksikoner
** For all analyse/generering: ved hjelp av diakritiske flagg som også fungerer på desc (Px er løst slik)
** Leksikalisere selve derivasjonen, feks. buoremusvuohta
** Leksikalisere derivasjoner som er utgangspunkt for nye derivasjoner
* I smj endrer vi slik at på -dibme og -ahtes ikke får Comp og Superl (ahtes skal få nummer likt eller etter Comp/Superl)


# Steg framover


1. Legge Der/ til Comp/Superl
1. Deretter dei andre stega ovafor


## Derivasjoner som vi bør se på
###  Caritiv med komparativ, når brukes det?
 
I korp finnes noen få reelle eksempler (her trenges bedre disambiguering), så vi kunne ihvertfall begrense til bare leksikaliserte -heapme:

* [Korpsøk sme -heapme Comp](http://gtweb.uit.no/korp/#?stats_reduce=word&cqp=%5Bmsd%20_%3D%20%22Comp%22%20%26%20lemma%20%26%3D%20%22heapme%22%5D&search_tab=1&sort=keyword&hpp=1000&search=cqp)
* [Korpsøk sme -heapme Superl|http://gtweb.uit.no/korp/#?stats_reduce=word&cqp=%5Bmsd%20_%3D%20%22Superl%22%20%26%20lemma%20%26%3D%20%22heapme%22%5D&search_tab=1&sort=keyword&hpp=1000&search=cqp
* Her er det meste ikke komperlativ. Her trenges god disambiguering]
* Eksempler på bruk: 
** Geahnohat bealli dán riiddus lea ge eahpitkeahttá palestiinnálaččat.
** gutneheappo mielkkeheabbon návccaheappot


## Logg over hva som blir gjort, med dato




