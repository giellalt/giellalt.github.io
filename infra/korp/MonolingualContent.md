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
convert2xml ~/freecorpus/orig/<ISO>
convert2xml ~/boundcorpus/orig/<ISO>
```

## Step 3 - Analyse converted files

Run the following:
```
analyse_corpus <ISO> ~/freecorpus/converted/<ISO>/
analyse_corpus <ISO> ~/boundcorpus/converted/<ISO>/
```

This may take a while to run depending on the size of the converted folders.

## Step 4 - Convert the analysed files in the required korp format

Run the following:
```
korp_mono <ISO> ~/freecorpus/analysed/<ISO>
korp_mono <ISO> ~/boundcorpus/analysed/<ISO>
```

## Step 5 - Compile converted files in one .vrt file per genre

Repeat this for each genre:
```
cd CorpusTools/korp_scripts/update_mono
mkdir _od_<ISO>._.<GENRE>/
cp -r ~/freecorpus/korp/<ISO>/<GENRE>  _od_<ISO>._.<GENRE>/
cp -r ~/boundcorpus/korp/<ISO>/<GENRE>  _od_<ISO>._.<GENRE>/
```

Only for the genre "ficti" we want to change the order of all sentences. To do this run the following:
```
python3 scramble.py _od_<ISO>._.ficti
```

Change cDomain, cLang in compile_corpus.xsl and then run the following:
```
java -Xmx2048m -cp ~/main/tools/TermWikiExporter/lib/saxon9.jar -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main compile_corpus.xsl
```

## Step 6 - Produce data for Korp (using cwb)

Change in_dir, metaFile, date, lang_code in loc_run_gt_corpus_encoding.sh as needed.
Then run the following:
```
sh loc_run_gt_corpus_encoding.sh
```
