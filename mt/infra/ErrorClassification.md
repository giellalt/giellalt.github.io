# Error classification 

#  Diff list


# Åttjutjit tevstajt list-hábmáj:

```
cat texts/TextB_smj_eval1.txt |preprocess > list/smj_eval1.list
cat texts/TextB_smj_mt.txt |preprocess > list/smj_mt.list
```

# Buohtastahttet mt-tevstav ja divoduvvam tevstav:


```
diff -y list/smj_mt.list list/smj_eval1.list|grep '[><]()'|tr -s '\t'|tr -s ' '|sed 's/^/        /' >> wer_analysis.csv 
```


## Diff list boados

```
    Buore      |  Vuogas
        ållo   | enap
     merrasáme <
               > merrasámij
        	   > dáfojn
   ulmusjlåhko | lassánimev
        lassán | ulmusjlågon
           Dav | Boados
  guoradallama | boahtá
       vuosedi | åvddån
           maj | guoradallamin
               > majt  
```

Čilgehus:

```
< = gádoduvvam báhko
> = laseduvvam báhko
|  = målssum bágov (lexical selection)
```


#  Kategorijja


```
1 = lexical selection
2 = difference in generation (same wordform, but different shape)
3 = difference in choice of form (different wordform selected) (ax-ay)
4 = word order changed (ab-ba)
5 = punctuation 
6 = word added (0-a)
7 = word deleted (a-o) 
```


Mierkki riekta lågujn sæmmi linjan gå rievddadus. Jus li avtan bágon moadda rievddadusá laseduvvi divna lågå dan sæmmi linnjaj:


```
1          Buore | Vuogas
1           ållo | enap  
4,3    merrasáme <
-                > merrasámij
6                > dáfojn 
```


Diff lissta ij agev vatte riekta gåvåv rievddadusájs. Vuogas le de divodasstet diff listav vaj tjielggasap vuojnná jur mij la rievdaduvvam ja gåktu:


```
1               Dav | Boados
4,3    guoradallama <		
1           vuosedi | boahtá
6                   > åvddån
-                   > guoradallamin 
3            maj	| majt  
```


Diff-lista divna báhkopáraj (aj daj ma ælla rievdaduvvam):


```
diff -y list/smj_mt.list list/smj_eval1.list|tr -s '\t'|tr -s ' '|sed 's/^/        /' | see 
```
