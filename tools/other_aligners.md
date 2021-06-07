# Sentence alignment


We look at alternatives to our [tca2](tca2.html) aligners.


# The Europarl aligner


The sentence aligner used to align [the Europarl parallel corpus](http://www.statmt.org/europarl/) is a perl script based upon [Church and Gale algorithm](http://people.csail.mit.edu/koehn/publications/de-news/church_and_gale.ps). Here is [the README file](europarl_aligner_README.txt).

The script may be downloaded from the europarl site. At Giellatekno, it is placed under the `$GTHOME/tools/alignment-tools/europarl/`.

In order to run it: Add se and no abbreviation files to the *nonbreaking_prefixes* catalogue (this has been done). Then add files to the directories se and no. The filenames in se and no must be *identical*. The command then is

./sentence-align-corpus.perl se no

This might not work. For some hints, see:

* [Struggling with documentation](http://www.mail-archive.com/moses-support@mit.edu/msg00301.html)


**TODO:**


* Run a test on the Europarl aligner, and compare to tca2.


# Other aligners?


Feel free to add.
