Preprocessor
============

The preprocessor file is common to all languages. It should be
parametrised, certain languages, such as Skolt Saami and Haida, have
very deviant orthographic conventions when it comes to punctuation
marks.

# Using Hfst as a preprocessor

Using Hfst, one can tokenise («preprocess»), analyse and print the
output in VISLCG3 format, all in one go, and everything using a single
transducer. This will handle multiword expressions properly, including
all inflections of them. This setup replaces the older, Perl-based
solution for the Xerox tools.

The new command is as follows:

```
    cat testfile.txt | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst| vislcg3 -g tools/tokenisers/mwe-dis.cg3 | cg-mwesplit | vislcg3 -g src/syntax/disambiguator.cg3
```

# Overview and intro


This document describes how the preprocessing of the text into separate
words is implemented in the project. The document contains overall
description of the preprocessing task and some implementation details.

The preprocessor is a Perl script called `preprocess`, it is located in
`$GTHOME/gt/script/`. It takes text as input and produces a list of
words (tokens) separated by newlines. The preprocessor has two main
functions: it cuts the the text into sentences and sentences into tokens
(words and other units such as numerical expressions and punctuation).
Sentence delimiters and most of the punctuation are treated as separate
tokens.

The output of the preprocessor is a list of tokens separated by newline.
The list of tokens is input to the morphological parser. (See [the
flowchart](global-flowchart.html) of the parsing process; if you are
using Hfst (see above), the flowchart is outdated: all steps up to the
vislcg3 step is collapsed into one.) The parser gives each token a
morphological analysis, a set of tags. For the analysis to be succesful,
the preprocessor must be compatible with the parser; the preprocessor
should produce tokens that are recognized by the parser. This means that
for example multiword expressions like "earret eará" have to be
recognized as a single token (not as two separate words) both by the
preprocessor and the parser. To achieve this, the lexicon entries of
"special" tokens, such as punctuation, abbreviations and multiword
expressions are planned parallel with the preprocessor (see the section
[Abbreviations and the lexical files](#lex)).

# Dividing text to sentences

The text is divided to sentences according to sentence-delimiters (?,!
and .); the question mark and exlamation mark are always
sentence-delimiters, but each full stop is examined separately. Full
stop may belong to an abbreviation that may or may not end the sentence.
Similarly, a full stop that ends a numeral expression is
sentence-delimiter only if the next word starts with a capital letter.

When a full stop that belongs to an abbreviation can be considered to be
a sentence delimiter as well, an extra full stop is added to mark the
sentence boundary. The sentence boundaries are relevant information
later in CG. For example:

    Vuođđologut (lohkosánit) leat: okta, guokte, golbma jna. Sulliilogu sánit leat: moadde, máŋga jna.
    Vuođđologut
    (
    lohkosánit
    )
    leat
    :
    okta
    ,
    guokte
    ,
    golbma
    jna.
    .
    Sulliilogu
    sánit
    leat
    :
    moadde
    ,
    máŋga
    jna.
    .

The abbreviations are divided to three types according to their
behaviour with other words. Some abbreviations which are followed by a
capitalized word cannot be considered to end a sentence, see
abbreviation section.

The corpus database used in the project contains additional paragraph
marking and the end of paragraph is marked with ¶ in the input to the
preprocessor. The paragraph end is at the same time a sentence end and
makes it possible to consider e.g. titles as "sentences". The paragraph
end mark sometimes adds an extra dot to the preprocessor output,
sometimes it is recognized only later in the CG, these functions should
be unified.

# Tokens


The string that is given to the preprocessor is divided into tokens,
which are the basic processing units used in the lexical analysis. There
are four types of tokens: words, multiword expressions, numerical
expressions and punctuation. Numerical expressions consist of numbers,
dates, time, prices, etc. Words include abbreviations. The punctuation
that does not belong to any of the mentioned expressions, forms its own
class, which includes for example {}\[\]()?!;"

The starting point is that a string surrounded by space is one token. A
string that consist only of alphabetical characters surrounded by space
is always an instance of one word token, if it does not belong to a
multiword expressions. So if two words are accidentally typed without
separating space, it is an error that's not accounted for. Word tokens
may contain some punctuation, such as hyphen: *Davvi-Norga.*

The punctuation that occurs in the text is divided to two classes: 1.
those that are inseparable part of a word or numeric expression and 2.
those that are independent. Independent punctuation may split the input
string into two or more parts. For example the string
*(gielddat/guovllut).* will be divided into six parts: both parentheses
are their own tokens as well as the dot. Both words and the slash are
also separate tokens. The preprocessor output is thus:

    (
    gielddat
    /
    guovllut
    )
    .

The splitting depends on the surrounding characters. For example, a dot
rarely splits a numerical expression into two but generally splits a
string that consist only of alphabetical characters (*1.4.2004, Minä
lähdin.En tule takaisin.*). The treatment of [punctuation](#punctuation)
is explained in detail later in the document.

# The preprocess script


The preprocessor is a perl-script called `preprocess`; it reads `STDIN`
for input. The preprocessor is given one command line parameter, the
file from where to read the formerly generated list of abbreviations and
multiword expressions. The file is created by `make` and the name is
`abbr.txt`. Usage (with sme as an example):

    preprocess --abbr=$GTCORE/langs/sme/src/syntax/abbr.txt

The output of the script is a list of analyzable tokens, separated by
newline.

The text is handled one paragraph at a time (paragraphs end when two
subsequent newlines are encountered). If there are no paragraphs in the
text, the whole input is slurped in in one go. The newlines are replaced
with space and the paragraph is treated as a single line. The line is
divided using space (tab, newline) as a separator and the elements
stored into an array. Example:

    First read the text. (Then split by space.)

    First
    read
    the
    text.
    (Then
    split
    by
    space.)

The elements in the array are processed one at the time. The element may
consist of two or more tokens, the tokens are stored in an array. First,
the punctuation preceding and not belonging to the token is removed and
stored to the tokens array. This class of punctuation includes
`{}[]()?!;,'\"`. If the remaining part starts with an alphabetical
character optionally preceded by one non-word character, it is
considered to be a word token. Otherwise it is a numerical expression.

The word tokens are tested against the list of multiword expressions.
The punctuation at the end of the word that does not belong to the token
is stored to the tokens array. The word may be divided to several tokens
if it contains delimiters such as `/`.

If the word contains a dot, it is tested against the list of
[abbreviations](#abbreviations) to see if the dot is a sentence
delimiter or belongs to the token. The treatment of the numerical
expressions differ in that most of the punctuation, such as `/`, is
considered to be part of the token. The dot that follows a number is
considered to be a sentence delimiter if the following word starts with
a capital letter. Otherwise the dot belongs to the token which may be an
ordinal number, date etc.

There are some constant variables that affect to the preprocessing, here
are the current values:

    $MULTIWORD_SIZE = 3;
    $SINGLE_PUNCT contains:  «»‹›“”„‘’‚ ´`'" |{}[]()?!,;/\ … and • ¶
    $CONTAIN_PUNCT = 'ja\/dahje|http|:\/\/|km\/h|www|@|\.jpg|\.doc|\.pdf|\.html|\.txt';

`$MULTIWORD_SIZE` defines the size of a multiword expression, i.e. how
many words should be included in testing if the expression is a
multiword. The constant `$SINGLE_PUNCT` contains all the punctuation
that is considered to be individual tokens in the beginning or end of a
word or numeral expression. In non-numeral expression, the punctuation
in variable $SINGLE\_PUNCT is searched also in the middle of the word,
thus splitting it ("gielddat/guovllut"). The word tokens that contain
punctuation which belongs to the token are defined in the constant
`$CONTAIN_PUNCT`. This constant is currently the only language dependent
part of the script.

# Punctuation

As most of the punctuation in a numerical expression is inseparable part
of it, the numerical expressions are treated as a separate class. The
punctuation in other strings generally causes the string to be splitted,
but not always, depending on the punctuation mark. In the following
table, the punctuation marks are listed:

|                                       |                                                                        |                                                                                                                               |
|---------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Punctuation                           | Numerical expressions (digits and non-word characters)                 | Words (word characters, no digits)                                                                                            |
| (){}\[\]– «»‹›“”„‘’‚ ´\`'"?!,;\\… • ¶ | Always their own tokens.                                               | Always their own tokens.                                                                                                      |
| :                                     | Belongs to the expression if not followed by space (14:30, 10:s)       | Belongs to the expression if not followed by space (Namdal:as)                                                                |
| /                                     | Belongs to the expression (5/2004)                                     | Always its own token (gielddat/guovllut). Exceptions: ja/dahje which is treated as one token; html-addresses, file names etc. |
| -, --                                 | Belongs to the expression, also when surrounded by spaces (1-3, 1 - 3) | Belongs to the expression (Davvi-Norga), but not in the beginning of the word.                                                |
| .                                     | Belongs to the expression unless it is a sentence delimiter.           | Its own token. Exception: belongs to an abbreviation and does not end the sentence.                                           |
| \_\*+=                                | Belongs to the expression                                              | Always its own token                                                                                                          |
| %                                     | Belongs to the expression, also when separated by space (50%, 50 %)    | Always its own token                                                                                                          |

# Abbreviations

The abbreviations are divided in three classes according to whether they
are able to end the sentence or not. The first class contains transitive
abbreviations (`TRAB`) that never end the sentence. The intransitive
abbreviations (`ITRAB`) are considered to end the sentence whenever they
are followed by a capital letter or number. The third class (`TRNUMAB`)
contains abbreviations that end the sentence when followed by a capital
letter but not when followed by number. In addition, there is a class
for abbreviations that are homonyms for common nouns (`NOAB`), these
expressions are treated as abbreviations only when they are in the
middle of the sentence, that is, when followed by lowercased letter or
punctuation. In sum:

-   **TRAB:**  
    abbreviations that take an object: 'Mr. Peters'
-   **ITRAB:**  
    abbreviations that do not take an object: 'Lloyds Ltd.'
-   **TRNUMAB:**  
    abbreviations that take NUM objects: 'Downing Str. 10') There is
    sentence boundary after TRNUMAB only for the capital+small
    combinations and all small-initial strings that consist of more than
    one letter. For all other strings (one small letter, one or several
    capital letters) there is no sentence boundary after TRNUMAB.

<!-- -->

-   **NOAB:**  
    abbreviations such as 'du.' (dual) which is also a common noun and
    not treated as an abbreviation at the end of a sentence.

To make the preprocessor handle abbreviations and multiword expressions
better than the default, one can provide an abbreviation file to it.
There is a Makefile target for that. This target extracts abbreviations
and multiword expressions from the lexc code, classifies abbreviations
according to behaviour in the sentence, and expands the multiword
expressions in all cases.

To build the abbreviation list to be used by `preprocess`, do as
follows:

    ./configure --enable-abbr
    cd tools/tokenisers
    make abbr

Now there is a new `abbr.txt` file in that dir, and you can specify it
as an option to the `preprocess` command. See further notes above.

# Multiword expressions

The preprocessor takes into account multiword expressions if they are
listed in the file `abbr.txt.` For example, names such as 'De Silva' can
be listed as multiword expressions, they are not splitted but treated as
tokens. At the moment, the size of a multiword expressions may be three
words.

# Listing abbreviations and multiword expressions

All the abbreviations are extracted from the lexicon files. They are
extracted from the file as a part of the compilation process `make`. The
relevant commands are stored to the Makefile in the `gt/lang/src`
directory. The script that handles the extraction is called
`abbr-extract.pl` and located in the `gt/script` directory; it is
intended to be a language-independent script.

The main source is `abbreviations.lexc`, where the real abbreviations
are listed. There also exists a number of multi-word expressions which
are dispersed to different lexicon files, for example the file
`adverbs.lexc` contains multi-word adverbials like `earret eará`. Not to
mention the propernoun lexicon, which contains several multiword
propernouns.

In order to be able to treat the multi-word expressions as single tokens
already at the preprocessing phase, the multi-word expressions are
extracted from the lexicon files. The relevant lexicon file names are
given to the script `$GTHOME/gt/script/abbr-extract` by the Makefile
(NOTE: NOT IMPLEMENTED YET, dec 2013). There are no restrictions to how
to list the multiword expressions, they can be used in lexicon files as
other tokens. Only the structure of the file `abbreviations.lexc` is
restricted.

Usage of the script `abbr-extract`:

    abbr-extract --output=<file> --abbr_lex=<file> --lex=<file1,file2,..>

## The structure of abbreviations.lexc

The structure of the `abbreviations.lexc` is free in all the other
respects but the extracted part must have the following syntax:

    LEXICON ITRAB
    abbr  TAG ;
    ab.br  TAG ;
    ab  TAG ;
    abbr% abbr TAG ;

And the same to the other abbreviation classes,
`LEXICON             TRAB, LEXICON TRNUMAB` and `LEXICON NOAB`. The
ordering of the abbreviation classes is free.

Due to xfst, abbreviation may not contain dots (operator in xfst). The
pattern matching in the preprocessor is always done without the dot. It
is possible to add the dot to the abbreviation again in the lex-file.

The space in multiword abbreviations is marked in the lexicons by the
%-sign (literal operator) which is recognized by `abbr-extract`-script
and removed.

Abbreviations in `abbreviations.lexc` are lower-cased unless there
exists only upper cased version of the abbreviation.
`abbr-extract`-script generates upper case versions of all the
abbreviations (since they may begin the sentence).

# Other

## XML-tags

There is a primitive XML-support in the preprocessor. XML-tags are
recognized and they can be excluded or included to the output. Choose
the option --xml to accept xml-formatted input. Each XML-tag is printed
on its own line. With option --no-xml-out, the XML-tags are supprsessed.
The XML-support is called 'primitive', since the parsing of XML-tags is
not done using any library functions. Therefore, the XML-formatting must
be quite clear to function.

## Spaces

It is possible to preserve space during the tokenization with optin
--space. The space between tokens is preserved and printed in their own
lines, for example:

        leat: okta, guokte, golbma jna.
        leat
        :
        < >
        okta
        ,
        < >
        guokte,
        < >
        golbma
        < >
        jna.

It is also possible to preserve newlines in the output, there is a
variable in the script that can be changed. If the option --xml is used
together with space preserving, also the space between xml-tags is
preserved. On the other hand, if the option --no-xml-out is used, the
space that precedes the xml-tag is swallowed.

Space preservation is implemented so that each token forms a complex
unit: the word is paired with the space that preceded it. The space is
preserved also when tokens are combined to multiword expressions.

## Typos-list

In some cases, we want to fix the common typos in the texts. The list
can be provided to preprocessor with option --corr=&lt;file&gt;. Typos
are a tab separated list:

         typo<TAB>correction
         typo2<TAB>correction

Each typo is replaced in the text by its correction. Typos and their
corrections may be multiword expressions.

## Connecting expressions

There is a class of expressions that connect other expressions to form
complex tokens. This is for example expressions like 'fisk- og
vilthandelen'. These kind of expressions are generic and cannot be
listed in multiword expressions. At the moment, specifically this type
of complex token is handled with option --connect=&lt;exp1,exp2,..&gt;,
where the words that are used as connectives can be listed.

# Possible flaws

Abbreviations may be followed by capital letter even when not ending the
sentence

    Siellä oli Pekka ym. Mäkisiä.

    Siellä
    oli
    Pekka
    ym
    .
    Mäkisiä
    .

    Siellä oli Pekka ym. Mäkinen ei tullut.

    ym
    .
    Mäkinen
