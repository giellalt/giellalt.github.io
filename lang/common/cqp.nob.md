

# Avansert søk (CQP) i korpusgrensesnittet Korp




Denne rettleiinga er inspirert av en tilsvarande [dokumentasjon av CQP for finsk](https://www.kielipankki.fi/tuki/korp-edistynyt/), og kan bli brukt til søk i [samisk](http://gtweb.uit.no/korp), [østersjøfinsk](http://gtweb.uit.no/u_korp), [uralsk](http://gtweb.uit.no/u_korp), og [tuvinsk](http://gtweb.uit.no/tyv_korp), Korp, alle utviklet ved UiT. Korp selv er utviklet ved språkbanken i [Göteborg](http://sprakbanken.gu.se/korp). 


Korp har tre søkemåter, **Enkel**, **Utvidet** og **CQP-uttrykk**. Søkemåten **Enkel** søker på ordform. Med **Utvidet** søk er det mulig å bruke søkespråket CQP (Corpus Query Protocol) via et grafisk grensesnitt, og med **CQP-uttrykk** kan brukeren skrive CQP-uttrykk selv. Den enkleste måten å bruke CQP på er å  starte ut med *Utvidet* søk i Korp, og deretter klikke på *CQP-uttrykk*. Søket fra *Utvidet* står da som et utgangspunkt for videre søk i CQP.




# Grunnkomponentene i CQP


I korpuset er hver ordform merka med lemma, ordklasse, grammatiske egenskaper og syntaktisk relasjon (dependens). De ulike delene av analysen har følgende navn:


|   Navn     | Betydning
| --- | --- 
|   word	    | ordforma slik den står i løpende tekst
|  lemma	    | ordets oppslagsform (grunnform)
|  lemmacomp	| oppslagsform med sammensetningsgrense
|  pos       | ordklasse (forkorting for Part Of Speech)
|  msd       | morfosyntaktisk analyse (f.eks. presens, entall, ...)
|  ref       | ordets posisjon i setninga (markert som et tall for 1., 2. ord, osv)
|  dephead   | dependensordets (mornodens) ordenstall
|  dep       | dependensrelasjonen til mornoden (SUBJ→, ←ADVL, osv.)


Med utgangspunkt i **Utvidet** kan du å velge **ordklasse**, **grammatisk analyse** eller **dependensrelasjon**, finne den verdien du vil ha, og velge den. Deretter kan du trykke på **CQP-uttrykk** og finne ut hvordan kategorien du vil bruke blir skrevet i CQP. En oversikt over ordklasser (**pos**) og morfosyntaktiske trekk (**msd**) for hver ordklasse fins her (**LENKE kommer**). 








# Grunnleggende søk i CQP


## Søkevilkår for enkeltord


Grunnlaget for søk på enkeltord er attributtene (dvs. kategoriene i tabellen ovafor) som er knytta til hver ordform. Vilkåra blir avgrensa med klammeparanteser, og de bestemmer hvilke verdier attributtene må ha for å oppfylle søkekriteriet. Hvis søket bare består av ei ordform, uten vilkår til attributtet, trengs ikke klammeparantesene.


Eksempel:


|  CQP-uttryk     | Betydning
| --- | --- 
|  "giella"         | ordet (dvs. ordforma) "giella" 
|  [lemma="giella"] | ordformene som har (substantivet) "giella" som grunnform
|  [pos="N"]       | ordformer som har ordklassekode N (dvs. alle substantiv)


Ordsøk kan bestå av ulike attributtkombinasjoner, som blir satt sammen av de logiske operatorene **&** ("og"), **|** ("eller"), **!** (negasjon, "ikke") og **-}** (implikasjon). Det er mulig å gruppere attributta med hjelp av paranteser. Som sammenligningsoperator bruker vi **=** ("er lik") eller **!=** ("er ikke lik").




Eksempel:


|  CQP-uttryk                    | Betydning
| --- | --- 
|  [lemma="čálli" & pos="N"]       | ordformer som har "čálli" som grunnform og "N" som ordklassekode
|  [lemma="giella" & !(deprel="SUBJ→"](deprel="←SUBJ")) | ordformer som har "giella" som grunnform og en dependensrelasjon som ikke er SUBJ→ eller ←SUBJ.
|  [lemma="giella" & word!=lemma] | ordformer som har "giella" som grunnform og ordform som er forskjellig fra grunnforma


Merk at det er mulig å vise til attributtverdi på begge sider av sammenligningsoperatoren. Merk også at pilene i dependensuttrykkene peker *fra* datternode *til* mornode. Uttrykket →N blir lagt til et (uspesifisert) ledd som modifiserer et substantiv, og uttrykket SUBJ→ blir lagt til et subjekt som modifiserer et ledd til høyre for seg.




## Regulære uttrykk




Det er også mulig å bruke regulære uttrykk i søket. F.eks. vil "čohkká[[ij].*" finne ord som begynner på "čohkkáj" eller "čohkkái" og inneholder null eller flere bokstaver. [[word="d.t"] vil finne ordformene som begynner med "d", slutter på "t", og har en bokstav i midten.








Regulære uttryk kan bruke følgende elementer:


|   Symbol          | Representerer | Eksempel | Betydning
| --- | --- | --- | --- 
|  bokstaver og tall | seg selv |    |    
|  .                 | hvilket tegn som helst |   |   
|  [...]            | symbolrekke, hvilket som helst av symbola ]( [aeiouyæøå) | en vokal
|  [^...]           | komplement: et hvilket som helst symbol som ikke er der ](  [^aeiouyæøå)| et symbol som ikke er vokal
|  *RS*            | ei rekke av symbol *R* og deretter ei rekke *S* | [a-zæøå][[0-9] | en liten bokstav og deretter et tall
|  (...)	            | gruppering av symbol |     |  
|  *R**            | Repetisjon av *R* null eller flere ganger | a.* \\  a(bc)* | ord som begynner med a  \\ a, abc, abcbc, ...
|  *R+*            | Repetisjon av *R* en eller flere ganger | he+i | hei, heei, heeei, heeeei, ...
|  *R{n}*          | Repetisjon av *R* nøyaktig n ganger |  |  
|  *R{m,n}*        | Repetisjon av *R* mellom m og n ganger |   |  
|  *R?*            | Repetisjon av *R* 0 eller 1 ganger | godt? |  god eller godt
|  *R\|S*           | R eller S                            | sk(au\|øy)t | skaut eller skøyt
|  \\c                | tegnet \ brukes til søk av et spesialtegn | \\. | et punktum (der bare . ville ha vært et arbitrært tegn) 





## Søk etter flere ord


Den enkleste måten å søke etter flere ord eller uttrykk på er å skrive dem etter hverandre, adskilt med mellomrom. 






|   CQP-uttrykk   | Betydning
| --- | --- 
|  "man" "dihte" | orda ”man” og ”dihte” etter hverandre
|  "dat" [pos!="N"]	| ordforma ”dat”, slik at neste ord ikke er et substantiv
|  [pos="A" & deprel="→N"] [pos!="N"] | et adjektiv som fungerer som attributt til et substantiv men der neste ord ikke er et substantiv


Det er mulig å gruppere vilkår i søka, på samme måten som i utvida søk, men med flere muligheter. Søk etter flere ord får bare treff innafor ei og samme setning. Søket blir vist som treff på hele søkestrengen.


Det er også mulig å bruke regulære uttrykk når man søker etter flere ord. Utgangspunktet er de same søkevilkåra som for enkeltord, med bruk av operatorene **?**, *****, **+**, {n}, {m,n}, og med alternativoperatoren **ǀ**. Uttrykkene blir gruppert med paranteser, som vist nedafor. 


I tillegg viser tomme klammeparanteser [] til et arbitrært ord, dvs. det tilsvarer punktum (for arbitrær bokstav) i regulære uttrykk for ordformer.




Eksempel:




|   CQP-uttrykk	| Betydning
| --- | --- 
|  [lemma="leat"] []* [lemma="boahtit"] | ei eller anna form av ordet ”leat” og lenger ute i setninga ei form av ordet ”boahtit” ("leatgo jo boahtán", "lean boahtime", ...)
|  ("farggá" ǀ "vahku" "maŋŋel") [deprel!="SUBJ→"]{1,3} [deprel="FMV"] | ”farggá” eller ”vahku maŋŋel”, og deretter 1–3 ord som ikke er subjekt, og deretter hovedverbet




## Dependenssøk


For å søke etter dependensrelasjoner er det mulig å søke etter strukturer der ordet et visst ord er dependens til er et visst annet ord, dvs. kjerneordet i dependensrelasjonen. Viktige attributter er særlig `ref` (nummeret, eller posisjonen, til ordet i setninga) og `dephead` (nummeret til kjerneordet) og `deprel` (dependensrelasjon).


For å søke etter dependensrelasjoner trengs nettopp egenskapene til CQP-søkespråket, for å sammenligne attributtene til de ulke ordformene. For å vere i stand til å vise til ordformer må de bli identifisert, med å legge en merkelapp til søkevilkåret for ordforma, adskilt med et kolon, f.eks. a:[[deprel="SUBJ→"]. Deretter er det mulig å vise til attributtet til ordforma som har fått en merkelapp med søkeuttrykket *merkelapp.attributt*, f.eks. [[dephead=a.ref].




Eksempel:


|   CQP-uttrykk	| Betydning
| --- | --- 
|  a:[deprel="FMV"] []* [lemma="giella" & deprel="←SUBJ" & dephead=a.ref] | ordet ”giella”, når det er subjektet og står til høgre for hovudverbet. Uttrykket  ``dephead=a.ref`` betyr: *min dephead er a*
|  a:[lemma ="giella" & deprel="SUBJ→"] []* [deprel="FMV" & ref=a.dephead] | ordet ”giella”, når det er subjekt og står til venstre for hovedverbet. Uttrykket  ``ref=a.dephead`` betyr: *eg er målet for a's dephead-referanse*
|  a:[deprel="→N"] []* [deprel="SUBJ→" & ref=a.dephead] | subjekt og leddet som modifiserer det (merka med a), slik at det mellom dem kan være null eller flere ord
|  a:[deprel="SUBJ→"] b:[dephead=a.ref] c:[dephead=b.ref] [dephead=c.ref] | subjekt i en frase der de tre følgende orda står som dependent til ordet foran seg








Merk at i CQP-søket bestemmer rekkefølga på søkekriteriene også rekkefølga til ordformene som blir funnet. Hvis man for eksempel vil søke etter verb og subjekt og deres forhold uavhengig av ordstilling, må man gjøre to seperate søk, ett for verb + subjekt og ett for subjekt + verb., evt. kombinere søkene med |-operatoren.


Med søkekriteria ovafor er det bare mulig å vise til ordformer som er merka. Det å referere til kommende ord forutsetter bruk av global avgrensing. Den globale avgrensinga kommer til slutt i søkefeltet, og det kan vises til i attributtene til de merka ordformene.


Eksempel:




|   CQP-uttrykk	| Betydning
| --- | --- 
|  s:[lemma="miellahttu" & deprel="SUBJ→"] [[]* v:[pos="V" & deprel="FMV"] []* o:[lemma="doarjja" & deprel="←OBJ"] :: s.dephead = v.ref & o.dephead = v.ref | subjekt ”miellahttu” (s), og deretter (evt. etter andre ord) hovedverb (v), og deretter (evt. etter andre ord) objektet ”støtte” (o)




Også de tidligere eksempla er det mulig å presenter ved hjelp av globale avgrensinger, f.eks. er det slik at søket:

```
a:[deprel="SUBJ→"] b:[] c:[] d:[] :: b.dephead=a.ref & c.dephead=b.ref & d.dephead=c.ref
```

gir samme resultat som søket

```
a:[deprel="SUBJ→"] b:[dephead=a.ref] c:[dephead=b.ref] [dephead=c.ref]
```




Andre eksempler på bruk av globale avgrensinger:


Ved hjelp av de globale avgrensingene ovafor er det mulig å søke etter f.eks. strukturer der det same ordet opptrer mange ganger, mens ordet kan vere et hvilket som helst ord. Eksempel:


|   CQP-uttrykk                     | Betydning
| --- | --- 
|  a:[] "og" b:[[] :: a.word=b.word           |  samme ordform på begge sider av ordet "og"
|  a:[lemma!="leat"] b:[] :: a.lemma=b.lemma & a.word!=b.word | samme lemma to ganger etter hverandre, likevel slik at det i de to tilfellene ikke har samme ordform.








# Referanser


* The CQP Query Language Tutorial som [pdf|http://www.ims.uni-stuttgart.de/forschung/projekte/CorpusWorkbench/CQPTutorial/cqp-tutorial.2up.pdf] og i [html-format](http://cwb.sourceforge.net/files/CQP_Tutorial/). Institut für maschinelle Sprachbearbeitung, Stuttgart.




