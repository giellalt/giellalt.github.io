# Oppdatering av de sørsamiske ordbøkene






# Ny plan for oppdatering til 24. januar 2011


## Plan
# 272 ord ikkje i fst-norm (smanob/2011_dict/no-analysis_smanob/
) (**Thomas**)
# inc/Todo_jan2011/20110113_001-200_noun_not_in_dict.csv  (**Cip** til xml-format og legge til noun-fila) -- status=done
# xxx i smanob/src-filene (**Maja**) OK!
# parenteser i smanob/src
## adv (**Maja**) OK! 
## num (**Cip**) -- status=done
## po  (**Maja**) OK!
## pr  (**Maja**) OK!
## pronIndef (**Cip**) -- status=done
## pronPers (**Cip**) -- status=done
## pronRel (**Cip**) -- status=done
## VNeg (**Cip**) -- status=done 


=====
Bare for moros skuld og å bevise Trond at det fins entrien som IKKE har noe
t*-elemente med dict="yes"
@cip: done by Trond!
=====


=====
@cip: What to do with multiword_smanob.xml and usikre.xml?
@trond: ignore them both!!!
=====


@cip: Slash, eller, el. problem. Hva skal vi gjør? 
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


# Gå gjennom beslekta lemma (f.eks. *-sovvedh, -gåetedh*) og se på
  oversettelsene.
# Eventuelt sjå meir på lukka ordklasser


## Cleaning up:


### Paranteseners: status=done


### Disjunction med 'eller', 'el.' eller '/' må riddes opp óg: status=todo (see above)


### xxx: status=done


## Tidsplan:


*Daglig routiner:
** hver natt skal paradimene for lemmaene genereres: resultatene skall sjekkes inn i svn daglig (**Cip**)
** check the content of lemma, t, tf, re, x, and xg (**Cip**)
** check translations with dict=yes and those that have no dict-attribute: report them to the linguists (**Cip**)
* write a filter that sieve dict-relevant infos for easier checking
* Torsdag 20.1. Deadline for innhald til Hattfjelldal
* Fredag 21.1. Kompilering
* Helga: første versjon som macdict og stardict (dessverre som før, med det er ok for iPod/iPhone og eventuelt også for annen mobile: test it!)
* Helga: Ad lib-testing
* Måndag: 23.1. **Eventuell** nykompilering




----


# Gammal plan for oppdatering til 24. januar 2011


## smanob


# Gå gjennom beslekta lemma (f.eks. -sovvedh, -gåetedh) og se på
  oversettelsene.
# Gå gjennom de mest frekvente sørsamiske ordene, og legge til (OK)
## Desse orda ligg i  words/dicts/smanob/inc/freq_fst_missing_in_dict.csv (OK)
# Gå gjennom grammatikken:
## Sjekk at fst gir lemma-analyse av alle lemma (dvs. at fst kjenner igjen
   oppslagsorda som oppslagsord)
## Sjekk at ord som ikke skal ha flertall blir merka som det
# Gå systematisk gjennom lukka ordklasser
## Postposisjoner
## Modale hjelpeverb
## …




# Status quo desember 2010


Vi har ei nedlastbar ordbok smanob med morfologi og ei nettordbok
som representerer xmlfilene i svn-treet.




----


## nobsma


Snuing til nobsma blir seinare.


Prioriterte oppgåver når vi kjem så langt:


# Lage artikler for lukka ordklasser
# Gå gjennom manglende lemma




