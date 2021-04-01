Preamble
========

Setting up the environment (You probably did this already):

1.  [Set up the computer](../infra/GettingStarted.html) and [download
    the source files](docu-svn-user.html)
2.  [Build the programs for analysis (= compile the
    transducers)](../infra/infraremake/GettingStartedWithTheNewInfra.html).

Analysing and generating words
==============================

1.  Analysis, write `u` and the 3-letter language code using the (basic)
    xfst program, e.g. for North Saami, write `usme`, and &lt;ENTER&gt;.
    Then write the words that shall be analysed, one word at a time,
    followed by &lt;ENTER&gt;. To leave analysis mode, press `ctrl C`.
2.  For generation, use `d` instead of u, e.g. `dsme`. Then write lemma
    and grammatical tags (in the same form as was given as output,
    followed by &lt;ENTER&gt;.
3.  For testing, you may also write a file with one wordform on each
    line, and then feed that to the analyser (example here is for Inari
    Saami, with a file *testfile.txt*):

`cat testfile.txt | usmn | less`

If you want to use *hfst* instead of xfst, write `husme` and `hdsme`.
The actual command behind these aliases are revealed by writing
`alias usme` etc. If this commands gives no answer, you should run
command `sh gtsetup.sh`. See the documentation in the preamble.

Text analysis (xfst)
====================

We have set up aliases for text analysis (xfst only), the aliases
contain a pipeline combining perl pre- and postprocessing with xfst
transducers and constraint grammar. These aliases may be written
anywhere (replace "sme" with your own language code).

-   **smedis:**  
    Gives a sentence analysis of North Saami
-   **smedep:**  
    Gives a dependency analysis of North Saami
-   **smedist:**  
    Gives a sentence analysis of North Saami, in trace mode (showing
    which dis rules work)
-   **smedept:**  
    Gives a dependency analysis of North Saami, in trace mode (showing
    which dep rules work)

These aliases may be used in two ways: either write the alias followed
by a sentence in quotes

    smedis "Mun lean boahtán."

Or, alternatively, pipe a file through it:

    cat testfile.txt | smedis

Text analysis (hfst)
====================

For hfst, we have an alternative procedure for preprocessing text, using
transducers instead of perl. The command to tokenise, analyse and print
the output in a CG compatible format is:

    cat testfile.txt | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst

In case the transducer contains weights, the constraint grammar may make
use of them, as follows

    cat text | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst | ...

Please note that the file
`tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst` is not built by
default. To enable building it, configure as follows:

    ./configure --with-hfst --enable-tokenisers

This setup is experimental, so there are no aliases yet

Output manipulation
===================

(Warning: this part contains basic unix commands only.)

Instead of just showing the result on the screen as running text (as
above), much can be done to manipulate it. Here are some examples, all
the textstrings should be added after the *smedis* etc. above.

`| grep '+N+Pl' > plnouns`  
(to get all plural nouns and save them to the file *plnouns*)

`| grep -v '\?' | cut -f2 | sort | uniq -c | sort -nr | less `  
(to get a frequency list of the lexemes that the parser recognizes.

`| grep '\?' | sort | uniq -c | sort -nr | less `  
(to get a frequency list of the **words** that the parser does not
recognize)

`| grep '\+\?' | sort | uniq -c | sort -nr | less `  
(to get a frequency list of the **word forms** that the parser does not
recognize)
