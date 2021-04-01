Oversikt
========

Divvun har delt den opprinnelige siten sin i to byggbare deler, dvs. to
forrest siter.

-   $GTHOME/xtdoc/sd
-   $GTHOME/xtdoc/techdoc

Dette ble gjort fordi deler av siten skulle oversettes til sju språk,
mens store deler var og skulle være enspråklig.

Begge sitene blir bygget med skriptet
`$GTHOME/gt/script/static-divvun.py`.

Kommandoen  
`             static-divvun.py --sitehome $GTHOME/xtdoc/sd --destination sd@divvun.no:Sites/ fi             no se smj sma sv en             `  
lager en site med sju forskjellige metaspråk og sørger for å koble filer
med likt metaspråk og innholdsspråk sammen.

Kommandoen  
`             static-divvun.py --sitehome $GTHOME/xtdoc/techdoc --destination sd@divvun.no:Sites/             en             `  
lager en site med engelsk som metaspråk.

Disse to sitene ser ut som de er samme forrest site ved at de har samme
layout og ved å samstemme tabs.xml-filene for de to sitene.

Fremgangsmåte
=============

Ny site-mappe
-------------

Vi begynte med å lage en ny mappe, `techdoc`, som lå parallelt med sd.
Deretter kjørte vi `forrest seed` i den mappa for å lage rammeverket for
en ny forrest site. Deretter ble alt innholdet som forrest site laget i
`techdoc/src/documentation/content/xdocs/` slettet (rm -rf
techdoc/src/documentation/content/xdocs/\*)

Felles styling og plugins
-------------------------

For å få samme styling og oppsett på sd og techdoc ble følgende mapper

-   plugins
-   src/documentation/classes
-   src/documentation/resources
-   src/documentation/skins
-   src/documentation/translations
-   src/documentation/content/xdocs/images

og disse filene:

-   forrest.properties
-   forrest.properties.xml
-   src/documentation/sitemap.xmap

slettet fra techdoc. Deretter ble disse symlinket inn til techdoc fra
sd.

Flytte mapper fra sd til techdoc
--------------------------------

Det ble bestemt at alt som var "techdoc" skulle flyttes til
techdoc-siten. Det som ble flyttet var disse mappene:

-   **doc:**  
    symlink til `$GTHOME/techdoc`
-   **ped:**  
    symlink til `$GTHOME/ped/doc`
-   **ttsdoc:**  
    symlink til `$GTHOME/tts/doc/`
-   **wordsdoc:**  
    symlink til `$GTHOME/words/doc`

Flytte innhold i `site.xml` og `tabs.xml` fra sd til techdoc
------------------------------------------------------------

Neste steg var å lage en tom fil i
`$GTHOME/xtdoc/techdoc/src/documentation/content/xdocs/site.xml` og
klippe ut alle adresser fra
`$GTHOME/xtdoc/sd/src/documentation/content/xdocs/site.xml` som hadde
med mappene ovenfor å gjøre og klippe dem inn i den nye fila.

Det samme ble gjort for
`$GTHOME/xtdoc/techdoc/src/documentation/content/xdocs/tabs.xml`.

Støtte for oversettelser i forrest
==================================

forrest støtter (i prinsippet) oversettelse av «metaspråk», dvs. menyen
til venstre, tab-rekka og annet «systeminnhold» og av «artikler»
(forrest-xml-filer og .jspwiki-filer).

Oversettelse av «artikler»
--------------------------

En artikkel kan være enspråklig. I forrest markerer man dette ved å
bruke bare `.xml` som suffiks.

Om man vil ha en artikkel som skifter språk etter som man skifter
metaspråk bruker man suffikset `.$LANG.xml`.

### Eksempel

En artikkel finnes på alle språkene vi støtter. De har disse filnavnene:

-   abba.en.xml
-   abba.fi.xml
-   abba.no.xml
-   abba.se.xml
-   abba.sma.xml
-   abba.smj.xml
-   abba.sv.xml

Vi har sørget for at forrest vet om dem ved å legge inn en peker til den
i site.xml:  
`<abba description="Abba rules!" href="abba.html" label="Abba, the swedish pop band"/>`.

Alt ettersom hvilket språk som er valgt, vil den artikkelen som hører
til det språket vises.

### Oversettelse av artikler i praksis

Dersom man av en eller grunn ikke vil oversette en artikkel til alle
metaspråkene man bygger siten for *må* man likevel sørge for at man har
en «fil» for hvert språk.  
  
Om vi har en artikkel som er på engelsk og nordsamisk, f.eks.
`julenissen.en.xml` og `julenissen.se.xml` og vi ikke har tenkt å
oversette den til de andre språkene vi støtter så lager vi en symlink
til en av disse artiklene for de andre språkene. Resultatet er at vi har
de to filene `julenissen.en.xml` og `julenissen.se.xml` og symlinkene
`julenissen.fi.xml`, `julenissen.nb.xml`, `julenissen.sma.xml`,
`julenissen.smj.xml` og `julenissen.sv.xml` som peker til en av de to
eksisterende filene. Om man ikke gjør dette vil man få en *«broken
link»*-melding fra forrest.

Oversettelse av metaspråk
-------------------------

Filene nedenfor har blitt oversatt for å støtte
`fi no se smj sma sv en`.

-   **$GTHOME/sd/src/documentation/translations/tabs\_$LANG.xml:**  
    oversettelser for
    $GTHOME/sd/src/documentation/content/xdocs/tabs.xml

    Hver «key» i tabs\_$LANG.xml tilsvarer en «id» i tabs.xml (og alle
    tabs-frag.xml-filene vi har). Man må manuelt legge alle «id» man vil
    ha oversettelse for inn i tabs\_$LANG.xml-filene.

-   **$GTHOME/sd/src/documentation/translations/menu\_$LANG.xml:**  
    oversettelser for
    $GTHOME/sd/src/documentation/content/xdocs/site.xml

    Hver «key» i menu\_$LANG.xml tilsvarer en «label» i site.xml (og
    alle site-frag.xml-filene vi har). Man må manuelt legge alle «label»
    man vil ha oversettelse for inn i menu\_$LANG.xml-filene.

-   **$GTHOME/sd/src/documentation/translations/ContractsMessages\_$LANG.xml:**  
    oversettelser for "systemmeldinger" i forrest

tabs-id-er, site-label-tekst og systemmeldinger uten oversettelse i
disse filene blir brukte slik som de står i `tabs.xml`, `site.xml` og
forrest-koden.

Bygging av en oversatt site
===========================

forrest har som nevnt, i prinsippet, støtte for full i18n. I praksis
behøver den litt krykker når man bygger statiske sider, i form av
skriptet `static-divvun.py`. (Dersom man kjører dynamisk med
`forrest run` trengs det ingen krykker, men da bør man slå på støtte for
i18n i `forrest.properties` midlertidig så lenge man kjører
`forrest run`.)

Dette skriptet sørger for at siten blir bygd på alle språk, at linker
til de forskjellige språkene blir lagt inn og at alle filene blir
kopiert til korrekt på plass på den offentlige siten.
