# Designing resources

This document explores some of the issues that come up when preparing
linguistic resources for NDS. If you're looking for the technical aspects of
starting a new language pair within NDS, see [Starting a new project](StartingNewLanguagePairs.jspwiki).


#  Intro


As an experiment, I took a look at creating an NDS instance with Irish, which
previously didn't have a lexicon, but had a mostly functioning analyzer. Many
lexical resources exist for Irish, but none exist within the GT milieu.


Data was first converted to TSV, under the belief that it would be easier to
create bidirectional resources from this, and also that TSV would be easier to
run through automated tools and merge with other resources. Finally, the TSVs
were 'rendered' into XML. Possibly a good choice for this would have been XSLT,
but as I am not amazingly skilled with XSLT, I chose to use the Jinja2
templating engine (used in NDS) to render TSV rows into the GT lexicon format.




#  Initial thoughts


 - Who are your users? How skilled might they be with the languages? Advanced
   users looking for a reference tool to read a language they don't know as
   well? Beginning users looking to learn a language?




##  Priorities?


If your first concern is where it's best to spend more time, it seems like that
should go to the lexicon over the FST. As long as the FST is capable of some
amount of lemmatization, and returning POS, and can do so for a decent (but not
extensive) amount of words, the primary functions of serving as a dictionary
will work. Also, NDS can also function without an FST (but that's not as cool,
right?)


The reason more time should be spent on the lexicon, is because you'll see
fairly quickly whether you have too much or not enough information. From a
design perspective, too much can be a problem too. 


With Irish, since my primary source was a wordnet, there were a lot of
definitions coming up, sometimes very obscure. The first iteration ended up
looking something like the following, for a search for When the user searched
for *ól* 'drink'.


```
     ól (n) - 
        drink
        drinking
        boozing
        drunkenness
        crapulence              *
        drinking
        imbibing
        imbibition
        liquor
        spirits
        booze
        hard drink
        hard liquor
        John Barleycorn         *
        strong drink  
```


With a wordnet, I probably have automated ways of resolving this-- but with a
lexicon for this type of dictionary, spending some time resolving issues like
thesse will do a lot for ease of use. On the other hand, one may want to
preserve rarer definition if providing a reference tool.


##  Lexicon


###  Discovered issues:


- A newly parsed lexicon had too much. Became important to trim it down:
	- restrict translations by matching POS of both sides
	- consider lemmatizing both sides, and discarding non-lemmas or giving them less priority
	- be careful with the amount of annotations <re /> and <te />




##  Morphology / FST


The dictionary may serve as a quick way to test your morphology for both
generation and analysis.


###  Discovered issues 


- Words do not generate
- Generation is surprisingly slow (9 forms for a paradigm may add up if generation takes .5 seconds for one form)
- Words generate incorrectly
- Words are not analyzed


#  Refinements


For pedagogical lexica, you may want to produce pre-generated paradigms for
closed classes of words. Pronouns may need more work. Pronouns with cases and
specialized uses could use examples.


*Sentence examples*


```
     <tg xml:lang="nob">
        <t pos="Pron" type="Pers">sørligst</t>
        <xg>
           <x>Lulimus báiki Norggas lea Lindesnes.</x>
           <xt>Den sørligste plassen i Norge er Lindesnes.</xt>
        </xg>
    </tg>
```


[Example sentence](img/example.png)


*Index entries*


Sometimes there isn't an easy way of representing a translation of a word
without lots of information. In the case of North Saami and Norwegian, the
Norwegian word *hverandre* 'eachother' may have many translations to North
Saami depending on case, and person. Since displaying all of these on one page
would result in >40 definitions, we have a meta-entry to allow the user to
drill down into various categories:


```
    1.) Step one:


     hverandre -> choose person (two people, more than two people)


    2.) Step two:


     hverandre (about two people) -> choose case
       - from eachother (locative)
       - to eachother (illative)
       - with eachother (commitative)


    3.) Step three: present definitions.
```


TODO: images


This requires some specific formatting in the XML: 


```


    - <l til_ref="hverandre" />
    - <re fra_ref="omtopersoner">
    - <l orig_entry="hverandre"> 


```


```
   <e>
      <lg>
         <l pos="Pron" type="Recipr" til_ref="hverandre">hverandre</l>
      </lg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="omtopersoner">om to personer</re>
            <t/>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="omflerepersoner">om flere enn to personer</re>
            <t/>
         </tg>
      </mg>
   </e>
   <e>
      <lg>
         <l pos="Pron"
            type="Recipr"
            orig_entry="hverandre"
            til_ref="omtopersoner">hverandre: om to personer</l>
      </lg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="2hverandrelok">fra hverandre (lokativ)</re>
            <t/>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="2hverandreill">til hverandre (illativ)</re>
            <t/>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="2hverandreess">som hverandre (essiv)</re>
            <t/>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="2hverandreakkgen">hverandre (akkusativ-genitiv)</re>
            <t/>
         </tg>
      </mg>
      <mg>
         <tg xml:lang="sme">
            <re fra_ref="2hverandrekom">med hverandre (komitativ eller adverb)</re>
            <t/>
         </tg>
      </mg>
   </e>
```


[Munnje -> mun](img/munnje_mun.png)


```
   <e>
      <lg>
         <l pos="Pron" type="Pers">munnje</l>
         <lemma_ref lemmaID="mun_pron_pers">mun</lemma_ref>
         <analysis>Pron_Pers_Sg1_Ill</analysis>
      </lg>
      <mg>
         <tg xml:lang="nob">
            <t pos="Pron" type="Pers">til meg</t>
            <xg>
               <x>Muital munnje!</x>
               <xt>Fortell til meg!</xt>
            </xg>
         </tg>
      </mg>
   </e>


-->


   <e>
      <lg>
         <l pos="Pron" type="Pers">mun</l>
         <analysis>Pron_Pers_Sg1_Nom</analysis>
      </lg>
      <mg>
         <tg xml:lang="nob">
            <t pos="Pron" type="Pers">jeg</t>
            <xg>
               <x>mun lean</x>
               <xt>jeg er</xt>
            </xg>
            <xg>
               <x>Mus lea beana.</x>
               <xt>Jeg har en hund.</xt>
            </xg>
         </tg>
      </mg>
   </e>
```




##  Troubleshooting


- Sometimes no entries would display, mostly this was due to XML formatting
 issues (`@xml:lang`, no POS in `<l />`), having more documentation of the type
 of XML needed for NDS would be great. We have DTDs already, but maybe NDS
 needs a DTD that will tell you at minimum "this lexicon will work, and this
 won't because..."
- The analyzer was out of line with the lexicon for i.e., POS, some tweaks
 needed to be made.


##  Morphology




###  Discovered issues
 * 500 error with the output
 
 ```
  500


Whoops! There was some kind of error.
Invalid tagset <pos>. Choose one of: 
```
 - create and add the language-corresponding tagset-file 
   with the name xxx.tagset (xxx=three-letter-code of the language, e.g. for Russian rus.tagset) in
```
 neahtta/configs/language_specific_rules/tagsets
```


###  Troubleshooting


##  Reader


 - Determine special characters in the language that will break up the user's
   OS's ability to properly tokenize words. Irish for example, may use hyphens
   in words, Haida may use a period. Users attempt to select a word, and end up
   with only part of it:


   an t-éas
     - user expects ` an t-éas `, but the user gets ` t- ` or ` éas `. 




##  Niceties


1. Morphological tags should be relabeled into a user friendly means. See: TODO
2. Paradigms can be reformatted to remove repeating tag elements, or present in different formats. (Slightly advanced, since it requires interacting with templates).


TODO: images


3. Additional annotations can be added to the lexicon and displayed to the
   user, i.e., placenames may want region attribuets. TODO: example.




