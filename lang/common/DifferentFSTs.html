Overview
========

This is an overview over FSTs which are compiled and their properties.

-   **Removing paths**: Paths marked with +Dial/- (exept for the chosen
    dialect), +Use/NG and +v2 and bigger, are removed for MT
    (generator-mt-gt-norm) and Oahpa: (generator-oahpa-gt-restr). The
    tags are invisible in other FSTs. Paths with +Err/Orth and +Err/Lex
    are removed for all alle norm-analysers and norm-generatorers, and
    the tags are visible in other FSTs. +Use/MT should be removed for
    all FSTs except for MT, but this is not implemented. The tag is
    invisible.
-   **+MWE** is added to entries which should be tokenised as multiwords
    exspressions. The tag is invisible.
-   **Normative compoundtags** like, +CmpN/SgN +CmpNP/First
    +CmpN/SgNomLeft and more, are resticting compounding only for
    analyser-gt-norm.hfst and generator-gt-norm.hfst. They don't work
    for XFST. The tags are invisible. Read more about [Normative
    compoundtags](CompoundTags.html).
-   **Other tags**, like +TV, +IV,+vN, +HomN, +NomAg, +G3, +G7, +Allegro
    and more, are **visible or invisible** in analysers and generators
    according to the different applications, because we want to keep
    variants from each other, or to give information about semantics,
    grammatic features or pronounciation, or to give ID to lemmas which
    lexical forms are homonyms. For analyser-gt-norm and
    analyser-gt-desc there will be paths both with and without these
    tags.
-   **NDS-dictionary and VD-dicts**: Analysis is done with
    analyser-dict-gt-desc, and wordform generation with
    generator-dict-gt-norm. In the generator are removed all +v2 and
    bigger. For the dictionary we need tags lik +HomN, +G3, +G7, +NomAg
    to be visible to give the correct translation to the homonous
    lexiconentries, and we will have tags like +Use/NGminip and +Allegro
    visible so we can choose not to give them to the user in the
    paradigms: [dictionarywork](../../dicts/dictionarywork.html)
-   **+Sem/tags** are visible in analyser-disamb-gt-desc.
-   For **disambiguation** the analysis is done with
    analyser-disamb-gt-desc, because we need semantic tags, og also tags
    like +HomN, +G3, +G7, +NomAg, +Allegro. Also +Err/Orth and +Err/Lex
    can be useful for disambiguation.
-   For **Oahpa** is gerated with generator-oahpa-gt-restr for each
    dialect, and generator-oahpa-gt-norm for correct-forms, and for
    these generators are also tags like med tagger som +TV, +IV,+vN,
    +HomN, +NomAg, +G3, +G7, +Allegro to differ between the lemmas. For
    sme-Oahpa is ped-sme.fst compiled in a error-gt-branchen, and it is
    used for analysis of user's input in Sahka og Vasta. This one is not
    documented here.
-   On **web** we give morphological analyses wihtout exstra internal
    tags, but we have +Err/Orth and +Err/Lex visible. Dublets of
    analysis, the analysis with +Err/-tag is removed, with a
    vislcg3-files.

Analysers and generators
========================

+MWE +Dial/- and normative compoundtags like +CmpN/SgN are not visible
in any FST

|                                   |                                                               |                                                              |                                                                                                                                                                                                                     |
|-----------------------------------|---------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ANALYSERS**                     |                                                               |                                                              |                                                                                                                                                                                                                     |
| **FST**                           | **Visible**                                                   | **Invisible**                                                | **Remarks**                                                                                                                                                                                                         |
| analyser-raw-gt-desc              | all tags                                                      |                                                              |                                                                                                                                                                                                                     |
| analyser-gt-desc                  | +Err/Orth, +Err/Lex, +vN                                      | +Sem/tags                                                    | Descriptive analyser                                                                                                                                                                                                |
| analyser-disamb-gt-desc           | +Err/Orth, +Err/Lex, +Sem/tags, +Allegro                      | +vN                                                          | Descriptive analyser for disambiguation                                                                                                                                                                             |
| analyser-gt-norm                  | +NomAg +G3 +G7 +Allegro, +HomN +vN +Use/NGminip +Coll +TV +IV | +Sem/tags, +OLang/\*, +Use/NGminip, +Allegro, +vN            | Normative analyser                                                                                                                                                                                                  |
| analyser-dict-gt-desc             | +NomAg +G3 +G7 +Allegro, +HomN +vN +Use/NGminip +Coll +TV +IV | +Sem/tags, +OLang/\*, +vN                                    | Descriptive analyser for dicts                                                                                                                                                                                      |
| analyser-dict-gt-desc-mobile      | +NomAg +G3 +G7 +Allegro, +HomN +vN +Use/NGminip +Coll +TV +IV | +Sem/tags, +OLang/\*, +vN                                    | analyser-dict-gt-desc-mobile is compiled with orthography/spellrelax-mobile-keyboard.regex in addition to the ordinary spellrelax.regex                                                                             |
| analyser-oahpa-gt-norm            | +NomAg +G3 +G7 +Allegro +HomN +Coll +TV +IV                   | +Sem/tags, +OLang/\*, +Use/NGminip, +Allegro, +vN            | FST made for testing, it is parallel with the generator.                                                                                                                                                            |
| analyser-mt-gt-desc               | +NomAg +G3 +G7 +Allegro +HomN +Coll +TV +IV +Sem/tags         | +vN                                                          | Desciptive analyser for MT input. Also analysis without +Sem/tags and +Allegro                                                                                                                                      |
| **GENERATORS**                    |                                                               |                                                              |                                                                                                                                                                                                                     |
| **FST**                           | **Mandatory**                                                 | **Optional**                                                 | **Remarks**                                                                                                                                                                                                         |
| generator-gt-desc                 | \-                                                            | +NomAg +G3 +G7 +Allegro +HomN +vN +Use/NGminip +Coll +TV +IV | Descriptive generator                                                                                                                                                                                               |
| generator-gt-norm                 | \-                                                            | +NomAg +G3 +G7 +Allegro +HomN +vN +Use/NGminip +Coll +TV +IV | Normative generator                                                                                                                                                                                                 |
| generator-dict-gt-norm            | +NomAg +G3 +G7 +Allegro +HomN +vN +Use/NGminip +Coll          | +TV +IV                                                      | Normative generator for dict paradigms                                                                                                                                                                              |
| generator-oahpa-gt-norm           | +NomAg +G3 +G7 +HomN +Coll                                    | +IV +TV +vN, +Allegro +Use/NGminip                           | Normative generator for generating Oahpa keyanswers (tolerate all dialects and Use/NG-forms)                                                                                                                        |
| generator-oahpa-gt-restr\_XX      | = generator-oahpa-gt-norm + Allegro                           |                                                              | Normative generator for generating tasks. Paths marked with +Dial/- (exept for the chosen dialect), +Use/NG and +v2 and biggerRemoves paths with +Use/NG and the other dialects (Dial/), if there are more dialects |
| generator-mt-apertium-norm.att.gz | +IV +TV +NomAg +G3 +G7 +Coll +HomN                            | +Sem/tags +Allegro                                           | Normative generator for MT output. Paths with +vN and +Use/NG are removed.                                                                                                                                          |

How to compile in langs/LANG
============================

`./configure`

Examples for parameters: `./configure --with-hfst --enable-dicts`

How to get a list of parameters: `./configure -h`

How to see the parameters which are set: `head config.log`

Some of the parameters:

-   --enable-spellers (build any/all spellers \[default=no\])
-   --enable-grammarchecker (enable grammar checker \[default=no\])
-   --enable-dicts (enable dictionary transducers \[default=no\])
-   --enable-oahpa (enable all tranducers with adjective-oahpa.lexc file
    instead of adjective.lexc \[default=no\])
-   --enable-apertium (enable apertium transducers \[default=no\])
