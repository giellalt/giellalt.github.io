Akronym
=======

Akronym treng synkron handsaming i sme.fst, bidix og nob.dix


# AKRONYM I SME


Pga. Divvun leksikaliserer vi alle akronym vi registerer.


Vi gjev akronym som fungerer som substantiv, taggen +N, 
og alle andre akronym +N+Prop.


Dynamiske (genererte) akronym får +N+Prop+Sem/Org, leksikaliserte 
akronym får ulike taggar.

Dagens output fra FST:

```
sme$ usmedis
ATV
ATV        ATV+N+Sem/Veh+ACR+Sg+Nom  <==== ATV "n"
ATV        ATV+N+Sem/Veh+ACR+Sg+Gen
ATV        ATV+N+Sem/Veh+ACR+Sg+Acc
ATV        ATV+N+Prop+ACR+Sem/Org+Dyn+Sg+Nom
ATV        ATV+N+Prop+ACR+Sem/Org+Dyn+Sg+Gen
ATV        ATV+N+Prop+ACR+Sem/Org+Dyn+Sg+Acc


NTB
NTB        NTB+N+Prop+ACR+Sem/Org+Dyn+Sg+Nom  <===== NTB "np"
NTB        NTB+N+Prop+ACR+Sem/Org+Dyn+Sg+Gen
NTB        NTB+N+Prop+ACR+Sem/Org+Dyn+Sg+Acc
NTB        NTB+N+ACR+Sg+Nom
NTB        NTB+N+ACR+Sg+Gen
NTB        NTB+N+ACR+Sg+Acc
```




# AKRONYM I BIDIX


Slik er dei no (utan <acr>, fordelt på <n> og <np>:


```
<e><p><l>AS<s n="n"/></l><r>AS<s n="n"/><s n="nt"/></r></p></e>
<e><p><l>ATV<s n="n"/></l><r>ATV<s n="n"/><s n="m"/></r></p></e>
<e><p><l>AUF<s n="np"/></l><r>AUF<s n="np"/></r></p></e>
<e><p><l>NTB<s n="np"/></l><r>NTB<s n="np"/></r></p></e>
```




# AKRONYM I NOB.DIX


Her har akronyma desse leksikona, litt tilfeldig tilordna:


```
PC__n (taggane n, m, sg/pl, ind/def, gen...)
NRK__n (taggane np, gen; samansetjing men ikkje bøying) (kommentert ut acr)


Wikipedia__np (taggane np, org; samansetjing men ikkje bøying)
Findus__np (s-finale akronym, og np, org)
Noreg__np (taggane np, top; samansetjing men ikkje bøying)
```




# KVA VIL VI HA?


Dette er avklart:


* Vi vil ha n, np -taggar avhengig av om det er substantiv eller proprium
* Vi vil ha ACR-taggar på sme-sida (for å få kasusendingar på små bokstavar)


Her er det opne spørsmål:


* Vil vi ha <acr>-tagg på nob-sida?
* Vil vi ha sem-taggar på nob-sida?
* Skal vi satse på fleire AUF / auf -mønster (dvs. akseptere både store og små bokstavar)?








# AKRONYM I MT


* NTB forteller at (utan artikkel)
* En ATV ligger i grøfta (med artikkel)x




