# Setting the TCA2 parameters


This document discusses ways of improving the sentence alignment results provided by TCA2.



#  TCA2 version
The 2011 TCA2 version is installed in two versions (GUI and command line).


## Updating the documentation to the "for the rest of us" level


All involved parties need to have a look-and-feel of the alignment in order to see what is going on.


* **Responsible**: Børre 
* **Deadline**: 10.6.2011.




# Improving the anchor list


We might parametrise the anchor list into one general part, and one thematic 
part, e.g. along the division in the corpus catalogue structure.


The existing anchor list should be both trimmed and extended.


## Remove unused anchors


1. Make an fst or corresponding of the sme (sma, smj, nob, …) columns of the anchor.txt file.
2. Run the fst against the parallel corpus.
3. Remove unused lines from the anchor list


* **Responsible**: Berit Merete, Trond
* **Deadline**:


## Add onchors not in use


1. Make a frequency list of the word forms of the sme (etc.) parallel corpus
2. Run the frequency list against the anchor.fst
3. Starting (almost?) from the top, and add anchors lacking from the anchor list.


* **Responsible**: Berit Merete, Trond
* **Deadline**:


## Open questions:


Is there an optimal length for the anchor list?


# Setting the sentence length parameter


This parameter should be given to TCA2. It is measured in characters, not in words.


Ciprian used the pre-set parameter for the last run.


1. Take the corpus, 
2. divide it in sentences, 
3. count the number of sentences, 
4. count the number of characters, 
5. calculate number ov char / sent.


```
Sentences:
  ccat -l sme -r converted/sme/admin/ | \
  preprocess --abbr=~/gtsvn/gt/sme/bin/abbr.txt | \
  (count the number of sentences = units given to TCA2)


Characters:
  ccat -l sme -r converted/sme/admin/ | wc -c
```


**TODO:**


* Cip to count


# Weighting


The weight of TCA2 is preset at the following values ("for no scientific reason") to:


* anchor words       - 1.0
* anchor phrases     - 1.6
* proper names       - 1.3
* dice words         - 1.3
* dice phrases       - 1.6
* numbers            - 1.3
* scoring characters - 1.3


Investigate whether these values are sensible.


* **Responsible**: All
* **Deadline**: First round, 


## Dice similarity


Quoting the documentation:


''If the first n (n is read as a parameter to the program) characters are equal for a word in an English and a Norwegian sentence, the two words are assumed to be cognates. For English/Norwegian a value of n=6 or 7 gives good results. Dice's similarity coefficient is the number of matching bigrams in the two words divided by the mean of the number of bigrams for the two words (2a/(b+c), where a is the matching number of bigrams, and b and c are the number of bigrams in the two words. For English and Norwegian, a value of more than 0.7 or 0.8 gives reasonable results. For other languages, the acceptable value for the coefficient can be less.''


Now, the question is how to find the coefficient. It is probably far smaller than for eng-nob.




# Preprocessing


The two languages entering the preprocessing procedure might be preprocessed 
according to different principles. The difference might be subtle: One common 
abbreviation oder initial letter classified differently in language A and language B
might be enough to eschew the result.


Investigate this.


* **Responsible**: Ciprian
* **Deadline**:






# Making a gold corpus for parameter tweaking


* **Responsible**: Berit Merete.
* **Deadline**:




