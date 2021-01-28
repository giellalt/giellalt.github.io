# Bug 545


|  Result      |  ok  | bad
|  hyphenation |  yes | no 
|  spelling    |  no  | yes


láhka^tektsta - wrong spelling, correct hyphen
láhkat^æksta - correct spelling, bad hyphen


láhkatäksta     láhka#tæksta+N+Sg+Nom
láhka#tæksta MUORRA ;


PLX-entries?


tæks^ta NIR
tæks^ta-        NALX
tæks^ta-        NIAL
tæks^ta NAL
tæks^tas        NIR                                                             


láh^kaj NIR
láh^ka  NIR
láh^ka- NALX
láh^kam NIR
láh^kat NIR
láh^kan NIR
láh^ka- NIAL
láh^ka  NAL
láh^kas NIR
láh^kas^ka      NIR                                                             


láh^ka#tæks^tam NIR
láh^ka#tæks^tat NIR
láh^ka#tæks^tan NIR
láh^ka#tæks^taj NIR
láh^ka#tæks^ta  NIR
láh^ka#tæks^ta- NALX
láh^ka#tæks^ta- NIAL
láh^ka#tæks^ta  NAL
láh^ka#tæks^tas NIR


First list of problem words/original report:


all words are both lexicalised and gets a dynamic compound analysis => wrong hyphenation


In Comment 1:


hard-coded compounds only (no dynamic analysis in fst): hyphenation is correct


That is: it looks like the hyphenator prefers dynamic compounds, and that these are consequenctly hyphenated one char to the right of the word boundary.


láhkatæksta x  


Julev-sáme, public beta 2, 2007-10-16:
```
láh^kat^æks^ta
lah^katæk^sta
láh^ka^tek^sta
```


Julev-sáme, public beta 2, 2007-10-19:
```
láh-kat-ækst-a
```




# Bug 546


rijkalattjat	- input
rij^ka^lat^tjat	- fst
rij^ka^lat^tjat NIR	- PLX
rij-ka-lat-tjat - Word, manuelt
rij-ka-latt-jat - Word, automatisk


organisásjåvnån
or^ga^ni^sá^sjåv^nån	lookup
or^ga^ni^sá^sjåv^nån    NIR
or-ga-ni-sá-sjåv-nån - manuelt
orga-nisás-jåvnån - automatisk (truleg ikkje alle ordd.punkt)


rábmakonvensjåvnnå
ráb^ma#kon^ven^sjåvn^nå
ráb^ma#kon^ven^sjåvn^nå NIR
ráb-ma-kon-vens-jåvn-nå X - automatisk
ráb-mak-onv-ens-jåvnn-å - manuelt






rábmakonvensjåvnnå
ráb^ma
ráb^ma  NIR
ráb^ma  NAL
-
kon^ven^sjåvn^nå
kon^ven^sjåvn^nå        NIR


kon-ven-sjåvn-nå - manuelt
kon-vens-jåvn-nå - auto


resolusjåvnå
re^so^lu^sjåv^nå
re^so^lu^sjåv^nå        NIR
re^so^lu^sjåv^nå        GaIR
re-so-lus-jåvnå X - automatisk
re-so-lu-sjåv-nå - manuell


gárddestasjåvnnå - "nonsens"/"reinhagestasjon"
gárd-destasjåvn-nå - automatical
gárd-des-tas-jåvnn-å - manuel


rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X rijkalattjat X


or-ga-ni-sá-sjåv-nån - manuelt
orga-nisás-jåvnån X - automatisk


organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X organisásjåvnån X


ráb-ma-kon-vens-jåvn-nå X - automatisk
ráb-mak-onv-ens-jåvnn-å - manuelt


rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X  rábmakonvensjåvnnå X


re-so-lus-jåvnå X - automatisk
re-so-lu-sjåv-nå - manuell


resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X  resolusjåvnå X
