lookup2cg - script
==================

# Presentation

The script *lookup2cg* reformats the `lookup` output so that it can be
interpreted as input to CG, the tool `vislcg3` input. lookup2cg is a
perl script, and as all other scripts, it is located in the gt/script
directory.

# The implementation

The input to the script is the output of `lookup.` The command to
produce the input is, e.g:

```
    $ echo "Dán" | lookup -flags mbTT -utf8 ~/main/gt/sme/bin/sme.fst
    0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
    Dán     dát+Pron+Dem+Sg+Acc
    Dán     dát+Pron+Dem+Sg+Gen
```

The lookup gives a list of available analyses for a given word form. The
output of the lookup2cg script is input to `vislcg             `which
requires a format where the analyzed word form comes before the
analyses. The analysis lines will have to consist of a base form in ""
followed by the morphological tags.

```
    "<Dán>"
            "dát" Pron Dem Sg Acc
            "dát" Pron Dem Sg Gen
```

The script reads one cohort at the time, and reorganizes the different
parts of the analysis. In addition to the basic processing, lookup2cg
has some special functions: It constructs the base form of an analyzed
compound by comparing the analyses and the original input form. The
compounds are rated according to the compounding points and only the
analyses with least number of the compounding points are preserved. In
addition to compound processing, the derivational tags which are not
taken into account in CG are marked in the analysis with asterix (\*).
These special funcitons of the lookup2cg are discussed in detail in the
following sections.

# Compounds


## Building a base form of a compound

The input to CG consists of the analyzed word form followed by a list of
possible analyses. Each analysis contains a base form and the
morphological tags. The compounds are problematic in this respect; in
the lookup output, the analysis of a compound expression contains also
the complete analyses of its parts. For example,

```
    $ echo "bohccobiergobuktagiid" | lookup -flags mbTT -utf8 ~/main/gt/sme/bin/sme.fst 
    0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
    bohccobiergobuktagiid   boazu+N+SgGenCmp+Cmp#buvtta+N+Sg+Acc
    bohccobiergobuktagiid   boazu+N+SgGenCmp+Cmp#buvtta+N+Sg+Gen
```
However, in CG, only the tags of the last compounding word are examined,
and the analyses of the compounding parts are redundant information. The
intermediate tags may thus be removed. On the other hand, the base form
of the compound as a whole is not available, but has to be constructed
in lookup2cg.

The problematic part is identifying the compound boundary. Just taking
the first part from the analysis will not do, as there may be changes of
3 kinds: The final vowel (á, i, u) may have been weakened to (a, e, o),
as for dállodoall\_o\_ekonomiija; there may be consonant gradation in
the form (as when 'alimus\#riekti\#duopmu' becomes
'alimusrievttiduomuin') with a kt:vtt change; and the compound form may
be shortened (and eventually changed), as when 'geahččat + vuohki'
becomes 'geahččanvuogi'.

The base form is constructed basically by taking the analyzed word form,
in this case "bohccobuktaga" and replacing the last word "buktaga" by
its base form "buvtta". The output of the lookup2cg is then:

```
    "<bohccobuktaga>"
             "bohcco#buvtta" N Sg Gen
             "bohcco#buvtta" N Sg Acc
```

The compound boundary is not marked in the input word "bohccobuktaga"
but it has to be searched. The search is done by seraching the first
letters of the base form with the input word form. First, the first 4
letters of the base form are searched from the input word; then 3, 2,
and, as a last resort, 1. In the previous example, the matching string
consisted of two letters: "bu".

This method is a source of a number of errors, since it is common that a
string of two letters occurs several times in the compound, not to
mention a string of only one letter. For example the compound
"sierravuoigatvuođaid" has among others the following reading:

    sierravuoigatvuođaid    sierra+A+Attr+Cmp#vuoigat+A+Der/vuohta+N+Pl+Acc

Now when the base form "vuohta" is searched from the analyzed form
"sierravuoigatvuođaid" by first comparing the first 4 letters of
"vuohta" namely "vuoh". This string cannot be found. Then first 3
letters are searched: "vuo". That string occurs two times in the input
word and basically there is no way to determine which one is correct.
There is a heuristic rule involved that selects the latter occurence and
replaces the word "vuođaid" vith "vuohta". The resulting base form is
thus:

    "<sierravuoigatvuođaid>"
            "sierravuoigatvuohta" N Pl Acc

(This is not completely true, since the derivational tags (here A) are
not removed in the lookup2cg, but if they were.) The word form
"sierravuoigatvuođaid" has another analysis as well, namely one which
does not involve the derivational tag:

    sierravuoigatvuođaid    sierra+A+Attr+Cmp#vuoigatvuohta+N+Pl+Acc

Now the base form of the last part is "vuoigatvuohta". The first 4
letters "vuoi" are found from the analyzed form. Importantly, the first
3 letters would not sufffice to determine the correct word boundary,
since the string "vuo" occurs two times in the analyzed word form. If
the heuristic that selects the latter string were used, the wrong word
form would be produced: "sierravuoigatvuoigatvuohta". Consider the word
"sealgeetniin" which has among others the following readings:

    sealgeetniin    sealgi+N+SgNomCmp+Cmp#eadni+N+Sg+Com
    sealgeetniin    sealgi+N+SgNomCmp+Cmp#eadni+N+Pl+Loc

The strings that are to be searched from the form "sealgeetniin" are the
following "eadn", "ead", "ea" and "e", from the base form of the last
part "eadni". By chance, the string "ea" is found from the input word,
but not in the correct place. The correct string to search would have
been the last "e" in the input word form. The procedure wrongly
generates:

    "<sealgeetniin>"
           "s#eadni" N Pl Loc
           "s#eadni" N Sg Com

This bug seems to be solved (?) also without lexicalising the word:

    "<vealgeetniin>"
         "vealge#eadni" Hum N Pl Loc
         "vealge#eadni" Hum N Sg Com
             

Clearly, the basic string-comparison operations are not satisfactory
method for producing base forms for compounds. The alternative would be
to start using generative lexicon in finding out the base form, this is
not implemented, mainly due to practical reasons.

Note that dropping the analyses of the compound parts also make it
possible to get rid of "ambiguities" like the following:

    rámmaeaktu      rámma+N+SgNomCmp+Cmp#eaktu+N+Sg+Nom
    rámmaeaktu      rámma+N+SgGenCmp+Cmp#eaktu+N+Sg+Nom

And to produce only one one analysis for CG:

    "<rámmaeaktu>"
             "rámma#eaktu" N Sg Nom

## Rating compounds according to the word boundaries

The compounds are rated according to (Fred) Karlsson's law: "In a
compound word analysis, the analysis with the fewest word boundaries is
the correct one." Only the compounds with the fewest word boundaries are
preserved.

For example, the following input to the lookup2cg:

    $ echo "bohccobiergobuktagiid" | lookup -flags mbTT -utf8 ~/main/gt/sme/bin/sme.fst
    0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
    bohccobiergobuktagiid   boazu+Ani+N+SgGenCmp+Cmp#biergu+N+SgNomCmp+Cmp#buvtta+N+Pl+Gen
    bohccobiergobuktagiid   boazu+Ani+N+SgGenCmp+Cmp#biergu+N+SgNomCmp+Cmp#buvtta+N+Pl+Acc
    bohccobiergobuktagiid   boazu+Ani+N+SgGenCmp+Cmp#biergobuvtta+N+Pl+Gen
    bohccobiergobuktagiid   boazu+Ani+N+SgGenCmp+Cmp#biergobuvtta+N+Pl+Acc
    bohccobiergobuktagiid   bohccobiergu+N+SgNomCmp+Cmp#buvtta+N+Pl+Gen
    bohccobiergobuktagiid   bohccobiergu+N+SgNomCmp+Cmp#buvtta+N+Pl+Acc

The compounds are rated straight after they arrive to the lookup2cg.
Only the readings with the fewest compounding points are subject to
further processing, in this example the lines:

    "bohccobiergo#buvtta" N Pl Acc
    "bohccobiergo#buvtta" N Pl Gen
    "bohcco#biergobuvtta" N Pl Gen
    "bohcco#biergobuvtta" N Pl Acc

## Derivational tags

Since the input to the parser is a human-readable dictionary, many
derivations are present already in the dictionary. Due to the dynamic
derivation component, they come out with a double or even multiple
analysis, as the analysis with the derivational affix added in the
parsing process is given as well. thus, we have "ambiguities" like the
following:

    $ echo "mearkkašupmi" | lookup -flags mbTT -utf8 ~/main/gt/sme/bin/sme.fst
    0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
    mearkkašupmi    mearkkašit+V+TV+Der/PassL+V+Der/upmi+N+Sg+Nom
    mearkkašupmi    mearkkašupmi+N+Sg+Nom

    $ echo "ealáhusheiveheapmi" | lookup -flags mbTT -utf8 ~/main/gt/sme/bin/sme.fst
    0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
    ealáhusheiveheapmi  ealáhus+N+SgNomCmp+Cmp#heivet+V+IV+Der/h+V+Der/NomAct+N+Sg+Nom
    ealáhusheiveheapmi  ealáhus+N+SgNomCmp+Cmp#heivehit+V+TV+Der/NomAct+N+Sg+Nom
    ealáhusheiveheapmi  ealáhus+N+SgNomCmp+Cmp#heiveheapmi+N+Sg+Nom
    ealáhusheiveheapmi  ealáhusheiveheapmi+N+Sg+Nom

Here is the list of the derivational tags for North Sámi:

     +Der/adda +Der/ahtti +Der/alla +Der/asti +Der/d +Der/NomAct +Der/eamoš +Der/eapmi +Der/g +Der/geahtes +Der/h
     +Der/heapmi +Der/hudda +Der/huhtti +Der/huvva +Der/j +Der/l +Der/laš
     Der/+meahttun +Der/muš +Der/n +Der/š +Der/st +Der/stuvva +Der/us +Der/vuohta +Der/goahti +Der/lágan
     +Der/Dimin  +Der/PassL  +Der/PassS

The derivational tags are associated with at least a POS tag (N, V, Adv,
A). The POS tags are marked with asterisk (\*) to distinguish them from
the POS tag of the compound. Thus the output of lookup2cg for is the
following:

    "<mearkkašupmi>"
             "mearkkašit" V* TV Der/PassL V* Der/upmi N Sg Nom
             "mearkkašupmi" N Sg Nom

    "<ealáhusjurddašeapmi>"
             "ealáhus#jurddašit" V* TV Der/NomAct N Sg Nom

The marking of the tags and constructing the base form of a word with
derivational suffixes has to be reconsidered. More of derivational
suffixes is presented in the following chapter. The improvements listed
there are not implemented in lookup2cg.

Moments for building a preprocessor geared towards disambiguation
-----------------------------------------------------------------

The goal is to feed only syntactically relevant information to the
disambiguator. So, in the analysis of "bargiin", the correct analysis is
that it is Sg Com of "bargi". Since this word is lexicalised, it is
found as a noun in the lexicon.

    "bargiin" S:1995
            "bargat" V* TV Der/NomAg N Sg Com
            "bargi" N NomAg Sg Com

What we want is thus to treat all Actor nouns as if they were found in
the lexicon in the first place. The problem is then to reverse the
morphological process, and find the stem.

## Der/NomAct

    "lohkamat" S:631, 631, 631
            "lohkat" V* TV Der/NomAct N Pl Nom
            "lohkan" N Pl Nom

## Derivations

These ones do not induce consonant gradation in the stem:

-   **Der/alla:**  
    Remove the -it part from the basic form and the and insert "alla"
-   **Der/ahtti:**  
    Remove the -it part from the basic form and the and insert "ahtti"
-   **Der/NomAg:**  
    Remove the -it part from the basic form and the and insert "eaddji"
-   **Der/NomAct:**  
    Remove the -it part from the basic form and the and insert "eapmi"
-   **Der/l:**  
    Remove the -t part from the basic form and insert "l"
-   **Der/vuohta:**  
    Just add vuohta to the basic form, removing the intervening A tag.
    Problem: there is often a tag 'las1' to the left of 'vuohta', this
    tag causes CG. In these cases, vuohta cannot be added easily.

These ones do:

-   Der/heapmi
-   Der/d
-   Der/h

For the non-gradating verb-to-noun suffixes, remove the V label
preceeding the N.

    "" S:1708
            "čuovvut" V* TV Der/l V* Der/NomAct N Sg Nom
            "čuovvulit" V* TV Der/NomAct N Sg Nom

    ""
            "vuodjat" V* IV Der/d V* Der/NomAct N Sg Acc
            "vuodjat" V* IV Der/d V* Der/NomAct N Sg Gen

    ""
            "jorgalit" V* TV Der/ahtti V* TV Der/NomAct N Sg Ill
            "jorgalahttit" V* TV Der/NomAct N Sg Ill

    "" S:662
            "mearridit" V Der/NomAg N Pl Ill

For the gradating suffixes, we should think more before doing anything.

    "" S:636, 1479
            "lassi" N* Der/heapmi A Sg Nom
