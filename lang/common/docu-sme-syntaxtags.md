Documentation of the syntactic tags
===============

See also separate pages on [compound](CompoundTags.html),
[semantic](SemanticTags.html), [morphological](MorphologicalTags.html)
and [dependency](docu-deptags.html) tags.

On the bottom of this page there is a list with all tags in alphabetical
order.

Syntactic tags
=========================

Our syntactic tags, or grammatical function tags, like @SUBJ&gt;, @OBJ&gt;,
etc., are based upon a balanced compromise between 3 principles:

1. use the same tags across *giellalt* languages 
1. use the conventions from within within constraint grammar (CG), e.g. as found in [the visl project](http://visl.sdu.dk/) for interactive syntax learning  
1. take the grammatical tradition of the language in question into account 

The main difference between the CG tradition (both giellalt and visl CG) and other descriptions is that CG is a linear system, where tags are given to **wordforms**, and not to **phrases**.
Thus, in a sentence like the Saami equivalent of *Peter's dog barks*
only the word *dog* will get the tag @SUBJ&gt;. The word *Peter's* gets
the tag @&gt;N, or "modifying a noun to its right". It is then up to the
reader (or to further computer processing) to interpret the combination
of @&gt;N and @SUBJ&gt; as a phrase (phrase information will also be available via the [dependency tags](docu-deptags.html) when they are present).

The arrow in a syntactic tag points at the "mother" node, which means that
the tag tells which kind of part of speech (N, A, P, Pron or Num) or
syntactic constituent (like ADVL) the wordform modifies or is a
complement to, and whether the "mother" is to the left of to the right.

The tag syntax is thus `@Mother<Daughter` or `@Daughter>Mother`, where either daughter or mother node may be left unspecified (giving 4 tag types).

In addition to these 4 types, some tags do not have arrows. These are of two types. One type is the
central verb tags @+FAUXV etc. They do not need direction indication,
either it is obvious, or the node points to zero. The other type is the
set tag type. For each tag pair @SUBJ&gt;, @&lt;SUBJ, etc, there is a
metatag @SUBJ, etc., so that @ means "either @SUBJ&gt; or @&lt;SUBJ".

Note that all syntactic tags are identified by an initial @ symbol, to
distinguish them from morphological tags, which do not have such a
prefix. In the analysis, the syntactic tags are printed at the end of
the tag string.

The syntactic tags for Saami
===========================

We present here the tags used for the Saami languages (the best developed languages in the *Giellalt* infrastructure), but linguists working on other languages will find the presentation useful. The rules assigning tags are found in the file `lang-xxx/src/cg3/disambiguation.cg3`, where xxx is the ISO code of your language.


The verb tags
-------------

-   @+FAUXV @+FMAINV @-FAUXV @-FMAINV

These tags are self-explanatory: there are finite and infinite main and
auxiliary verbs.

The major function tags
-----------------------

-   @&lt;SUBJ (@&lt;SUBJ @&lt;ext&gt;) @SUBJ&gt; @SUBJ @&lt;SPRED
    @SPRED&gt; @SPRED @&lt;OBJ @OBJ&gt; @OBJ @&lt;OPRED @OPRED&gt;
    @OPRED

The four main functions for subject, object and their predicatives are
obvious.

-   @-FSUBJ&gt; @-FOBJ&gt; @-F&lt;OBJ

These are tags for the same functions of infinite verbs outside the
verbal: *mu* gets @-FSUBJ&gt; in *Diet dáhpáhuvai mu dieđikeahttá* (the
infinite verb gets @&lt;ADVL) and *girjji* gets @-F&lt;OBJ in *Munnje
lei lossat lohkat girjji.* (the infinite verb gets @&lt;SPRED).

The adverbial tags
------------------

-   @ADVL&gt; @&lt;ADVL @ADVL
-   @-FADVL
-   @PCLE @COMP-CS&lt;
-   @P&lt; @&gt;P
-   @ADVL&lt; @&gt;ADVL

The @ADVL&gt; @&lt;ADVL @ADVL tags mark adverbials (many, but not all of
the adverbials are adverbs). The two first ones indicate the direction
to the mother node, the third is used to refer to both the former.

The adverbial of an infinite verb outside the verbal gets @-FADVL. The
&lt;hab&gt; tag marks the habitive construction.

The @PCLE tag marks particles, and the @COMP-CS&lt; tag is for the
complement of a @CS.

The two tags @&gt;P and @P&lt; are for complements of post- and
prepositions, respectively.

The two tags @&gt;ADVL and @ADVL&lt; modify the adverbial to the right,
or is a complement of the adverbial to the left, respectively. Note that
these tags mark modifyers of adverbials rather than adverbials
themselves.

The NP-internal modifiers
-------------------------

The other syntactic tags for modifiers tell which word they modify, and
whether they modify to the left or to the right.

-   @&gt;N @&gt;A @&gt;Num @&gt;Pron
-   @Pron&lt; @N&lt; @Num&lt;

The morphological tag will tell what kind of part of speech the
constituent itself is.

The @Pron&lt; tag is for eg. numerals modifying pronouns to their left,
like in *Mii golmmas finaimet máná geahčen*.

The @Num&lt; tag is for complements of numerals, like *máná* in *Sudnos
leat golbma máná*.

Appositions
-----------

-   @APP-N&lt; @APP-Pron&lt; @APP-Num&lt; @APP-ADVL&lt;
-   @APP&gt;Pron

The apposition tag marks whether it is an apposition of a noun, a
pronoun, a numeral or an adverbial.

The function words
------------------

-   @CNP @CVP

Conjunction connecting NPs and VPs.

Sentence-external tags
----------------------

-   @HNOUN @INTERJ @VOC

Stray noun in sentence fragment, interjection and vocative.

The @X tag
----------

-   @X

An @X tag is assigned to mark that no tag has been assigned (because of
omissions in our rule component)

The tags, listed alphabetically
===============================

Here is a list of the tags, with a definition or description, and one or
more examples following each of them

-   **@+FAUXV:**  
    Finite auxiliary verb.
    -   **ferte (V):**  
        *Sámi geavaheddjiid bálvalusaid vuođđun *ferte* leat
        sámegielmáhttu ja sámi kulturmáhttu. - 'Saami user services
        *need* to be based on Saami language competence and Saami
        cultural competence.'*
-   **@+FMAINV:**  
    Finite main verb.
    -   **Boađe (V):**  
        **Boađe* boahtte vahku. - '*Come* next week.'*
-   **@-F&lt;ADVL:**  
    -   **árbbolaččain (N):**  
        *Danne dárbbašit mii oažžut lobi Nils Aslak Valkeapää
        *árbbolaččain* almmuhit dán guokte lávlaga min sálbma-CD:s. -
        'Therefore we need to get permission from Nils Aslak Valkeapää's
        *heirs* to release these two songs on our psalm-CD.'*
-   **@-F&lt;OBJ:**  
    Object of infinite verb outside the verbal.
    -   **govaid (N):**  
        *Boađe mu lusa geahččat *govaid*! - 'Come to me and look at *the
        pictures*!'*
-   **@-F&lt;OPRED:**  
    Object predicative of infinite verb outside the verbal.
    -   **xxx:**  
        *xxx*
-   **@-F&lt;SPRED:**  
    Subject predicative of infinite verb outside the verbal.
    -   **xxx:**  
        *xxx*
-   **@&gt;A:**  
    Modifier of an adjective to the left.
    -   **nu (Adv):**  
        *Gulahallan Sámedikkiin dán gažaldagas šaddá *nu*
        konkrehtalažžan go vejolaš. - 'The discussion in the Saami
        Parliament about this issue gets *as* concrete as possible.'*
-   **@A&lt;:**  
    Modifier of an adjective to the right.
    -   **básárdoaluin (N):**  
        *IL Nordlysa beaivválaš jođiheaddji, Nils Peder Eriksen, lohká
        iežaset leat oalle duhtavaččat dán jagáš *básárdoaluin*. - 'The
        business manager of IL Nordlys, Nils Peder Eriksen, says he is
        really satisfied with this year's *bazar arrangment*.'*
-   **@ADVL:**  
    Sentence adverbial, @ADVL&gt; or @&lt;ADVL.
-   **@&gt;ADVL:**  
    Modifier of an adverbial.
    -   **Man (Adv):**  
        **Man* dávjá don lávet fitnat doppe? - '*How* often do you
        usually go there?'*
-   **@&lt;ADVL:**  
    adverbial to the right of the finite verb
    -   **beaivvážis (N):**  
        *Gávpot ii dárbbaš čuovgga *beaivvážis* ii ge mánus. - 'The city
        does not need light *from the sun* and not the from the moon
        either.*
-   **@ADVL&gt;:**  
    Adverbial to the left of the finite verb.
    -   **lasttain (N):**  
        *Ja muora *lasttain* ožžot álbmogat dearvvašvuođa. - 'And from
        the tree's *leaves*, the people get health.'*
-   **@ADVL&lt;:**  
    Complement of an adverbial to the right of its head.
    -   **vahkus (N):**  
        *Mun málestan guktii *vahkus*. - 'I make food twice a *week*.'*
-   **@ADVL&gt;CS:**  
    adverbial modifying a conjunction
    -   **dallah (Adv):**  
        **Dallah* goh Jeesuse tjaetseste tjuedtjele, dellie vuajna Elmie
        rihpesåvva jih Voejkene altasasse goh ledtie suaja. - '*Right*
        after Jesus stood up from the water, he sees that heaven opens
        and the holy spirit flies to him like a bird.'*
    -   **:**  
        *(sma)*
-   **@APP-ADVL&lt;:**  
    Apposition to an adverbial to the left. If the apposition consists
    of more than one word, the head will get this tag.
    -   **ovdal (Pr):**  
        *Dolin, *ovdal* soađi, olbmot lávejedje vuovdit joŋaid. - 'In
        old times, *before* the war, people used to sell cowberries.'*
-   **@APP-N&lt;:**  
    Apposition to a noun to the left of it. If the apposition is more
    than one word, the head will get this tag.
    -   **eatnigiela (N):**  
        *Viimmat mun ohppen čállit sámegiela, mu *eatnigiela*. -
        'Finally, I learned to write in Sámi, my *mother tongue*.'*
-   **@APP-Num&lt;:**  
    Apposition to a numeral to the left.
    -   **suinniid (N):**  
        *Juohke heasta borrá sullii 6 kilu *suinniid* beaivái. - 'Every
        horse eats approximately 6 kilograms of *grass* a day.'*
-   **@APP&gt;Pron:**  
    Apposition to a pronoun to the right. If the apposition is more than
    one constituent, the head will get this tag.
    -   **Turner (N Prop):**  
        *Muhto diet Will *Turner*, son nai lea fiinna olmmái. - 'But
        this Will *Turner*, he is also a nice guy.'*
-   **@APP-Pron&lt;:**  
    Apposition to a pronoun to the left. If the apposition is more than
    one constituent, the head will get this tag.
    -   **olbmái (N):**  
        *Dan mun muitalan dušše dutnje, mu buoremus *olbmái*. - 'This I
        tell only you, my best *friend*.'*
-   **@CMPND:**  
    First part of a compound followed by a hyphen
    -   **skaehtie-:**  
        *Reerenasse galka båetije stoerredigkieboelhkesne jåerhkedh dam
        *skaehtie-* jïh åasadaltesem mij lea daelie, jïh daennie
        daltesisnie hov lea nuepie buerebe joekedimmiem darjodh.*
-   **@CNP:**  
    Local conjunction or subjunction.
    -   **ja (CC):**  
        *Sihke Mázes *ja* Guovdageainnus leat boarrásat viššalit finadan
        doaibmaguovddážiin. - 'Both in Máze *and* Guovdageaidnu, the
        oldest people frequently got to the activitycentre.'*
    -   **go (CS):**  
        *Sámi geavaheaddjit hállet dávjá metaforaiguin ja sis leat ollu
        eará gulahallanvuogit *go* giella. - 'Saami users speak often in
        metaphores and the have many other ways of comunicating *than*
        by means of language.'*
-   **@COMP-CS&lt;:**  
    Complement of subjunction.
    -   **vejolaš (A):**  
        *Gulahallan Sámedikkiin dán gažaldagas šaddá nu konkrehtalažžan
        go *vejolaš*. - 'The contact with the Saami Parliament about
        this issue gets as concrete as *possible*.'*
-   **@CVP:**  
    Conjunction or subjunction that conjoins finite verb phrases.
    -   **ja (CC):**  
        *Bealatjogas leat dološ rájes leamaš bálvvossajit *ja* dát
        golbma sieiddi ledje dovddus gitta olgoriikii. - 'Long since,
        there have been sacrificial sites at Bealatjohka *and* the three
        'sieidi' (cult images) were known even abroad.*
    -   **go (CS):**  
        *Leago guhkes áigi dassá *go* Máreha oidnet? - 'Has it been a
        long time *since* you have seen Máret?'*
-   **@-FADVL&gt;:**  
    Complement of infinite verb outside the verbal.
    -   **várrogasat (Adv):**  
        *Dihkkadeaddji rávve skohtervuddjiid *várrogasat* mátkkoštit.
        'The roadman warns snowscooter drivers to drive *carefully*.'*
-   **@-FAUXV:**  
    Infinite auxiliary verb.
    -   **sáhte (V):**  
        *Eat mii *sáhte* vuolgit. - 'We *can*not leave.'*
-   **@-FMAINV:**  
    Infinite main verb.
    -   **geargan (V):**  
        *Ja Biret-Elle lea easka skuvllas *geargan*. - 'And Biret-Elle
        has just *finished* school.'*
-   **@-FOBJ&gt;:**  
    Object of infinite verb outside the verbal.
    -   **váldovuoittuid (N):**  
        *Valáštallanhálla lei njealjehas dievva olbmuiguin geat vurde
        *váldovuoittuid* fasket. - 'The gymn was to a quarter full of
        people that wait to grab *the main prizes*.'*
-   **@-FSUBJ&gt;:**  
    Subject of infinite verb outside the verbal.
    -   **mu (Pron):**  
        *Diet dáhpáhuvai *mu* dieđikeahttá. - 'It happened without *me*
        knowing about it.'*
-   **@ADVL&gt; &lt;hab&gt;:**  
    Habitive to the left of the finite verb.
    -   **Máhtes (N):**  
        **Máhtes* lea beana. - '*Máhtte* has a dog.'*
-   **@&lt;ADVL &lt;hab&gt;:**  
    Habitive to the right of the finite verb.
    -   **dus (Pron):**  
        *Leago *dus* ruhta? - 'Do *you* have money?'*
-   **@HNOUN:**  
    Stray noun in sentence fragments.
    -   **boddu (N):**  
        *Vuosttaš *boddu*. - 'First *lesson*.'*
-   **@INTERJ:**  
    Interjection.
    -   **maid (Interj):**  
        **Maid*, iigo leat boahtán? - '*What*, hasn't he/she come?'*
-   **@&gt;N:**  
    Prenominal modifier to the left
    -   **geavatlaš (A):**  
        *Ráđđehussii lea *geavatlaš* politihkka deaŧalaš. - 'For the
        government, *practical* politics is important.'*
    -   **oahppo-:**  
        **Oahppo-* ja dutkanministtar dat lea ráhkadan dieđáhusa alit
        sámi oahpu ja dutkama birra. - 'The secretary for *education*
        and research has given a notice about Saami higher education and
        research.'*
    -   **rektor (N):**  
        **Rektor* Tove Bull álgaga mielde... - 'According to *principal*
        Tove Bull ...'*
    -   **Tove (N Prop):**  
        *Rektor *Tove* Bull álgaga mielde... - 'According to principal
        *Tove* Bull ...'*
-   **@N&lt;:**  
    Modifier of the noun to the left.
    -   **33 (Num):**  
        *Mun lean ilus go beasan ovdanbuktit St.dieđ. nr. *33*. - 'I am
        happy that I get the opportunity to present the parliament
        notice number *33*.'* (In this case *33* modifies *St.dieđ.*.)
    -   **vihtta (Num):**  
        *Mun boađán diibmu *vihtta*. - 'I will come at *five* o'clock.'*
-   **@&gt;Num:**  
    Attributes of numeral to the right.
    -   **nr (N):**  
        *Mun lean ilus go beasan ovdanbuktit St.dieđ. *nr.* 33. - 'I am
        happy that I get the opportunity to present the parliament
        notice *number* 33.'*
-   **@Num&lt;:**  
    Attributes of numeral to the left.
    -   **jagi (N):**  
        *Son lea guoktelogi *jagi* boaris. - 'She/he is twenty *years*
        old.'*
-   **@&lt;OBJ:**  
    Direct object to the right of the finite verb.
    -   **áiggi (N):**  
        *Dat gáibida ollu *áiggi*. - 'That demands a lot of *time*.'*
-   **@OBJ&gt;:**  
    Direct object to the left of the finite verb.
    -   **maid (Pron):**  
        *Filbma lea oassi prošeavttas *maid* Sámi instituhtta lea
        ruthadan. - 'The film is a part of the project *that* the Saami
        institute has financed.'*
-   **@OPRED&gt;:**  
    Object predicative to the left of the finite verb.
    -   **luoikkasin (N):**  
        *Gaup dojii stivrrana hárjehallamiin, muhto oaččui *luoikkasin*
        eará stivrrana. - 'Gaup broke the handlebars during the
        practises, but got to *borrow* another steering.'*
-   **@&lt;OPRED:**  
    Object predicative to the right of the finite verb.
    -   **buriid (A):**  
        *Gáhkkuid son ráhkada hui *buriid*. - 'Cakes, she/he makes
        really *good ones*.'*
    -   **sámegielhállin (N):**  
        *Dagat iežat *sámegielhállin*. - 'You make yourself *a Saami
        speaker*.'*
-   **@&gt;P:**  
    Complement of postposition to the left of it.
    -   **oahpu (N), dutkama (N):**  
        *Oahppo- ja dutkanministtar dat lea ráhkadan dieđáhusa alit sámi
        *oahpu* ja *dutkama* birra. - 'The secretary for education and
        research has given a notice about Saami higher *education* and
        *research*.'*
-   **@P&lt;:**  
    Complement of preposition to the right of it.
    -   **oasálaččaid (N):**  
        *Finnmárkkus ii goassige leat leamaš ságastallan gaskal muhtun
        muddui seammadássásaš *oasálaččaid*. - 'There has never been a
        discussion in Finnmark between somehow equal *parts*.'*
-   **@PCLE:**  
    Particle.
    -   **amma (Pcle):**  
        **Amma* mii eat leat máksán? - 'We haven't paid, *have we*?'*
-   **@&lt;PPRED:**  
    a predicative with a predicative as its head
    -   **reaŋgan (N):**  
        *Máhtes lea Jovnna *reaŋgan*. - 'Máhtte has Jovnna *as a
        searvant*.'*
-   **@&gt;Pron:**  
    Modifier of a pronoun to the left of it.
    -   **buot (Pron):**  
        *Mun, Johanas, lean dat guhte lean gullan ja oaidnán *buot*
        dán. - 'I, Johanas, am the one who has heard and seen *all* of
        it.'*
-   **@Pron&lt;:**  
    Modifier of pronoun to the right of it.
    -   **ipmašiid (N):**  
        *Maid *ipmašiid* doppe dagat? - 'What *the heck* are you doing
        there?'*
    -   **golmmas (N):**  
        *Mii *golmmas* oktan du vieljain finaimet Niillas-čeazi
        geahčen. - 'We *three* together with your brother visited uncle
        Niillas.'*
-   **@SPRED:**  
    Subject predicative in elliptical sentences.
    -   **nommh (N):**  
        *Die maa onterligksh nommh, ih goh tuhtjh, men die ligan
        onterligksh nierretjh aaj.*
    -   **:**  
        *(sma)*
-   **@&lt;SPRED:**  
    Subject predicative to the right of the finite verb.
    -   **galbmasat (A):**  
        *Mus leat gieđat nu *galbmasat*. - 'My hands are so *cold*.'*
-   **@SPRED&gt;:**  
    Subject predicative to the left of the finite verb.
    -   **bargu (N):**  
        *Sin *bargun* lei váldit fáŋgan Gonagasa. - 'Their *job* was to
        capture the King.'*
-   **@SUBJ:**  
    Elliptical subject.
    -   **ålma (N):**  
        *Dennie synnagovgesne jis akte ålma maam doenh-aajmoe
        doerelamme.*
-   **@SUBJ&gt;:**  
    Subject to the left of the finite verb.
    -   **son (Pron):**  
        **Son* lea mu oabbá. - '*She* is my sister.'*
-   **@&lt;SUBJ:**  
    Subject to the right of the finite verb.
    -   **ollusat (Pron):**  
        *...ja dan vejolašvuođa orro gal *ollusat* geavahan. - '...and
        this opportunity, *many* seem to make use of.'*
-   **@&lt;SUBJ &lt;ext&gt;:**  
    Subject to the right of the finite verb, in a habitive or extencial
    construction.
    -   **beana (N):**  
        *Mus lea *beana*. - 'I have *a dog*.'*
    -   **luopmánat (N):**  
        *Jeakkis leat *luopmánat*. - 'There are *cloudberries* in the
        swamp.'*
-   **@VOC:**  
    Vocative.
    -   **hearrá:**  
        **Hearrá*, du ráhkis ustit lea buohcci. - '*Lord*, your beloved
        friend is ill.'*
-   **@X:**  
    A dummy tag assigned when no tag assignment rule has hit. This tag
    is useful for finding the flaws in the tag mapping section.
