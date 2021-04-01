Testing tools for the sámi language technology project
======================================================

1. Purpose
----------

To test the quality of morphological analysis and generation, that is,
whether they produce what we want or not. In effect, this will also test
the correctness of the two-level rules, although one should perform more
testing than is the case at present.

2. Intro
--------

All the tools used are language independent, and follow a pretty simple
procedure. The needed infrastructure consist of a testing directory, and
a Makefile; these are language independent. Then you need a simple list
of all the tags relating to the POS you want to test. Finally you need
one file for each test case, containing all word forms for the test
word, in the same order as the tag list.

The test bed was first developed for South Sami, and in the `testing/`
subdirectory you will find examples on how all this is done. As a
convenience, a more detailed example follow [further down](#Example).

When the setup is complete, all you have to do is to type `make<return>`
on the command line. This will run tests for all test cases in the
testing directory.

3. Easy setup and first test
----------------------------

**Assumption:** Somebody else has [created the needed
infrastructure](#FullSetup) (test directory, Makefile configuration,
dummy tag files).

Do the following:

1.  Edit the `noun-codes.txt` file so that it contains the morphological
    tags for the whole paradigm of a regular noun. There should be one
    tagset on each line, corresponding to one form in the paradigm. See
    the [south Saami tag file example](#Example) below.

2.  Repeat the step above for `verb-codes.txt` (verb inflection) and
    `adj-codes.txt` (for adjectives).

3.  Then for each part of speech, create one test file for each test
    case you need/want, each file consisting of one word fully
    inflected. The forms of the word need to be in the same order as the
    codes in the code file (see the [example](#Example) below). You
    should pick words that easily can uncover errors in the two-level
    rules, or holes in the paradigm, or errors in the morphological
    descriptions. The **names** of the test files should follow a
    [certain pattern](#FileNames).

4.  Finally, type `make<return>` on the command line, and all test cases
    will be run. You can see the output of the test runs either in the
    report files (two files for each test case, one for morphological
    analysis and one for generation), or in the summary files (two for
    each POS, one for analysis, and one for generation). See
    [below](#TestReports) for more on how to interpret the test reports.

4. Example
----------

Below is an example from South Sami, illustrating the structure of both
a word file (the actual test case) and a code file. The example is given
for nouns, and covers the whole inflection of regular nouns (and unless
you really don't want to test all inflections, your code should also
cover the whole paradigm):

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>A word file (noun) with inflection corresponding to the tags (= a test case)</p></td>
<td><p>The <code>noun-codes.txt</code> file</p></td>
</tr>
<tr class="even">
<td><pre data-space="preserve"><code>gåetie
gåetiem
gåetien
gåatan
gåetesne
gåeteste
gåetine,göötine
gåetieh
gåetide,göötide
gåetiej,gööti
gåetide,göötide
gåetine,göötine
gåetijste,göötijste
gåetiejgujmie,göötigujmie
gåetine,göötine</code></pre></td>
<td><pre data-space="preserve"><code>+N+Sg+Nom
+N+Sg+Acc
+N+Sg+Gen
+N+Sg+Ill
+N+Sg+Ine
+N+Sg+Ela
+N+Sg+Kom
+N+Pl+Nom
+N+Pl+Acc
+N+Pl+Gen
+N+Pl+Ill
+N+Pl+Ine
+N+Pl+Ela
+N+Pl+Kom
+N+Ess</code></pre></td>
</tr>
<tr class="odd">
<td><p>As illustrated above, when there are more than one possible form of a word for a given inflection (number &amp; case for nouns), they should be listed on the same line, separated with a comma, <strong>and nothing else</strong>.</p>
<p>The word files/test case files need to be named according to <a href="#FileNames">a certain pattern</a>.</p></td>
<td><p>The codes are identical to the ones given by the Xerox tools when analysing word forms, and <strong>must be</strong>. The codes should be in files with the following names:</p>
<ul>
<li><p><code>noun-codes.txt</code> - codes for noun inflection</p></li>
<li><p><code>verb-codes.txt</code> - codes for verb inflection</p></li>
<li><p><code>adj-codes.txt</code> - codes for adjective inflection</p></li>
</ul></td>
</tr>
</tbody>
</table>

All these files, both the code files and the test cases, should be added
to CVS for version control.

5. More on running tests
------------------------

There are two types of tests available, one where the test result is
checked against a predefined correct result, and one where the output is
a full paradigm, with no further checking.

### 5.1 Tests with test reports

Below is a table of all available tests that include automatic
verification of the test results. These tests are divided in two, one
set for testing word form **analysis**, and one for testing word form
**generation**. The analysis take a list of preanalysed word forms, and
check whether the analyser produces the same result (it should). In the
test report, all differences between the premade analysis and the test
result are highlighted (see [further down](#TestReports) for details).
The word form generation tests take the base form, combines it with all
the codes, and generate inflected forms. These forms are compared with
the premade paradigm, and any differences are highlighted in the report
(again, see [further down](#TestReports) for details).

|                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Command**                                                                                                                  | **Explanation**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `make` or `make all`                                                                                                         | **Default test:** Run all the tests described in the rest of this table. Presently, this is the same as typing `make all-n` (see below) (this is true for North and South Sami), as there are still no test cases for verbs or adjectives.                                                                                                                                                                                                                                                                                                                                       |
| `make all-n` `make all-v` `make all-a`                                                                                       | To run all the noun tests (or verb tests, or adjective tests). The same as typing `make n-a.summary                      n-g.summary` etc.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `make n-a.summary make n-g.summary make v-a.summary                      make v-g.summary make a-a.summary make a-g.summary` | For each of these commands, all tests for the given POS (`n-, v-, a-`) and test type (-a = analysis, -g = generation) will be run. The test results will be in single `*.areport` or `*.greport` files, corresponding to each test case, and in a summary file named exactly as the make command.                                                                                                                                                                                                                                                                                |
| `make TESTCASE.areport`                                                                                                      | Replace `TESTCASE` with the name of a test case file, **minus the ending `.txt`** . Then, only the **analysis** test will be run for this test case. The test report will be place in a file named exactly as the make command. **Example:** If you have a test case named '`n-even-col5-oe-none.txt`', the make command should look like '`make                      n-even-col5-oe-none.areport`'. The test result will be placed in a file named '`n-even-col5-oe-none.areport`'. You can view this file by typing '`less                      n-even-col5-oe-none.areport`'. |
| `make TESTCASE.greport`                                                                                                      | The same as above, but instead of doing a word form analysis, word form **generation** testing will be done. This is close to paradigm generation (see next), with the addition that the generated paradigm is compared with a premade paradigm, for automatic reporting of unexpected results.                                                                                                                                                                                                                                                                                  |

It is a good idea to clean the test directory before testing, to remove
all previous test results. This way, you will avoid confusion about the
actual test results. To clean the test directory, type '`make clean`' in
that directory.

### 5.2. Generating paradigms, one word at a time

In the previous tests described, you can only test the words for which
you have made a test case. On the other hand, you get a direct report on
any mismatches between the correct forms and what the system actually
produces. When you generate paradigms following the procedure below, you
can choose freely any word (as long as it is found in the lexicon), and
the testing tools will generate the paradigm for the word. But it will
not generate a test report for you, and it is up to you to tell whether
the generated paradigm makes sense or not. Hopefully it does, if not,
there are one or more errors that need to be corrected somewhere. And
that is *your* job;)

In the directory ` testing/ `, write the command

    make clean

Thereafter, write

    make n-paradigm WORD=johka

if you want to generate the paradigm for the noun *johka*. Similarly, if
you want to generate paradigms for verbs or adjectives, the commands
are:

    make v-paradigm WORD=aVerb
    make a-paradigm WORD=anAdjective

respectively. Note that it is still not possible to test South Saami
adjectives, otherwise, noun, verb and adjective paradigms can be tested
for both North, Lule and South Sámi.

The generated paradigm is automatically displayed with the command
'`less`' (see the beginning of [6. How to read the test
reports](#TestReports) for some more info about '`less`'). The generated
paradigm is also saved in a file named '`WORD.paradigm`', where `WORD`
is the word you generated the paradigm for.

6. How to read the test reports
-------------------------------

There are two set of test report files: Either a test report for each
test case, or a summary of all test reports for a given POS and test
category (analysis or generation). Their file names and corresponding
content is summarised in the table below:

|                                                                                |                                                                                                                                                                                                                                                                                                                                                                |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `*.areports` or `*.greports`                                                   | There is one such file pair for each test case. That is, if you only want to look at the test result for one specific case, have a look at these files (`*.areports` for word form analysis tests, `*.greports` for word form generation tests). The part of the file name represented by the star (\*), is similar to the test case before the ending `.txt`. |
| `n-a.summary` or `n-g.summary`, similar for verbs (`v-`) and adjectives (`a-`) | The summary reports are two files for each POS, containing **all** `*.areports` or `*.greports` for that POS. That is, if you want to look at all test results for noun word form analysis tests, look at `n-a.summary`. And similar for the other POSes.                                                                                                      |

The usual command to use you when you want to look at a file, is `less`,
as in '`less n-a.summary`'. Press the spacebar to go one page down in
the file, and press 'b' (for back) to go one page back. Press 'g' to go
to the beginning of the file, and 'shift-g' to go to the end of the
file.

The test reports are generated by the Unix command `diff`, and looks
like below (word form **analysis** for a South Saami test run):

    [sjur@frontend-0 testing]$ less n-a.summary
    (... some other test case reports skipped ...)
    Opening file n-even-col5-oe- <
    aaltoe+N+Sg+Nom                 aaltoe+N+Sg+Nom
    aaltoe+N+Pl+Nom                 aaltoe+N+Pl+Nom
    aaltoe+N+Pl+Gen                 aaltoe+N+Pl+Gen
    aaltoe+N+Kom                 |  aaltoe+N+Pl+Kom
    aaltoe+N+Sg+Acc                 aaltoe+N+Sg+Acc
    aaltoe+N+Sg+Gen                 aaltoe+N+Sg+Gen
    aaltoe+N+Pl+Acc                 aaltoe+N+Pl+Acc
    aaltoe+N+Pl+Ill                 aaltoe+N+Pl+Ill
                                 >  aaltoe+N+Ess
    aaltoe+N+Pl+Ine                 aaltoe+N+Pl+Ine
    aaltoe+N+Sg+Kom                 aaltoe+N+Sg+Kom
    aaltoe+N+Ess                 <
    aaltoe+N+Pl+Ela                 aaltoe+N+Pl+Ela
    aaltoe+N+Sg+Ill                 aaltoe+N+Sg+Ill
    aaltoe+N+Sg+Ine                 aaltoe+N+Sg+Ine
    aaltoe+N+Sg+Ela                 aaltoe+N+Sg+Ela
    Closing file n-even-col5-oe- <
    bye.                         <
    (... more test case reports follow ...)

The report for each test case begins with the line
`Opening             file TESTCASE` (only the 15 first characters of the
test case file name is shown), and ends with the two lines
`Closing file             TESTCASE` (same restriction as for opening),
and `bye.`. Between these lines you have the actual test report.

The test report is given in three columns: the **leftmost** column
displays the actual output from the analyser, the **rightmost** column
gives the expected output (taken from the `*.facit` file), and the
**middle** columns indicates differences between the two, if any.

The difference indicators in the middle column should be read as
follows:

-   **&lt;:**  
    This line is only found in the test output, not in the facit file,
    there is likely more forms than expected in the output
-   **&gt;:**  
    This line is only found in the facit file, not in the test output.
    It is likely that there are some missing forms in the output.
-   **\|:**  
    This line was found in both the facit file and the test output, but
    with differences between the two. It is likely that there are errors
    in the codes or in the baseform of the output.
-   **(nothing):**  
    This line was found in both the facit and the test output, and they
    are identical. This line is correct.

In the example above, there is one instance of '\|', on the line
`aaltoe+N+Kom | aaltoe+N+Pl+Kom`. As you can see, the `+Pl` tag is
missing in the analyser output. Thus, one needs to look at one of the
`*-lex.txt` files, to find this error and correct it.

Also in the example above, there is one instance of '&lt;' and '&gt;'
each, indicating both one extra line and one missing line in the test
output. But when you look at the two lines, you see that the missing
line is actually the same as the extra line. That is, the two lines come
in different orders in the facit file and the test output. This happens
from time to time because of the sorting done when preparing the test
case, and because the order of output from the analyser is not always
predictable. Thus, beware of this "misinformation" in the test reports,
and double check that an indicated missing line (or extra line) is
actually missing/extra. Also, because of the sorting mentioned, the
forms do not come in the "normal" order. This happens only in the
analyser tests.

Below is a test report with some more differences:

    Opening file n-even-col6-ie- <
    gåata+N+Sg+Gen               <
    gåetie+N+Sg+Ill                 gåetie+N+Sg+Ill
    gåetie+N+Sg+Ine                 gåetie+N+Sg+Ine
    gåetie+N+Sg+Ela                 gåetie+N+Sg+Ela
    gåetie+N+Pl+Acc                 gåetie+N+Pl+Acc
    gåetie+N+Pl+Ill                 gåetie+N+Pl+Ill
    gåetie+N+Sg+Nom                 gåetie+N+Sg+Nom
    gåetie+N+Pl+Nom                 gåetie+N+Pl+Nom
    gåetie+N+Pl+Gen                 gåetie+N+Pl+Gen
    gåetie+N+Kom                 |  gåetie+N+Pl+Kom
    gåetie+N+Sg+Acc                 gåetie+N+Sg+Acc
    gåetie+N+Sg+Gen                 gåetie+N+Sg+Gen
    gåetie+N+Pl+Ela                 gåetie+N+Pl+Ela
                                 >  gåetie+N+Ess
    gåetie+N+Pl+Ine                 gåetie+N+Pl+Ine
    gåetie+N+Sg+Kom                 gåetie+N+Sg+Kom
    gåetie+N+Ess                 <
    gåetie+N+Pl+Acc                 gåetie+N+Pl+Acc
    gåetie+N+Pl+Ill                 gåetie+N+Pl+Ill
                                 >  gåetie+N+Pl+Gen
                                 >  gåetie+N+Pl+Kom
    gåetie+N+Pl+Ela                 gåetie+N+Pl+Ela
                                 >  gåetie+N+Ess
    gåetie+N+Pl+Ine                 gåetie+N+Pl+Ine
    gåetie+N+Sg+Kom                 gåetie+N+Sg+Kom
    gåetie+N+Ess                 <
    Closing file n-even-col6-ie- <
    bye.

Here we have the same cases as above (the missing +Pl tag in commitative
plural, and the swapped essive lines, two times for this word because
the essive can take two forms), but we also have genuine cases of
missing word forms in genitive and commitative plural. This indicates
problems with the two-level rules, as those are usually the cause when a
word form is completely missing. Another possible cause is that the
actual case is completely missing from the paradigm of a certain word
class, but that can easily be verified by either testing other words of
the same class, or by checking the lexicon.

The word form **generation** test report looks the same (except that we
now have word forms instead of baseform + codes; also, the generation
output is given in the "normal" order):

    [sjur@frontend-0 testing]$ less n-g.summary
    Opening file n-even-col1-ie-fu    <
    klihtie                                 klihtie
    klihtiem                                klihtiem
    klihtien                                klihtien
    klyhten                           <
    klæhtan                                 klæhtan
    klihtesne                               klihtesne
    klihteste                               klihteste
    klihtine                                klihtine
    klihtieh                                klihtieh
    klihtide                                klihtide
    klihtiej                                klihtiej
                                      >     klihti
    klihtide                                klihtide
    klihtine                                klihtine
    klihtijste                              klihtijste
                                      >     klihtiejgujmie
                                      >     klihtigujmie
    klihtine                                klihtine
    Closing file n-even-col1-ie-fu    <
    bye.                              <

As can be seen, there is one extra form (klyhten), which is incorrect
and most likely a result of too loose two-level rules. Then there are
several missing forms that needs to be investigated.

The above examples illustrates the main benefit of using the test tools:
as an aid to find errors and mistakes in the linguistic description, and
thus be able to improve the linguistic tools in a systematic and
organised way.

7. Full setup
-------------

Follow the procedure below for the first-time setup (this "full setup"
has been conducted for all three languages, in the cvs, and as a new
user you can just go to the testing directory):

1.  Create a subdirectory named `testing/` in the language directory:
    `$ mkdir testing<return>`

2.  Add this directory to the cvs repository:
    `$ cvs add                   testing<return>`

3.  `$ cd testing`

4.  Copy the makefile from the south sami test directory:
    `$                   cp ../../sma/testing/Makefile ./<return>`

5.  Add the makefile to cvs as well

6.  Create a tag list for nouns, and store it in a file named
    `noun-codes.txt`; repeat for `verb-codes.txt` and `adj-codes.txt`
    (or, as a minimum, create dummy tag files to be finished later). The
    tags should be exactly as output by the morphological analyser, and
    should cover the whole paradigm for a regularly inflected noun. See
    the [example](#Example) above.

7.  Continue as in ["Easy setup"](#EasySetup).

8. How to add new test cases
----------------------------

To create new test cases, simply make a new file, and type in all
inflections of the word you want to test, as [illustrated
above](#Example). Be consistent when naming the test case files, though,
it makes it easier in the longer run (see next for one idea).

9. File names for test cases
----------------------------

The test case files, one for each test, should be named with certain
restrictions. They need to end in `.txt`, they should start with one of
`n-`, `v-` or `a-` for nouns, verbs and adjectives respectively. In
between these prefixes and the suffix, you should put a short but
descriptive name. Here is the naming scheme for South Saami nouns:

    n-even-col6-ie-full.txt
    ^   ^   ^   ^   ^    ^
    |   |   |   |   |    |- file extension - obligatory as .txt
    |   |   |   |   |------ degree of Umlaut (not all nouns utilize Umlaut)
    |   |   |   |---------- noun ending in ie / stem vowel
    |   |   |-------------- column 6 in Bergsland's Umlaut table (1994 grammar)
    |   |------------------ even or odd-syllable
    |---------------------- POS (part-of-speech, obligatory as n-, v- or a-)

I have chosen this pattern because it clearly describes the variables I
need to be concerned about regarding South Saami nouns, and thus the
test cases themselves. For other Saami languages there can (and probably
should) be different naming schemes, but this is one idea.

10. How to clean up the test directory
--------------------------------------

The testing procedure creates a lot of files, and even though many of
them are deleted upon completion of the test run (only the reports are
kept), it is still quite a few files. To delete everything but the
source files (the ones from which everything else is made), type:

`$ make clean`

It is a good habit to allways clean before running a test.

11. How to test irregular words
-------------------------------

Routines for irregular words must be made, and then documented

The Saami languages do not have irregular members of the main parts of
speech. The nouns, verbs and adjectives are thus covered with the
present setup (except for the negation verb and partly the copula, they
just need a separate tag-file, and a mentioning of it in the Makefile).
When it comes to the other parts of speech, especially to the pronouns,
the picture is more complex. We need testing routines that are flexible
enough to test the closed parts of speech.

12. Technical details
---------------------

The intermediate files created are the following:

-   `*.testbase` - morphological codes and the test case merged into one
    file, from which both the actual tests and the expected results (the
    facit) are made.

-   `*.atest` - test file for word form analysis

-   `*.gtest` - test file for word form generation

-   `*.afacit` - facit file for analysis test

-   `*.gfacit` - facit file for generation test

-   `*.aresult` - result of analysis test

-   `*.gresult` - result of generation test

-   `*-test-script` - a script made on the fly for running the actual
    tests in xfst (one of the Xerox tools). Placed in /tmp/, and deleted
    immediately after the test run.

All the above files are deleted when the testing is complete.

There will be another page for further details about the scripts used,
and the makefile. -- (still to be written)
