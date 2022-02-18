Computational Workshop for Indigineous Languages Summary
===========



# Background


Discussion how to cope with *multiword constructions*, or wordforms
written separately. The background for this is the East Cree dictionary
[verbn.eastcree.org](http://verbn.eastcree.org). The issue is also relevant
for western Cree languages written with Syllabics. (and for those who are 
not aware of the SRO standards and type with spaces ...)




# Issues with East Cree and FSTs


If we are allowing for spaces between morphemes, and are expecting preverbs to be followed by a verb stem, medial, and ending, then spelling NEEDS to be proper, or our FST system will not recognize   an incorrectly spelled pre-verb and thus will not recognize that there needs to be a stem, medial, etc. following it. 


*As I understand it, our theory of grammar is modular*

        
FST-based preprocessing (or: tokenisation as part of morphology) presupposes a particular alphabet of well-formed strings between whitespace (referred to as "atoms" below,), and there is a separate module checking the well-formedness of these atoms (the FST implementation of morphology and phonology). The danger of having a mis-spelling is that it will take an atom outside of the language, and so as the FST-based preprocessing comes in to enforce dependencies between well-formed atoms, in the case of mis-spelled atoms it simply has nothing to work with. 


*In the case of a language like East Cree, a problem emerges in that people happily introduce whitespace between what we consider to be parts of a word.*

    
@Because legitimately distinct syntactic words are also separated by whitespace, it would be a major increase of the mission of our spell-checkers to handle the evaluation of sentences rather than atoms. Leaving some intermediate jumps unspecified, I think this is the central challenge of writing systems like that used in East Cree ... syntactically distinct items are being treated in the writing system in the same way as syntactically dependent items, but our spell checker should only reasonably be expected to handle one of these types of data (the close-knit atoms).*

    
*(If this understanding is faulty, please let me know :)*


We may treat spaces alike, and include all *atoms* 
(in the sense introduced above) in the FST. Under this model, each atom
will be treated as (isolated) candidates to be checked one after another, in the 
spell checkers. Such a system will clearly miss important facts, since not 
all combinations of preverbs and verb stems are licit, which is something that we want our spell checker to catch. Evaluating each atom by itself will preclude the analysis of combinations. (I'd be happy to introduce an example of a syntactic concatenation that our spellchecker shouldn't catch, and contrast it with a preverb-verb concatenation that our spellchecker should catch, but there is no ready way to distinguish them with the representation that neutralizes the distinction).


In order to find the illicit combinations one will then have to lean to an alternative.
The alternative in this context is [Constraint Grammar](https://en.wikipedia.org/wiki/Constraint_Grammar).


The alternative model would be to distinguish betwee *real* word boundaries
and "word-internal" whitespace (thus not word-boundaries). This alternative 
works well for correct text: All candidates for a wordform (in the wide sense)
is given as output. The problem arises when this FST is to be used as a 
spellchecker. In this case, the search for the longest match of wordform parts
breaks down, as these parts may be misspelled. The main problem with this
model is thus that the FST will not be able to recognize the maximal wordform
(consisting of several *atoms*) as such.


The obvious solution to this is to treat each morpheme that is separated by 
spaces as an individual word, apply a grammar-checker level tool, using 
Constraint Grammar as a pattern-matcher to enhance  spell-checking. 
(this weaves in nicely with the prior discussion of modularity)


Use of CG as a pattern-matcher to enhance spellcheck. \\
[http://mokennon2.albion.edu/ojibwe.htm]


* Your input was: *i can not eat*
* Our translation of this sentence is: *gaawiin nindaa-wiisinisii* \\
  [http://mokennon2.albion.edu//language.htm]




# Th three things to accomplish in the near future


* **BLARK**: Dustin & Katie with the help of Arok, Marie-Odile and company to put together a survey of Algonquian language resources and community pull to create language-technological tools. AKA "you give us resources, we help you create tools".

    
* **nehiyawêtân 1**: describing the creation of a Plains Cree ICALL application: Lene, Megan, Antti, et co., to be followed by further development based on feedback from Cree instructors (Arok, Jean, Dorothy) and then impact on language learning  -> LREC (I don't think LREC is the place for this)


* **nehiyawêtân 2**: implementation in language courses and evaluation of the students' use of it and their learning outcome


* **FST modeling of Plains Cree nouns** and an evaluation of the FST based on analysis of corpus, and a special look at Locatives, diminutives, possessives.  Atticus, Lene, Trond, Antti, Arok.


* **FST modeling of Plains Cree verbs**: Atticus, Lene, Trond, Antti, Arok.


* **itwewina** - why and how combining an existing dictionary with an FST. 


We want to be mindful of how to evangelize this work. Finding organizations, conferences where we can talk to people. Communities that are relevant include linguists, teachers, less so computer scientists. 


*Computer scientists don't necessarily think our work is interesting (not fashionable, too little data ... An interesting topic could be finding the lower limit of data needed for inference with various toolss... perhaps there is a paper here.) *

*Teachers probably need a two-phase evangelism: "hey look at these tools you can use", and "hey, this is how these tools have an effect on learning". This second part requires teaming up with people who know about teaching and learning and such.*

*Trond has articulate views about our role in the scientific study of minority languages and in our ability to create useful applications of technology. :)*














