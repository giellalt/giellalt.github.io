Language recognition
=====

# Usage

The primary use of this tool is via the corpus conversion tool
[convert2xml](corpus_conversion_tech.html). When you use convert2xml in
order to turn original corpus documents into text for processing, the
language recogniser is automatically put into use. You may also use it
as a standalone program. See the help text by writing
`pytextcat proc             -h`

Typical usage as a standalone program will be something like:

    pytextcat proc $GTHOME/tools/CorpusTools/corpustools/lm < testfile.txt

`pytextcat` will return the name (the ISO code, to be exact) of the
language(s) the script believes the text to be in.

# Adding a new recognizable language

The pytextcat reference files are stored in
$GTHOME/tools/CorpusTools/corpustools/.

Adding a new language to be recognized requires a suitable training
corpus to be built. This is most easily done with the accompanying tool
`random_lines`:

    random_lines < some-text-file > ShortTexts/language-name.txt

This commando extracts random lines of text from the input file, and
stores them in the output file. It also cleans the file a bit. The file
created is used to build a language model like this (assuming you stand
in $GTHOME/tools/CorpusTools/corpustools/):

```
cat someinput | pytextcat complm > lm/language-iso-code.lm

cat someinput | pytextcat compwm > lm/language-iso-code.wm
```

After this, the language recognition tool `pytextcat` is ready for use
with another language as shown in the previous section.

# Source

The home page of the original perl-based package TextCat is found at
several locations.

-   [The original page at University of
    Groningen](https://web.archive.org/web/20190111231813/http://odur.let.rug.nl/~vannoord/TextCat/), with [the
    source code](https://web.archive.org/web/20160624041646/http://odur.let.rug.nl/~vannoord/TextCat/text_cat.tgz)
    . The package is lisenced under a GPL license — see the home page
    for details — and it is developed by Gertjan van Noord
-   [The source code is also available in the Giellatekno
    repository](https://gtsvn.uit.no/langtech/trunk/tools/lang-guesser/)

. The Groningen home page also includes links to a background article, a
list of supported languages coming with the tools, and also a list of
competitors. Here's also another [link to a demo
page](http://odur.let.rug.nl/~vannoord/TextCat/Demo/textcat.html), with
e-mail address of the author.

The python implementation `pytextcat` we use here was written by Kevin
Unhammer.
