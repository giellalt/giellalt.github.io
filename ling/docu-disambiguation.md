Our disambiguator: vislcg3
==========================

The project uses Eckhard Bick and Tino Dideriksens **vislcg3**, a
compiler for constraint grammar, a formalism originally developed by
a.o. Fred Karlsson and Pasi Tapanainen at the University of Helsinki.
Cf. our introduction to [how to write disambiguation
files](cgii-writing.html)

We have developed grammars (=files) for morphological disambiguation
(disambiguation.cg3) syntactic function assignment (functions.cg3) and
dependency assignment (dependency.cg3) for many of the languages we are
working with. Have a look at [the documentation pages for each
individual language](../lang/index.html). For each language, the **What
is This** link will indicate how much work has been done on the language
in question.

The three generations of constraint grammar parsers
---------------------------------------------------

1.  **The original CG formalism** was developed by Fred Karlsson, at
    [Dept. of Linguistics in Helsinki](http://www.ling.helsinki.fi), it
    is presented in Karlsson et al. 1995.
2.  A new version of CG, called **CG-2**, was developed by Pasi
    Tapanainen, cf. Tapanainen 1996. It is maintained by
    [Connexor](http://www.connexor.com). vislcg, an open source
    implementation of CG-2, at <https://visl.sdu.dk/>. This
    parser is available for download ad sourceforge,
    [here](http://sourceforge.net/projects/vislcg/), but not maintained
    any more.
3.  **vislcg3**, the third generation of CG compilers, is being
    developed at <https://visl.sdu.dk/>.

Links to old documentation
--------------------------

-   [Differences between vislcg and CG-2](/tools/vislcg.html)

A Constraint Grammar bibliography
---------------------------------

-   [English Wikipedia on constraint
    grammar](https://en.wikipedia.org/wiki/Constraint_grammar)
-   [Didriksen, Tino 2007: Constraint Grammar Manual. 3rd version of the
    CG formalism variant.](%20http://beta.visl.sdu.dk/cg3/single/)
-   [Visl Constraint Grammar
    page](https://visl.sdu.dk/constraint_grammar.html)
-   Karlsson, Fred; Atro Voutilainen, Juha Heikkilä and Arto Anttila
    1995: Constraint Grammar. A Language-Independent System for Parsing
    Unrestricted Text. Mouton the Gruyter.
-   Tapanainen, Pasi 1996: The Constraint Grammar Parser CG-2.
    University of Helsinki Publications No. 27.
