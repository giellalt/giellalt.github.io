# Advanced search (CQP) in the corpus interface Korp

This guidance is based on a corresponding [documentation of CQP for Finnish](https://www.kielipankki.fi/tuki/korp-edistynyt/), and can be used for searches in [Saami](http://gtweb.uit.no/korp), [Baltic Finnish](http://gtweb.uit.no/u_korp), [Uralsk](http://gtweb.uit.no/u_korp), and [Tuvinsk](http://gtweb .uit.no/tyv_korp), Korp, all developed at UiT. Korp itself has been developed at the language bank in [Gothenburg](http://sprakbanken.gu.se/korp).

Korp has three search modes, [Simple](korp-enkel.html), [Extended](korp-extended.html) and **Advanced** (by which Korp means "CQP expressions"). This page documents the writing of CQP expressions.

# The CQP search field

Press **CQP expression** i.e. the third tab below the **KORP** logo. The search field has three fields.

1. *Active simple search as CQP:* = The search term you may have entered in the **Simple** search field is displayed here
1. *Active extended search as CQP:* = The search term you may have entered in the **Extended** search field is displayed here
1. *Complete CQP question:* = here you write or copy your search term

# The basic components of a CQP search


In the corpus, each word form is marked with a lemma, word class, grammatical properties and syntactic relation (dependency). The various parts of the analysis have the following names, or **categories**:


| Category | Meaning
| --------|-----------
| `word`  | word form as it appears in the running text
| `lemma` | the lookup form of the word (basic form)
| `lemmacomp` | lookup form with composition limit
| `pos ` | word class (abbreviation for Part Of Speech)
| `msd`  | morphosyntactic analysis (e.g. present, singular, ...)
| `ref`  | the word's position in the sentence (marked as a number for the 1st, 2nd word, etc.)
| `dephead` | the ordinal number of the dependency word (mother node)
| `dep` | the dependency relation of the parent node (SUBJ→, ←ADVL, etc.)

The search is structured as category-property pairs, with the category on the left, then `=` and then the property in double ampersands, like this: `msd="Gen"`. An overview of tags for `pos` (word class tags), `msd` (e.g. morphosyntactic properties) and `dep` (tags for syntactic function) can be found on the documentation page for each individual language.

To see this in practice, we can go from *Extended* search in Korp, and then click on *CQP expression*. The search from *Extended* then stands as a starting point for further searches in CQP. The last search that was displayed at the very bottom of the [documentation page for search with Extended mode](korp-extended.html) will e.g. give this CQP expression:

`[word = "oaidnit"] []{1,4} [deprel = "←OBJ"]`

In May 2021, this search returns 1,535 hits in Northern Sami SIKOR. By replacing `word` in the search with `lemma`, the result is 4745 hits.

# Search with CQP


## Search conditions for single words


The basis for searching individual words is the attributes (ie the categories in the table above) which are linked to each word form. The conditions are delimited with braces, and they determine which values ​​the attributes must have in order to fulfill the search criteria. If the search only consists of a word form, without conditions for the attribute, the braces are not needed.


Example:


| CQP expression | Meaning
| --- | ---
| `"giella"` | the word (ie word form) "giella"
| `[lemma="giella"]` | the word forms that have (the noun) "giella" as the base form
| `[pos="N"]` | word forms that have word class code N (i.e. all nouns)


Word searches can consist of various attribute combinations, which are put together by the logical operators `&` ("and"), `|` ("or"), `!` (negation, "not") and `->` (implication ). It is possible to group the attributes with the help of parentheses. As a comparison operator, we use `=` ("is equal") or `!=` ("is not equal").

Example:

| CQP expression | Meaning
| ---------------------------------------- | ---
| `[lemma="čálli" & pos="N"]` | word forms that have `čálli' as the base form and `N' as the word class code
| `[lemma = "giella" & !(deprel = "←SUBJ")]` | word forms that have `giella` as the base form and a dependency relation that is not `←SUBJ`.
| `[lemma="giella" & word!=lemma]` | word forms that have `giella` as the base form and word forms that are different from the base form

Note that it is possible to refer to attribute value on both sides of the comparison operator. Note also that the arrows in the dependency expressions point **from** daughter node **to** parent node. The expression `→N` is added to an (unspecified) clause that modifies a noun, and the expression `SUBJ→` is added to a subject that modifies a clause to its right.


## Regular expressions

It is also possible to use regular expressions in the search. E.g. `čohkká[ij].*` will find words starting with *čohkkáj* or *čohkkái* and containing zero or more letters. `[word="d.t"]` will find the word forms that start with `d`, end with `t`, and have a letter in the middle.

Regular expressions can use the following elements:

| Symbol | Represents | Example | Meaning
| --- | --- | --- | ---
| letters and numbers | themselves | `giella`<br/> `14`  | *giella<br/> 14*
| . | any character | |
| [...]  | symbol row, any of the symbols | `[aeiouyæøå]` | a vowel
| [^...] | complement: any symbol that is not there | `[^aeiouyæøå]` | a symbol that is not a vowel
| *RS*   | a row of symbols *R* and then a row of *S* | `[a-zæøå][0-9]` | a lowercase letter and then a number
| (...) | grouping of symbol | `(hála|huma)n`   | *hálan* or *human*
| *R\** | Repetition of *R* zero or more times | 1. `a.*` <br> 2. `a(bc)*` | 1. words beginning with *a* <br> 2. *a, abc, abcbc, ...*
| *R+* | Repetition of *R* one or more times | `he+y` | *hey, heey, heeey, heeeey, ...*
| *R{n}* | Repetition of *R* exactly n times | `(na){2}` | nana
| *R{m,n}* | Repetition of *R* between m and n times | `0{2,3}`  | *00,000*
| *R?* | Repetition of *R* 0 or 1 times | `háli?t` | *hálit* or *háliit*
| *R|S* | R or S | `d(ie|uo)t` | *diet* or *duot*
| \\c | the character \ is used to search for a special character | `\.` | a period (where only . would have been an arbitrary character)


## Search for more words

The easiest way to search for multiple words or phrases is to type them one after the other, separated by spaces.


| CQP expression | Meaning
| --- | ---
| `"man" "dihte"` | the words *man* and *dihte* one after the other
| `"dat" [pos!="N"]` | word form *dat*, so that the next word is not a noun
| `[pos="A" & deprel="→N"] [pos!="N"]` | an adjective that functions as an attribute of a noun but where the next word is not a noun
| `"nu" [pos="A"] "go"` | adjective between *nu* and *go* (also check **Statistics** for this search)

It is possible to group terms in the search, in the same way as in extended searches, but with more possibilities. Searches for several words only get hits within one and the same sentence. The search is displayed as hits on the entire search string.


It is also possible to use regular expressions when searching for several words. The starting point is the same search terms as for single words, with the use of the operators `?`, `*`, `+`, `{n}`, `{m,n}` and with the alternative operator `ǀ`. The expressions are grouped with parentheses, as shown below.


In addition, empty braces `[]` refer to an arbitrary word, i.e. it is equivalent to a period (for arbitrary letter) in regular expressions, but for word forms.




**Example:**

(**NB!** If the browser changes emoticons or other characters, the expression will not work. If copying the expression into Korp gives an error message, it is better that you write it yourself.

| CQP expression | Meaning
| --- | ---
| `[lemma="leat"] []* [lemma="boahtit"]` | one or another form of the word *leat* and further on in the sentence a form of the word "boahtit" ("leatgo jo boahtán", "lean boahtime", ...)


## Dependency search

(We advice you to read this paragraph first but thereafter use the *global constraint* notation (see below) in actual searces)

To search for dependency relations, we need to search for structures where we define the word at both ends of the dependency relation, and for the relation between them. We can e.g. search for both daughter and mother in a particular relationship.

Important attributes to achieve this are:

- `ref` = the number, or position, of the word in the sentence the search starts from
- `dephead` = the number of the core word, or the word the dependency relation points to
- `deprel` = the dependency relation

The analysis of the example *Mun oađán* "I sleep" is:

```
"<Mun>"
    "mun" Pron Pers Sg1 Nom SUBJ→ #1->2
"<oađán>"
    "oađđit" V IV Ind Prs Sg1 FMV #2->0
```
Starting from the word `Mun` the `ref` is thus **1**, `dephead` is **2** and `deprel` is **SUBJ→**.


In order to search for dependency relations, the properties of the CQP search language are needed, in order to compare the attributes of the different word forms. To be able to refer to word forms, they must be identified by adding an arbitrary letter to the word form search term, separated by a colon, e.g. `a:[deprel="SUBJ→"]`. In the example above, `a` is the number of the word with dependency relation **SUBJ→**, i.e. `a = 1`. 

Thereafter it is possible to refer to either the mother node or daughter node in the dependency tree.

The notation `[dephead==a.ref]` means "my dependency head (my mother node) is the word having *a*  as reference". Here we use `a, b`, in the example below we use `s, o` (for "subject", "object"), for cqp the letter is just an arbitrary index making it possible to refer to other words in the search expression. The expression (1) refers to the **mother node** (dephead) of a word, whereas (2) refers to the **daughter node** of a work

1. ``dephead=a.ref`` = *my dephead is a* = *the word my dependency relation refers to is a*
1. ``ref=a.dephead`` = *I am a's dephead* = *I am the target for the dependencyrelation the word a refers to*


**Example:**

| | CQP expression and explanation
| --- | ---
| expression | `a:[deprel="SUBJ→"] [lemma="oađđit" & deprel="FMV" & ref=a.dephead]`
| explanation | the word "oađđit", when it is a finite main verb and stands to the right of the subject
|
| expression | `a:[deprel="SUBJ→" & msd=".*Pl.*"] [lemma="oađđit" & deprel="FMV" & ref=a.dephead]`
| explanation | the word "oađđit", when it is a finite main verb and stands to the right of the subject, and the subject is in the plural.
|
| expression | `a:[deprel="FMV"] []* [lemma="giella" & deprel="←SUBJ" & dephead=a.ref]`
| explanation | the word "giella", when it is the subject and stands to the right of the main verb. The expression `"dephead=a.ref"` means: *my dephead is a*, or *the word the dependency relation I point to is a*
|
| expression | `a:[lemma ="giella" & deprel="SUBJ→"] []* [deprel="FMV" & ref=a.dephead]`
| explanation | the word "giella", when it is the subject and stands to the left of the main verb. The expression `"ref=a.dephead"` means: *I am the target of a's dephead reference*
|
| expression | `a:[deprel="→N"] []* [deprel="SUBJ→" & ref=a.dephead]`
| explanation | subject and the clause that modifies it (marked with `a`), so that there can be zero or more words between them
|
| expression | `a:[deprel="SUBJ→"] b:[dephead=a.ref] c:[dephead=b.ref] [dephead=c.ref]`
| explanation | subject in a phrase where the three following words are dependent on the word before them



Note that in the CQP search, the order of the search criteria also determines the order of the word forms that are found. If, for example, you want to search for verb and subject and their relationship regardless of word order, you must do two separate searches, one for verb + subject and one for subject + verb., possibly combine the searches with the `|` operator.


## Global constraints

With the search criteria above, it is only possible to perform a dependency search for word forms that have already been identified in the search term. A more efficient way to write the expression is to use a **global constraint**. The global constraint comes at the end of the search term, and it can refer to the word forms in the search itself. The global constraint is introduced with the symbol `::`.


**Example:**


| | CQP expression and explanation
| --- | ---
| expression | `s:[lemma="oahpaheaddji" & deprel="SUBJ→"] []* v:[pos="V" & deprel="FMV"] []* o:[lemma=".*" & deprel= "←OBJ"] :: s.dephead = v.ref & o.dephead = v.ref`
| explanation | subject "oahpaheaddji" (s), and then (possibly after other words) main verb (v), and then (possibly after other words) any object (o)
|
| explanation | `s:[lemma="туниктышо" & deprel="SUBJ→"] []* o:[lemma=".*" & deprel="OBJ→"] []* v:[pos="V" & deprel ="FMV"] :: s.dephead = v.ref & o.dephead = v.ref`
| explanation | Same as the example above, but for Mari, which is an SOV language


One may also make chains of dependencies. The following expression will catch sentences like *Bártni váhnemat ledje hui bures liikon dan niidii.*: "The boys parents had very good liked that girl".

```
a:[lemma="leat"]
[]{1,2}
b:[lemma="liikot" & msd="V.*"]
[]{0,10}
c:[msd="N.*.Ill"]
::c.dephead=b.ref & b.dephead=a.ref
```


The following expression gives *subject - finite copula - object - infinite main verb*

```
s:[deprel="SUBJ→"] 
[]* 
a:[lemma="leat"] 
[]{0,2} 
o:[deprel="OBJ→"] 
i:[deprel="IMV"]
::s.dephead=a.ref & o.dephead=i.ref & i.dephead=a.ref
```

The following expression gives *finitt hjelpeverb - objekt - infinitt hovedverb*. 

**NB! The Korp version which is online contains a typo:** The tag *FAUX* (finite auxiliary) is written *NAUX*. The error will be fixed for the next update.

```
a:[deprel="NAUX"] []* 
o:[deprel="OBJ→"] []* 
v:[deprel="IMV"] 
:: o.dephead=v.ref & v.dephead=a.ref
```




It is also possible to present the previous examples using global constraints, e.g. the following search, written with global constraints:

```
a:[deprel="SUBJ→"] b:[] c:[] d:[] :: b.dephead=a.ref & c.dephead=b.ref & d.dephead=c.ref
```

gives the same result as the search that we quoted in the table above:

```
a:[deprel="SUBJ→"] b:[dephead=a.ref] c:[dephead=b.ref] [dephead=c.ref]
```




## Global constraints for words that are repeated


With the help of the global guides above, it is possible to make searches that cannot be made with ordinary regular expressions. An example is structures where the same word appears many times, while the word can be any word:


| CQP expression | Importance
| --- | ---
| `a:[] "yes" b:[] :: a.word=b.word` | same word form on both sides of the word "yes"
| `a:[lemma!="leat"] b:[] :: a.lemma=b.lemma & a.word!=b.word` | the same lemma twice in succession, yet so that in the two cases it does not have the same word form.





# References

The presentation here is based on Kielipankki's presentation, and is adapted to SIKOR. The CQP documentation from Stuttgart is far more comprehensive, but is made for a corpus that is analyzed in **phrase structures** (*NP, VP, PP, ..*), where all corpora that use Korp use **dependency analysis** . In other words, the search example from Stuttgart's documentation cannot be used directly, only as an example of the formalism.


* Kielipankki: [Korpin edistynyt haku](https://www.kielipankki.fi/tuki/korp-edistynyt/)
* [The CQP Query Language Tutorial as pdf](http://www.ims.uni-stuttgart.de/forschung/projekte/CorpusWorkbench/CQPTutorial/cqp-tutorial.2up.pdf) and [The CQP Query Language Tutorial in html format](http://cwb.sourceforge.net/files/CQP_Tutorial/). Institute for Machine Language Processing, Stuttgart.



