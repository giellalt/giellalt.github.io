# Comments for Tino 27.4.12:


Her kommer vår ønskeliste:


## Ny ordklasse (som du selv nevner i brevet):


### pre- og postposisjoner, som har henholdsvis taggene Pr og Po




Vi vil at det skal være mulig å skrive inn et lemma, f.eks. 'maŋŋel' 
og få opp 'maŋŋel' som Pr (preposisjon) og 'maŋŋel' som Po (postposisjon)
(begge analysene fins)
hver med presentasjon av komplementer (@>P viser til komplementet) og av 
hvilke verb de har som mor i dependenstreet (@<ADVL viser til verbet)


```
"<Mun>"
	"mun" Pron Pers Sg1 Nom @SUBJ> #1->2 
"<vuoján>"
	"vuodjit" <mv> V TV Ind Prs Sg1 @FMV #2->0 
"<muora>"
	"muorra" Plant N Sg Gen @>P #3->4   <===== komplement
"<njeaiga>"
	"njeaiga" Po @<ADVL #4->2   <==== Postposisjon
"<.>"
	"." CLB #5->2 
```
Noen ord er bare preposisjoner eller bare postposisjoner, 
de får da opp bare Pr eller bare Po.


## Når det gjelder substantiv:


Det vi får i dag er ok. Men dessuten vil vi:


objekt @OBJ Acc
one can @ADVL - deles inn etter kasus: Ill, Loc, Com, Ess, Gen 
Dvs: Vi vil ha en klasse for hver kombinasjon av


*@ADVL Ill, 
*@ADVL Loc, 
*@ADVL Com, 
*@ADVL Ess, 
*@ADVL Gen




## Når det gjelder  adjektiv:


I dag viser du adjektiv som attributt ("gul sol")


Vi vil at du også (som separate kategorier) tar med  
@SUBJ of @<SPRED,  @OBJ of @<OPRED
(dvs. solen er gul, jeg anser solen gul)


Setningseksempler:
```
"<Nieida>"
	"nieida" Hum N Sg Nom @SUBJ> #1->2  <=====
"<lea>"
	"leat" <mv> V IV Ind Prs Sg3 @FMV #2->0 
"<šiega>"
	"šiega" A Sg Nom @<SPRED #3->2 <=====
"<.>"
	"." CLB #4->2 




"<Mun>"
	"mun" Pron Pers Sg1 Nom @SUBJ> #1->2 
"<anán>"
	"atnit" <mv> V TV Ind Prs Sg1 @FMV #2->0 
"<nieidda>"
	"nieida" Hum N Sg Acc @<OBJ #3->2   <=====
"<sápmelažžan>"
	"sápmelaš" A Ess @<OPRED #4->3   <=====
"<.>"
	"." CLB #5->2 


```
Det vi får i dag er ok. Men dessuten vil vi:


presentere Comp og Superl hver for seg for seg, med pre-mod og pre-mod of (the adj in question)


Dermed blir det tre klasser av adjektiv:


* adjektiv (uspesifisert, inneholder Pos (uten tag), Comp, Superl)
* adjektiv som er Comp
* adjektiv som er Superl


og for hver av disse tre klassene skal 'pre-mod of' (alle disse taggene være med):
@>N, @<SPRED, @SPRED> @<OPRED @OPRED>, som vist ovenfor.


dessuten skal 'pre-mod' (@>A) presenteres 








## Når det gjelder adverb:


Det vi får i dag er ok. Men dessuten vil vi ha:




adj-heads Adv @>A


```
"<Mus>"
	"mun" Pron Pers Sg1 Loc @HAB #1->2 
"<lea>"
	"leat" <mv> V IV Ind Prs Sg3 @FMV #2->0 
"<hui>"
	"hui" Adv @>A #3->4 <===============
"<buorre>"
	"buorre" A Sg Nom @>N #4->5 
"<girji>"
	"girji" Txt N Sg Nom @<SPRED #5->2 
"<.>"
	"." CLB #6->2 
```


## Når det gjelder verb:


Det vi får i dag er ok. Men dessuten vi vil ha
* substantiv og Pron som fungerer som adverbial (@ADVL) delt inn etter kasus: 
* Ill, Loc, Com, Ess, Gen (som vist ovenfor for substantiv) 
* og dessuten Adv (ordklassen adverb) f.eks. Adv @<ADVL
* og verb (f.eks. V TV Actio Loc @<ADVL)




Dessuten vil vi ha @OBJ:
*substantiv og Pron
*verb (f.eks. V TV Inf @<OBJ)






For verb vil vi ha presentert søkeresultatene presentert i tre grupper:
# Aktive verb (dvs. uten noen tagg Der/PassL eller Der/PassS, NB! vi har ingen tagg for Aktiv)
# Verb med taggen Der/PassL
# Verb med taggen Der/PassS


De to passive typene bare med @SUBJ og @ADVL




Det blir altså som om 
* å kaste
* å kastes
begge blir presentert under "å kaste"


Grunnen til at vi vil skille dem er at passiv snur opp ned
på alle semantiske roller, slik at f.eks. liste over subjekt
blir misvisende hvis vi blander aktive og passive verb.
Til forskjell fra dansk er passiv en derivasjonell kategori i samisk,
men i vår analysator er dette markert dynamisk med grunnverb
pluss eventuell passivavledning.


Her er et samisk eksempel for verbet 'goddit' (å drepe):


Eksempel (a)
```
"<Mun>"
	"mun" Pron Pers Sg1 Nom @SUBJ> #1->2 
"<godden>"
	"goddit" <mv> V TV Ind Prt Sg1 @FMV #2->0 				<=== aktiv
"<luosa>"
	"luossa" Ani N Sg Acc @<OBJ #3->2 
"<.>"
	"." CLB #4->2 


Eksempel (b)
"<Luossa>"
	"luossa" Ani N Sg Nom @SUBJ> #1->2 
"<goddui>"
	"goddit" V* TV Der/PassS <mv> V Ind Prt Sg3 @FMV #2->0   <=== Der/PassS
"<.>"
	"." CLB #3->2 




Eksempel (c)
"<Luossa>"
	"luossa" Ani N Sg Nom @SUBJ> #1->2 
"<goddojuvvui>"
	"goddit" V* TV Der/PassL <mv> V Ind Prt Sg3 @FMV #2->0   <=== Der/PassL
"<.>"
	"." CLB #3->2 
```


for lemmaet (goddit) skal vi dermed ha tre "avdelinger":
```
+---------------------------------------------
|  Verbet goddit							      
|  										      
|  	==> her kommer eksempel av typen (a)      
|  										      
|  Der/PassS av goddit 					      
|  										      
|  	==> her kommer eksempel av typen (b)      

										      
|  Der/PassL av goddit					      
|  										      
|  	==> her kommer eksempel av typen (c)      
|  										      
|  										      
+---------------------------------------------


```






