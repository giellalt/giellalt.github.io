



Dokumeanta čilge mo galgá bargat parallelliseremiin ja sirdit fiillaid prestable-katalogii.


# Katalogat
Proseassa: Vuos konverteret, ja dan maŋŋil parallelliseret.


* **orig**: originálafiila (pdf, txt dahje html) ja meta-fiila (xsl)
* **converted**: originálafiillat konverterejuvvojit xml-formáhtan. 
Dáid fiillaid ii galgga divvut, muhto sáhttá rahpat daid jus háliida 
geahččat mo konverteren lea lihkkostuvvan, omd. mo prográmma dovdá gielaid. 
Jus fiillat eai leat paralleallat, de ii-sámi fiilla galgá sihkkojuvvot, ja maiddái 
dieđuid paralleallafiillaid birra sámi-fiillain.
* **prestable**: dárkkistuvvon parallelliserejuvvon fiillat. Mii háliidit divvut 
orig-máhpas nu ollu go vejolaš nu ahte tmx-fiillat automáhtalaččat 
šaddet buorit.


## Gohččumat
Dihtogielalaš gohččumat geavahit nob2sma ovdamearkan


### Viežžat corpustools ođđaseamos veršuvnna


Go leat main/tools/CorpusTools/


```
python setup.py install --user --install-scripts=$HOME/bin
```



### Kompileret tokeniser gielaide maid dárbbašat


sihke langs/nob- ja langs/sma-máhpas:


```
./autogen.sh


./configure --prefix=$HOME/.local --without-xfst --with-hfst --enable-tokenisers --enable-reversed-intersect --enable-alignment


make -j


make install
```


### Gávdnojitgo paralleallafiillat dihto giellabáras dihto máhpas?
Doaibmá freecorpusis/ ja boundcorpus/ -máhpain:


```
grep -rl '"sma" location="..*"' --include=*.xsl orig/nob/science/
```


### Konverteret buot fiillaid dihto máhpas
convert2xml orig/nob/science/


convert2xml orig/sma/science/




### Parallelliseret buot fiillaid dihto máhpas


parallelize -l2 sma converted/nob/science/


### Reparallelliseret dihto fiilla
Go leat rievdadan xsl-fiillas, de dát gohččun sihke konvertere ja parallellisere ođđasit:


reparallelize FIILANAMMA.tmxhtml


# Bargovuohki


1. Iskka tmx-fiilla **tmx**-katalogas (mii ii leat svn:s)
2. Divo xsl-fiilla **orig**-katalogas
3. Vejolaččat raba fiilla **converted**-katalogas geahččat omd. gielladovdama dahje eará mii ii leat doaibman nugo galggašii, muhto ále divo dán fiillas.
4. Parallellisere ođđasit: `reparallelize tmxhtml`
5. Go leat duhtavaš, dahje don it sáhte fikset eanet xsl-fiillas, de sirddát fiilla omd. prestable/tmx/nob2sme/ ja šekket sisa (vuos svn add). 
Čále logas leago parallelliseren OK vai ii.
6. Jus parallelliseren ii leat OK, de sáhtát divvut prestable-fiilla, ja de šekket ođđašit sisa kommentáraiguin (muital maid leat bargan).


## Iskka tmx-fiilla tmx-katalogas


Mana buot omd. nob2sma-katalogaid alfabehtalaččat
čađa (vuos *freecorpus/tmx/nob2sma/admin/depts/other_files* 
ja dan maŋŋel čuovvovaš kataloga (*udir.no*) jna.:
Lea vejolaš rahpat buot fiillaid oktanaga kommandolinjjás: `open *.tmx`
dahje dušše oasi, jos leat hui ollu fiillat: `open a*.tmx` jna.


Jos .tmx-fiillas ii leat parallealla sisdoallu:
* raba fiillaid orig-máhpas, oaidnit sisdoalu: 
  * html `open fiila.html`, dahje 
  * pdf `open fiila.pdf` dahje 
  * txt `open fiila.txt` 
* `see fiila.html.xsl` redigeret xsl-fiilla.
* vej. `see fiila.html` redigeret html-fiilla.


## Divo xsl-fiilla orig-katalogas


Mo rievddadit xsl-fiilla jos paralleallafiillas lea feaila:


* jos paralleallafiila ii leatge parallealla, de váldde liŋkka eret
  * oza *"parallels"*
* jos multilingual/monolingual ii leat riekta, de divo
  * oza *"monolingual"* (1 mearkkaša ahte lea monolingual)
  *  divo, jus dárbu: <xsl:variable name="mainlang" select="'sma'"/>
  *  divo, jus dárbu: <xsl:variable name="mlangs"> 
  * *mlangs* galget dušše gielat, mat leat dokumeanttas
  * *mlangs* galgá leat guorus jus monolingual
* lasit almmuhanjagi (jus ii leat), jus lea vejolaš dan oaidnit
  * oza *"year"*
* geavat iešguđetlágan skip-funkšuvnnaid (Reetta diehtá)
* čuokkis gos galgá leat rihkku mii fikset .xsl-fiillas


## Divo html-konverteren corpustools/htmlcontentconversion.py




## Divo html-fiilla orig-katalogas
* Raba geahččat sisdoalu: `open fiila.html`
* Raba divvut: `see fiila.html`
* Raba geahččat konverterema (omd. gielladovdama): converted-máhpas `see fiila.html.xml`. Dán fiilla it galgga divvut, danne go dat genererejuvvo




### Maid sáhtát divvut orig-fiillas?


Nu unnán go vejolaš. Jos lea vejolaš fikset ášši .xsl-fiillas, de daga dan.
Jos lea jierpmálaš divvut prestable-tmx-fiillas, de daga dan.


**Metateaksta**

 
Sáhtát orig-fiillas sihkkut metateavstta, mii bilida parallelliserema dahje gielladovdama, omd.
* Powered by ..., ja dalle ii galgga leat *eng* xsl-fiillas


Fuom, ahte "buhtis" metateaksta (taggaid haga) lea álkit sihkkut .xsl-fiillas.


**html-taggat**


Jos parallelliseren manná endorii html-taggaid dihte, lea 4 molssueavttu


Nu




Muhto jos lea álkibut divvut tmx-teavstta, de daga na:


1. svn mv prestable/../fiila.tmx stable/../fiila.tmx + svn ci 
2. rievdat <tu>-nodaid
3. sjekke sisa divvojuvvon veršuvnna




Tagga (+ attribuhtta) lea vejolaš váldit eret das:

 
`$GTHOME/tools/CorpusTools/corpustools/htmlcontentconverter.py` 


Prinsihpas lea maid vejolaš dahkat dan juohke fiillas, .xsl:as:


```
    <xsl:variable name="skip_elements" select="'.//body/div[1]/h2[1]'"/>
```


muhto dat ii velge doaimma.


## Parallellisere ođđasit


### jus lea rievdadan xsl-fiilla de 
* vuos `realign --convert fiila.tmx`
* ja dan maŋŋel `realign fiila.tmx`


### Jos lea buorre boađus:
Šekke sisa ođđa veršuvnnaid, sihke orig, convert ja prestable, ja merke OK bargolistui.


### Jos lea measta riekta:
Šekke sisa ođđa veršuvnnaid, sihke orig, convert ja prestable, ja 
čále kommentára bargolistui. 


### Jos ii veahket, 
Čále kommentára bargolistui, ja sihko tmx-fiilla ja dan html-veršuvnna prestable-katalogas, e.g.


```
svn rm prestable/tmx/nob2sma/facta/fiila.tmx
svn rm prestable/tmx/nob2sma/facta/fiila.tmx.html
svn ci -m "ii lean parallealla" prestable/tmx/nob2sma/facta/fiila.tmx prestable/tmx/nob2sma/facta/fiila.tmx.html 
```


Lea vejolaš
* váldit eret teavstta nob-fiillas
* váldit nob-teavstta eret smX-fiillas
** muhto buoret lea dahkat dan tmx-fiillas prestable-katalogas stable-katalogii.

 


## Konverterenprográmma buggat
Čále listui ahte lea bugga, ja makkár dat lea, omd BUG-punktum dahje BUG-mellomtittel dahje BUG-språkgjenkjenning


omd mo listu sáhttá leat (go kommentára lea linnjá álggus, de lea álki sorteret:
```
OK :  prestable/tmx/nob2sma/facta/gielemnastedh.no/apen-barnehagedag.html.tmx.html
Sihkkon :  prestable/tmx/nob2sma/bible/osko/index.php_kat_id=102_art_id=88.html.tmx.html
To_be_fixed BUGpunktum (dahton loahpas) :  prestable/tmx/nob2sma/admin/sd/samediggi.no/sametinget-inviterer-til-duodjikonferanse-27.-28.-januar-2016.html.tmx.html
```


