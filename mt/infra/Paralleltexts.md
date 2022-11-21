Parallel text
=============

##  Genereret jorgalusaid
Mis lea skriptat mainna mii sáhttit buohtastahttit cealkagiid mielde: 
* sme, smX ja MT-jorgalusa (parallellateavsttaid)
* dahje dušše sme ja MT-jorgalusa (jus ii leat juo jorgaluvvon manuálalaččat). 


## Mis leat dákkár teaksta-máhpat:

- **texts**  : fiillat dábálaš txt-formáhtas. _sme.txt ja _smX.txt
- __tmx_data__ : sihke sme ja smX seammá fiillas, okta cealkka háválassii. 
tmx-formáhtain lea vejolaš genereret html-fiilla.
- **fi.samediggi** : sihke sme ja smn seammá fiillas, okta cealkka háválassii. 
tmx-formáhtain lea vejolaš genereret html-fiilla.
- __pseudo_tmx_data__ : dušše sme, okta cealkka háválassii. 
tmx-formáhtain lea vejolaš genereret html-fiilla.
- __otpt_dir/__ : output-directory mas leat fiillat mat leat genererejuvvon python-skriptain.  



##  Testenbargu: python skriptat

* python-skripta ovttagielat teavsttaide: `check_mt-otpt.py`
* python-skripta guovttegielat teavsttiade, ja mas lea WER: `wercheck_mt-otpt.py`


##  Jorgalit paralleallateavsttaid, ja buohtastahttit jorgalusaid:

Jorgalit dihto fiilla, ja rahpat bohtosa:
- `python wercheck_mt-otpt.py -f tmx_data/100writers_sme2smn.tmx` 
- `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


Jorgalit olles máhpa, ja rahpat bohtosa:

- `python wercheck_mt-otpt.py -d tmx_data/` 
- `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


Dahje don sáhtát bidjat buot fiillaid ovtta fiilii ja rahpat buot oktanaga oktan html-fiilan:

- `cat otpt_dir/* > buotfiillat.html` 
- `open buotfiillat.html` (åpnes i Safari)




## Jorgalit teavstta mii ii leat jorgaluvvon ovdal:

Jorgalit dihto fiilla, ja rahpat bohtosa:

- `python check_mt-otpt.py -f mappe/file` 
- `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


Jorgalit olles máhpa, ja rahpat bohtosa:

- `python check_mt-otpt.py -d tmx_data/` 
- `open otpt_dir/` - de rahpasa finder-láse. Vállje fiilla maid háliidat rahpat.


Dahje don sáhtát bidjat buot fiillaid ovtta fiilii ja rahpat buot oktanaga oktan html-fiilan:

- `cat otpt_dir/* > buotfiillat.html` 
- `open buotfiillat.html` (åpnes i Safari)




