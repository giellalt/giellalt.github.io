# How to update monolingual content

This steps are valid for korp, u_korp and f_korp and need to be repeated for each language.

## Step 1 - Update to the latest fst:

```
cd lang-<ISO>
git pull or svn up
```

Make sure that you have in your configuration:

```./configure --prefix=/Users/<USERNAME>/.local```

Then run:

```
make
make install
```

## Step 2 - Convert original files to xml

Make sure you have the [CorpusTools](https://giellalt.github.io/ling/CorpusTools.html#) installed.

Run the following:

```
convert2xml $GTFREE/orig/<ISO>
convert2xml $GTBOUND/orig/<ISO>
```

## Step 3 - Analyse converted files

Run the following:

```
analyse_corpus <ISO> $GTFREE/converted/<ISO>/
analyse_corpus <ISO> $GTBOUND/converted/<ISO>/
```

This may take a while to run depending on the size of the converted folders.

## Step 4 - Convert the analysed files in the required korp format

Run the following:

```
korp_mono <ISO> $GTFREE/analysed/<ISO>
korp_mono <ISO> $GTBOUND/analysed/<ISO>
```

Correct errors in the conversion if they occur, and run the conversion again. Known errors:

- Dependency tags may be missing, giving error messages of the type **OBJ** or **+FAUXV**. Add the offending tags in the file ``/usr/local/lib/python3.9/site-packages/corpustools/korp_mono.py``.

Do not proceed before the conversion errors until the errors are fixed.


## Step 5 - Compile converted files in one .vrt file per genre

Repeat this for each genre:

```
cd CorpusTools/korp_scripts/update_mono
mkdir _od_<ISO>._.<GENRE>/
rsync -av $GTFREE/korp/<ISO>/<GENRE>/  _od_<ISO>._.<GENRE>/
rsync -av $GTBOUND/korp/<ISO>/<GENRE>/  _od_<ISO>._.<GENRE>/
```

Only for the genre "ficti" we want to change the order of all sentences. To do this run the following:

```
python3 scramble.py _od_<ISO>._.ficti
```

Change cDomain, cLang in compile_corpus.xsl and then run the following:

```
java -Xmx2048m -cp ~/main/tools/TermWikiExporter/lib/saxon9.jar -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main compile_corpus.xsl
```

Copy the file loc\_metadata\_xxx.json to a new file replacing **xxx** with the ISO code of the language you are processing. Edit it manually based on the example in the xxx file. As date, set the date you have in ``compile_corpus.xsl``.

Also, rename the folder ``vrt_<ISO>_<DATE>`` to the ISO code of the language you work on, e.g. ``vrt_fit_20210625`` to ``fit``.


## Step 6 - Produce data for Korp (using cwb)

Change ``in_dir, metaFile, date, lang_code`` in korp_scripts/update_mono/loc_run_gt_corpus_encoding.sh as needed.

Also change ``root_dir`` in loc_encode_gt_corpus_20181106.sh.

Make a folder in update\_mono and name it after the ISO code of your language (here: *fit*).

Then run the following:

```
sh loc_run_gt_corpus_encoding.sh
```

