!!!Hyphenation problem with derivations


Proper nouns and hyphens: when the name derives, like in *-laš*, we should get
a hyphenation point in front of the derivation, but we don't. Example:


```
Oslo > os^lo*laš
* = missing hyphenation point


sme $ lookup -flags mbTT -utf8 bin/hyph-sme.fst
0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
oslolaš
oslolaš Os^lolaš


sme$lookup -flags mbTT -utf8 bin/hyphrules-sme.fst 
0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 100%
oslolaš
oslolaš os^lo^laš
```


Marker for derivational suffix (and, by extension to other languages, also 
prefix):


* > - suffix
* < - prefix


What about inflectional suffixes? *>* is used in `sma` and `nob`. This
speaks against using it for derivation.


```
root*1*der*2*infl
    %>     %>
Der1 Der2 Der3
C+   VC*  CVC


l u  tags, stem
l l  diacr  here
= 
g u  diacr  here
g l  wordform (w or w/o hyphen)
```


>:0 - no hyphenation


If visisble hyphenation:
>:- IFF _ C V
>:0 IFF _ C #




```
HYPH = read regex ( @\"$(TARGET)/bin/hyphrules-$(TARGET).fst\"  .o. \     3
					@\"$(TARGET)/bin/hyph-i$(TARGET).save\"     .o. \     2
					@\"$(TARGET)/bin/$(TARGET)-norm.fst\" ) ; \n          1
```


```
hyphrules-sme.fst   joh^to^lahkii  <============ 1+2+3
                    johtolahkii
hyph-isme.save      johtolahkii    <============ 1+2
                    johtolat+N+Sg+Ill
sme-norm.fst        johtolat+N+Sg+Ill  <======== 1
                    johtolahkii




hyphrules-sme.fst   joh^to^lah^kii
                    johtolahkii




xfst[0]: load sme-norm.fst 
Opening 'sme-norm.fst'
0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
November 05, 2007 12:44:54 GMT
Closing 'sme-norm.fst'
apply up> johtolahkii       <==================== 1
johtolat+N+Sg+Ill
xfst[1]: load hyph-isme.save 
Opening 'hyph-isme.save'
0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
November 05, 2007 12:43:40 GMT
Closing 'hyph-isme.save'
apply up> johtolat+N+Sg+Ill  <==================== 2
johtolahkii
xfst[2]: load hyphrules-sme.fst 
Opening 'hyphrules-sme.fst'
0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 100%
November 05, 2007 12:31:20 GMT
Closing 'hyphrules-sme.fst'
xfst[3]: up johtolahkii    <======================== 3
joh^to^lah^kii
xfst[3]: compose net
31.5 Mb. 344233 states, 2169182 arcs, Circular. Label Map: Default.
xfst[1]: up johtolahkii  <=========================== 123
joh^to^lahkii


xfst[2]: up johtolahkii
joh^to^lahk@C.NeedNoun@ii@D.NeedNoun.ON@




xfst[1]: set show-flags off
variable show-flags = OFF
xfst[1]: set flag-is-epsilon on
variable flag-is-epsilon = ON
xfst[1]: up johtolahkii
joh^to^lahkii
```


```
SPLRNONREC = read regex [ [@\"$(TARGET)/bin/derivation-filter.fst\"     ] .o. \
						  [@\"$(TARGET)/bin/spellernonrec-$(TARGET).save\"  ] .o. \
						  [@\"common/bin/downcase.fst\"                 ] .o. \
						  [@\"common/bin/remove-hyphen.fst\"            ] .o. \
						  [@\"$(TARGET)/bin/hyphrules-$(TARGET).fst\".i ]     \
						] ; \n


$(TARGET)/bin/spellernonrec-$(TARGET).fst: \
							common/bin/tag-not-save.fst \
							common/bin/downcase.fst \
							$(TARGET)/bin/spellernonrec-$(TARGET).save \
							$(TARGET)/bin/derivation-filter.fst \
							common/bin/remove-hyphen.fst \
							$(TARGET)/bin/hyphrules-$(TARGET).fst


os^lolaš
os^lolaš        Oslo+N+Prop+Plc+Der1+Der/laš+A+Sg+Nom
os^lolaš        Oslo+N+Prop+Plc+Der1+Der/laš+A+SgGenCmp+Cmpnd
os^lolaš        Oslo+N+Prop+Plc+Der1+Der/laš+A+SgNomCmp+Cmpnd
os^lolaš        Oslo+N+Prop+Plc+Der1+Der/laš+A+Attr
os^lolaš        Oslo+N+Prop+Plc+Der1+Der/laš+A+Attr+Cmpnd


os^lo^laš
os^lo^laš       os^lo^laš       +?
```


In `smj`, also inflections fall outside our hyphenation rules:
```
Basudissaj
Basudissaj      Ba^su^dissaj
Bájddárin
Bájddárin       Bájd^dárin
Bájddárin       Bájd^dárin
Heandarahkii
Heandarahkii    Hean^da^rahkii
```


I have found bad hyphenation=no hyphenation in some nouns as well


Hyph transducer/speller:
```
johtolahkii
johtolahkii joh^to^lahkii
```


Rules only:
```johtolahkii     joh^to^lah^kii```




-bash-3.00$ echo "johto^lahkii" | lookup -flags mbTT -utf8 bin/hyphrules-sme.fst 
johto^lahkii    joh^to^lah^kii


Lines 52+53 above:
```
xfst[1]: up johtolahkii
johtolahkii
xfst[1]: down johtolahkii
johtolahkii
```


Target:
```
joh^to^lah^kii


gonagasažis
gonagasažis go^na^gasa^žis
gonagasažis go^na^gasa^žis


gonagassii
gonagassii go^na^gassii


johtolagas
johtolagas joh^to^lagas


xfst[2]: set flag-is-epsilon ON
variable flag-is-epsilon = ON
<. @"sme/bin/hyph-isme.save" .o. @"sme/bin/sme-norm.fst" ;
...
*** Warning: It is unsafe to treat flag diacritics as special in
    composition when both networks contain flags. Please set the
    variable compose-flag-as-special to OFF.
*** Warning: label '@U.Cap.Obl@:@U.Cap.Opt@' is illegal: flag diacritics  on both sides of the symbol pair.
*** Warning: label '@U.Cap.Opt@:@U.Cap.Obl@' is illegal: flag diacritics  on both sides of the symbol pair.
19.5 Mb. 212213 states, 1342959 arcs, Circular. Label Map: Default.
xfst[3]: up johtolahkii                                   
joh^to^lah^k@C.NeedNoun@@C.NeedNoun@ii@D.NeedNoun.ON@@D.NeedNoun.ON@
xfst[3]: set show-flags OFF                               
variable show-flags = OFF
xfst[3]: up johtolahkii    
joh^to^lah^kii




a88-114-120-101:gt sjur$ echo "johtolahkii" | lookup -flags mbTT -utf8 sme/bin/hyph-sme.fst 
0%>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100%
johtolahkii	joh^to^lah^kii
```
