
Lexc and Twolc Development
==========

This document explains how to improve the analysers. We assume everything is 
set up, the analyser compiles, there are yaml test files, but some of the test
fail.

You know you have reached this stage when the command `make check` gives you
info on how many tests have failed or passed, and if you a bit up on the 
screen get a message resembling this one:

```
SUMMARY for the gt-desc fst(s): PASSES: 36 / FAILS: 232 / TOTAL: 268
```

Below, we assume you have the Xerox tool *twolc* installed. To check whether that is the case, write `which twolc`. If you do not have the twolc program installed. see the [fsmbook page](https://fsmbook.com) and click on the link **NewSoftware** (the fifth line in the text) in order to install it. The files you download should be put in one of the folders in your path. Ask the local linux guru if this does not make sense. 

Note that you may also test your twolc file with the Helsinki version *hfst-twolc* of the same program, see e.g. [this file](https://ftyers.github.io/2017-%D0%9A%D0%9B_%D0%9C%D0%9A%D0%9B/hfst.html) for an intro to debugging with *hfst-twolc*.  

# An example

## Consonant gradation in Inari Saami

When debugging errors, you must investigate what happens when the errouneous
forms are analysed / generated. Let us look at an example which works, the
genitive form *iđo* of the Inari Saami noun *ito* "seedling".

At least 4 files are involved in giving us the genitive form, namely (all of them in the folder `lang-smn`):

- src/morphology/root.lexc
- src/morphology/stems/nouns.lexc
- src/morphology/affixes/nouns.lexc
- src/phonology/phonology.twolc

We will return to the first one. The lemma (*ito*) and the stem
are found in the file in the `stems` directory. To find it, write

`grep '^ito:' src/morphology/stems/nouns.lexc`

The answer (i.e. the entry for *ito*) is 

`ito:i%^RVto%^SV PARGO ;`

This means that the lemma is *ito*, and the stem is *i%^RVto%^SV*.
The continuation lexicon is **PARGO**, which can be found in the next file 
on our list. Open it, and search for the string `N PARGO` 
(the lexicon PARGO, that is). In our case, we are now redirected to KISSA
(which is probably wrong, but this is what we are going to find out).
Here, the genitive entry is

```
+N+Sg+Gen:%^WG K ;           ! kisá
```

Both these entries contain a colon. The left of the colon we call the 
**upper** level of the representation, and the right we
call the **lower** level. If there is no colon, whatever is there
is found on both levels, and if there is no content, you just go to
the next continuation lexicon. The K symbols here stands for the 
clitic lexicon. We ignore that, and note that we get the following
upper/lower representation of our wordform in lexc:

```
ito+N+Sg+Gen
---------------
i%^RVto%^SV%^WG
```

The symbols `%^RV, %^SV, %^WG` (and similar symbols for other words) 
are listed and explained both in the root.lexc and in the phonology.twolc
files, and in the *Source file documentation* section of the documentation.
They stand for Root Vowel (lengthening), Stem Vowel (lengthening) and 
Weak Grade trigger, respectively.

Now, what we want is not `i%^RVto%^SV%^WG`, but *iđo*. In order to see 
what it takes to get this, we move on to the twolc file. 

The twolc file takes the lower level of lexc as its upper level, and
changes it into a new lower level, the orthographic output
(well in some cases, there are more levels further down there, but we will
ignore them in this presentation). The full level hierarchy should then be:

```
ito+N+Sg+Gen       = lexc upper
---------------      ----------
i%^RVto%^SV%^WG    = lexc lower

				    
i%^RVto%^SV%^WG    = twolc upper
---------------      ----------
iđo                = twolc lower
```

We see that
two things should happen to our form `i%^RVto%^SV%^WG`: We want to get rid of
all the strange symbols, and we want to change **t** to **đ**. The former
is easy: All the symbols written with initial **%^** should be removed automatically
by twolc. If this is not the case, someone has forgot to write a colon to the right
of the symbol somewhere in the twolc file. If e.g. the ^SV slips through to the 
output, look for the string `%^SV ` in the twolc file and correct it to
`%^SV:`. The colon marks upper/lower, in twolc as it did in lexc.

For the **t:đ** change, let us look for the twolc rule being responsible for it. 
Here it is:

```
"t:đ gradation" 
t:đ <=> Vow: _ (k4:) Vow (Cns) (Dummy:*) %^WG:0 ;
```

The rule says: There is a *t:đ* alternation whenever there is an underlying vowel to
the left, and (disregarding the irrelevant parts) a vowel, some dummy symbols, 
and then the weak grade (*t:đ* alternation) trigger `%^WG`. Note that `%^RV` is defined
as a vowel in the `Vow` set. The vowel to the right is **o**, and **%^WG:** is in place.

The net result is that gradation takes place, and that we get the form we want.

## Debugging

Now, this all went fine. What we want is the cases where we get no analysis, or 
wrong analysis, so that we may correct the error and get a better analysis. Here
as always, the list of things that may go wrong is long. Some typical errors:

* Errors in the stems/nouns.lexc file
	* The lemma is missing from the lexicon file (here: stems/nouns.lexc)
	* The lemma is there, but the stem (to the right of :) is not what I expected it to be
	* There is a typo in either the lemma or the stem
	* The lemma has another continuation lexicon than it should 
  (say, *nounstems* instead of *PARGO*)
* Errors in the affixes/nouns.lexc file
	* The entry (here: +N+Sg+Gen) is missing from the continuation lexicon
	* The entry is there, but it has the wrong form (e.g. there should have 
   been a weak grade trigger there, but it is missing) 
* Errors in the twolc file
	* Look at the lower lexc string (here: `i%^RVto%^SV%^WG`
   This string must fit the rule you want to use (here: the t:đ gradation rule).
   A very common error is to forget some Dummy symbol, some vowel, etc.
   Think of this like a crossword puzzle
	* Everything may be fine with the rule you intended to use, but there may be 
   another rule conflicting with the one you intend to use. This must be
   investigated with the *twolc program* (see below)
* Multicharacter symbols errors
	* Is the multicharacter symbol defined? If the entry contains symbols like
   %^RV, they must be declared (listed) in the beginning of bothe the
   src/morphology/root.lexc and the src/phonology/smn-phon.twolc file.

## Testing

So, how do we know there is an error?

We may check a word with the `usmn` command, and see that it gets no
analysis, or run a text through the analyser. We may also use the `make check`
command, and thereafter look for the yaml file that contains the word in question.
In this case there is such a file, as we found out by checking:

```
grep ' ito+' test/src/gt-norm-yamls/*
```

The file was `N-even-o_gt-norm.yaml`.

After having written `make check`, we may, in the terminal window search for the file
(press cmd F and glue in the file namn N-even-o_gt-norm.yaml). That file name
will turn up in a very long and clumsy command. Glue this command in any terminal window (opening a new one may be a good idea). The output will give two type of results: analysis and generation:

```
---------------------------------------
Test 2: Noun - ito (Lexical/Generation)
---------------------------------------
[ 1/16][PASS] ito+N+Sg+Nom => ito
[ 2/16][PASS] ito+N+Sg+Gen => iđo
[ 3/16][PASS] ito+N+Sg+Acc => iđo
[ 4/16][FAIL] ito+N+Sg+Ill => Missing results: iton
[ 4/16][FAIL] ito+N+Sg+Ill => Unexpected results: iiton
[ 5/16][FAIL] ito+N+Sg+Loc => Missing results: iiđoost
[ 5/16][FAIL] ito+N+Sg+Loc => Unexpected results: iđost
[ 6/16][PASS] ito+N+Sg+Com => iđoin
[ 7/16][PASS] ito+N+Sg+Abe => iđottáá
...

-------------------------------------
Test 6: Noun - ito (Surface/Analysis)
-------------------------------------
[ 1/14][PASS] ito => ito+N+Sg+Nom
[ 2/14][PASS] iđo => ito+N+Sg+Gen
[ 2/14][PASS] iđo => ito+N+Sg+Acc
[ 3/14][FAIL] iton => Missing results: ito+N+Sg+Ill
[ 4/14][FAIL] iiđoost => Missing results: ito+N+Sg+Loc
[ 5/14][PASS] iđoin => ito+N+Sg+Com
[ 6/14][PASS] iđottáá => ito+N+Sg+Abe
```

The most interesting one in this context is the generation one, 
as it tells not only when the analyser fail, but also
what it gives instead. This information is important for debugging.

In our case, the genitive form is ok, but the illative 
and locative are not. When looking at the forms, we see
that we for the illative have lengthened the root vowel i 
(as we should not have done), whereas we in the locative
have failed to lengthen the stem vowel.

The procedure for finding the errors is exactly the same as 
presented above:

- go through the automaton step by step, and find the stems
	- Ill: `i%^RVto%^SV%^RLEN%>n K ; ! kiisán`
	- Loc: `i%^RVto%^SV%^SV%^WG%^CLEN%^SLEN%>st K ; ! kissáást`
- look at errors in the lexc file, if there are no errors,
- look at the twolc rules

In this particular case, it seems we have a lexc error:
`PARGO` has been redirected to `KISSA`; which lengthens 
the illative root vowel *i* to *ii*, just what we did not want.

For the locative, two conventions seem to have clashed
(whe have one `%^SV` from the stem and one from the continuation
lexicon). This must then be dealt with.

These errors will be fixed, but in principle, this is the type of 
errors we will encounter.

## twolc debugging

The program twolc may be used in order to see whether the twolc 
file behaves. To do this, write :

```
cd src/phonology
twolc
read-grammar phonology.twolc
compile
```

The computer now prints strange messages to you for, say, half a minute
or so (may be considerably more on slow computers or for large files). It now either
answers **Done.** or it gives an error message. In the latter case, fix
it or ask for help. In the former case, you are ready to use the program.

In the twolc file, there are test cases (lines starting with `!€`).
They come in pairs. To test what result conversion from upper to lower gives, 
write 

```
lex-test
```

and glue in the upper line of a test pair, e.g.

```
i%^RVto%^SV%^WG
```

The result should be

```
                             iđo
i
^RV:0
t:đ
o
^SV:0
^WG:0
```

If this is not the case (e.g. you get no result, or another result), 
you may want to find out what went wrong. Leave the lex-test (press **q** and ENTER),
and do the *pair-test*:

```
pair-test
```

then write your input, ENTER, and the output that you want
(here: i0đo00, remember the zeros, one for each upper element that should be deleted).

If things do not work, you will get a message telling what rule 
causes the problem.

If you change the twolc rule file and want to try again, leave 
lex-test or pair-test mode by printing `q` and thereafter 
write `redo`, this command will both read in the file again, 
and compile it.

Note that you may write in strings not contained in the lexicon. In order to test e.g. the Kven consonant gradation pattern *kk:k* you do not need to find an attested word *akka* and wrote `akka^WG`, the **lex-test** will be just as happy giving the weak grade of the nonsense "word" *ikki*.

When done, leave the twolc program by saying `quit`.

