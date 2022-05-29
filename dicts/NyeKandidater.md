# Arbeidsmåte, 

eksempel nobsme


#  Arbeid i inc/kandidatar.csv


Legg til PoS, restriksjon, oversetting, eksempelsetning, oversetting av eksempelsetning. 
Viktig at alle disse linjene har fem underscore.


Restriksjon skrives i parantes for å gjøre csv-lista mer lesbar.


Eksempelsetning bør være en evt. forkorta versjon av setning funnet i Korp eller på internett.


Man kan godt hoppe over ord i lista.


#  Lage xml-fil med de nye ordene og fjern dem fra inc/kandidatar.csv

Med utgangspunkt i dicts/nobsme/ katalogen, gjør disse kommandoene:


```
grep '_.*_.*_.*_.*_' inc/kandidatar.csv |grep -v '#' > inc/nyeord.csv

grep '#' inc/kandidatar.csv > inc/nyekandidatar.csv

grep -v '_.*_.*_.*_.*_' inc/kandidatar.csv |grep -v '#'>> inc/
nyekandidatar.csv

mv inc/nyekandidatar.csv inc/kandidatar.csv

cat inc/nyeord.csv | perl scripts/csv2xml_with_re_xg.pl >> inc/nyeord.xml
```

Merk at perlfila i `scripts/` kan ha andre navn, f.eks. `c2x.pl` eller lignende


#  Rediger inc/nyeord.xml

see `inc/nyeord.xml` (eller tilsvarende fil med kandidater)

Parantes rundt restriksjon skal fjernes (søk erstatt).

Sjekk om PoS må redigeres for oversettingene.

Samme lemma med ny oversetting: rediger slik at det blir en `<lg>` med to `<mg>`:

```
   <e>
      <lg>
         <l pos="N">test</l>
      </lg>
      <mg>
         <tg xml:lang="sme">
            <re>om test</re>
            <t pos="N">geahččaleapmi</t>
            <t pos="N">iskkus</t>
         </tg>
      </mg>
   </e>                                       <== fjernes
   <e>                                        <== fjernes
      <lg>                                    <== fjernes
         <l pos="N">test</l>                  <== fjernes
      </lg>                                   <== fjernes
      <mg>
         <tg xml:lang="sme">
            <re>om prøvetaking</re>
            <t pos="N">iskkus</t>
         </tg>
      </mg>
   </e>
```


**Resultatet blir slik:**


```
   <e>
      <lg>
         <l pos="N">test</l>
      </lg>
      <mg>
         <tg xml:lang="sme">
            <re>om test</re>
            <t pos="N">geahččaleapmi</t>
            <t pos="N">iskkus</t>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="sme">
            <re>om prøvetaking</re>
            <t pos="N">iskkus</t>
         </tg>
      </mg>
   </e>
```






