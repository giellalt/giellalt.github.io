# DVChart 2 - specifikations


Overview:
* tagged releases
* stacked bar graphs for comparing all speller
* generalisation - given an xml file with data X and Y, make a graph for X-Y


I think this will be it for now - otherwise the specification will be delayed indefinitely, and nothing will happen.


There are several other data sets that would be useful to be graphed, but we need more time to prepare and think through exactly what we want.


# Details


## Tagged releases


I would like to tie certain test runs to specified releases of the speller being tested. If such data is found for a test run, the existing graphs should be enhanced with a vertical black line labeled with the release info. This will make it easier to see how we do presently compared to past releases.


I will also add past spellers to our svn, so that it is easy to rerun the gold-standard corpus against past releases with the same test corpus for all releases. This will make the comparison more correct, as it eliminate changes in the test corpus from the comparisons.


Exactly how the release info should be encoded is open, and should be discussed.


## Stacked bar graphs


For this type of graphs, we only compare releases, plus the very last version of our own development spellers. Our own development spellers should be marked as "dev" instead of the release tag of the other spellers.


There are two main graphs:
* precision & recall
* suggestion performance


These two main types can have variants according to the following parameters:
* language - only for the specified language
* speller engine - only for the specified speller (e.g. Hunspell)
* release only - no development versions included


### Graph details - precision & recall


```
100 %
  ^
  |
  |  ▥       ▤
  |  ▥▤    ▥▤▦
  |  ▥▤▦  ▥▤▦
  |  ▥▤▦  ▥▤▦
  |  ▥▤▦  ▥▤▦
  +-----------------------------> spellers
     sma   sme
     PLX   PLX

  
  ▥ = precision
  ▤ = recall
  ▦ = accuracy
```


### Graph details - suggestion performance


```
  100 %
  ^   ▣     ▣
  |   ▢     ▩
  |   ▩     ▨  
  |   ▥     ▧
  |   ▤     ▥
  |   ▦     ▤
  |   ▦     ▦
  |   ▦     ▦
  +-----------------------------> spellers
     sma   sme
     PLX   PLX

  
  ▣ = only wrong suggestions
  ▢ = no suggestion
  ▩ = >5. position
  ▨ = 5. position
  ▧ = 4. position
  ▥ = 3. position
  ▤ = 2. position
  ▦ = 1. position
```




## Generalisations
