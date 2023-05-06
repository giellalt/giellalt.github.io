# How to use the morphological parsers


You must have set up the infrastructure environment for this to work. If you did not, look at the **Getting Started** page under the Overview section on the frontpage, ([here](../infra/GettingStarted.md)). For analysing when you don't have this infrastructure setup, see [this page](../ling/LinguisticAnalysis.md).



# Analysing and generating

## ... with some handy aliases:

### Aliases for word analysis and generation
To analyse a word, write `hu` + your language code: `husme` or `hufin` or...  follwed by ENTER. Then write the word you want to analyse, and press ENTER. The command also reads input, one word at a time:

```
echo gillii | husme
cat wordlist.txt | husme 
```

To generate, use `hd` + the language code, where input should look like the previous output, e.g. `echo giella+N+Sg+Ill | hdsme`

### Aliases for sentence analysis

```
cat text | dis.sh -l sme 
cat text | dep.sh -l sme
```

will give a disambiguated or dependency analysis of any language in our infra (replace `sme` with your language). There are some other options as well, check with `dis.sh -h`. 

## ... with the commands themselves:

We assume you stand in the `lang-XXX` folder, where `XXX` is the 3-letter code of your language (`sme` for North Saami, etc.).


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



## Text analysis (hfst)

The command to analyse text is:

`cat testfile.txt | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst`

In case the transducer contains weights, the constraint grammar may make
use of them, as follows

`cat text | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst | ...`

Please note that the file
`tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst` is not built by
default. To enable building it, configure as follows:

`./configure --enable-tokenisers`





## Manipulating the output 

Instead of just showing the result on the screen as running text (as
above), much can be done to manipulate it. Here are some examples, all
the textstrings should be added after the *dis.sh* etc. above.

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



# Old, obsolete documentation

## Aliases for text analysis (xfst and hfst)

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
