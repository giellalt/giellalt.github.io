Compiling the Apertium-style webdicts
=====================================

This text documents the compilation process of [a set of Apertium-style web dictionaries](http://gtweb.uit.no/webdict/index.html).


# The files


The online files themselves are stored in the relevant catalogue for displaying
online files on `gtweb.uit.no`. They should be identical to the files in
`$GTHOME/apps/dicts/apertiumdict/`, so keep the two catalogues in synch. The
`gtweb.uit.no` files are for the net, and the ones in `apps/dicts` are for
offline use.


# The conversion procedure


The files are converted from the original dictionary files,
`$GTHOME/words/dicts/LANG1LANG2/`, via the following procedure:


You need the Apertium dixtools:


- download it from
 [wiki.apertium.org/wiki/Apertium-dixtools](http://wiki.apertium.org/wiki/Apertium-dixtools),
 and save it somewhere on your machine (outside the GTHOME tree)
- install it via the following commands:
  -cd apertium-dixtools/
  -ant jar
  -sudo ant install


Then convert the Giellatekno xml format into Apertium xml format
(we assume you stand in `$GTHOME/words/dicts/scripts/`):


(For an example of commands, see below)


- collect all relevant entries in a single file (this script does only that)
  - in issue the following command (where `INPUT_DIR` is
   `../LANG1LANG2/src/`):
   - `java -Xmx2048m -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main collect-dict-parts.xsl inDir=INPUT_DIR/ > PATH_TO_OUTPUT_FILE`
   - different filters for different language pair are possible/needed
   - filtering takes place both in `collect-dict-parts.xsl` and
   `gtdict2simple-apertiumdix.xsl` so before using these scripts check both
   your input and the code to assure the output you expect
- convert the gt_format into the accepted apertium_xml format
  - The output file from last command shall be the INPUT_FILE here.
   __Note that the lines between the first line and the <r> node must be deleted from the INPUT_FILE__,
   otherwise the xsl script declares it "missing".
   - In the file `gtdict2simple-apertiumdix.xsl`, edit the variables `inFile`
   and `outDir`, so that the former points to the input file and the latter to
   a directory we make for this.
  - Then, issue the command:
  - `java -Xmx2048m -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main gtdict2simple-apertiumdix.xsl`
-  compile the file using the apertium tools (see above), with this command
  (`INPUT_FILE` is last command's output):
  - `apertium-dixtools dix2trie INPUT_FILE lr LANG1-LANG2-lr-trie.xml`
- update the file from the `$GTHOME/apps/dicts/apertiumdict/` into the
  relevant catalogue for displaying online files on gtweb.


Here comes an exampls, again assuming you stand in
`$GTHOME/words/dicts/scripts/`, and want to convert sme-fin:


```
java -Xmx2048m -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main collect-dict-parts.xsl inDir=../smefin/src > tull/out_simple-apertium/tull.xml
see tull/out_simple-apertium/tull.xml
```

**THEN DELETE THE LINES BETWEEN THE FIRST LINE AND THE <r> NODE**

Then proceed:

```
java -Xmx2048m -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main gtdict2simple-apertiumdix.xsl
tail tull/ut/tull.xml
apertium-dixtools dix2trie tull/ut/tull.xml lr ../../../apps/dicts/apertium_dict/dics/fin-smn-lr-trie.xml
```
