smefin inprovement
==================


In order to make a smesmn bidix we need a better smefin.


Many t nodes contain parantheses. They shall be moved into <re> elements.


```
   <e>
      <lg>
         <l pos="N">beassanvuohta</l>
      </lg>
      <mg>
         <tg xml:lang="fin">
            <t pos="N">pääsy (rel.)</t>
         </tg>
      </mg>
   </e>
```


The Finnish words should be proofread. The following command gives all
words, the next one only the ones we do not recognize.


```
cat n_smefin.xml|grep '<l '|tr '<' '>'|cut -d">" -f3|see
cat n_smefin.xml|grep '<l '|tr '<' '>'|cut -d">" -f3|ufin|grep '?'|cut -f1|see
```


There are some Saami words not recognized:


```
cat *_smefin.xml|grep '<l '|tr '<' '>'|cut -d">" -f3|usme|grep '?'|wc -l
```


2921 out of 13131 translations contain a space. This number will get
smaller as the parentheses are removed, but some will remain. Todo:


1. First remove parentheses to <re> (above)
1. Then take out entries where all translations contain spaces, 
1. Then  look at they separately, and try to add one-word translations if possible




