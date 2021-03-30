# Agenda


* finalize the proper name xml structure
* prepare integration of the kvensk project, if SD accepts


Participants: **Børre, Linda, Sjur, Tomi, Trond**


Questions:


* What (the content):
** make an overview of all info we want to store
** ... and how to organise it
* How (the xml structure):
** one or two files? (two actually implies three)
** what info to split into common parts and project / language specific parts


Views:


* Iconic id better than arbitrary id.
* Single linking, or automatically made double linking
* pro links in common: lg-specific files are not cluttered
* pro links in lg files: that is where the info is


Work process:


* Timbuktu: Add iconic id  and semantics once, to common.
** The machine MAKES the lg entries, based upon these assumpt:
*** one form, inherited from iconic id
*** one sem, inherited from common
*** and we will decide a default declension class for each lg
*** we may leave a tag in place saying "untouched by human hands"
* Helsinki: - same case, but here we need heavy manual editing          
** make a tag saying "now touched (by native speaker)" 


Conclusions:


Double linking, iconic id
Iconic id decided by the following principle:
* Place names: pick Norwegian, Swedish, Finnish, English names. 
* Other names: pick the most common (the one which give most "identical" hits among our lgs:
               sme, smj, sma, nor/nob/nno, swe, fin, eng (sms, smn) )


With the princ of inheritance (lemma inherited from common file):
* inherit right away / at creation time (= larger files, more duplicate info)


```
common        |     swe          |    fin           |    
India_2       |     India        |    Intia         |    
->lg=a        |     ->India_2    |    ->India_2     |    
(->lg=b Intia)|     ->India      |                  |    
sem plc
...


Timbuktu      |     Timbuktu     |    Timbuktu      |    
->lg=a id     |     ->Timbuktu   |    ->Timbuktu    |    
->lg=b id     |                  |                  |    
sem plc       |     <ab>Tmb.</ab>|
...


|   sme:            | ... | nor:   | fin | swe | eng
Tana          |   Deatnu         | ... | Tana   |     |     |
->lg=a id     |   ->Tana         | ... |->Tana  |     |     |
->lg=b id     |                  | ... |        |     |     |
sem plc       |                    ... |              |     |
...                                ... |              |     |
```


What do we store in the "common" file
 the iconic id
 the semantics + info about the world (encyclopedic info)
 links to the lg specific files


What is stored in the lang-specific ones? Linguistic info:
* inflection
* stem
* lemma
* derivation class?
* compounding?
* senses (pointers to concepts)
* orthographical variants (incl. (common) misspellings)
* acronym(s) and abbreviation(s):
** as separate entries or as part of the name entry?


```
NATO => OTAN
NRL => NBR, Ap => Bb


KRD
KRD     KRD
KRD     KRD+N+ACR+Sg+Acc
KRD     KRD+N+ACR+Sg+Gen
KRD     KRD+N+ACR+Sg+Nom


NATO
NATO    NATO+N+ACR+Sg+Acc
NATO    NATO+N+ACR+Sg+Gen
NATO    NATO+N+ACR+Sg+Nom
NATO    NATO+N+Prop+Org+Sg+Acc
NATO    NATO+N+Prop+Org+Sg+Attr
NATO    NATO+N+Prop+Org+Sg+Gen
NATO    NATO+N+Prop+Org+Sg+Nom


"<NATO>" S:1732, 1732, 1732, 1732, 5423, 5849, 5849, 9980
        "NATO" N Prop Org Sg Nom <<< S:1285 @HNOUN
```




Different aspects of abbreviations and acronyms:


* expansion (requires linking/common entry):
** abbr needs to be expanded for IR and  text-to-speech
** translation systems want to transl. them to other lg abbrs (possibly requiring
   (intermediate) expansion)
* linguistic analysis/properties:
** the preprocessor is concerned about abbr's behaviour wrt. sentence delimitation (TRAB, ITRAB)
** speller programs want to correct them whenever wrongly spelled (possibly 
   storing misspellings of abbrs)
** disambiguators want their underlying POS analysis (in addition to their ABBR 
   tag)
** they have inflections of their own
*** St.dieđ. 10 / St. dieđáhus OR St. dieđáhusa... (implicit case)
*** NRK:as (explicit case, except for Acc/Gen, who may be left unexpressed)
** can take part in compunding, possibly derivation


Lexicon conclusion:
* store abbr. that are coming from names as separate entries?
  (we probably have no dotted abbrs for names)
* store accr. as separate entries in the name database, with type="acr"
* store alternative names as separate entries
* all linked together or to the same concept (open??? If to the concept, forces us to allow
  more than one entry/language in the common file)


Transducer conclusions:
* Leave things at status quo for the abbreviations and the acr generator 
* We will return to the issue of double abbrs if they turn up (They probably don't)
* Double acrs arelaready taken care of in the sme-dis.rle urle set (lexical acronyms
  are preferred over generated ones)




# xml example format:


## Concept center (common file):


```
<entry id="India" type="full (default)/abr/acr/alt/err">
 <sem>
  <plc type="xxx" ssrcode="" > <!-- type=5., ssrcode=6. -->
   <geo>
     <country>IN</country>
     <region/> <!-- "fylke" or similar, 11. -->
     <munic/> <!-- 10. -->
     <coord /> <!-- 14. -->
   </geo>
   <regul>
     <gnr/> <!-- 7. -->
     <bnr/> <!-- 7. -->
   </regul>
  </plc>
 </sem>
 <!-- These links are convenience entries, to speed up processing -->
 <langentry lang="sme" ref="India"/>
 <langentry lang="smj" ref="India"/>
 ...
 <langentry lang="fin" ref="Intia"/>
</entry>


<entry id="India_2">
 <sem>
  <fem/>
 </sem>
 <langentry lang="sme" ref="India"/>
 <langentry lang="smj" ref="India"/>
...
 <langentry lang="fin" ref="India"/>
</entry>
```


## Language file for, say, sme:


```
<entry id="India">
 <!-- Do we need the stem, or can it be inferred/inherited from the id?
      NO, only if different from the id. -->
 <stem/>
 <infl lexc="ACCRA">(example?)</infl>
 <name-parts>
 <etym/>
 <rel-name ref="xyz"/>
 <senses>
  <sense ref="India_2"/>
  <sense ref="India"/>
 </senses>
</entry>
```




## Language file for fin:
(numbers refer to Irene's draft, see below)


```
<entry id="Intia"> <!-- 1. -->
 <stem lexc="14">(only if different from id/headword)</stem> <!-- 2. and 3. -->
 <name-parts> <!-- 4. -->
 <variants> <!-- 15. -->
  <variant ref="xyz">
 </variants>
 <etym/> <!-- 24. -->
 <rel-name ref="xyz"/> <!-- 18. -->
 <senses>
  <sense ref="India"/>
 </senses>
</entry>


<entry id="India">
 <stem/>
 <infl lexc="14">(example?)</infl>
 <name-parts>
 <etym/>
 <rel-name ref="xyz"/>
 <senses>
  <sense ref="India_2"/>
 </senses>
</entry>
```


## Language file for kvensk:
(numbers refer to Irene's draft, see the [meeting memo from Nov. 28
| https://giellalt.uit.no/admin/weekly/2005/Meeting_2005-11-28.html#7.+Name+lexicon+infrastructure])


```
<entry id="Porsanki"> <!-- 1. -->
 <stem lexc="14">(only if different from id/headword)</stem> <!-- 2. and 3. -->
 <name-parts> <!-- 4. -->
 <variants> <!-- 15. -->
  <variant ref="xyz">
 </variants>
 <etym/> <!-- 24. -->
 <rel-name ref="xyz"/> <!-- 18. -->
 <senses>
  <sense ref="Porsanger">
   <legal>
    <status/> <!-- 8. -->
    <decision/> <!-- 9. -->
   </legal>
   <source>
    <informants>
     <informant id="some-id"> <!-- 20. -->
      <explanation date="" /> <!-- 19. -->
      <explanation date="" />
     </informant>
    </informants>
    <collectors>
     <collector id="" year=""/> <!-- 21. -->
     <collector id="" year=""/>
    </collectors>
    <archive/>
    <other>
     <print/>
    </other>
   </source>
   <comment/> <!-- 28. -->
  </sense>
 </senses>
</entry>
In the case that  stem = lemma, we have the entry:
 <stem lexc="14"/>
```


These points from Irene's list are still open:


```
Print info - do they belong to the common or language-specific sections?:
12. kartprodukt
13. kartblad


Unclassified:
25. pilhenvisning, nuoliviite, til annen artikkel
    -> How is this different from 18.?


Multimedia - do they belong to the common or language-specific sections?:
26. lydfil
27. bilde(r), illustrasjone(r)
```
