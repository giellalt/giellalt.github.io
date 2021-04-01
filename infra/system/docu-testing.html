Testing tools for the sámi language technology project
======================================================

- Technical documentation -
---------------------------

This page documents the scripts and the Makefile used as test tools.
There are five perl scripts, all located in
`$CVSROOT/gt/script/testing/`, and a Makefile, one copy for each
language, located in `$CVSROOT/gt/smX/testing/` (where `smX` is the ISO
code of your favourite Saami language). The Southern Saami (sma)
Makefile is used as the development version, and serves as the original,
from which the others are copied.

Below is only described the calling and the return values of the
different scripts, for details, see the scripts themselves, they are
pretty simple, and fairly well commented (and if not, complain to me).

1. merge-codesNforms.pl
-----------------------

### Purpose:

To create a base file for making test cases by combining a tag list and
a word form list. This way we only have to write the tag list once for
each POS.

#### Input:

-   `ARG1:` input file with inflectional tags, one tag on each line;
    normally one of the files listed below (the filenames are not
    hardcoded, but given by the Makefile):
    -   `noun-codes.txt`
    -   `verb-codes.txt`
    -   `adj-codes.txt`
-   `ARG2:` input file with inflected word forms, in the same order as
    the tags; two or more alternate word forms on the same line,
    separated by a comma ONLY

#### Output stream:

A repeating, tab-separated list of fields (three fields), each such
triple separated with a newline:

-   `Field 1:` the baseform of the word
-   `Field 2:` a morphological tag
-   `Field 3:` the word form(s) corresponding to the tag; in the case of
    two or more alternative word forms, they are separated by a comma
    ONLY (no space).

### Usage

Used in front of one of:

-   [3. `make-gen-test.pl`](#GenTest)
-   [4. `make-gen-test-facit.pl`](#GenFaci)
-   [5. `make-ana-test.pl`](#AnaTest)

to create the actual test cases, and the corresponding facit files.

2. merge-codesNword.pl
----------------------

### Purpose:

To create the input file for generating a paradigm by combining a tag
list and a base form of a given word.

#### Input:

-   `ARG1:` input file with inflectional tags, one tag on each line;
    normally one of the files listed below (the filenames are not
    hardcoded, but given by the Makefile):
    -   `noun-codes.txt`
    -   `verb-codes.txt`
    -   `adj-codes.txt`
-   `ARG2:` a word in its base form. The word has to belong to one of
    the major POSes N, A or V.

#### Output stream:

A list of baseform plus codes corresponding to the whole paradigm. There
is one such combination on each line.

### Usage

The output can be directly used as input for `xfst`, to generate the
word forms that make up the paradigm.

3. make-gen-test.pl
-------------------

### Purpose:

To extract from a created testbase file the separate parts needed as
input data for testing word form generation.

#### Input:

A testbase file created with [1. `merge-codesNforms.pl`](#CodForm) ,
with the three fields baseform, inflectional codes, and word form(s)
corresponding to the inflectional codes.

#### Output stream:

Test file for word form generation testing: one line for each
inflection, consisting of baseform and inflectional codes appended. This
is the input format required by the Xerox `xfst` tool.

### Usage

Use as input to the Xerox `xfst` tool (done in the Makefile).

4. make-gen-test-facit.pl
-------------------------

### Purpose:

To create the **expected** output from a generation test run, such that
the actual test results can be compared with it. Based on the
comparison, one can make further reports on the success of the test run.

#### Input:

Testbase file as [created above](#CodForm).

#### Output stream:

A list of word forms in the same format as produced by the Xerox tools,
extracted from the testbase file. One word form on each line.

### Usage

Use the output of this script to diff against the actual test result
(done in the Makefile). Any differences indicate possible errors in the
morphological description.

5. make-ana-test.pl
-------------------

### Purpose:

To create a test file (or a facit file) for morphological analysis by
spitting out all the possible word forms with the corresponding analysis
at the end, formated almost as the output from the Xerox `xfst` tool.
Some further postprocessing is needed both for making the test case, and
for creating the facit file. This is done in the [Makefile](#MakeFil).

#### Input:

A testbase file as created [above](#CodForm).

#### Output stream:

A two-field, tab-separated list:

-   **Field 1:** Wordform
-   **Field 2:** Baseform\_Codes

In cases where there are more than one alternative wordform, they have
been split onto separate lines.

### Usage

Use to create the basis for word form analysis testing. Further sorting
and cutting (field 1 as test data, field 2 as facit data) is needed, and
is done in the Makefile.

6. Makefile
-----------

### l

Whereas the perl scripts above are pretty short and simple, the Makefile
used to automatise testing is pretty long and complex. Thus, the
documentation is split into the following sections:

-   Flow diagram for testing
-   Variables
-   Main sections of the Makefile

#### Flow diagram for testing

Below is outlined the flow of action for the test bed. The example file
is from South Sami, but the flow itself is language independent. The
flow diagram illustrates word form generation.

                -----------    ===========           The corresponding
       "Files", | Scripts |  & || Tools ||              make target
    ==================================================================
    "noun-codes.txt"  "n-even-col6-ie-full.txt"
            \                 |
             ------------------------
             | merge-codesNforms.pl |
             ------------------------
                         ||
                         \/
        "n-even-col6-ie-full.testbase"                 n-%.testbase
           ||                  ||
           ||                  \/
           ||       ------------------------
           ||       |   make-gen-test.pl   |
           ||       ------------------------
           ||                  ||
           ||                  \/
           ||      "n-even-col6-ie-full.gtest"            %.gtest
           ||                  ||
           ||                  \/
           ||   ------------------------------------
           ||   | n-even-col6-ie-full-gtest-script |
           ||   ------------------------------------
           ||                  ||
           ||                  \/
           ||            ==============
           ||            ||   xfst   ||
           ||            ==============
           ||                  ||
           ||                  \/
           ||        "n-even-col6-ie-full.gresult"       %.gresult
           ||                              ||
           \/                              ||
      --------------------------           ||
      | make-gen-test-facit.pl |           ||
      --------------------------           ||
                     ||                    ||
                     \/                    ||
          "n-even-col6-ie-full.gfacit"     ||            %.gfacit
                            ||             ||
                            \/             \/
                            =================
                            ||     diff    ||
                            =================
                                    ||
                                    \/
                      "n-even-col6-ie-full.greport"      %.greport
                                    ||
     all *.greport files - \  \  \  \/  / /  /
                            =================
                            ||     cat     ||
                            =================
                                    ||
                                    \/
                              "n-g.summary"             n-g.summary

The above scheme is repeated more or less identical for word form
analysis, with the exception that there is no separate `-facit.pl`
script - the same script is used for producing both test input and test
facit, with the help of some postprocessing in the Makefile.

The scheme for paradigm generation is much simpler, and it should be
possible to read the Makefile directly. If not, [complain to
me!](mailto:sjurnm@mac.com)

#### Variables Used

##### Predefined Variables

The following built-in variables are used:

-   **$@:**  
    Contains the name of the target, is often used to redirect output to
    a file named the same as the target.
-   **%:**  
    (Strictly speaking not a variable:) Wildcard in target and
    dependency statements. When used as a wildcard in a target, the
    string it represents will be inserted in its place in names of
    dependencies. Often used to make one target for many similarly named
    files/targets.
-   **$&lt; :**  
    Represents the **first** element in a list of dependencies.
-   **$^:**  
    Holds the name of **all** dependencies.
-   **$\*:**  
    Holds the string matched by % in a target name.
-   **MAKE:**  
    Holds the pathname of the `make` program used. This is useful f.ex.
    when starting a `make` command in another directory from within a
    Makefile, to ensure they are using the same `make`.

##### Variables I have defined

The following variables defined by me are used:

-   **SHELL:**  
    The location of the shell program. The use of this variable (set to
    this value) is recommended in the `make` documentation. That's why.
-   **BINDIR:**  
    The location of the directory that holds the scripts used in
    testing.
-   **TEMP:**  
    The location of the directory for storing temporary files (so that
    it can easily be redefined).
-   **SAVEFILE:**  
    A variable containing the (computed) name of the save file used
    during testing. The computed content of this variable makes the
    reference to the save file language independent.
-   **UMASK:**  
    Something I have copied from a Lingsoft makefile. I do not
    understand exactly what it does, and whether we need it. It does not
    seem to do any harm, so it is left for the time being.
-   **WORD:**  
    An empty variable to be filled/set by the user (on the command line)
    when generating a paradigm.
-   **NGenFiles  
    NAnaFiles  
    VGenFiles  
    VAnaFiles  
    AGenFiles  
    AAnaFiles:**  
    Variables whose content is a list of target names (one for each POS,
    analysis and generation) calculated from (existing) file names. This
    is to circumvent a problem with being able to trigger the making of
    some files, due to the non-existence of other files (I have
    forgotten the details, but *with* it works, *without* it doesn't.
    Trust me.). If you are curious, see the `make` documentation.

When defined, the variable names are written as such, when referenced,
they are encapsulated in parenthesis, and prefixed with a dollar sign.
Example: **$(TEMP)** is how the variable **TEMP** is referenced.

#### Main sections of the Makefile

The main sections of the Makefile are the following:

-   Variable definitions
-   Main targets, housekeeping targets
-   POS-specific targets, one section each for N, V and A. The three
    sections are identical apart from the POS variation. (It is not
    possible to merge these targets into a smaller, POS-independent set
    without a major rework. It will not be done.)
-   POS-UNspecific targets for running the tests
