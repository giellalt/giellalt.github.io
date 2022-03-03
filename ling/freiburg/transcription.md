# Transcription

This page documents conventions for transcriptions and other notations applied in the [ELAN](ELAN.html) annotations created by the [Freiburg-Tromsø Speech Corpora](freiburg.html).


Since the audio/video remains linked to our onnotations in ELAN, we do not need very complicated transcription conventions, like marking overlapping speech, and other nuances (hesitations, different lenghts for pauses, etc.) Instead, we aim for a simple orthographic transcription and need only very few special tags in the transcription tier.




# Tier "ref" (reference)


The annotations in this tier provide unique references to single linguistic units (like sentences, utterances, etc.) in the ELAN-file. The ELAN program has a function for automatic labelling und numbering of annotation units.


A typical label looks like:
*sms1961lagercrantz318.003
where **sms1961lagercrantz318** is the file name (including a hint to the language [[sms], the data of origin of the text [[1961] and additional textual explanation [[lagercrantz]. **003** marks the third sentence in the text.




# Tier "orth" (orthography)


This tier is a child of **ref**. It includes either an orthographic transcription (of spoken texts), an orthographic transliteration (of texts written in other than the standard orthography) or the original orthography (of texts written in the standard orthography).




## Capitalization and punctuation


In the case of transcribed spoken texts, is up to the taste of the annotator whether or not the transcription has to comply with the rules for standard orthography.


In the case of written texts, the original orthography, incl. capitalization and punctuation is preserved as in the original.


If punctuation marks are used always write a whitespace before them (in order to tokenize them)! Note the (syntactic) difference between PUNCT vs. CLB in the punctuation marks! 




## Other conventions 


Non-comprehensible speech

- (…) = one unclear word
- (…) (…) (three) = two unclear words, the third is perhaps "three"
- Part(…) = unclear ending
- Part(is)anen = I am hearing "is", but I am not quite certain


False start and correction or incomplete articulated word

- hyphen following right after the word, like in Partisa- Partanen


Clear Pause

- … (after whitespace)


Some authers have symbols or additional explanationsin their transcriptions, e.g. Lagercrantz: (Ill.) (1234) etc. These notations needs to be kept, but marked as belonging to non-speech. Leave these signs in the text, but put them in parenthesis.




# Tiers "ft" (free translation)


Depending on the source language, we translate into different languages, normally English and then relevant lingua franca (e.g. Russian for Kildin Sámi texts, Swedish for Pite Sámi texts, etc.). The target languages are specified by the three-letter-codes used also by Giellatekno elsewhere (e.g. deu = German, fin = Finnish).


Non-spoken parts in the translations are written in square brackets
* and [[he] sailed away




# ELAN tag sets


Tag sets are called "controlled vocabularies" in ELAN. Here are the tag sets currently used by our projects (copied from the ELAN-xml).


## Language codes

- <CV_ENTRY DESCRIPTION="German">deu</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Norwegian">nob</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="English">eng</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Russian">rus</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Swedish">swe</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Kildin Saami">sjd</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Ter Saami">sjt</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Pite Saami">sje</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="Lule Saami">smj</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="North Saami">sme</CV_ENTRY>
*<CV_ENTRY DESCRIPTION="Komi-Zyrian">kpv</CV_ENTRY>


## PoS

- <CV_ENTRY DESCRIPTION="unclear">(??)</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="non-speech">(NO)</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="adjective">A</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="abbreviation">ABBR</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="acronym">ACR</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="adverb">Adv</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="clause boundary">CLB</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="coordinator">Cc</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="subordinator">Cs</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="determiner">Det</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="interjection">Interj</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="noun">N</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="numeral">Num</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="punctuation (other then clause boundaries)">PUNCT</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="particle">Pcle</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="postposition">Po</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="preposition">Pr</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="pronoun">Pro</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="proper noun">Prop</CV_ENTRY>
- <CV_ENTRY DESCRIPTION="verb">V</CV_ENTRY>




# See also
*Giellatekno's [tag sets for Kildin Sámi](/lang/sjd/docu-grammartags.eng.html)
