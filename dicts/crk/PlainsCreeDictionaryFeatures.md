#  Lexicon files


Lexicon files are a part of the *langs/crk/src/morphology* infrastructure.
This documentation is not intended to be an exhaustive document for the
structure of the lexicon, but so far just the lexicon elements that have an
effect on the display of the dictionary through NDS.


##  Entry structure


###  <e /> level


**Source attribute**


In order to display a dictionary source in the entry, it should be included as
an attribute on the <e /> node. This should be the full text that you wish to
be displayed.


```
    <e src="nêhiyawêwin : itwêwina / Cree : Words">
```


TODO: example image


###  <mg /> level


TODO: example crk entry


###  <tg /> level


<mg> contains one or more <tg> (translation group) which can contain:


###  <t /> - a word


``` TODO: example entry with <t /> ```


###  <t /> - a phrase


``` TODO: example entry with <t /> ```


###  <te /> - An explanation: a sentence which explains the meaning of a word, but can't be used in the translation. 


``` TODO: example entry with <t /> ```


###  <re /> - Restriction 


* <re> gives a restriction for the translation, f.ex. norwegian *vest* has the restriction *of clothes*, to separate it from the navigational direction.


``` TODO: example entry with <t /> ```


###  <lg /> level


TODO: 


###  <audio /> 


Audio specifications fall under the <lg /> node in an <audio /> node. Within
this node are <a /> nodes, which contain the following attributes:


 * @href - a link to the audio file, hosted on some server
 * @speaker - initials, or anonymized name for the speaker
 * @dialect - a code for the dialect.


There may be more attributes, use whatever you like and document them here. NDS
will chiefly rely on @href, but may use other attributes such as @dialect, in
order to render more information to the user on what they will hear.


Filenames should be unique to the sound. If the sound needs to reappear
anywhere, the same filename may be used.


```
    <lg>
        <l pos="N">lemma</l>
        <audio>
            <a dialect="muo"
                href="http://audio-corpus-website.com/path/to/audio/file/aud_file_1.wav"
                speaker="ZMN"/>
            <a dialect="xxx"
                href="http://audio-corpus-website.com/path/to/audio/file/aud_file_2.wav"
                speaker="EL"/>
        </audio>
    </lg>
```


During the lexicon build process, audio will be extracted and compressed for
web-friendly formats, so that files dictionary users need to download are
wtihin the ~50kb range. Locally hosted paths to the file will be automatically
added during the build process as long as filenames are unique, so that files
specified may be whatever size.


###  <lc /> node


Currently the <lc /> node contains the word inflectional class. For some words
it will be used to determine how to generate a miniparadigm.


```
      <lg>
         <l pos="V">kiskinwahamâkêwikamikohkêw</l>
         <lc>VAI-v</lc>
      </lg>
```


It is also used to display the inflectional class alongside the POS.


```
     <lc>VTA-1</lc>


     ->


    wâpamêw (Verb, VTA)
```


See the userfriendly tag relabels file for `crk` to adjust how any of these
appear in the interface. 


###  <l /> level


TODO: any attributes 


###  <stem /> node


The stem will be included with the analysis column along the right side of all
entries that match up with an analysis. The stem will be pulled from the <stem
/> node within the <lg /> node.


  ```
      <lg>
         <l pos="V">kiskinwahamâkosiw</l>
         <lc>VAI-v</lc>
         <stem>kiskinwahamâkosi</stem>
      </lg>
  ```


The stem will also be used in analyses along the right side.


```
    nikî-nitawi-kiskinwahamâkosin
    ⟵
    PV/nitawi + √ kiskinwahamâkosi- + Intransitive Animate Verb + Independent + Past + 1s
```


TODO: 


###  <t /> attribute documentation


TODO: 


###  <xg /> Example sentences


TODO: 


###  Other files


TODO:


##  Generated miniparadigms 


Miniparadigms are generated in lexicon entries in order to help users. They
vary from POS to POS and sometimes within POS.


There are also some constraints on generation for orthographical reasons.


###  FST restrictions


# `+Err/Orth` - Forms marked with this will not be displayed in generation.
## This may affect forms without hyphens, where hyphens are expected.
# `+Use/Ped` - ?
# `+Use/NGminip` - ?


###  Lexicon attributes in XML that affect generation


For now generation relies purely on animacy tags in the FST.


###  Verbs


**TA**


|  person            |INDEPENDENT   |tag                        |CONJUNCT     |tag                        
| --- | --- | --- | --- | --- 
| 1s → 3s	        | niwâpamâw	    | V+TA+Ind+Prs+1Sg+3SgO      | wâpamak      | V+TA+Cnj+Prs+1Sg+3SgO      
| 2s → 3s	        | kiwâpamâw	    | V+TA+Ind+Prs+2Sg+3SgO      | wâpamat      | V+TA+Cnj+Prs+2Sg+3SgO      
| 1p exclusive → 3s	| niwâpamânân	| V+TA+Ind+Prs+1Pl+3SgO      | wâpamâyâhk   | V+TA+Cnj+Prs+1Pl+3SgO      
| 1p inclusive → 3s	| kiwâpamânaw	| V+TA+Ind+Prs+12Pl+3SgO     | wâpamâyahk   | V+TA+Cnj+Prs+12Pl+3SgO     
| 2p → 3s	        | kiwâpamâwâw	| V+TA+Ind+Prs+2Sg+3SgO      | wâpamâyêk    | V+TA+Cnj+Prs+2Sg+3SgO      


(Example table for now, but copy format for other tables)


**II**


**AI and TI**


**Context**


Independent pronouns are included for context.


###  Nouns


###  Proper nouns


###  Adjectives


###  Numerals


###  Pronouns


###  Personal pronouns


##  Pregenerated paradigms 


Plains Cree currently does not reply on pregenerated entries in NDS.




##  Analysis specifics


Plains Cree has some tags that appear before the lemma. There is a special rule
in NDS to handle this, but more tags may need to be added occasionally.


TODO: document tags




#  FST Miscellany


* Preverbs and reduplication tags come before the lemma, and so there is a tag
reformatter in place which shifts these tags after the lemma, and may replace
the slot formerly occupied by the lemma with `Tpl/Lemma` for analysis work in
the templates.
