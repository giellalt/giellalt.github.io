
# Dictionary manipulation


Compilation is documented elsewhere, for [Interactive dictionaries](InteractiveDictionaryCompilation.html) and [Web dictionaries](WebdictCompilation.html).

#  Dictionary scripts

- General dtds and scripts are in `main/words/dicts/scripts` (yes, in scripts)
- Dictionary specific dtds are in `main/words/dicts/LANG1LANG2/dtd`
- Dictionary-specific scripts are in `main/words/dicts/LANG1LANG2/scripts`



#  Changing dictionary direction
Changig from LANG1LANG2 to LANG2LANG1: Script is in `main/words/dicts/upside2down/`

1. Collect all LANG1 files into one with `main/words/dicts/scripts/collect-dict-parts.xsl` 
1. Run the conversion with the scommand below (exchange sjdrus with whatever)

```
java -Xmx2048m net.sf.saxon.Transform -it:main gt_sd2td.xsl inFile=all-merged-pos_sjdrus.xml
java -Xmx2048m net.sf.saxon.Transform -it:main gt_mergeEntry_pos_td.xsl inFile=outDir/all-merged-pos_sjdrus_rus.xml
```
