For samiske språk blir samansetjingar avgrensa i to dimensjonar: etter mogleg
*posisjon*, og etter moglege *samansetjingskasus*. I lexc-filene er
avgrensingane merka med taggar, og dette dokumentet skildrar korleis vi kan gå
frå slike taggar (som ikkje i seg gjer noko som helst) til ei fungerande
avgrensing, ved å konvertera taggane til flagdiakritika i lag med andre
flaggdiakritika.


# Posisjonstaggar


##  +CmpN/First


# sjekk at compfirst er TRUE for slike ord
# set compfirst til false i R, slik at vi ikkje lenger kan gå til compfirst-ord
  frå R


Flaggdiakritika: `ord+@U.CmpFirst.TRUE@ + @P.CmpFirst.FALSE@ (R)`


##  +CmpN/Last


# set complast til true for slike ord
# blokker complast ved R


Flaggdiakritika: `ord+@P.CmpLast.TRUE@ + @D.CmpLast.TRUE@ (R)`


##  +CmpN/None


# set compnone.false i R
# blokker compnone.false for slike ord


Flaggdiakritika: `@P.CmpNone.FALSE@ (R) + ord+@D.CmpNone.FALSE@`


##  +CmpN/Only


= middle, dvs kan berre stå som del av samansetjing inne i samansetjinga, dvs
ikkje fyrst og ikkje sist. Men kan stå åleine.


# set componly til false i root
# set componly til true for slike ord
# blokker componly.true i ENDLEX
# nullstill componly i R


Flaggdiakritika:
```
@U.CmpOnly.FALSE@ (root) + ord+@U.CmpOnly.TRUE@ +
@D.CmpOnly.TRUE@ (ENDLEX) + @C.CmpOnly@ (R)
```


##  +CmpN/Pref


Som compfirst(?).


## Fleire verdiar på same ord


Kva gjer vi med ord som har fleire verdiar? T.d. First + Last?
Vi gjer ingen ting, kvar tagg blir konvertert til tilsvarande
flaggdiakritika, og det er alt.


**NB!** Dette må testast, slik at vi veit at det faktisk funkar!


## Testord i sma


For å sjekka at avgrensingane funkar, prøv desse orda:


Ord som er tagga i leksikonet berre for dette formålet (skal eigentleg vera utan
CmpN-taggar, taggane må fjernast etter at testinga er over):
* våaloe - first + last
* snaavloe - first


Ord som har passande taggar frå før:
* guaktah -last
* johkebeala, nuelie - last + only
* åelie - only
* guaktegh - none
* maana - alle posisjonar


# Kasustaggar


Seinare.
