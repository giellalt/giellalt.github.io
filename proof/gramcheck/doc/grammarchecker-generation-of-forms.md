# Generation of forms in grammarcheckers

The correct form in this case could get many different analyses depending on the syntactic context. Should we just generate the form or also give the correct feedback about which form it is?


```
ADD:real-áktit/áktet (&real-áktit/áktet) TARGET ("akte" Adv) IF	(NEGATE 1 ("vel"))(NEGATE 1 ("vel"))(NEGATE *0 GRAMCHK-VFIN BARRIER GRAMCHK-S-BOUNDARY LINK NOT 0 (COPULAS));
COPY:real-áktit/áktet ("áktit" V IV Ind Prs Du1 &CORRECT) EXCEPT ("akte" Adv &real-áktit/áktet) TARGET (V &real-áktit/áktet) ;
	#$ akte vel
	#$ vel akte
	## moai akte du ollu
	## moai ean akte du
	# MWE
	# the correct form could get the following analyses:
#ákte	áktit+V+IV+Ind+Prs+Du1
#ákte	áktit+V+IV+Ind+Prt+Pl3
#ákte	áktet+V+TV+VGen
#ákte	áktet+V+TV+Imprt+Sg2
#ákte	áktet+V+TV+Imprt+ConNeg
#ákte	áktet+V+TV+Ind+Prs+Sg3
#ákte	áktet+V+TV+Ind+Prs+ConNeg
    ## In ákte das maidege
    ## Ii ávtte dohko mannat

    

    
ADD:real-mannat (&real-mannat) TARGET ("manna") IF (0 Gen OR Acc or Nom)(1 TIME) ;  
COPY:real-mannat ("mannat" V IV Ind Prs Sg1 &CORRECT) EXCEPT ("boađa" N Ess &real-boahtit) TARGET (N &real-mannat) ; 
    ## Sámedikki dievasčoakkámis gieđahalaimet manna vahku sámi giellagažaldagaid viidáseappotge.
#manna	mánná+N+Sg+Nom
#manna	mánná+N+Sg+Gen
#manna	mánná+N+Sg+Acc
```


Challenges for Gramchk:
There could be all kinds of form that are the correct form:




```
ADD:beassat (&real-beassat) TARGET ("beassi") OR ("beassat" NOMAG) IF (*1 Inf BARRIER GRAMCHK-S-BOUNDARY OR GRAMCHK-VFIN);
COPY:real-beassat ("beassat" V IV &CORRECT) EXCEPT ("beassi" N Sg) OR ("beassat" Der/NomAg N Sg) TARGET (&real-beassat) ; 
    ## Sámi filbma lea deahálaš sámi álbmogii sámegiilli beassát muitalit sámi kultuvrra ja giela birra. Sámi filbma lea deahálaš sámi álbmogii sámegiilli beassat muitalit sámi kultuvrra ja giela birra.
    ## 
```


beassan vs. beassán:
```
beassán
beassán	beassi+N+G3+Sg+Nom+PxSg1
beassán	beassi+N+G3+Sg+Gen+PxSg1
beassán	beassi+N+G3+Sg+Acc+PxSg1
beassán	beassat+V+IV+Der/NomAg+N+Sg+Nom+PxSg1
beassán	beassat+V+IV+Der/NomAg+N+Sg+Gen+PxSg1
beassán	beassat+V+IV+Der/NomAg+N+Sg+Acc+PxSg1
beassán	beassi+N+Sg+Nom+PxSg1
beassán	beassi+N+Sg+Gen+PxSg1
beassán	beassi+N+Sg+Acc+PxSg1


beassan
beassan	beassat+V+IV+PrfPrc
beassan	beassat+V+IV+Actio+Nom
beassan	beassat+V+IV+Actio+Gen
beassan	beassat+V+IV+Ind+Prt+ConNeg
beassan	beassat+V+IV+Der/NomAct+N+Sg+Nom
beassan	beassat+V+IV+Der/NomAct+N+Sg+Gen
beassan	beassan+Sem/Act+N+Sg+Nom
beassan	beassan+Sem/Act+N+Sg+Gen
```


beassat vs. beassát:
```
beassát
beassát	beassi+N+G3+Sg+Nom+PxSg2
beassát	beassi+N+G3+Sg+Gen+PxSg2
beassát	beassi+N+G3+Sg+Acc+PxSg2
beassát	beassat+V+IV+Der/NomAg+N+Sg+Nom+PxSg2
beassát	beassat+V+IV+Der/NomAg+N+Sg+Gen+PxSg2
beassát	beassat+V+IV+Der/NomAg+N+Sg+Acc+PxSg2
beassát	beassi+N+Sg+Nom+PxSg2


beassat
beassat	beassadit+V+TV+VGen
beassat	beassadit+V+TV+Imprt+Sg2
beassat	beassadit+V+TV+Imprt+ConNeg
beassat	beassadit+V+TV+Ind+Prs+ConNeg
beassat	beassat+V+IV+Inf
beassat	beassat+V+IV+Ind+Prs+Pl1
```
