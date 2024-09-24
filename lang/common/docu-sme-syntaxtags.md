# Documentation of the syntactic tags

See also separate pages on [compound](CompoundTags.html),
[semantic](SemanticTags.html), [morphological](MorphologicalTags.html)
and [dependency](docu-deptags.html) tags.

On the bottom of this page there is a list with all tags in alphabetical
order.

## Syntactic tags

Our syntactic tags, or grammatical function tags, like @SUBJ&gt;, @OBJ&gt;,
etc., are based upon a balanced compromise between 3 principles:

1. use the same tags across _giellalt_ languages
1. use the conventions from within within constraint grammar (CG), e.g. as found in [the visl project](http://visl.sdu.dk/) for interactive syntax learning
1. take the grammatical tradition of the language in question into account

The main difference between the CG tradition (both giellalt and visl CG) and other descriptions is that CG is a linear system, where tags are given to **wordforms**, and not to **phrases**.
Thus, in a sentence like the Saami equivalent of _Peter's dog barks_
only the word _dog_ will get the tag @SUBJ&gt;. The word _Peter's_ gets
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

## The syntactic tags for Saami

We present here the tags used for the Saami languages (the best developed languages in the _Giellalt_ infrastructure), but linguists working on other languages will find the presentation useful. The rules assigning tags are found in the file `lang-xxx/src/cg3/disambiguation.cg3`, where xxx is the ISO code of your language.

### The verb tags

- @+FAUXV @+FMAINV @-FAUXV @-FMAINV

These tags are self-explanatory: there are finite and infinite main and
auxiliary verbs.

### The major function tags

- @&lt;SUBJ (@&lt;SUBJ @&lt;ext&gt;) @SUBJ&gt; @SUBJ @&lt;SPRED
  @SPRED&gt; @SPRED @&lt;OBJ @OBJ&gt; @OBJ @&lt;OPRED @OPRED&gt;
  @OPRED

The four main functions for subject, object and their predicatives are
obvious.

- @-FSUBJ&gt; @-FOBJ&gt; @-F&lt;OBJ

These are tags for the same functions of infinite verbs outside the
verbal: _mu_ gets @-FSUBJ&gt; in _Diet dáhpáhuvai mu dieđikeahttá_ (the
infinite verb gets @&lt;ADVL) and _girjji_ gets @-F&lt;OBJ in _Munnje
lei lossat lohkat girjji._ (the infinite verb gets @&lt;SPRED).

### The adverbial tags

- @ADVL&gt; @&lt;ADVL @ADVL
- @-FADVL
- @PCLE @COMP-CS&lt;
- @P&lt; @&gt;P
- @ADVL&lt; @&gt;ADVL

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

### The NP-internal modifiers

The other syntactic tags for modifiers tell which word they modify, and
whether they modify to the left or to the right.

- @&gt;N @&gt;A @&gt;Num @&gt;Pron
- @Pron&lt; @N&lt; @Num&lt;

The morphological tag will tell what kind of part of speech the
constituent itself is.

The @Pron&lt; tag is for eg. numerals modifying pronouns to their left,
like in _Mii golmmas finaimet máná geahčen_.

The @Num&lt; tag is for complements of numerals, like _máná_ in _Sudnos
leat golbma máná_.

### Appositions

- @APP-N&lt; @APP-Pron&lt; @APP-Num&lt; @APP-ADVL&lt;
- @APP&gt;Pron

The apposition tag marks whether it is an apposition of a noun, a
pronoun, a numeral or an adverbial.

### The function words

- @CNP @CVP

Conjunction connecting NPs and VPs.

### Sentence-external tags

- @HNOUN @INTERJ @VOC

Stray noun in sentence fragment, interjection and vocative.

### The @X tag

- @X

An @X tag is assigned to mark that no tag has been assigned (because of
omissions in our rule component)

## The tags, listed alphabetically

Here is a list of the tags, with a definition or description, and one or
more examples following each of them

- **@+FAUXV:**  
  Finite auxiliary verb.
  - **ferte (V):**  
    Sámi geavaheddjiid bálvalusaid vuođđun _ferte_ leat
    sámegielmáhttu ja sámi kulturmáhttu. - 'Saami user services
    _need_ to be based on Saami language competence and Saami
    cultural competence.'
- **@+FMAINV:**  
  Finite main verb.
  - **Boađe (V):**  
    _Boađe_ boahtte vahku. - '_Come_ next week.'
- **@-F&lt;ADVL:**
  - **árbbolaččain (N):**  
    Danne dárbbašit mii oažžut lobi Nils Aslak Valkeapää
    _árbbolaččain_ almmuhit dán guokte lávlaga min sálbma-CD:s. -
    'Therefore we need to get permission from Nils Aslak Valkeapää's
    _heirs_ to release these two songs on our psalm-CD.'
- **@-F&lt;OBJ:**  
  Object of infinite verb outside the verbal.
  - **govaid (N):**  
    Boađe mu lusa geahččat _govaid_! - 'Come to me and look at _the
    pictures_!'
- **@-F&lt;OPRED:**  
  Object predicative of infinite verb outside the verbal.
  - **xxx:**  
    _xxx_
- **@-F&lt;SPRED:**  
  Subject predicative of infinite verb outside the verbal.
  - **xxx:**  
    _xxx_
- **@&gt;A:**  
  Modifier of an adjective to the left.
  - **nu (Adv):**  
    Gulahallan Sámedikkiin dán gažaldagas šaddá _nu_
    konkrehtalažžan go vejolaš. - 'The discussion in the Saami
    Parliament about this issue gets _as_ concrete as possible.'
- **@A&lt;:**  
  Modifier of an adjective to the right.
  - **básárdoaluin (N):**  
    IL Nordlysa beaivválaš jođiheaddji, Nils Peder Eriksen, lohká
    iežaset leat oalle duhtavaččat dán jagáš _básárdoaluin_. - 'The
    business manager of IL Nordlys, Nils Peder Eriksen, says he is
    really satisfied with this year's _bazar arrangment_.'
- **@ADVL:**  
  Sentence adverbial, @ADVL&gt; or @&lt;ADVL.
- **@&gt;ADVL:**  
  Modifier of an adverbial.
  - **Man (Adv):**  
    _Man_ dávjá don lávet fitnat doppe? - '_How_ often do you
    usually go there?'
- **@&lt;ADVL:**  
  adverbial to the right of the finite verb
  - **beaivvážis (N):**  
    Gávpot ii dárbbaš čuovgga _beaivvážis_ ii ge mánus. - 'The city
    does not need light _from the sun_ and not the from the moon
    either.
- **@ADVL&gt;:**  
  Adverbial to the left of the finite verb.
  - **lasttain (N):**  
    Ja muora _lasttain_ ožžot álbmogat dearvvašvuođa. - 'And from
    the tree's _leaves_, the people get health.'
- **@ADVL&lt;:**  
  Complement of an adverbial to the right of its head.
  - **vahkus (N):**  
    Mun málestan guktii _vahkus_. - 'I make food twice a _week_.'
- **@ADVL&gt;CS:**  
  adverbial modifying a conjunction
  - **dallah (Adv):**  
    _Dallah_ goh Jeesuse tjaetseste tjuedtjele, dellie vuajna Elmie
    rihpesåvva jih Voejkene altasasse goh ledtie suaja. - '_Right_
    after Jesus stood up from the water, he sees that heaven opens
    and the holy spirit flies to him like a bird.'
  - **:**  
    _(sma)_
- **@APP-ADVL&lt;:**  
  Apposition to an adverbial to the left. If the apposition consists
  of more than one word, the head will get this tag.
  - **ovdal (Pr):**  
    Dolin, _ovdal_ soađi, olbmot lávejedje vuovdit joŋaid. - 'In
    old times, _before_ the war, people used to sell cowberries.'
- **@APP-N&lt;:**  
  Apposition to a noun to the left of it. If the apposition is more
  than one word, the head will get this tag.
  - **eatnigiela (N):**  
    Viimmat mun ohppen čállit sámegiela, mu _eatnigiela_. -
    'Finally, I learned to write in Sámi, my _mother tongue_.'
- **@APP-Num&lt;:**  
  Apposition to a numeral to the left.
  - **suinniid (N):**  
    Juohke heasta borrá sullii 6 kilu _suinniid_ beaivái. - 'Every
    horse eats approximately 6 kilograms of _grass_ a day.'
- **@APP&gt;Pron:**  
  Apposition to a pronoun to the right. If the apposition is more than
  one constituent, the head will get this tag.
  - **Turner (N Prop):**  
    Muhto diet Will _Turner_, son nai lea fiinna olmmái. - 'But
    this Will _Turner_, he is also a nice guy.'
- **@APP-Pron&lt;:**  
  Apposition to a pronoun to the left. If the apposition is more than
  one constituent, the head will get this tag.
  - **olbmái (N):**  
    Dan mun muitalan dušše dutnje, mu buoremus _olbmái_. - 'This I
    tell only you, my best _friend_.'
- **@CMPND:**  
  First part of a compound followed by a hyphen
  - **skaehtie-:**  
    Reerenasse galka båetije stoerredigkieboelhkesne jåerhkedh dam
    \*skaehtie-_ jïh åasadaltesem mij lea daelie, jïh daennie
    daltesisnie hov lea nuepie buerebe joekedimmiem darjodh._
- **@CNP:**  
  Local conjunction or subjunction.
  - **ja (CC):**  
    Sihke Mázes _ja_ Guovdageainnus leat boarrásat viššalit finadan
    doaibmaguovddážiin. - 'Both in Máze _and_ Guovdageaidnu, the
    oldest people frequently got to the activitycentre.'
  - **go (CS):**  
    Sámi geavaheaddjit hállet dávjá metaforaiguin ja sis leat ollu
    eará gulahallanvuogit _go_ giella. - 'Saami users speak often in
    metaphores and the have many other ways of comunicating _than_
    by means of language.'
- **@COMP-CS&lt;:**  
  Complement of subjunction.
  - **vejolaš (A):**  
    Gulahallan Sámedikkiin dán gažaldagas šaddá nu konkrehtalažžan
    go _vejolaš_. - 'The contact with the Saami Parliament about
    this issue gets as concrete as _possible_.'
- **@CVP:**  
  Conjunction or subjunction that conjoins finite verb phrases.
  - **ja (CC):**  
    Bealatjogas leat dološ rájes leamaš bálvvossajit _ja_ dát
    golbma sieiddi ledje dovddus gitta olgoriikii. - 'Long since,
    there have been sacrificial sites at Bealatjohka _and_ the three
    'sieidi' (cult images) were known even abroad.
  - **go (CS):**  
    Leago guhkes áigi dassá _go_ Máreha oidnet? - 'Has it been a
    long time _since_ you have seen Máret?'
- **@-FADVL&gt;:**  
  Complement of infinite verb outside the verbal.
  - **várrogasat (Adv):**  
    Dihkkadeaddji rávve skohtervuddjiid _várrogasat_ mátkkoštit.
    'The roadman warns snowscooter drivers to drive _carefully_.'
- **@-FAUXV:**  
  Infinite auxiliary verb.
  - **sáhte (V):**  
    Eat mii _sáhte_ vuolgit. - 'We *can*not leave.'
- **@-FMAINV:**  
  Infinite main verb.
  - **geargan (V):**  
    Ja Biret-Elle lea easka skuvllas _geargan_. - 'And Biret-Elle
    has just _finished_ school.'
- **@-FOBJ&gt;:**  
  Object of infinite verb outside the verbal.
  - **váldovuoittuid (N):**  
    Valáštallanhálla lei njealjehas dievva olbmuiguin geat vurde
    _váldovuoittuid_ fasket. - 'The gymn was to a quarter full of
    people that wait to grab _the main prizes_.'
- **@-FSUBJ&gt;:**  
  Subject of infinite verb outside the verbal.
  - **mu (Pron):**  
    Diet dáhpáhuvai _mu_ dieđikeahttá. - 'It happened without _me_
    knowing about it.'
- **@ADVL&gt; &lt;hab&gt;:**  
  Habitive to the left of the finite verb.
  - **Máhtes (N):**  
    _Máhtes_ lea beana. - '_Máhtte_ has a dog.'
- **@&lt;ADVL &lt;hab&gt;:**  
  Habitive to the right of the finite verb.
  - **dus (Pron):**  
    Leago _dus_ ruhta? - 'Do _you_ have money?'
- **@HNOUN:**  
  Stray noun in sentence fragments.
  - **boddu (N):**  
    Vuosttaš _boddu_. - 'First _lesson_.'
- **@INTERJ:**  
  Interjection.
  - **maid (Interj):**  
    _Maid_, iigo leat boahtán? - '_What_, hasn't he/she come?'
- **@&gt;N:**  
  Prenominal modifier to the left
  - **geavatlaš (A):**  
    Ráđđehussii lea _geavatlaš_ politihkka deaŧalaš. - 'For the
    government, _practical_ politics is important.'
  - **oahppo-:**  
    _Oahppo-_ ja dutkanministtar dat lea ráhkadan dieđáhusa alit
    sámi oahpu ja dutkama birra. - 'The secretary for _education_
    and research has given a notice about Saami higher education and
    research.'
  - **rektor (N):**  
    _Rektor_ Tove Bull álgaga mielde... - 'According to _principal_
    Tove Bull ...'
  - **Tove (N Prop):**  
    Rektor _Tove_ Bull álgaga mielde... - 'According to principal
    _Tove_ Bull ...'
- **@N&lt;:**  
  Modifier of the noun to the left.
  - **33 (Num):**  
    Mun lean ilus go beasan ovdanbuktit St.dieđ. nr. _33_. - 'I am
    happy that I get the opportunity to present the parliament
    notice number _33_.'\* (In this case _33_ modifies _St.dieđ._.)
  - **vihtta (Num):**  
    Mun boađán diibmu _vihtta_. - 'I will come at _five_ o'clock.'
- **@&gt;Num:**  
  Attributes of numeral to the right.
  - **nr (N):**  
    Mun lean ilus go beasan ovdanbuktit St.dieđ. _nr._ 33. - 'I am
    happy that I get the opportunity to present the parliament
    notice _number_ 33.'
- **@Num&lt;:**  
  Attributes of numeral to the left.
  - **jagi (N):**  
    Son lea guoktelogi _jagi_ boaris. - 'She/he is twenty _years_
    old.'
- **@&lt;OBJ:**  
  Direct object to the right of the finite verb.
  - **áiggi (N):**  
    Dat gáibida ollu _áiggi_. - 'That demands a lot of _time_.'
- **@OBJ&gt;:**  
  Direct object to the left of the finite verb.
  - **maid (Pron):**  
    Filbma lea oassi prošeavttas _maid_ Sámi instituhtta lea
    ruthadan. - 'The film is a part of the project _that_ the Saami
    institute has financed.'
- **@OPRED&gt;:**  
  Object predicative to the left of the finite verb.
  - **luoikkasin (N):**  
    Gaup dojii stivrrana hárjehallamiin, muhto oaččui _luoikkasin_
    eará stivrrana. - 'Gaup broke the handlebars during the
    practises, but got to _borrow_ another steering.'
- **@&lt;OPRED:**  
  Object predicative to the right of the finite verb.
  - **buriid (A):**  
    Gáhkkuid son ráhkada hui _buriid_. - 'Cakes, she/he makes
    really _good ones_.'
  - **sámegielhállin (N):**  
    Dagat iežat _sámegielhállin_. - 'You make yourself _a Saami
    speaker_.'
- **@&gt;P:**  
  Complement of postposition to the left of it.
  - **oahpu (N), dutkama (N):**  
    Oahppo- ja dutkanministtar dat lea ráhkadan dieđáhusa alit sámi
    _oahpu_ ja _dutkama_ birra. - 'The secretary for education and
    research has given a notice about Saami higher _education_ and
    _research_.'
- **@P&lt;:**  
  Complement of preposition to the right of it.
  - **oasálaččaid (N):**  
    Finnmárkkus ii goassige leat leamaš ságastallan gaskal muhtun
    muddui seammadássásaš _oasálaččaid_. - 'There has never been a
    discussion in Finnmark between somehow equal _parts_.'
- **@PCLE:**  
  Particle.
  - **amma (Pcle):**  
    _Amma_ mii eat leat máksán? - 'We haven't paid, _have we_?'
- **@&lt;PPRED:**  
  a predicative with a predicative as its head
  - **reaŋgan (N):**  
    Máhtes lea Jovnna _reaŋgan_. - 'Máhtte has Jovnna _as a
    searvant_.'
- **@&gt;Pron:**  
  Modifier of a pronoun to the left of it.
  - **buot (Pron):**  
    Mun, Johanas, lean dat guhte lean gullan ja oaidnán _buot_
    dán. - 'I, Johanas, am the one who has heard and seen _all_ of
    it.'
- **@Pron&lt;:**  
  Modifier of pronoun to the right of it.
  - **ipmašiid (N):**  
    Maid _ipmašiid_ doppe dagat? - 'What _the heck_ are you doing
    there?'
  - **golmmas (N):**  
    Mii _golmmas_ oktan du vieljain finaimet Niillas-čeazi
    geahčen. - 'We _three_ together with your brother visited uncle
    Niillas.'
- **@SPRED:**  
  Subject predicative in elliptical sentences.
  - **nommh (N):**  
    _Die maa onterligksh nommh, ih goh tuhtjh, men die ligan
    onterligksh nierretjh aaj._
  - **:**  
    _(sma)_
- **@&lt;SPRED:**  
  Subject predicative to the right of the finite verb.
  - **galbmasat (A):**  
    Mus leat gieđat nu _galbmasat_. - 'My hands are so _cold_.'
- **@SPRED&gt;:**  
  Subject predicative to the left of the finite verb.
  - **bargu (N):**  
    Sin _bargun_ lei váldit fáŋgan Gonagasa. - 'Their _job_ was to
    capture the King.'
- **@SUBJ:**  
  Elliptical subject.
  - **ålma (N):**  
    _Dennie synnagovgesne jis akte ålma maam doenh-aajmoe
    doerelamme._
- **@SUBJ&gt;:**  
  Subject to the left of the finite verb.
  - **son (Pron):**  
    _Son_ lea mu oabbá. - '_She_ is my sister.'
- **@&lt;SUBJ:**  
  Subject to the right of the finite verb.
  - **ollusat (Pron):**  
    ...ja dan vejolašvuođa orro gal _ollusat_ geavahan. - '...and
    this opportunity, _many_ seem to make use of.'
- **@&lt;SUBJ &lt;ext&gt;:**  
  Subject to the right of the finite verb, in a habitive or extencial
  construction.
  - **beana (N):**  
    Mus lea _beana_. - 'I have _a dog_.'
  - **luopmánat (N):**  
    Jeakkis leat _luopmánat_. - 'There are _cloudberries_ in the
    swamp.'
- **@VOC:**  
  Vocative.
  - **hearrá:**  
    _Hearrá_, du ráhkis ustit lea buohcci. - '_Lord_, your beloved
    friend is ill.'
- **@X:**  
  A dummy tag assigned when no tag assignment rule has hit. This tag
  is useful for finding the flaws in the tag mapping section.
