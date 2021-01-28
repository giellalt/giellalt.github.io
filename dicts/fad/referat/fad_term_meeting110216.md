

Dictionary for administrative language


* Meeting 16.2.2011.
* Present: Børre, Cip, Fran, Trond.




# Status quo


* Conversion to xml
** Conversion works. The parallel texts are converted. Closed. 
** Conversion continues with incoming files, but outside this project. 
* Parallel texts
** all is doable apart from the regjeringen.no files that have "?" in the path:
** this is not fixed in the xslt scripts (no need for that any longer, fixed the file names)
*** Status (including samediggi protocols) nob2sme: 1022 file pairs. sme2nob: 1020 file pairs
*** Status nob2sme: 2198 file pairs from the admin directory
*** Missing in this number: the ? filename parallel files (fixed by Børre)
*** Børre is changing the ? in the names, changing ? to _.
*** Time frame: The name conversion is done before noon tomorrow. -- status: done
** The anchor.txt
*** cut -d"/" -f2,4 anchor.txt
*** We might need less words and more words in the anchor list
*** Look at the 50-250 wordforms in the corpus, check whether they miss in the 
    anchor list, and eventually add. But anchor list improvement is
    on the todo list for after this process. (it will require testing on
    a gold corpus etc).
* Sentence alignment
** Not started -- status: done
** Problem1: ? in file names. Solution underway: Use _.
** Problem2: (encountered by @cip): sentences like 
   **<s id="asdfasd">/ /  //</s>**
   are not accepted by the tca2 sentence aligner and these should
   be filtered right after indexing. Solution: this is not
   a problem. -- status: done manually (collecting patterns for a later filtering) 
** C and B to discuss the tca2 problems after this meeting., 
   C sends B his aligner. -- status: done, yet B still has problems with the aligner
** More steps to be discussed by B and C (file indexing etc.) -- status: done
* Word alignment
** Input: tmx files. Fran needs the whole bunch. -- status: done
** The data in TMX format is downloadable here:
** http://divvun.no/static_files/NOB.SME.admin.tmx.gz
* Lexicographic work
** Not started, this is for the lexicographer, after the word alignment.




# Plan forward, dates


# Conversion
## Done
# Parallelisation
## Fix file names (**B, C**) ?
## Done by the end of 18.2. (as discussed by B/C)
# Sentence alignment -- tca2
## Done by 22.2 next week
# Word alignment
## Previous steps must be done before startup.
## Starting 22.2, deadline 1.3.
# Lexicography








# Notes




FMT: The word alignment actually takes quite a bit of manual work, in order to process with the analysers, remove the unnecessary formatting and stripping the appropriate tags. It is ideal if this is only done once. In actual amount of time spent it isn't a huge amount -- a day or so. But we won't get useful result
 until we get **most** of the text anyway (at the moment I hvae something like 3-4 files) -- also it doesn't make sense for the lexicographer to look at half-finished output. 

 




