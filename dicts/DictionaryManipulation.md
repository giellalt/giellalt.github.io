



Compilation is documented elsewhere, for [Interactive dictionaries|InteractiveDictionaryCompilation.html] and [Web dictionaries](WebdictCompilation.html).




#  Dictionary scripts


* dtds are in main/words/dicts/scripts
* Dictionary-specific scripts are in main/words/dicts/LANG1LANG2




#  Changing dictionary direction from LANG1LANG2 to LANG2LANG1


Script is in main/words/dicts/upside2down/


# Collect all LANG1 files into one with main/words/dicts/scripts/collect-dict-parts.xsl 
# Run the conversion with the scommand below (exchange sjdrus with whatever)


```
java -Xmx2048m net.sf.saxon.Transform -it:main gt_sd2td.xsl inFile=all-merged-pos_sjdrus.xml
java -Xmx2048m net.sf.saxon.Transform -it:main gt_mergeEntry_pos_td.xsl inFile=outDir/all-merged-pos_sjdrus_rus.xml
```
