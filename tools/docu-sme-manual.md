# How to use the morphological parsers

# Preamble

You must have set up the environment. If you did not, look at the **Getting Started** page under the Overview section on the frontpage.

Open the terminal. We assume you stand in the `lang-XXX` folder, where `XXX` is the 3-letter code of your language (`sme` for North Saami, etc.).

# Analysing and generating words


1.  In order to analyse words one at a time, write 
	- `hfst-lookup -q src/analyser-gt-desc.hfstol` 
	- (followed by `ENTER`)
   - Then write the words that shall be analysed, one word at a time,
    followed by `ENTER`. 
    - To leave analysis mode, press `ctrl C`.
2.  For generation, write
	- `hfst-lookup -q src/generator-gt-desc.hfstol` 
	- (followed by `ENTER`)
   - Then write lemma + tags for the wordforms that shall be analysed, one word at a time, followed by `ENTER`. 
   - The tag format and the tags themselves are the same as for the output of analysis mode
    - To leave generation mode, press `ctrl C`.
3.  For testing, you may also write a file with one wordform on each
    line, and then feed that to the analyser (example here is with a file *testfile.txt*):

`cat testfile.txt | hfst-lookup -q src/analyser-gt-desc.hfstol | less`



# Text analysis (hfst)

For hfst, we have an alternative procedure for preprocessing text, using
transducers instead of perl. The command to tokenise, analyse and print
the output in a CG compatible format is:

`cat testfile.txt | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst`

In case the transducer contains weights, the constraint grammar may make
use of them, as follows

`cat text | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst | ...`

Please note that the file
`tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst` is not built by
default. To enable building it, configure as follows:

`./configure --enable-tokenisers`




# Aliases

## Aliases for word analysis
A shorter version of `hfst-lookup -q src/analyser-gt-desc.hfstol` is `husme` (given that you language is `sme`. See the documentation SOMEWHERE to ensure you have the aliases set up.

## Aliases for text analysis (xfst)
You may have a family of aliases set up on your machine. Find out if you have by writing `alias smedis`. If the answer is `sent-proc.sh -s dis`, they are set up. If the answer is `-bash: alias: smedis: not found`, they are not.

The aliases contain a pipeline combining perl pre- and postprocessing with xfst transducers and constraint grammar. These aliases may be written
anywhere (replace "sme" with your own language code). Note that they need the `xfst` compiler.

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

    `cat testfile.txt | smedis``


## Output manipulation

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
