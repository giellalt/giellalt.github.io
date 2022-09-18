# Search with the search box *Extended* in Korp

Go to one of the Korp interfaces, e.g. [the Sami](http://gtweb.uit.no/korp/). Tap the **Extended** tab right below the **KORP** cogo.



# The search box itself

(picture in English forthcoming)

![Alt text](korp-extended.png?raw=true "Søkeboksen *Utvidet*")


## Simple use of the search box

The box has 9 different search modes, *word, Part-of-speech, Grammatical analysis, Baseform, Dependency relation, Domain, Translated from, Title, date, time interval*. We go through them one by one than:

### word
Here you enter *word form*. Mark alternative to the right, e.g. *is, is not, ...* The option *is not* only makes sense with the use of multiple search boxes.

### Part of speech
Here there are predefined options, one for each Part of speech.

### Grammatical analysis
Here you enter the grammatical tag. The dropdown menu immediately to the right says **contains**, because the tag is only a part of the string *word form + analysis*. If you want to search for several tags, e.g. locative singular, type **Sg.Loc** in the search field.

### Baseform
Here you search for the **lexeme**. Selecting *sátni* here gives hit on the inflected forms *sátni, sáni, sániid, ...*

### Dependency relation
Here you can search for tags for syntactic function, e.g. **deprel_←OBJ** (in u\_corp it only says **deprel_←OBJ**). The drop-down menu provides a list of available function tags. Here is an [explanation of the tags for syntactic function](https://giellalt.uit.no/lang/sme/docu-sme-syntaxtags.html).

### Domain
This is the set of corpus domains: **administration, bible, facts, ficti, news, ...** This does not seem to be implemented to work in search. On the other hand, it is possible to sort hits by domain during a search on **Statistics**.

### Title
This is the **title** of the document. This doesn't seem to be implemented to work in search. On the other hand, it is possible to sort hits by domain during a search on **Statistics**.

### Translated from
Metadata is very poor here, and it also does not seem to be implemented in search.

## Combine several wrap legs in the same search box

It is possible to copy searches with the operators **AND** and **OR**. Press **or** at the bottom of the box to search for the union of two or more requirements (eg search for *noun or pronoun*). Press **and** to get a new part of the same search box, to search for an intersection of two requirements (eg search for a word that is *plural and object*).

# Combining multiple conditions in the same search box
(The picture shows  Norwegian as metalanguage)

![Alt ​​text](korp-treboksar.png?raw=true "Combination of several boxes")

By pressing **⨁** to the right of the search box, you get another search box, so you can search for word combinations. Here it might also be a good idea to search for **Part of speech is not**.

# Search for more words and show statistics

Search for two words (mark the empty box between verb ob object), and select **Statistics**. The result is a frequency-sorted statistic of *verb + object*.

![Alt ​​text](korp-treboks-obj.png?raw=true "Unspecified word between the verb and the object")


