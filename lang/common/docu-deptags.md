# Dependency tree

Se also seperate pages on [compound](CompoundTags.html),
[semantic](SemanticTags.html), [syntactic](docu-sme-syntaxtags.html) and
[morphological](MorphologicalTags.html) tags.

By means of the dependency parser found in the file `dependency.cg3` the CG output is turned
into dependency trees. The root, which does not have a head to depend
on, is marked by the number 0. The element that depends on the head is marked by an arrow pointing at 0 ("-&gt;0"). Each token gets a number (\#) and the a dependency link specifying a target head (-&gt;). The second word in the sentence for example receives the number 2. If it is a dependent of the root, it gets the tag ("\#2-&gt;0"). The CG verb tags are substitued
with other tags. Here is an example taken from North Saami, _Muitaleastte fal munnje goas doavttir sáhttá boahtit_ ("Now, tell me when the doctor will be able to come"):

    "<Muitaleastte>"
        "muitalit" V* TV Der2 Der/easti <mv> V Imprt Sg2 @FMV #1->0
    "<fal>"
        "fal" Adv @<ADVL #2->1
    "<munnje>"
        "mun" Pron Pers Sg1 Ill @<ADVL #3->1
    "<goas>"
        "goas" Adv @ADVL> #4->7
    "<doavttir>"
        "doavttir" N Sg Nom @SUBJ> #5->6
    "<sáhttá>"
        "sáhttit" <aux> V IV Ind Prs Sg3 @FS-STA #6->1
    "<boahtit>"
        "boahtit" <mv> V IV Inf @FS-IMV #7->6
    "<.>"
        "." CLB #8->8


        Muitaleastte
         /    \     \
       fal  munnje   \
                    sáhttá
                    /   \
            doavttir    boahtit.
                            \
                            goas

Our dependency structure is based upon a compromise between the Saami
grammatical tradition and the conventions used within [the visl
project](http://beta.visl.sdu.dk/visl/da/parsing/automatic/dependency.php).

## Verb tags

The Saami disambiguation file `disambiguator.cg3` adds dependency tags to each
cohort. The CG verb tags are substituted with these tags:

- &lt;mv&gt; &lt;aux&gt;

There are main verbs and auxiliary verbs.

- @FMV @FAUX @IMV @IAUX

In main clauses: Finite main verb and auxiliary verb, and infinite main
verb and auxiliary verb.

- @FS-STA @FS-N&lt;

@FS is a finite verb in a subclause. The first one in a subclause which
functions as a statement, the latter one in a relative subclause.

- @FS-IMV @FS-IAUX @FS-N&lt;IMV @FS-N&lt;IAUX

These are infinite main verbs and auxiliary verbs in an ordinary
subclause and in a relative subclause.

- &lt;ctjHead&gt;

This tag helps in coordination contexts.

## Dependency tags alphabetically

Dependency tags look different from syntactic grammar tags.

- **@&gt;A:**  
  Modifier of an adjective to the left.
  - **nu (Adv):**
    - Gulahallan Sámedikkiin dán gažaldagas šaddá _nu_
      konkrehtalažžan go vejolaš. - 'The discussion in the Saami
      Parliament about this issue gets _as_ concrete as possible.'
- **@A&lt;:**  
  Modifier of an adjective to the right.
  - **:**
- **@&gt;Adv:**  
  Modifier of an adverb.
  - **:**
- **@Adv&lt;:**  
  Complement of an adverb.
  - **:**
- **@ADVL:**  
  Sentence adverbial.
  - **dál (Adv):**  
    _Dál_ lea Bireha vuorru. - 'It is Biret's turn _now_.'
- **@&gt;ADVL:**  
  Modifier of an adverbial.
  - **Man (Pron):**  
    _Man_ dávjá don lávet fitnat doppe? - '_How_ often do you
    usually go there?'
- **@&lt;ADVL:**  
  adverbial to the right of the finite verb
  - **beaivvážis (N):**
    - Gávpot ii dárbbaš čuovgga _beaivvážis_ ii ge mánus. - 'The city
      does not need light _from the sun_ and not the from the moon
      either.
- **@ADVL&lt;:**  
  Complement of an adverbial.
  - **vahkus (N):**  
    Mun málestan guktii _vahkus_. - 'I make food twice a _week_.'
- **@ADVL&gt;:**  
  Adverbial to the left of the finite verb.
  - **lasttain (N):**  
    Ja muora _lasttain_ ožžot álbmogat dearvvašvuođa. - 'And from
    the tree's _leaves_, the people get health.'
- **@ADVL&gt;CS:**  
  adverbial modifying a conjunction
  - **dallah (Adv):**  
    _Dallah_ goh Jeesuse tjaetseste tjuedtjele, dellie vuajna Elmie
    rihpesåvva jih Voejkene altasasse goh ledtie suaja. - '_Right_
    after Jesus stood up from the water, he sees that heaven opens
    and the holy spirit flies to him like a bird.'  
    (_sma_)
  - **dan dihte (Adv):**  
    Muhto go lassánedje olbmot, de bohte čáhppesbivttasolbmot fas
    dohko, gosa ledje sámit vuohččan ballán, ja dahke orohagaid jur
    dasa gos sámit ledje orrume, _dan dihte_ go sii oidne, ahte das
    leai čáppa gieddi, maid ledje bohccot dutken, gožžan ja baikán —
    gos ledje sámit orron mánga olmmošbuolvva.
- **@ADVL&lt;OBJ:**
  - **:**
- **@ADVL&gt;SUBJ:**
  - **:**
- **@AGENS&gt;:**  
  kal
  - **atorfilittanit:**  
    _Attartortumiit piginnittumut aaqqissuussineq
    namminersornerusuni atorfilittanit politikerinillu nuimasunit
    isertortumik atornerlunneqarsimammat illoqarfinni anginerni
    pingasuni attartortut nalinginnaasut pillarneqartussanngorput._
- **@APP-ADVL&lt;:**  
  Apposition to an adverbial to the left. If the apposition consists
  of more than one word, the head will get this tag.
  - **ovdal (Pr):**  
    Dolin, _ovdal_ soađi, olbmot lávejedje vuovdit joŋaid. - 'In
    old times, _before_ the war, people used to sell cowberries.'
- **@APP-N&lt;:**  
  Apposition to a noun to the left of it. If the apposition is more
  than one constituent, the head will get this tag.
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
- **@&gt;CC:**  
  modifier of CC
  - **sihke (CC):**
- **@&gt;CC:**  
  modifier of CC
  - **sihke (CC):**
- **@CL-ADVL&gt;:**
  - **:**
- **@CL-&lt;ADVL:**
  - **:**
- **@CMPND:**  
  First part of a compound followed by a hyphen
  - **skaehtie-:**  
    Reerenasse galka båetije stoerredigkieboelhkesne jåerhkedh dam
    _skaehtie-_ jïh åasadaltesem mij lea daelie, jïh daennie
    daltesisnie hov lea nuepie buerebe joekedimmiem darjodh.
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
- **@COMPL-CS&lt;:**  
  Complement of subjunction.
  - **vejolaš (A):**  
    Gulahallan Sámedikkiin dán gažaldagas šaddá nu konkrehtalažžan
    go _vejolaš_. - 'The contact with the Saami Parliament about
    this issue gets as concrete as _possible_.'
- **@CVP:**  
  Conjunction or subjunction that conjoins finite verb phrases
  - **ja (CC):**  
    Bealatjogas leat dološ rájes leamaš bálvvossajit _ja_ dát
    golbma sieiddi ledje dovddus gitta olgoriikii. - 'Long since,
    there have been sacrificial sites at Bealatjohka _and_ the three
    'sieidi' (cult images) were known even abroad.
  - **go (CS):**  
    Leago guhkes áigi dassá _go_ Máreha oidnet? - 'Has it been a
    long time _since_ you have seen Máret?'
- **@FAUX:**  
  finite auxiliary
  - **ledje (V):**  
    Gávpotmuvrra vuođđogeađggit _ledje_ čiŋahuvvon juohke lágán
    divrras geđggiiguin. - 'The cornerstones of the wall _were_
    decorated with every kind of expensive stones.'
- **@-F&lt;ADVL:**  
  Adverbial of infinite verb outside of the predicate
  - **árbbolaččain (N):**  
    Danne dárbbašit mii oažžut lobi Nils Aslak Valkeapää
    _árbbolaččain_ almmuhit dán guokte lávlaga min sálbma-CD:s. -
    'Therefore we need to get permission from Nils Aslak
    Valkeapää's _heirs_ to release these two songs on our
    psalm-CD.'
- **@-FADVL&gt;:**  
  Adverbial of infinite verb outside the predicate
  - **várrogasat (Adv):**  
    Dihkkadeaddji rávve skohtervuddjiid _várrogasat_ mátkkoštit.
    'The roadman warns snowscooter drivers to drive _carefully_.'
- **@FMV:**  
  finite mainverb
  - **lei (V):**  
    Gávpot lei njealječiegat, seammá guhkki go govdat. - 'The city
    _was_ a square, same width as length.'
- **@FMVdic:**
  - **muitala (V):**  
    Ja go geassit eret dábálaš goluid, de lea buhtes sisaboahtu
    sullii 100 000 ruvnnu, _muitala_ Eriksen. - 'And when we take
    away/subtract? the regular expenses, there is a remaining income
    of about 100 000 crowns, _says_ Eriksen.'
- **@-F&lt;OBJ:**  
  Object of infinite verb outside the verbal to the right of it.
  - **govaid (N):**  
    Boađe mu lusa geahččat _govaid_! - 'Come to me and look _at
    the pictures_!'
- **@-FOBJ&gt;:**  
  Object of infinite verb outside the verbal to the left of it.
  - **váldovuoittuid (N):**  
    Valáštallanhálla lei njealjehas dievva olbmuiguin geat vurde
    _váldovuoittuid_ fasket. - 'The gymn was to a quarter full of
    people that wait to grab _the main prizes_.'
- **@-F&lt;SPRED:**
  - **duhtavaččat (A):**  
    IL Nordlysa beaivválaš jođiheaddji, Nils Peder Eriksen, lohká
    iežaset leat oalle _duhtavaččat_ dán jagáš básárdoaluin.
- **@FM-SPRED&lt;:**  
  main clause functioning as a subject predicate to the right of
  another main clause
  - **ii (V):**  
    Ja dasa lea dát sivva: go sápmelaš boahtá moskkus gámmirii, de
    son ii _ii_ ipmir ii báljo maidege, go ii biegga beasa bossut
    njuni vuostá. - 'And this is the reason: if a Saami comes ...,
    then he does _not_ understand ...'
- **@FS-ADVL&gt;:**  
  subclause functioning as an adverbial to the finite verb of the main
  clause to the right of it.
  - **bohtet (V):**  
    Ja mo jos Muhtinlágan Stálu ustibat _bohtet_ fitnat. - 'And
    what if the friends of some-kind-of troll _come_ for a visit.'
- **@FS-&lt;ADVL:**  
  subclause functioning as an adverbial to the finite verb of the main
  clause to the left of it.
  - **galggai (V):**  
    Go _galggai_ bargat rehkenastimiin sus šattai álo
    oaivvebávččas. - 'When they _should_ work with arithmetics, she
    always got a headache.'
- **@FS-IAUX:**  
  subclause infinite auxiliary
  - **sáhte:**  
    Mun in _sáhte_ muitalit dán dutnje. - 'I *can*not tell you
    this.'
- **@FS-IMV:**  
  subclause infinite mainverb
  - **ohcamin (V):**  
    Naba jos eadni lea sudno _ohcamin_, iige gávnna. - 'And if
    mother is _searching_ for them, she will not find them.'
- **@FS-N&lt;:**  
  finite verb (either an auxiliary or main verb) of a relative
  subclause (with a noun (N) antecedent)
  - **lea (V):**  
    De son viežžá liegga liema ruittus mii _lea_ oapmana alde.
    'Then he fetched warm broth from the pot that _is_ on the
    stove.'
- **@FS-N&lt;IAUX:**  
  infinite auxiliary of a (relative) subclause
  - **sáhttán (V):**  
    Mun oidnen nieidda gii ii _sáhttán_ boahtit. - 'I saw the girl
    that _could_ not come.'
- **@FS-N&lt;IMV:**  
  infinite mainverb of a (relative) subclause
  - **bargan (V):**  
    Mon lean okta sápmelaš, guhte lean _bargan_ visot sámi bargguid
    ja mon dovddan visot sámi dili. - 'I am a Sámi, who has
    _worked_ in all Saami occupations and I know all Saami
    affairs.'
- **@FS-OBJ:**  
  finite verb of the subclause that has an object function
  - **leahkkasii (V):**  
    Arne ii fuobmán ahte uksa _leahkkasii_. - 'Arne did not notice
    that the door _opened_.'
- **@FS-OBJ&gt;:**  
  finite verb of a subclause that has object function used for kal
  e.g.
  - **pigilissagaa (V):**  
    _Nunani issittuni sila pillugu tunngaviusumik ilisimasalernissaq
    silamut ilisimatusarfiup pigilissagaa ministerit marluullutik
    isumaqatigiipput, silallu allanngoriartornerata sunniutai
    maluginiarneqassasut._
- **@FS-P&lt;:**  
  finite verb of a subclause
  - **eru (V):**  
    _Tað er ikki longur pláss fyri, at lutir og kenslur bara eru. -
    'There is no longer any space for that things and feelings
    simply are.'_
  - **:**  
    _(fao)_
- **@FS-P&lt;IMV:**  
  finite verb of a subclause in fao
  - **:**
- **@-F&lt;OPRED:**
  - **:**
- **@-FSUBJ&gt;:**  
  subject of a verbal infinitival object
  - **mánáid (N):**  
    Muhtinlágan Stállu cáhpá goikebierggu sudnuide ja dáhttu
    _mánáid_ boradit. - 'Some-sort-of troll cuts dried meat for them
    and asks _the children_ to eat.'
- **@FS-SUBJ:**  
  finite verb head of a subordinate clause functioning as a subject
  - **boađát (V):**  
    Dehálaš lea ahte don maid _boađát_. - 'It is important that you
    _come_ too.'
- **@FS-VFIN&lt;:**
  - **eai (V):**  
    Idja ii leat šat, _eai_ ge sii dárbbaš lámppá dahje beaivváža
    čuovgga, dasgo Hearrá Ipmil lea sin čuovga. - 'The night is not
    anymore, they do _not_ need the lamp- or day- light either,
    because God the Lord is their light.'
- **@HAB:**  
  Habitive, for a human target in illative or locative in a habitive
  construction (copula), is translated as "have". Possible verbs in a
  habitive construction are "boahtit" 'come', "leat" 'be', "goallut"
  'pass', "heaŋgát", 'hang', "jápmit" 'die', "šaddat" 'become'.
  - **Máhtes (N):**  
    _Máhtes_ lea beana. - '_Máhtte_ has a dog.'
  - **sus (Pron):**  
    _Sus_ šattai álo oaivvebávččas go galggai bargat
    rehkenastimiin. - '_She_ always got a headache when she was
    supposed to work with arithmetics.'
- **@HNOUN:**  
  Stray noun in sentence fragments.
  - **boddu (N):**  
    Vuosttaš _boddu_. - 'First _lesson_.'
- **@IAUX:**  
  non-finite auxiliary
  - **veaje (V):**  
    Dattetge ii _veaje_ oađđit. - 'Still she did not _manage_ to
    sleep.'\*
- **@ICL-ADVL:**  
  infinitival clause adverbial
  - **árvvoštallat (V):**  
    Son namuha ahte sii leat gal ávžžuhan olbmuid geat dihtet ahte
    dárbbašit jođánit beassat buohccevissui, nugo ovdamearkka dihte
    áhpehis nissonolbmuid geain lahkona riegádahttináigi,
    árvvoštallat\* galget go ovdal go buohccájit juo vuolgit
    buohccevissui.
- **@ICL-OBJ:**  
  infinitival clause object
  - **boradit (V):**  
    Muhtinlágan Stállu cáhpá goikebierggu sudnuide ja dáhttu mánáid
    _boradit_. - 'Some-sort-of troll cuts dried meat for them and
    asks the children _to eat_.'
- **@ICL-P&lt;:**  
  infinitival complement of a preposition
  - **skriva (V):**  
    _Kenslan gav Unn íblástur til at skriva nakrar yrkingar um
    næstrakærleika._
  - **:**  
    _(fao)_
- **@ICL-SUBJ:**  
  infinitival subject
  - **sløkkja (V):**  
    _Men tað er líka skjótt at sløkkja ljósið, lata eygu og oyru
    aftur og rista ábyrgdina av okkum._
  - **:**  
    _(fao)_
- **@IM:**  
  fao
  - **at (IM):**  
    _Tá koyrdi Harrin Guð hann út úr aldingarðinum í Eden og setti
    hann til at dyrka ta jørð, sum hann var sjálvur tikin av._
- **@IMV:**  
  non-finite mainverb
  - **čiŋahuvvon (V):**  
    Gávpotmuvrra vuođđogeađggit ledje _čiŋahuvvon_ juohke lágán
    divrras geđggiiguin. - 'The cornerstones of the wall were
    _decorated_ with every kind of expensive stones.'
- **@INF-&gt;N:**  
  kal
  - **pillugu (V):**  
    _Nunani issittuni sila pillugu tunngaviusumik ilisimasalernissaq
    silamut ilisimatusarfiup pigilissagaa ministerit marluullutik
    isumaqatigiipput, silallu allanngoriartornerata sunniutai
    maluginiarneqassasut._
- **@INTERJ:**  
  Interjection.
  - **maid (Interj):**  
    _Maid_, iigo leat boahtán? - '_What_, hasn't he/she come?'
- **@&lt;IOBJ:**  
  indirect object to the right of the finite verb.
  - **(N):**
- **@IOBJ&gt;:**  
  Indirect object to the left of the finite verb.
  - **(N):**
- **@MIK-OBJ:**  
  kal
  - **illunik (N):**  
    Namminersornerusut Nuummi _illunik_ ima amerlatigisunik
    tunisaqarsimalerput aningaasanut inatsit
    iluatsitaariniarfigisariaqalerlugu inissianik isatereriarlutik
    nutaanik sanaartortariaqaleramik atorfilittatik naammaginartunik
    inissaqartissinnaajumallugit.
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
  - **maid:**  
    Filbma lea oassi prošeavttas _maid_ Sámi instituhtta lea
    ruthadan. - 'The film is a part of the project that the Saami
    institute has financed.'
- **@OPRED&gt;:**  
  Object predicative to the left of the finite verb.
  - **luoikkasin (N):**  
    Gaup dojii stivrrana hárjehallamiin, muhto oaččui _luoikkasin_
    eará stivrrana. - 'Gaup broke the handlebars during the
    practises, but got to _borrow_ another steering.'
- **@&lt;OPRED:**  
  Object predicative.
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
- **@POSS&gt;:**  
  kal
  - **Jiisusi-Kristusip (N):**  
    _Jiisusi-Kristusip_, Daavip ernerata, Aaperaap ernerata,
    eqqarliisa allassimaffiat.
- **@PPRED:**  
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
    onterligksh nierretjh aaj. - ' '_
  - **:**  
    _(sma)_
- **@&lt;SPRED:**  
  Subject predicative to the right of the finite verb.
  - **galbmasat (A):**  
    Mus leat gieđat nu _galbmasat_. - 'My hands are so _cold_.'
  - **beana (N):**  
    Mus lea _beana_. - 'I have _a dog_.'
- **@SPRED&gt;:**  
  Subject predicative to the right of the finite verb.
  - **vuođđun (N):**  
    Kommišuvnna evttohusaid _vuođđun_ lea guohtundilalašvuođaid
    vuđolaš čielggadeapmi, man fágalávdegotti ášše-dovdit dahke.
- **@SPRED&lt;OBJ:**
  - **:**
- **@SUBJ:**  
  Elliptical subject.
  - **ålma (N):**  
    _Dennie synnagovgesne jis akte ålma maam doenh-aajmoe
    doerelamme. - ' '_
- **@SUBJ&gt;:**  
  Subject to the left of the finite verb.
  - **son (Pron):**  
    _Son_ lea mu oabbá. - '_She_ is my sister.'
  - **luopmánat (N):**  
    Jeakkis leat _luopmánat_. - 'There are _cloudberries_ in the
    swamp.'
- **@&lt;SUBJ:**  
  Subject to the right of the finite verb.
  - **ollusat (Pron):**  
    ...ja dan vejolašvuođa orro gal _ollusat_ geavahan. - '...and
    this opportunity, _many_ seem to make use of.'
- **@SUBJ&lt;ADVL:**
  - **:**
- **@SUBJ_COMP:**  
  fao
  - **:**
- **@&lt;SUBJ_COMP:**  
  predicate of a subject/ subject complement (kal)
  - **:**
- **@SUBJ&lt;OBJ:**
  - **:**
- **@tSUBJ:**  
  Elliptical subject.
  - **tað (Pron):**  
    _Tað_ er ikki longur pláss fyri, at lutir og kenslur bara eru.
- **@i-ADVL&gt;:**  
  kal
  - **Babylonimut (N):**  
    _Josijap Jekonja qatanngutaalu Babylonimut aallarussaanerup
    nalaani._
- **@i-&gt;&lt;ADVL:**  
  kal
  - **pruffiitikkut (N):**  
    Tamakku tamarmik pipput Naalakkap _pruffiitikkut_ oqaaserisaa
    eqquuteqqullugu, oqarmat: »Takuat, niviarsiaq naartulissaaq
    ernertaassallunilu, atsissavaallu Immanuelimik« – imaappoq:
    Guuti ilagaarput.
- **@i-&gt;N:**  
  kal
  - **naammaginartunik (N):**  
    Namminersornerusut Nuummi illunik ima amerlatigisunik
    tunisaqarsimalerput aningaasanut inatsit
    iluatsitaariniarfigisariaqalerlugu inissianik isatereriarlutik
    nutaanik sanaartortariaqaleramik atorfilittatik _naammaginartunik_
    inissaqartissinnaajumallugit.
- **@i-&gt;V:**  
  kal
  - **tutinneq (N):**  
    Ernertaartinnaguli _tutinneq_ ajorpaa.
- **&gt;@V:**  
  kal
  - **:**
- **@VOC:**  
  Vocative.
  - **hearrá:**  
    _Hearrá_, du ráhkis ustit lea buohcci. - _Lord_, your beloved
    friend is ill.'
- **&lt;ctjHead&gt;:**  
  coordinated head, can be of different PoS' (V, A, N ...). The PoS
  taking part in coordination do not necessarily be of the same kind.
  The tag is useful if the coordinated part does not directly follow
  it's predecessor.
  - **geahččá:**  
    Dat _geahččá_ nuppiid stáluide girkes čalmmiiguin ja reašká
    romet. - 'He/she _looks_ at the other trolls with clear eyes
    and laughs hideously.'
  - **stuorrát:**  
    Gieđat leat _stuorrát_ dego steaikabánnot ja guolgan. - 'The
    hands are as _big_ as fryingpans and covered with hair.'
  - **soalsin:**  
    Skávžá lea buot _soalsin_ ja njuoskkas. - 'The beard is all
    _covered with spit_ and wet.'
- **&lt;mv&gt;:**  
  main verb, especially useful in cases where the verb can be both a
  main verb and an auxiliary
  - **dárbbašit, oažžut:**  
    Danne _dárbbašit_ mii _oažžut_ lobi Nils Aslak Valkeapää
    árbbolaččain almmuhit dán guokte lávlaga min sálbma-CD:s. -
    'Therefore we _need_ to _get_ permission from Nils Aslak
    Valkeapää's heirs to release these two songs on our psalm-CD.'
- **&lt;vdic&gt;:**  
  verba dicendi, those that introduce direct speech, typically words
  of communication such as lohkat, cealkat, dadjat, oaivildit
  - **celkkii:**  
    Eŋgel _celkkii_ munnje: Dát leat luohtehahtti ja duohta
    sánit. - 'The angel _told_ me: These are trustworthy and true
    words.'

## Coordination

Here are some examples of our coordination-analysis:

    "Náhkiin sii gorro roavgguid, dorkkaid ja gápmagiid."
    From the skin they were sewing furs, coats and shoes.


                       gorro
                      /  |  \
                Náhkiin  sii roavgguid,
                              /   \
                      doarkkaid  gápmagiid.
                           /
                         ja



     "Bárdni válddii niibbi ja čuohpai ráiggi sehkkii ja luittii mánáid olggos."
     The boy took the knife and cut a hole in the bag and let the children out.

                       válddii_____
                      /   /   \    \
                Bárdni niibbi  \   luittii
                         |   čuohpai  |   \
                        ja    /  |  mánáid olggos.
                             /   |
                        ráiggi sehkkii
                                |
                               ja

## Complex sentences

Here are some examples:

    "Jus stállu vuoitá, de son goddá olbmo."
    If `Stállu' wins, he kills the person.

                         vuoitá,__
                       / |    \   \
                    Jus stállu de  \
                                  goddá
                                 /   \
                               son   olbmo.

    "Dasto don it beasa ruoktot jus borat min luhtte."
    Then you don't manage to get home if you eat at our place.

                                       it __
                                     / |    \
                                  don beasa  \
                                     /   \    \
                                Dasto ruoktot  borat
                                               |  \
                                             jus luhtte.
                                                    |
                                                   min

    No finite verb in the the second main clause:
    "Vuos galgá liinna seaktit, de suohpput ja nuppi iđida fas geassit dan."
    First one should put bait on the line, then cast it, and on the next morning take it inn again.

                                 galgá
                                   |
                                 seaktit, ___________
                                /  |  \  \            \
                         Vuos liinna de suohpput   geassit
                                            |       /  |  \
                                           ja     iđeda fas dan.
                                                   /
                                                nuppi

    No verb in the main clause:
    "Ovdal buorida Ipmil dálkkiidis go neavrres olmmoš dábiidis."
    Rather does God improve the weather than a miserable person his habits.

                                    buorida _______
                                   / |   \           \
                              Ovdal Ipmil dálkkiidis  \
                                                    olmmoš
                                                  /   |    \
                                                go neavrres dábiidis.

## Punctuation

Punctuation such as ".", "," and ";" also receive dependency tags. The
sentence "Arvigoahtá. - It starts raining" actually consists of two
elements, the finite verb and the punctuation. The full stop is also
interpreted as a dependent of the root "\#2-&gt;0".

## Arguments and adjuncts

Subcategorized arguments such as "beatnagis - of the dog" in the
sentence "Balat go beatnagis? - Are you afraid of the dog" are
interpreted as dependents of the finite verb. Right now, we do not
distinguish between sentence adverbials (adjuncts) and subcategorized
arguments. "Odne - today" in "Odne arvá. - Today, it rains." is also
interpreted as a dependent of the verb.
