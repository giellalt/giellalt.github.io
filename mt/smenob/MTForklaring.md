MT-forpklaring
==============


Oversikt over filene




## smecg.nor.cg
ægte sets har fået et %-pærfix
Filen smecg.nor.cg er en præ-cg fil, der indføjger ægte sets som <%...> sekundære tags i kohorten, så de kan ses af sme.nor.dict.




## sme.nor.dict
skal lave oversættelsesopslag, semantisk disambiguering og tag-tilpasning på én gang, således at man hurtigt kan overskue og ændre alt relevant ved det enkelte opslag. 


cg-regler for semantisk disambiguering er inde i sme.nor.dict (søg på fx P1=)




Problemet er konteksterne. Der var heldigvis ofte bare nor target og sme i 0-kontekst, og det går sådan set fint for +1/-1 kontekster også, og jeg har endda håndteret mange LINKs som omskrivning til tal-kontekster. 


Men der er et problem - formalismen er lavet til dependens-træer (D=daughter GD=granddaughter, H=head, GM=grandmother), og de er ikke brugt i cglex. I stedet er der *-kontekster og BARRIER i cglex. Jeg kan muligvis tilføje * i formalismen, men hvis det kombinere med LINK og BARRIER bliver det svært. Løsningen må, for mig at se, snarere være at omskrive disse relativ få steder til dependens, fx D=(<H> @OBJ) for et humant objekt i et verbumsopslag, i stedet for *1 (<H> @OBJ BARRIER CLB OR V). Kan I prøve at se, om og i hvilken grad det er muligt, i sme.nor.dict filen?


Der er nogle enkelte uregelmæssigheder, jeg har udskrevet i toppen af .dict filen, hvor en cglex-regel syntes at gå efter en oversættelse, der slet ikke var i  cgdix. Muligvis pga af et matching-problem i mit script. Men der er tale om ret få tilfælde, som i måske kan klare ved inspektion i filen.


En sidste ting: Normalt har jeg altid en POS for et .dict opslag (som _POS efter lemma), men cgdix havde entries uden POS, som så er blevet til _X. Er det korrekt gættet, at sme-input alligevel HAR en POS? Fordi så kan den evt. benyttes, eller også må MT-kernen slå op i dict med _X, når den ikke kan finde en "tilladt" ordklasse i input (N, A, ADV, V, PRON?)


## replace_patternsE.txt
Det andet problem er pardefs, som jeg blankt indrømmer, jeg ikke helt har fattet endnu :)


`replace_patternsE.txt` er en liste af de pardefs der forekom i cgdix i forbindelse med oversættelsesopslag (replace_patternsE). Min idé er at erstatte disse med en replace/insert-opskrift i sme.nor.dict: 


```
[from->to], 
der kan være flere end én: [sg_m_RL_f__n] [pl->sg][n->n±m]
```


'±' bliver til ' ' (space) i output, tomrum er bare et beskyttet tegn i .dict-formatet. Af samme grund er der '=' alle de steder i ord og lemmata, hvor i har mellemrum inde i ordet.


**Kan I færdiggøre og/eller kommentere omskrivningerne i pardef-filen?**


## Understreg


Uden [[...] kan` _...` tilhæfting efter konteksterne forresten
også bruges til bare at angive en oversættelse af det ord, der
instantieres af konteksten. som [[+...] eller [[...+] kan det
bruges til at efterstille eller foranstille et ord efter/før den
normale oversættelse af kontekstordet. Det kan være meget nyttigt til
on-the-fly tilpasninger direkte i .dict-filen.


Teoretisk kan jeg også bare videresende pardefs til output, og så kan
de implementeres af en efterfølgende cg, evt. den samme, der også
laver MOVE etc. Men jeg synes, det ville som sagt være fint, at have
alt lokalt i en .dict fil, hvis det er muligt.




## Morfologisk generering


Morfologisk generering havde jeg tænkt mig skulle laves i et script
til sidst, der selv splejser fst-input sammen for norsk, ved at se på
input-kohorten. Så den sidste CG skal tilføje/ændre de ting, som .dict
filen (læs: den MT-kerne, der læser den) ikke har nået.










## Pipeline


`input -> analyse -> lexicon&transfer -> cg(MOVE) -> generator`


Det er cg-format, der skal komme ud af det
lexicon&transfer-modul jeg forsøger at lave. Som så er input til en cg
med MOVE regler etc., som så igen er input til generatoren.


Min idé var sådan set, at bruge pardef'ene som en opskrift for at lave
om på morfologiske tags (eller tilføje dem), således at når en pardef
siger at norsk skal være pl, så bliver sg i input erstattet med pl. På
denne måde "ser" den sidste cg noget tæt på norsk morfologi, og
tagsene kan direkte høstes ind i fst'en. Det er på den måde jeg gør de
med grønlandsk.


Men hvis I hellere vil det, kan jeg også bare "parkere"
{^barnevakt<n><f><sg><ind>$} som et sekundært tag, og lade de samiske
tags stå. Men under alle omstændigheder skal jeg lige se et eller
flere eksempler på hvordan pardef-styrede ting ser ud i cg-format.




