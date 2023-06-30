
Ordboksarbeid smesmj 
====================

Her ser vi på arbeid for sommaren 2023


1. Dokumenter prosedyre for bruk for nye språkpar (?)
2. Arbeide med smesmj

# Dokumentasjon

Ha dokumentasjon i mente, skriv gjerne ein stad på [denne sida](https://giellalt.github.io/dicts/dicts.html)


# smesmj

Filosofien er at pivotmetoden gjev massiv overgenerering, vi vil kombinere denne metoden med andre metodar. Her ser vi på tre av dei.


## Pivotliste og giza

Pivotpar: 1 sme mot mange smj:  
a = {b1, ....bn}

Giza++: 
I setningar som har a er det så og så mange setningar med bi, bj, ...
Mål: Kombiner pivotliste og giza.


## Pivotliste og tmx-liste

mat/smesmj-korpushits

Ta tmx-liste og køyr pivot-para mot dei.


## Pivotliste og dependensanalyse


Bruk Anders sitt skript som utgangspunkt, men med nytt innhald:

- Ta dependenskorpora for sme og smj frå Korp (gtweb)
- Ta verba i apertium-sme-smj-sme-smj.dix
	- For kvart verb i sme, smj, finn substantiv som har det verbet som mor, ordna etter funksjon
	- for kvart verbpar og kvart substantivpar i ordbok/generert/ob.tsv: sjekk om substantivparet i ob.tsv også finst som dep-par


Mål: Kombiner pivotliste og dep-par-liste.




