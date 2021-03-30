# Stavekontrolltesting og norplusprosjektet


2012-2013: LA-2012_1a-31112,  Feilkorpus for å testa stavekontrollar for grønlandsk, islandsk, lulesamisk og nordsamisk


# Språk & medarbeidarar


|   Language/role | Project member
| --- | --- 
|   ISL           |  Hulda Óladóttir
|   KAL           |  Elin Neshamar
|   SME           |  Thomas Omma
|   SMJ           |  Inga Mikkelsen
|   Project lead & test bench development |  Sjur Moshagen


Maja Kappfjell has worked with SMA, but is formally not part of the project. We have tried to keep the SMA corpus in synch with the rest, though, in terms of markup standards and reaching a final state at the same time as the rest of the languages.


# Basic facts


## Project Target


* at least 1000 typos / non-words
* ... in a corpus of at least 20 000 words running text pr language


## Status as of now


|   Language | No Typos |No of running words |% typos of all words
| --- | --- | --- | --- 
|   ISL      |       915 |             149 532 |  0,61 %
|   KAL      |       224 |              21 723 |  1,03 %
|   SMA      |      9074 |              41 682 | 21,77 %
|   SME      |      2370 |              47 293 |  5,01 %
|   SMJ      |      1170 |              22 536 |  5,19 %


### SMA vs ISL


There is a very big span in % of errors in the languages, from ISL 0,61% to SMA 21,77%. It is quite obvious, though, that in the SMA case, the main issue is one of norm:


The SMA norm prescribes the use of Swedish *ö* **and** Norwegian *æ* - a combination that is not easily available on any standard keyboard (unless you really search for it). This is causing most writers to just ignore this aspect of the norm, and they use either both Norwegian *æ* and *ø* all the time, or both Swedish *ä* and *ö* all the time. When the sounds these letters represent are also quite frequent, it leads to a situation where every sentence contains spelling errors.


# Markup work


* the text types collected
* a short description of each language's collection work


## The texts
For all languages we tried to collect texts that would be representative of spelling errors made by native speakers - because that's the main target user group for the spellers. At the same time the texts should be relavitely easy to collect - corpus text collection can be a very time consuming activity. What we ended up with was the following main text categories:


* blogs
* (online) newspaper texts
* student texts


Most texts are available in an open-access corpus repository, but some of the texts are stored in a closed repository for copyright and privacy issues.


The testing done so far is only done on the freely available texts.


## SMJ


* Inga has started more or less from scratch - we had only one SMJ document before this project started
* Inga - additional comments?
** distribution of news - student - blogs?
** text properties depending on year written, gender, age of writer?


## SMA


* most of the text was collected a year ago, while Maja was on maternal leave
* they were collected by a team in Røros / Aajege
* Maja is going through the texts now, and checking the earlier markup, as well as bringing it up to date with the markup development in the Nordplus project


## SME


* most of the texts has been collected by Lene as part of her work with her thesis
* some texts had been collected earlier as part of a Nordplus financed pilot project on testing spellers
* Lene has been looking for slightly different things than what we are looking for in this project, and Thomas has gone through the texts and changed the markup to follow the other languages


## ISL


* all texts has been collected as part of this project, some of it has been taken from an existing Icelandic corpus
* the scarcity of spelling errors has meant that the total number of texts and words needed to be quite high to be able to collect the number of spelling errors we have been aiming at


## KAL


* the work has been slowed down because of several computer switches and not a lot of time to dedicate to the project
* as for the Sámi languages, it has been hard to find texts, and the KAL texts also have markedly fewer spelling errors compared to the Sámi texts


# Test results


## Precision & recall


|  ISL | Precision: 9,5%    | Recall: 71,73% | Accuracy: 95,7%
|  KAL | Precision: 5,35%   | Recall: 82,59% | Accuracy: 84,76%
|  SMA | Precision: 85,64%  | Recall: 94,53% | Accuracy: 95,36%
|  SME | Precision: 72,88%  | Recall: 91,05% | Accuracy: 97,85%
|  SMJ | Precision: 54,57%  | Recall: 89,74% | Accuracy: 95,59%


## Speed & memory


|  Language | Speed               | Memory use
| --- | --- | --- 
|  ISL      |  37,31 words/second  |  17 172 Kb
|  KAL      | 990,2  words/second  |  58 952 Kb
|  SMA      |  24,11 words/second  |   4 480 Kb
|  SME      |  76,05 words/second  |   6 380 Kb
|  SMJ      | 112,03 words/second  |   5 104 Kb


