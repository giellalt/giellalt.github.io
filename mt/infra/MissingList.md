Missinglisttut
==============

Gávdnojit máŋggalágan missinglisttut:

1. Missinglist maid ieš ráhkadat teavsttain mat leat text-fiillas
	- Listtus leat sátnehámit. Analysa bokte gávnnat lemma-hámi, sátneluohká ja gilkoriid nugo NomAg ja G3. Juogo bijat sániid ovtta mielde bidixii, dahje don sáhtát ráhkadit csv-listtu. Muitte čállit PoS.
1. Missinglist mii lea ráhkaduvvon stuorra sme-korpusis
	- Listtus leat lemmat, buot seammá sátneluohkás, ja don sáhtát čállit jorgalusa njuolgga fiilii. Sátnepárat sirdojuvvojit maŋŋel bidixii.
	- Listtus lea lemmat mat eai leat Cmp dahje derivašuvnnat vuoruhuvvon


## Missinglist, teavsttain mat leat text-fiillas
Missinglistui leat čohkkejuvvon buot sániid mat ožžot nástti go mii jorgalit buot teavsttaid mat leat texts-máhpas. Násti mearkkaša ahte sátni ii leat bidix-fiillas, dahje ahte das lea boasttu sátneluohkká dahje (jus vearba) IV/TV bidixas. Sánit leat ordnejuvvon frekveanssa mielde, ja analyserejuvvon vai oainnát lemma-hámi.


Jus háliidat geahččat mo sátni geavahuvvo teavsttain: `cat texts/*sme.txt | less `, ja de ohcat sáni.

Ovdamearka:

`less dev/missinglist.txt`


```
Ijahis  idja+N+Der/heapmi+A+Attr
Ijahis  ijaheapme+A+Attr


tel     tel+N+ABBR+Nom
tel     tel+N+ABBR+Gen
tel     tel+N+ABBR+Attr
tel     tel+N+ABBR+Acc


Akwé    Akwé    +?


ONid    ON+N+ACR+Err/Orth+Pl+Gen
ONid    ON+N+ACR+Err/Orth+Pl+Gen+Err/Orth
ONid    ON+N+ACR+Err/Orth+Pl+Acc
ONid    ON+N+ACR+Err/Orth+Pl+Acc+Err/Orth 
```


### Ieš ráhkadit missinglist


Jus leat vuodján python-skripta, de jorgaluvvon teavsttat leat otpt_dir/ -máhpas, ja de sáhtát geavahit skripta:


`sh star.sh`


Jus teavsttat eai leat jorgaluvvon
```cat texts/*sme.txt | apertium -d . sme-smn | tr '\t' ' '| tr ' ' '\n' |\
tr -d '.,():;?!' | grep '\*' |sort | uniq -c | sort -nr |tr -d '\*' | usme > dev/missinglist.txt```


## Missinglist, mii lea ráhkaduvvon stuorra sme-korpusis

Fra relevante tekster i hele korpuset 

* prioriterer substantiv-lister uten sammensetning, og verb- og adjektiv-lister uten derivasjon
* kommando for å fornye missinglista (ordene som får analyse kan fjernes), eksempel fra smj: 

`cat dev/sikor.sme.V.freq.noder.missing |hfst-proc sme-smj.automorf.hfst |less `


Missinglist-barggus lea vejolaš geavahit min sátnegirjjiid (ovdamearka sma-katalogas):


* jorgalit buot missing-sániid darogillii: 
`cat dev/missing_v_noder | smenob | see `
* Jos vastádus lea 
	- `Lexicon file '...bin/smenob-all.fst' could not be found or opened`
	- de don fertet dan kompileret
	- `cd $GTHOME/words/dicts` 
	- `see make-bildict`
- ... ja bija SLANG ja TLANG , linjjus 27, 28 dego háliidat, sme + nob lea default) 
	-  `make -f make-bildict` 
-  ... ja de dus lea sátnegirji 


