# Bakgrunnsdokument






## Prosjektskisse:


For parallelltekst mellom nord-, lule- og sørsamisk og evt. andre språk. I praksis vil det primært gjelde tekstar mellom norsk og dei tre samiske språka.


Arbeidsoppgåver:


To månadsverk + overhead til UiT
1. Handsame parallelltekstar frå statsadministrasjonen i korpus (programmerar)
1. Parallellføre tekst på setnings- og ordnivå (datalingvist)
1. Parallelle setningar og ord som del av datastøtta omsetjing i eit omsetjarverkty (programmerar, datalingvist)


Resultatet av a-c vil bli ein deskriptiv database over departementet sine tekstar, og eit grensesnitt omsetjarane kan bruke for å samanlikne omsetjingane sine med tidlegare omsetjingar.


Det trengst deretter mange månadsverk for å bearbeide materialet vidare til ei forvaltningsordbok:


# Leksikografisk arbeid med parallellistene (filolog * 3 språk)
# Utvide det terminologiske grunnlaget til fleire språk


Eit grovt overslag kunne vere ca 6 månadsverk pr språk.








# Project plan


1. Collect files, for each smX with parallel texts in nob (nno, eng, swe, smX?) (**Børre**)
      1. sme: XXX words
            1. [Governmental whitepapers](../ling/corpus_norwegianwhitepapers.html)
            2. Governmental web page documents,  `freecorpus/converted/sme/admin/depts/regjeringen.no/`
            3. Saami parliament files: `freecorpus/converted/sme/admin/sd/`
      2. smj: YYY words
            1. Governmental pdf files, `freecorpus/converted/smj/admin/depts/`
            2. Governmental web page documents,  `freecorpus/converted/smj/admin/depts/regjeringen.no/`
      3. sma: ZZZs words
            1. Governmental pdf files, `freecorpus/converted/smj/admin/depts/`
            2. Governmental web page documents,  `freecorpus/converted/sma/admin/depts/regjeringen.no/`
2. Sentence align (**Ciprian, Børre?**)
3. Word align (**Francis**)
      1. Make parallel wordlists
      2. Check for relevant vocabulary (nob frequency deviant from normal, i.e. nob words with higher frequency in the material than in a big reference corpus. What we would expect is (freq in big ref corpus / wordcount of ref corpus) x wordcount of material
4. Manual lexicographic work (**Lexicographers**)
      1. Go through the word pair lists and evaluate them
      2. The goal here is not a normative evaluation, but a descriptive: 
            1. Remove erroneous alignments and keep good ones
      3. A normative term collection (*these are the term pairs we want*) is outside 
   the scope of this phase of the project.
5. Integrate the resulting list into Autshumato (**Ciprian, etc.**)




# Gamle månadsrapportar




## March


nob-sme files are in the folder `$BIGGIES/gt/sme/corp/forvaltningsordbok/`.




## February


* [First 2000 words (sorted after confidence), have a look](2000.html)
* [First 10000 words (sorted after nob), have a look](10000.html)


## December


1. Collect files, for each smX with parallel texts in nob (nno, eng, swe, smX?) (**Børre**)
      1. sme: 
            1. [Governmental whitepapers](../ling/corpus_norwegianwhitepapers.html) -
    16 documents, 948384 words (in the pdfs mentioned in the above doc)
            1. Governmental web page documents,  `freecorpus/converted/sme/admin/depts/regjeringen.no/` -
    1384 documents, 615852 words
            1. Saami parliament files: `freecorpus/converted/sme/admin/sd/` -
    929 documents, 220377 words
      1. smj: YYY words
            1. Governmental pdf files, `freecorpus/converted/smj/admin/depts/`
            2. XXX documents, YYY words
            3. Governmental web page documents,  `freecorpus/converted/smj/admin/depts/regjeringen.no/`
            4. XXX documents, YYY words
      2. sma: ZZZs words
            1. Governmental pdf files, `freecorpus/converted/smj/admin/depts/`
            2. XXX documents, YYY words
            3. Governmental web page documents,  `freecorpus/converted/sma/admin/depts/regjeringen.no/`
            4. XXX documents, YYY words
2. Sentence align (**Ciprian, Børre?**)
3. Word align (**Francis**)
      1. Make parallel wordlists
      2. Check for relevant vocabulary (nob frequency deviant from normal, i.e. nob words with higher frequency in the material than in a big reference corpus. What we would expect is (freq in big ref corpus / wordcount of ref corpus) x wordcount of material
4. Manual lexicographic work (**Lexicographers**)
      1. Go through the word pair lists and evaluate them
      2. The goal here is not a normative evaluation, but a descriptive: 
         1. Remove erroneous alignments and keep good ones
         2. A normative term collection (*these are the term pairs we want*) is outside 
   the scope of this phase of the project.
5. Integrate the resulting list into Autshumato (**Ciprian, etc.**)






## Original deadlines


1. Collect files
      1. nob-sme: december
      2. nob-smj: january
      3. nob-sma: january
2. Sentence align
      1. nob-sme: january
      2. nob-smj: january
      3. nob-sma: january
3. Word align
      1. nob-sme: january
      2. nob-smj: january
      3. nob-sma: january
4. Term extraction
      1. nob-sme: january
      2. nob-smj: january
   1. nob-sma: january
5. Term evaluation
      1. nob-sme: febrary
      2. nob-smj: febrary
      3. nob-sma: febrary
6. Autshumato integration
      1. nob-sme: febrary
      2. nob-smj: febrary
      3. nob-sma: febrary
7. Evaluation, report
      1. nob-sme: march
      2. nob-smj: march
      3. nob-sma: march
8. March, 31st: Final report due.




## Obsolete docu?


### How to convert files to xml


```
Inside $GTFREE:
find orig -type f | grep -v .svn | grep -v .xsl | grep -v .DS_Store | xargs convert2xml2.pl


The output is thanks, «you gave me $numArgs files to process» and then . or | for
each file that is processed. . means success, | means failure to convert a file.


For a lot more verbose output to the terminal, use the --debug option


After the conversion, get a summary of the converted files this way:
java -Xmx2048m net.sf.saxon.Transform -it main $GTHOME/gt/script/corpus/ym_corpus_info.xsl inDir=$GTFREE/converted


This results in a file corpus_report/corpus_summary.xml


To find out which and how many files have no content, use this command:
java -Xmx2048m net.sf.saxon.Transform -it main ../corpus/get-empty-docs.xsl inFile=`pwd`/corpus_report/corpus_summary.xml


This results in a file out_emptyFiles/correp_emptyFiles.xml


The second line tells how many empty files there are.
```
