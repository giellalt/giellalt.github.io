# Apertium recursive

* Place: Tromsø
* Lecturer: Daniel Swanson

## 12.12.2023 first day

Hente nye par:

Gå til mappa over apertium-xxx-yyy, som hos meg heiter apertium

git clone <https://github.com/apertium/apertium-kaz-kir.git>

med eit anna par enn kaz-kir viss du heller vil ha det (t.d. sme-deu, ...)

Kv

for lang-sma, ...:

```sh

./configure --enable-apertium ...

make

```

for sme-sma, sme-nob, and sme-smj:

```sh

git switch rtx

./autogen.sh --with-lang1=../lang-xxx/tools/mt/apertium --with-lang2=../lang-yyy/tools/mt/apertium

./configure --with-lang1=../lang-xxx/tools/mt/apertium --with-lang2=../lang-yyy/tools/mt/apertium

./configure --with-lang1=../lang-sme/tools/mt/apertium --with-lang2=../lang-sma/tools/mt/apertium

```

Concrete example, sme-smj

```sh

./configure --with-lang1=$GTLANGS/lang-sme/tools/mt/apertium --with-lang2=$GTLANGS/lang-smj/tools/mt/apertium

```

```
number = (ND sg) sg du pl ; ! if number is missing, use <ND> or <sg>
```

* when analyzing (the source language): use <ND> for unknowns
* when generating (the target language): use <sg> for unknowns

```
number > number : du pl ;   ! replace all <du> with <pl>
```

* when outputting number, always replace <du> with <pl>

```
1.gender/sl means the same as <clip pos="1" side="sl" part="gender"/>
```

```
prpers<prn><pers><p3><sg>/el<prn><pers><p3><sg>/Albert<np><m><sg>
```

```
 SIDE_SOURCES = sl tl ; ! change default order of unspecified clips

 SIDE_SOURCES = tl ; ! if you just want tl when unspecified (1.gender), and have to be explicit (1.gender/sl) when you want sl

 NP -> det n { 1[number=2.number/sl] _ 2 } ;

 NP -> adj n.number = <adj> <n><number> ! don't do this :)

 NP -> adj n.sg = <adj> <n><sg>

 NP -> adj n.$number = <adj> <n><sg/du/pl>

 NP -> adj n [$number=2.number] { 1 _ 2 } ;

 NP -> det adj n { 1 _ 2 _ 3 } ;

 NP -> n { 1 } ;

 sg_or_pl = sg pl ;

 NP -> adj n.[sg_or_pl]

NP{ AP{ adv adj } n }

 

     NP

    /  \

   AP   n

  / \

adv adj

! define NP's tags

NP: <NP>.number.gender ;

! define NP's structure

NP -> adj n.$number.$gender { 1 _ 2[number=$number,gender=$gender] } ;

! when analyzing, find an <adj> then an <n>, combine them into an NP phrase, give this NP node the number and gender tags by taking them from the noun. When generating this NP, output the adjective, then a space, then the noun, and set the number tag of the noun to be the number tag of the NP and the same for gender (since these tags may have been changed by something elsewhere in the tree).

NP -> adj %n { 1 _ %2 } ;

! as above, but don't explicitly list the tags to be copied at each step
```

example: <https://wiki.apertium.org/wiki/File:Recursive_Transfer_Hobbit_Example.pdf>

```
VP -> %vblex DP { 1[tense=$tense, person=$person, number=$number] _ 2 } |

##%vblex DP= analyse 

{ ... } = genrerert output 

3 output: 

## 1=%vblex

_ = melllomrom

## 2 =  DP

## % = ta verdien

      adv %VP (if (1.lem/sl = there) { %2 } else { 1 _ %2 } ) |

      adv %VP { (if (1.lem/sl = there) [ 1 _ ]) %2 } |

      PP %VP { 1 _ %2 } ;

      eksempel: 

PP -> pr DP { 1 _1 2 } ; (mellomrom i output) "i skogen" 

NP -> n guio n { 1 2 3 } ; "skuvle-busse" guio = bindestrek

<b pos="1"/> = _1 #old way
```

Kevins rule: (ikke mellomrom  i output)

showing recursiveness

```
a_cmp = cmp cmp-split ;

N -> %n ?(1.a_cmp = "") { %1 };  ! matches ^møte<n>$

N -> n.*.cmp %N { 1 %2 } ; ! matches ^kake<n><cmp>$ followed by N

 ! oste-kakemøter ^ost<n><sg><cmp-split>$^kake<n><sg><cmp>$^møte<n><pl>$

 ! analyses into this tree structure:

                        ^møde<N><pl>{

                                ^ost<n><sg><cmp-split>/ost<n><sg><cmp-split>$

                                ^møde<N><pl>{

                                        ^kake<n><sg><cmp>/kage<n><sg><cmp>$

                                        ^møde<N><pl>{

                                                ^møte<n><pl>/møde<n><pl>$

                                        }$

                                }$

                        }$

   ?(1.a_cmp = "")
```

example rule from Kevin's file (nor-swe):

```
N -> "N→A" %n ?(1.mainpos=adj) { %1(A)[lemcase=$lemcase] } ;

! from fin-nob https://github.com/apertium/apertium-fin-nor/blob/master/apertium-fin-nor.fin-nob.rtx

!!!!!!!!!!!!!!!

!! TAG-REWRITE RULES

!!!!!!!!!!!!!!!

tense > tense : pri pres, past pii;

case > case : ine dat, ela dat, ill dat, ade dat, abl dat, all dat, abe dat, com dat, ins dat, lat nom, par acc, ess acc;

inf > inf : infa inf, infe inf, infma inf ;

!!!!!!!!!!!!!!!

!! REDUCTION RULES for negation

!!!!!!!!!!!!!!!

VP -> ei@vaux vblex { 2[number=1.number,person=1.person,tense=pri] _ ikke@adv } |

      ei@vaux vaux { 2[number=1.number,person=1.person,tense=pri] _ ikke@adv } |

      ei@vaux vbmod { 2[number=1.number,person=1.person,tense=pri] _ ikke@adv } ;

NEG -> ei@vaux { ikke@adv } ; ! ^ikke<adv>$ -> ikke

! from fin-eng https://github.com/apertium/apertium-fin-eng/blob/master/apertium-fin-eng.fin-eng.rtx
```

to run tests

* put sentence in apertium-sme-nob/test/sme-nob-rtx-input.txt
* `apertium-regtest web -c 'rtx$'`

Examples:

* Mun oainnán girjji
* Mun oainnán ođđa girjji.

```sh
apertium-regtest web -c '^sme-deu$'
```

```sh
echo 'Mun oainnán stuorra girjjiid viesu duohken.' | apertium -d . sme-nob_rtx-tree
```

## 13.12.2023 second day

Sjekk ut nye apertium-modular.

1. stå i mor-mappa til apertium-katalogane (som kanskje heiter apertium)langtech?

```sh
git clone https://github.com/apertium/apertium-sme-nob.git
```

gå hit i nettlesaren:

<https://github.com/apertium/>

og sök

More examples:

* Mun oainnán du vielja.  Mån vuojnáv vieljat. Manne vïellemdh vuajnam.
* Mun oainnán iežan vielja. mån vuojnáv ietjam vielja
* Mánát borret láibbiid  - Maanah laejpieh byöpmedieh (/indefinite)
* Mánát láibbiid borret  - Maanah laejpide byöpmedieh  (/definite)
* Mánát borret láibbis    -Maanah laejpeste byöpmedieh (partitiv)

make warning, what does it mean:

```
:    Warning at line 9480, column 67: Paths to rule 125 blocked by rule 80.
```

since the exact same pattern applies for both rules, rule 125 will never apply

```sh
apertium-regtest web -p 3001 -c 'rtx$' # running on a different port, since one is running already
```

```
"borrat" <mv> V <PA-Loc-Food> <AG-Nom-Ani> <PA-Acc-Any> TV <AG-Nom-Ani>

echo 'Mánát borret gávpogis ja gilis' | apertium -d . sme-sma_rtx-tree # draw the analysis tree

echo 'Mánát borret gávpogis ja gilis' | apertium -d . sme-sma_rtx-transfer # output of transfer

echo "Mánát borret varas láibbiid." | apertium -d . sme-deu

die Kinder essen frischen Brote.

> Die Kinder essen frische Brote. (strong adj not mix)

du<s n="prn"/>

^don<prn><pers><p2><sg><gen><@→N>/du<prn><pers><p2><mf><sg><gen><@→N>/dein<det><pos><p2><mf><sg><gen><@→N>$ 
```

<https://wiki.apertium.org/wiki/List_of_symbols>
how to connect this to that:

```
        <e><p><l>Sámediggi<s n="np"/></l><r>Saamisches<b/>Parlament<s n="np"/></r></p></e> ---- strong

        <e lm="saamisch">        <i>saamisch</i><par n="abenteuerlich__adj"/></e>

        

        with article it should be weak

        das Saamische Parlament

        des Saamischen Parlamentes
```

## 14.12.2022 Third day

[Apertium separable](https://wiki.apertium.org/wiki/Apertium_separable)

Multiwords are manually written in an additional xml-format dictionary. (*.lsx)

```xml
<e><p><l>Sámediggi<s n="np"/></l><r>Saamisches<b/>Parlament<s n="np"/></r></p></e>
```

* buorránit - gesund werden
* Buorránan - Ich werde gesund.

álgit - anfangen

álggán - ich fange X an. --- X - optional NP

álggán dainna áššiin - ich fange mit der Sache an

```xml
<e><p><l>álgit</l><r>anfangen</r></p><par n="vblex_sep"/></e>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dictionary type="separable">
  <alphabet>aAáÁăảạÆbBcCčdDÐeEéèễệfFgGhHiIíjJkKlLmMnNoOóöớpPqQrRsSšştTŢuUúüưvVwWxXyYzZ</alphabet>
  <sdefs>
        <sdef n="adj"/>
        <sdef n="adv"/>
        <sdef n="pr"/>
        <sdef n="n"/>
        <sdef n="v"/>
        <sdef n="vblex"/>
        <sdef n="vbser"/>
        <sdef n="det"/>
    <sdef n="dat"/>
  </sdefs>

  <pardefs>
    <pardef n="word">
      <e><i><w/><t/><d/></i></e>
      <e></e>
    </pardef>

    <pardef n="words">
      <e><par n="word"/><par n="word"/><par n="word"/></e>
    </pardef>

  </pardefs>

  <section id="main" type="standard">
    <!--
^fange/fangen<vblex><pri><p1><sg>/fangen<vblex><prs><p1><sg>/fangen<vblex><prs><p3><sg>$ ^x/*x$ ^an/an<pr><dat>/an<pr><acc>$^./.<sent>$ -->
    <e>
      <p><l>fangen</l><r>anfangen</r></p>
      <i><s n="vblex"/><t/><d/></i>
      <par n="words"/>
      <p><l>an<s n="pr"/><s n="dat"/><d/></l><r></r></p>
    </e>
  </section>
</dictionary>
```

===

sma multiword (Maja):

```xml
<e><p><l>heahppášit<s n="vblex"/><s n="tv"/></l><r>skaamoem<b/>vedtedh<s n="vblex"/><s n="tv"/></r></p></e>
```

```
skaamoem% vedtedh+Use/MT:skaamoem% vedt BÅETEDH_TV_ePRET ; !

!åvtese% buektedh+Use/MT:åvtese% buekt BÅETEDH_TV ;

==> thus this procedure cannot put anything between skaamoem and V.

====
```

```xml
<e><p><l>váldit<s n="vblex"/><s n="tv"/></l><r>sebrudahttet<s n="vblex"/><s n="tv"/></r></p></e> <!-- instead of váldit mielde (see lrx) -->
```

mij lip aj ávon gå li nåv moattes gudi sebrudahtti juojggusav ådåájggásasj musihkan > mii leat maiddái ilus go leat nu máŋggas geat váldet juoigama mielde ođđaáigásaš musihkkii

<https://github.com/apertium/apertium-kaz-kir/blob/rtx/apertium-kaz-kir.kaz-kir.rtx>

<https://github.com/apertium/apertium-sme-deu/commit/08e486fdfc92a69ee170dd7bcc71d7f177ac2180>

```xml
<!-- Examples from nob→nno for inspiration -->
    <e lm="gi vår tilslutning til -> slutte oss til" c="slutte oss til">
      <p><l>gi</l><r>slutte</r></p> <i><t/><d/></i>
      <p><l>vår<t/><d/></l><r></r></p>
      <p><l>tilslutning<t/><d/></l> <r></r></p>
      <p><l>til<t/><d/></l><r></r></p>
      <p><l></l><r>vi<s n="prn"/><s n="pers"/><s n="p1"/><s n="un"/><s n="sp"/><s n="acc"/><d/></r></p>
      <p><l></l><r>til<s n="pr"/><d/></r></p>
    </e>

    <e lm="den enkelte" c="kvar enkelt">
      <p>
        <l>den<s n="det"/><s n="dem"/></l>
        <r>hver<s n="det"/><s n="qnt"/></r>
      </p>
      <i><t/><t/><d/></i>
      <p>
        <l>enkelt<s n="adj"/><s n="pst"/><s n="un"/><s n="sp"/><s n="def"/><d/></l>
        <r>enkelt<s n="adj"/><s n="pst"/><s n="nt"/><s n="sg"/><s n="ind"/><d/></r>
      </p>
      <par n="indefinte-noun-phrase"/>
    </e>

    <e lm="2. Petersbrev -> Andre Petersbrevet" c="Andre Petersbrevet">
      <par n="1tilførste"/>
      <par n="bibelbøker"/>
    </e>

    <e lm="ubefestet by -> by uten forsvarsanlegg" c="by utan forsvarsanlegg">
      <p><l>ubefestet<t/><d/></l> <r></r></p>
      <i>by<t/><d/></i>
      <p><l></l>                  <r>uten<s n="pr"/><d/></r></p>
      <p><l></l>                  <r>forsvarsanlegg<s n="n"/><s n="nt"/><s n="sg"/><s n="ind"/><d/></r></p>
    </e>

    <e lm="tilbringe + subst + med å -> bruke + subst + på å" c="bruke tid på å lese">
      <p><l>tilbringe</l>                          <r>bruke</r></p>  <i><t/><d/></i>
      <par n="ANYWORD|"/>
      <par n="ANYWORD|"/>
      <i><w/><s n="n"/><t/><d/></i>
      <p><l>med</l>                          <r>på</r></p>  <i><t/><d/></i>
      <i>å<t/><d/></i>
    </e>
```

 suomastit, sámastit, darostit

finnisch/saamisch/norwegisch sprechen

```xml
    <e><!-- suomastit</l><r>Finnisch<b/>sprechen</r>-->
      <p><l>sprechen</l><r>finnisch<b/>sprechen</r></p>
      <i><s n="vblex"/><t/><d/></i>
      <par n="words"/>
      <p><l>finnisch<s n="adj"/><s n="sint"/><s n="pred"/><d/></l><r></r></p>
    </e>
```

```
^váldit<vblex><tv><der_passl><vblex><iv><inf><@-FMAINV>$

^váldit<vblex><tv><pass><inf>...$

váldojuvvot

váldojuvvojit    váldit+V+TV+Der/PassL+V+IV+Ind+Prs+Pl3
```

sie werden genommen

nehmen -> personal pronoun (person number agreement) + "werden" person number tense (from Sámi verb) + nehmen past participle

```xml
    <e r="LR"><!-- PASSIVE VERBS -->
      <i><w/></i>      
      <p><l><s n="vblex"/><s n="tv"/><s n="der_passl"/><s n="vblex"/><s n="iv"/></l><r><s n="vblex"/><s n="tv"/><s n="pass"/></r></p>
      <i><t/><d/></i>
    </e>
```

```
vblex: (if (1.pass = pass)
          [ 1(vblex_simple)[pos_tag=vaux,lem=werden] _ 1(vblex_pp)[pcp=pp] ]
        else 1(vblex_simple)) ;
```

```
        bargagoahtá   bargat+V+TV+Der/InchL+V+Ind+Prs+Sg3

        jobbe 

        begynne å jobbe
```

```
vblex_simple: (if (1.finity = inf) 1(vblex_inf)
        elif (1.finity = actio) 1(vblex_inf)[inf=inf]  ! probably not ideal
        elif (1.pcp = pp) 1(vblex_pp)
        elif (1.pcp = prfprc) 1(vblex_pp)  ! probably not ideal
        elif (1.pcp = pprs) 1(vblex_pp)
        else 1(vblex_fin) ) ;

!vblex: _.tense ;

vblex: (if (1.derp = der_passl)
          [ 1(vblex_simple)[pos_tag=vblex,lem=bli] _ 1(vblex_pp)[pcp=pp] ]
        elif (1.derp = der_inchl)
          [ 1(vblex_simple)[lem=begynne] _ å@part _ 1(vblex_simple)[finity=inf,inf=inf] ]
        else 1(vblex_simple)) ;

VP -> vblex { 1 } ;
```

Example (sme-smj):

* Boratgo láibbi?
  * (smj) Bårå gus lájbev (or Båråk lájbev?)
  * (fin) syötkö leipää / leivän?
  * (sma) Laejpiem byöpmedh? or: (1) Mah ..2) Dagke..3) Mejtie)
* Danielgo borrá láibbi?
  * (sma) Daniel _dïhte_ laejpiem byöpmede?
  * (From MT: *Borrago Daniel laejpien)
  * (smj) Le gus Daniel gut bårrå lájbev.
  * (fin) Danielko syö leipää?

```
váldojuvvojit    váldit+V+TV+Der/PassL+V+IV+Ind+Prs+Pl3
```

sie werden genommen

nehmen -> personal pronoun (person number agreement) + "werden" person number tense (from Sámi verb) + nehmen past participle

```xml
    <e r="LR"><!-- PASSIVE VERBS -->
      <i><w/></i>      
      <p><l><s n="vblex"/><s n="tv"/><s n="der_passl"/><s n="vblex"/><s n="iv"/></l><r><s n="vblex"/><s n="tv"/><s n="pass"/></r></p>
      <i><t/><d/></i>
    </e>
```

```
vblex: (if (1.pass = pass)
          [ 1(vblex_simple)[pos_tag=vaux,lem=werden] _ 1(vblex_pp)[pcp=pp] ]
        else 1(vblex_simple)) ;
```

```
        bargagoahtá   bargat+V+TV+Der/InchL+V+Ind+Prs+Sg3
```

        jobbe 

        begynne å jobbe

```
vblex_simple: (if (1.finity = inf) 1(vblex_inf)
        elif (1.finity = actio) 1(vblex_inf)[inf=inf]  ! probably not ideal
        elif (1.pcp = pp) 1(vblex_pp)
        elif (1.pcp = prfprc) 1(vblex_pp)  ! probably not ideal
        elif (1.pcp = pprs) 1(vblex_pp)
        else 1(vblex_fin) ) ;

!vblex: _.tense ;

vblex: (if (1.derp = der_passl)
          [ 1(vblex_simple)[pos_tag=vblex,lem=bli] _ 1(vblex_pp)[pcp=pp] ]
        elif (1.derp = der_inchl)
          [ 1(vblex_simple)[lem=begynne] _ å@part _ 1(vblex_simple)[finity=inf,inf=inf] ]
        else 1(vblex_simple)) ;

VP -> vblex { 1 } ;
```

Example (sme-smj):

* Boratgo láibbi?
  * (smj) Bårå gus lájbev (or Båråk lájbev?)
  * (fin) syötkö leipää / leivän?
  * (sma) Laejpiem byöpmedh? or: (1) Mah ..2) Dagke..3) Mejtie)
* Danielgo borrá láibbi?
  * (sma) Daniel _dïhte_ laejpiem byöpmede?
  * (From MT: *Borrago Daniel laejpien)
  * (smj) Le gus Daniel gut bårrå lájbev.
  * (fin) Danielko syö leipää?

* Dongo?
  * (sma) Datne dïhte?        dïhte+Pcle_
* Danielgo?
  * (sma) Daniel dïhte?
* Dongo bohtet?
  * Datne dïhte böötih?
* Dongo, eadni?

Don bat leat/bohtet?

* Datne _dïhte_ böötih?
* Boratgo Daniel láibbi? ?
  * (sma) Danielen laejpiem byöpmedh?
  * (fin) Syökö Daniel leipää?

## 15.12. Fourth day

PLAN

* Thursday (some of this will get moved to Friday)
  * sme->sma questions
  * negation
  * reflexives (sme-deu)
* Friday
  * verb valency things
  * moving NPs around (complex sentences, coordination)
  * subclauses: relative clauses, clause>nominalization
  * Samediggi.x -> Saamisches.x Parlament.x
  * lexically-specified aux verb insertion
  * numeral phrases

<https://wiki.apertium.org/wiki/North_Saami_and_South_Saami/Regression_tests>

* (sme) Mun in boahtán. → Idtjim manne båetieh.
* (sme) Mun in goassege boađe. → Im manne gåessie gænnah båetieh.
* (sme) ii leat ieš sápmelaš → ij leah jïjtje saemie
* (sme) Ale boađe. → Aellieh båetieh.
* (sme) Dat ii leat imaš. → Ij leah rovnege.

<https://wiki.apertium.org/wiki/North_Saami_and_Lule_Saami/Regression_tests>

* (sme) Isak ii sáhttán boahtit ovdal. → Isak ittjij máhte boahtet åvddåla.
* (sme) Ii oro nu vuogas. → Ij la nav vuogas.
* (sme) In háliit duinna doarrut. → Iv sidá dujna doarrot.
* (sme) Sii eai liiko, go mii hárdit sin. → E lijkku, gå sijáv hárddep.
* (sme) It go sáhte muitalit? → I gus máhte subtsastit?
* (sme) Eat go sáhttán vuolgit? → Ejma gus máhte vuolgget?
* (sme) Eat šat gille. → Ep desti visjá.
* (sme) Soai eaba lean ruovttus, muhto barttas meahcis →  Eakan ligan dah gåetesne, mohte hæhtjosne vaeresne.

```
daenbeijjien:daen-bieijjien adv ; ! Dir/LR <- Apertium way
daenbeijjien adv ;
daenbejjien+Use/NG:daen-bieijjien adv ;
```

* Mun hirpmástuvven go oidnen biilla.
* Ich erschreckte mich als ich das Auto sah.

* Mun imaštalan manne Børre dagai dan.
* Ich wundere mich warum Børre das gemacht hat.

* Son illuda.
* Sie freut sich.

* Mun in háliit illudit.
* Ich will mich nicht freuen.
* I want.person.number prn.refl.person.number negation-adv mainv.inf

* Leango mun illudan?
* Habe ich mich gefreut?

* Mun čohkkedan.
* Ich setze mich.

* Mun in illut.
* Ich freue mich nicht.

* Mun in ferte illudit.
* Ich muss mich nicht freuen.

```
LEFT:       ^[lemma]<vblex><TAGS><p3><sg>$ ^sich<prn><ref><p3><mf><sp><nom>$
->
RIGHT: ^sich [lemma]<vblex><TAGS><p3><sg>$
```

```
<t/> match all tags given
<w/> match any letter given

<i><t/></i> output any other tags unchanged
<i> identity
<r></r> r is empty, so deleted
```

```
LEFT:  ^*<vbmod|vblex><TAGS><p3><sg>$ ^sich<prn><...>$ ^[lemma]<vblex><inf>$
RIGHT: ^*<vbmod|vblex><TAGS><p3><sg>$             ^sich [lemma]<vblex><inf>$
```

```xml
<i><w/><s n="vbmod"/><t/><s n="p3"/><s n="sg"/><d/></i>
```

```sh
echo Don it ferte illudit | apertium -d. sme-deu-tree
```

```
Don it       háliit oađđit    -> Du   möchtest                             nicht     _schlafen.
PRN ii@vblex vblex  vblex.*.inf { 1_ 3[person=2.person,number=2.number] _nicht@adv_ 4 }|
```

## 16.12. Fifth day

PLAN

* Friday
  * verb valency things
  * moving NPs around (complex sentences, coordination)
  * subclauses: relative clauses, clause>nominalization
  * Samediggi.x -> Saamisches.x Parlament.x
  * lexically-specified aux verb insertion
  * numeral phrases

split verb - auf, aus, ...

```xml
<e><!-- -->
  <p><l>geben</l><r>aufgeben</r></p>
  <i><s n="vblex"/><t/><d/></i>
  <par n="words"/>
  <p><l>auf<s n="pr"/><s n="dat"/><d/></l><r></r></p>
</e>

<pardef n="auf_verb">
  <e><i>geben</i></e>
</pardef>  

<e><!-- -->
  <p><l></l><r>auf</r></p>
  <par n="auf_verb"/>
  <i><s n="vblex"/><t/><d/></i>
  <par n="words"/>
  <p><l>auf<s n="pr"/><s n="dat"/><d/></l><r></r></p>
</e>
```

```
NP -> num n [$number=(if (1.lem = "1" or 1.lem = "okta") sg else pl)] { 1 _ 2 } ;
$     1   2
$number, 1.number, 2.number

! number and noun will become plural ( no use for this)
NP -> num n [$number=(if (1.lem = "1") sg else pl)] { %1 _%2 } ;
! number and noun will remain singular (sme -> smj)
NP -> num n [$number=(if (1.lem = "1") sg else pl)] { 1_ 2 } ;
! noun will become plural but number will remain singular (sme -> nob)
NP -> num n [$number=(if (1.lem = "1") sg else pl)] { 1 _%2 } ;
! number stays the same, noun gets same number tag as number, as long as the num is sg
NP -> num n [$number=(if (1.lem = "1") sg else pl)] { 1_ 2[number=1.number] } ;
```

* yksi talo on   - one house is - en hus er
* yhdellä talolla on - on one house is  - på en hus er
* kaksi taloa on   - two houses are  - två huser er
* kahdet talot ovat - two pairs of houses are - två par huser er
* kahdella talolla on - on two houses are - på två huser er
* kaksilla taloilla on - on two pairs of houses are - på två par huser er
* yhdeksän taloa on - nine houses are - ni huser er

```
NP -> %np { %1 } ;
NP -> %np { 1 } ;

{ %1 } ! we want to change tags on this based on something elsewhere in the tree
{ 1 } ! the tags are probably already correct from the bidix, so just keep the input tags
```

rule ordering:
either more specific first or put a weight

```
VP -> vblex { 1 } ;
VP -> 2: vblex.*.neg { 1 } ; #verb phrase could be a negative verb, pick the higher weight
```

* Mihcamárat leat geassemánus.           pl/sg
  * Mihttsamárra l biehtsemánon.
* Geassemánus leat mihcamárat.
  * Biehtsemánon la mihttsamárra.

habitive structure:

* Danielis lea  XXX
* "On daniel is XXX" = Daniel has

```
@ADVLhab→   (@ADVL> <hab>)

@←SUBJext
Beavddis @ADVL-ine→   lea    dihtor @←SUBJext.

Loc  @ADVL-ine→ @ADVL-ela→   Adv @ADVLcs-ela→

NP -> %n { %1[case=(if (1.case = loc and (1.function = "@←ADVL-ine" or 1.function = "@→ADVL-ine")) ine
                if (1.case = loc and (1.function = "@←ADVL-ela" or 1.function = "@→ADVL-ela")) ela
                else 1.case)] } ;
```

so:

```
function = "@→SUBJ" "@←OBJ" "@→ADVL" "@→ADVL-ine" "@→ADVL-ela" ;

NP: _.function;

S -> NP."@→SUBJ" VP |
 VP NP."@←SUBJ"

NP: _.number ;
VP:_.number ;
S: _;
NP -> %n { 1 } ;
! send number from input verb to VP, by default get it back again the same, unless the next phrase up changes it
VP -> %vblex { %1 } ;
! if NP and VP disagree in number, change VP
S -> NP VP { 1_ 2[number=1.number] } ;
```

```
Analysis:
  S
/  \
  NP    VP
  |     |
  n   vblex
n has number from input
vblex has number from input
NP has number from n
VP has number from vblex
S doesn't have number

Generation
NP    VP
|     |
n   vblex
NP has the number it had before
VP now has the number from NP
```

```
NP -> %n { 1[poss=$poss] } ;

NP: _.number.case.poss ;

NP -> %n { %1 } ;
same as
NP -> %n { 1[number=$number,case=$case,poss=$poss] } ;

NP -> %n { %1[number=sg] } ;
same as
NP -> %n { 1[number=sg,case=$case,poss=$poss] } ;
```

* Golmmas bohtet festii.
  * Gålmås båhti fæsstaj.

```
NP -> 2: %n.coll [$number=pl] { 1 } ;
! if we have a collective numeral, apply this rule rather than the normal NP -> n rule (weight 2 so it wins) when copying tags to the phrase, don't copy the morphological <sg> but rather always put <pl> so that we don't screw up verb agreement, and don't put % inside the {} so that we keep the input tags and don't override the <sg> tag on the noun
```

váruhit

* Mun váruhan Máreha dán áššis.
  * Ich passe auf die Sache auf.

sme-deu:

* sme: Mun hárjánan skuvlii.
* deu: Ich gewöhne mich an die Schule.

`apertium -d . sme-deu`

* Ich gewöhne  in die Schule.

Loc > auf + X (Acc)

```sh
echo mun váruhan áššis. | apertium -d . sme-deu
ich passe  in der Sache auf#.
```

* Mun váruhan gossamis.
  * Ich passe auf das Husten auf.
* Mun váruhan gossamis njuolga áibmui.
  * Ich passe darauf auf direkt in die Luft zu husten.
* Mun álggán skuvlii   (sme: Ill)
  * Manne skuvlesne aalkam  (sma: Ine)
* In leat skuvlii vel álgán (sme: Ill)
  * Im leah skuvlesne annje aalkeme. (sma: Ine)
* Mun hálan sámegillii (sme: Ill)
  * Manne saemien soptsestem (sme: Ill)
* Mun liikon dutnje(sme: Ill).
  * Manne datnem lyjhkem (sme: ack)
  * Manne dïsse lyjhkestem (sma: ill) liker brått og litt/småforelska
* Jearrat(inf) biekkas (sme:loc). biegga (V0)
  * Bïegkem (Object) gihtjedh (Inf) (sma:acc) (OV)

Dealing with NP changes (case, prepositions) based on verb valency:

```
VP -> %VP NP.*.ill { %1 _ 2[case=(if (1.lem in_caseless verb_ill_to_ine) ine
    else 2.case)]

_ %1};
```

`<TH-Loc-Any>`

```
verb_loc_to_auf = váruhit ;
VP -> %VP NP.*.loc { %1 _ 2[case=(if (1.lem in_caseless loc_to_auf)
else 2.case)]
_ %1};

Theme = "Th-Loc-Any" "Th-Loc-Ine" ;
VP: _.Theme ;
VP -> %

case = nom acc loc pr_auf ;
NP -> %n (if ($case = pr_auf) { auf@pr.acc _%1[case=acc] }
      else { %1 }) ;
VP -> %VP NP.*.loc { %1_ 2[case=(if (1.lem in_caseless verb_loc_to_auf) pr_auf
                              else 2.case)] } ;
```

```
∈cl =  in_caseless
=
equal
```

<https://wiki.apertium.org/wiki/North_Saami_and_Lule_Saami/Regression_tests>

* In jáhke dan tabu-áššin. (sme)
  * Iv jáhke dat la tabu-ássje. (smj)
* Moai dajaime iežame vigiheapmin. (sme)
  * Javlajma måj lin vigedime. (smj)

<https://wiki.apertium.org/wiki/North_Saami_and_South_Saami/Regression_tests>

lea vejolaš

* (sme) Ruovttosiiddu bokte lea vejolaš árvalit áššiid. → Nehtebielien baaktoe gåarede aamhtesh raeriestidh.
* (sme) Lea vejolaš addit stipeandda sihke joatkkaskuvlla ohppiide, ja allaskuvlla ja universiteahta studeanttaide. → Gåarede stipeendem vedtedh dovne jåarhkeskuvlen learoehkidie, jïh jïlleskuvlen jïh universiteeten studentide.
* (sme) Dan ášši ferte maiddá leat vejolaš loktet dálá Norgga ráđđehussii. → Dam aamhtesem tjuara aaj gåaradidh daaletje Nöörjen reerenassese lutnjedh.ii leat vejolaš
* (sme) Ii leat vejolaš geavahit giela árgabeaivvis → Ij gåaredh aarkebiejjien gïelem nuhtjedh.
* (sme) Jus ii leat vejolaš → Jis ij gåaredh. :: Hvis det ikke går.go vejolaš
* (sme) Mun muitalin nu ollu go vejolaš. → Manne soptsestim dan jïjnjem goh gåaradi.
* (sme) Buohkaide geat máhttet sámegiela, lea stuora árvu beassat sámástit nu olu oktavuođain go vejolaš. → Gaajhkesidie gïeh saemiengïelem maehtieh, lea stoere aarvoe åadtjodh saemiestidh dan jïjnjem goh gåarede.

lea go x vejolaš

* (sme) Lea go privatisttain vejolaš váldit dán fága? → Mejtie privatisti nuepie daam faagem vaeltedh?
* (sme) Daid galget almmolaš eiseválddit geavahit, oktan vejolaš dárogiel namain. → Dejtie byjjes åajvaladtjh gelkieh nuhtjedh, nuepies daaroengïeleh nommine ektine.

* Mun hárjánan skuvlii.
  * Ich gewöhne mich an die Schule

Ich gewöhne mich in eine #Schule

change noun based on the verb, so we want to attach it to the VP
so write a rule to attach an illative NP

search for the last VP rule and add a  | and a new condition

copy lemma of the verb to the phrase so we can access it for the valency

we need change from illative to a prepositional phrase with "an"

adding a weight "2:" because there is a conflicting rule
change illative case if the lemma is in the set verb_ill_to_an

add a new case to the set of case
the NP gets a new case tag from the rule "pr_an"

```
case = (CD nom) nom acc dat gen ill loc com ess CD pr_auf_acc pr_auf_dat pr_an_acc ;
verb_ill_to_an = "sich gewöhnen" ;
VP -> 2: %VP NP.*.ill { 1 _ 2[case=(if (1.lem in_cl verb_ill_to_an) pr_an_acc else 2.case)] } ;
NP -> 2: %N (if ($case = pr_auf_acc) { auf@pr.acc _ %1[case=acc] }
         ! assume that we came from a PP and should thus be definite
         if ($case = pr_an_acc) { an@pr _ 1[maybe_art](def=def) %1[case=acc] }
         else { %1 }) ;

VP -> %lea@VP vejolaš@adj.*.nom { %1[lem=2.lem/tl] } ;
```

son lea vihtta jagi boaris. > Sån la vidá jagák

coordination

```
! agree with noun nearest the verb (if the verb comes after)
NP -> %NP cnjcoo NP [$number=3.number] { 1 _2_ 3 } ;

! number is dual if both conjuncts are human (translating to Sámi)
conj_dual = sem_hum sem_org sem_fem sem_mal sem_sur;
NP -> %NP cnjcoo NP
  [$number=(if (1.number = sg and 3.number = sg and
                1.sem in conj_dual and 3.sem in conj_dual) du
            else pl)]
  { 1 _2_ 3 } ;
```

Ánde og Máret spiser. -> borraba

```sh
cat article.txt | apertium -d . sme-smj_rtx > translated_article.txt
```
