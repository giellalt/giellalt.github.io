# Disambiguator adaption

How does the disambiguator have to be adapted to the grammarchecker to be more robust?

- we would like to use the general disambiguator as there is maintanance going on, but it does not seem adequate for sentences with e.g. case errors

- where does it not seem adequate?
  ** choosing numeral attributes: if there is a case error in the numeral, the rules still pick the attribute form instead of the correct non-attributive form (nominative/accusative)
  ** postposition/adverb disambiguation: if there is a case error in the noun prior to a postposition the postposition is analyzed as an adverb
  \*\* object analysis

Rule after Duommás modifications:

```
SELECT:r2599 Com IF (0 Num)(NEGATE *1 PL-NOUN BARRIER NOT-ADJ LINK 0 Pl)(NEGATE 1 Gen OR Acc LINK 0 Sem/Measr); # Cf. rules for PL-NOUN above.
	#GRAM: added: (NEGATE 1 Gen LINK 0 Sem/Measr)
	#$ Dán jagi lea juste beannot mettara eanet muohta go diibmá
	 bohccuid , sáhttet orohatstivra ja soaitá guovlustivra eaiggáda rehkega 	alde 	mearridit háhkat dárbbašlaš geahččanveahki .
```

Without Duommás change, we get the following analysis:

```
"<beannot>"
	"beannot" Num Sg Com Attr @>N SELECT:12217:r2599 MAP:15266:r198 &msyn-acc-to-comp ADD:4405:acc-to-comp
* **	"beannot" Num Sg Acc REMOVE:10644**: r2186
* **	"beannot" Num Sg Loc Attr SELECT:12217**: r2599
* **	"beannot" Num Sg Nom SELECT:12217**: r2599
* **	"beannot" Num Sg Gen SELECT:12217**: r2599
* **	"beannot" Num Sg Ill Attr SELECT:12217**: r2599
```

We need a statical disambiguator because we need to trust it in our grammarchecker product

```
"muitalahttit"
"goaruhahttit"
"dagahahttit"
"almmostahttit"
"ráhkadahttit"
"beaskidahttit"
"buoridahttit"
"bálkestahttit"
"duldestahttit"
"dárkkistahttit"
"fakŋalahttit"
"fieraldahttit"
"fuomášahttit"
"girddáldahttit"
"gásttašahttit"
"jorgalahttit"
"lihkastahttit"
"masttalmahttit"
"mirkkohahttit"
"murddáldahttit"
"nanosmahttit"
"njoammudahttit"
"njuoskadahttit"
"nuorasmahttit"
"orustahttit"
"ođasmahttit"
"sajáidahttit"
"čuojaldahttit"
"sodjalahttit"
"surggiidahttit"
"čalmmustahttit"
"čielggadahttit"
```
