# Oppdatering av de sørsamiske ordbøkene

**Kommentar 2022:** Dette dokumentet er frå 2011, vi treng ein ny plan.




## Ny plan for oppdatering til 24. januar 2011


### Plan
1. 272 ord ikkje i fst-norm (smanob/2011_dict/no-analysis_smanob/
) (**Thomas**)
1. inc/Todo_jan2011/20110113_001-200_noun_not_in_dict.csv  (**Cip** til xml-format og legge til noun-fila) -- status=done
1. xxx i smanob/src-filene (**Maja**) OK!
1. parenteser i smanob/src
	1. adv (**Maja**) OK! 
	1. num (**Cip**) -- status=done
	1. po  (**Maja**) OK!
	1. pr  (**Maja**) OK!
	1. pronIndef (**Cip**) -- status=done
	1. pronPers (**Cip**) -- status=done
	1. pronRel (**Cip**) -- status=done
	1. VNeg (**Cip**) -- status=done 






Slash, eller, el. problem. Hva skal vi gjør? 

```
src>grep 'n/' *xml
a_smanob.xml:               <xt>Han/Hun den lykkelige!</xt>
a_smanob.xml:               <xt>Han/Hun er så klønete!</xt>
a_smanob.xml:               <xt>Han/Hun er så udannet!</xt>
n_smanob.xml:               <xt>Det var min avdøde mann/kone.</xt>
po_smanob.xml:               <xt>Han/Hun er ved siden av meg.</xt>
po_smanob.xml:               <xt>Han/Hun reiste seg opp fra ved min side.</xt>
po_smanob.xml:               <xt>Han/Hun renner på ski uten stav.</xt>
po_smanob.xml:               <xt>Han/Hun kom etter meg.</xt>
po_smanob.xml:               <xt>Han/Hun dro frem en stor pakke fra under senga.</xt>
po_smanob.xml:               <xt>Han/Hun kom bakfra meg.</xt>
po_smanob.xml:               <xt>Av den grunn tror han/hun ikke det er riktig.</xt>
po_smanob.xml:               <xt>Han/Hun kommer gående bakfra det fjellet.</xt>
po_smanob.xml:               <xt>Han/Hun kommer fra reinhjorden.</xt>
po_smanob.xml:               <xt>Han/Hun kommer fra litt lenger øst enn den siidaen.</xt>
po_smanob.xml:               <xt>Han/Hun sparket mot den.</xt>
po_smanob.xml:               <xt>Han/Hun kjørte borti bilen.</xt>
pr_smanob.xml:               <xt>Han/Hun renner på ski uten stav.</xt>
pr_smanob.xml:               <xt>Han/Hun kom på langs etter det skinnet.</xt>
pronPers_smanob.xml:            <t dict="no" oa="yes" pos="pron" tcomm="no">han/hun</t>
pronPers_smanob.xml:               <xt>Han/Hun hører oss ikke mer!</xt>
pronPers_smanob.xml:            <t dict="yes" oa="yes" pos="pron" tcomm="no">han/hun</t>
pronPers_smanob.xml:            <t dict="no" oa="yes" pos="pron" tcomm="no">til han/henne</t>
pronPers_smanob.xml:            <t dict="no" oa="yes" pos="pron" tcomm="no">til han/hun</t>
pronPers_smanob.xml:               <xt>Han/Hun fortalte at det det var bra med dem.</xt>
pronPers_smanob.xml:               <xt>Han/Hun fortalte at han hadde fått den av dem.</xt>
pronPers_smanob.xml:               <xt>Han/Hun fortalte at med dem var det bare bra!</xt>
pronPers_smanob.xml:            <t dict="yes" oa="yes" pos="pron" tcomm="no">han/hun/den/det</t>
pronPers_smanob.xml:               <xt>Han/Hun er kommet.</xt>
pronPers_smanob.xml:            <t dict="no" oa="yes" pos="pron" tcomm="no">ham/henne/den/det</t>
pronPers_smanob.xml:               <xt>Piere kom sammen med han/henne.</xt>
pronRel_smanob.xml:               <xt>Er hun/han her?</xt>
pronRel_smanob.xml:               <xt>Den ungen, som jeg strikket en lue til, hvor ble han/hun av?</xt>
pronRel_smanob.xml:               <xt>Den ungen, som jeg strikket en lue til, hvor ble han/hun av?</xt>
vCop_smanob.xml:               <xt>Han/Hun er her.</xt>
vCop_smanob.xml:               <xt>Han/Hun er ikke her.</xt>
v_smanob.xml:               <xt>Han/Hun ble igjen hjemme.</xt>
v_smanob.xml:               <xt>Han/Hun ble igjen hjemme.</xt>
v_smanob.xml:               <xt>Han/hun ville forøke reinflokken sin.</xt>
v_smanob.xml:               <xt>øsne knokkelen/korsbeinet fra steika/låret</xt>
v_smanob.xml:               <xt>Hun/han har spart penger i lang tid.</xt>
v_smanob.xml:               <xt>Han/Hun liker ham/henne vel ikke.</xt>
v_smanob.xml:               <xt>De tror han/hun er i Tydalen.</xt>
v_smanob.xml:               <xt>Jeg skal se etter om han/hun ennå er der.</xt>
v_smanob.xml:               <xt>Han/Hun unner ikke seg selv noe!</xt>
```


## Gå gjennom beslekta lemma
 (f.eks. *-sovvedh, -gåetedh*) og se på
  oversettelsene.

## Eventuelt sjå meir på lukka ordklasser


## Cleaning up:


### Paranteseners: status=done


Disjunction med 'eller', 'el.' eller '/' må riddes opp óg: status=todo (see above)




## Tidsplan 2011:


- Daglig routiner:
	- hver natt skal paradimene for lemmaene genereres: resultatene skall sjekkes inn i svn daglig (**Cip**)
	- check the content of lemma, t, tf, re, x, and xg (**Cip**)
	- check translations with dict=yes and those that have no dict-attribute: report them to the linguists (**Cip**)
- write a filter that sieve dict-relevant infos for easier checking
- Torsdag 20.1. Deadline for innhald til Hattfjelldal
- Fredag 21.1. Kompilering
- Helga: første versjon som macdict og stardict (dessverre som før, med det er ok for iPod/iPhone og eventuelt også for annen mobile: test it!)
- Helga: Ad lib-testing
- Måndag: 23.1. **Eventuell** nykompilering




----


# Gammal plan for oppdatering til 24. januar 2011


## smanob


1. Gå gjennom beslekta lemma (f.eks. -sovvedh, -gåetedh) og se på
  oversettelsene.
1. Gå gjennom de mest frekvente sørsamiske ordene, og legge til (OK)
	1. Desse orda ligg i  words/dicts/smanob/inc/freq_fst_missing_in_dict.csv (OK)
	1. Gå gjennom grammatikken:
	1. Sjekk at fst gir lemma-analyse av alle lemma (dvs. at fst kjenner igjen
   oppslagsorda som oppslagsord)
	1. Sjekk at ord som ikke skal ha flertall blir merka som det
1. Gå systematisk gjennom lukka ordklasser
	1. Postposisjoner
	1. Modale hjelpeverb
	1. …




### Status quo desember 2010


Vi har ei nedlastbar ordbok smanob med morfologi og ei nettordbok
som representerer xmlfilene i svn-treet.




----


## nobsma


Snuing til nobsma blir seinare i 2011.

Prioriterte oppgåver når vi kjem så langt:


1. Lage artikler for lukka ordklasser
1. Gå gjennom manglende lemma




