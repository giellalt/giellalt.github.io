# Dictionary manipulation

Compilation is documented elsewhere, for [Interactive dictionaries](InteractiveDictionaryCompilation.html) and [Web dictionaries](WebdictCompilation.html).

## Dictionary scripts

- General dtds and scripts are in `giella-core/dicts/scripts` (yes, in scripts)
- Dictionary specific dtds are in `dict-LANG1-LANG2/dtd`
- Dictionary-specific scripts are in `dict-LANG1-LANG2/scripts`

## Changing dictionary direction

Changing from LANG1LANG2 to LANG2LANG1: Script is in `giella-core/dicts/upside2down/`

1. Collect all LANG1 files into one with `giella-core/dicts/scripts/merge_giella_dicts.py` (previously `giella-core/dicts/scripts/collect-dict-parts.xsl`)
1. Run the conversion with the command below (exchange sjdrus with whatever)

```sh
java -Xmx2048m net.sf.saxon.Transform -it:main gt_sd2td.xsl inFile=all-merged-pos_sjdrus.xml
java -Xmx2048m net.sf.saxon.Transform -it:main gt_mergeEntry_pos_td.xsl inFile=outDir/all-merged-pos_sjdrus_rus.xml
```

