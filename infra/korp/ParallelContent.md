# How to update parallel content

This steps are valid for korp, u_korp and f_korp and need to be repeated for each language.
Note: this is the "old" way of updating parallel content. But it is suggested to try out the ```korp_para``` command from the CorpusTools instead of running the script ```analyse_xxx_tmx.py```.

## Step 1 - Update to the latest fst:

Run the following for both the majority language (<ISO1>) and the minority language (<ISO2>):
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

## Step 2 - Copy <ISO1>2<ISO2> folder and prepare data

Make sure you have the [CorpusTools](https://giellalt.github.io/ling/CorpusTools.html#) installed.


Run the following:
```
cd CorpusTools/korp_scripts/update_parallel
y|cp -r ~/freecorpus/stable/tmx/<ISO1>2<ISO2> .
cd <ISO1>2<ISO2>
find . -type f| xargs perl -i -p -e 's/xml:lang/lang/g;'
cd ../
```

## Step 3 - Analyse files

Run the following for each genre.

Analyse the texts first for the minority language (<ISO2>) and then for the majority language (<ISO1>):
```
python3 analyse_xxx_tmx.py <ISO2> <ISO1>2<ISO2>/<GENRE> <GENRE>
python3 analyse_xxx_tmx.py <ISO1> out_<ISO2>_<ISO1>2<ISO2>
```

This may take a while to run depending on the size of the original folder.

## Step 4 - Convert the analysed files in the required korp format

Run the following for each genre:
```
time python3 extract_sent_pairs.py <ISO1> <GENRE> <ISO1>2<ISO2> <DATE> out_<ISO1>_out_<ISO2>_<ISO1>2<ISO2>
time python3 extract_sent_pairs.py <ISO2> <GENRE> <ISO1>2<ISO2> <DATE> out_<ISO1>_out_<ISO2>_<ISO1>2<ISO2>
```

## Step 5 - Produce data for Korp (using cwb)

Change lang_code, plang_code, in_dir, metaFile, date in run_para_corpus_encoding.sh as needed.
Then run the following:
```
sh run_para_corpus_encoding.sh
```
