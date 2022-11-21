Unhammer report
===============

```
# -*- mode: org -*-
#+TITLE: notat, apertium-sme-nob
#+AUTHOR: Kevin Brubeck Unhammer
#+STARTUP: showall
```

* Statusrapport [2015-04-30 to.]


I korte trekk: Språkparet kompilerer og kan brukast til å omsetja
igjen utan så veldig mange synlege regresjonar frå 0.5.1.
Regresjonstestsettet er på ~73 % dekning (opp frå 14 % ved 1. april),
og genereringsfeil (#) er ned frå 0,82 % av ord til 0,06 % av
genererte ord (dvs. ~12x færre). Av regresjonar som gjenstår, er det
ieš (med variantar) som ser ut til å stå for mesteparten; dette er
rett og slett ting eg ikkje har fått tid til å sjå på enno.


Det finst enno ein del genereringsfeil som må rettast, nokre er berre
ord som manglar frå nob.dix (eller har feil kjønn el.), andre er
transferfeil som kjem ved relativt sjeldne konstruksjonar.


Dynamisk analyse av samansette ord er enno skrudd av sidan dei kan
overstyra leksikaliserte analysar. Sjur har sagt at dette kjem med
vekta FST-ar, så då har eg ikkje brukt tid på det. Dekninga til bidix
er såpass god at det faktisk ikkje er veldig merkbart.


CG-en blir henta frå kjelda i
langs/sme/tools/mt/apertium/disambiguation-mt-gt.cg3, og taggane endra
ved programmet =cg-relabel=. Planen er at dette programmet seinare
skal kunna handtera kompilerte CG-ar slik at me kan bruka den
installerte rlx.bin-fila, men enn så lenge må sme-nob ha tilgang til
kjeldefila, og bruka ein [[https://github.com/unhammer/vislcg3/tree/tag-mangler][fork av vislcg3]].


Eg har òg brukt litt tid på å leggja til ord, transferreglar og
lex.sel-reglar der eg såg ting som mangla. Eg har brukt
parallellkorpuset frå freetext til testing, og for lex.sel ser eg at
eg ofte får gode resultat ved å berre sjå på enkle kontekstar i
parallellteksta, samtidig som det er svært mange ord me manglar
lex.sel-reglar for. Difor brukte eg litt tid siste veka på å [[https://github.com/unhammer/learn-lex-rules][setja opp
]]trening av lex.sel-reglar frå parallelltekst, men dette blei eg ikkje
ferdig med.


* TODO Evaluering
Samanlikn førre utgåve med denne over


- http://wiki.apertium.org/wiki/Assimilation_Evaluation_Toolkit
- BLEU (freecorpus ++ parallelltekst)
- WER (post-edit ein wiki-artikkel og eit blogginnlegg)


* TODO lex-sel på parallelltekst


Bør verkeleg prøva korpusmetodar, for mykje til å ta alt manuelt.


https://github.com/unhammer/learn-lex-rules


* TODO cg-relabel på kompilerte grammatikkar
  og bruk libcg3? med mindre det blir så bra at det blir nyttig for
  andre òg …


* CG tag conversion


What we need for GT→Apertium:


1. turn < and > into ← and → _except_ for special tags <<< and >>>
2. turn / into _
   - will also have to do it with ^ and $ if they are ever used in
     tags, just beware the special meanings of $$ and ^ in CG
3. lowercase all tags _except_ syntax (@) tags
4. hardcode some tag replacements like V→vblex. Pron→prn, CC→cnjcoo,
   CS→cnjsub, Prop → np, N → n OR np, N Prop → np
   - those last two are more challenging, outputting two tags instead
     of one, and matching on two tags instead of one
   - also, even harder in negative contexts if we went the other way,
     we can't do n → N since (NOT 0 (n)) → (NOT 0 (N)) which is too
     strict, should be (NOT 0 (N) - (Prop)), would have to be n →
     (N) - (Prop) which means we can no longer output a plain list,
     need to output a SET even though the input is a LIST


The 1. and 2. are actually general for _any_ CG that is to be used in
Apertium due to the stream format, so we might want to just do that in
cg-comp.




The stream format doesn't disallow upper-case tags, so we probably
don't want to do 3. in cg-comp, that'd need a special tag renaming
program (probably based on GrammarWriter.cpp in vislcg3). The simplest
implementation would just work with a .relabel format like in HFST,
although if we want to handle negative contexts properly, we'd have to
make it look more like


: (n)		TO	(N) - (Prop)
: (np)		TO	(N Prop)


or, in the other direction:
: (N)		TO	(np) OR (n)
: (Prop)	TO	(np)


What we could do, is in GrammarWriter.cpp, when going through LIST's,
we output SET's. This will turn


: LIST foo = n adv;
: LIST bar = np adv;
into
: SET foo = ((N) - (Prop)) OR (adv) ;
: SET bar = ((N Prop)) OR (adv) ;


and


: LIST foo = N adv;
: LIST bar = (N Prop) adv;
into
: SET foo = ((np) OR (n)) OR (adv) ;
: SET bar = (((np OR (n))) + (np)) OR (adv) ;


The first problem is that although SET's can be used almost wherever
LIST's can, they can't be used when referred to with $$ – here we'd
have to change the reference to &&, or we could skip the
set-convertion on any LIST foo if there exists a set $$foo (and hope
none of the tags in those sets have complicated renamings).


The second problem is that CG-3 doesn't actually allow grouping
parentheses – so how can we output (((np OR (n))) + (np)) in a safe
way, when + binds stronger than OR?


We could output some sets at the beginning, e.g. if we have the above
relabelling targets, we could first create
: SET CG3_RELABEL_1 = (np) OR (n)
: SET CG3_RELABEL_2 = (np)
and then we turn
: LIST foo = N adv;
: LIST bar = (N Prop) adv;
: LIST bar = (N Prop Gen) adv;
into
: SET foo = CG3_RELABEL_1 OR (adv) ;
: SET bar = CG3_RELABEL_1 + CG3_RELABEL_2 + (Gen) OR (adv) ;
