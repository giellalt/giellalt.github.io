

Denne fila dokumenterer leksikonformatet i fila [sme.nob.dict](http://gtsvn.uit.no/langtech/trunk/langs/sme/tools/mt/cgbased/lex/sme.nob.dict)






# Mekanisme:


Elsewhere for 4 alternativ: lemma 4 1 2 3
Altså: Default er 4, frå og med andre posisjon og mot høgre.


# Ting å hugse på:


* formalismen er lavet til dependens-træer (D=daughter GD=granddaughter, H=head, GM=grandmother),
og de er ikke brugt i cglex. I stedet er der *-kontekster og BARRIER i cglex.
** Jeg kan muligvis tilføje * i formalismen, men hvis det kombinere
med LINK og BARRIER bliver det svært.
** Løsningen må, for mig at se, snarere være at omskrive disse relativ få steder til dependens,
fx D=(<H> @OBJ) for et humant objekt i et verbumsopslag, i stedet for *1 (<H> @OBJ BARRIER CLB OR V).
** Kan I prøve at se, om ogi hvilken grad det er muligt, i sme.nob.dict filen?


Ja, det ser ut til å være en rimelig konklusjon. Poenget er jo å utnytte dependensen, og vi skal se på muligheter for omskriving. Trond ser på det.






Vedlagt er en liste af de pardefs der forekom i cgdix i forbindelse med
oversættelsesopslag (replace_patternsE). Min idé er at erstatte disse
med en replace/insert-opskrift i sme.nob.dict: [from->to], og der kan
være flere end én: [sg_m_RL_f__n] [pl->sg][n->n±m]
'±' bliver til ' ' (space) i output, tomrum er bare et beskyttet tegn i
.dict-formatet. Af samme grund er der '=' alle de steder i ord og
lemmata, hvor i har mellemrum inde i ordet.
Kan I færdiggøre og/eller kommentere omskrivningerne i pardef-filen?
Ja, Lene skal gjøre dette.




Der er nogle enkelte uregelmæssigheder, jeg har udskrevet i toppen af
.dict filen, hvor en cglex-regel syntes at gå efter en oversættelse, der
slet ikke var i  cgdix. Muligvis pga af et matching-problem i mit
script. Men der er tale om ret få tilfælde, som i måske kan klare ved
inspektion i filen.
Ja, det er feil (uoverenstemmelse mellom .lex og .dix. fordi det har vært gjort endringer i dix som ikke er fulgt opp i lex.
Disse tilfellene kan vi bare stryke.




MANGLENDE POS:
En sidste ting: Normalt har jeg altid en POS for et .dict opslag (som
_POS efter lemma), men cgdix havde entries uden POS, som så er blevet
til _X. Er det korrekt gættet, at sme-input alligevel HAR en POS? Fordi
så kan den evt. benyttes, eller også må MT-kernen slå op i dict med _X,
når den ikke kan finde en "tilladt" ordklasse i input (N, A, ADV, V, PRON
Det er riktig at vi ikke alltid har ført det opp i ordpar entrynen i dix. Det er flere grunner til dette:


1) noen tilhører loops for å lage tallord, ala njeallječuođinjeallje = fire-hundre-fire (= 404),
og da skal PoS selvfølgelig bare komme til slutt.


2) noen får PoS i pardefs, og kunne like gjerne hatt det i selve entryen, f.eks. N ABBR - N ACR. Bør vi endre dette før
ny dict-fil lages?


3) noen får flere PoS, f.eks. lemma 'X' får SL:pr og post => TL: pr (sme har mange ambiposisjoner), eller også
lemma 'X' får SL:pr og post og adv => TL: pr og adv
Disse liker jeg ikke helt fordi det er ikke alltid vi vil ha samme oversettelse til nob, og jeg kan omgjøre disse
til ordpar i dix før ny dict-fil lages.


Lene tar seg av dette.








Til brev fredag 14.08


Lige for at sige, at det jo ikke kan "testes" i egentlig forstand, fordi der ikke er en sme2nor kerne endnu, der skal læse og bruge .dict filen.
Hva inngår i en sme2nob-kjerne, og hva skal til for å lage den?


Så det jeg have feedback på, er mest, om I synes, det er realistisk, at have alle semantiske disambigueringsregler med i .dict-filen.
Det er i de aller fleste tilfelle realistisk med .dict.


Spørsmålet er så om vi trenger formalismen fra .lex (altså ordinær CG) i tillegg til .dict. Det vet vi ikke enda, og det er også avhengig av dine *1 og *-1 -tilpasninger \
(nedenfor).
Med mapping av semantiske motiverte tagger, slik som du har skissert, burde fungere for de fleste reglene.
I alle fall er vel mekanismen modulær nok til bare å legge til en .lexc etter .dict i pipeline?






*1 og *-1 har jeg forresten også fået til at virke nu (dog uden BARRIER).
Fint.


Men under alle omstændigheder tror jeg, at meget at det kunne mere præcist formuleres som dependens: D=(....)
Ja, det ser ut til å være en rimelig konklusjon. Poenget er jo å utnytte dependensen, og vi skal se på muligheter for omskriving. Trond ser på det.


Vi ser på .dict og finner disse:


* B = brother
* D = daughter
* GD = granddaughter,
* GM = grandmother
* H = head, (mother)
* P-1 = en posisjon til venstre
* P1 = en posisjon til høyre
* S = self




Er det noen dependensrelasjoner vi mangler?
Finnes det en urmoder (oldemor)?




