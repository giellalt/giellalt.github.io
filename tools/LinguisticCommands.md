# Useful commandoes for linguists


# Words in an analysed text


## How many words, not numerals
```
cat <analysedtext> | grep '"<' | grep '[a-zA-Z]'  | wc -l
```
## How many uniq lemmas, not numerals
```
cat <analysedtext> | grep -v '"<' | cut -d '"' -f2 | grep '[a-zA-Z]' | sort -u | wc -l
```


# Compounds in an analysed text
The syntactic analysis is important for getting the correct lemma through disambiguation. Many compounds are lexicalised in our analyser, and therefore we have to analyse the lemmas once more to find the compounds. \\
For all commands: Add 'sort -u' instead of 'uniq' to get numbers for uniqs


## How many compound nouns
```
cat <analysedtext> | grep -v '"<' | cut -d '"' -f2 | grep '[a-záčžA-ZÁČŽ]' | usme | egrep 'Cmp.*N\+' |cut -f1 | uniq
```


## How many compounds with noun in the first part
We don't want Der/NomAct as N:
```
cat <analysedtext> | grep -v '"<' | cut -d '"' -f2 | grep '[a-záčžA-ZÁČŽ]' | usme | egrep 'N\+.*Cmp' | grep -v 'NomAct.*Cmp' | cut -f1 | uniq  
```


## How many compounds with verb in the first part
We don't want Der/NomAg as V. 
```
cat <analysedtext>| grep -v '"<' | cut -d '"' -f2 | grep '[a-záčžA-ZÁČŽ]' | usme | egrep 'V\+.*Cmp' | grep -v 'NomAg.*Cmp' | cut -f1 | uniq  
```




## How many compounds with adjective the in first part
We don't want +N as A:
```
cat <analysedtext> | grep -v '"<' | cut -d '"' -f2 | grep '[a-záčžA-ZÁČŽ]' | usme | sed 's/^$/¢/' | tr "\n" "€" | tr "¢" "\n" | egrep 'A\+[A-Za-z\+]*Cmp' ]( egrep -v 'N\+[A-Za-z\+)*Cmp' |cut -f1 |tr -d "€"  | uniq 
```


## How many compounds with adverb in the first part
```
cat <analysedtext> | grep -v '"<' | cut -d '"' -f2 | grep '[a-záčžA-ZÁČŽ]' | usme | egrep 'Adv\+.*Cmp' | grep -v 'NomAct.*Cmp' | cut -f1 | uniq  
```






