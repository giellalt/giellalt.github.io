# Målet med ordboksarbeidet

Dette dokumentet drøfter mål og prinsipp for ordboksarbeidet og gir eksempel på hvordan de skal merkes i praksis. Eksempla er fra nordsamisk (sme) og sørsamisk (sma) 

Sitat fra møte 23.8.11:

- ordbøkene er nyttige for folk flest
- vise kombinasjonen leksikografi/morfologi
- vi kan samarbeide med de leksikografiske miljøene
- vi trenger transferleksikon for MT


# Genererte ordformsorbøker (VD) vs. online-analyse-ordbøker (NDS) vs. Apertium-ordbøker (webdict)


- Apertium-ordbøkene (webdict) inneholder bare grunnform og er smX-nob/fin og
  motsatt veg
- VD inneholder genererte ordformer og er smX-nob. De kan lastes ned, og fungerer offline, men er avhengige av et ordboksprogram, f.eks. Macdict eller Stardict.
- NDS analyseres online med `analyser-dict-gt-desc.hfstol`, og genereres med
  `generator-dict-gt-norm.hfstol`


# Leksikonfiler

Entryene er delt inn i filer etter POS. Det nøyaktige settet av filer varierer fra språk til språk, skriptet som genererer ordbøkene generaliserer over dette og tar med alle filer i katalogen `LANG1LANG2/src/*LANG1LANG2.xml`, dvs. alle filnamn som slutter på *LANG1LANG2.xml*.


# Flerordsuttrykk


- Man kan legge til ord som bare er ord nr 2 i faste uttrykk, f.eks.
  *hiluid háluid*, med hele uttrykket som eksempel.
- Flerordsuttrykk som har annen mening enn hvert enkeltord har, bør man legge
  ordet i mwe-fila. Hvis uttrykkene skal bøyes, kan det lages statiske
  paradigmer.


# Entryenes struktur


##  `<e>` nivå i xml


Enkelte entryer i ordbøkene er merket med kildehenvisning, f.eks. `src="nj"` (fra Jernsletten), `src="sk"` (Statens Kartverk), `src="gt"` (Giellatekno), `src="fad"` (Fra forvaltningsordbokprosjektet). Default er `src="gt"`. Dokumentasjon for kildetaggene er, eller i alle fall bør være, dokumentert i den relevante dtd-fila eller på dokumentasjonssida for ordboka. Noen av entrynodane er også merka med `usage`, denne merkinga kan være utdatert. 


## Meningsgrupper `<mg>` i xml


Man skiller mellom synonymer og meningsgrupper. Synonymer har samme `<mg>` (meaning group / meningsgruppe) og samme `<tg>` (translation group / oversettelsesgruppe). Hvis en entry har flere betydninger, så skilles disse som forskjellige `<mg>`.


```
<e src="nj" usage="vd">
   <lg>
      <l pos="N">sudja</l>
      <lc>sujat</lc>
   </lg>
   <mg>
      <tg>
         <t pos="N">årsak</t>
         <t pos="N">grunn</t>
      </tg>
   </mg>
   <mg>
      <tg>
         <t pos="N">skyld</t>
      </tg>
   </mg>
</e>
```

   
## Oversettelsesgrupper `<tg>` i xml


Elementet `<mg>` inneholder en eller flere `<tg>` (oversettelsesgruppe eller translation group) som igjen kan inneholde:


`<t>` - et ord

```
<e usage="vd">
   <lg>
      <l pos="N">ristoabbá</l>
   </lg>
   <mg>
      <tg>
         <t pos="N">gudsøster</t>
      </tg>
   </mg>
</e>
```


`<t>` - en frase 

```
 <e usage="vd">
  <lg>
     <l pos="N">áššu</l>
  </lg>
  <mg>
     <tg>
        <t dict="yes" pos="N">glødende vedstykke</t>
     </tg>
  </mg>
</e>
```


`<te>` - en forklaring. En forklaring er en setning som forklarer betydningen av et ord, men som ikke kan brukes i for eksempel en oversettelse. Denne brukes KUN hvis `<t>` ikke kan brukes.

```
<e usage="vd">
   <lg>
      <l pos="N">boaššobealle</l>
   </lg>
   <mg>
      <tg>
         <te>den side som vender mot boaššu, det vil si den innerste delen av telt, gamme eller hus</te>
      </tg>
   </mg>
```


## Bruk av `<re>` (restriksjon) i xml

- `<re>` gir restriksjon for oversettelsen. Oversettelsen *vest* har restriksjonen *om klesplagg*, dvs at oversettelsen gjelder klesplagg, og ikke himmelretning.


```
      <mg>
         <tg>
            <re>om klesplagg</re>
            <t pos="N">vest</t>
         </tg>
      </mg>
```


- `<re>` kan også brukes for å markere kasusbetydning, f.ek.s *bevegelse til*.
- for stedsnavn angir den kommune eller fylke


## Bruk av `<style>` i xml (ikke implementert)
F.eks. litterær, uhøflig etc.


## Lemmaet har ikke paradigme: `pg="no"` i xml  (gjelder bare VD)
I filer som skal blir generert pga POS-merkinga (N, V, A, Num), skal lemmaer som likevel ikke skal genereres, eller som bare har en form, merkes med attributten `pg="no"`.




## Bruk av v1, v2 osv. i lexc (gjelder bare VD)


- Ett lemma kan ha flere **normative** skrivemåter. I fst merkes disse med
  felles lemma, men skilles ved hjelp av taggene v1, v2 osv:
	- tunealla+v1:tunealla
	- tunealla+v2:tunnealla
- Til ordboksfilene legges kun det lemmaet som er valgt som felles lemma i fst.
  I tillegg må man merke hvor mange v-merkinger den har i fst. Dette gjøres ved
  å legge attributten `vmax=""` til `<l>`:


```
      <lg>
         <l pos="g3" vmax="2">tunealla</l>
      </lg>
```




- Ved hjelp av v1- og v2-taggene, kan man sortere ordformene til riktig oppslagsord
  (*tunealla* vs. *tunnealla*) og presentere reine miniparadigmer.




## Bruk av `lsub` i xml (gjelder bare VD)


Elementet `lsub` legges til i `<lg>` for vanlige **ikke-normative** skrivemåter.
Hvis forskjellen i skrivemåte bare er f.eks. *a* vs. *á*, kan dette løses med regulære uttrykk. Hvis
det skal genereres paradigme for ikke-normativ skrivemåte, må lemmaet være i
fst. Vi skal ikke presentere miniparadigme for `lsub`. Det må gjøres klart for
brukeren at dette er en ikke-normativ skrivemåte.


```
<e usage="vd">
   <lg>
      <l pos="N">balloŋŋa</l>
      <lsub extrapage="yes" pos="N">balluvdna</lsub> 
      <!!-- extrapage="yes" er default -->
      <!!-- the extrapage attribute is now obsolete when v1,v2 is implemented:-->
      <!!-- 1. lsub is alway extrapage="no" (no need of the extrapage attribute anymore)-->
      <!!-- 2. in the pair v1-v2, one lemma is the entry in the dict and the other is generated automatically, "lsub with extrapage="yes" so to say -->
   </lg>
   <mg>
      <tg>
         <t pos="N">ballong</t>
      </tg>
   </mg>
</e>


   <lg>
      <l pos="N">kantuvra</l>
      <lsub extrapage="no" pos="N">kántuvra</lsub>
   </lg>
```


## Bruk av `l_ref` i xml  (gjelder bare VD)


Elementet __l_ref__ legges til i <lg> for å vise til ander lemmaer som kan være
nyttige for brukeren. Lemmaet skal merkes med POS, f.eks. `seavagiella_n`. `l_ref`
brukes for å:


- vise til det lemmaet som bør brukes i følge termordlister etc. I slike
  tilfeller merkes kun det lemmaet som man vil vise fra, og ikke det lemmaet
  som man viser til:


```
      <lg>
         <l pos="N">giehtagiella</l>
         <l_ref>seavagiella_n</l_ref>
      </lg>
```


- gjøre brukeren oppmerksom på at det er en annen semantisk inndeling på samisk
  enn på oversettingsspråket. F.eks. *vai* vs. *dahje*, eller *dudno* vs.
  *din*. I slike tilfeller merkes begge lemmaene med `l_ref`:


```
      <lg>
         <l pos="cc">dahje</l>
         <l_ref>vai_cc</l_ref>
      </lg>
og
      <lg>
         <l pos="cc">vai</l>
         <l_ref>dahje_cc</l_ref>
      </lg>
```


## Evt. bruk av flere typer referanser - dette er tanker, og er ikke implementert


Initialt i `<mg>`:

- `<syn lemmaID="buohccebiila" />` → vise til eit synonym
- `<ant lemmaID="">` ↛ vise til eit antonym
- `<hyponym>` ↓ vise til eit meir spesifikt ord
- `<hypernym>` ↑ vise til eit meir overordna ord
- `<obs>` vær obs på dette (*bajimussii -> bajimusas*) !!


## Eksempler


Man kan legge inn kildetilvisning som attributt for `<x>` og `<xt>`, f.eks. hvis ordet ikke er vanlig i bruk:


```
<x src="S.B. Johansen 2010: Sárá beaivegirji s. 21">... dakkár ilgadis 
olmmošlágan filbmasivdnádus, mii lea eambbo robohtalágan go olbmolágan.</x>
```


# Generere paradigme eller ikke  (gjelder bare VD)


Noen av filene er statiske og noen blir det generert paradigmer av. Det er filer for pronomener med innskrevne paradigmer, og disse filenes navn avgjør at innholdet ikke blir generert.


I de andre filene er det POS-merkinga som avgjør om det blir generert paradigme
eller ikke. Lemmaer som ikke skal genereres, eller som bare har en form, merkes
med `pg="no"`.


## Generere paradigmer  (gjelder bare VD)


Alle entryene må være leksikalisert i norm-fst. Hvis ikke, vil de ikke bli
generert. F.eks. så vil en entry med grunnform i plural, ikke bli generert hvis
grunnformen er i singular i norm-fst. Men man kan ha både sg og pl innføringer i
norm-fst for det samme lemmaet hvis det har en annen oversettelse i plural enn i
singular.


Det må ikke være noen homonyme entryer (lemma + POS + type + subtype + ... annen
attributer)!!


For å unngå at dict-fila blir for stor, kan man vurdere hvilke bøyningsformer
som skal genereres, f.eks. px eller ikke. Dette gjøres i
`testing/xcodes.txt`-filene.


## Filer for generering  (gjelder bare VD)


sme-filer for generering:


```
nounActor_smenob.xml
nounCommon_smenob.xml
nounG3_smenob.xml
nounProper_smenob.xml
nounRevProper_smenob.xml
nounProperPl_smenob.xml
adjective_smenob.xml
verb_smenob.xml
pronIndef_smenob.xml
num_smenob.xml
```


sma-filer for generering:


```
a_smanob.xml
n_smanob.xml
v_smanob.xml
num_smanob.xml
pronIndef_smanob.xml
prop_smanob.xml
propPl_smanob.xml
```




## Filer med statiske (innskrevne) paradigmer (mest for VD, men kan også brukes for NDS)


Her kan man velge hvilket grunnord de bøyde formene peker til. F.eks. når det gjelder refleksive pronomener i sme, har vi valgt å peke til akk/gen-formen som grunnform (*alccesan* peker til *iežan*).


I entryene for de flekterte formene, blir det en entry for hver sideform.


Det må ikke være noen homonyme entryer (lemma + POS) innafor eller på tvers av filene. Dette kan unngås med å oppgi type (f.eks. 'dem') og sg/pl, f.eks.       


```
<l pos="pron" type="dem" nr="sg">dat</l> vs
<l pos="pron" type="dem" nr="pl">dat</l> og
<l pos="pron" type="pers" nr="sg">dat</l>
```


Dette må også tas hensyn til i `lemma_ref`, f.eks.


```
<lemma_ref lemmaID="dat_pron_pers_pl">dat</lemma_ref>
```


sme-filer med innskrevne paradigmer:


```
adjstatpar_smenob.xml
div_statisk_smenob.xml
verbNeg_smenob.xml
verbCop_smenob.xml
verbSupNeg_smenob.xml
pronDem_smenob.xml
pronPers_smenob.xml
pronRec_smenob.xml
pronRefl_smenob.xml
pronRel_smenob.xml
```


sma-filer med innskrevne paradigmer:


```
misc_stat_smanob.xml
pronPers_stat_smanob.xml
pronRec_stat_smanob.xml
pronRefl_stat_smanob.xml
pronRel_stat_smanob.xml
vCop_stat_smanob.xml
vNeg_stat_smanob.xml
```




## Andre filer 

I disse filene genereres ikke lemmaene, og de behøver heller ikke være i
norm-fst.


sme-filer:

```
adverb_smenob.xml
mwe_smenob.xml
other_stat_smenob.xml
```


sma-filer:

```
adv_smanob.xml
i_smanob.xml
multiword_smanob.xml
pcle_smanob.xml
po_smanob.xml
pr_smanob.xml
```


# Genererte miniparadigmer til hjelp for brukeren


Miniparadigmene i leksikonoppslaget er hjelp for brukeren. De vil variere fra POS til POS. Man velger former som gir nyttig informasjon til brukeren om hele paradigmet. 


## Use/NGminip og Allegro i lexc


Ved å legge til `+Use/NGminip` i lexc, kan man velge bort en del bøyningsformer når man ikke vil presentere alle i miniparadigmet. Dette er f.eks. aktuelt for nordsamiske adjektiver.


## Substantiv:


Substantiv kan få attributten illpl="no" hvis den ikke er så høvelig å
presentere i flertall, f.eks. *bargguhisvuohta*.  For sme utelates
allegroformen for Sg Gen, som er merka med Allegro-tag:
*viesu viessu+N+Sg+Gen* versus *vieso viessu+N+Sg+Gen+Allegro*  .




|   Bøyning	| Eksempel
| --- | --- 
|            | viessu
|  Sg+Gen    | viesu	(ikke Allegro)
|  Sg+Ill    | 	vissui
|  Pl+Ill    |  viesuide (ikke hvis illpl="no" )




## Propernouns sme - sg:
Hvis det er flere `<mg>`, brukes `<t>` fra den første `<mg>` som oversetting i miniparadigmet


|   Bøyning	| Kontekst | Eksempel    | Oversettelse
| --- | --- | --- | --- 
|    -       |  -        | Norga        |  Norge
|  Sg+Gen    | X bokte   | Norgga bokte |  via Norge
|  Sg+Ill    |  -        | Norgii       |  til Norge
|  Sg+Loc    |  -        | Norggas      |  i/fra Norge


## Propernouns sme - pl:
Hvis det er flere mg, brukes `<t>` fra den første mg som oversetting i miniparadigmet


|   Bøyning	| Kontekst	| Eksempel 	| Oversettelse
| --- | --- | --- | --- 
|  - 		| 		-	| Iččát 		| Ingøy
|  Pl+Gen 	| X bokte 	|  Iččáid bokte | via Ingøy
|  Pl+Ill 	| 	-		|  Iččáide 		| til Ingøy
|  Pl+Loc 	| 	-		|  Iččáin 		| i/fra Ingøy


## Propernouns sma - sg:
Hvis det er flere `<mg>`, brukes `<t>` fra den første `<mg>` som oversetting i miniparadigmet


|   Bøyning	| Kontekst	| Eksempel 		| Oversettelse
| --- | --- | --- | --- 
|  -		 	|	-		| Nöörje  			|  Norge
|  Sg+Gen 	| X baaktoe |  Nöörjen baaktoe 	| via Norge
|  Sg+Ill 	| 		-	|  Nöörjese 		| til Norge
|  Sg+Ine 	| 		-	|  Nöörjesne 		| i/på Norge
|  Sg+Ela 	| 	-		|  Nöörjeste 		| fra Norge


## Propernouns sma - pl:
Hvis det er flere `<mg>`, brukes `<t>` fra den første `<mg>` som oversetting i miniparadigmet


|   Bøyning	| Kontekst	| Eksempel 			| Oversettelse
| --- | --- | --- | --- 
|  - 		|		-	|  Bealjehkh  			|  Sylan
|  Pl+Gen 	| X baaktoe |  Bealjehki baaktoe 	| via Sylan
|  Pl+Ill 	| 		-	|  Bealjehkidie 		| til Sylan
|  Pl+Ine 	| 		-	|  Bealjehkinie 		| i/på Sylan
|  Pl+Ela 	| 	-		|  Bealjehkijstie 		| fra Sylan




## Verb sme:
For verb har vi lagt til kontekst til bøyningsformene. Det er merket i leksikonet hvilken type kontekst som skal brukes, f.eks. `context:"mun"` 


|   Bøyning        | Kontekst           | Eksempel
| --- | --- | --- 
|                  |  context:"mun"      | boahtit
|  Ind+Prs+Sg1     |     (odne mun) X    | (odne mun) boađán
|  Ind+Prt+Sg1     |    (ikte mun) X     | (ikte mun) bohten	
|  Ind+Prs+ConNeg  |       (in) X        | (in) boađe


For verb som det ikke er naturlig med menneskelig subjekt for:

|   Bøyning	     | Kontekst	| Eksempel
| --- | --- | --- 
|  -               | context:"dat"   | ciellat
|  Ind+Prs+Pl3     |  (Plural)  X    | (Plural) cillet
|  Ind+Prt+Sg3     |  (ikte dat)  X  | (ikte dat) cielai	
|  Ind+Prs+ConNeg  |  (ii) X         | (ii) ciela


For verb som bare brukes i Sg3 (vær-verb):

|   Bøyning        | Kontekst       | Eksempel
| --- | --- | --- 
|  -               | context:"upers" |  bieggat
|  Ind+Prs+Sg3	  | (odne) X        | (odne) bieggá	
|  Ind+Prt+Sg3	  | (ikte) X        | (ikte) biekkai
|  Ind+Prs+ConNeg  | (ii) X          | (ii) biekka


For resiproke verb :

|   Bøyning        | Kontekst     | Eksempel
| --- | --- | --- 
|   -              | context:"sii" | deaivvadit
|  Ind+Prs+Pl3     | (odne sii) X  | (odne sii) deaivvadit
|  Ind+Prt+Pl3     | (ikte sii) X  | (ikte sii) deaivvadedje
|  Ind+Prs+ConNeg  | (eai) X       | (eai) deaivvat


## Verb sma:

|   Bøyning		  | Kontekst				| Eksempel
| --- | --- | --- 
|  Inf             |   		-	        	| båetedh
|  Ind+Prs+Sg1	  | (daan biejjien manne) X | (daan biejjien manne) båatam
|  Ind+Prs+Sg3	  | (daan biejjien dïhte) X | (daan biejjien dïhte) båata
|  Ind+Prs+Pl3	  | (daan biejjien dat) X   | (daan biejjien dat) båetieh
|  Ind+Prt+Sg1	  | (jååktan manne) X     	| (jååktan manne) böötim båetiejim	
|  Ind+Prs+ConNeg  | (ij) X        			| (ij) båetieh
|  PrfPrc		  | (lea) X 				| (lea) båateme
|  Ger			  | (lea) X  				| (lea) båetieminie 
|  VGen			  | X  						| båetien 




## Adjektiver:


Ved å legge til `+Use/NGminip` i fst, kan man velge bort en del bøyningsformer når man ikke vil presentere alle i miniparadigmet. Dette er ikke minst aktuelt for adjektiver.


|   Bøyning           | Uten +Use/NGminip            | Med +Use/NGminip
| --- | --- | --- 
|   A+Sg+Nom          | heittot                       | heittot
|  A+Attr             | heittogis heittohis (bivttas) | heittogis (bivttas)
|  A+Pl+Nom           | heittogat heittohat           | heittogat
|  A+Comp+Attr        | heittogit heittogut heittoget heittogat heittohit heittohut heittohet heittohat | heittoget heittogat 
|  A+Comp+Sg+Nom      | heittogit heittogut heittoget heittogeabbo heittogat heittogabbo heittohit heittohut heittohet heittoheabbo heittohat heittohabbo | heittogeabbo heittogabbo 
|  A+Superl+Sg+Nom    | heittogeamos heittogamos heittoheamos heittohamos | heittogeamos heittogamos




For adjektiver har vi lagt til kontekst til attributtformen bare for sme. Det er merket i leksikonet hvilken  kontekst som skal brukes, f.eks. `context:"olmmoš"`. Hvis  `context=""`, så vil det ikke bli oppgitt attributtform.


|   Bøyning           | Kontekst bare for sme	| Eksempel
| --- | --- | --- 
|  -                  | context:"báddi"          | guhkki
|  A+Attr             | X (báddi)                | guhkes (báddi)
|  A+Pl+Nom           | -                        | guhkit
|  A+Comp+Attr        | -                        | guhkit 
|  A+Comp+Sg+Nom      | -                        | guhkit 
|  A+Superl+Sg+Nom    | -                        | guhkimus




## Numeraler:

For numeraler har vi lagt til kontekst til `pl` bare for sme. Alle har den samme konteksten:


|   Bøyning	 | Kontekst bare for sme | Eksempel
| --- | --- | --- 
|  -          | context:"gápmagat"	  | guokte
|  Num+Pl+Nom | X (gápmagat)           | guovttit (gápmagat)
|  Num+Pl+Gen | X (gápmagiid)          | guvttiid (gápmagiid)




## Ubestemte pronomener (+Pron+Indef):


(samme miniparadigme som for substantiver)

|   Bøyning	| Eksempel
| --- | --- 
|  -  	    | muhtun
|  Sg+Gen    | muhtuma	 
|  Sg+Ill    | muhtumii
|  Pl+Ill    | muhtumiidda      



# Innskrevne paradigmer 

Dette er mest for VD, men kan også brukes for NDS.


## Pronomener:

Pron Pers, Refl, Rec, Rel og Dem . Vi skriver paradigmet inn i filen:


```
Singular for seg:
Sg+Akk	
Sg+Gen	
Sg+Ill
Sg+Loc
Sg+Com
Ess


Plural for seg:
Pl+Akk
Pl+Gen
Pl+Ill
Pl+Loc
Pl+Com
Ess
```


## Negasjonsverb:


```
Sg1
Sg2
Sg3
Du1
Du2
Du3
Pl1
Pl2
Pl3
```




# Homonyme entrier 

Det må ikke være noen homonyme entryer (lemma + POS) innafor eller på tvers av filene (dette gjelder bare VD). Vær OBS på at det kan være homonymi med lemmaer i norm-fst, uten at begge er med i dict. For å få generert riktig bøyningsparadigme til dict-entryen, må de behandles på samme måte, selv om bare det ene lemmaer er med i dict. 



 
## Ikke-systematisk homonymi - eksempel fra sma

`<l>` elementet får attributten `hid="Hom1"` eller `hid="Hom2"`. Lemmaene er merka tilsvarende i norm-fst.

 

 
## Systematisk homonymi - ekesmpler fra sme

 
|   Nom   | Gen  	| norsk 	| norm-fst-analyse	 
| --- | --- | --- | --- 
|  lohkki |  lohki  	|  lokk		| lohkki+N+Sg+Nom
|  lohkki |  lohkki 	|  lesar 	| lohkki+N+NomAg+Sg+Nom


Her må den ene merkes med tag (actor) i genereringa fra norm-fst. Med denne tagen kan de unngår man homonymi i dict. I xml-filene:




```
1.
    <e src="nj" usage="vd">
      <lg>
         <l pos="N">lohkki</l>
      </lg>
      <mg>
         <tg>
            <t pos="N">lokk</t>


2.
    <e src="nj" usage="vd">
      <lg>
         <l pos="N" type="NomAg">lohkki</l>
      </lg>
      <mg>
         <tg>
            <t pos="N">leser</t> 
```


En annen systematisk homonymi:

|   Nom  	| Gen  | norsk 	| norm-fst-analyse	 
| --- | --- | --- | --- 
|   beassi 	| beasi  |  reir	| beassi+N+Sg+Nom
|   beassi  	| beassi |  never	| beassi+N+G3+Sg+Nom




Vi har følgende tagger for substantiver:

|   tagger | fil
| --- | --- 
|  N+NomAg |  -
|  N		  |  -
|  N+G3	  |  -
|  N+G7	  |  -
|  N+Prop  |  -
