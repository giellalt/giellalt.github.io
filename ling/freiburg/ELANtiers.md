This page documents the ELAN tier structures used by our projects.




# Intro


The following presents an inventory of both the linguistic and the tier types used by our projects.
*Note that adherance to these structures is necessary to use the ELAN-FST script which automatically adds annotations on word, lemma, morphological categories and part of speech.




# ELAN Linguistic Types


|   Name    |  Stereotype              |  Controlled Vocabulary   |  Purpose
| --- | --- | --- | --- 
|   refT    |   -                       |   -                       |   used for ref-tiers; no stereotype because it ref-tiers are independent, root nodes, and time-alignable
|   orthT   |   symbolic association    |   -                       |   used for orth-tiers, exact time-aligned copy of the superordinate ref-tier
|   wordT   |   symbolic subdivision    |   -                       |   used for word-tiers, overall time-aligned copy of the orth-tier (and thus the ref-tier), but able to be divided into multiple equal parts
|   lemmaT  |   symbolic subdivision    |   -                       |   used for lemma-tiers, overall equally-spaced, time-aligned copy of the word-tier, but able to be divided into multiple equal parts
|   morphT  |   symbolic subdivision    |   -                       |   used for morph-tiers, overall equally-spaced, time-aligned copy of the word-tier, but able to be divided into multiple equal parts
|   posT    |   symbolic subdivision    |   pos                     |   used for pos-tiers, overall equally-spaced, time-aligned copy of the word-tier, but able to be divided into multiple equal parts
|   ftT     |  symbolic association     |   -                       |   used for free translation tiers, overall time-aligned copy of the orth-tier (and thus the ref-tier)
|   noteT   |  symbolic association     |   -                       |   used for tiers adding notes to a given parent tiers, overall time-aligned copy of the parent-tier
|   langT   |  symbolic subdivision     |   languages               |   used for lang-tier to indicate language(s) being used in the utterance




# ELAN Tiers and Tier Hierarchy


## Required for each speaker:
|   Level   |  Name    |  Parent Tier |  Linguistic Type |  Language        |  Purpose
| --- | --- | --- | --- | --- | --- 
|   0       |   ref     |   -           |   refT            |   - (numbered)    |   root node, time-aligned annotation units are set here, each annotation is provided with a unique number here
|   -1      |   orth    |   ref         |   orthT           |   vernacular      |   an orthographic transcription is provided here; this provides the input for the FST engine
|   -2      |   word    |   orth        |   wordT           |   vernacular      |   tokenized version of the orth-tier; automatically created by ELAN-FST-script
|   -3      |   lemma   |   word        |   lemmaT          |   vernacular      |   lemma (or lemmata in case of ambiguities) for word form listed in parent tier; automatically created by ELAN-FST-script
|   -3      |   morph   |   word        |   morphT          |   English (linguistics)      |   morphological category (or categories in case of ambiguities) for word form listed in parent tier; automatically created by ELAN-FST-script
|   -3      |   pos     |   word        |   posT            |   English (linguistics)      |   part of speech (or parts of speech in case of ambiguities) for word form listed in parent tier; adheres to 'pos'-list of controlled vocabulary; automatically created by ELAN-FST-script


### Optional for each speaker:
|   Level   |  Name    |  Parent Tier |  Linguistic Type |  Language                    |  Purpose
| --- | --- | --- | --- | --- | --- 
|   -2      |   ft-XYZ  |   orth        |   ftT             |   a relevant lingua franca    |   provides a free translation of the annotated text; XYZ is replaced with a language code (e.g. eng, rus, etc.); can occur multiple times for multiple lingua francas
|   -2      |   lang    |   orth        |   langT           |   English                     |   indicates the language being used in an annotated utterance or part of an annotated utterance; the language name is in English; adheres to 'languages'-list of controlled vocabulary




## Optional for any tier or as a root node with its own time-alignment:
|   Level   |  Name    |  Parent Tier |  Linguistic Type |  Language                    |  Purpose
| --- | --- | --- | --- | --- | --- 
|   ***       |   note-XYZ|   XYZ         |   noteT           |   anything                    |   provide unstructured text-based notes for any given parent tier XYZ
*all tiers for a given speaker are named using the tier name plus the @ symbol plus an short form referring to the relevant speaker, such as ref@JKW, lemma@JKW










# ELAN Tier Template Files for Download


Template files (in ELAN .etf format):


* For spoken corpus data
    - [Master template](ELAN/ELAN_spoken_template.etf) (including all possible annotation tiers and linguistic types)
    - [PSDP template](ELAN/ELAN_spoken_template_PSDP.etf) (including only annotation tiers and linguistic types relevant for PSDP)
    - KSDP template (including only annotation tiers and linguistic types relevant for KSDP
    - IKDP template (including only annotation tiers and linguistic types relevant for IKDP
*For written corpus data
    - Master template (including all possible annotation tiers and linguistic types)
    - PSDP template (including only annotation tiers and linguistic types relevant for PSDP)
    - KSDP template (including only annotation tiers and linguistic types relevant for KSDP
    - IKDP template (including only annotation tiers and linguistic types relevant for IKDP


