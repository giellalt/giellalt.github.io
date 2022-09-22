# Avansert søk (CQP) i korpusgrensesnittet Korp

Denne rettleiinga bygger på en tilsvarande [dokumentasjon av CQP for finsk](https://www.kielipankki.fi/tuki/korp-edistynyt/), og kan bli brukt til søk i [samisk](http://gtweb.uit.no/korp), [østersjøfinsk](http://gtweb.uit.no/u_korp), [uralsk](http://gtweb.uit.no/u_korp), og [tuvinsk](http://gtweb.uit.no/tyv_korp), Korp, alle utviklet ved UiT. Korp selv er utviklet ved språkbanken i [Göteborg](http://sprakbanken.gu.se/korp). 

Korp har tre søkemåter, [Enkel](korp-enkel.html), [Utvidet](korp-utvidet.html) og **CQP-uttrykk**. Denne sida dokumenterer skriving av CQP-uttrykk.

# CQP-søkefeltet

Trykk på **CQP-uttrykk**, dvs. den tredje fliken under **KORP**-logoen. Søkefeltet har tre felt. 

1. *Aktivt enkelt søk som CQP:* = Her vises søkeuttrykket du evt. skreiv inn i **Enkel**-søkefeltet
1. *Aktivt utvidet søk som CQP:*  = Her vises søkeuttrykket du evt. skreiv inn i **Utvidet**-søkefeltet
1. *Fullstendig CQP-spørsmål:* = her skriver eller kopierer du inn søkeuttrykket ditt

# Grunnkomponentene i et CQP-søk


I korpuset er hver ordform merka med lemma, ordklasse, grammatiske egenskaper og syntaktisk relasjon (dependens). De ulike delene av analysen har følgende navn, eller **kategorier**:


|      Kategori | Betydning 
|        -------|----------- 
|  `word`       | ordforma slik den står i løpende tekst
|  `lemma`      | ordets oppslagsform (grunnform)
|  `lemmacomp`  | oppslagsform med sammensetningsgrense
|  `pos `       | ordklasse (forkorting for Part Of Speech)
|  `msd`        | morfosyntaktisk analyse (f.eks. presens, entall, ...)
|  `ref      `  | ordets posisjon i setninga (markert som et tall for 1., 2. ord, osv)
|  `dephead`    | dependensordets (mornodens) ordenstall
|  `dep`        | dependensrelasjonen til mornoden (SUBJ→, ←ADVL, osv.)

Søket blir bygd opp som kategori-egenskap-par, med kategorien til venstre, deretter `=` og deretter egenskapen i doble hermetegn, slik: `msd="Gen"`. En oversikt over tagger for `pos` (ordklassetagger), `msd`  (f.eks. morfosyntaktiske egenskaper) og `dep` (tagger for syntaktisk funksjon) fins på dokumentasjonssida for hvert enkelt språk.

For å se dette i praksis kan vi gå fra *Utvidet* søk i Korp, og deretter klikke på *CQP-uttrykk*. Søket fra *Utvidet* står da som et utgangspunkt for videre søk i CQP. Det siste søket som ble vist helt nederst på [dokumentasjonssida for søk med Utvidet](korp-utvidet.html) vil f.eks. gi dette CQP-uttrykket: 

`[word = "oaidnit"] []{1,4} [deprel = "←OBJ"]`

I mai 2021 gir dette søket 1535 treff i nordsamisk SIKOR. Med å bytte ut `word` i søket med `lemma` blir resultatwt 4745 treff.

# Søke med CQP


## Søkevilkår for enkeltord


Grunnlaget for søk på enkeltord er attributtene (dvs. kategoriene i tabellen ovafor) som er knytta til hver ordform. Vilkåra blir avgrensa med klammeparanteser, og de bestemmer hvilke verdier attributtene må ha for å oppfylle søkekriteriet. Hvis søket bare består av ei ordform, uten vilkår til attributtet, trengs ikke klammeparantesene.


Eksempel:


|  CQP-uttryk         | Betydning
|                 --- | --- 
|  `"giella"`         | ordet (dvs. ordforma) "giella" 
|  `[lemma="giella"]` | ordformene som har (substantivet) "giella" som grunnform
|  `[pos="N"]`        | ordformer som har ordklassekode N (dvs. alle substantiv)


Ordsøk kan bestå av ulike attributtkombinasjoner, som blir satt sammen av de logiske operatorene `&` ("og"), `|` ("eller"), `!` (negasjon, "ikke") og `->` (implikasjon). Det er mulig å gruppere attributta med hjelp av paranteser. Som sammenligningsoperator bruker vi `=` ("er lik") eller `!=` ("er ikke lik").

Eksempel:

|  CQP-uttrykk                               | Betydning
| ------------------------------------------ | --- 
| `[lemma="čálli" & pos="N"]`                | ordformer som har `čálli` som grunnform og `N` som ordklassekode
| `[lemma = "giella" & !(deprel = "←SUBJ")]` | ordformer som har `giella` som grunnform og en dependensrelasjon som ikke er `←SUBJ`.
| `[lemma="giella" & word!=lemma]`           | ordformer som har `giella` som grunnform og ordform som er forskjellig fra grunnforma

Merk at det er mulig å vise til attributtverdi på begge sider av sammenligningsoperatoren. Merk også at pilene i dependensuttrykkene peker **fra** datternode **til** mornode. Uttrykket `→N` blir lagt til et (uspesifisert) ledd som modifiserer et substantiv, og uttrykket `SUBJ→` blir lagt til et subjekt som modifiserer et ledd til høyre for seg.


## Regulære uttrykk

Det er også mulig å bruke regulære uttrykk i søket. F.eks. vil `čohkká[ij].*` finne ord som begynner på *čohkkáj* eller *čohkkái* og inneholder null eller flere bokstaver. `[word="d.t"]` vil finne ordformene som begynner med `d`, slutter på `t`, og har en bokstav i midten.


Regulære uttryk kan bruke følgende elementer:


|   Symbol          | Representerer | Eksempel | Betydning
|               --- | ---           | ---      | --- 
|  bokstaver og tall | seg selv |  `giella`<br/> `14`  | *giella<br/>  14*
|  .                 | hvilket tegn som helst |   |   
|  [...]            | symbolrekke, hvilket som helst av symbola | `[aeiouyæøå]` | en vokal
|  [^...]           | komplement: et hvilket som helst symbol som ikke er der |  `[^aeiouyæøå]` | et symbol som ikke er vokal
|  *RS*            | ei rekke av symbol *R* og deretter ei rekke *S* | `[a-zæøå][0-9]` | en liten bokstav og deretter et tall
|  (...)         | gruppering av symbol | `(hála|huma)n`    | *hálan* eller *human*  
|  *R\**            | Repetisjon av *R* null eller flere ganger | 1. `a.*` <br> 2. `a(bc)*` | 1. ord som begynner med *a*  <br> 2. *a, abc, abcbc, ...*
|  *R+*            | Repetisjon av *R* en eller flere ganger | `he+i` | *hei, heei, heeei, heeeei, ...*
|  *R{n}*          | Repetisjon av *R* nøyaktig n ganger | `(na){2}` | nana  
|  *R{m,n}*        | Repetisjon av *R* mellom m og n ganger | `0{2,3}`  | *00, 000*
|  *R?*            | Repetisjon av *R* 0 eller 1 ganger | `háli?t` |  *hálit* eller *háliit*
|  *R|S*           | R eller S                            | `d(ie|uo)t` | *diet* eller *duot*
|  \\c                | tegnet \ brukes til søk av et spesialtegn | `\.` | et punktum (der bare . ville ha vært et arbitrært tegn) 





## Søk etter flere ord

Den enkleste måten å søke etter flere ord eller uttrykk på er å skrive dem etter hverandre, adskilt med mellomrom. 



|   CQP-uttrykk    | Betydning
|              --- | --- 
|  `"man" "dihte"` | orda *man* og *dihte* etter hverandre
|  `"dat" [pos!="N"]` | ordforma *dat*, slik at neste ord ikke er et substantiv
|  `[pos="A" & deprel="→N"] [pos!="N"]` | et adjektiv som fungerer som attributt til et substantiv men der neste ord ikke er et substantiv
| `"nu" [pos="A"] "go"` | adjektiv mellom *nu* og *go* (sjekk også **Statistikk** for dette søket)

Det er mulig å gruppere vilkår i søka, på samme måten som i utvida søk, men med flere muligheter. Søk etter flere ord får bare treff innafor ei og samme setning. Søket blir vist som treff på hele søkestrengen.


Det er også mulig å bruke regulære uttrykk når man søker etter flere ord. Utgangspunktet er de same søkevilkåra som for enkeltord, med bruk av operatorene `?`, `*`, `+`, `{n}`, `{m,n}` og med alternativoperatoren `ǀ`. Uttrykkene blir gruppert med paranteser, som vist nedafor. 


I tillegg viser tomme klammeparanteser `[]` til et arbitrært ord, dvs. det tilsvarer punktum (for arbitrær bokstav) i regulære uttrykk, men for ordformer.




**Eksempel:**

(**NB!** Hvis nettleseren endrer hermetegn eller andre tegn vil ikke uttrykket fungere. Hvis det gir feilmelding å kopiere uttrykka inn i Korp er det bedre å skrive dem selv.

|   CQP-uttrykk | Betydning
| --- | --- 
|  `[lemma="leat"] []* [lemma="boahtit"]` | ei eller anna form av ordet *leat* og lenger ute i setninga ei form av ordet ”boahtit” ("leatgo jo boahtán", "lean boahtime", ...)


## Dependenssøk

(Det er lurt å lese dette avsnittet, men deretter bruke *global føring*-notasjonen, se nedafor).

For å søke etter dependensrelasjoner må vi søke etter strukturer der vi definerer ordet i begge endene av dependensrelasjonen, og etter relasjonen mellom dem. Vi kan f.eks. søke etter både datter og mor i en bestemt relasjon.

Viktige attributter for å få til dette er: 

- `ref` = nummeret, eller posisjonen, til ordet i setninga søket tar utgangspunkt i 
- `dephead` = nummeret til kjerneordet, eller ordet dependensrelasjonen peker til 
- `deprel` = dependensrelasjonen

Analysen av eksempelet *Mun oađán* "jeg sover" er:

```
"<Mun>"
	"mun" Pron Pers Sg1 Nom SUBJ→ #1->2
"<oađán>"
	"oađđit" V IV Ind Prs Sg1 FMV #2->0
```
Med utgangspunkt i ordet `Mun` er dermed: `ref` = **1**, `dephead` = **2** og `deprel` = **SUBJ→**.


For å søke etter dependensrelasjoner trengs nettopp egenskapene til CQP-søkespråket, for å sammenligne attributtene til de ulke ordformene. For å være i stand til å vise til ordformer må de bli identifisert, med å legge en arbitrær bokstav til søkevilkåret for ordforma, adskilt med et kolon, f.eks. `a:[deprel="SUBJ→"]`. I eksemplet over er `a` nummeret til ordet med dependensrelasjon **SUBJ→**, dvs. `a = 1`. 

Deretter er det mulig å vise til denne ordforma fra enten mor- eller datternoden i dependenstreet.

Skrivemåten `[dephead=a.ref]` betyr "min mornode er ordet som har *a* som referanse". Her bruker vi `a, b` som indeks, i eksempelet under bruker vi `s, o` (for "subjekt", "objekt"), for cqp er bokstaven bare et tilfeldig indeks slik at to uttrykk i et komplekst søkeuttrykk kan referere til hverande. Uttrykket (1) viser til **mornoden** til et ord, mens (2) viser til **datternoden**.

1. ``dephead=a.ref`` = *my dephead is a* = *ordet dependensrelasjonen min viser til er a*
1. ``ref=a.dephead`` = *I am a's dephead* = *jeg er målet for dependensrelasjonen som ordet a viser til*


**Eksempel:**


|            |   CQP-uttrykk og forklaring
|        --- | --- 
| uttrykk    | `a:[deprel="SUBJ→"] [lemma="oađđit" & deprel="FMV" & ref=a.dephead]`
| forklaring | ordet "oađđit", når det er finitt hovedverb og står til høyre for subjektet
| uttrykk    | `a:[deprel="SUBJ→" & msd=".*Pl.*"] [lemma="oađđit" & deprel="FMV" & ref=a.dephead]`
| forklaring | ordet "oađđit", når det er finitt hovedverb og står til høyre for subjektet, og subjektet står i flertall.
| uttrykk    |  `a:[deprel="FMV"] []* [lemma="giella" & deprel="←SUBJ" & dephead=a.ref]` 
| forklaring |  ordet ”giella”, når det er subjektet og står til høyre for hovudverbet. Uttrykket  ``dephead=a.ref`` betyr: *my dephead is a*, eller *ordet dependensrelasjonen min peiker på er a*
| uttrykk    | `a:[lemma ="giella" & deprel="SUBJ→"] []* [deprel="FMV" & ref=a.dephead]` 
| forklaring  | ordet ”giella”, når det er subjekt og står til venstre for hovedverbet. Uttrykket  ``ref=a.dephead`` betyr: *jeg er målet for a's dephead-referanse*
| uttrykk |  `a:[deprel="→N"] []* [deprel="SUBJ→" & ref=a.dephead]` 
| forklaring   | subjekt og leddet som modifiserer det (merka med a), slik at det mellom dem kan være null eller flere ord
| uttrykk |  `a:[deprel="SUBJ→"] b:[dephead=a.ref] c:[dephead=b.ref] [dephead=c.ref]`
| forklaring  | subjekt i en frase der de tre følgende orda står som dependent til ordet foran seg




Merk at i CQP-søket bestemmer rekkefølga på søkekriteriene også rekkefølga til ordformene som blir funnet. Hvis man for eksempel vil søke etter verb og subjekt og deres forhold uavhengig av ordstilling, må man gjøre to seperate søk, ett for verb + subjekt og ett for subjekt + verb., evt. kombinere søkene med `|`-operatoren.


## Global føring (global constraint)

Med søkekriteria ovafor er det bare mulig å gjøre dependenssøk til ordformer som allerede er identifisert i søkeuttrykket. En mer effektiv måte å skrive uttrykket er å bruke ei **global føring** (eng. *global constraint*). Den globale føringa kommer til slutt i søkeuttrykket, og den kan vise til ordformene i selve søket. Den globale føringa blir introdusert med symbolet `::`.


**Eksempel:**


|         |   CQP-uttrykk og forklaring
|     --- | --- 
| uttrykk |  `s:[lemma="nisu" & deprel="SUBJ→"] []* v:[pos="V" & deprel="FMV"] []* o:[lemma=".*" & deprel="←OBJ"] :: s.dephead = v.ref & o.dephead = v.ref` 
| forklaring | subjekt ”nisu” (s), og deretter (evt. etter andre ord) hovedverb (v), og deretter (evt. etter andre ord) et hvilket som helst objekt (o)
| forklaring | `s:[lemma="ӱдырамаш" & deprel="SUBJ→"] []* o:[lemma=".*" & deprel="OBJ→"] []* v:[pos="V" & deprel="FMV"]   :: s.dephead = v.ref & o.dephead = v.ref`
| forklaring | Samme som eksempelet over, men for marisk, som er et SOV-språk

Det er også mulig å lage kjeder av dependenser. Følgende uttrykket vil fange opp setninger som *Bártni váhnemat ledje hui bures liikon dan niidii.*: "Guttens foreldre hadde svært godt likt den jenta".

```
a:[lemma="leat"]
[]{1,2}
b:[lemma="liikot" & msd="V.*"]
[]{0,10}
c:[msd="N.*.Ill"]
::c.dephead=b.ref & b.dephead=a.ref
```


Følgende uttrykk gir *subjekt - finitt copula - objekt - infinitt hovedverb*

```
s:[deprel="SUBJ→"] []* 
a:[lemma="leat"] []{0,2} 
o:[deprel="OBJ→"] 
i:[deprel="IMV"]
::s.dephead=a.ref & o.dephead=i.ref & i.dephead=a.ref
```

Følgende uttrykk gir *finitt hjelpeverb - objekt - infinitt hovedverb*. 

**NB! Korp-versjonen som er online inneholder en skrivefeil:** Taggen *FAUX* (finitt hjelpeverb) er skrevet *NAUX*. Feilen vil bli retta i neste oppdatering.

```
a:[deprel="NAUX"] []* 
o:[deprel="OBJ→"] []* 
v:[deprel="IMV"] 
:: o.dephead=v.ref & v.dephead=a.ref
```

Også de tidligere eksempla er det mulig å presenter ved hjelp av globale føringer, f.eks. er det slik at dette søket, med global føring:

```
a:[deprel="SUBJ→"] b:[] c:[] d:[] :: b.dephead=a.ref & c.dephead=b.ref & d.dephead=c.ref
```

gir samme resultat som søket  som vi siterte i tabellen ovafor:

```
a:[deprel="SUBJ→"] b:[dephead=a.ref] c:[dephead=b.ref] [dephead=c.ref]
```




## Globale føringer for ord som blir repetert


Ved hjelp av de globale føringene ovafor er det mulig å gjøre søk som ikke kan bli gjort med vanlige regulære uttrykk. Et eksempel er strukturer der det samme ordet opptrer mange ganger, mens ordet kan være et hvilket som helst ord:


|   CQP-uttrykk                     | Betydning
| --- | --- 
|  `a:[] "ja" b:[] :: a.word=b.word` |  samme ordform på begge sider av ordet "ja"
| `a:[lemma!="leat"] b:[] :: a.lemma=b.lemma & a.word!=b.word` | samme lemma to ganger etter hverandre, likevel slik at det i de to tilfellene ikke har samme ordform.








# Referanser

Framstillinga her bygger på Kielipankki sin presentasjon, og er tilpassa SIKOR. CQP-dokumentasjonen frå Stuttgart  er langt mer omfattende, men er laga for et korpus som er analysert i **frasestrukturer** (*NP, VP, PP, ..*), der alle korpusa som bruker Korp bruker **dependensanalyse**. Søkeeksempla fra Stuttgart sin dokumentasjon kan med andre ord ikke brukes direkte, bare som eksempel på formalismen.


* Kielipankki: [Korpin edistynyt haku](https://www.kielipankki.fi/tuki/korp-edistynyt/) 
* [The CQP Query Language Tutorial som pdf](http://www.ims.uni-stuttgart.de/forschung/projekte/CorpusWorkbench/CQPTutorial/cqp-tutorial.2up.pdf) og [The CQP Query Language Tutorial i html-format](http://cwb.sourceforge.net/files/CQP_Tutorial/). Institut für maschinelle Sprachbearbeitung, Stuttgart.



