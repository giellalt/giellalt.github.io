# Unix ja Divvunkurssat


# 1. Unix-gohččumat korpusohcamii


[Fiillat](https://gtsvn.uit.no/langtech/trunk/gt/common/speccorp/coursemat/) maiguin sáhttá stoahkat


#  info ja man (= manual) ja --h
Dieđut gohččumiid birra
* info cat
* man cat
* kwic-snt --h


#  cat (= concatenate)
"váldde"
* cat fiila1.txt (váldde ovtta fiilla)
* cat fiila1.txt fiila2.txt (váldde máŋga fiilla)
* cat *.txt (váldde buot fiilla main lea .txt loahpas)
* cat skuvla* (váldde buot fiilla main lea skuvla álggus)
* cat -n fiila.txt (váldde fiilla ja nummirastte linnjáid)


#  pipe (boallobeavddis: Alt 7) 
"ja de" 
```
|
cat fiila.txt | less
cat fiila.txt | sort | uniq > boadus.txt


```


#  less (= opposite of more) (modus)
"čájet sisdoalu"
* space (bláđe vulos) 
* b (bláđe bajás) 
* g (mana fiilla álgui)
* G (mana fiilla lohppii)
* nummir g (mana linnjánummárii)
* /xxx   (oza sreaŋgga xxx) 


#  wc (= word count)
"rehkenastte"
* -l (galle linnjá)
** wc -l
* -w (galle sáni)
** wc -w


#  kwic-snt
"čájet xxx ja dan birrasa"
* -w (= width) (viidodat, default = 80)
** kwic-snt -w 150 xxx
* -m (= most)(galle dáhpáhusa, default = 100)
** kwic-snt -m 500 xxx
* -b (= before) (sortere gurutbeal konteavstta mielde)


#  grep (= get regular expression), egrep (= extended grep)
"atte buot linnjáid mat sisttisdollet xxx"
* -c (galle linnjá)
** grep -c xxx
* $ (linnjá loahpas)
** grep "xxx$"
* ^ (linnjá álggus)
** grep "^xxx"
* -v (mat eai sisttisdoala xxx)
** grep -v xxx
* grep-ovdamearkkat: 
```
			(Váldde linnjáid mat sisttisdollet:)
grep "láhk[aá]i" 	(láhkai dahje láhkái)
grep "[A-ZČŠŽŊĐŦ]" 	(ovtta dáin bustávain: ABCD....)
grep "[0-9]" 		(ovtta dáin loguin: 0123...)
grep -v "[0-9]" 	(main ii leat lohku)
grep "[139]" 		(ovtta dáin loguin: 139)
grep "139" 		(139)
```
* egrep (viiddiduvvon)
** egrep "(xxx|yyy)"  (main lea juogo xxx dahje yyy)




#  regex
Moadde regex-vejolašvuođa:
```.		vaikko makkár mearka
*		vaikko man galle
\ 		dahká ahte ii dulkojuvvo regex:n, omd. \* mearkkaša *


grep "A.*A"	(váldde linnjáid main leat unnimusat guokte A)
```


#  tr
"buhtte x y:in"
* tr "x" "y"




#  preprocess --abbr=abbr.txt
* skripta mii juohká teavstta nu ahte juohke linnjás lea dušše okta sátni. 
* --abbr váldá vuhtii oanádusaid ja multi word expressions (juohke gielas lea iežas abbr-fiila)




#  sort
"sortere linnjáid alfabehtalaččat"
* -nr (sortere nummára mielde) 
** sort -nr 
* -u (sortere ja unifisere)
** sort -u
* -r (sortere reverserejuvvon alfabehta mielde)
** sort -r
* -o (= output, vurke fiilan)
** sort -o infile.txt outfile.txt


#  uniq
"unifisere linnjáid"
* -c (= count, galle dáhpáhusa)
** uniq -c


#  rev
"reversere linnjáid"


#  sed
"buhtte xxx yyy:in"
* sed "s/xxx/yyy/g"


#  cut
"čuohpa linnjá"
* -d (= delimiter, default lea TAB)
** cut -d " " 
* -f (= field, ja váldde vára)
** cut -d " " -f2
** cut -d " " -f2,3,5
** cut -d " " -f2-




#  Repetišuvdna
* kommando -vuohki objekta
* man kommando
* info kommando
* pipe




#  Bargobihtát:
Gieđahallat muhtun txt-fiilla:
# iskka fiillaid sturrodagaid
# oza dihto sreaŋggaid lessas
# oza dihto sániid, gehčosiid, prefivssaid. Geavat grep ja kwic-snt, ja buohtastahte bohtosiid
# oaččo ovtta sáni juohke linnjái: buohtastahte preprocess ja preprocess --abbr
# ráhkat frekveansaslisttu 
# váldde sániid dihto prefivssain: sortere ja unifisere sihke sáni álggu ja loahpa mielde
# oaččo ovtta cealkaga juohke linnjái




# 2. Divvun-kursa


Bargat Divvun-serveris 
#  Divvun korpus – galle sáni 30.11.12


|   šládja    |  sme  | sma  | smj    
| --- | --- | --- | --- 
|  admin   | 7.860.863 | 110.581   | 124.795    
|  bible   | 505.352 |  50.746  | 83.971    
|  facta   |    1.244.686   |  190.874  |  128.286   
|  ficti   |   231.908    | 144.582   |  41.507   
|  laws    |   797.721    |  0  | 0   
|  news    |   11.004.732    |  281  |  8.346   
|  oktiibuot    |  21.645.262     | 497.064  |  386.905  


Oassi davvisámegiela teavsttain leat jorgalusat dárogielas, ja mii bálddalaston sámi/dáru cealkagiid:
* sme: 2.121.438, nob: 2.449.382


#  korpus
Mo beassat korpusii: 
```
cd ../hoavda/Public/corp/
```


Analysed-máhpain leat dákkár fiillat:
* ccat: buhtes teaksta
* preprocess (rievtti mielde multi): buot vejolaš morfologalaš analysat
* dis: doaivvu mielde rivttes morfologalaš analysa pluss syntávttalaš gilkor
* dep: dependeansanummáriin




#  huksehus, ja mo navigeret


## gos lean ja gosa áiggun? 
* pwd (= print working directiory) (gos lean?)
* ls (= list) (čájet dán máhpa sisdoalu)
* ll (= long list) (čájet dán máhpa sisdoalu buot dieđuiguin)
* mkdir (= make directory)
** mkdir kurssadir (ráhkat kursadir-nammasaš máhpa)
* cd (= change directory)
** cd kurssadir (mana kursadir-nammasaš máhppii)
** cd ..  (mana ovtta ceahki ruovttoluotta)
** cd ../..  (mana guokte ceahki ruovttoluotta)
** cd  (mana ruovttumáhppii)


#  ccat
"váldde xml-fiilla tevstta"


#  alias 
mo doaibmá, mo ráhkadit
* less .bashrc
* emacs .bashrc / see .bashrc


#  svn up 
"ođasmahte buot fiillaid dán máhpas ja buot máhpain mat leat dan vuolábealde"
* svnup (skripta mii ođasmahte buot fiillaid dihto máhpain)


#  analysáhtoriid kompileren


## "ráhkat davvisámi morfologalaš analysáhtora"
* make GTLANG=sme (go leat gt-máhpas)


* Beassat analysáhtor-modusii aliasa bokte: 
** usme (deskriptiiva analysáhtor) ja usmeNorm (normatiiva analysáhtor)
** dsme (deskriptiiva generáhtor) ja dsmeNorm (normatiiva generáhtor)
* Beassat eret dán modusis: Ctrl c


## "ráhkat lullisámi/julevsámi morfologalaš analysáhtora" 
(go leat main/langs/sma dahje main/langs/smj -máhpas):


* dáid gohččomiid maŋŋelaga:
** ./autogen.sh
** ./configure
** make


* Beassat analysáhtor-modusii aliasa bokte: 
** usma dahje usmj (deskriptiiva analysáhtorat) ja usmaNorm dahje usmjNorm (normatiiva analysáhtorat)
** dsma dahje dsmj (deskriptiiva generáhtorat) ja dsmaNorm dahje dsmjNorm (normatiiva generáhtorat)


* Beassat eret dán modusis: Ctrl c








