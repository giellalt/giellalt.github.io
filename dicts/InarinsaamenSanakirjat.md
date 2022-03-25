
# Inarinsaamen sanakirjat


* Sanakirjan url: [saanih.oahpa.no](http://saanih.oahpa.no/)
* Työkansio / Bargokataloga: `giellalt.github.io/dicts/smndict`


##  Hankesuunnitelma / Prošeaktaplána


Tavoitteena on saada sanakirjan korjattu versio valmiiksi joskus.

## Mitä voidaan tehdä

1. Parantaa kattavuutta:
	1. Ajaa taajuuslistat sanakirjan läpi (**smn** ja **fin**)
	2. Analysoida tekstejä, tehdä tekstikohtaisia taajuuslistoja, lisätä ne (**smn** ja **fin**)
	3. Tarkistaa, että kaikki lemmojen käännökset löytyvät toisesta sanakirjasta (**smn** ja **fin**)	
1. Sanakirjan kirjoitusvirheet
	1. Ajaa lemmat korjausohjelman läpi
	1. Ajaa käännökset korjausohjelman läpi
	1. Ajaa esimerkkilauseet korjausohjelman läpi
	1. Ajaa esimerkkilauseiden käännökset korjausohjelman läpi
2. Laatu: Parantaa tärkeiden sanojen artikkelit
	1. Tarkista apuverbien, postpositioiden, jne. artikkelit
	2. Tarkista tavallisimpien sanojen artikkelit
1. Työ lokien perusteella
	1. Tarkista eniten etsittyjen sanojen artikkelit (`biggies/log
	2. Tarkista eniten ei-löydettyjen sanojen (`False`) artikkelit

## Periaatteet
1. Sekä suomen- että saamenkieliset lemmat pitää kirjoittaa normin mukaan

	
## Työtavat

### Komentorivin komennot

Taajuuslistojen tekeminen:

```
... | sort | uniq -c | sort -nr | ...
```

Taajuuslistojen prosessointi, [smn](https://gtsvn.uit.no/langtech/trunk/words/lists/smn/2021-11-03_smn_lemma.freq), [fin](https://gtsvn.uit.no/langtech/trunk/words/lists/fin/finwp.freq)

smn-sanojen prosessonti:

```
cat ~/main/lists/smn/2021-11-03_smn_lemma.freq | cut -c6-|cut -d" " -f1|...
cat ~/main/lists/smn/2021-11-03_smn_lemma.freq | cut -c6-|grep 'N$'|cut -d" " -f1|...
```

fin-sanojen prosessointi

```
cat ~/main/words/lists/fin/finwp.freq | cut -d'"' | ...
cat ~/main/words/lists/fin/finwp.freq | grep ' N$'|cut -d'"' | ...
```

Sanat lähetetään sitten esim. sanakirjaan:

```
cat ~/main/lists/smn/2021-11-03_smn_lemma.freq | cut -c6-|cut -d" " -f1|smnfin|grep ?|...
cat ~/main/lists/smn/2021-11-03_smn_lemma.freq | cut -c6-|grep 'N$'|cut -d" " -f1|smnfin|grep ?|...
cat ~/main/words/lists/fin/finwp.freq | cut -d'"' -f2|finsmn|grep ?| ...
cat ~/main/words/lists/fin/finwp.freq | grep ' N$'|cut -d'"' -f2|finsmn|grep ?| ...
```

Käännöksen lemmat toisessa sanakirjassa? 

```
cat main/words/dicts/smnfin/src/A_smnfin.xml |grep '</t>'|tr '<' '>'|cut -d">" -f3|grep -v ' '|finsmn|grep +?|...
```

Ajaa lemmat tai käännökset analysaattorin tai korjausohjelman läpi

Ensin, tee käännöslista ( `grep '</t>'`) tai lemmalista  ( `grep '</l>'`) kuten äsken selitetty. NB: Voidaan myös tarkistaa esimerkit (`</x>`) tai esimerkkien käännökset (`</xt>`). Silloin pitää preprosessoida tekstejä (`tr ' ' '\n' | tr -d '[.?]'`).

Sitten korjaat: 

```
... | husmnNorm | grep ? | ...
```

voit myös korjata suoraan:


```
... | hfst-ospell -S -n 5 ~/git/giellalt/lang-smn/tools/spellers/smn.zhfst | ...
```

Analysaoida tekstejä

```
... | tulossa selitys | ...
```

Työskentely lokien kanssa (ks. alhaalla). Tässä haetan tavallisimmat hakusanat:

```
cat loki | grep True | cut -f1 | sort|uniq -c|sort -nr|...
```



## Lokit
- [Osoite](https://gtsvn.uit.no/biggies/trunk/gtdict_logs/)

Lokien sisältö:

1.	Hakusana
2.	`True` tai `False` (haku onnistui tai ei onnistunut)
3.	sanakirjan lemma, johon hakusana viittaa
4.	Käännös
5.	L1
6.	L2
7.	2021-01-01T00:00:15 (vuosi-kuukausi-päivämäärä%tunti:minutti:sekunti)



##  Työtiedostot / Bargofiillat


### Sanakirjan lemmat, jotka puuttuvat FST:s 

(Viimeiset tiedostot löytyvät aina `main/words/dicts/smnfin/inc`(ja finsmn/inc)-hakemistoista.


* [Missing A](https://gtsvn.uit.no/langtech/trunk/words/dicts/smnfin/inc/smnlemma_A.freq)
* [Missing N](https://gtsvn.uit.no/langtech/trunk/words/dicts/smnfin/inc/smnlemma_N.freq)
* [Missing V](https://gtsvn.uit.no/langtech/trunk/words/dicts/smnfin/inc/smnlemma_V.freq)


### Sanakirjan lemmojen paradigmat


(Nämä linkit eivät nyt toimi, korjaus tulossa)

- smnfin-sanakirjan sanat / smnfin-sátnegirjji sánit:
	- Aakkosjärjestyksessä / Alfabehtalaččat
 [A](smndict/gen/adjsmnfintabell.html)  -  
 [N](smndict/gen/nounsmnfintabell.html)  -  
 [V](smndict/gen/verbsmnfintabell.html)
	- Käänteisessä järjestyksessä:
 [A](smndict/gen/adjsmnfintabellrev.html)  -  
 [N](smndict/gen/nounsmnfintabellrev.html)  -  
 [V](smndict/gen/verbsmnfintabellrev.html)
- finsmn-sanakirjan sanat / finsmn-sátnegirjji sánit
	- Aakkosjärjestyksessä / Alfabehtalaččat:
 [A](smndict/gen/adjfinsmntabell.html)  -  
 [N](smndict/gen/nounfinsmntabell.html)  -  
 [V](smndict/gen/verbfinsmntabell.html)
	- Käänteisessä järjestyksessä:
 [A](smndict/gen/adjfinsmntabellrev.html)  -  
 [N](smndict/gen/nounfinsmntabellrev.html)  -  
 [V](smndict/gen/verbfinsmntabellrev.html)




## Tehtävälista / Action points

Tämä on teknisten tehtävien katsaus.


###  Papirordbok

Lag eigen versjon for utskriftsversjon, i smnfin/print/

- Sorter lemma alfabetisk
- Splitt til ei fil per bokstav
- Lag ei indexfil smnfin/print/index.html med lenkjer til alle bokstavar
- Tilleggsformer <nøkkelform>, **seinare**
	- N Sg: +N+Sg+Gen, N Pl: +N+Pl+Gen, A: +A+Attr
	- V: verbs with contlex *3_* shall have +V+Ind+Prs+Sg3
	- V: all others shall have +V+Ind+Prs+Sg1
- Output formats:
	- xml + css = html
	- pdf (to spalter per ark) <==


## Kokoukset / Čoahkkinreferáhtat


- 2016
	- [16.6.](../mt/smesmn/meetings/160602.html)
- 2017
	- [03.11.](smndict/meetings/171103.html)


