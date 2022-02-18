How to write disambiguation files
=================================

Constraint grammar
------------------

The main introduction to CG-2 is Tapanainen 1996. Karlsson & al 1992
gives a good introduction to CG-1, and also the most thorough
presentation of the philosophy behind the constraint grammar framework.

The projects uses the CG-2 formalism, and this formalism is presentation
below. The concrete implementation is vislcg.

The structure of the disambiguation file
----------------------------------------

The disambiguation file has the suffix .rle, in our case it is called
sme-dis.rle, smj-dis.rle, etc. The file consists of the following
sections (an additional section CORRECTIONS may also be used, it then
follows the CONSTRAINTS sections):

-   DELIMITERS
-   SETS
-   MAPPINGS
-   CONSTRAINTS (there are several CONSTRAINT sections

### The delimiters

There are four delimiters, ".", "?", "" and "!". The section thus
contains the following line only:

    DELIMITERS = "<.>" "<!>" "<?>" "<¶>";

The last delimiter is inserted by the corpus processor in order to
single out titles and other headings.

### The lists and sets

This section is introduced with the heading SETS. Note that this heading
must be removed in order to run the parser with Connexor's parser mdis.

The tags are introduced to the parser as lists and sets. Tags or tag
combinations that are not introduced here must be referred to within
parentheses. Lists and sets are defined according to the following
principles:

1.  Every grammatical tag used in the rules as such should be declared
    as a one-membered LIST carrying its own name. This in order to be
    able to refer to them without using parenteses. Thus, we now have
    SELECT N IF (-1 V); instead of SELECT (N) IF (-1 (V)).
2.  Tag combinations, such as (N Sg) or (Pron Pers Sg1 Nom) are not
    defined as single-membered LISTs, but referred to as tags (hence in
    parentheses). Note: Should frequent tag combinations get a list and
    thereby a shorter name? e.g. LIST MUN = (Pron Pers Sg1 Nom); ?
3.  Sets of different tags and/or combinations are declared as sets,
    e.g. SET ADVLCASE = Ill \| Loc \| Com \| Ess. Note: Should they be
    declared as lists, e.g. LIST ADVLCASE = Ill Loc Com Ess ;? In this
    case they are of course a list of tags, and not a set of (atomic)
    sets. Which method is preferrable?
4.  Finally, the sets on which there are other operations than OR (such
    as + and -) are declared as SETs.

### barriers

Barriers are used to constrain the scope of rule contexts. By now, there
are so many complex barrier sets, that a systematic documentation of
barriers, their linguistic implications and consequences of their use
might be necessary for rule writers. Often enough, we barriers turned
out to implement other linguistic barriers than originally expected.

Another fact is that until now complex barriers do not exist. So, we
actually talk about signal words rather than barriers denoting a
particular construction.

#### ambiguos barriers

CC

1.  can introduce another main clause
2.  can introduce another noun phrase in coordination
3.  can introduce another modifier of a noun phrase within a noun phrase

#### phrase structure philosophy

SET S-BOUNDARY = CP \| CS \| SEMICOL \| COL ;  
\# remember that (",") and CC are potential sentence boundaries, too

SET NP-BOUNDARY = CC \| COMMA ;  
\# remember that those are potential sentence boundaries, too

SET BOUNDARY = S-BOUNDARY OR NP-BOUNDARY ;

SET CRD = COMMA \| CC \| NEGFOC \| XGO ;  
\# coordinators

#### formalism oriented

Since we get formalism caused problems, such as eingschobene phrases,
that again fullfill other barrier criteria and therefore have the
consequence that a certain construction is not recognized.

SET INTR = REL \| MO \| PUNCT-LEFT ;  
\# interupters

SET NPNH:  
This set - a negation of the set PRE-NP-HEAD - originally denotes words,
that are no possible modifiers of an NP. But: sometimes NPNH is used as
a BARRIER at a point of time (or rather order) in the rule file we still
have the Acc option to Gen, if NPNH is used as a BARRIER we do not get
the rule to work since Acc is not a member of the set PRE-NP-HEAD.

### The constraints

The constraints of the North Saami file are documented
[here](/lang/sme/docu-sme-dis.html).

The format of the constraint rules
----------------------------------

tbw.
