Spanish - North Saami dictionary
================================

This dictionary was made by Kjell Kemi and Angel Diaz de Rada.


# 2023

At present, Trond Trosterud and Trond Tynnøl are the ones looking at this.



# Old plan from september 2018:


- EXCEL is now a stable form of our output, so that it will be maintained in future sendings as it is in this part (a-curvo).
- In future sendings, we will simply send new versions of EXCEL-WORD files exactly in this same structure. The new versions will include more words-lemmas, and eventually some corrections; but always the same structure. Please, consider if this procedure is adequate for your implementation.
- The structures of esp-sme and sme-esp parts are some different. Anyway, we are first working on the esp-sme part.
- Future sendings will include a big amount of new words-lemmas. This means that UiT are not receiving constantly new versions.
- Needed paradigms are:
	- verb conjugation (this is the most important one). An example of the output needed: You access the Web Dictionary of the Real Academy of Spanish here:  [http://dle.rae.es]  -- If you search, for example: **investigar** verb, you will find the button conjugar beside the word. You push conjugar and the whole conjugation paradigm pops-up. This function implemented, the inflection part can be obviated in NDS.
	- noun gender
	- adjective gender


Information about the meaning of abbreviations should be also necessary. The list is in `words/dicts/spasme/inc/orig`. 
That list if abbreviations is now complete and unitary both for sam-esp and esp-sam.
Perhaps it could be implemented so that information poped-up when mouse is over the abbreviation.


# Work plan at Giellatekno:


- Ciprian to convert EXCEL to NDS-type xml, for spa-sme
- Chiara to set up a new language pair, spa-sme in sanit.oahpa.no (evt. consider whether it is easier to set up both directions at once)
- Trond and Sjur to look into the FST, and also into a "full paradigm generation" page
- Chiara to look in to the conjugation table for NDS




