##  Lexicon files


Lexicon files are a part of the *langs/sms/src/morphology* infrastructure.


##  Entry structure


###  <e /> level


TODO: example sms entry


###  <mg /> level


Man skiller mellom synonymer og meningsgrupper. Synonymer har samme <mg>
(meaning group / meningsgruppe) og samme <tg> (translation group /
oversettelsesgruppe). Hvis en entry har flere betydninger, så skilles disse som
forskjellige <mg>. 


###  <tg /> level


Elementet <mg> inneholder en eller flere <tg> (oversettelsesgruppe eller translation group) som igjen kan inneholde:


###  <t /> - a word


``` TODO: example entry with <t /> ```


###  <t /> - a phrase


``` TODO: example entry with <t /> ```


###  <te /> - An explanation: a sentence which explains the meaning of a word, but can't be used in the translation. 


``` TODO: example entry with <t /> ```


###  <re /> - Restriction 


* <re> gives a restriction for the translation, f.ex. norwegian *vest* has the restriction *of clothes*, to separate it from the navigational direction.


``` TODO: example entry with <t /> ```


###  <l /> attribute documentation


TODO: 


###  <t /> attribute documentation


TODO: 


###  <lemma_ref /> for references


*<lemma_ref />* is used to display a reference in the dictionary to another
entry.


Typically these words also include an <analysis /> node in the <lg /> so we can
provide ad-hoc analyses that don't come from the FST.


```
   <e>
      <lg>
         <l pos="Pron" type="Pers">muʹnne</l>
         <lemma_ref lemmaID="mon_Pron_Pers">mon</lemma_ref>
         <analysis>Pron_Pers_Sg_Ill</analysis>
      </lg>
```


Leads to ... 


```
<e>
    <lg>
      <l pos="Pron" type="Pers">mon</l>
    </lg>


```


These are found in *Pron_references_sms2x.xml*.


###  <xg /> Example sentences


TODO: 


In sms these can come in under either <mg /> or <tg />, for good reasons.


``` TODO: example of reasons


```


###  Files with static paradigms


Currently all sms files have a minimal miniparadigm, but in NDS we generate more.


In NDS we can tell the system to not use the static miniparadigm with the @exclude attribute:


```
      <mini_paradigm exclude="NDS">
        <analysis ms="Pron_Pers_Sg1_Gen"><wordform>muu</wordform></analysis>
        <analysis ms="Pron_Pers_Sg1_Ill"><wordform>muʹnne</wordform></analysis>
      </mini_paradigm>
```


If this attribute is not present as in the above, then the static paradigm will
be displayed in NDS.


###  Other files


TODO:
##  Generated miniparadigms 


Miniparadigms are generated in lexicon entries in order to help users. They
vary from POS to POS and sometimes within POS.


### Use/NGminip og Allegro i lexc


TODO: are these the tags we use now in sms?


+Use/NGminip - remove inflectional forms that one does not want to present in
the miniparadigm. One example, North Saami adjectives.


NB: judicious use of +Use/NGminip from sme to clean up many possibilities into
one.


|   Inflection         | Without +Use/NGminip         | With +Use/NGminip
| --- | --- | --- 
|   A+Sg+Nom| heittot                       | heittot
|   A+Attr             | heittogis heittohis (bivttas) | heittogis (bivttas)
|   A+Pl+Nom           | heittogat heittohat           | heittogat
|   A+Comp+Attr        | heittogit heittogut heittoget heittogat heittohit heittohut heittohet heittohat | heittoget heittogat 
|   A+Comp+Sg+Nom      | heittogit heittogut heittoget heittogeabbo heittogat heittogabbo heittohit heittohut heittohet heittoheabbo heittohat heittohabbo | heittogeabbo heittogabbo 
|   A+Superl+Sg+Nom    | heittogeamos heittogamos heittoheamos heittohamos | heittogeamos heittogamos


###  Nouns


Display the whole paradigm in two columns for plural.  In NDS, because there
are case inflections that do not have +Sg or +Pl, we use a special tagset to
separate these cases out to display them across one column.


TODO: Noun attributes that affect miniparadigms ?


|   Bøyning	| Eksempel
| --- | --- 
|  Sg+Nom	 | võrr
|  Sg+Gen	 | võõr
|  Sg+Acc	 | võõr
|  Sg+Ill	 | võʹrre
|  Sg+Loc	 | võõrâst
|  Sg+Com	 | võõrin
|  Sg+Abe	 | võõrtää
|  Sg+Abe	 | võõrtaa      TODO: does this need an attribute to control?
|  Pl+Nom	 | võõr
|  Pl+Gen	 | võõri
|  Pl+Acc	 | võõrid
|  Pl+Ill	 | võõrid
|  Pl+Loc	 | võõrin
|  Pl+Com	 | võõrivuiʹm
|  Pl+Abe	 | võõritää
|  Pl+Abe	 | võõritaa     TODO: does this need an attribute to control?
|  Ess	     | võrrân
|  Par	     | võrrâd


###  Proper nouns


For now, all proper nouns are not generated in Plural.


Sg+Nom Njuõttjokk
Sg+Gen Njuõttjook
Sg+Acc Njuõttjook
Sg+Ill Njuõttjoʹǩǩe
Sg+Loc Njuõttjookâst
Sg+Abe Njuõttjooktää
Sg+Par Njuõttjokkâd


EX: Äʹnnjääuʹraž


TODO: determine how to display these in sms


|   Form   	| Context  | Example     | Translation
| --- | --- | --- | --- 
|    -        |  -        |              |       
|  Sg+Gen     | X pääiʹǩ	 |              |          
|  Sg+Ill     | 	-        |              |           
|  Sg+Loc     |  -        |              |             


TODO: Any plural-only proper nouns?


###  Holidays?


use räjja in context for e.g. eeʹjjpeeiʹv räjja


###  Adjectives


For adjectives we use context as an attribute on the lemma node, in order to
provide an attributive adjective example with a noun.


TODO: determine some good contexts for adjs


|   Inflection        | Context         | Example
| --- | --- | --- 
|  A+Pred+Sg           |                 | oođâs
|  A+Attr              | context:"??"    | ođđ (??)
|  A+Comp              |                 | ođđsab
|  A+Superl            |                 | ođđsumus


TODO: +A+Pred+Pl ?


###  numerals


TODO: 


###  Pronouns


###  Personal pronouns


Most personal pronouns can be generated live from FSTs, depending on the
analysis, but it may be easier to include the whole paradigm in a miniparadigm
because of complexities in tags matching up with lemmas.


This also requires the *type="Pers"* attribute on the *<l />* node, and the
+Sg, +Du, and +Pl marking in the pronoun tag. If these change, we will need to
adjust the paradigm rules.


|   Inflection | Example
| --- | --- 
|  Sg+Nom	  | mon
|  Sg+Gen	  | muu
|  Sg+Acc	  | muu
|  Sg+Ill	  | muʹnne
|  Sg+Loc	  | muʹst
|  Sg+Com	  | muin
|  Sg+Abe	  | muutää
|  Ess	      | muuʹnen
|  Par	      | muuʹđed




TODO:


###  Indef pron


måtam Måtmin


TODO:


##  Pregenerated paradigms 


###  pronouns


Because the analyzer uses tags that make generation difficult, the thought was
to include miniparadigms in the XML file that will contain the whole displayed
paradigm.


```
TODO:
```


###  negative verb


TODO:


```
Sg1
Sg2
Sg3
Pl1
Pl2
Pl3
```


##  Homonymous entries


Homonymous entries (lemma + POS) may be tricky for a combination of the lexicon
and the analyzer. An additional way to deal with this is to mark these on an
additional attribute, POS type, or something else.  This is also problematic
when generating the correct paradigm for the lexicon entry, or when lining up
analyses with the meanings.


TODO: jokk is homonymous in sms, find examples for documentation from there.


###  Non-systematic homonymy 


TODO:


<l> element gets an attribute hid="1" or hid="2". The lemmas are marked
similarly in the norm FST. Thus, 



 
|   Nom  | Gen  	| norsk 	| norm-fst-analyse	 
| --- | --- | --- | --- 
|  lohkki |  lohki  	|  lokk		| lohkki+N+Sg+Nom
|  lohkki |  lohkki 	|  lesar 	| lohkki+N+Actor+Sg+Nom




```


TODO: xml examples of homonymous entries (either actor type, or hid type, etc.)


1.


2.


```


