From orthography to phonology - some unresolved issues


The North Sámi orthography does not represent/differentiate between certain features:


# allegro shortening
# difference between long and short geminates, QIII vs QII
# difference between long and short monophthongs
# difference between long and short diphthongs
# consonants within the foot and between two consecutive feet
# monosyllabic word and particle written together vs. disyllabic words


# ALLEGRO SHORTENING
Words with long latus vowels can be allegro shortened. This means (disyllabic) words with final vowel /ii/, /aa/ and /uu/. These vowels shorten to /e/, /a/ and /o/ respectively. 


Some of this shortening is 'represented' in the orthography, specifically shortening of /ii/ and /uu/ to /e/ and /o/. When these monophthongs are preceded by diphthongs, we know the words are in allegro form, and that the diphthongs will be shorter tha usual. This is because original /e/ and /o/ always lead to diphthong simplification. /a/ is problematic, because there is also an original short /a/ which does not lead to diphthong shortening:


/ŏasta/ vs /poasta/.


**NOTE:** a rule for allegro shortening of diphthongs before /e/ and /o/ is already made. 


The next step is to look at the consonant centre, we need allegro shortened strong grade QII (among other things, get rid of schwa: from /jŭolə.ke/ to /jŭol.ke/


**NOTE:** It is possible that allegro shortening of orthographic á to a will not be a problem. After having looked at what Divvun accepts, and what is common in some dictionaries, the shortening from á to a is not regular. In fact, in most cases there is no shortening at all. There is siessábealle, muoŧŧábealle, mánnáčuolbma. 


Morphological tags can solve allegro shortening problem with /a/. We need morphological tags anyway to have allegroshortening when monophthongs are in the vowel centre. Some consonant centres shorten from QIII to QII. Notice also that in allegro-shortening environments, certain rules should not apply, such as latus lengthening. So we need these tags to block rules from applying. Here are some rules for allegro shortening:
Compounds: when modifier component is in nom.sg:gohppolahkki: kohpolah:kii
present tense connegatives: in loga: in loka (with latus lengthening: in lokaa)
2sg imperative: loga: loka (with latus lengthening: lokaa)  


# GEMINATES
While long and short clusters are differentiated in orthography, long geminates are written with two letters, exactly like short geminates:


|  orthographic     |  phonological
| --- | --- 
|  Guossi.nom.sg    |    /kuos:sii/
|  Guossi.acc.sg    |    /kuossii/
|  guossa.nom.sg    |    /kuossa/


There are some rules that can help decide between QIII and QII:


* Primary lengthening: Strong grade short geminates lengthen to QIII between
  short monophthongs in the vowel centre and long vowels in the latus. This
  means the geminates that alternate with a singleton consonant in the weak
  grade.
** BA: Already done for most geminates. Left out f and ŧ for now, no words
  exist for which this lengthening would apply. `hrr` and `hll` are also
  left out for the time being.
* Stem class: contracted verbs are always QIII: 
  `besset.inf: /pes:seht/` vs `besset.1pl.present: /peesseht/ - beassat`
  This means verbs with-e, -o or -á in the latus.
* Passive formation: o-passives are always QIII
  `borrot.inf: /por:roht/` vs `borrot.1pl.imp: /porroht/`
  This is just a special case of the stem class rule.
* Present participle: Present participles are always QIII
  `borri.PrsPrc: /por:rii/`
* Imperative: 1du and 2du are always QIII: `borru: /por:ruu/ borri: /por:rii/`


# MONOPHTHONGS
The three main rules are:
* Monophthongs are short (except á)
* Monophthongs that stem from diphthongs are long before QI and QII.
* Monophthongs that stem from diphthongs are short before QIII.


The first and third rule are not problematic, we have that already, since monophthongs are represented as short almost everywhere. We have a vowel lengthening rule that lengthens monophthongs before QI and short h-clusters. The problem is that only vowel taht are originally diphthongs lengthen in this position. 


```
dihten: /tiihten/
sihten: /sihten/, but we have /siihten/
```


We get long monophthongs in these environments:
* before latus /o/ (except when o is allegroshortened)
* before latus /e/  (except when e is allegroshortened)
* before latus+finis /ij/
* before /uj/ in illative singular


(There are also some -uj adjectives with diphthong simplification, but these are all QIII, so the monophthong is short anyway.)


Original (not allegroshortened) /e/ and /o/ and /ij/ always monophthongize preceding diphthongs. /uj/ does so only in illative singular. A monophthong 
/i, o, e, u/ before /e/, /o/ and /ij/ can thus be a monophthongized diphthong. If it is, it will be long before QI and QII consonant centre. The monophthong could be a simplified diphthong or an orginal monophthong. Check out the homonyms from -at and -it verbs:


```
Soahpat - moai sohpe: /soohpe/
Sohpat - moai sohpe: /sohpe/
Diehtit - moai dihte: /tiihte/
dan dihte:          /tihte/
Bieđđat - moai biđđe: /piiđđe/ 
Biđđit - moai biđđe:   /piđđe/ 
```


There are same kind of problems with /ij/:


```
Biđđit - son biđii: /piđij/
Diehtit - son diđii:/diiđij/
Boahtit - son bođii: /poođij/
Gođđit - son gođii: /kođij/
```


Loanwords from Norwegian, with a long monophthong in the centre, should be marked somehow. For instance 'toga', now we have "toga:" (with latus lengthening, bad). We want 'to:ga'.


# DIPHTHONGS
The difference between short and long diphthongs is determined phonologically, so we already have rules for these:


```
define DiphthongShorteningIIIGr: diphthongs shorten before QIII
define DiphthongShorteningSecLng: diphthongs shorten after secondary lengthening
define DiphthongShorteningAllegro: diphthongs shorten in allegro forms
```


(Some modifications are needed, for example to make the first rule recognize all QIII:s, and to make the last rule not apply to demonstratives+question particle, such as 'duogo', and other similar constructions. The last rule only recognizes allegro forms with /e/ and /o/ in the latus, but not forms with /a/ in the latus.) 


# POSITIONS
Different positions are problematic when it comes to words with consecutive stresses, in which the first syllable has a coda, such as:
* vilbealli
* njálfáhtta
* máilbmi


In these words, the consonant centre is between the ultimate and penultimate vowels. Now there is nothing that identifies the consonant centre in that way. Phonological /l.p/ and /lə.p/ are represented in the same way orthographically, and we get transcriptions like:


```
vilbealli: /vilə.peæl.li/ What we want is: /vil.peæl.lii/
máilbmi: / mɑːjl.bmiː/ We want: /maa.jilə.pmiː/
```


The same is also true for compounds with one simplified element:
```
Bihkkajárgáddi: /pihː.kɑ.jɑrə.kɑːdː.ti/ We want: /pihː.kɑ.jɑr.kɑːdː.tii/
```


Counting syllables is therefore not good enough.


Positions within a stress group in North Sámi:
* Initium: word initial consonant (stress group initial consonant)
* Vowel centre: stressed vowel
* Consonant centre: consonants following the stressed vowel
* Latus: first unstressed vowel position
* Consonant margin: consonants between two unstressed vowels
* Vowel margin: second unstressed vowel position
* Finis: word final consonants


The centre (vowel and consonant centre) is richest in contrast, whereas the other positions are more restricted. For example, diphthongs can only occur in the vowel centre, and not in the other vowel positions. Certain consonant clusters can only occur in the consonant centre, such as preglottalized nasals (orthographically tn, dn, bm, pm, kŋ, gŋ, dnj, tnj). The segmental restrictions of the other positions could be used to identify the centre correctly in many cases, such as in vilbealli and máilbmi.


We could base this on stress, since stress always leads to a new stress group with a new centre.


One rule could be:
* dipthongs attract stress.


All diphthongs in a word create a new stressgroup, and therefore a new vowel and  consonant centre. This would take care of the 'vilbealli'-type words.
Another rule could be: consonant centres of the type.... must be preceded by a stressed vowel (primary or secondary). This would take care of the 'máilbmi'-type.


# MONOSYLLABIC WORD AND PARTICLE


The problem with positions and diphthongs also extends to monosyllabic words. When they are written together with a particle, they look like disyllabic words. Our converter will interpret these as disyllabic, and give them a consonant centre. This is obviously bad, because what looks like a consonant centre is actually finis+initium. In adition to that, several rules might apply, such as allegro shortening.  The sentence 'In dovdda geange' is now transcribed as: 
`in toβtː.tɑː kĕæŋŋ.ke`.


We want the converter to recognize the allegro-shortening environment after the negation, and to recognize the monosyllabic pronoun and particle -ge. We want `in toβt.tɑ keæn ke`.


Sometimes latuslengthening also applies, as in the sentence *Miiba de:* `mijː.pɑː te`. Compare with *mii ba de*: `mij pɑ te`.
