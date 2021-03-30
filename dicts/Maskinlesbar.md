

Ordboksmanus må vere tilgjengeleg i digital form, som datafiler. Men det i seg sjølv gjer dei ikkje maskinlesbare.


For å vere maskinlesbart må eit ordboksmanus vere strukturert slik at det for kvar lemmaartikkel (ordboksartikkel) er mogleg å identifisere alle delar automatisk. Eit døme kan vere:


```
lemma: spasere
ordkl: v
overs: walk
eks: Vi spaserte i parken
eksovers: We walked in the park


lemma: svømme
ordkl: v
overs: swim
```


Her er kvar lemmaartikkel identifisert med nylinje, og kvar type informasjon i lemmaartikkelen er identifisert med forklaring til venstre for kolon.


Ein annan type kan vere ein tabell, t.d. i eit rekneark:


|   lemma | ordkl | overs | eks | eksovers
| --- | --- | --- | --- | --- 
|  spasere | v  | walk | Vi spaserte i parken | We walked in the park
|  svømme | v | swim |    |    


Maskinlesbare data kan vere strukturert på mange måtar, det viktige prinsippet er *det som gjeld for eit tilfelle, gjeld for alle*. Viss innhaldet i kolonne 4 er *eksempel* må det **alltid** vere eksempel (der det finst eit eksempel). Viss det ikkje finst eksempel kan vi ikkje t.d. legge til fleire engelske omsetjingar for å spare plass. Vi kan heller ikkje ha grunnform i kolonna til venstre i eitt tilfelle, men t.d. ei bøyingsform der i eit anna tilfelle. Gjer vi det, er ikkje basen vår lenger maskinlesbar.


Maskinlesbare data bør ikkje innehalde formattering som *kursiv* eller **halvfeit**. Dette er slikt som gjer det lettare å lese for menneske, men ikkje lettare å lese for maskiner. Dessutan veit vi ikkje kva *kursiv* betyr. Kanskje står både ordklassemarkering og eksempel i kursiv? Korleis veit maskina så kva som er kva? Av dette følgjer det at vi helst ikkje bør bruke program som AbiWord, Microsoft Word eller OpenOffice Writer til ordboksmanus. Derimot er rekneark som Eccel, Lotus, OpenOffice Calc eller Numbers godt eigna til jobben, *så lenge vi klarer å ha ein og same kategori i kvar kolonne*.


Det er også mogleg å bruke XML (t.d. med XML-redigeringsprogram), eller eigne ordboksredigeringsprogram. 


[Liste over ordboksredigeringsprogram](http://en.wikipedia.org/wiki/Dictionary_writing_system)








