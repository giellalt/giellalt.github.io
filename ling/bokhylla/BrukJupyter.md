
Dokumentasjon for bruk av Bokhylla som korpus, med hjelp av Jupyter.

* [Nasjonalbiblioteket sin dokumentasjon](https://nbviewer.jupyter.org/github/DH-LAB-NB/DHLAB/blob/master/DHLAB_ved_Nasjonalbiblioteket.ipynb)
* [Installering av Jupyter](https://realpython.com/jupyter-notebook-introduction/)

# Installering

Dette er våre notatar, sjå også Jupyter sine eigne notatar (over).

* Det du trenger for å kjøre jupyter:
**python3, som du kanskje har frå før (viss ikkje installer den, t.d. frå Anaconda:
** [Anaconda](https://www.datacamp.com/community/tutorials/installing-anaconda-mac-os-x) (en pythondistribusjon)
** Deretter jupyter, installert med desse to kommandoane: \\
python3 -m pip setuptools \\
python3 -m pip install jupyter
* Start deretter jupyter, i terminalen: \\
jupyter notebook

Merk at det øverst til høgre i sida du får i nettlesaren skal stå **Python3**.

# Lars Johnsen sitt seminar

[https://github.com/Yoonsen/Seminar_NB_september_2019]

Døme:

I denne mappa, opme fila:

`01 Bygg Korpus med konkordans`

Finne (importere) bokhylla:

```python
import dhlab.nbtext as nb
from dhlab.module_update import css
%matplotlib inline
```

Definere korpus:

```python
korpusFriis = nb.book_corpus(period=(1820, 1948), lang='sme', limit=1000000000)
```

Lagre dette korpuset

```
nb.save_frame_to_excel(korpusFriis, 'korpusFriis.xls')
```

Rediger denne fila (t.d. ved å fjerne irrelevante bøker), eller berre spar henne for seinare referanse.

Viss neste sesjon startar på nytt, må vi importere bokhylla på nytt (sjå ovafor).

Deretter last korus  inn att frå bokhylla med hjelp av (den redigerte) xls-fila:

```python
nb.restore_metadata_from_excel("korpusFriis.xls")
```

Telje talet på ord i korpus:

```python
nb.aggregate_urns(nb.pure_urn(korpus))
```

Søke i bokhylla som korpus:

```python
nb.urn_concordance(word = 'giella', urns = korpusFriis, before = 10, after = 10, size = 20)
```

Lemma
ID
Eng Gloss
POS
Level
Word source
Ex. ID
Form
Analysis
Example Sentence
Translation
Reference
Topic(s)

----

Og i eksemplet med sami_count (telling for hele korpuset) må den gjøres om til dataramme først, i og med det er et Counter-object (en dict med ekstra funksjonalitet - fin å telle tekst med generelt):

sami_count = nb.frame(sami_count)   # nb.frame() er en wrapper for pandas-funksjonalitet med litt ekstra...

så kan det summeres:

sami_count.sum()
Fra: Lars Johnsen
Sendt: torsdag 17. oktober 2019 00.20.30
Til: Trond Trosterud
Kopi: Chiara Argese
Emne: SV: Oppfølgjing av jupyter for Nasjonalbiblioteket

Hei Trond og Chiara

Ja, gode spørsmål. Ja, gode spørsmål. Fravær av dokumentasjon skyldes først og fremst voksesmerter, men det kan være lurt å se på <https://nbviewer.jupyter.org/github/DH-LAB-NB/DHLAB/blob/master/DHLAB_ved_Nasjonalbiblioteket.ipynb>, som har eksempler og utgjør en begynnelse på dokumentasjonen.

For korpus har mange hatt behov for å redigere eksternt i for eksempel excel. Her er paret:

```python
nb.save_frame_to_excel(korpus, 'korpus.xls')
```

Rediger fila i excel og last inn igjen:

```python
nb.restore_metadata_from_excel("korpus.xls")
```

Lagringskommandoen sikrer først og fremst at 'korpus.xls' ikke blir skrevet over om den allerede fins. Surt å miste to dagers korpus-redigering! Viktig at kommandoen ikke utføres om det kjøres en "run all" på alle cellene og korpuset finnes under filnavnet.

For å telle antall ord er det to måter, avhengig av størrelsen. Hvis korpus er under 300 urner bare kjør den her:

```python
nb.aggregate_urns(nb.pure_urn(korpus))
```

Kommandoen nb.pure_urn(....) peller vanligvis alt av URN-referanser fra en tekst, dict, panda struktur (urn i første kolonne). Det er også kommandoer for å hente URN-er/korups fra word- tekstfil også. Så et tekstdokument kan for eksempel limes inn som argument.

Er det over 3-400 bør det telles i 300 bolker i en loop og så legges sammen lokalt, som her (loopen ble laget sammen med Børre i Turku):

```python
from collections import Counter
step =300
sami_count = Counter()
for i in range(0, len(urn), step):
    print(i)
    sami_count.update(nb.aggregate_urns(urn[i:i+step]))
```

Så kan du bruke panda-kommando på sami_count:

```python
sami_count.sum()
```

Alternativt, men det tar noe lenger tid, kan du laste ned alle korpusfilene og legge dem i en pandas dataramme:

```python
dok_term_matrise = nb.get_corpus_text(nb.pure_urn(korpus)
```

for sortering på første kolonne (kan velges - bruk shift-tab i notebook f.eks. for å se parametrene)

```python
nb.frame_sort(dok_term_matrise)
```

dok_term_matrise inneholder frekvenser for alle ordene fordelt på hver bok i korpuset.

For å hente inn et spesifikt korpus som korpusBR, se over, eller send ny mail!

Nye kommandoer og hjelpekommandoer kan du lage som du vil egentlig. Mesteparten av kommandoene går direkte på API-et, men noen ligger litt høyere opp. Du kan studere filene i nbtext, nbtokenizer, token_map med (klipp og lim inn det under)

```python
import dhlab.module_update as mu
mu.update('nbtext') # laster ned nbtext.py
mu.update('nbtokenizer') # tokenisator for norsk
mu.update('token_map') # for å gjøre navnebehandling
```

Håper det her hjelper.

Legger ved bilde fra samisk seminar sist torsdag, generert med API-et fra Giellatekno og frekvensanalyse fra API-et med kommandoer som over, ett samisk ord i ganske mange varianter (får latin til å blekne!) - størrelse i ordskyen proporsjonal med frekvensen i korpuset:

Fra: Trond Trosterud <trond.trosterud@uit.no>
Sendt: onsdag 16. oktober 2019 23.30.30
Til: Lars Johnsen
Kopi: Chiara Argese
Emne: Oppfølgjing av jupyter for Nasjonalbiblioteket

Hei, og takk for fin gjennomgang i Tromsø.

Eg ser no gjennom opplegget, og får til å repetere opptil fleire av dei tinga vi gjord. Eg ahr likevel mange spørsmål. Nokre av dei står kanskje i kommandoane vi fekk, andre står ikkje. Det overordna er at det eg manglar er dokumentasjon: Oversikt ov er kva kommandoar som finst, kva vi vkan gjere og kva vi ikkje dkan gjere.

Til dømes:

Eg opnet jupyter, og hentar inn heile nb.
med kva kommando?

```python
import dhlab.nbtext as nb
from dhlab.module_update import css
%matplotlib inline
```

Eg definerer eit korpus

```python
korpusFriis = nb.book_corpus(period=(1820, 1948), lang='sme', limit=1000000000)
```

Eg lagrar dette korpuset (dvs. lista over filer)
(kommando?)

Eg redigerer dette korpuset lokalt (fjernar irrelevante bøker) (vil eg tru)

Eg opnar korpuset (dvs. lista over foler som utgjer dette korpuset)
(og denne kommandoen finn eg ikkje)

Eg vil telje kor mange ord det er i korpuset
(og kva er kommandoen for det?

Eg vil la ein kwic-konkordans for det

```python
nb.urn_concordance(word = 'giella', urns = korpus, before = 10, after = 10, size = 20)
```

Viss eg vil ha det for eit spesifikt korpus, gjer eg:

```python
nb.urn_concordance(word = 'go', urns = korpusBR, before = 10, after = 10, size = 200)
```

Men korleis får eg kalt korpusBR inn i minnet att?

For å generalisere alt dette:

Det eg eigentleg vil ha er ei forklaring av systemet ´+ ei liste over moglege kommandoar, eller i alle fall om ei liste over mange av dei.

Eg vil gjerne ha nokon dokumentasjon over prinsippa for å lage nye kommantoar.

Vi prøver å lage ein dokumentasjon for dette slik at det skal gå an å bruke dette verktyet.

Trond.
