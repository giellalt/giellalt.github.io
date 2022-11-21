Dependens-MT-systemet
=====================

Forklaring på noder i .dict:


- **B** = brother
- **D** = daughter
- **GD** = granddaughter,
- **GM** = grandmother
- **H** = head, (mother)
- **P-1** = en posisjon til venstre
- **P1** = en posisjon til høyre
- **S** = self




Eksempel frå Bick 2005.


```
>A = 
meget_ADV :a_lot; # default
S=(>A) :very; # meget (>A) stor  ==> very big     
D=(>A) :much  # svært (>A) meget  ==> very much  
```


I leksikon ser det slik ut:
```
meget_ADV :a_lot; S=(>A) :very; D=(>A) :much
meget_DET ...
meget_INDP ...
```


As an adverb, "meget" is to be translated as "very", if the word itself
(S) functions as adverbial modifier (@>A), while much is used if the
words heads another adverbial modifier as dependent (D). If no
distinctor can be instantiated, the translation a lot is chosen.




ahte_CS :at; S=(CS) P1=(Inf) :å;  S=(CS) :om=at




SELECT ("å"i) (0 ("<ahte>"i) LINK 0 cnjsub) (1 inf);


SELECT ("om at"i) (0 ("<ahte>"i) LINK 0 cnjsub) (-1 ("<diehtu>"i) OR ("<muittuhit>"i) OR ("<váruhit>"i) OR ("<gáibádus>"i));
