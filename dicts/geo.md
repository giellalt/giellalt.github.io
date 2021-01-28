

GEO er den geografiske automaten vår.


# Filer


Kjeldefilene ligg i `$GTLANG/words/dicts/smi/geo`, online [her](https://gtsvn.uit.no/langtech/trunk/words/dicts/smi/geo/)


Dei operative filene er `src/Makefile` og `src/geo.lexc`. Ved å
stå i `src/` er det mogleg å kompilere `bin/geo.fst` med å skrive *make*. Den resulterande `geo.fst` må deretter kopierast til opt-katalogen på 
victorio (i smi/common/bin) for å vere operativ. Merk at geo refererer til 
ei spellrelax-fil, for å godta at brukarane skriv inn namn utan stor forbokstav.


# Planar


Geo skal vere tilgjengeleg i ulike format.


## Geo i apertium-format


Vi vil ha Geo i apertium-format. 


### Filformat


* smi/geo/tmp_fellesliste.xml - her er navneparene fra geo.lexc og smenob.xml og smanob.xml. Navneparene er unifiserte og korrigerte.


* Den heter tmp_ fordi den ennå ikke er unifisert, dvs. at alle like entryer skal slås sammen, slik at de får flere <mg>. Etter at dette er gjort, kan tmp_ stykes.
* Fila inneholder som entry stedsnavn på flere samiske språk, og alle de samiske språkene skal i prinsippet ha alle oversettelser til andre aktuelle språk. F.eks.


```    <e>
      <lg>
         <l pos="prop" xml:lang="smn">Aanaar</l>
      </lg>
      <mg>
         <tg>
            <t pos="prop" xml:lang="swe" reg="Finland" src="x">Enare</t>
            <t pos="prop" xml:lang="fin">Inari</t>
         </tg>
      </mg>
   </e>
   <e>
      <lg>
         <l pos="prop" xml:lang="sme">Anár</l>
      </lg>
      <mg>
         <tg>
            <t pos="prop" xml:lang="swe" reg="Finland" src="PS,SA">Enare</t>
            <t pos="prop" xml:lang="fin">Inari</t>
         </tg>
      </mg>
   </e>
```


* src viser til kilden for dette språkparet - kilden for Anár - Enare er PS og SA. Inari er den finske versjonen av Enare.


### Hvordan det skal fungere
* valg av språk: samisk (alle samiske språk) <-> andre språk. F.eks. så vil søkene av Aanaar og Enare se slik ut for brukeren, med språkbenevningen i annen font/format. 
** Aanaar: (Finland) Enare svensk, Inari finsk 
** Enare (Finland): Anár nordsamisk, Aanaar inarisamisk
* Tanken er at man har med norsk i slike tilfeller bare når norsk er annerledes enn de andre språkene. Da slipper man å duplisere oversettelsene for å legge til norsk språktag, og presentasjonen til brukeren blir ryddigere. Vi satser på at vi har intelligente brukere:


















