# Testing


For å teste at FSTer for ordbøker fungerer som dem skal, analyser følgende ord. Se ellers [om tagger og FSTer](/lang//sme/KompilereFST.html).


##  sme


```analyser-dict-gt-desc.xfst```
* `vuovdi` skal gi både `vuovdi+N+Sg+Nom` og `vuovdi+N+NomAg+Sg+Nom`
* `girjje` skal gi girji	`girji+N+Sg+Gen+Allegro`
* `tunnealla` skal gi `tunealla+v2+N+G3+Sg+Nom`
* `tunealla` skal gi `tunealla+N+G3+Sg+Nom` for bruk i NDS, men for VD skal det være `tunealla+v1+N+G3+Sg+Nom`. For øyeblikket bruker jeg for NDS disse to kommandoene før jeg kompilerer, men dette burde legges inn i Makefile:
** `perl -pi -e "s/v1\+//g" affixes/*lexc stems/*lexc `
** `perl -pi -e "s/\+v1:/:/g" affixes/*lexc stems/*lexc`
 `analyser-dict-gt-desc-mobile.xfst`:
* `cienal` skal gi `čieŋal+A+Sg+Nom`
 `generator-dict-gt-norm.xfst`:
* `girji+N+Sg+Gen+Allegro` skal gi `girjje`
* `girji+N+Sg+Gen` skal gi `girjji`
* `deaivvadit+V+Ind+Prt+Pl3` skal gi `deaivvadedje`
* `deaivvadit+V+Ind+Prt+Pl3+Use/NGminip` skal gi `deaivvade`
* `vuovdi+N+Sg+Acc` skal gi `vuovddi`
* `vuovdi+N+NomAg+Sg+Acc` skal gi `vuovdi`
* `golli+N+Sg+Nom` skal gi `+?`
* `golli+N+G3+Sg+Nom` skal gi `golli`


##  sma


```analyser-dict-gt-desc.xfst```
* `govledh` skal gi `+Hom1` og `+Hom2` i analysen:
** `govledh	govledh+Hom2+V+IV+Inf`
** `govledh	govledh+Hom1+V+TV+Inf`


```generator-dict-gt-norm.xfst```
* `govledh+Hom1+V+Ind+Prs+Sg3` skal gi `gåvla`
* `govledh+Hom2+V+Ind+Prs+Sg3` skal gi `govloe`
* `govledh+V+Ind+Prs+Sg3` skal gi `+?`










#  Obsolete (old infra)
[Obsolete (old infra)](GammelKompilereNettordbok.html)


