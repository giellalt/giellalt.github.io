Transfer rules for sme-sma 
==========================

## Syntactic transfer


### Cases and numbers

- loc => gen (<hab>), ine (ADVL-ine), ela (ADVL-ela)
- ill => ine (def-list "from-ill-to-ine-verb")
- acc => nom (def-list "nom-verb" )
- numerals loc => gen: Paul lea riegádan 1931:s - Paul jaepien 1931 reakadamme (semyear-loc-gen), jagis 2001 - jaepien 2001, 
- date => nom (sem_date)
- pl+acc => pl+nom (when not dem in NP)
- sg+gen => pl+nom (in numeral phrases): 


### From adposition or adverb to case

- váste, várás => illative (def-cat "váste")
- eret => locative (def-cat "eret")
- ovttasráđiid => comitative + ektine
- bokte => post, comitative, essive




### From PoS to PoS 
- adj => finit verb: geatnegahtton = dïedtem åtna






### Negation verbs
- move tense from main verb to aux: Mun in boahtán. : Idtjim manne båetieh.


### Special handling for Dem Num Nouns


### Agreement
- def-cat "agreement-attr"


### Expressions

- mus lea borranmiella - manne bårrestovvem (def-cat "goiku")
- moai Laarain => månnoeh Laarah
- eadni ja áhčči => tjidtjie gonnoeh aehtjieh (def-cat "aehtjie" "aahka"), eadnái ja áhččái => tjidtjie gonnoeh aahtjan
- 2001 - jaepien 2001 (sem_year), jaepiej 2011-12
- actio+ill => inf: oassálastit barggu plánemii - mealtan barkoem soejkesjidh 
- orru leamen => luste vååjnoe
- Mus lea oaivi bávččas. => Mov åejjieh saejriedieh.
- beassat fárrui
- oassálastit ill => mealtan ine
- geatnegahtton => dïedtem utnedh  
	- skuvla lea geatnegahtton - skuvle stillesovveme
	- skuvla lea geatnegahtton oahpahit - skuvle dïedtem åtna ööhpehtidh
	- skuvla geatnegahttá - skuvle stillie
- oažžut dieđu




### Word order
* pron+ref+sg+nom noun => noun pron+ref+sg+nom (pluss agreement): ieš jorgalusat - jarkoestimmieh jïjtjh 
* subject + negation => negation + subject:  Mun in boađe. - Im manne båetieh.
* verb moving: Mun vuoján buriin biillain. - Manne buerie bïjline vuajam.


### Remove words

- ahte: Ja Ipmil oinnii ahte dat lei buorre. -	Jïh Jupmele vuejnieji dïhte lij hijven.
- copula: 
	- Dat lea buorre biila. - Dïhte buerie bïjle.
	- Áhčči lea ruovttus. - Aehtjie gåetesne.


##  The rules

- prn-refl-sg-nom, wordorder and agreement  - 2 positions  - Ieš jorgalusat   -  Jarkoestimmieh jïjtjh 
- pronouns  - 1 position 
- pronouns  - 2 positions  - moai Laarain - månnoeh Laarah
- year - 1 position in-out  - Paul lea riegádan 1931:s - Paul jaepien 1931 reakadamme
- date - 1 position in-out   - date should be nominative
- year pl - 1 position in-out  - 2011-12  - jaepiej 2011-12
- jagis 2001 - 2 position in-out  - jagis 2001 - jaepien 2001 
- 2001 - 2 position in-out  -  2001 - jaepien 2001 
- dates  
- numeral - 1 position in-out  - from sem_year to arab
- mus lea goiku, 2 chunks out  - mus lea borranmiella - manne bårrestovvem
- n-cmp n-cmp n-cmp n - 1 position out  - compounding
- genmod illadvl til acc inf  - 3 position out  - oassálastit oahppanbarggu plánemii - acc infinitive
- genmod illadvl til acc inf  - 4 position out  - oassálastit iežat oahppanbarggu plánemii - acc inf
- genmod illadvl til acc inf  - 4 position out  - oassálastit adv oahppanbarggu plánemii - acc inf
- genmod illadvl til acc inf  - 3 position out  - oassálastit barggu plánemii - acc inf
- genmod illadvl til acc inf  - 6 position out  - oassálastit genmod n-cmp genmod illadvl cnjcoo  illadvl - acc inf
- genmod illadvl til acc inf  - 5 position out  - oassálastit genmod illadvl cnjcoo  illadvl - acc inf
- n-cmp n-cmp n  - 1 position out  - compounding
- n-cmp num  - 1 position out  - compounding
- n-cmp n  - 1 position out  - compounding
- n-cmp prsprc  - 1 position out  - compounding
- attr agreement cmp - 2 positions out  - NP: agreement-attr cmp noun
- attr agreement indef - 3 positions out  - NP: agreement-attr indef noun
- attr agreement - 2 positions out  - NP: agreement-attr noun
- numsg noun - 2 positions out  - NP: num noun
- numsg noun - 2 positions out  - Ipmil sivdnidii guokte stuora čuovgga. 
- dem numsg noun - 3 positions out 
- Gaajhkine 9 tjïeltine - 3 positions out 
- Gaajhkine dejnie 9 tjïeltine - 4 positions out 
- dem numsg rdep noun - 4 positions out 
- prn-dem noun - 2 positions 
- prn-dem noun cmp  - 2 positions out 
- prn-indef noun - 2 positions 
- prn-indef noun cmp  - 2 positions out 
- váste  - 1 position out  - illative instead of pp with váste
- eret  - 1 position out  - Hábmeris eret - elativ
- lassin noun-ill  - lassin ill - ill lassin
- beassat fárrui  - mealtan årrodh
- bokte  - 1 position out  - inessive and comitative/essive instead of pp with bokte
- bokte  - 1 position out  - inessive and comitative/essive instead of pp with bokte
- bokte  - 2 positions out  - inessive and comitative/essive instead of pp with bokte
- bokte  - 2 positions out  - inessive and comitative/essive instead of pp with bokte
- eret  - 1 position out  - eret Hábmeris  - elativ
- aehtjie gon tjidtjieh  - áhčči ja eadni - aehtjie gon tjidtjieh
- aahka gon aajjah  - áhkku ja áddjá - aahka gonnoeh aajjah
- maake gon muahrah  
- noun  - 1 position 
- rdep n  - 2 positions 
- rdep n  - 3 positions 
- rdep rdep cmp n  - 3 positions out 
- n num-ldep  - 2 positions 
- n-prop-pers  - 1 position 
- pron-attr n-cmp n  - 2 positions out 
- pron-attr pron-attr n  - 3 positions out 
- verb to adv  - 1 position  - go oassálastet dákkár giellabesiin - goh mealtan dagkeres gïelebiesine
- verb to adv  - 1 position out  - go lea oassálastán
- ii  - 1 position 
- conneg  - 1 position 
- ii conneg  - 2 positions out 
- remove cop-mainv when adj is vfin  - 3 positions 
- verb-fin  - 1 position 
- verb-fin  - 3 position 
- verb-fin  - 1 position 
- verb-fin  - 1 position 
- leat-aux verb-prfprc  - 1 position out 
- geatnegahtton  - 1 position  - suohkanat leat geatnegahtton - tjïelth dïedtem utnieh
- leat-main inessive  - 1 position out  - áhčči lea ruovttus - aehtjie gåetesne
- leat-main subpred  - 1 position out 
- oažžut dieđu  - 2 position out 
- leat-main subpred  - 2 positions out  - Dïhte maanan bïjle.
- verb-inf  - 1 position 
- verb-prfprc  - 1 position  - OBS
- verb-actio to inf  - 2 position 
- verb-actio-ess to inf  - 1 position 
- verb-imp  - 1 position 
- mearkkašit  - 1 position out 
- mearkkašit  - 2 positions out 
- atnit árvvus  - 2 positions out 
- ovttašráđiid to ektine  - 2 positions out 
- vejolaš  - 1 position 
- adj  - 1 position 
- prsprc  - 1 position 
- eanet ahte eanet  - 1 position out 
- adv  - 1 position 
- pr noun-acc  - 2 position 
- pr  - 1 position 
- post  - 2 position 
- post  - 1 position 
- ii conneg vejolaš  - 2 positions out 
- ii conneg ge vejolaš  - 2 positions out 
- ahte  - 1 position 
- cs  - 1 position 
- cc  - 1 position 
- ij  - 1 position 
- sent  - 1 position 
- DEFAULT 
