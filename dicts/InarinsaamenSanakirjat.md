
# Inarinsaamen sanakirjat


* Sanakirjan url: [http://saanih.oahpa.no/]
* Työkansio / Bargokataloga: `main/techdoc/dicts/smndict`


#  Hankesuunnitelma / Prošeaktaplána


Tavoitteena on saada sanakirjan korjattu versio valmiiksi syksyksi 2016.


#  Työtiedostot / Bargofiillat


## Sanakirjan lemmat, jotka puuttuvat FST:s / 


* [Missing A](smndict/A_missing_nom.txt)
* [Missing N](smndict/N_missing_nom.txt)
* [Missing V](smndict/V_missing_inf.txt)


## Sanakirjan lemmojen paradigmat




* smnfin-sanakirjan sanat / smnfin-sátnegirjji sánit:
** Aakkosjärjestyksessä / Alfabehtalaččat
 [A](smndict/gen/adjsmnfintabell.html)  -  
 [N](smndict/gen/nounsmnfintabell.html)  -  
 [V](smndict/gen/verbsmnfintabell.html)
** Käänteisessä järjestyksessä:
 [A](smndict/gen/adjsmnfintabellrev.html)  -  
 [N](smndict/gen/nounsmnfintabellrev.html)  -  
 [V](smndict/gen/verbsmnfintabellrev.html)
* finsmn-sanakirjan sanat / finsmn-sátnegirjji sánit
** Aakkosjärjestyksessä / Alfabehtalaččat:
 [A](smndict/gen/adjfinsmntabell.html)  -  
 [N](smndict/gen/nounfinsmntabell.html)  -  
 [V](smndict/gen/verbfinsmntabell.html)
** Käänteisessä järjestyksessä:
 [A](smndict/gen/adjfinsmntabellrev.html)  -  
 [N](smndict/gen/nounfinsmntabellrev.html)  -  
 [V](smndict/gen/verbfinsmntabellrev.html)




# Tehtävälista / Action points


##  NDS
* Programmeringsting
** Saami-suoma_smnfin.xml: POS henta frå fst: Cip
** Saami-suoma_smnfin.xml: lemma- i eiga fil
** smnfin: Slå saman <e> som har identisk <l>
** finsmn: Slå saman <e> som har identisk <l> -- DONE
** smnfin: POS split av Saami-suoma.xml (etter ling-sjekk)
* Lingvistisk
** Gå gjennom <e> med mange <mg> i smnfin og finsmn


##  Analog


Lag eigen versjon for utskriftsversjon, i smnfin/print/


* Sorter lemma alfabetisk
* Splitt til ei fil per bokstav
* Lag ei indexfil smnfin/print/index.html med lenkjer til alle bokstavar
* Tilleggsformer <nøkkelform>, **seinare**
** N Sg: +N+Sg+Gen, N Pl: +N+Pl+Gen, A: +A+Attr
** V: verbs with contlex *3_** shall have +V+Ind+Prs+Sg3
** V: all others shall have +V+Ind+Prs+Sg1
* Output formats:
** xml + css = html
** pdf (to spalter per ark) <==


# Kokoukset / Čoahkkinreferáhtat


* 2016
** [16.6.](../mt/smesmn/meetings/160602.html)


* 2017
** [03.11.](smndict/meetings/171103.html)


