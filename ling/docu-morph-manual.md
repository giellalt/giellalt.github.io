Setting up the environment
==========================

See documentation elsewhere.

Analysing and generating words
------------------------------


### Analysing one word at a time:

Write

 `hfst-lookup src/analyser-gt-desc.hfstol`

then write the words that shall be analysed, one word at a time, followed by RETURN. To leave lookup mode, press `ctrl C`.

If you compiled with **xfst**, write

 `lookup src/analyser-gt-desc.xfst`


### Generating words

Write

 `hfst-lookup src/generator-gt-desc.hfstol`

Then write words in their dictionary forms, followed by
    grammatical information. The format is given in the table in the
    file [The grammatical
    tags](/lang/sme/docu-sme-grammartags.html) 

Again, to leave lookup mode, press "ctrl C".

A good way of working is to have two windows open, one for analysing and
one for generating (and probably also addidtional windows, for
documentation, for the source files, etc.).

### Analysing more than one word at a time

Write the following command (the string 'sentence here' should be
replaced with the actual sentence, and the part following the command
"lookup" varies according to language, of course). I again assume you
stand in the sme/ (sma/ etc.) catalogue).

echo "sentence here" \| preprocess --abbr=bin/abbr.txt \| lookup -flags
mbTT bin/sme.fst

Analysing files:
----------------

For each of the languages, stand in the **lang-XXX** directory (XXX being your language code) and write the following line:

    cat filename | hfst-tokenise -cg  tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst | less


Instead of just showing the result on the screen as running text (as
above), much can be done to manipulate it. Here are some examples, all
the textstrings should replace the word "less" in the command above.

To get a   frequency list of the words that the parser does not recognize:    
`grep '\\?' | sort | uniq -c | sort -nr | less RETURN`

To get all plural nouns and save them
    to the file "plnouns"
`grep '+N+Pl' &gt; plnouns`

To get a frequency list of the lexemes that the parser
    recognizes, note that this requires that the flag TT is turned off,
    i.e. not mentioned:
    
`grep -v '\\?' \| cut -f2 \| sort \| uniq -c \| sort -nr \| less   RETURN`
    
To get a frequency list of the word forms that the parser does not recognize
`grep '\\+\\?' \| sort \| uniq -c \| sort -nr \| less RETURN`

To analyse more files at the same time, write their names one after
another after the "cat" command, e.g. 

`cat file1 file3 file3 \|
preprocess ...`
