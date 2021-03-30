

Bnotes on the Kven dictionaries


# nobfkv


* words/dicts/nobfkv/src = the dictionary
* words/dicts/nobfkv/inc = incoming words
* words/dicts/nobfkv/bin = generated files
* words/dicts/nobfkv/scripts = conversion scripts




## Commands


To get the dictionary as a finite state transducer
(in order to check large amounts of words)


cat log_nob_fkv.151010.csv |sort|uniq -c|sort -nr|less


cat log_nob_fkv.151010.csv |grep -v True|sort|uniq -c|sort -nr|less


cat ../../fkvnob/inc/log_fkv_nob.151010.csv |grep -v True|sort|uniq -c|sort -nr|less


cat fkv/lemma_fkv_20150830.csv |cut -c6-|cut -d" " -f1|fkvnob|grep "?"|less


```
svn up ../../fkvnob
cd ../../fkvnob
sh fkvnob.sh
fkvnob
ufkv
kauvas
kauvas  kauvas+Adv
```


Compiling fst-dictionary:


```
cd words/dicts/nobfkv/
sh nobfkv.sh
```


usage: 
* cat listofnobwords.txt | nobfkv


## Dictionary entries


* e = entry
* lg = lemma group
* l = lemma (dictionary headword)
* pos = parto of speeh
* mg = meaning group
* tg = translation group
* xg = example group
* x = example
* xt = example translation
* src = source
* Source types:
** ai = aikamatka
** ta = terje aronsen
** yr = yr
** ki = kvensk institutt


Dictionary entry example


```
   <e src="ai">
      <lg>
         <l pos="N">bølge</l>
      </lg>
      <mg>
         <tg xml:lang="fkv">
            <t pos="N">aalto</t>
            <t pos="N">paaro</t>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="fkv">
            <t pos="N">taitet</t>
         </tg>
      </mg>
   </e>   
```




# fkvnob


tbw.




