# Names and multilinguality


Meeting between **Sjur, Thomas, Trond** on Nov. 14, 2006.


1. Fyrste problem:


* All names in all languages will likely be misunderstood if the material is published in
  risten.no.
* "foreign" names can be as much noise as they are valuable, and including them must be
  done carefully




We need a more principled approach to this.


Background: the name lexicon is getting attention from the SD name/terminology
sections, and they would like to use our name lexicon also for public searching.


Observations:


1) Multilinguality is always optional.


2) We can observe that "foreign" names in texts follows a domination pattern:
majority language forms can be found in minority language texts as real names
("Kautokeino produkter"), whereas minority language names *almost always*
occur in majority language texts as citations. And citations should not be
considered a natural part of the text.


3) When looking at our name classification, multilinguality varies according to:


```
Ani - weak/none? (pet, myth anim. names)
Fem - weak (informative)
Mal - weak (informative)
Obj - strong
Org - strong
Plc - strong whenever parallel forms are available
Sur - none
Tit - strong (titles)
```






Suggestion:


We need to reconsider the *all names in all languages* policy. That policy is
valid only for `Fem, Mal,` and `Sur` (and Ani and Tit?). For
`Obj, Org, Plc` the rule should be that if they have multilingual names, each
name should only be used in it's own language. Then we need a modification
saying that majority language names can be included in minority language
lexicons **if attested** in our corpus.


Also, the majority language varies
according to country (obviously), which means that in a speller context, we
might consider tailoring spellers for each country, leaving out noise relating
to majority language names from another country.


**TODO:**
# finish first version of the editing (**Sjur, Tomi**)
# add @type=secondary and @excl=speller,hyph to all names marked with !SUB (**Saara**)
# test editing of the xml files. If ok, then: (**Sjur, Thomas, Trond**)
# make terms-smX.xml <=== automatically from propernoun-sme-lex.xml (add nob as well)
  (den morfologiske delen skal vere intakt i t.d. propernoun-sme-morph.txt) (**Sjur**)
# convert propernoun-($lang)-lex.txt to a derived file from common xml files
  (**Sjur, Tomi, Saara**)
# Rens terms-sme.xml slik at alle namn har rett tagging for ulik bruk (@type=secondary)
  (**Thomas, Maaren, linguists**)
# Slå i hop stadnamn som ikkje er i same termposten: Helsinki, Helsingfors, Helsset
  (**linguists**)
# Gjer namnematerialet søkbart i risten.no (**Sjur**)
# Legg til evt. manglande parallellnamn (stadnamn) (**linguists**)
# Lag koplingar mellom Niillas og Nils (**linguists**)




```
======= termcenter.xml =========


<dict last-update="">


Before merge:


<entry id="Bb">
  <sem>ORG</sem>
  <langentry lang="sme" ref="Bb">
</entry>


<entry id="DNA">
  <sem>ORG</sem>
  <langentry lang="sme" ref="DNA">
  <langentry lang="nob" ref="DNA">
</entry>


After merge:


<entry id="Bb">
  <sem>ORG</sem>
  <langentry lang="sme" ref="Bb">
  <langentry lang="sme" ref="DNA">
  <langentry lang="nob" ref="Bb">
  <langentry lang="nob" ref="DNA">
</entry>


<entry id="Helsinki">
  <sem>plc</sem>
  <langentry lang="sme" ref="Helsset">
  <langentry lang="swe" ref="Helsingfors">
  <langentry lang="nob" ref="Helsingfors">
  <langentry lang="fin" ref="Helsinki">
</entry>


<entry id="Mali">
  <sem>plc</sem>
</entry>




<entry id="Mali">
  <sem>plc</sem>
  <langentry lang="sme" ref="terms-sme.xml#xpath(@id = 'Mali')Mali">
  <langentry lang="swe" ref="terms-swe.xml#xpath(@id = 'Mali')Mali">
  <langentry lang="nob" ref="terms-nob.xml#xpath(@id = 'Mali')Mali">
  <langentry lang="fin" ref="terms-fin.xml#xpath(@id = 'Mali')Mali">
</entry>




<entry id="Sodankylä">
  <sem>plc</sem>
  <langentry lang="sme" ref="terms-sme.xml#xpath(@id = 'Sodankylä')Sodankylä">
  <langentry lang="swe" ref="terms-swe.xml#xpath(@id = 'Sodankylä')Sodankylä">
  <langentry lang="nob" ref="terms-nob.xml#xpath(@id = 'Sodankylä')Sodankylä">
  <langentry lang="fin" ref="terms-fin.xml#xpath(@id = 'Sodankylä')Sodankylä">
</entry>


<entry id="Göteborg">
  <sem>plc</sem>
  <langentry lang="eng" ref="Gothenburg">  
</entry>


<entry id="Stockholm">
  <sem>plc</sem>
  <langentry lang="fin" ref="Tukholma">  
</entry>


<entry id="Nils">
  <sem>mal</sem>
  <related ref="Niillas">  
</entry>


<entry id="Niillas">
  <sem>mal</sem>
  <related ref="Nils">  
</entry>


=====


Procedure for creating terms-{$lang}.xml
inherit the primary form (i.e. it has default entry type):
If no langentry: use entry id
If langentry, but not your own: use as primary the following:
smj > nob ~ swe > ...
sme > nob > swe ~ fin > ...


Lang versjon:
Export from common:
ownlang.
these additional langs


skal bokmålsprogrammet forstå "Gothenburg" eller ikkje? Nei
skal den færøyske analysatoren innehalde samiske namn eller ikkje?
skal den samiske analysatoren innehalde asiatiske namn eller ikkje?


all other forms than the primary are secondary (i.e., they have entry type=secondary)




Beahkká
Pekka
---
Peter


Sigurd
Sigur
---
Sjur


Cathrin
- - -
Cathrine
Katrine
---
Kari


Niillas    relevant i eit tospråkleg
Nils       norsk-samisk samfunn
---
Nikolaus


Mattis
---
Mathias
Máhtte


Thomas
---
Duommá


| ----------------|
|  IR:            |
|  viktig         |
|                 |
|  stavekontroll: |
|  irrelevant     |
| ----------------|


Arbeidsmåte:
0.
Konverter den leksikalske delen av propernoun-sme-lex.txt til xml, og test redigering
av xml-filene (den morfologiske delen skal vere intakt i t.d. propernoun-sme-morph.txt)


Dersom ok, så:


1:
make terms-sme.xml <=== automatically from propernoun-sme-lex.xml
make terms-smj.xml <=== automatically from propernoun-sme-lex.xml + the smj shortlist
make terms-sma.xml <=== automatically from propernoun-sme-lex.xml
make terms-nob.xml <=== automatically from propernoun-sme-lex.xml (to be added)


--->
gjer om propernoun-($lang)-lex.txt til ei derivert fil frå felles xml.


2:
Rens terms-sme.xml slik at alle namn har rett tagging for ulik bruk (@type=secondary)


3.
Slå i hop stadnamn som ikkje er i same termposten: Helsinki, Helsingfors, Helsset


--->
Gjer namnematerialet søkbart i risten.no


4.
Legg til evt. manglande parallellnamn (stadnamn)


5.
Lag koplingar mellom Niillas og Nils


======= terms-sme.xml =========


<entry id="Helsset">
  <infl lexc="NIILLAS"/>  <== (today: NIILLAS-plc)
  <senses>
    <sense ref="Helsset"/>
  </senses>
</entry>


<entry id="Helsingfors" type="secondary">
  <appl incl="disamb, IR" excl="speller"/>         (use only one?)
  <infl lexc="BERN"/>
  <senses>
    <sense ref="Helsingfors"/>
  </senses>
</entry>


<entry id="Helsinki" type="secondary">
  <infl lexc="NYSTØ"/>
  <senses>
    <sense ref="Helsinki"/>
  </senses>
</entry>


<entry id="Bb">
  <infl lexc="NYSTØ"/>
  <senses>
    <sense ref="Bb"/>
  </senses>
</entry>


<entry id="DNA">
  <infl lexc="BERN"/>
  <senses>
    <sense ref="DNA"/> => ref="Bb" after merge
  </senses>
</entry>


======= terms-nob.xml =========


<entry id="Helsingfors">
  <infl lexc="NAMN"/>
  <senses>
    <sense ref="Helsingfors"/>
  </senses>
</entry>


<entry id="Bb">
  <infl lexc="NFORK"/>
  <senses>
    <sense ref="Bb"/>
  </senses>
</entry>


<entry id="DNA">
  <infl lexc="NFORK"/>
  <senses>
    <sense ref="DNA"/> => ref="Bb" after merge
  </senses>
</entry>


=========================
```
