Check and fix parallel corpus
==================

Do this if you find files in freecorpus that aren't parallel anyway (or how to
improve freecorpus in sixteen simple steps)


To find files with wrong sentence alignment:


1. Open a terminal. Run tmx2html.sh. This converts all .tmx files to html files.
This makes it easier to read the parallelized files.


2. Go to:
$GTFREE/prestable/tmx/nob2sme


3. If you want to check in which files the word is, grep word in sentence that
has wrong alignment:
```
nob2sme $ grep -rl bransjep . | grep -v '.svn' | less
./admin/depts/regjeringen.no/aktuelt.html_id=166.tmx
./admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.tmx
./admin/depts/regjeringen.no/nyheter.html_id=174.tmx
./admin/depts/regjeringen.no/pressemeldinger.html_id=184.tmx
```


Check all the listed files


4. Check if correctly aligned:
nob2sme $  open ./admin/depts/regjeringen.no/aktuelt.html_id=166.tmx.html
Then you will see the sentence alignment and can check if it is correctly
aligned. Use cmd+f bransjep to search for words, etc.




NOW YOU CAN START TO FIX THE FREECORPUS


1. Find all the files with the same id number in orig:
```
~ $ cd freecorpus
$ find orig -name '*id=210*' | grep -v ".svn"
orig/eng/admin/depts/regjeringen.no/engelsk-tema.html_id=210
orig/eng/admin/depts/regjeringen.no/engelsk-tema.html_id=210.xsl
orig/nno/admin/depts/regjeringen.no/arbeid-og-velferd-nynorsk.html_id=210
orig/nno/admin/depts/regjeringen.no/arbeid-og-velferd-nynorsk.html_id=210.xsl
orig/nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210
orig/nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.xsl
orig/sme/admin/depts/regjeringen.no/bargu-ja-algu.html_id=210
orig/sme/admin/depts/regjeringen.no/bargu-ja-algu.html_id=210.xsl
```


2. Check if nob and sme are parallel files:
$ see orig/nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210
orig/sme/admin/depts/regjeringen.no/bargu-ja-algu.html_id=210


In SubEthaEdit press cmd+r to open the files in a webbrowser.


3. If the files are not parallel files, change the sme xsl-file and delete
information about parallel files (line 83-96). Check also line 60-79
(multilanguages):
$ see orig/sme/admin/depts/regjeringen.no/bargu-ja-algu.html_id=210.xsl


4. Convert the file xml to check if there are any errors in xsl-file:
$ convert2xml orig/sme/admin/depts/regjeringen.no/bargu-ja-algu.html_id=210


5. If converted succesfully, check in xsl-file:
$ svn ci -m "This file doesn't have a parallel nob version"
orig/sme/admin/depts/regjeringen.no/bargu-ja-algu.html_id=210.xsl


6. Find the rest of the files with the same id number:
```
$ find orig -name '*id=210*' | grep -v ".svn"
orig/eng/admin/depts/regjeringen.no/engelsk-tema.html_id=210
orig/eng/admin/depts/regjeringen.no/engelsk-tema.html_id=210.xsl
orig/nno/admin/depts/regjeringen.no/arbeid-og-velferd-nynorsk.html_id=210
orig/nno/admin/depts/regjeringen.no/arbeid-og-velferd-nynorsk.html_id=210.xsl
orig/nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210
orig/nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.xsl
```


7. svn rm the other languages except sme (6 files; 2 eng, 2 nno, 2 nob):
$ svn rm orig/eng/admin/depts/regjeringen.no/engelsk-tema.html_id=210
./eng/admin/depts/regjeringen.no/engelsk-tema.html_id=210.xsl
./nno/admin/depts/regjeringen.no/arbeid-og-velferd-nynorsk.html_id=210
./nno/admin/depts/regjeringen.no/arbeid-og-velferd-nynorsk.html_id=210.xsl
./nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210
./nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.xsl


8. check in the changes:
svn ci -m "deleted files with no parallel Saami translation"




10. Find the rest of the files with same id number in prestable and delete
them:
```
freecorpus $ find prestable -name '*id=210*' | grep -v '.svn'
```


11. Delete the files (5 files: 3 in converted, 1 in tmx and 1 in toktmx):
freecorpus $ svn rm
prestable/converted/nob/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.xml
prestable/converted/sme/admin/depts/regjeringen.no/bargu-ja-
algu.html_id=210.typos
prestable/converted/sme/admin/depts/regjeringen.no/bargu-ja-
algu.html_id=210.xml
prestable/tmx/nob2sme/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.tmx
prestable/toktmx/nob2sme/admin/depts/regjeringen.no/arbeid_og_velferd.html_id=210.toktmx


12. Check in the changes:
svn ci -m "deleting useless files, they weren't parallel anyway"


