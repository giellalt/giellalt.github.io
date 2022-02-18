# Compounding tags in the lexicon




See also separate pages on [morphological](MorphologicalTags.html), [semantic](SemanticTags.html), [syntax](docu-sme-syntaxtags.html) and [dependency](docu-deptags.html) tags.



# Goal


* Create sensible tags
* Use sensible defaults to reduce writing to a minimum






# Positional tags


Suggested tags:
```
+CmpNP/All   = all positions, _default_, this tag does not have to be written
+CmpNP/First = first-only or alone, in PLX format it means non-last
+CmpNP/Pref  = only first, never alone
+CmpNP/Last  = only last or alone
+CmpNP/Suff  = only last, never alone
+CmpNP/Only  = stems that only appear in compounds, not in isolation
+CmpNP/None  = can not make compounds
```


## Questions


*Do we need a tag `+CmpNP/Middle`?*


**Claim:** there are no such words in
Saami so short that they will create problems for the speller, when used as
the middle part of a three-or-more-part compound.


Short words in compounds are problematic because they can lead to spurious
compounds masking real spelling errors, and also "strange" suggestions for
detected spelling errors.


### Investigation of the middle part of 3-part compounds


**1.** analyze the corpus with the non-cirkular analyzer (will a.o. leave
non-lexicalised compounds unanalyzed): **Note: the preprocess option is obsolete, use hfst-tokenise**:


```
gt$ccat -l sme -r /usr/local/share/corp/bound/sme/news/ | \
 preprocess --abbr=sme/bin/abbr.txt --corr=sme/src/typos.txt | \
 lookup -flags mbTT -utf8 sme/bin/nonrec-sme.fst > nonrec-corp.txt &
```


**2.** grep all non-recognised words, analyze them with the normal, circular,
descriptive analyser, and extract all compounds with a middle part of 1-3 chars:


```
gt$grep '\?' nonrec-corp.txt | cut -f1 | \
 lookup -flags mbTT -utf8 sme/bin/sme.fst | \
 egrep '#.{1,3}\+.*#' > 3-part-shortcomp-descr.txt
```


**3.** analyze these compounds with the **normative** (and circular) analyzer:


```
gt$cut -f1 3-part-shortcomp-descr.txt | sort -u | \
 lookup -flags mbTT -utf8 sme/bin/sme-norm.fst | \
 egrep '#.{1,3}\+.*#' > 3-part-shortcomp-norm.txt
```


**4.** check the result for real spelling errors vs true compounds. This will
give us a pretty clear indication of whether short compounds really are
problematic for the speller (remember that shortening of the type *johka* →
*–joh–* and similar is non-normative, and should not be considered in this
investigation - all such compounds will be lexicalised, other uses of such short
forms are in principle spelling errors).




The following list of short words was identified:

```
Saami stems:


ađa - ok as last
al  - SUB, ok
sáh - SUB, ok
váh - SUB, ok
vár - SUB, ok
aji
```


Loan words:

```
cup - kan inte se att denna skapar støy?
duo - +CmpN/last før denna? popduo, trombonduo, duo-? jf duomuge, duogáša, forsvinn med duo+CmpN/Last
kro - kan inte se att denna skapar støy? Kanskje
pop - kan inte se att denna skapar støy?
rap - kan inte se att denna skapar støy?
```

Names:

```
Alm
Eng
New
Vu
-Vu
```


The names are clearly an error in our normative analyser, they should not be
allowed to make compounds without a hyphen on both sides. Correcting this will
remove the names from the list of short compounds


The following mid-parts are now SUB marked, and won't cause problems for the spellers:

```
joh
sis
gas
```


**TODO:**

- enforce hyphen on both sides of names when making compounds (at least in
  normative transducers) (**Sjur, Thomas, Trond**)






## Conclusion


With a few lexical adjustments, and corrections in the analyzer, there are no
problematic short words. Thus, for North Sámi,  `+CmpN/First = +CmpN/First+CmpN/Middle`. We
need to repeat the same investigation for Lule Sámi, but it is unlikely that
the conclusion will be different. It is important, though, to know which lexical
items we need to be aware of for potential compound problems.


The positional tags will be added to lexical entries where needed. They will be
added as comments (see examples below).




# Compound-stem tags


Suggested tags (these are all the same as presently used in the analyzer):


```
+CmpN/SgCmp    (=sealg-) i prinsippet kultur- kultuvra 
+CmpN/SgNCmp (alternations between full and redused final vowel is coded
           in the lexicon / twolc)
+CmpN/SgGCmp (alternations between full and redused final vowel is free)
+CmpN/PlGCmp
```




The variation between full and reduced stem vowel (such as *sápmi* vs
*sápme–*) is fully encoded for all lexicons, partly in the morphology, and
partly in the two-level rules. Thus, there is no need to specify those.


In addition, it is useful to have a shortcut tag for all variants applied to one
entry:
```
+CmpN/AllCmp (= all four above)
```


The tags should be entered as comments after each lexical entry that needs it,
see examples below. This is because these tags are only useful outside the Xerox
tool set (and it is easy to incorporate them in the LEXC entries later, if
needed).


How should we specify deviations from the default? Example:


```
jávri:jáv'ri GOAHTI ; !+CmpN/SgGCmp +CmpN/SgNCmp
jávre- (nom)
jávrre- (gen)
```


There are two alternatives. Either to specify all wanted possibilities, or to
only specify additions to the default:


```
1) all variants:
mánná GOAHTI ; !+CmpN/SgGCmp +CmpN/SgNCmp +CmpN/PlGCmp


2) only additions:
mánná GOAHTI ; !+CmpN/SgGCmp
mánná GOAHTI ; !+CmpN/SgGCmp -SgNCmp (see comment below about negation)
```


The second alternative implies that we need negation, as we need to be able to
specify that the default should *not* be included. We decided to use
alternative **1**, that is, when the default is not the only
option, then all possibilities need to be listed, including the default.


We then end up with the following possible tag combinations:


```
mánná GOAHTI ; !+CmpN/AllCmp (= +CmpN/SgGCmp +CmpN/SgNCmp +CmpN/PlGCmp +CmpN/SgCmp)
mánná GOAHTI ; !+CmpN/SgGCmp +CmpN/SgNCmp +CmpN/PlGCmp
mánná GOAHTI ; !+CmpN/SgGCmp +CmpN/SgNCmp
mánná GOAHTI ; !+CmpN/SgGCmp +CmpN/PlGCmp
mánná GOAHTI ; !+CmpN/PlGCmp +CmpN/SgNCmp
mánná GOAHTI ; !+CmpN/PlGCmp +CmpN/SgGCmp
mánná GOAHTI ; !+CmpN/SgGCmp
mánná GOAHTI ; !+CmpN/PlGCmp
mánná GOAHTI ; !+CmpN/SgCmp +CmpN/SgGCmp +CmpN/SgNCmp
mánná GOAHTI ; !+CmpN/SgCmp +CmpN/SgGCmp +CmpN/PlGCmp
mánná GOAHTI ; !+CmpN/SgCmp +CmpN/PlGCmp +CmpN/SgNCmp
mánná GOAHTI ; !+CmpN/SgCmp +CmpN/PlGCmp +CmpN/SgGCmp
mánná GOAHTI ; !+CmpN/SgCmp +CmpN/SgGCmp
mánná GOAHTI ; !+CmpN/SgCmp +CmpN/PlGCmp
mánná GOAHTI ; !+CmpN/SgCmp
----
mánná GOAHTI ; !+CmpN/SgNCmp <==== Default
```


To ease the work with marking up the lexicon, we should make an
emacs-mode `add-compound-form`:

```
Search ;
Replace with:
EITHER:
ENTER = ;
G     = ; ! +CmpN/SgGCmp
P     = ; ! +CmpN/PlGCmp
B     = ; ! +CmpN/SgGCmp +CmpN/PlGCmp
C     = ; ! +CmpN/SgGCmp +CmpN/PlGCmp +CmpN/SgNCmp
A     = ; ! +CmpN/AllCmp
... for all combinations
OR:
One or more of: NGPSA  
N = ; ! +CmpN/SgNCmp
G = ; ! +CmpN/SgGCmp
P = ; ! +CmpN/PlGCmp
S = ; ! +CmpN/SgCmp
A = ; ! +CmpN/AllCmp
```


## Defaults


The following was decided as defaults for compound stems:


* `+CmpN/SgNCmp`
* `+CmpN/SgGCmp` (using the PLX class Ga)
* `+CmpN/PlGCmp` (using the PLX class Gp)




The defaults are never written. This is important, to be able to override the
default behaviour - see discussion further down.


Please note, that the `+CmpN/PlGCmp` form is always identical to the regular
`+CmpN/PlGen` case. Thus, there is no need to regenerate this form for inclusion in
the set of compounding stems, only to make sure it is specified for compounding
in the output format.


## Conclusion


The compound stem tags are the ones suggested above, and will be added to
lexical entries where needed. They will be added as comments, as illustrated
above.


### Tags for the required form of the left-part


Some nouns require the preceding part of a compound to be in Genitive case,
either Singular or Plural. Such nouns need to have a separate tag to identify
them, to get the behaviour we want in spellers.


There are cases where the left part of a compound overrides the specifications
of the right part. Such cases are discussed in the next section.


Suggested tags:


```
+CmpN/SgNomLeft (default, usually not written =0 PLX class N)
+CmpN/SgGenLeft (implies +CmpN/SgNomLeft = PLX class Na)
+CmpN/PlGenLeft (excludes the other alternatives unless explicitly overridden =
            PLX class Np)
```


Thus, by default all compound forms of a word is 


### Conflicts between specified compound form and required left-part form


There are cases where a word as the left part of a compound uses other
compounding forms than the default, and thus overrides the default behaviour.
The default tag usage developed so far is to only allow *tag harmony*
combinations, as shown in the following table:


```
Left-part-tag  <=> Right-part-tag
when used as    |  when used as
the left part   |  the right part
----------------+----------------
+CmpN/SgNCmp      <=> +CmpN/SgNomLeft
+CmpN/SgGCmp      <=> +CmpN/SgGenLeft
+CmpN/PlGCmp      <=> +CmpN/PlGenLeft
```


Or to put it in other words: the default is to let the last part govern.


One can let the first (i.e. left) part govern by explicitly adding left-part compounding tags to the lexical entry. An example:


```
nuorra NUORRA; +CmpN/AllCmp [=left-part tag] +CmpN/SgGenLeft [=right-part tag]
```


This will let nuorra form compounds with other words in all forms (as in
nuorra-, nuora-, nouraid-), but will require other words to be compounded in
GenSg when forming compounds with nuorra (as in -nuorra, ie GenSg+nuorra).


## Summary


The tags for the left/first part of a compound can then be split in two groups:
```
Implicit defaults, never specified:
+CmpN/SgNCmp
+CmpN/SgGCmp (default as PLX Ga, can only be combined with words requiring GenSg)
+CmpN/PlGCmp (default as PLX Gp, can only be combined with words requiring GenPl)


Explicit overrides:
+CmpN/SgGCmp - can combine with both words requiring GenSg and other words
+CmpN/PlGCmp - can combine with both words requiring GenPl and other words
```


Second part:
```
+CmpN/SgNomLeft (default, implicit)
+CmpN/SgGenLeft (Ga, requires GenSg as first/left part)
+CmpN/PlGenLeft (Gp, requires GenPl as first/left part)
```


Thus, explicit tags for the compound-as-first-part form overrules the default compounding behaviour.


## Overriding overrides


In the following example we need open compounding in GenSg, but default
compounding otherwise:
```
nuorra NUORRA ; +CmpN/SgGCmp +CmpN/DefCmp
```


We can resolve that by adding a special tag `+CmpN/DefCmp` that enforces default
compounding behaviour in addition to the override. That is, we get the full
default pattern, **plus** the override behaviour for the override tag.


The following tags are presently **NOT** used, but might be put to use if
we find that we need more specific overrides of overrides:
```
+CmpN/DefSgGCmp
+CmpN/DefPlGCmp
```


These tags would give default compounding behaviour for the specific cases.




### What kind of words get compound-tags?


Adjectives denoting:


- People


Nouns denoting:


- Living creatures, people, animals etc
- Growths
- Organisations (like Gielda, Guovlu, Riika, Goahti, Dállu etc)
- Topografy (like Johka, Mearra, but not Várri, Jávri)
- People-groups (like Sápmi, Duiska etc)
- Weather and state of the ground etc (like Dálki, Siivu, Čáhci, Dulvi, Muohta etc)
- Time (Áigi, Idja, Beaivi etc)
- and nouns on -vuohta (like ráhkisvuohta)
- plural nouns






### What kind of words get +CmpN/Left compound-tags?


* Some very few specific words where the meaning of the compound alters with the case of the first part (for example Ahki, Dilli, Heahti, Duohki, Vuolli, Geahči. 
Skuvlaahki vs. Skuvllaahki = school-age vs. age of school, 
Stohpodilli vs. Stobudilli = housing situation vs. situation in the house
Uksageahči vs. Uvssageahči = end of the door vs. end of the room where the door is)


* In North Sami: Deverbal nouns like actios and actors stemming from transitive verbs (for example Sálbmalávlun vs. Sálmmalávlun, Sarvabivdi vs. Sarvvabivdi)
