The common Makefile and scripts
===============================

The Makefile is used to compile the xfst and aspell source files, i.e.
to make the programs. It is put to use by (being in `gt/`) writing the
command `make`. Makefile takes target parameter from command line, that
is GTLANG=&lt;lang, for example (compiling the sme parser)
`make GTLANG=sme`. Makefiles in general are documented in introductions
to the program `make`, and the format of the makefiles used in this
project is found in Appendix C of the Beesley and Karttunen book. The
makefiles for the other languages follow the same layout, but they are
simpler.

Makefile structure
------------------

The makefile contains variables defining tools and files to be used in
compiling the programs. In the beginning of makefile are commonly used
tools and files, and after those there are language specific variables.

The rest of the makefile is documented in [sme
makefile](sme/docu-sme-makefile.html).

Common scripts
--------------

Common scripts to all languages are in `gt/common/src/`, and binaries of
these scripts are in `gt/common/bin/`.
