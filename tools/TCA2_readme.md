# TRANSLATION CORPUS ALIGNER (TCA) 2


Home page: [http://gandalf.aksis.uib.no/tca2/](http://gandalf.aksis.uib.no/tca2/) (only in Norwegian at the moment)


(See also the file list **--files.readme.txt** below)


The program is written in Java by **Øystein Reigem**, AKSIS/UNIFOB, University of Bergen


The text files have to be in marked up in XML and well-formed, but they don't have to have a 
DTD. The texts have to be divided into sentences (or other unit to be aligned) and each 
sentence has to have an id. See the sample files RS61E.xml and RS61N.xml (ready for
alignment). 


Two small support programs are included in the directory. One program divides a text
into sentences. This use punctuation and upper case letters to decide where to split. At the
moment it does not recognize upper case letters in utf-8. The program will also divide sentences
after the two characters ##. The second program is a program to number the <s> and <head> elements.
See `job-pc.bat/job-linux.sh` how to run these programs.


The texts can be encoded in iso-8859-x or utf-8 (this is given in the encoding attribute
on the first line of the text), but the anchor list have to be in utf8.


Format of the anchor list:


* A list of words separated with comma in language 1 / language 2
* The words can be truncated to the left and right with a star


Sample: 


```
begin*, began, begun, start* / begyn*, start*
```


When files are opened in TCA2 then language 1 file has to be open to the left (as file 1).


The program will align <s> and <head> but this can be changed in the 
Settings panel where you can add other elements like <item> for list 
elements (with ancestor <list>).


The  program is run by opening a command window and executing the alignment.bat file
(the alignment.jar program can also be executed directly by clicking, but at the moment
you will not see any error messages. They are sent to standard output and are only
visible if you use the command window).


Open File 1, File 2, Anchor Words (and click use this anchor list). Check also the
settings panel.


The program requires Java 1.5.


|   File                        | Description
| --- | --- 
|  Om_aligmentprogrammet.doc    | Description of program (in Norwegian)
|  TCA2_demo_docs_20050706.doc  | some screen dumps of the program (not 100% up to date) with comments
|  alignment.bat                | bat file to run in a command window (you will then see error messages)
|  alignment.jar                | the alignment program, require Java 1.5
|  anchor-eng-nor.txt           | an English - Norwegian anchor list (in UTF-8)
|  RS61E-1.xml                  | An English text with paragraph mark-up
|  RS61E-2.xml                  | An English text with paragraph/sentence mark-up
|  RS61E.xml                    | An English text with sentence id ready for alignment
|  RS61N-1.xml                  | A Norwegian text with paragraph mark-up
|  RS61N-2.xml                  | A Norwegian text with paragraph/sentence mark-up
|  RS61N.xml                    | A Norwegian text with sentence id ready for alignment
|  -cor.xml, -new.txt         | Output formats
|  RS61-aligned.htm             | Aligned sample files as table in HTML
|  gen-id-linux                 | program to generate id (run from command line)
|  gen-id.exe				   | -
|  job-pc.bat                   | job on pc to run sentence/gen-id
|  job-linux.sh                 | job on linux
|  new2htm.exe                  | Merge two -new files to a HTML-table (run from command line)
|  sentence-linux               | program to divide text into sentences (command line, not UTF-8 ready)
|  sentence.exe				   | -
