# LexC-kurs (fst-kurs)

1. stutt om fst-ar - kva er dei, korleis funkar dei?
1. LexC-formalismen - del ein: leksikonstruktur
1. LexC-formalismen - del to: fleirteiknssymbolar (Multichar_Symbols)
1. del tre: fortsetjingsleksikon, start og slutt

# stutt om fst-ar - kva er dei, korleis funkar dei?

- fst = Finite state transducer
- to nivå: ordform + analyse

```
g å e t i e +N +Pl +Gen

| | | | | |  |  |   |

g ö ö t i -  -  -   -
```

# LexC-formalismen - del ein: leksikonstruktur

```
 lemma+Tag:stamme fortsetjingsleksikon "infostreng" ;
```

Dvs lemma + analyse på venstre side av kolon, (abstrakt) ordform på høgre side.

# LexC-formalismen - del to: fleirteiknssymbolar (Multichar_Symbols)

Kva med taggane? Alle taggar må definerast som eit fleirteiknssymbol.

# del tre: fortsetjingsleksikon, start og slutt

- start: `LEXICON Root` - **MÅ** stå fyrst
- slutt: `#` - alle stiar **MÅ** enda opp ved `#`

Døme:

```
tjearodh:tjear TJEARODH_IV ;

LEXICON TJEARODH_IV
                    +V+IV:              TJEARODH    ;
 +V+IV+Der3+Der/PassL+Uml:»%^2UMLesovv IV_PASSIVE_L ;
```
