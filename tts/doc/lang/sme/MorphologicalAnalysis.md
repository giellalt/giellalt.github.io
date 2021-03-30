The goal is to use `hfst-proc` to take raw text in, tokenise and analyse the text, and spit out morphological analyses directly compatible with the CG stream format.


# Pseudocode


# start out with a regular descriptive transducer - **DONE**
# make sure all spelling variants have their own variant tags - these are important to be able to retain round-trip consistency (we need to be able to generate exactly the same output as the given input, including spelling variants and misspellings - unknown words, including unknown misspellings, are a different story)
# also make sure the transducer can handle initial uppercase and all uppercase words, preferably with a tag (which can then be used to add emphasis in the pronounciation of all-uppercase words)
# add sub-reading tags to separate sub-readings from main readings; the main usage is to encapsulate morphological tags from the stem after a derivational process, where the new morphological analysis from the derivation should be the only visible analysis - **DONE**
# add weight to:
## word boundaries
## derivations
## known misspellings
## slight weight to initial uppercase and all uppercase, such that lexical casing is preferred over case changes
## possibly other tags as well, in cases where they introduce irrelevant ambiguity (semantic tags, since the semantic disambiguation is overkill for IPA conversion - alternatively, remove these paths altogether)
# move weight towards the end of the paths (to free them from the tags)
# remove non-final tags, ie tags for the non-final word in a dynamic compound - **OK**
# insert TAB after lemma/before first tag - **OK**
# rename tags from plusses to spaces, to make them CG compatible - **OK**
# remove non-essential tags
# output only the best analyses - **OK**
# until `hfst-proc` is updated, use a post-processing script to encapsulate the lemma in quotes, called `hfst-lookup2cg` - this encapsulation is required by `vislcg3`
## `hfst-proc` is updated and corrected, and processes exactly the output we want - **OK**


# Test input


Use the following text to test the basic behaviour of the analyser:
```
Iđđes dii. 9 mun doapmalan čoaggit alitnásttiid álbmotmeahcis.
```


# Expected output


This is the output given by the Xerox `lookup` tool + the `lookup2cg` script. It should be used as a reference, although there will be differences, such as the handling of pre-derivational analysis tags. The expected output will be updated when those details are sorted out.


```
echo "Iđđes dii. 9 mun doapmalan čoaggit alitnásttiid álbmotmeahcis." | \
  preprocess --abbr=sme/bin/abbr.txt | usme | lookup2cg | sort-cg-cohort.pl


"<Iđđes>"
	 "iđđes" Adv
"<dii.>"
	 "dii" N ABBR Acc
	 "dii" N ABBR Attr
	 "dii" N ABBR Gen
	 "dii" N ABBR Nom
"<9>"
	 "9" Num Sg Acc
	 "9" Num Sg Gen
	 "9" Num Sg Nom
"<mun>"
	 "mun" Pron Pers Sg1 Nom
"<doapmalan>"
	 "doapmalit" V IV Actio Acc
	 "doapmalit" V IV Actio Gen
	 "doapmalit" V IV Actio Nom
	 "doapmalit" V IV Ind Prs Sg1
	 "doapmalit" V IV PrfPrc
	 "doapmalit" V* IV Der/eapmi N Sg Gen
	 "doapmat" V* IV Der/l V Actio Acc
	 "doapmat" V* IV Der/l V Actio Gen
	 "doapmat" V* IV Der/l V Actio Nom
	 "doapmat" V* IV Der/l V Ind Prs Sg1
	 "doapmat" V* IV Der/l V PrfPrc
	 "doapmat" V* IV Der/l V* Der/eapmi N Sg Gen
"<čoaggit>"
	 "čoaggi" Hum N Actor Pl Nom
	 "čoaggit" V TV Imprt Pl2
	 "čoaggit" V TV Ind Prs Pl1
	 "čoaggit" V TV Inf
	 "čoaggit" V* TV Actor N Pl Nom
"<alitnásttiid>"
	 "alit#náste" N Pl Acc
	 "alit#náste" N Pl Gen
	 "alit#násti" Ani N Pl Acc
	 "alit#násti" Ani N Pl Gen
	 "alit#násti" Plant N Pl Acc
	 "alit#násti" Plant N Pl Gen
"<álbmotmeahcis>"
	 "álbmot#meahcci" Plc N Sg Acc PxSg3
	 "álbmot#meahcci" Plc N Sg Gen PxSg3
	 "álbmot#meahcci" Plc N Sg Loc
"<.>"
	 "." CLB
```


# Actual output using HFST


```
echo "Iđđes dii. 9 mun doapmalan čoaggit alitnásttiid álbmotmeahcis." | \
hfst-proc -C -e -q --weight-classes 1 sme/bin/sme.hfstol


"<Iđđes>"
	"Iđđes"	Adv
"<dii.>"
	"dii"	N ABBR Acc
	"dii"	N ABBR Attr
	"dii"	N ABBR Gen
	"dii"	N ABBR Nom
"<9>"
	"9"	Num Sg Acc
	"9"	Num Sg Gen
	"9"	Num Sg Nom
"<mun>"
	"*mun"
"<doapmalan>"
	"doapmalit"	V IV Actio Acc
	"doapmalit"	V IV Actio Gen
	"doapmalit"	V IV Actio Nom
	"doapmalit"	V IV Ind Prs Sg1
	"doapmalit"	V IV PrfPrc
	"doapmalit"	V IV ∏∏ Der/eapmi N Sg Gen
	"doapmat"	V IV ∏∏ Der/l V Actio Acc
	"doapmat"	V IV ∏∏ Der/l V Actio Gen
	"doapmat"	V IV ∏∏ Der/l V Actio Nom
	"doapmat"	V IV ∏∏ Der/l V Ind Prs Sg1
	"doapmat"	V IV ∏∏ Der/l V PrfPrc
	"doapmat"	V IV ∏∏ Der/l V ∏∏ Der/eapmi N Sg Gen
"<čoaggit>"
	"čoaggi"	Hum N Actor Pl Nom
	"čoaggit"	V TV Imprt Pl2
	"čoaggit"	V TV Ind Prs Pl1
	"čoaggit"	V TV Inf
	"čoaggit"	V TV ∏∏ Actor N Pl Nom
"<alitnásttiid>"
	"alitnásti"	Plant N Pl Acc
	"alitnásti"	Plant N Pl Gen
"<álbmotmeahcis>"
	"álbmotmeahcci"	Plc N Sg Acc PxSg3
	"álbmotmeahcci"	Plc N Sg Gen PxSg3
	"álbmotmeahcci"	Plc N Sg Loc
"<.>"
	"."	CLB
```


# Actual output including raw analysis string


The `-r` option of `hfst-proc` adds the raw analysis string from the transducer as a sub-reading to the VISLCG3 output. The main purpose of this is to be able to carry the analysis string through the disambiguation and analysis process, so that when the disambiguation is done, this string can be used as input to the IPA generator.


```
$ echo "Iđđes dii. 9 mun doapmalan čoaggit alitnásttiid álbmotmeahcis." | \
hfst-proc -C -e -q --weight-classes 1 -r sme/bin/sme.hfstol


"<Iđđes>"
	"Iđđes"	Iđđes+Adv ∏∏	Adv
"<dii.>"
	"dii"	dii+N+ABBR+Acc ∏∏	N ABBR Acc
	"dii"	dii+N+ABBR+Attr ∏∏	N ABBR Attr
	"dii"	dii+N+ABBR+Gen ∏∏	N ABBR Gen
	"dii"	dii+N+ABBR+Nom ∏∏	N ABBR Nom
"<9>"
	"9"	9+Num+Sg+Acc ∏∏	Num Sg Acc
	"9"	9+Num+Sg+Gen ∏∏	Num Sg Gen
	"9"	9+Num+Sg+Nom ∏∏	Num Sg Nom
"<mun>"
	"*mun"
"<doapmalan>"
	"doapmalit"	doapmalit+V+IV+Actio+Acc ∏∏	V IV Actio Acc
	"doapmalit"	doapmalit+V+IV+Actio+Gen ∏∏	V IV Actio Gen
	"doapmalit"	doapmalit+V+IV+Actio+Nom ∏∏	V IV Actio Nom
	"doapmalit"	doapmalit+V+IV+Ind+Prs+Sg1 ∏∏	V IV Ind Prs Sg1
	"doapmalit"	doapmalit+V+IV+PrfPrc ∏∏	V IV PrfPrc
	"doapmalit"	doapmalit+V+IV+∏∏+Der/eapmi+N+Sg+Gen ∏∏	V IV ∏∏ Der/eapmi N Sg Gen
	"doapmat"	doapmat+V+IV+∏∏+Der/l+V+Actio+Acc ∏∏	V IV ∏∏ Der/l V Actio Acc
	"doapmat"	doapmat+V+IV+∏∏+Der/l+V+Actio+Gen ∏∏	V IV ∏∏ Der/l V Actio Gen
	"doapmat"	doapmat+V+IV+∏∏+Der/l+V+Actio+Nom ∏∏	V IV ∏∏ Der/l V Actio Nom
	"doapmat"	doapmat+V+IV+∏∏+Der/l+V+Ind+Prs+Sg1 ∏∏	V IV ∏∏ Der/l V Ind Prs Sg1
	"doapmat"	doapmat+V+IV+∏∏+Der/l+V+PrfPrc ∏∏	V IV ∏∏ Der/l V PrfPrc
	"doapmat"	doapmat+V+IV+∏∏+Der/l+V+∏∏+Der/eapmi+N+Sg+Gen ∏∏	V IV ∏∏ Der/l V ∏∏ Der/eapmi N Sg Gen
"<čoaggit>"
	"čoaggi"	čoaggi+Hum+N+Actor+Pl+Nom ∏∏	Hum N Actor Pl Nom
	"čoaggit"	čoaggit+V+TV+Imprt+Pl2 ∏∏	V TV Imprt Pl2
	"čoaggit"	čoaggit+V+TV+Ind+Prs+Pl1 ∏∏	V TV Ind Prs Pl1
	"čoaggit"	čoaggit+V+TV+Inf ∏∏	V TV Inf
	"čoaggit"	čoaggit+V+TV+∏∏+Actor+N+Pl+Nom ∏∏	V TV ∏∏ Actor N Pl Nom
"<alitnásttiid>"
	"alitnásti"	alitnásti+Plant+N+Pl+Acc ∏∏	Plant N Pl Acc
	"alitnásti"	alitnásti+Plant+N+Pl+Gen ∏∏	Plant N Pl Gen
"<álbmotmeahcis>"
	"álbmotmeahcci"	álbmotmeahcci+Plc+N+Sg+Acc+PxSg3 ∏∏	Plc N Sg Acc PxSg3
	"álbmotmeahcci"	álbmotmeahcci+Plc+N+Sg+Gen+PxSg3 ∏∏	Plc N Sg Gen PxSg3
	"álbmotmeahcci"	álbmotmeahcci+Plc+N+Sg+Loc ∏∏	Plc N Sg Loc
"<.>"
	"."	.+CLB ∏∏	CLB
```
