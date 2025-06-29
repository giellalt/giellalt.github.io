# Development tools

This page links to (documentation on) editors, compilers and some other tools.

## Editors

### Text editors

To edit our source file we need a text editor, which has to support
UTF-8, and can save the edited result as pure text. You may use
[emacs](docu-emacs.html) and it's [modes](docu-emacs-modes.html) or _vim_. Graphical editor for all platforms are [Atom](https://atom.io/) and [Sublime Text](https://www.sublimetext.com/), for Linux there is _Gedit_.

On a Mac you may e.g. use [SubEthaEdit](subethaedit.html), for which we also
have made modes for the relevant programming tools, or [TextMate](https://macromates.com/). On Windows (Ubuntu on Windows), you may use e.g. [EditPad lite](https://www.editpadlite.com/).

### Dictionary editors

- [The XMLMind dictionary editor](../infra/editing_dicts_w_XXE.md)
- [Setup of the XMLMind editor](xmlmind-dictsetup.md)

### Documentation editors

We publish our documentation with [MarkDown](https://www.markdownguide.org/). cf. our [documentation on the Markdown format](../infra/Markdown.html)). Many text editors, such as SubEthaEdit, can show Markdown pages. For mac, we recommend [the Macdown editor](https://macdown.uranusjr.com/).

The _language specific_ documentation is written either in the source files themselves or in the `lang-xxx/docs` folder. _Language independent_ documentation (= the pages you read just now) is written in [the repository giellalt.github.io](https://github.com/giellalt/giellalt.github.io) and _Tromsø-specific_ documentation is written in [the repository giellalt.uit.no](https://github.com/divvungiellatekno/giellalt.uit.no).

## Compilers for morphology and morphophonology

The project uses a set of morphological compilers which exists in two
versions, the **xerox** and the **hfst** tools. The original xerox tools
are as of April 2025 no longer supported by our infrastructure, which now 
mainly only uses the open source hfst tools.

A third compiler is also able to compile source files written for xfst
and lexc but not twolc, the **foma** compiler.

#### The hfst compilers

The hfst tools are downloaded as described in the _Getting started_ page.
Documentation is found at [the hfst
wiki](https://github.com/hfst/hfst/wiki). For
installation, see also our [hfst3 installation
page](../infra/compiling_HFST3.html). Note that the documentation is
mainly technical, for a pedagogical introduction, we still recommend the
Beesley and Karttunen book.

#### The Xerox compilers

The **xerox** tools are robust and well documented, they are freely
available for research, but they are not open source. As of 2025, 
they are only available for download through the Internet Archive.
Our infrastructure no longer supports these tools, but they can 
still be used for compiling and testing single files. This is e.g. 
applicable for twolc, where the xerox tools have an interactive debugging
interface which hfst lacks.

The Xerox tools are: **twolc** (for morphophonology), **lexc** (for
morphology), **xfst** (for compiling the final transducer) , and
**lookup** (for analysis and generation). Hfst has the same tools
(called **hfst-twolc**, **hfst-xfst**, etc.) as well as a long list of
other tools.

The Xerox tools can be found at [fsmbook.com](http://www.fsmbook.com) 
([archived version](https://web.archive.org/web/20230128131235/https://web.stanford.edu/~laurik/fsmbook/home.html)).
They are documented in the book referred to on that page (Beesley and
Karttunen), we strongly recommend anyone working on morphological
transducers, both with Xerox and hfst, to buy the book.

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
    cf. also our [lookup notes](docu-lookup.html)).

The programs are activated by printing e.g. `lexc` and then pressing the
enter key. The tools are documented in Karttunen / Beesley [Finite-State
Morphology: Xerox Tools and Techniques](http://www.fsmbook.com) 
([archived version](https://web.archive.org/web/20230128131235/https://web.stanford.edu/~laurik/fsmbook/home.html)). 
The tools may also be installed on your own machine, be it on Mac OSX, Linux
or Windows. One version of the software is found on the CD accompanying
the book, for the latest version, ask Trond for reference.

#### The foma compiler

Måns Huldén's Foma may be downloaded at
[bitbucket.org/mhulden/foma](https://bitbucket.org/mhulden/foma). See
our [Foma documentation](FomaDocumentation.html).

### Disambiguation tools

- [Morphological disambiguation](../ling/docu-disambiguation.html)

### Analysis and testing

The easiest and the most effective way to do this (although a little
scary at first) is to use commandline tools. We have made a [short
introduction](docu-unix.html) in English and a longer
[document](docu-unix-nno.html) in Norwegian on this topic. The
[introduction](docu-sme-manual.html) on how to use our parser is also an
excellent introduction on how to combine the individual tools.

## Our home-made tools, and adjustments of public tools

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

## Other tools

1.  [tca2](/tools/tca2.html), the corpus alignment program.
2.  [Evaluating other sentence alignment programs](salignment.html).
3.  Obsolete documentation on UTF8 for older operating systems:
    [setup](utf-8-setup.html)

## Obsolete documentation

1.  [lookup2cg](docu-lookup2cg.html), a script to transform Xerox output
    to CG input. Nowadays, we use _hfst-tokenise_
