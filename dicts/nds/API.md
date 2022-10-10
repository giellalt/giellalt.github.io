# API

It is possible to query NDS backend to get a response in JSON format.


##  Lookup

https://\<DICT\>.oahpa.no/lookup/\<FROM_LANG\>/\<TO_LANG\>/?lookup=\<SEARCH_STRING\>


returns lookup results for a search string. Parameters are:


- DICT = the relavant dictionary (see [NDS dictionary list](NeahttadigisanitLanguagePairs.html))
- FROM_LANG = the source language
- TO_LANG = the target language
- SEARCH_STRING = the string to search


It is possible to add the parameter &pretty=true to get a more human-readable result.


Example:

[https://sanit.oahpa.no/lookup/sme/nob/?lookup=leat&pretty=true]


NB: in order to obtain a better display for compounds we use "dummy" tags for the last part of the analysis:

- ⓒ (unicode 24D2) = last part of compund word
- ⓓ (unicode 24D3) = first part of derivation in coumpound word
- ⓛ (unicode 24DB) = last part of derivation in compound word


Examples:

[https://sanit.oahpa.no/lookup/sme/nob/?lookup=miessemánnofeasta&pretty=true] 

[https://sanit.oahpa.no/lookup/sme/nob/?lookup=musihkkaalmmuheapmi&pretty=true]


##  Paradigm

https://\<DICT\>.oahpa.no/paradigm/\<FROM_LANG\>/\<TO_LANG\>/\<SEARCH_STRING\>


returns the paradigm for a search string (paramaters same as above)


Example:

[https://sanit.oahpa.no/paradigm/sme/nob/leat/?pretty=true]
