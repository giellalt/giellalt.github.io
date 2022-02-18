Corpus Tools
============


Corpus Tools contains tools to manipulate a corpus in different ways.
These scripts will be installed


# Howto install and update the tools


## First time install
* [Install requirements](#Requirements).
* [Install CorpusTools](#To-own-home-directory-(recommended))


## Update
* [Howto update CorpusTools](#To-own-home-directory-(recommended))




# Use the content of the corpus
* [convert2xml: Convert original files to giellatekno xml](CorpusTools.html#convert2xml)
* [ccat: Print the contents of a converted corpus file as plain text](CorpusTools.html#ccat)
* [analyse_corpus: Do syntactic analysis of converted files](CorpusTools.html#analyse_corpus)
* [parallelize: Sentence align file pairs](CorpusTools.html#parallelize)
* [reparallelize: Reconvert and realign a given .tmx.html file](CorpusTools.html#reparallelize)
* [tmx2html: Convert tmx files to html files](CorpusTools.html#tmx2html)


# Add files to the corpus
* [add_files_to_corpus: Add file(s) to a corpus directory](CorpusTools.html#add_files_to_corpus)
* [saami_crawler: Crawl saami sites, add files to corpus](CorpusTools.html#saami_crawler)


# Manage the corpus repositories
* [move_corpus_file: Move or rename a file inside the corpus](CorpusTools.html#move_corpus_file)
* [remove_corpus_file: Remove a file from the corpus](CorpusTools.html#remove_corpus_file)
* [normalise_corpus_names: Program to normalise file names](CorpusTools.html#normalise_corpus_names)
* [paracheck: Check if the parallel files found in the metadata files exist](CorpusTools.html#paracheck)
* [duperemover: Remove duplicate files from the given directory](CorpusTools.html#duperemover)
* [dupefinder: Find files with more than 90% similarity in the given directory](CorpusTools.html#dupefinder)
* [clean_prestable:Remove files in prestable that have no original files](CorpusTools.html#clean_prestable)
* [pick_parallel_docs: Pick out parallel files from converted to prestable/converted](CorpusTools.html#pick_parallel_docs)
* [update_metadata: Update metadata files in given directories](CorpusTools.html#update_metadata)


# Miscellaneous
* [pytextcat: textcat implemented in Python](CorpusTools.html#pytextcat)
* [generate_anchor_list: Generate paired anchor list for languages lang1 and lang2](CorpusTools.html#generate_anchor_list)
* [html_cleaner: Program to print out a nicely indented html document](CorpusTools.html#html_cleaner)
* [epubchooser: Program to set metadata of an epub file](CorpusTools.html#epubchooser)
* [make_training_corpus: Program to make training corpus from giella xml analysed files](CorpusTools.html#make_training_corpus)


# Requirements


* python3
* pip for python3
* pysvn (only needed for add_files_to_corpus)
* wvHtml (only needed for convert2xml)
* pdftohtml (only needed for convert2xml)
* latex2html (only needed for convert2xml)
* Java (only needed for parallelize)
* Perl (only needed for parallelize)


On Mac, do:


```
sudo port install py-pysvn py-pip wv latex2html poppler
```


On Debian/Ubuntu, do:


```
sudo apt-get install python3-svn python3-pip wv latex2html poppler-utils
```


On Arch Linux, do:


```
sudo pacman -S python3-pip wv
yaourt -S python3-pysvn
```


You also need to have the $GLANGS variable set to where you checked
out *https://github.com/giellalt/CorpusTools/* (see the *Getting Started* documentation).


## Custom version of pdftohtml (poppler)


The standard version of pdftohtml sometimes produces invalid xml-documents.
A version that fixes this bug is found at https://github.com/albbas/poppler
and the poppler developers have been notified about the bug.


To install it do the following
```
git clone https://github.com/albbas/poppler
cd poppler
git checkout fix_xml_wellformedness_with_a_twist
./autogen.sh
make
sudo make install
```


# Installation


## To own home directory (recommended)


Install the tools for the current user by writing


```
cd $GTLANGS/CorpusTools
python3 setup.py install --user --install-scripts=$HOME/bin --record installed_files.txt
```


## System wide (recommended for servers only)
Install the tools for all users on a machine by


```
cd $GTLANGS/CorpusTools
sudo python3 setup.py install --install-scripts=/usr/local/bin --record installed_files.txt
```




# Uninstalling


## Remove from own home directory
```
cd $GTLANGS/CorpusTools
cat installed_files.txt | xargs rm -rf
```


## System wide

```
cd $GTLANGS/CorpusTools
cat installed_files.txt | xargs sudo rm -rf
```


# ccat


Convert corpus format xml to clean text.


ccat has three usage modes, print to stdout the content of:
* converted files (produced by [convert2xml](CorpusTools.html#convert2xml))
* converted files containing errormarkup (produced by [convert2xml](CorpusTools.html#convert2xml))
* analysed files (produced by [analyse_corpus](CorpusTools.html#analyse_corpus))


## Printing content of converted files to stdout


To print out all sme content of all the converted files found in
$GTFREE/converted/sme/admin and its subdirectories, issue the command:


```
ccat -a -l sme $GTFREE/converted/sme/admin
```


It is also possible to print a file at a time:


```
ccat -a -l sme $GTFREE/converted/sme/admin/sd/other_files/vl_05_1.doc.xml
```


To print out the content of e.g. all converted pdf files found in a directory
and its subdirectories, issue this command:
```
find converted/sme/science/ -name "*.pdf.xml" | xargs ccat -a -l sme
```


## Printing content of analysed files to stdout


The analysed files produced by
[analyse_corpus](CorpusTools.html#analyse_corpus) contain among other one
dependency element and one disambiguation element, that contain the
dependency and disambiguation analysis of the original files content.


```
ccat -dis sda/sda_2006_1_aikio1.pdf.xml
```


Prints the content of the disambiguation element.


```
ccat -dep sda/sda_2006_1_aikio1.pdf.xml
```


Prints the content of the dependency element.


The usage pattern for printing these elements is otherwise the same as
printing the content of converted files.


Printing dependency elements

```
ccat -dep $GTFREE/analysed/sme/admin
ccat -dep $GTFREE/analysed/sme/admin/sd/other_files/vl_05_1.doc.xml
find analysed/sme/science/ -name "*.pdf.xml" | xargs ccat -dep
```


Printing disambiguation elements

```
ccat -dis $GTFREE/analysed/sme/admin
ccat -dis $GTFREE/analysed/sme/admin/sd/other_files/vl_05_1.doc.xml
find analysed/sme/science/ -name "*.pdf.xml" | xargs ccat -dis
```


## Printing errormarkup content


This usage mode is used in the speller tests. Examples of this usage pattern
is found in the make files in $GTBIG/prooftools.


## The complete help text from the program:


```
usage: ccat [-h] [--version] [-l LANG] [-T] [-L] [-t] [-a] [-c] [-C] [-ort]
            [-ortreal] [-morphsyn] [-syn] [-lex] [-format] [-foreign]
            [-noforeign] [-typos] [-f] [-S] [-dis] [-dep]
            [-hyph HYPH_REPLACEMENT]
            targets [targets ...]


Print the contents of a corpus in XML format The default is to print
paragraphs with no type (=text type).


positional arguments:
  targets               Name of the files or directories to process. If a
                        directory is given, all files in this directory and
                        its subdirectories will be listed.


optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  -l LANG               Print only elements in language LANG. Default is all
                        langs.
  -T                    Print paragraphs with title type
  -L                    Print paragraphs with list type
  -t                    Print paragraphs with table type
  -a                    Print all text elements
  -c                    Print corrected text instead of the original typos &
                        errors
  -C                    Only print unclassified (§/<error..>) corrections
  -ort                  Only print ortoghraphic, non-word ($/<errorort..>)
                        corrections
  -ortreal              Only print ortoghraphic, real-word
                        (¢/<errorortreal..>) corrections
  -morphsyn             Only print morphosyntactic (£/<errormorphsyn..>)
                        corrections
  -syn                  Only print syntactic (¥/<errorsyn..>) corrections
  -lex                  Only print lexical (€/<errorlex..>) corrections
  -format               Only print format (‰/<errorformat..>) corrections
  -foreign              Only print foreign (∞/<errorlang..>) corrections
  -noforeign            Do not print anything from foreign (∞/<errorlang..>)
                        corrections
  -typos                Print only the errors/typos in the text, with
                        corrections tab-separated
  -f                    Add the source filename as a comment after each error
                        word.
  -S                    Print the whole text one word per line; typos have tab
                        separated corrections
  -dis                  Print the disambiguation element
  -dep                  Print the dependency element
  -hyph HYPH_REPLACEMENT
                        Replace hyph tags with the given argument
```


**Source code**

* [ccat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/ccat.py)


# convert2xml


Convert original files in a corpus to giellatekno/divvun xml format.




convert2xml depends on these external programs:


* pdftotext
* wvHtml


as well as various files from the Divvun/Giellatekno SVN, at least the
following files/directories need to exist under $GTHOME:


* gt/dtd


**Usage**


Convert all files in the directory $GTFREE/orig/sme and its
subdirectories.


```
convert2xml $GTFREE/orig/sme
```


The converted files are placed in $GTFREE/converted/sme
with the same directory structure as that in $GTFREE/orig/sme.


Convert only one file:


```
convert2xml $GTFREE/orig/sme/admin/sd/file1.html
```


The converted file is found in $GTFREE/orig/sme/admin/sd/file1.htm.xml


Convert all sme files in directories ending with corpus


```
convert2xml *corpus/orig/sme
```


If convert2xml is not able to convert a file these kinds of message will appear:


```
/home/boerre/Dokumenter/corpus/freecorpus/orig/eng/admin/depts/regjeringen.no/calendar-for-the-ministry-of-children-an.html_id=308
```


A log file will be found in


```
/home/boerre/Dokumenter/corpus/freecorpus/orig/eng/admin/depts/regjeringen.no/calendar-for-the-ministry-of-children-an.html_id=308.log
```


explaining what went wrong.


The complete help text from the program:


```
usage: convert2xml [-h] [--version] [--serial] [--lazy-conversion]
                   [--write-intermediate] [--goldstandard]
                   sources [sources ...]


Convert original files to giellatekno xml.


positional arguments:
  sources               The original file(s) or directory/ies where the
                        original files exist


optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  --serial              use this for debugging the conversion process. When
                        this argument is used files will be converted one by
                        one.
  --lazy-conversion     Reconvert only if metadata have changed.
  --write-intermediate  Write the intermediate XML representation to
                        ORIGFILE.im.xml, for debugging the XSLT. (Has no
                        effect if the converted file already exists.)
  --goldstandard        Convert goldstandard and .correct files
```


**Source code**

* [converter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/converter.py)
* [ccat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/ccat.py)
* [corpuspath.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/corpuspath.py)
* [decode.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/decode.py)
* [errormarkup.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/errormarkup.py)
* [text_cat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/text_cat.py)
* [xslsetter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/xslsetter.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# analyse_corpus


Analyse converted corpus files.


analyse_corpus depends on these external programs:


* preprocess (found in the Divvun/Giellatekno svn)
* lookup2cg (found in the Divvun/Giellatekno svn)
* lookup (from xfst)
* vislcg3
* hfst


**Usage**


To be able to use this program you must either use the
[nightly giella packages](https://giellalt.uit.no/infra/compiling_HFST3.html#The+simple+installation+%28you+download+ready-made+programs%29)
or build the needed resources for the supported
languages (exchange "sma" with "sme, smj" ad lib):


`cd $GTHOME/langs/sma`


Configure the language, use at least these to options `--prefix=$HOME/.local --with-hfst --enable-tokenisers`


```
./configure --prefix=$HOME/.local --with-hfst --enable-tokenisers # add your own flags to taste
make install
```


Then you must convert the corpus files as explained in the [convert2xml](CorpusTools.html#convert2xml) section.


When this is done you can analyse all files in the directory $GTFREE/converted/sme (and sma, smj) and its subdirectories by issuing this command:


```
analyse_corpus -k hfst sme$GTFREE/converted/sme
```


The analysed file will be found in 
`$GTFREE/analysed/sme`


To analyse only one file, issue this command:


```
analyse_corpus -k hfst --serial sme $GTFREE/converted/sme/file.html.xml
```


The complete help text from the program:

```
usage: analyse_corpus [-h] [--version] [--serial]
                      [-k {hfst,xfst,trace-smegram}]
                      lang converted_dirs [converted_dirs ...]


Analyse files found in the given directories for the given language using
multiple parallel processes.


positional arguments:
  lang                  lang which should be analysed
  converted_dirs        director(y|ies) where the converted files exist


optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  --serial              When this argument is used files will be analysed one
                        by one.
  -k {hfst,xfst,trace-smegram}, --fstkit {hfst,xfst,trace-smegram}
                        Finite State Toolkit. Either hfst or xfst (the
                        default).
```


**Source code**

* [analyser.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/analyser.py)
* [ccat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/ccat.py)
* [parallelize.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/parallelize.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# add_files_to_corpus


The complete help text from the program is as follows:


```
usage: add_files_to_corpus [-h] [-v] [-p PARALLEL_FILE] [-l LANG]
                           [-d DIRECTORY]
                           origs [origs ...]


Add file(s) to a corpus directory. The filenames are converted to ascii only
names. Metadata files containing the original name, the main language, the
genre and possibly parallel files are also made. The files are added to the
working copy.


positional arguments:
  origs                 The original files, urls or directories where the
                        original files reside (not in svn)


optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit


parallel:
  -p PARALLEL_FILE, --parallel PARALLEL_FILE
                        Path to an existing file in the corpus that will be
                        parallel to the orig that is about to be added
  -l LANG, --lang LANG  Language of the file to be added


no_parallel:
  -d DIRECTORY, --directory DIRECTORY
                        The directory where the origs should be placed
```


Examples:
Download and add parallel files from the net to the corpus:


cd $GTFREE


**Adding the first file**


The command
```add_files_to_corpus -d orig/sme/admin/sd/other_files http://www.samediggi.no/content/download/5407/50892/version/2/file/Sametingets+%C3%A5rsmelding+2013+-+nordsamisk.pdf```


Gives the message:
```Added orig/sme/admin/sd/other_files/sametingets_ay-rsmelding_2013_-_nordsamisk.pdf```


**Adding the parallel file**


```add_files_to_corpus -p orig/sme/admin/sd/other_files/sametingets_ay-rsmelding_2013_-_nordsamisk.pdf -l nob  http://www.samediggi.no/content/download/5406/50888/version/2/file/Sametingets+%C3%A5rsmelding+2013+-+norsk.pdf```


Gives the message:
```Added orig/nob/admin/sd/other_files/sametingets_ay-rsmelding_2013_-_norsk.pdf```


After this is done, you will have to commit the files to
the working copy, like this:


```
svn ci orig
```


**Source code**

* [adder.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/adder.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)
* [xslsetter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/xslsetter.py)








# parallelize


Parallelize parallel corpus files, write the results to
.tmx and .txm.html files.


NB! When debugging alignment, use [reparallelize](CorpusTools.html#reparallelize), it
reconverts all files and realigns the file anew.


parallelize depends on various files from the Divvun/Giellatekno SVN,
at least the following directories need to exist in $GTHOME:


* langs (specifically, the abbr.txt files)
* gt/common
* gt/script


It also requires Java if you wish to use the default (included)
alignment program TCA2. For convenience, a pre-compiled version of
TCA2's alignment.jar-file is included in SVN and installed by
CorpusTools, but if you have ant installed, you can recompile it by
simply typing "ant" in corpustools/tca2.


Alternatively, you can align with Hunalign, if you have that installed
(or don't have Java). Hunalign is faster, and the quality is less
dependent on predefined dictionaries (though it can use those as
well). Neither system gives perfect alignments.


By default, it uses the $GTHOME/gt/common/src/anchor.txt file as an
anchor dictionary for alignment. If your language pair is not in this
dictionary, you can provide your own with the --dict argument. If you
do not have a dictionary, you can use "--dict=<(echo)" to provide an
"empty" dictionary – in this case, you should also use
"--aligner=hunalign".


**Compile dependencies**


XXX is one of the languages in $GTHOME/langs.


```
    cd $GTHOME/langs/XXX
    ./configure --prefix="$HOME"/.local \
                --with-hfst \
                --enable-abbr \
                --enable-tokenisers \
                --enable-reversed-intersect \
                --enable-alignment
    make
    make install
```


To prepare for parallelising e.g. nob and sme files, do the following:


```
for LANG in sme nob # Replace sme and nob by languages for your own needs
do
    cd $GTHOME/langs/$LANG
    ./configure --prefix="$HOME"/.local \
                --with-hfst \
                --enable-abbr \
                --enable-tokenisers \
                --enable-reversed-intersect \
                --enable-alignment
    make
    make install
done
```


The complete help text from the program is as follows:
```
usage: parallelize [-h] [--version] [-s] [-f] [-q] [-a {hunalign,tca2}]
                   [-d DICT] -l2 LANG2
                   sources [sources ...]


Sentence align file pairs.


positional arguments:
  sources               Files or directories to search for parallelisable
                        files


optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  -s, --stdout          Whether output of the parallelisation should be
                        written to stdout or a files. Defaults to
                        tmx/{lang1}2{lang2}/{GENRE}/.../{BASENAME}.tmx
  -f, --force           Overwrite output file if it already exists.This is the
                        default.
  -q, --quiet           Don't mention anything out of the ordinary.
  -a {hunalign,tca2}, --aligner {hunalign,tca2}
                        Either hunalign or tca2 (the default).
  -d DICT, --dict DICT  Use a different bilingual seed dictionary. Must have
                        two columns, with input_file language first, and
                        --parallel_language second, separated by `/'. By
                        default, $GTHOME/gt/common/src/anchor.txt is used, but
                        this file only supports pairings between
                        sme/sma/smj/fin/eng/nob.
  -l2 LANG2, --lang2 LANG2
                        Indicate which language the given file shouldbe
                        parallelised with
```




You run the program on the files created by convert2xml by running a command with the following syntax:
```
parallelize -l2 TARGET_LANGUAGE PATH/TO/THE/CONVERTED/SOURCE_LANGUAGE/FILE.xml
```


for instance, with nob as SOURCE_LANGUAGE and sma as TARGET_LANGUAGE
```
parallelize -l2 sma converted/nob/admin/ntfk/tsaekeme.html.xml
```


This will create a file named
tmx/nob2sma/admin/ntfk/tsaekeme.html.tmx


If you want to parallelize all your sma files with nob in one go, you
can do e.g.
```
convert2xml orig/{sma,nob}
parallelize -l2 sma converted/nob
```


The files will end up in corresponding directories under
tmx/nob2sma.


* ****CAVEAT 1****: *If you get a message such as*


```
parallelize -l2 sma converted/sma/admin/ntfk/tsaekeme.html.xml
Error reading file '/Users/xxx/freecorpus/converted/sma/admin/ntfk/.xml':
failed to load external entity "/Users/xxx/freecorpus/converted/sma/admin/ntfk/.xml"
```


then you gave nob als l1 but the path to a sma-file as argument.


* ****CAVEAT 2****: *If you get a similar error message as*
```
parallelize -l2 sma converted/nob/admin/ntfk/rup_2013_trykt_versjon.pdf.xml
ERROR: /Users/xxx/gtsvn/langs/nob/tools/preprocess/tokeniser-gramcheck-gt-desc.pmhfst does not exist
```


you have to recompile the language tool of the respective language (in the example above it is nob)
with a different configuration, as in the following example with nob as language to recompile, have
a look at the info above on how to [compile dependencies](CorpusTools.html#Compile+dependencies)


After that you can go back to the directory where you are working with the parallelizing files and
try to parallelize the files anew. You might recompile the language tools for ALL the languages
you are working with.


* ****CAVEAT 3****: *If you get a message like*


```
Exception in thread "main" java.lang.UnsupportedClassVersionError: aksis/alignment/Alignment : Unsupported major.minor version 51.0
        at java.lang.ClassLoader.defineClass1(Native Method)
        at java.lang.ClassLoader.defineClassCond(ClassLoader.java:637)
        at java.lang.ClassLoader.defineClass(ClassLoader.java:621)
        at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:141)
        at java.net.URLClassLoader.defineClass(URLClassLoader.java:283)
        at java.net.URLClassLoader.access$000(URLClassLoader.java:58)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:197)
        at java.security.AccessController.doPrivileged(Native Method)
        at java.net.URLClassLoader.findClass(URLClassLoader.java:190)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:306)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:247)
```


then you need to recompile the Java parts and reinstall CorpusTools.
Make sure you have Apache ant installed, then do:


```
cd $GTHOME/tools/CorpusTools/corpustools/tca2
ant
```


Then follow the instructions on [how to install CorpusTools ](CorpusTools.html#Installation)


**Source code**

* [parallelize.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/parallelize.py)
* [generate_anchor_list.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/generate_anchor_list.py)
* [typosfile.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/typosfile.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)






# saami_crawler


Add files to freecorpus from a given site.


Only able to crawl www.samediggi.fi now, will collect html files only for now.


Run it like this:


```
saami_crawler www.samediggi.fi
```


The complete help text from the program is as follows:


```
usage: saami_crawler [-h] [-v] sites [sites ...]


Crawl saami sites (for now, only www.samediggi.fi).


positional arguments:
  sites          The sites to crawl


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [saami_crawler.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/saami_crawler.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)
* [text_cat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/text_cat.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)
* [xslsetter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/xslsetter.py)




# pytextcat


Pytextcat is an implementation of the "N-Gram-Based Text Categorization" algorithm.


Original article:


Cavnar, W. B. and J. M. Trenkle, 
*N-Gram-Based Text Categorization* 
In Proceedings of Third Annual Symposium on
Document Analysis and Information Retrieval, Las Vegas, NV, UNLV
Publications/Reprographics, pp. 161-175, 11-13 April 1994.


Original Perl implementation and article available from
[http://odur.let.rug.nl/~vannoord/TextCat/]


```
usage: pytextcat [-h] [--version] [-V] {proc,complm,compwm,compdir} ...


Create or use n-gram models for language classification.


positional arguments:
  {proc,complm,compwm,compdir}
                        (try e.g. 'proc -h' for help with that subcommand)
    proc                Language classification
    complm              Compile character model from stdin to stdout.
    compwm              Compile word model from stdin to stdout.
    compdir             Compile language from directory.


optional arguments:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  -V, --verbose         Print some info to stderr
```


**Source code**

* [text_cat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/text_cat.py)










# generate_anchor_list


```
usage: generate_anchor_list.py [-h] [-v] [--lang1 LANG1] [--lang2 LANG2]
                               [--outdir OUTDIR]
                               input_file [input_file ...]


Generate paired anchor lisit for languages lg1 and lg2. Output line format
e.g. njukčamán* / mars. Source file is given command line, the format is
tailored for the file gt/common/src/anchor.txt.


positional arguments:
  input_file       The input file(s)


optional arguments:
  -h, --help       show this help message and exit
  -v, --version    show program's version number and exit
  --lang1 LANG1    First languages in the word list
  --lang2 LANG2    Second languages in the word list
  --outdir OUTDIR  The output directory
```


**Source code**

* [generate_anchor_list.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/generate_anchor_list.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# normalise_corpus_names


Normalise the filenames of the files found in the given directories.


```
usage: normalise_corpus_names [-h] [--version] target_dirs [target_dirs ...]


Program to normalise names in given directories. The filenames are downcased,
non ascii characters are replaced by ascii ones and some unwanted characters
are removed.


positional arguments:
  target_dirs  The directory/ies where filenames should be normalised.


optional arguments:
  -h, --help   show this help message and exit
  --version    show program's version number and exit
```


**Source code**

* [normalise_filenames](https://github.com/giellalt/CorpusTools/blob/main/corpustools/normalise_filenames.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)


# move_corpus_file


```
usage: move_corpus_file [-h] [-v] oldpath newpath


Program to move or rename files inside the corpus.


positional arguments:
  oldpath        The path of the old file.
  newpath        The place to move the file to. newpath can be either a
                 filename or a directory


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [move_files.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/move_files.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)


# paracheck


```
usage: paracheck [-h] [-v] orig_dir


Check the if the files in the parallel_text entries found in the metadata
files exist


positional arguments:
  orig_dir       The directory where the original corpus files are


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [check_para_consistency.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/check_para_consistency.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)
* [xslsetter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/xslsetter.py)


# html_cleaner


```
usage: html_cleaner [-h] [-v] inhtml outhtml


Program to print out a nicely indented html document. This makes it easier to
see the structure of it. This eases debugging the conversion of html
documents.


positional arguments:
  inhtml         The path of the html to indent.
  outhtml        The place where the indented html doc is written


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [html_cleaner.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/html_cleaner.py)
* [converter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/converter.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# duperemover


```
usage: duperemover [-h] [-v] dir


Remove duplicate files from the given directory


positional arguments:
  dir            The directory where the converted files exist


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```




**Source code**

* [dupe_finder.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/dupe_finder.py)
* [ccat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/ccat.py)
* [move_files.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/move_files.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# dupefinder


```
usage: dupefinder [-h] [-v] dir


Find files with more than 90% similarity in the given directory


positional arguments:
  dir            The directory where the converted files exist


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [dupe_finder.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/dupe_finder.py)
* [ccat.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/ccat.py)
* [move_files.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/move_files.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# move_corpus_file


```
usage: move_corpus_file [-h] [-v] oldpath newpath


Program to move or rename a file inside the corpus.


positional arguments:
  oldpath        The path of the old file.
  newpath        The place to move the file to. newpath can be either a
                 filename or a directory


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [move_files.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/move_files.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)


# remove_corpus_file


```
usage: remove_corpus_file [-h] [-v] oldpath


Program to remove a file from the corpus.


positional arguments:
  oldpath        The path of the old file.


optional arguments:
  -h, --help     show this help message and exit
  -v, --version  show program's version number and exit
```


**Source code**

* [move_files.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/move_files.py)
* [namechanger.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/namechanger.py)


# pick_parallel_docs


```
usage: pick_parallel_docs [-h] [-v] -p PARALLEL_LANGUAGE --minratio MINRATIO
                          --maxratio MAXRATIO
                          language1_dir


Pick out parallel files from converted to prestable/converted.


positional arguments:
  language1_dir         directory where the files of language1 exist


optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  -p PARALLEL_LANGUAGE, --parallel_language PARALLEL_LANGUAGE
                        The language where we would like to find parallel
                        documents
  --minratio MINRATIO   The minimum ratio
  --maxratio MAXRATIO   The maximum ratio
```


**Source code**

* [pick_parallel_docs.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/pick_parallel_docs.py)
* [parallelize.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/parallelize.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# clean_prestable


```
usage: clean_prestable [-h] [--version] corpusdirs [corpusdirs ...]


Remove files in prestable that have no original files.


positional arguments:
  corpusdirs  Corpus directories


optional arguments:
  -h, --help  show this help message and exit
  --version   show program's version number and exit
```


**Source code**

* [clean_prestable.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/clean_prestable.py)
* [corpuspath.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/corpuspath.py)
* [versioncontrol.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/versioncontrol.py)
* [util.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/util.py)


# reparallelize


```
usage: reparallelize [-h] [--version] [--files] [--convert] tmxhtml


Sentence align a given file anew. Files are converted before being
parallelised. This is mainly thought of as a debugging program when trying to
solve issues in parallelised files.


positional arguments:
  tmxhtml     The tmx.html file to realign.


optional arguments:
  -h, --help  show this help message and exit
  --version   show program's version number and exit
  --files     Only show the interesting filenames that are needed for
              improving sentence alignment.
  --convert   Only convert the original files that are the source of the
              .tmx.html file. This is useful when improving the content of the
              converted files.
```


**Source code**

* [realign.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/realign.py)
* [corpuspath.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/corpuspath.py)
* [converter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/converter.py)
* [parallelize.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/parallelize.py)
* [tmx.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/tmx.py)


# tmx2html


```
usage: tmx2html [-h] [--version] sources [sources ...]


Convert tmx files to html


positional arguments:
  sources     Files or directories to search for tmx files


optional arguments:
  -h, --help  show this help message and exit
  --version   show program's version number and exit
```


**Source code**
* [tmx.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/tmx.py)


# update_metadata


```
usage: update_metadata [-h] [--version] directories [directories ...]


Update metadata files to look like XSL-template.xsl, but with original
content. This script exists because the XSL-template is updated with new
variables and documentation. This script will propagate these changes to
existing metadata files.


positional arguments:
  directories  Directories where metadata files should be updated.


optional arguments:
  -h, --help   show this help message and exit
  --version    show program's version number and exit
```


**Source code**

* [update_metadata.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/update_metadata.py)
* [xslsetter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/xslsetter.py)


# epubchooser


```
usage: epubchooser [-h] [--version] epubfile


Choose which chapters and html ranges should be omitted from an epub file.


positional arguments:
  epubfile    Path to an epub file


optional arguments:
  -h, --help  show this help message and exit
  --version   show program's version number and exit
```


**Source code**

* [epubchooser.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/epubchooser.py)
* [epubconverter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/epubconverter.py)
* [xslsetter.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/xslsetter.py)


# make_training_corpus


```
Make training corpus from analysed giella xml files. Sentences with words
unknown for the giella fsts are not included.


positional arguments:
  langs       The languages to make a training corpus for.


optional arguments:
  -h, --help  show this help message and exit
  --version   show program's version number and exit
```


**Source code**

* [trainingcorpusmaker.py](https://github.com/giellalt/CorpusTools/blob/main/corpustools/trainingcorpusmaker.py)






