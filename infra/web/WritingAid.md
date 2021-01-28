#  Verktøy for forfattere


Dette er et forslag til hva en web-side kunne inneholde, som hjelp for forfattere av tekster på samisk. Også til hjelp for korrekturlesere. Alle verktøyene har vi, men vi må tilrettelegge dem for sluttbrukere på en egen web-side.


Forslaget mitt er at brukeren laster opp sin egen word- eller openOffice fil og får tre filer, som hun kan laste ned i sin maskin. Alternativt kan brukeren kopiere hele sin tekst over i et vindu, og få tre filer.


##  1. fil: Missinglist
Vi tilbyr brukerne den til enhver tid nyeste normative analysatoren.
* Teksten analyseres med sme-norm.fst, og brukeren får missinglist.


```cat userfile | preprocess | usmeNorm | grep "\?" | cut -f1 | sort -u > fil1.txt
```


##  2. fil: Hver setning på ny linje
Brukeren kan lett se om språket er variert, eller om det er tendens til at setningene blir for like.
* Teksten preprosesseres og settes sammen med en setning på hver linje.


```cat userfile | preprocess --abbr=abbr.txt | erstatt alle .!? på begynnelsen av linja med ¢ | tr "\n" " " | tr "¢" "\n" > fil2.txt
```


##  3. fil: Frekvensliste
Brukeren kan vurdere om hun bør variere ordvalget mer.
* Teksten preprosesseres og det lages en frekvensliste. Jeg foreslå i første omgang en ordformsliste, til vi evt er sikker på at den analyserte og disambiguerte lista har god nok kvalitet.


```cat userfile | preprocess --abbr=abbr.txt | erstatt alle store bokstaver med små bokstaver | sort | uniq -c | sort -nr > fil3.txt
```


