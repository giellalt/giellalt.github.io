Preprocessor Specification
==========================

The preprocessor (or tokeniser) described here is meant to have general
usability although the work is done in the context of the grammar checker
project.


There should be two versions of the tokeniser:
* a command-line version for use in a unix pipe when processing text (e.g. for
  testing the grammar checker or another tool on the command line)
* a library version to be embedded/linked in the run-time version of the
  grammar checker


The output from the tokeniser could potentially differ between the two versions,
depending on the requirements of the following process. We don't know the
details of this yet, but we have to prepare for the need to give two different
types of output.


# Expected input


Text. The text is a continous stream of characters. Binary data will not be
dealt with, and should produce an error.


## Formatting


Some uses of the tokeniser will have to deal with formatted text. The formatting
that can be dealt with is in-line, text-based formatting such as html markup and
other text-based markup.


## Classes of input tokens


There are up to three types of tokens in the input text stream, and the task is
to identify all three, and return them as individual tokens for further
processing, possibly together with one or more morphological analyses:


The three token types are:
* word-like tokens
* whitespace tokens
* formatting tokens


Formatting tokens will only be found in some type of input data (i.e. it is
optional). Also the two other token types are optional, although one of them
must be present: it is possible to get a text stream of only whitespace
characters, and it is possible to get a text stream with only word-like tokens
and no whitespace.


# Basic elements of the pmatch fst


* pmatch is in principle a collection of regexes for identifying different types
  of tokens
* one of the regexes should be a descriptive analyser, i.e.
  `src/analyser-gt-desc.hfst` - this regex will identify all tokens known to
  the language model, i.e. all analysable word-like tokens
* there should be additional regexes to handle unknown words (non-whitespace
  strings), whitespace and formatting markup.


# Unknown tokens and characters


Handling of unknown word-like tokens should be done in two steps:
* by a guesser looking at initial and final characters (e.g. if something looks
  like a case ending, give it a tag for that case)
* by a last-resort Unicode-aware regex that just lumps together everything that
  is not (Unicode) whitespace.


These two steps should preferably be written as regular, **weighted** regexes,
with the higest weight given to the last-resort regex. But it is presently
unknown how hfst-pmatch handles weights.


The details of how to accomplish this must be discussed with the hfst team or
be based on the pmatch documentation.


# Expected output


There are presently two known user groups of the tokeniser:
* Divvun/Giellatekno
* Apertium


The two groups use differen formats for their processing pipelines, although the
linguistic content is the same: Apertium is stream-oriented (that is, the input
stream is enhanced/enriched with in-line markup and additional data carrying
information about tokens and morphological analysis), whereas Divvun/Giellatekno
is using a Xerox-based multiline cohort format, where each cohort is separated
by an empty line. The actual formats supported must be understood by the
following step in the processing pipeline: VISLCG3. The formats understood by
VISLCG3 can be found [here](http://beta.visl.sdu.dk/cg3/single/#streamformats).


# Known issues or things to look out for


## Multiple tokenisations


Presently `hfst-pmatch` only does a *left-to-right, longest match* (LRLM)
tokenisation. That means that when the input is ambiguous wrt tokenisation,
`hfst-pmatch` will only give us one of the possible tokenisations.


Potentially this is both a problem and a feature: it might be a problem because
we loose potentially better tokenisations, and it might be a feature in the
sense that the alternative (to look for all possible tokenisations for a given
string) will probably slow the tokeniser down (quite) a bit.


Francis will look into how big a problem this could really be, and if it turns
out we really need to preserve information about ambiguous tokenisation, we need
to have a look at how this can be achieved in the pmatch code. If so, this has
to be done in cooperation with the hfst team.


## Proper handling of the full Unicode range


We need the tokeniser to be able to handle any text input from the full Unicode
character set. We presently do not know whether `hfst-pmatch` is able to do
that, thus we need to add tests for this to check that it actually does. If it
does not, we need to evaluate how to add this capability, again together with
the hfst team.
