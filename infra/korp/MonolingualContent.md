# How to update monolingual content

This steps are valid for korp, u_korp and f_korp and need to be repeated for each language.

*For debugging, see the end of this document.*

## Step 1 - Update to the latest fst:

```
cd lang-<ISO>
git pull
```

Make sure that you have in your configuration:

`./configure --enable-tokenisers --enable-analyser-tool --prefix=$HOME/.local`

The reference to `.local` is there to check for a locally compiled fst first,
and turning to *apertium nightly* only if the tools are not compiled locally.

Then run:

```
make
sudo make install
```


*Note that you can also use the pre-compiled language models from apertium nightly.*
*The language packages are named **giella-LANG** (e.g. **giella-sme**) in apertium nightly.*

## Step 2 - Convert original files to xml

Make sure you have the [CorpusTools](https://giellalt.github.io/ling/CorpusTools.html#) installed.

Run the following:

```
convert2xml $GTLANGS/corpus-<ISO>-orig
convert2xml $GTLANGS/corpus-<ISO>-orig-x-closed
```

## Step 3 - Analyse converted files

Run the following:

```
analyse_corpus $GTLANGS/corpus-<ISO>/converted/
analyse_corpus $GTLANGS/corpus-<ISO>-x-closed/converted/
```

This may take a while to run depending on the size of the converted folders. See `analyse_corpus --help` for options.


## Step 4 - Convert the analysed files in the required korp format

**This step might be outdated, see below for updates**

Run the following:

```
korp_mono $GTLANGS/corpus-<ISO>/analysed/
korp_mono $GTLANGS/corpus-<ISO>-x-closed/analysed/
```

Correct errors in the conversion if they occur, and run the conversion again. Known errors:

- Dependency tags may be missing, giving error messages of the type **OBJ** or **+FAUXV**. Add the offending tags in the file `/usr/local/lib/python3.9/site-packages/corpustools/korp_mono.py`.

Do not proceed before the conversion errors until the errors are fixed.


## Step 4 (Updated June 2026)

A new korp-mono has been written, that is _a lot_ faster, and fixes lemma for unlexicalized compounds.

It uses rust, so make sure you have it installed. Follow instructions at https://rust-lang.org/tools/install/
to install it.

Clone the repo:

    git clone https://github.com/giellatekno/korp-mono-rs

Run it. If `gut` (https://github.com/divvun/gut) is installed on the system, and corpora is cloned
in the gut root, simply run:

    cargo run --release -- <lang>

With `<lang>` replaced by the language code you want to run. The `korp_mono` directory will be created,
and filled with the generated files.

Remember that `--help` is always good to see options of commands:

    cargo run --release -- --help


## Step 5 - Compile converted files in one .vrt file per genre

**This step might be outdated**

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

Copy the file loc_metadata_xxx.json to a new file replacing **xxx** with the ISO code of the language you are processing. Edit it manually based on the example in the xxx file. As date, set the date you have in `compile_corpus.xsl`.

Also, rename the folder `vrt_<ISO>_<DATE>` to the ISO code of the language you work on, e.g. `vrt_fit_20210625` to `fit`.

## Step 6 - Produce data for Korp (using cwb)

**This step might be outdated**

Change `in_dir, metaFile, date, lang_code` in korp_scripts/update_mono/loc_run_gt_corpus_encoding.sh as needed.

Also change `root_dir` in loc_encode_gt_corpus_20181106.sh.

Make a folder in update_mono and name it after the ISO code of your language (here: _fit_).

Then run the following:

```
sh loc_run_gt_corpus_encoding.sh
```


# Debugging

Check each step of the chain, from the beginning:

1. Are there files in *corpus-xxx-orig*?
1. After conversion, is there content in *corpus-xxx/converted*?
1. Does the normal pipeline (hfst-tokenise, vislcg3) give intended
   result? If not, fix.
1. Compilation in lang-xxx will give a new file
   `tools/analyser/xxx.zpipe`, check whether this is updated.
3. After `analyse_corpus` , is the error gone?


# CorpusTools documentation

[The technical documentation
page](https://divvun.github.io/CorpusTools/docsdocs/)

Scripts for converting monolingual corpora

- [ccat](https://divvun.github.io/CorpusTools/reference/ccat/)
- [analyse_corpus](https://divvun.github.io/CorpusTools/scripts/analyse_corpus/)
- [korp_mono](https://divvun.github.io/CorpusTools/reference/korp_mono/)



