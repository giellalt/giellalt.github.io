Development tools
=================

The project manipulates text in many ways, organized in lexicons.

Editors
-------

To edit our source file we need a text editor, which has to support
UTF-8, and can save the edited result as pure text. You may use
[emacs](docu-emacs.html) and it's [modes](docu-emacs-modes.html) On a
Mac you may e.g. use [SubEthaEdit](subethaedit.html), for which we also
have made modes for the relevant programming tools..

Documentation tools
-------------------

We publish our documentation with [forrest](../infra/forrest-howto.html)

Morphological analysis
----------------------

The project uses a set of morphological compilers which exists in two
versions, the **xerox** and the **hfst** tools. The xerox tools are the
original ones, they are robust and well documented, they are freely
available for research, but they are not open source. The hfst tools are
open source with no restrictions. Both compilers compile the same source
files, and at Giellatekno and Divvun we use both compilers
interchangeably. Files for practical programs we compile in hfst,
sevaral extensions are available in hfst only, but on a daily basis the
xerox tools have a somewhat faster compilation speed.

A third compiler is also able to compile source files written for xfst
and lexc, the **foma** compiler.

### The xerox compilers

The Xerox tools are: **twolc** (for morphophonology), **lexc** (for
morphology), **xfst** (for compiling the final transducer) , and
**lookup** (for analysis and generation). Hfst has the same tools
(called **hfst-twolc**, **hfst-xfst**, etc.) as well as a long list of
other tools.

The xerox tools can be found at [fsmbook.com](http://www.fsmbook.com).
They are documented in the book referred to on that page (Beesley and
Karttunen), we strongly recommend anyone working on morphological
transducers, both with xerox and hfst, to buy the book.

There is a bug in the latest xfst, causing forms like **oslolaččat**
(derived from **Oslo**) not to work. If this is important to you,
download [xfst 2.13](http://www.divvun.no/static_files/xfst.213), change
the name to **xfst** and put it in e.g. $HOME/bin.

1.  **twolc**, for phonological and morphophonological rules (cf. a
    [shorter](http://staff.um.edu.mt/mros1/nlp/fsa/twolc92.html) and a
    [longer](http://www.stanford.edu/~laurik/.book2software/twolc.pdf)
    documentation).
2.  **lexc**, for representing the Saami stems and the affix lexica
3.  **xfst** the finite-state transducer tool, for integrating the
    different parts of the program, and for compiling the preprocessor.
4.  **tokenize**, for tokenization and processing (cf.
    [documentation](http://www.cis.upenn.edu/~cis639/docs/tokenize.html)),
    note that we do not use tokenize for preprocessing at the moment,
    but perl.
5.  **lookup**, an interface to the morphological analyser.
    ([documentation](http://www.cis.upenn.edu/~cis639/docs/lookup.html),
    cf. also our [lookup notes](docu-lookup.html)

The programs are activated by printing e.g. `lexc` and then pressing the
enter key. The tools are documented in Karttunen / Beesley [Finite-State
Morphology: Xerox Tools and Techniques](http://www.fsmbook.com). The
tools may also be installed on your own machine, be it on Mac OSX, Linux
or Windows. One version of the software is found on the CD accompanying
the book, for the latest version, ask Trond for reference.

### The hfst compilers

The hfst tools can be found at [the hfst download
page](https://kitwiki.csc.fi/twiki/bin/view/KitWiki/HfstDownloads).
Documentation is found at [the hfst
wiki](https://kitwiki.csc.fi/twiki/bin/view/KitWiki/HfstAllPages). For
installation, see also our [hfst3 installation
page](../infra/compiling_HFST3.html). Note that the documentation is
mainly technical, for a pedagogical introduction, we still recommend the
Beesley and Karttunen book.

### The foma compiler

Måns Huldén's oma may be downloadet at
[bitbucket.org/mhulden/foma](https://bitbucket.org/mhulden/foma). See
our [Foma documentation](FomaDocumentation.html) .

Disambiguation tools
--------------------

1.  [Morphological disambiguation](../ling/docu-disambiguation.html)
2.  [lookup2cg](docu-lookup2cg.html), a script to transform Xerox output
    to CG input

Analysis and testing
--------------------

The easiest and the most effective way to do this (although a little
scary at first) is to use commandline tools. We have made a [short
introduction](docu-unix.html) in English and a longer
[document](docu-unix-nno.html) in Norwegian on this topic. The
[introduction](docu-sme-manual.html) on how to use our parser is also an
excellent introduction on how to combine the individual tools.

Our home-made tools, and adjustments of public tools
----------------------------------------------------

1.  [The cgi-bin setup for making the parsers accessible on the
    web](../infra/docu-cgi-bin.html)
2.  [How the generated paradigms should be presented at
    web](../infra/web/ParadigmPresentation.html)
3.  [The web interface to our web demo](../infra/docu-webinterface.html)
4.  [Conversion scripts](docu-conversionscripts.html)
5.  [Testing tools](../ling/docu-testing.html)
6.  [Emacs for lexicon expansion](docu-tools-emacs.html)
7.  [Special emacs modes](docu-emacs-modes.html)
8.  [Autshumato CAT platform](autshumato.html)

Other tools
-----------

1.  [tca2](/tools/tca2.html), the corpus alignment program.
2.  [Evaluating other sentence alignment programs](salignment.html).
3.  Obsolete documentationon UTF8 for older operatie systems:
    [setup](utf-8-setup.html)
