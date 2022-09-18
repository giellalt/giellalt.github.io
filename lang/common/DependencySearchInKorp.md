
Dependency Search In Korp
===========


In Korp you may perform quite advanced corpus serches. [Here is a more thorough introduction](cqp.eng.md), but this document comtains some additinoal examples.


## Searching with dependency relations


**Task:** You want to search for all sentences with nouns in Illative that have the verb *liikot* as their dependency mother.


**Procedure:** Write the string below into the *CQP search* interface in Korp.


The search string is as follows (here, it is put on 3 lines):


```
a:[msd="N.*.Ill"]
[]{0,10}
b:[lemma="liikot" & msd="V.*"]
::a.dephead=b.ref
```


Explanation:

This expression 

```
[lemma="liikot" & msd="V.*"]
```

identifies the verb, by giving lemma and part of speech.

```
[]{0,10}
```


this gives zero or more whatever inbetween the two expressions


then the noun, its grammatical specification (singular or plural)
and its dependency relation.


```
[msd="N.*.Ill" & deprel="OBJ"]
```


Then you have to bind these groups to some variable names, 
the syntax is `name:expression`, as follows:


```
b:BUNDLE
a:BUNDLE
```


then you state a joint condition referring to both `a` and `b` with `::` as a delimiter symbol:


```
::a.dephead=b.ref
```


This declares that the dependeny head of `a` shall be the `ref` value of `b` (the word that has `b` as an index). In our context, the dependency head of the illative noun shall be the verb *liikot*.


The order is now fixed to *N + V*. You may switch it, as follows:

```
b:[lemma="liikot" & msd="V.*"]
[]{0,10}
a:[msd="N.*.Ill"]
::a.dephead=b.ref
```

Note that `b` and `a`are kept.





