# Versjonskontroll


Nokre punkt om versjonskontroll:


* tek vare på historia (alle versjonane)
* det blir ei tidsmaskin - det er alltid mogleg å angra seg, og gå tilbake til fortida (framtida er det enno litt vanskeleg å gjera noko med)
* flettar av seg sjølv i hop dine og mine endringar
* heile historia ligg på éi datamaskin
* alle hentar sin eigen kopi derifrå (det var det vi gjorde i går)
* vi endrar på ei fil ...
* ... og sender endringane tilbake til sentralen


[Bilete: Lene sjekkar inn og Maja oppdaterer](images/svn-server-client.png)


* og sentralen (gtsvn) sender ut endringane til alle andre -
  *når dei ber om det!*
* programmet vi bruker flettar i hop mine og dine endringar - så lenge det er
  rein tekst, og vi ikkje har endra på **same** line
* har to personar endra på same line, blir det **konflikt**, dvs at då klarar ikkje datamaskina lengre å vita om det er di eller mi endring som gjeld; slike konfliktar må løysast manuelt: eg må seia om eg vil ha mine eller dine (eller ein kombinasjon) endringar


Derfor:
* oppdater ofte
* oppdater alltid før du sjekkar inn
* sjekk inn ofte - mange endringar (som du får om du sjekkar inn sjeldan) fører lettare til konflikt


Viktige grunnreglar:
* vi prøver å halda koden "rein" - dvs at koden til ei kvar til skal kunna omformast automatisk til eit dataprogram, til ordbøker, til oahpa-materiale, til ein stavekontroll, osb.
* det betyr at endringar som øydelegg koden ikkje kan aksepterast
* det handlar om kvalitetssikring
* ikkje alle kan få rett til å senda inn endringane sine direkte
* til å byrja med må de i staden senda inn ei "bot" ("patch"), dvs ei fil som innehelding endringane du har gjort; det er enkelt å laga ei slik bot med TortoiseSVN
* etter kvart som bøtene som kjem inn blir betre og reinare, kan folk få direkte skrivetilgang, men ikkje før


# Korleis lagar vi den riktige ordboka?


[Bilete: Ciprian lagar ordbok](images/svn-server-client-with-prod.png)


Desse filene som vi arbeider på er "råfiler", det er det vi byggjer ordbøkene av - men dei *er ikkje* sjølve ordboka som du kan slå opp i og søkja i. Ordboka er det Ciprian som lagar (eller nokon annan).


# Steg-for-steg-oppskrift


1. oppdater svn
1. rediger fila
1. lagra fila
1. oppdater svn
1. lag ein lapp ("patch")
1. send inn lappen til feedback@divvun.no eller giellatekno@hum.uit.no


## Leggja til nytt ord


1. klikk på "e" i lista øverst
1. klikk på "Insert before" eller "Insert after"
1. trykk retur/linjeskift
1. skriv inn oppslagsord + ordklasse
1. trykk TAB
1. skriv inn omsetjing + ordklasse
1. lagre
