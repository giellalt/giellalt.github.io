Capitalisation
==============

Here, we document two processes, one accepting initial capitalisation
("Dat" as well as "dat"), and the other one full capitalisation ("DAT"
but not "DAt")

1.  [Initial capitalization](#ini)
2.  [Capitalization of whole words](#all)

Initial capitalization
----------------------

This is what the book says:

    xfst[]: define initcap a (->) A, b (->) B, c (->) C,
    d (->) D, e (->) E, f (->) F, g (->) G, h (->) H, i (->) I,
    j (->) J, k (->) K, l (->) L, m (->) M, n (->) N, o (->) O,
    p (->) P, q (->) Q, r (->) R, s (->) S, t (->) T, u (->) U,
    v (->) V, w (->) W, x (->) X, y (->) Y, z (->) Z || .#. _ ;

This string has been put in the file case.regex, and compiled to
caseconv.fst using xfst. As a result all initial caps are downcased, but
upon generation all words are given an alternative reading with an
initial capital letter. This is not what we want.

Capitalization of whole words
-----------------------------

The key file is `allcaps.regex`. It is modelled after the book, and
works in the following way:

First, 'upper' is defined as the set of all capital letters. Then,
allacaps is defined as the set of relations 'a (-&gt;) A' etc. for all
small/capital pairs that occur in the context '.\#. upper\* \_ upper\*
.\#.', i.e. between strings of upper case letters only.

The resulting binary files *allcaps.fst* is compiled by the Makefile. In
principle, the parser sme.fst could have been composed with allcaps.fst
into a single transducer (sme.fst .o. allcaps.fst), but this is not
done, since the resulting transducer would have been very large indeed
(cf. discussion on this issue in the book). Instead, the issue is
handled in a *lookup script file*. Ath present, this file looks as
follows (cf. the discussion on lookup script files in the book):

Er dette rett?

    analyzer $HOME/gt/sme/bin/sme.fst
    allcaps         $HOME/gt/sme/bin/allcaps.fst

    allcaps analyzer

The lookup script should be used as follows (when standing in sme/):

    .. | lookup -flags mbTT -f src/cap-sme | ...

Note that the files have absolute, and not relative reference (relative
reference would here have been `../bin/sme.fst` etc.). Xerox has been
notified, and has answered, cf.

(quote)  
Päiväys: onsdag, 12. februar 2003 18:39:06 +0100  
paths in lookup scripts.  
Vastaus: tamas.gaal@xrce.xerox.com

Trond,

There is some possibility of using Unix environment variables in lookup,
see

<http://www.xrce.xerox.com/competencies/content-analysis/fssoft/docs/lookup-97/lookup97.html>

It may not solve your problem - but please read it first: towards the
end, there is reference to environment variables like

setenv LOOKUP\_SCRIPT\_BASE ...

If it is not of enough then the interface should be improved. While it
is not a complicated matter, we are short of able people now so you may
have to use the full pathnames in your scripts until it gets improved.  
(end of quote)
