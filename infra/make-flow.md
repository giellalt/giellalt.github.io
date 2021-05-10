# Describing *make*

This is a document that tries to first describe the present situation as
of december 2010, and then lay out what we want to have in the not too
distant future.

The present transducer compilation flow
=======================================

A number of default targets are defined for all languages. The list is
language depended, ie defined for every language we presently support.
The language is specified using the variable $TARGET.

The following describes how it is done using the Xerox tools (the HFST
compilation is still too underdeveloped to really be comparable).

1.  compile all LexC source files (in $SRCS) to a lexical transducer
    using lexc. The resulting transducer should have paths of the
    following form:

        gieseme#ruevtie+CmpN/SgN+CmpN/SgG+CmpN/PlG+N+Der1+Der/Dim+N+Sg+Ill+PxSg2:gieseme#ruevt%^aLATUS%»tje%>assedh

    (corresponding to the surface word form *giesemeruavtatjassedh*)

2.  

The future transducer compilation flow
======================================

A number of default targets are defined for all languages. The list is
mainly language independed, but possibly with language extension. The
variable used to specify the language should be renamed to $GTLANG.

The following describes how it is done using the Xerox tools (the HFST
compilation is still too underdeveloped to really be comparable).

1.  compile all LexC source files (in $SRCS) to a lexical transducer
2.  fork the lexical transducer processing in two:
    1.  regular processing
    2.  further processing for hyphenation purposes
