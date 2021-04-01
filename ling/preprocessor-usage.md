The preprocessor splits text into tokens (sentences and words).

Using Hfst as a preprocessor
============================

The command is as follows:

    cat testfile.txt | hfst-tokenise --giella-cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst| vislcg3 -g tools/tokenisers/mwe-dis.cg3 | cg-mwesplit | vislcg3 -g src/syntax/disambiguator.cg3

Please note that in order to use this command, you must explicitly
configure the system to build the file
`tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst`. The configuration
command is:

    ./configure --with-hfst --enable-tokenisers

Here the different parts of the preprocess command (above) is explained:

        cat testfile.txt | \
        hfst-tokenize --giella-cg --weight-classes=1 tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst | \
        # tokenize and analyse, with constraint grammar as setting
        vislcg3 -g tools/tokenisers/mwe-dis.cg3 | cg-mwesplit | \
        # identify, disambiguate and format  multiword expressions
        vislcg3 -g src/syntax/disambiguator.cg3
        # and then to normal disambiguation, and eventually further steps
          

With this command, text is tokenised, analysed and the output is printed
in VISLCG3 format, all in one go, and everything using a single
transducer. This will handle multiword expressions properly, including
all inflections of them. This setup replaces the older, Perl-based
solution for the Xerox tools.

Our old preprocess method: Using the perl script preprocess
===========================================================

Below follows the description for how to use the Perl-based solution we
have been using so far.

    Usage: preprocess [OPTIONS] FILE
    Split text in FILE into sentences and words.
    Options (note that for most languages not all options are available):

    -connect=<list>  comma separated list of words which connect expressions
                     like fisk- og vilthandelen
    --corr=<file>    Use the list of common typos and their corrections (e.g. typos.txt)
    --abbr=<file>    Use the list of abbreviations
    --break=<string> Add <string> instead of . as a sentence delimiter after abbreviations.
    --hyph           Show the hyphenation points, i.e. change the <hyph> tags
    -h               to hyphens. The default is to just remove the <hyph> tags.
    --use-hyph-tags  Leave the <hyph> tags untouched
    --space          Preserve space.
    -s
    --ltag=<string>  Left tag for space, default <
    --rtag=<string>  Right tag for space, default >
    --help           Print the help text and exit.
    --v              Print information of the execution of the script
    --xml            Accept xml-formatted input, print each tag on its own line.
    -x
    --no-xml-out     Used together with --xml, does not print the xml-tags.
    -n

Example use:

    cat file.txt | preprocess --abbr=$GTHOME/langs/sma/tools/tokenisers/abbr.txt | lookup ...
