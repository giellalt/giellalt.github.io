#!/bin/bash
# Bruk:
# echo anipoq ie.fst| sh test_verb_iv.txt
read lemma generatorfil
echo "" > inputfil
while IFS= read -r line
do
    echo "$lemma$line" | hfst-lookup -q $generatorfil | cut -f1,2
    done < tags_IV.txt
    
    

    
