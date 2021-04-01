Setting up the environment
==========================

1.  Log in with your own user name and password.
2.  If you have been away from victorio for a long time, or if this is
    your first time, write "cvs co gt" and press the return key (from
    now on indicated by "RETURN"). By doing that, you check out whatever
    new catalogues or files that have been added since last time. In
    order to update already existing files, "cvs up" is enough. For more
    info on cvs and the messages it may give you, see [Introduction to
    cvs](/docu-svn-user.html).
3.  Change to the directory of the language you are interested in ("cd
    gt/sme/src RETURN" for North Sámi, and correspondingly for
    gt/sma/src (South Sámi) and gt/smj/src (Lule Sámi).
4.  When in the src directory, write "make RETURN" (in order to compile
    the last version of the parser). The machine will then for the next
    30 minutes (depending upon how many parts of the parser it must
    rebuild) write cryptic messages on the screen, and finish with an
    optimistic "bye.". The other parts of the parser are compiled in a
    couple of minutes, but compiling the preprocessor is a really slow
    process. While waiting, open a new window and do something else (you
    may e.g. read this documentation)

Analysing and generating words
------------------------------

Letters: The NorthSaami letters are rendered as *á, c1, d1, n1, s1, t1,
z1*. Thus write *mánná*, but *Kárás1johka* (with "s1" for s-caron) for
the place name. Lule and South Saami are written with the letters found
in the Lule and South Saami alphabets (the Lule Saami \[ng\] sound is
written as *ñ*).

### Analysing one word at a time:

Note that the source files are in src/, the binary files are in bin/.
The exact commands depend upon where you are. In order to write
**make**, you must be in src/, we assume that you have a separate window
for analysis, and that you are in the sme/ (etc.) catalogue when you
analyse.

1.  For North Sámi, write "lookup -flags mbTT bin/sme.fst RETURN"
2.  For Lule Sámi, write "lookup -flags TT bin/smj.fst RETURN".
3.  For South Sámi, write "lookup -flags TT bin/sma.fst RETURN".
4.  then write the words that shall be analysed, one word at a time,
    followed by RETURN.
5.  To leave lookup mode, press "ctrl C".
6.  The "-flags mb" part is required for NorthSámi, because of the c1,
    d1, etc. digraphs. For the other languages, "-flags TT" is not
    required, but it gives a nicer output. See the documentation on the
    lookup program for details.

### Generating words

1.  Write exactly the same commands as you do when you analyse words,
    except that you change 'sme.fst' to 'isme.fst', 'sma.fst' to
    'isma.fst', etc.
2.  Then write Saami words in their dictionary forms, followed by
    grammatical information. The format is given in the table in the
    file [The grammatical
    tags](/lang/sme/docu-sme-grammartags.html).Note that the SouthSaami
    sma.fst handles capital letters and ï-i variation, but that it only
    accepts correct "ïquot; when you write in the base forms in the
    generator.
3.  Again, to leave lookup mode, press "ctrl C".

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

For each of the languages, write the following line:

    cat filename | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT bin/sme.fst | less
    cat filename | preprocess --abbr=bin/abbr.txt | lookup -flags TT bin/smj.fst | less
    cat filename | preprocess --abbr=bin/abbr.txt | lookup -flags TT bin/sma.fst | less

Note that new North Saami testfiles must be converted to the á, c1, d1
etc. format (there is a perl script to do that, and a better
preprocessor is on the TODO list). The sme, sma and smj directories all
contain a subdirectory called *corp* (so far, only sme/corp has
testfiles).

There are now preprocessors that handle various sámi encodings. (They
exist in the gt/script directory). They convert the input to the
databases internal format. The files utf8-, ws2-, linmac- and latin6-sme
are lookup scripts that turn the input and output to and from the
internal format, and could be used like this:

    cat utf8-filename | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT -f utf8-sme | less
    cat ws2-filename | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT -f ws2-sme | less
    cat linmac-filename | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT -f linmac-sme | less
    cat latin6-filename | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT -f latin6-sme | less

Instead of just showing the result on the screen as running text (as
above), much can be done to manipulate it. Here are some examples, all
the textstrings should replace the word "less" in the command above.

-   "grep '\\?' \| sort \| uniq -c \| sort -nr \| less RETURN" (to get a
    frequency list of the words that the parser does not recognize)
-   "grep '+N+Pl' &gt; plnouns" (to get all plural nouns and save them
    to the file "plnouns"
-   "grep -v '\\?' \| cut -f2 \| sort \| uniq -c \| sort -nr \| less
    RETURN" (to get a frequency list of the lexemes that the parser
    recognizes, note that this requires that the flag TT is turned off,
    i.e. not mentioned.)
-   "grep '\\+\\?' \| sort \| uniq -c \| sort -nr \| less RETURN" (to
    get a frequency list of the word forms that the parser does not
    recognize)

To analyse more files at the same time, write their names one after
another after the "cat" command, e.g. "cat file1 file3 file3 \|
preprocess ..."
