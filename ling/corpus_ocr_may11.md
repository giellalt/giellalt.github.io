OCR reading
===========


## Algorithm for dealing with OCR errors


### Finding these errors


* Problem: There are document-specific conversion errors that result
  in letters, not in garbage, errors that can be found only by linguistic
  means.
* Solution: identify the problematic files via error detection with fst


**TODO**:


Tne Error Detection Algorithm runs as follows:


For each file:
1. Analyse the main language text morphologically
1. Count the missing ones
1. Register the missing/total ratio, and pick the worst files

Look at the worst files, and figure out how to mend them, or move them,
 e.g. to an OCR gold standard 

 

 
### Results of finding errors for North Sami


Here is a list of errors per file in each folder in the admin directory. For each file we list *error/total ratio - total number of words - words not recognized - filename*, and we sort the file list according to error/total ratio:

* [admin/depts/others](corpus_errors_admin_depts_others.txt)
* [admin/guovda](corpus_errors_admin_guovda.txt)
* [admin/others](corpus_errors_admin_others.txt)
* [admin/regjering](corpus_errors_admin_regjering.txt)
* [admin/sd/others](corpus_errors_admin_sd_others.txt)
* [admin/sd/samediggi](corpus_errors_admin_sd_samediggi.txt)
* [sma corpus errors](corpus_errors_sma.txt)
* [sma corpus error analysis](corpus_errors_sma_analysis.txt)
* [sme corpus errors analysis](corpus_errors_analysis.txt)
* [sme corpus errors admin/](corpus_errors_sme_admin.txt)
* [sme corpus errors analysis](corpus_errors_sme_analysis.txt)
* [sme corpus errors guovda/](corpus_errors_sme_guovda.txt)
* [sme corpus errors regjering/](corpus_errors_sme_regjering.txt)
* [smj corpus errors](corpus_errors_smj.txt)
* [smj corpus error analysis](corpus_errors_smj_analysis.txt)



 


A list of error analyses can be found from [corpus error analysis](corpus_errors_analysis.txt).


Error typology (summarising the corpus error analysis):


* Conversion errors
	* ==> Improve conversion
* Typing errors
	* ==> Add to typos.txt, evt. move to typos gold corpus
* Linguistic spelling errors
	* ==> Add to typos.txt, evt. move to typos gold corpus
* Scanning errors
	* ==> Analyse the scanning errors and add search-replace to xsl file
* Language recognition errors
	* ==> Check whether the xsl file lists the relevant languages
	* ==> Improve language rec module
* Numbers not recognised
	* ==> Improve fst
* Unknown words (bad fst)
	* ==> Improve fst
* Corrupted original
	* ==> Consider removing it


**TODO:**

* Improve conversion according to error type, as sketched above

 


### Results of finding errors for South Sami


* [April 20 Analysis of sma corpus|corpus_errors_sma.txt], and [breakdown of the error types](corpus_errors_sma_analysis.txt).




**TODO:**

* Sma improvement of the test results above

 
### Finding catalogue errors:


List all files in langX-catalogue with more non-langX content than
langX-content.


**TODO:** 

* Still not done.


### Correcting OCR errors


Develop algorithms for automatic correction of OCR errors. This 
work must be done separately for each language.
