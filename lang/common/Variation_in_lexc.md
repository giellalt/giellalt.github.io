# How to handle variation in lexc

# Non-normative forms: Err/Orth
## Non-normative variant with inflection
ex.: "fálahas" is a non-normative variant of the lemma "fáláhas", and it inflects.
The normative form on the left side, and so the lemma in the analysis will be a normative form and can be found e.g. in the dictionary.

`fáláhas:fáláhass JOHTOLAT ; ` \\
`fáláhas+Err/Orth:fálahass JOHTOLAT ; `

The descriptive FST will inflect both fálahas and fáláhas, but the line with the tag Err/Orth is removed from the normative analyser/generator during the compilation prosess. 
```
fáláhasat 
fáláhasat	fáláhas+N+Pl+Nom

fálahasat
fálahasat	fáláhas+Err/Orth+N+Pl+Nom
```

The normative analyser:
```
fáláhasat 
fáláhasat	fáláhas+N+Pl+Nom

fálahasat
fálahasat	fálahasat	+?
```

## Non-normative variant without inflection (hard coding)
ex.: "fálahas" is a non-normative variant of the form "fáláhas", and it does not inflect, and therefore it does not get a continuation lexicon with inflection for nouns.

The normative form on the left side, and so the lemma in the analysis will be a normative form and can be found e.g. in the dictionary.

`fáláhas:fáláhass JOHTOLAT ; ` \\
`fáláhas+N+Sg+Nom+Err/Orth:fálahas ENDLEX ; `

# The word itself is non-normative: Err/Lex
Ex. brillefutterála which is a slightly adapated loanword from Norwegian to North Saami. The normative word is čalbmelássaskuohppu

`brillefutterála+Err/Lex:brille#futterál SOSIAL`

The descriptive FST will inflect brillefutterála, but the line with the tag Err/Lex is removed from the normative analyser/generator during the compilation prosess. 
```
brillefutterálat 
brillefutterálat	brillefutterála+N+Pl+Nom
```

The normative analyser:
```
brillefutterálat
brillefutterálat	brillefutterálat	+?
```

# Lexical homonymi: how to identify the correct lemma e.g. in a dictionary
Two lemmas, which base forms are homonyms, have different paradigms and semantics. 

## The lemmas belong to different stem-categories: Add morphogical tags
Example from North Saami. G3 tag for Grade 3 for consonantgradation with geminate in lemma, e.g. ss: 

`beassi:beassi BEARRI "reir" ;` \\
`beassi+G3:beas'si AIGI "never" ; `

Analysis:
```
beassi
beassi	beassi+N+G3+Sg+Nom
beassi	beassi+N+G3+Sg+Acc
beassi	beassi+N+G3+Sg+Gen
beassi	beassi+N+Sg+Nom

beasi
beasi	beassi+N+Sg+Gen
beasi	beassi+N+Sg+Acc
```

Example from North Saami. NomAg tag for derivation Nomen Agent 

`vuovdi+NomAg:vuovdi ACTOR "salesman" ;` \\
`vuovdi:vuov'di AIGI "forest" ; `

Analysis:
```
vuovdi
vuovdi	vuovdi+N+NomAg+Sg+Nom
vuovdi	vuovdi+N+NomAg+Sg+Acc
vuovdi	vuovdi+N+NomAg+Sg+Gen
vuovdi	vuovdi+N+Sg+Nom

vuovddi
vuovddi	vuovdi+N+Sg+Gen
vuovddi	vuovdi+N+Sg+Acc
```

## There is no reason for adding morphogical tags: Add homonymi tags
Example from South Saami:

`govledh+Hom1:govl TJOEHPEDH_TV "höra" ;` \\
`govledh+Hom2:govl VÅÅJNEDH "höras" ;`

Analysis:

```
gåvla
gåvla	govledh+Hom1+V+TV+Ind+Prs+Sg3

govloe
govloe	govledh+Hom2+V+IV+Ind+Prs+Sg3
```

## Orthograpic variants of the same lemma: tags v1, v2...

Orthograpic variants of the same lemma, for base form and at least parts of the inflection paradigm, should be under the same lemma. But we can add a variants tag as a help to recognize the correct base form for the paradigm.

Example from North Saami. 

`mandáhta+v2:mandáhtta GOAHTI-A ; ` \\
`mandáhta+v1:mandáhta STAHTA ;`

If the base forms are identical, but there are variants in the inflection, we don't use these tags.
