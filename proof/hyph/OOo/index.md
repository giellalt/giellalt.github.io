Work plan for hyphenation in OpenOffice
=======================================

- See also this [Howto file from OpenOffice](HowToBuildTexHyphenators.md)

An OpenOffice.org hyphenator was not a fixed part of the original plan,
rather it was indicated as an optional addition. Part of the reason for
this was that at the time I could not find information on how to
implement it. Now the information is there (or: we have found it), and
we'll try to add Sámi hyphenation after we have the OOo speller in
place. Relevant links are:

-   [OOo Lingucomponent,
    hyphenation](http://www.openoffice.org/lingucomponent/hyphenator.html),
    includes a brief how-to
-   [OOo Dictionary
    Wiki](http://wiki.services.openoffice.org/wiki/Dictionaries), with
    link to hyphenation dictionary creation tool
-   A copy of the [user manual](userguide-p.pdf) for
    [OPatGen](http://www.fi.muni.cz/~xantos/patlib/) (see below) is
    available.

Basically, the task of creating TeX hyphenation pattern files consis of
the following steps:

1.  print the lower side of a hyphenated, normative transducer to
    produce a correctly hyphenated word list
2.  run that list through `OPatGen` (see above) and associated scripts -
    see the user documentation above
3.  test the result

We need to install `OPatGen` first, which in turn needs `cweave`.

Steps to install `cweave`:

    sudo port install texlive-bin-extra

Steps to install `opatgen` (we have a local copy of the code):

1.  `cd $GTHOME/tools/patlib`

2.  `make`  
    **NB!** At the moment the C compilation is broken, because the code
    rely on a number of old, non-conformant coding practices. `gcc 2.95`
    is required, which is not available on any modern systems anymore.
    We either need to upgrade the code, or find an alternative solution.

    We have successfully modernised the code of `tools/dic2traskelet.C`
    (a helper tool), but the C code of the main application is a bit
    more complex to cover.

The alternative solution
========================

The `OPatGen` route is too time-consuming, so we need an alternative.
Probably the simplest alternative is to use the original `PatGen` tool,
which differs from `OPatGen` in two important respects:

-   it does not support Unicode, so all non-ASCII chars must be escaped
-   it comes with almost every TeX installation, and should be available
    everywhere

The steps needed to create the hyphenation patterns are almost the same,
with the addition of the need to escape the non-ASCII characters. In
more detail, it looks like the following:
