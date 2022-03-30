

This document describes the main tasks involved with editing proper nouns, first
laying out all steps as detailed as possible, then trying to generalise and
abstract somewhat. The end result will be used as a guideline for developing the
web interface for our proper noun lexicon in risten.no.


Simple editing of single entries will not be covered, as we already have a basic
model and interface for that case.


# Adding a list of names


## Work flow as of today


Starting point: we have a list of names for a language

1. If the stem and the citation form are identical:
	1. group according to contlex and tag?, and add them
	1. how do you group?:
		1. Stems are grouped according to their phonological properties
    ==> `rev + sort + rev  & manual check/sort`
		1. cons-final, heavy syll => BERN
		1. cons-final, light syll => LONDON
		1. ... ( cf. the not entirely up-to-date-documentation)
		1. manually tagging cont-lex (with some help from the phonol/metr. structure)
    (see table below)
	1. Group according to semantics, and add subtag (-plc, -sur, etc), semi-manually
		1. Do search-replace on certain affixes: -fjell, -li, jávri, -sen
		1. Order the file in reverse order
		1. Use Saara's multiple-choice script namelex.el, in emacs, and tag manually.
1. If the stem and the citation form are different
	1. make two parallel lists: the lemma (list-a) and the stem (list-b)
	1. Add tags to list-b
	1. paste -d: list-a list-b >> propernoun-sme-lex.txt


```
Type
StemCoda    CG  IllChange    Loc      Lexicon  Status


LightVow    no   yes         -s        ACCRA     tmp
LightVow    yes  yes         -s        MARJA




HeavyVow    no   no          -as       NYSTØ     tmp


HeavyCns    no   no          -as       BERN
LightCns    no   no          -is       LONDON


-nen        no   no          -as/nenis C-FI-NEN


GUOLBBA ! Trisyll. Inanim. Gradating 0-Nouns
DUORTNUS ! Cns-final, cons.grad.
ANAR ! Cns-fin, no cons.grad.
HEANDARAT ! Bisyll. Non-Gradating C-Proper Names
NIILLAS ! Trisyll. Non-Gradating C-Proper Names
GEAVNNIS


Plural names
VARGGAT
ALEUHTAT
SULLOT
EATNAMAT
HEANDARAT
```


## Pseudo code for adding a list of names


User:
1. click a button in the hit-list frame: "Add list of names"


Application:
1. create an HTML form, and display it in the editor frame
  (see mock-up below)


User:
1. specify language (default is stored in a cookie, and used next time; if no
  cookie, then 'sme')
1. paste the list into a text field
1. optionally specify cont-lex, if mostly the same for all
1. submit


Application:
1. store the time of submission
1. split the string of names into a list
1. for each name in list:
	1. if the name exists, then:
		1. create and store a lang entry
		1. if cont-lex then
     use it
   else
     guess based on some heuristics (cf Trond's table above, and our docs)
		1. create and store the corresponding concept entry, using the sem-tag info
    if available
	1. else
		1. only update the comment field
    ("tried to add X as new, but did already exist")
		1. and update the timestamp
1. when all entries are stored:
  search for all names with a change time > submission time; present the list in
  the hit-list frame, ready for further editing


## UI mock-up for adding a list of names


```
+-----------------+
|  select language | (pop-up, menu from langmenu.xq)
+-----------------+


+-----------+
|            |
|    paste   |
|    names   |
|    here    |
|            |
+-----------+


+------------------+
|  select cont-lex  | (pop-up menu, includes option 'unspecified')
+------------------+


+------------------+
|  select sem-tag   | (pop-up menu, default option 'unspecified')
+------------------+


+----------+
|   SUBMIT  |
+----------+
```


# Add info to a group of names


User:
* create a search that extracts the entries to be updated
* click the "add info to all" button
* fill in the form, and submit


Application:
* iterate over the found set (from the search above, stored in a session
  variable), and update each entry with the new info
* rerun the search, so that the user easily can verify that the new info was
  added


# Changing a group of names


Normally changing is done on single entries, but occasionally groups of names
can be changed.


## Changing single entries


Something similar to what we have for SD-terms now


## Groups of entries


Similar to the "Add info to group" above (adding and changing is conceptually
different actions, but identical when it comes to implementation), but populates
the fields in the form with values taken from elements with only one unique
value across all found entries (that is, no value in the fields corresponding to
elements with several values across entries).


# Associating a name with its concept/correct & merge multiple names


This one is the one needed for efficient correction of parallel names earlier
treated as instances of multiple, monolingual names.


This one requires that it is possible to look at two lists at the same time


# Merging independent entries to parallel entries


## Objective
Take a list of parallel names, and check whether they are really linked to the
same concept; if not, link them


# Adding a new language to a concept


This can be done similar to how it is done in SD-terms.


# List of useful, ready-made queries


* all entries added within last (24h|week|month) (use language menu to restrict
  to a specific language)
* all entries added/modified by "me"/"NN"
* the entries I worked on last time (requires the search expression to be stored
  in a cookie)


# Problems in the data structure not considered earlier


When we considered the many-to-many relationship between names in different
languages (one "concept" can have different names in different languages, and
one name in one language can have more than one meaning/"concept"), we didn't
foresee the situation that language forms from **all** majority languages may
just as well be used in the minority language alongside the minority language
form. Example:


```
<entry id="Piera">
  <sem>
    <mal/>
  </sem>
  <langentry lang="sme" ref="Piera"/>
  <langentry lang="nob" ref="Per"/>
  <langentry lang="swe" ref="Pär"/>
  <langentry lang="nno" ref="Per"/>
  <langentry lang="fin" ref="Piera"/>
</entry>


<!--Petri? Georg/Yrjö/Jyrki Snellman/Virkkunen Genetz/Jännes,
Hällsten/Paasikivi-->
```


The equivalence between names in different languages can be classified as
follows:


```
Per Klemetsen lea Helssegis.
Piera - Per = weak equivalence = fem, mal
Helsset - Helsinki = strong equivalence = plc
(not absolute, cf. Karasjok Produkter in a Saami text)
Samisk høgskole - Sámi Állaskuvla = Absolute equivalence = org
```


Strategy summary:
|   Equiv. strength <=> sem. tag | compilation action
| --- | --- 
| Weak   <=> mal, fem, sur | Export all langentries to the sme transducer.
| Strong <=> plc| Export all langentries to sme (but perhaps discard when needed)
| Absolute <=> org | Export only the explicit sme entries to the sme transducer


More examples:
```
Peras / *Pieras ii leat vejolašvuohta...
Nils lea dappe, Niillas lea maid bohtán.
```


## Implementation changes


The following points need consideration:
* the majority name forms still need inflections according to the language it is
  used in, e.g. 'Per' needs a proper cont-lex for North Saami in the sme
  transducer
* there's a difference between names of persons, places and organisations. It
  might be better NOT to link person names, and thus restrict cross-language
  linking to places and organisations (and acronyms thereof)




split the names


weak association linkage document


=> linking surnames, linking first names (Pekka appendices)
=> linking synonyms (Jovnna-Ánde Vest)
=> linking hypo- and hyperonyms (Nielsen, last part, Wordnet)


Synonyms in SD-terms is stored as links between entries in the *language* files




Conversion from one lg-unspecified list (35000 names) to our future system:


either 1.
a. find correspondence sets
b. multiply the rest


or 2:
a. multiply all <=====================
b. unify and prune when needed




Finding correspondence sets


<?xml version='1.1'  encoding="UTF-8"?>
<termCenter last-update="20060101123456" id="propnouns" >
<entry id="Litlefjord">
  <sem>
    <plc/>
  </sem>
  <langentry lang="sme" ref="Vuotkevuotna"/>
  <langentry lang="smj" ref="Vuotkevuodna"/>
  <langentry lang="sma" ref="Litlefjord"/>
  <langentry lang="nob" ref="Lillefjord"/>
  <langentry lang="nno" ref="Litlefjord"/>
</entry>


x6 or whatever, yes, once (one file) for each language
<?xml version='1.1'  encoding="UTF-8"?>
<terminology id="propnouns" last-update="20060101123456" xml:lang="sme" >
<entry id="Vuotkevuotna">
  <infl lexc="ACCRA"/>
  <stem>Vuotke#vuotna</stem>
  <senses>
    <sense ref="Litlefjord"/> <=== this is a ref to the ID in common
  </senses>
</entry>




<?xml version='1.1'  encoding="UTF-8"?>
<termCenter last-update="20060101123456" id="propnouns" >
<entry id="Kokelv">
  <sem>
    <plc/>
  </sem>
  <langentry lang="sme" ref="Goavkejohka"/>
  <langentry lang="smj" ref="Goavkejohka"/>
  <langentry lang="sma" ref="Kokelv"/>
  <langentry lang="nob" ref="Kokelv"/>
</entry>


x6 or whatever, yes, once (one file) for each language
<?xml version='1.1'  encoding="UTF-8"?>
<terminology id="propnouns" last-update="20060101123456" xml:lang="sme" >
<entry id="Goavkejohka">
  <infl lexc="ACCRA"/>
  <stem>Goavkejohka</stem>
  <senses>
    <sense ref="Goavkejohka"/>
  </senses>
</entry>




a. split the uniformly generated names
b. unify the different names




Finding correspondence sets (strong correspondences,
Helsinki - Helsset - Helsingfors):


a. Via Pekka's lists (automatic)
a'. via linked lists from the map authorities (automatic)
b. Via introspection (manual)
c. From Statens Kartverks's coordinates (semi-manual?)


Terminology:
monolingual names (= no parallel)
multilingual names (at least one parallel form)






New approach:
1. We assume that all names are monolingual, i.e. are found in all lgs
  Thus, turn propernoun-sme-lex into a set of xml files acc to Saara
1. Find correspondence lists
    1. Chose a principle ID (Helsinki* Helsset Helsingfors)
    1. Remove the doublets from the lgs in question
        1. Remove Helsinki, Helsingfors from sme (oops, cannot be done)
    1. Make pointers...




Wrong track 1:
1. Split the lexicon according to stem classes (MARJA; DEATNU, etc.)
1. Manually read the list, and split into two groups:
    1. Saami names with Norwegian/Finnish/Swedish parallels
    1. Saami names without N/F/S parallels
1. Take the N/F/S parallel names out of the pool, and lump them under
  the relevant id
1. Repeat this procedure for other parallel classes
1. The rest category will be the monolingual ones.


Wrong track 2:
1. From the pool, take monolingual names
    1. Do a reverse-sort
    1. Look for clearly foreign names
    1. move them to an intermediate file for monolingual names
