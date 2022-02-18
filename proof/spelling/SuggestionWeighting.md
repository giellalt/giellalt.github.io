
Suggestion Weighting
=======


The files for weighting, and thus decide the priority of suggestions, on 
our computer spellcheckers are found in


```
LANG/tools/spellcheckers/fstbased/desktop/hfst
LANG/tools/spellcheckers/fstbased/desktop/weighting
```


# Levenshtein transitions and adjustments


This is the basis against which the operations we specify will
be compared against.


Each Levenshtein operation is 10 points (this value is system-specific,
it is set in the `hfst/Makefile.am`). The makefile also specifies
the number of edit operations allowed. Standard value is 2. 


## Error model A: Adjusting Levenshtein


Levenshtein may be adjusted in  two ways. The adjustments are single letters or  
strings.


At the moment, what weight to put to any given pair is open. As for
one rule of thumb, a multiply-occuring error (say an `a/á` pair, 
which may occur more than once in a given word (say, when writing **arrát* 
for correct *árrat* should give both pairs a:á and á:a weights 
less than half of one Levenshtein operation, in order to outperform
competing pairs involving one Levenshtein operation.


### Single letters


The file is `hfst/editdist.default.txt`.


In the beginning of the file, all letters that participate 
in the suggestion fst are added.


In the suggestion there is a mapping from each letter to each other letter.
The weight for all these transitions is in our case 10.


When the transition pair operation is listed in editdist.default.txt,
it will get the weight listed **instead** of 10 points.


```
ç	č	-9
a	á	-6
á	a	-6
a	â	-6
```


### Strings


The file is `hfst/strings.default.txt`.


The format is


```
c:cc	-2
cc:c	-2
d:dd	-2
g:gg	-2
```


This weight also come **instead of** the basic Levenshtein form.


String pairs are used as follows:


We build a *Levenshstein 1 model*, i.e. a set of all
word pairs consisting of input : Lev1. Then, these two compete against
each other, and any member of the stringpair with weight under Levenshtein 1
will win.


### Finalstrings


The file is `hfst/final_strings.default.txt`.


The format is


```
esnie:esne	-5
ese:asse	-5
htasse:htse	-5
```


These weights come **in addition to** the aggregated Error model A, 
the values are added to the number. Error model A may thus be run
a number of times (standard = 2, as we saw), and the final_strings
value is added after that.




### initial letter


The file is `hfst/initial_letters.default.txt`


The format is


```
l:l	0.0
m:m	0.0
n:n	0.0
o:o	0.0
```


Using this may give a very large error model, and it is thus
turned off as default.


## Error model B: Swapping words


The file is `words.default.txt`.


The format is:


```
jih:jïh	0.0
```


These full word pairs will get a weight.
This weight should be put lower than may be achieved from
Error model A, in order to always outperform it (hence with negative
weight in case Error model A operates with negative weights). Thus set up, 
one may even consider running Error model B as autocorrect
(without asking for user confirmation).








## Frequency and tag weight




### Frequency weighting


The file is `spellercorpus.raw.txt`. (evt. a `.clean.` file)


A corpus may be used as a frequency weighting mechanism.
Give the system a correctly spelled corpus.
You then give least weight to the most frequent wordforms, 
according to a logarithmic scale (source: Tommi Pirinen).
Thus, more common words get lower weights (inverse sfrequency values).


You may even take a specialised speller for learners, tuning 
frequency for a (corrected) learner's corpus.


### Tag weighting


The file is `weighting/tags.reweight`.


File format:
```
+Pot    +1
+Cond   +1
+Actio  -1
+Ess    +1
+Par    +1
+PxSg1  +3
```


### Interaction between frequency and tag weighting


Logarithmic frequency values and tag weights are `added together` to get the aggregated grammatical/frequence weight.




# Putting it all together


Text frequency and tag weight come on top of the error model.
Typically, they will only come in when the error model gives (almost) a tie.
Frequency should thus be tuned so that it does not override the error models,
but rather gives priority within each (small amount of) edit distance step(s).






# Testing


At the end of the day, tuning edit distance, letter and string pairs, against word frequency and each other is a linguistic and empirical question.


In order to find the ideal balance, a [speller testbench](../GeneralTesting.html) is needed.
