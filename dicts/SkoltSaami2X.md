This page documents the Skolt Saami dictionary projects at Giellatekno.

The backbone of all dictionary projects, incl. the contlex files for the morphological analyzer, the Skolt Saami Oahpa and different user dictionaries are the lexical data stored in a database called sms2X.

# User dictionaries we are are working on at present
* [Neahttadigisánit: saan.oahpa.no](http://saan.oahpa.no)
* [Stem-based webdict](http://gtweb.uit.no/webdict/index_sms-eng.html)

# Other applications linked to the lexical database
* [Oahpa!-nuõrti](http://oahpa.no/sms/)
* [FST](/lang/sms/j-sms.html)

# The sms2X lexical data backbone
The aim with this common dictionary database is to create a rich structure in single lexicon. We are working on a lexicographic structure which later allows exporting data for different applications: e.g. descriptive dictionaries,
 bilingual learner dictionaries, Oahpa!-nuõrti, etc. Thus "sms2X" means both "to-X-languages" and "to-X-products".

The database is the result of collaborative work carried out at Østsamisk museum Neiden, Freiburg Research Group in Saami Studies, Giellatekno, and members of the Skolt Saami language communities.

##  Using XML with the NDS dictionary

* [Documentation for dictionary work with NDS](sms/SkoltSaamiDictionaryFeatures.html)

## Database
The dictionary database sms2X is devided into several single files, each representing one of the

### Underived parts-of-speech

* [a - adjective](SkoltSaami2X/Adjectives.html)
* [adp - adposition](SkoltSaami2X/Adpositions.html)
* adv - adverb
* cc - conjunction
* cs - subjunction
* det - determiner
* i - interjection
* n - noun
* [num - numeral](SkoltSaami2X/Numerals.html)
* pcle - particle
* pro - pronoun
* prop - proper noun
* v - verb

###  Derived parts-of-speech

Since most derivations are formed by means of regular/productive morphology and do not represent own lemmas they are stored in separate files for derived PoS's with the link to the respective root as a variable. For different kinds of dictionaries, we will later handle derivations differently:

* Oahpa!-nuõrti includes derivations similar to other lemmas (if these derivations are tagged for oahpa)
* saan.oahpa.no analyses derivations if they are written in the FST
* in a future printed dictionary some derivations will be listed under root lemmas
* contlex lexica do not include productive derivations

A PROBLEM: what are the productive (non/lexicalized) derivations and how do we tag them?

These are the files for derived parts-of-speech:

* [der_a - derived adjectives](SkoltSaami2X/Adjectives.html)
* der_adv
* der_det
* der_n
* [der_num - derived numerals](SkoltSaami2X/Numerals.html)
* der_pro
* der_v

###  Other

* [abbr - abbreviations](SkoltSaami2X/Abbreviations.html)
* mwe - multiword expressions (listed as lemmas, e.g. for Oahpa!-nuõrti)
* [inf - inflected forms](SkoltSaami2X/Inflections.html)
* [var - variants](SkoltSaami2X/Variants.html)
