# WARNING!

This documentation is obsolete, and for the time being kept as
reference. We now use vislcg3 (cf. separate documentation)

Introduction
============

"vislcg" is a constraint grammar parser, i.e., it is a program that
selects the correct analysis in case of homonymy. The idea behind
constraint grammars dates back to Fred Karlsson, as does its first
version, CG-1, programmed in Lisp, the vislcg version presented here is
Eckhardt Bick's open source implementation of Pasi Tapanainen's CG-2
(written in C). This document is taken from the downloadable vislcg
version at sourceforge.

The VISL Constraint Grammer Parser "vislcg"
===========================================

This document describes the similarities and differences between CG-2
and the vislcg Constraint Grammar parser. It is not, in its current
form, intended as an introduction, tutorial, or reference to the CG
formalism. Please refer to \[Tapanainen, 1996\]

Speed
=====

vislcg is not designed for speed but performs reasonably well. On a
Pentium II class PC, it disambiguates at about 1600 words per second
using a morphological disambiguation grammar for Danish with about 1000
rules. This is about 16% the speed of CG-2 on the same platform, with
the same rules and the same input.

SGML tags and comments
======================

vislcg does not currently support SGML tags in the input stream.

Modules
-------

There are no separate parsers for different approaches or behaviors. The
behavior of the vislcg parser is controlled by command line parameters
(flags).

Flags
-----

The command vislcg --help will list all supported parameters and flags,
and a brief description of each:

-   **--check-only:**  
    Test the syntax of the rules file and exit before performing any
    mappings or disambiguations.
-   **--debug:**  
    Run compiler in debug mode.
-   **--grammar=rulesfile or:**  
-   **--grammar rulesfile:**  
    Specifies which rules file to use. This option must be specified if
    any parsing is to be done.
-   **--help:**  
    Print this text.
-   **--minimal:**  
    Equivalent to --verbosity=minimal
-   **--no-corrections:**  
    Do not apply any correction rules.
-   **--no-mappings:**  
    Do not apply any mapping rules. This corresponds to CG-2's dis
    module
-   **--prefix=marker or --prefix marker:**  
    This changes the special marker for ambiguity and mappings. The
    marker may be more than one character. The default marker is the '@'
    character.
-   **--quiet:**  
    Do not output any messages. This option overrides any debug and
    trace options.
-   **--reorder:**  
    Attempt to reorder rules in a way similar to CG-2, using
    PREFERRED-TARGETS and rules of thumb. \[ The default is to apply
    rules in the strict order they appear in the rules file and ignore
    PREFERRED-TARGETS \]
-   **--sections=n or --sections n:**  
    This sets the number (n) of CONSTRAINT sections that are applied.
    The default is to apply all sections.
-   **--trace:**  
    Equivalent to --trace-mappings --trace-constraints.
-   **--trace-constraints:**  
    Trace which constraints were applied and the order of application.
-   **--trace-mappings:**  
    Trace which mappings were applied and the order of application.
-   **--unsafe:**  
    Allow the compiler to remove the last reading of a cohort.
-   **--verbose:**  
    Equivalent to --verbosity=verbose
-   **--verbosity=level or --verbosity level:**  
    This option causes extra or less information to be printed in trace
    mode. Valid levels are:
    -   **'minimal':**  
        - Line numbers of applied rules are attached to the output
        cohorts. The output in minimal mode is similar to that of CG-2's
        mdis.trace module.
    -   **'normal':**  
        - Instead of attaching line numbers to readings, each rule (the
        full specification - not just the line number) is printed each
        time it is applied. \[ 'normal' is the DEFAULT trace mode
        verbosity.\]
    -   **'verbose':**  
        - As normal mode, but the cohort to which each rule was applied
        is printed as well. This will also cause vislcg to print all
        sets, mappings and constraints before processing any input.

Sections of the rule file
=========================

The section headers are DELIMITERS, PREFERRED-TARGETS, SETS,
CORRECTIONS, MAPPINGS, CONSTRAINTS, and END. The sections SETS,
CORRECTIONS, MAPPINGS, and CONSTRAINTS may be repeated any number of
times.

The CORRECTIONS section is a vislcg-specific extension of the CG
formalism. See section 2.1.5a. ans 2.5a. for details.

The minimal set of sections in a rule file is:

    DELIMITERS
    CONSTRAINTS

    or

    DELIMITERS
    MAPPINGS

    or

    DELIMITERS
    CORRECTIONS

2.1.5a. Section: CORRECTIONS
----------------------------

The correction rules handle lexical or other errors by substituting some
tags with others in readings or appending new readings to cohorts. All
corrections are applied after mappings, but before constraints.

    SUBSTITUTE

A SUBSTITUTE operation replaces tags with other tags in a reading.

General form:

"&lt;wordform&gt;" SUBSTITUTE (tag1 tag2 ...) (tag3 tag4 ...) TARGET
(tag5 tag6 ...) IF (context1) (context2) ... ;

The first list of tags (tag1 tag2 ...) is the list of tags to remove
from the targetted reading. The second tag list (tag3 tag4 ...) is the
list of tags to insert into the reading.

If the contextual tests hold, any tag in the removal list that appears
in the reading are deleted from the reading. Note that the tags in the
removal list must be in the same order as those in the reading.

The list of insertions is then inserted into the reading in place of the
lastly removed tag. Note that the insertion will take place if just one
of the tags in the removal list appeared in the reading.

Often, the tags in the removal list should also appear in the target of
the rule.

    APPEND

An APPEND operation adds an entire reading (a new line) - not just a
sequence of tags as ADD and MAP operations do. No TARGET is used as
APPEND does not address individual readings but an entire cohort (of
readings).

General form:

"&lt;wordform&gt;" APPEND ("baseform" tag1 tag2) IF (context1)
(context2) ... ;

Examples

     # Remove the tags A and B from the target reading and insert the tag C.
     "<something>" SUBSTITUTE (A B) (C) TARGET (D) ;

     # Append the reading "another" A B C to cohorts with the wordform
     # " <another> " in the given context
     "<another>" APPEND ("another" A B C) IF (1 (D)) ;

Syntax

-   The keyword CORRECTIONS begins the section.
-   A correction rule is a list of items separated by blanks. The items
    are:
    -   For SUBSTITUTE
        1.  an optional wordform,
        2.  the SUBSTITUTE keyword,
        3.  a removal tag list,
        4.  an insertion tag list,
        5.  an optional keyword TARGET,
        6.  a target tag (or set),
        7.  an optional keyword IF,
        8.  possibly several contextual tests.
    -   For APPEND
        9.  an optional wordform,
        10. the APPEND keyword,
        11. an insertion tag list,
        12. an optional keyword IF,
        13. possibly several contextual tests.
-   The list may extend over several lines.
-   The correction rule is terminated by the semicolon ";".
-   There may be several correction rules.
-   Comments may be added anywhere. The number-sign "\#" begins a
    comment which then continue to the end of the line.

Symbols
=======

2.2.3 Positions
---------------

vislcg supports all the position and search features of CG-2:

-   **Relative position::**  
    0 = same cohort.
-   **:**  
    1 = the next cohort to the right.
-   **:**  
    -2 = the second cohort to the left.
-   **Absolute position::**  
    @1 = the first cohort in the context.
-   **:**  
    @-2 = the second to last cohort in the context.
-   **Search::**  
    Continous search: (NOTE: see 2.4.5.2)
-   **:**  
    \*\*1 = search right, handling links specially.
-   **:**  
    \*\*-1 = search left, handling links specially.
-   **:**  
    \*\*-2 = search left, starting from the second cohort to the left,
    handling links specially.
-   **Careful mode::**  
    Any position followed by the letter C will cause "careful" checking,
    i.e. every reading of the cohort has to belong to the given set.
    E.g.: (-1C (P)) will test whether all readings of the preceding
    cohort is P.

2.3.5. Set operations
---------------------

### 2.3.5.3. Intersection of sets (\_)

SET I = S1 \_ S2 ;

The \_ operation is subtly different from the way CG-2 behaves. In
vislcg, the \_ operator does not make the Cartesian product of the two
operand sets, but instead asserts that to be a member of the set I, a
reading must be a member of both S1 and S2. This means that the \_
operation in vislcg is properly the intersection operation, not the
Cartesian product or concatenation.

Sets constructed using the \_ operator in rules written for CG-2 should
behave identically when used in vislcg and CG-2.

However, there may be subtle differences.

E.g: In vislcg, the following two sets are equivalent:

SET I1 = (A B) \_ (C D) ;  
SET I2 = (C D) \_ (A B) ;

Because the \_ operation is the intersection operation in vislcg, the
following readings will all be members of both I1 and I2:

            A B C D
        C D A B
        A C D B

\[ Note the reading A C D B. It is a member because it matches both (A
B) and (C D). A D C B wouldn't be a member; it matches (A B) but not (C
D). \]

In CG-2, because the \_ operation is the concatenation operation, the
two sets are not equivalent. Only the reading A B C D is a member of I1
and only C D A B is a member of I2.

### 2.3.5.4. Precedence

Operator precedence for set operations are as described for CG-2:

1.  \_ and - from left to right;
2.  OR.

2.3.6. Ambiguity Class (AND)
----------------------------

The ambiguity class operation (AND) is not supported by vislcg. To
achieve the same effect that A AND N has in CG-2, use A LINK 0 N.

2.4.2. Operations
-----------------

The IFF operation is not supported.

2.4.4. Contextual tests
-----------------------

The handling of contextual tests is intended to be consistent with
CG-2's behavior, but currently handles linked, careful, continous
searches subtly different.

Testing wordforms:

Contextual test are tested against the wordforms of cohorts, too. Here,
the wordform is interpreted as a reading with one tag: the wordform.
E.g.: The test (1 ("&lt;$.&gt;")) will match a cohort which is a full
stop.

### 2.4.4.4. Same position

It \_is\_ possible in vislcg to have more than one contextual test for
each position, e.g. the tests (1 A) (1 B) are legal in the same rule.
This is contrary to CG-2, and no warning will be given.

### 2.4.4.5. Complement

In negated contextual tests, such as

         (NOT context0 LINK context1 LINK context2)

the negation is applied last and the rule is interpreted as

         ! (context0 && (context1 && context2)) /* C or Perl-like syntax */

\[Tapanainen 1996; 2.4.5. page 33\]: "Here, the negation is applied
last".

In negated LINKed contexts, such as

         (context0 LINK NOT context1 LINK context2)

the negation is applied only to context1, not to "context1 LINK
context2" I.e.: the LINK to context2 will only be tested if context0
matches /and/ the linked context1 does not. The above context test is
therefore interpreted as

         context0 && ( (!context1) && context2)

Combining the two above cases, the contextual test

         (NOT context0 LINK NOT context1 LINK context2)

is interpreted as

         ! (context0 && ( (!context1) && context2))

2.4.5. Linking
--------------

Careful LINKs are supported, as well as the negated links mentioned
above. E.g.:

         (*1 VFIN LINK 0C P)
         The next cohort to the right which has a reading belonging to the set
         VFIN is unambigously P.

The above test is NOT equivalent to either

         (*1C VFIN _ P)
         To the right, there is a cohort which is unambigously both VFIN and P.

or

         (*1C VFIN LINK 0 P)
         The next cohort to the right which is unambigously VFIN
         also has a reading which is P.

or even (also with a careful link)

         (*1C VFIN LINK 0C P)
         The next occurrence of unambigous VFIN to the right is also
         unambigously P.

LINKs may be both careful and negated. E.g.:

         (*1 A LINK NOT 1C B)
         The next occurrence of A to the right is immidiately followed by a
         cohort which is not unambigously B.

### 2.4.5.2. Continuous search

Continuous search is subtly different from CG-2.

E.g.:

         (**1C A LINK 1 B)
         There is a cohort to the right which is unambigously A and
         followed by a cohort with a reading that is B.

This seems to be inconsistent with CG-2 \[Tapanainen 1996, 2.4.5.
p.33\]: "In careful mode, scanning stops at the first occurrence of A
where the linked tests hold, i.e. the rule means that the next
occurrence of A followed by B is unambigously A."

In vislcg, scanning will not stop at the first occurrence of A followed
by B. In continous search, the LINK will never be tested unless the
preceeding test (1C A) holds, even in careful mode.

E.g.: In visl-cg, but not in CG-2, the following input should satisfy
the above contextual test (the target of the rule being the reading of
"&lt;0&gt;"):

    "<0>"
        X
    "<1>"
        A
        X
    "<2>"
        B
    "<3>"
            A
        A
    "<4>"
        B

Corrections
===========

A correction rule modifies the information in the readings. Most often,
this will be used to recover lexical errors.

2.5a.1. Correction Operations
-----------------------------

There are two operations for correction rules.

\- The SUBSTITUTE operation removes specific tags from a reading and
inserts new ones. A schematic SUBSTITUTE rule is

         "<WORDFORM>" SUBSTITUTE (REMOVAL TAGS) (INSERTION TAGS) TARGET (TARGET)
         IF (TEST1) (TEST2) ... ;

The removal and insertion parts of a substitute rule are lists of tags.
If the target reading has one or more of the removal tags, these will be
removed from the reading and replaced by the insertion tags.

\- The APPEND operation appends a new reading to a cohort. A schematic
APPEND rule is

         "<WORDFORM>" APPEND (INSERTION TAGS) IF (TEST1) (TEST2) ... ;

The APPEND operation does not take a target because it operates on
cohorts, not readings.

Rule order
==========

The rule, target, and application ordering is not the same as for CG-2.

The --no-reordering flag may be set, forcing the parser to always apply
rules in the order of appearance in the rule file.

Currently, reordering is done using the following priority list:

1.  SELECT before REMOVE.
2.  SELECT rules targetting more preferred tags before rules targetting
    less preferred targets.
3.  REMOVE rules targetting less preferred tags before rules targetting
    more preferred targets.
4.  By order of appearance in rule file.

This ordering may change arbitrarily in future versions.

\[ A possible future rule ordering is:

1.  Wordform rules before tag/set targets.
2.  SELECT before REMOVE.
3.  Negated contexts (NOT) first
4.  "Simple" rules before "complex" rules.
5.  Local positions before searches.
6.  Careful rules first. \]

2.6.1. Section order
--------------------

2.6.2. Target order
-------------------

2.6.3. Order in the rule file
-----------------------------

2.6.4. Application order of cohorts
-----------------------------------

Debugging
=========

Debug Mode
==========

The debug mode of the vislcg parser is similar to that of CG-2: In debug
mode, the VISLCG compiler will issue a warning for every reading
featuring a &lt;Correct!&gt; that the rule file would have removed if
not run in debug mode.

To run the rule file debugging option, the --debug option is invoked
together with the vislcg command and the --grammar option. The benchmark
corpus has initially been tagged by a parser and subsequently evaluated
by human annotators, who have added the critical tag &lt;Correct!&gt; to
each reading that was judged to be accurately tagged. The tagged
benchmark corpus is fed into the parser using the new rule file as a
test grammar. The syntax of this command line hence stipulates the
indication of the rule file and the benchmark corpus input file used as
input to the rule file as indicated by the greater-than sign:

vislcg --grammar rulefilename --debug &lt; benchmarkcorpusname

This corresponds to piping the corpus into vislcg by using the "cat"
command:

cat benchmarkcorpusname \| vislcg --grammar rulefilename --debug

You can debug a rule file (e.g. sandbox.txt) with IT Centre's benchmark
corpus by typing:

vislcg --grammar /home/cg-group/ sandbox.txt --debug &lt;
/home/cg-group/bs-benchmark

or

cat /home/cg-group/bs-benchmark \| vislcg --grammar /home/cg-group/
sandbox.txt --debug

Bibliography:
=============

\[Tapanainen, 1996\]: Pasi Tapanainen. The Constraint Grammar parser
CG-2. Publications of the Department of General Linguistics, University
of Helsinki, no. 27. 1996. ISBN 951-45-7331-5

http://visl.sdc.dk
