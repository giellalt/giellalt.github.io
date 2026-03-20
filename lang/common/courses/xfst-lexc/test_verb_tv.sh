#!/bin/bash
# Bruk:
# echo asavara 1.gen.hfst| sh test_verb_tv.sh
read lemma generatorfil
echo "" > inputfil
while IFS= read -r line
do
    echo "$lemma$line" | hfst-lookup -q $generatorfil | cut -f 1,2
    done < tags_TV.txt
    
    

    
