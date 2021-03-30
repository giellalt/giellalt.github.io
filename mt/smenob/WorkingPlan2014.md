

This is an obsolete working plan from 2014, for historical reference.




* Lexical selection
** Update existing sme-nob.lex to the new rule format: \\ is done: apertium-sme-nob.sme-nob.lex
** Improve the rules: \\ The old rules are moved into the new format. The work now is to make more rules
* Lexical coverage
** Add dictionary and propernoun entries to the bidix
** Correct the entries:
*** add g3, nomag
*** correct the lemma form to be the same as in lexc
*** add remaining lemmas to lexc
** Start looking at lexicon holes
* Linguistic rules
** is next
* Semantic tags, we want
** semtags for the disambiguation and the lexical selection rules
** semtags after the PoS
** only one semtag for each N, that means that lemmas with more than one, e.g. Sem/Org and Sem/Plc, must get a common one, e.g. Sem/OrgPlc
** a semtag for all nouns, that means a dummy for those which don't have any yet: Sem/Dummy ?
** We have to add semtags to the bidix
** Alternative would be generating sets from LEXC, according to the semtags. These sets have to be added both to the disambiguation+functions-file and to the apertium-sme-nob.sme-nob.lex
