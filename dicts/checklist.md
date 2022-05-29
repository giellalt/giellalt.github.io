# Sjekkliste før ordboka genereres og kompileres

Denne sida viser hvordan vi skal sjekke at ordbøkene er i god stand, teknisk sett. Kommandoene gjelder for alle NDS-ordbøkene.

Ordboka skal være xml-valid. Kommando: 

```
xmllint --valid FIL.xml > /dev/null
```

Det skal ikke være dubletter. Kommando: 

```
cat FIL.xml|grep '<l '| tr '<' '>' | cut -d '>' -f3 |sort | uniq -d
```

Alle lemmaene som skal genereres må ha lemma i norm-fst. Kommando for å sjekke om lemmaene er riktig skrevet og/eller er i FST: 

```
cat FIL.xml|grep '<l '|tr '<' '>'|cut -d '>' -f3|uXNorm|grep '?'
```

Kommando for å sjekke at lemmaet er lemma i LEXC: (kommer)


Sjekk at eksempler har stor forbokstav og punktum: 

```
grep '<x>' FIL.xml |l 
``` 


Sjekke rettskriving i eksempelsetningene. 
Eksempel fra smanob: 

```
grep '<x>' N_smanob.xml |tr '<' '>' | cut -d '>' -f3 |preprocess | usmaNorm | grep '?' |grep -v CLB |l
```

 
Sjekke rettskriving i eksempelsetningene. Eksempel fra nobsma: 

```
grep '<xt>' N_nobsma.xml |tr '<' '>' | cut -d '>' -f3 |preprocess | usmaNorm | grep '?' |grep -v CLB |l
```


Stedsnavn med flere `<mg>` - den vanligste mg bør stå først fordi det er den oversettelsen som brukes i miniparadigmet 


