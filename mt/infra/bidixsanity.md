# Bidix-sanity script


This script shows all bidix pair where the second (rightmost) word in the pairs
(the smj word in the sme-smj bidix, etc) can not be generated.


To run the script, go to the `dev` directory in apertium-sme-smX: `cd dev/`


Then, in `dev`-directory, write:


`sh bidix-sanity.sh > sanityoutput`


The output is then smX-entries which are not possible to generate with the information given in bidix


## Syntax of output


`sme-lemma<PoS>:smj-lemma<PoS>:^input to analyser/analysis`


## How to use the output


### Examples:


`ahccát<vblex>:ahttsát<vblex>:^ahttsát/*ahttsát$` - "ahttsát" is not in FST.




`aggregáhta<n>:aggregáhta<n>:^aggregáhta/aggregáhtta<n><sem_dummytag><pl><nom>/aggregáhtta<n><sem_dummytag><sg><gen>$ ` – lemma in bidix, "aggregáhta", should be the same as lemma in FST, "aggregáhtta".


`ahte<cnjcoo>:jut<cnjcoo>:^jut/jut<cnjsub>$` - lemma in bidix, "jut", is marked as cnjcoo, but FST analysis gives cnjsub. PoS should be changed in bidix or in FST.


`ahkitvuohta<n>:ahketvuohta<n>:^ahketvuohta/ahket<adj><sem_dummytag><der_vuohta><n><sg><nom>$ ` - "ahketvuohta" is not lexicalised in FST. It can be lexicalised, or, because the words in sme and smj have the same derivation, one can remove the word pair from bidix and, if the wordpair "ahkit"-"ahket" is in bidix, transfer rules should make it possible to generate "ahketvuohta".


## Sorteret listtu


Lea vejolaš heivehit sanityoutput nu ahte oaččut listtu mas eai leat namat, ja mas smX-sánit leat sorterejuvvon sáni loahpa mielde. 
Dalle lea álkit árvvoštallat sániid (seammá sánit bohtet maŋŋálaga) ja maiddái kopieret sániid FST:i.


Go leat `dev`-máhpas:


`sh sorting_sanityoutput.sh`




