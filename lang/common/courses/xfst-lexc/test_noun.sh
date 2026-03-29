#!/bin/bash
# Bruk:
# echo illu f.gen.hfst| sh test_noun.sh
read lemma generatorfil
echo "" > inputfil
while IFS= read -r line
do
    echo "$lemma$line" | hfst-lookup -q $generatorfil | cut -f1,2
    done < tags_noun.txt
    
    

    
