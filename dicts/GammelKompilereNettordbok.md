#  Obsolete (old infra)
Se denne siden med nye tagger: [FSTer i nyinfra](/lang//sme/KompilereFST.html). +Use/NVD er nå +Use/NGminip


# Ordbok-fst-er


Til dict-sma/sme.fst brukes sma.fst og sme.fst med noen modifiseringer av tagger. `dict-sma/sme.fst` er ikke definerte i Makefile og derfor kompilerer man en `sma.fst/sme.fst` som man skifter navn på når man kopierer over i /opt/


#  Spesielt for sma


isma-dict.fst er kompilert med følgende prosedyre:


i gt/sma


svn up -r 59359


deretter i denne fila:


`common/src/tag-not-save-but-oahpa.regex`


kommenter ut noen tagger slik at det blir slik:


%0 (<-) %+Hom1,
%0 (<-) %+Hom2,


#  Felles for sme og sma


Til `isma-dict.fst` og `dict-isme-norm.fst` brukes `isma-norm.fst` og `isme-norm.fst` med noen modifiseringer av tagger. `dict-isme-norm.fst` er definert i Makefile, men man må sikre taggene manuelt. For sørsamisk kompilerer man isma-norm.fst med endring av tagger og endrer så navnet til isma-dict.fst når man kopierer til /opt/




Både `dict-sma/sme.fst` og `dict-isma/isma.fst` skal bli kompilert med tagger som identifiserer homonymer og varianter.
Dessuten vil vi unnlate å presentere visse former i miniparadigmet.


Her er en liste over taggene det gjelder, og filene de er i (utropstegnet viser hvilke tagger du skal kommentere ut):


```
        tag-not-save.regex -
## 0 (<-) %+Use%/NVD,
        remove-variant-homonym-tags.regex
## 0 <- %+Hom1,
## 0 <- %+Hom2,
## 0 <- %+v1,
## 0 <- %+v2,
## 0 <- %+v3,
## 0 <- %+v4,
## 0 <- %+v5,
        0 <- %+Use%/NVD,
        0 <- %+Allegro;


        make-variant-homonym-tags-optional.regex
        0 (<-) %+v5;         # <== NB Flytt semikolon hit!
## 0 (<-) %+Use%/NVD,
## 0 (<-) %+Allegro ;


        tag-not-save-but-oahpa.regex
## 0 (<-) %+Hom1,
## 0 (<-) %+Hom2,
## +N (<-) %+N %+NomAg,
        0 (<-) %+South ,
## 0 (<-) %+G3 ,
        0 (<-) %+G7 ;
```


Taggene nedenfor skal være med i output fra `dict-sma/sme.fst` for å få riktig bøyningsparadigme til homonyme lemmaer. De to øverste gjelder sma, de nederste sme:


```
+Hom1
+Hom2


+G3
+NomAg
+v1
+v2
+v3
+v4
+v5
```


Disse to taggene skal være med i `dict-isme-norm.fst` fordi vi ikke ønsker dem i miniparadigmet:


```
+Allegro
+Use/NVD
```


Alle de nevnte taggene skal være utkommentert i


`gt/common/src/tag-not-save.regex`






Deretter kompileres i gt:


```
make GTLANG=sma
make GTLANG=sme
```




i bin endres navnet på  `isma-norm.fst` til `isma-dict.fst` slik at man også har en
vanlig `isma-norm.fst` for anna bruk.




#  some-ordbok (for sosiale media)


I tillegg, og med samme taggoppsett, kompileres en egen some-sme.fst for #SoMe-ordboka.
Den blir kompilert slik:


Samme taggoppsett som ovafor, men i tillegg kommenteres de første 20 linjene i
`gt/common/src/spellrelax.regex` inn (iPhone keyboard relax og capital for Saami letter..)


Resultatet blir et sett med fst-er som tolererer assi for ášši. Døp om `sme.fst` til `some-sme.fst`
og kopier over til `/opt/smi/sme/bin`. Kommeter deretter ut de 20 linjene og kompiler sme
på nytt (så du får tilbake normale fst-er).






#  Oppsummering, kommandoer for å kopiere på plass




Når alt er sjekka kopierer vi over til opt:


sma:


```
sudo cp sma/bin/sma.fst /opt/smi/sma/bin/dict-sma.fst
sudo cp sma/bin/isma-norm.fst /opt/smi/sma/bin/isma-dict.fst
```


sme, vanlig ordbok (kompilert med vanlig spellrelax):


```
sudo cp sme/bin/sme.fst /opt/smi/sme/bin/dict-sme.fst
sudo cp sme/bin/dict-isme-norm.fst /opt/smi/sme/bin/dict-isme-norm.fst
```


sme, some-ordbok (kompilert med some-spellrelax):
```
sudo cp sme/bin/sme.fst /opt/smi/sme/bin/some-sme.fst
```
