# A collection of examples


This is a short collection of examples serving as a starting point for how to use [XMLSH](http://www.xmlsh.org/). It is a shell-friendly interface to xml files, and allows fast and easy access to structured data, as long as you know your XPath! :D


## Count the number of sme words in parallel files


First run the parallel info xsl script using Saxon (Saxon must be on your CLASSPATH - the saxonXSL alias assumes that it is found in `~/lib/saxon9.jar`):
```
$ saxonXSL -it main $GTHOME/gt/script/corpus/parallel_corpus_info.xsl lang1=nob lang2=sme inDir=$GTFREE/converted
```


Then start xmlsh and extract some statistics from the xml files produced above:
```
$ xmlsh
xmlsh$ xquery 'count(//file[@parallelity="true"])' < corpus_report/nob2sme_parallel-corpus_summary.xml
2307
xmlsh$ xquery 'count(//file[@parallelity="true"])' < corpus_report/sme2nob_parallel-corpus_summary.xml
2288
```


Then off to some slightly more advanced XQuery: get all elements for which we have
found a parallel file (as per above), extract the path to that file, and print it
(we do this with both the created report files, and `sort -u` later):
```
xmlsh$ xquery 'for $i in //file[@parallelity="true"] return $i/location/t_loc/text()' \
        < corpus_report/nob2sme_parallel-corpus_summary.xml > sme-files.txt
xmlsh$ xquery 'for $i in //file[@parallelity="true"] return $i/location/h_loc/text()' \
        < corpus_report/sme2nob_parallel-corpus_summary.xml >> sme-files.txt
xmlsh$ exit
```


Finally some traditional processing to extract the words and count them. The most
conservative (and probably most reliable) method is to just count the words using
`wc`:
```
$ sort -u sme-files.txt > sme-files.sorted.txt
$ cat sme-files.sorted.txt | xargs ccat -l sme | wc -w
  849855
$ cat sme-files.sorted.txt | xargs ccat -l sme | preprocess | wc -l
  964529
$ cat sme-files.sorted.txt | xargs ccat -l sme | preprocess | wc -w
  977348
```
