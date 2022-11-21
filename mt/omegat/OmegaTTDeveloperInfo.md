OmegaT developer info
=====================



# Mac App Bundling




HfstTokenizer can be compiled together with OmegaT and bundled into Mac App.
Follow these instructions:


1. Download OmegaT 3.x source code, not 4.x
  [here](http://sourceforge.net/projects/omegat/files/OmegaT%20-%20Standard/OmegaT%203.6.0%20update%205/OmegaT_3.6.0_05_Source.zip/download)
1. Get appbundler used by OmegaT from [here](https://bitbucket.org/infinitekind/appbundler).
  This needs Java 1.7
	- install this into ~/.ant/lib/
	- this appbundler needs `JavaAppLauncher` and `jre-mac-root` to be defined
   in `OMEGAT_ASSETS_DIR` folder, which is searched from environmental variables.
   If not found in this folder the build process looks one folder down from
   where you installed OmegaT sources.
		- `jre-mac-root` is a soft link to the folder where Java Runtime libraries are found
1. Download thread safe version of hfst lookup library and put it to `OMEGAT_SRC_FOLDER/lib` where
  OMEGAT_SRC_FOLDER is the folder you just installed the OmegaT source files.
  [here](https://mvnrepository.com/artifact/fi.seco/hfst/1.1.5)
1- Copy `HfstTokenizer.java` and `HfstStemFilter.java` to
  `OMEGAT_SRC_FOLDER/src/org/omegat/tokenizer` where
    OMEGAT_SRC_FOLDER is the folder you just installed the OmegaT source files.
	- Modify files package name if needed
	- Remove `throws IOException` from `getTokenStream` method and correct
   `StandardTokenizer` constructor call
	- diff HfstTokenizer.java against 4.x HfstTokenizer.java (see diffs below)
1. Add `hfst-ol.jar` to `manifest-template.mf` (details below)
1. Add `lib/hfst-ol.jar` entry to `manifest.mf`'s `Class-Path` variable
1. run `ant mac` in OmegaT source folder, the one where you installed OmegaT


Diffs:

```
1c1
< package org.omegat.tokenizer;
---
> package no.divvun.tokenizer;
16a17
> import org.omegat.tokenizer.BaseTokenizer;
17a19
> import org.omegat.tokenizer.Tokenizer;
60,63c62,64
<           final boolean stopWordsAllowed) {
<     StandardTokenizer tokenizer = new StandardTokenizer(getBehavior(),
<                         new StringReader(strOrig));
<     // tokenizer.setReader(new StringReader(strOrig));
---
>           final boolean stopWordsAllowed) throws IOException {
>     StandardTokenizer tokenizer = new StandardTokenizer();
>     tokenizer.setReader(new StringReader(strOrig));
71,72c72
<       return new HfstStemFilter(new StandardTokenizer(getBehavior(),
<                     new StringReader(strOrig)), transducer);
---
>       return new HfstStemFilter(tokenizer, transducer);
```

## diff HfstStemFilter.java against 4.x HfstStemFilter.java

```
1c1
< package org.omegat.tokenizer;
---
> package no.divvun.tokenizer;
11a12
> import org.apache.lucene.util.AttributeSource.State;
47,49c48,49
<       for (String s : res) {
< //      res.forEach(anal -> {
<         String stem = s.substring(0, s.indexOf("+"));
---
>       res.forEach(anal -> {
>         String stem = anal.substring(0, anal.indexOf("+"));
53c53
<       }
---
>       });
```


Add the following for `hfst-ol.jar` to template:

```
Name: org.omegat.tokenizer.HfstTokenizer
OmegaT-Plugin: tokenizer
```
