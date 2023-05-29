# Bruken av +Use/-Spell for samiske språk



Dokumentasjon over bruken i lexc for samiske språk.

Møtereferat er [her](https://divvungiellatekno.github.io/giellalt.uit.no/admin/linguists/220324_Tagger_Adverber.html)

```
+Use/-Spell   Orthographically correct, typically perifer words, 
excluded in speller because they cause trouble for frequent words (fra sme root)

lang-sme lan000$ cut -d '!' -f1  src/fst/stems/* |grep 'Use/-Spell' |wc -l     33
lang-sme lan000$ cut -d '!' -f1  src/fst/affixes/* |grep 'Use/-Spell' |wc -l   70
lang-smj lan000$ cut -d '!' -f1  src/fst/stems/* |grep 'Use/-Spell' |wc -l     85
lang-smj lan000$ cut -d '!' -f1  src/fst/affixes/* |grep 'Use/-Spell' |wc -l   28

lang-sma lan000$ cut -d '!' -f1  src/fst/stems/* |grep 'Use/-Spell' |wc -l      0
lang-sma lan000$ cut -d '!' -f1  src/fst/affixes/* |grep 'Use/-Spell' |wc -l    3

lang-sms lan000$ cut -d '!' -f1  src/fst/stems/* |grep 'Use/-Spell' |wc -l      0
lang-sms lan000$ cut -d '!' -f1  src/fst/affixes/* |grep 'Use/-Spell' |wc -l   14
lang-smn:                   0
 ```

Linjene med denne taggen blir ikke med i normativ HFST. Vi diskuterte bruken.



## Bruken i sme

### Oftest for å begrense generering, for å unngå å generere marginale former. 

Ek
```
LEXICON acrooblique    
!------Der/ár------
 +Der2+Der/ár+N+CmpN/SgN+CmpN/SgG+CmpN/PlG+Use/-Spell:»ár GAHPIRLONG ;  !

husme
ČSV:ár	ČSV:ár+v1+N+Sg+Nom
ČSV:ár	ČSV+v1+N+Prop+Sem/Org+ACR+Der/ár+N+Sg+Nom
SG:ár	SG+N+Prop+Sem/Org+ACR+Der/ár+N+Sg+Nom

husmeNorm 
ČSV:ár
ČSV:ár	ČSV:ár+N+Sg+Nom
SG:ár	SG:ár+?	inf

 ```
Jeg har sammenlikna med korpus. [i SIKOR finnes, med bøyningformer](https://gtweb.uit.no/korp/#?stats_reduce=word&cqp=%5Bword%20*%3D%20%22.*%5BA-Z%C4%8C%C5%A0%5D%7B2%7D:*%5Ba%C3%A1%5Dr.%7B0,5%7D%22%5D&prefix&isCaseInsensitive&search_tab=1&search=cqp) :  AUF:ár, TIFF:ár, NSR:ár, SG:ár, ČSV:ár. Bare ČSV:ár er leksikalisert. 
#### Hva er argumentet mot å la alle akronymer også få :ár med alle kasus? Eller burde man lage egen sti for Sem/Org som er typiske for slik bruk?
f.eks. for alle politiske parti?

numerals.lexc: +Use/-Spell+Use/Circ: NUM-PREFIXES     ; ! for §34 etc.

Av 28 stier for adjektiv + vuohta har 8 +Use/-Spell, kanskje fordi de er mindre produktive? Men -vuohta skulle kanskje ikke dekke over for skrivefeil?  
Disse bør sjekkes og sammenliknes med korpus. (med første blikk ser de ut til å være veldig marginale, f.eks. med adjektiv i flertall før derivasjon med vuohta, cealkemeahttumatvuohta


### Noen ganger for å unngå genererte former som er svært marginale og som kan dekke over skrivefeil i frekvente ord, 

eks.

LEXICON ENGEL Restricted denominals for speller   -eŋgel
eŋgelaš	eŋgel+N+Der/Dimin+N+Sg+Nom	 som også er en Err/Orth av eŋgelas

### Full dokumentasjon for sme, med kommentarer:

#### nouns-fila: for å begrense generering, unngå for mange irrelevante former: 

sis+N+CmpN/SgN+Use/-Spell+Sem/Dummytag+Cmp/SgNom:sis%> Rreal ; 
sisa+N+CmpN/SgN+Use/-Spell+Sem/Dummytag+Cmp/SgNom:sisa%> Rreal ;
(disse gir bare støy, svært få relevante ord mangler leksikalisering, jeg kommenterer stiene ut)


#### 108 substantiver med dynamisk førsteledd fra adj+attr: 
Disse har jeg sammenlikna med korpus. Dette er lite produktive stier. Jeg har kommentert dem ut, sjekka i korpus og DG-ordbok og lagt til lemmaer i adj-fila. 
Mange av disse får også analyse som N+Pl+Nom, og overgenerering skaper dermed støy i analysen, siden adjektivanalysen blir +Attr
Ved at det ikke er dynamisk analyse, kan vi fange dem opp i missinglist.

LEXICON NAMATCont     second-part compounds (fra adj+attr og fra arabics)
nuolus+N+Use/-Spell:nuollus AHKASAS "unravelled? A" ;
stávval+N+Use/-Spell:stávval AGAdjINFL "syllabled A" ; Ikke i bruk
náittot+N+CmpN/SgN+CmpN/PlG+Use/-Spell+Sem/Hum:náittog AGAdjINFL "-gamic A" ;
seagat+N+Use/-Spell:seag AGAdj "mixed A" ;
suttat+N+Use/-Spell+Sem/Plc:sutt AGAdj ;
dáfot+N+Use/-Spell:dáfog AGAdjINFL "faceted A" ;
osv.

#### substantiver med dynamisk førsteledd fra arabics: 
Disse har jeg sammenlikna med korpus. Jeg har lagt til noen som manglet. Jeg forstår ikke at disse skulle lage problemer, så jeg har fjerna Use/-Spell for dem som er produktive

LEXICON SASCont     FROM NUMERALS, gives -kilosaš etc.
buddi+N+Use/-Spell:buddás DER-SAS ;
báiki+N+Use/-Spell+Sem/Ani_Hum:báikás DER-SAS ;
dássi+N+Use/-Spell:dássás DER-SAS ;
geardi+N+Use/-Spell:geardás DER-SAS ;
lahttu+N+Use/-Spell+Sem/Hum:lahttos DER-SAS ;
luohkká+N+Der2+Der/lasj+A+Use/-Spell+Sem/Hum:luohkkál AHKASAS ;
luohká+N+Der2+Der/lasj+A+Use/-Spell+Sem/Hum:luohkál AHKASAS ;
mánnu+N+Use/-Spell+Sem/Ani_Hum:mánnos DER-SAS ;
siidu+N+Use/-Spell:siidos DER-SAS ;
vahkku+N+Use/-Spell+Sem/Ani_Hum:vahkkos DER-SAS ; !50-vahkkosaš
čiehka+N+Der2+Der/has+N+Use/-Spell:čiegahass JOHTOLAT ;
giella+N+Der2+Der/lasj+A+Use/-Spell:gielal AHKASAS ; !2-gielalaš


#### hit går f.eks. fra NAMATCont ahki+N+Sem/Ani_Hum:ag DER-AGAdj ;
Her fjerner jeg Use/-Spell, den hindrer fornuftige dynamiske ord. Begrensninga bør skje tidligere i stien.

LEXICON DER-AGAdj
 +Der2+Der/t+A+CmpN/SgN+CmpN/PlG+Use/-Spell: AGAdj ; (2-agat)

#### hit går f.eks. fra NAMATCont lahttu+N+Sem/Hum:laht DER-OGAdj "membered A" ;
Her fjerner jeg Use/-Spell, den hindrer fornuftige dynamiske ord. Begrensninga bør skje tidligere i stien.

LEXICON DER-OGAdj
 +Der2+Der/t+A+CmpN/SgN+CmpN/PlG+Use/-Spell:og AGAdjINFL ; (2-lahtot)

#### hit går f.eks. fra NAMATCont  málli+N+Sem/Ani_Hum:máll DER-EGAdj "modelled A" ;
Her fjerner jeg Use/-Spell, den hindrer fornuftige dynamiske ord. Begrensninga bør skje tidligere i stien.

LEXICON DER-EGAdj
 +Der2+Der/t+A+CmpN/SgN+CmpN/PlG+Use/-Spell:eg AGAdjINFL ; (2-mállet)


#### Hvorfor disse? 
dávvirvuorkásuorgi+N+Use/-Spell+Sem/Plc-abstr:dávvir#vuorká#suorºgi GOAHTI-I ;
gákcilotlohku+v1+N+Use/-Spell+Sem/Dummytag:gákci#lot#lohºku LOTLOHKU ;
gákcilotlohku+v2+N+Use/-Spell+Sem/Dummytag:gákci#loh9#lohºku LOTLOHKU ;
justiisasuorgi+N+Use/-Spell+Sem/Plc-abstr:justiisa#suorºgi GOAHTI-I ;
lassemáksu+N+Use/-Spell+Sem/Money:lasse#mákºsu AIGI ;
miella+N+Sem/Perc-emo+Sg+Gen+Use/-Spell:miela MiddleNouns ;

ođđajagemánnu+v1+N+CmpN/SgN+CmpN/SgG+Sem/Time:ođđa#jage#mánnu AIGI ;
ođđajagemánnu+v2+N+CmpN/SgN+CmpN/SgG+Use/-Spell+Sem/Time:ođđa#jagi#mánnu AIGI ;

sábbát+v2+N+Use/-Spell+Sem/Time:sábºbáh GAHPIRLONG ; ! removed sub tag, word in use for MT
sábbát+v1+N+CmpN/SgN+CmpN/SgG+CmpN/PlG+Sem/Time:sabºbah GAHPIRLONG ; ! NT

sme-acronyms.lexc:iežaskap+Use/-Spell+Sem/Dummytag:iežaskap9 UNIT ; (forkortelse for iežaskapitála, ikke i bruk i SIKOR)


#### i AFFIX-FILER:

LEXICON ENGEL   Restricted denominals for speller   -eŋgel

LEXICON BUORRE     For this adj only
+Use/-Spell:         VUOHTA                       ; ! ... to A > N -vuohta derivation
+Use/-Spell:»X7     NAMAT                        ; ! comp-only adj. Here since buorre has no Attr, not compound.
+Use/-Spell:»X7#     NAMATLAGANLAGASCont          ;

LEXICON RIEKTA     Bisyll adj w/o obl sg forms, WeG Attr
+Use/-Spell:a  VUOHTA ;         ! ... to A > N -vuohta derivation

LEXICON MEAHTTUS     meahttun-adj. with comp. and superl. forms -seabbo, -seamos etc.
 +Pl+Nom+Use/-Spell:m%>at VUOHTA ;
 
LEXICON BEAKKAN    Trisyll. Non-gradating C-Adj. without Separate Attr.
  +Pl+Nom+Use/-Spell:%>at    VUOHTA  
  
LEXICON BEAKKAN_NOCOMP 
   +Pl+Nom+Use/-Spell:%>at VUOHTA ;

LEXICON GEARDAN    Trisyll. Non-gradating C-Adj. without Separate Attr.   
+Pl+Nom+Use/-Spell:%>at VUOHTA ;

LEXICON VUDDJII_DECLINED    misses most cases
+Use/-Spell: VUOHTA ;  ! VUOHTA, without j

LEXICON JIEDNAI_DECLINED    misses most cases
+Pl+Acc+Use/-Spell:%>Y5jd K ; !riiduid, ruvsuid

LEXICON LAS   from verbs: čirrolas, bealkálas etc
+Use/-Spell: VUOHTA ;

LEXICON DenominalAdjsV1   caritives and their derivatives (huvva, huhtti), from bisyll nouns
 +Der1+Der2+Der/laakan+A+Use/-Spell:» LAGAN ; ! ! biilalágan, noaidelágán noaiddilágán beatnagalágán beanalágán all these goes Nielsen: beatnatlágán, beatnatlágáš, beanalágáš, giđalágáš, áhččelágáš,
 +Der1+Der2+Der/laagasj+A+Use/-Spell:» LAGAS ; ! ! etc.
LEXICON DenominalAdjsV1Long   caritives and their derivatives (huvva, huhtti), from bisyll nouns without vowel shortening
 +Der1+Der2+Der/laakan+A+Use/-Spell:» LAGAN ; ! ! biilalágan, noaidelágán noaiddilágán beatnagalágán beanalágán all these goes Nielsen: beatnatlágán, beatnatlágáš, beanalágáš, giđalágáš, áhččelágáš,
 +Der1+Der2+Der/laagasj+A+Use/-Spell:» LAGAS ; ! ! etc.

LEXICON DenominalAdjsV1Short   caritives and their derivatives (huvva, huhtti), from bisyll nouns with vowel shortening
 +Der1+Der2+Der/laakan+A+Use/-Spell:» LAGAN ; ! ! biilalágan, noaidelágán noaiddilágán beatnagalágán beanalágán all these goes Nielsen: beatnatlágán, beatnatlágáš, beanalágáš, giđalágáš, áhččelágáš,
 +Der1+Der2+Der/laagasj+A+Use/-Spell:» LAGAS ; ! ! etc.


LEXICON DenominalAdjsV2_lasj   from bisyllables, muoralaš, gieđalaš etc
 +Sg+Nom+PxDu2+Use/-Spell:»X6lažža%>X2t RPXADD_FLAG ; ! ! tentative.
 LEXICON RPXADD_FLAG
@R.Px.add@ K ;

LEXICON acrooblique    
!------Der/ár------
 +Der2+Der/ár+N+CmpN/SgN+CmpN/SgG+CmpN/PlG+Use/-Spell:»ár GAHPIRLONG ;  !

#### Propernouns
Alle leksikon har denne: (men fra RProp kreves hyphen, hvis ikke Err/Orth, så Use/-Spell her er unødvendig, jeg kommenterer den ut)
+Cmp/SgNom+Use/-Spell:%> RProp ;

LEXICON SULLOT-plc
+N+Prop+Sem/Plc+Sg+Gen+Use/-Spell:%>Y5 VUONAT ;
LEXICON ADJAGAT-plc ! Place names
+N+Prop+Sem/Plc+Sg+Nom+Use/-Spell:X4 VUONAT ;

