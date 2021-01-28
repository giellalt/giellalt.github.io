This document looks at different ways of expanding numbers to words.
There are several ways to do this:


* Whole number converted to an integer: we have this.
* Number converted to a string of digits: we don´t have this
* Number converted as a type of compound: we have this for date and time. We need something similar for money, and to-from expressions.


(In English, there is also the possibility of pairs of digits, as in years or street addresses, but I have not found any examples of when that would be natural for North Sámi). 


In Sproat et al. 2001 there is a taxonomy of non-standard words and how they should be expanded/converted to words. This is based on English. Using their taxonomy, this is my suggestion for North Sámi:


# Number to integer


The *integer* solution should be our default solution for short numbers (less than four digits), when we cannot identify the type of number.


|   Type | Description
| --- | --- 
|  NUM    | number (cardinal), for amounts, room numbers, book chapters, reindeer  herding districts, university courses, law paragraphs
|  NORD   | ordinal numbers
|  NADDR  | street adress:  Davviluohkká 27: Davviluohkká guoktelogičieža
|    "    | post box:        Poastaboksa 208: Poastaboksa guoktečuođigávcci
|  PRCT   | percentage:     32%: golbmalogiguokte proseantta 
|  NYER   | years. We have some of this already in the date converter, but we need more for expressions like 1980-logut, 80-logut, 1900-logus, and also for case markings. In Sweden and Norway the years between 1100-1999 are read out as in the Scandinavian languages, with eleven hundred etc.


# Number to string of digits


The *string of digits* should probably be our default solution for longer number (more than three digits), when we cannot identify which type of number we have:


|  NDIG  | expands to string of digits


## Phone numbers


|  NTEL | phone numbers  |  Pause at white spaces


* 776 46 742: čiežačiežaguhtta njealljeguhtta čiežanjealljeguokte
* 905 47 317: ovccinullavihtta njeallječieža golbmaoktačieža


If there is no white space, we will have to make default pauses.
Special phone numbers as 110, 112, 113 should be converted to integers.


## Zip codes


|  NZIP | zip code   |   9520 Guovdageaidnu: ovcci vihtta guokte nulla 


Some zip codes look like "clear" integers. We could also have them expand to integers, such as


* 9008 Tromsa: ovcciduhátgávcci Tromsa vs. ovcci-nulla-nulla-gávcci Tromsá
* 9100 Kvaløysletta: ovcciduhátčuođi Kvaløysletta vs. ovcci-okta-nulla-nulla


My experience is that people get addresses and phone numbers more easily when you read each digit separately.   




# Numeral to compound


* NTIME: we have this
* NDATE: we have this
* MONEY  of any currency: kr 35 : golbmalogivihtta ruvnno //
                        NOK 35: golbmalogivihtta norgga ruvnno
* year + lohku:           1800-logus  (we have this)
* number + jahkásaš:      20-jahkásaš, 5-mánnosaš (we have this for some
                        combinations)
* to + from expressions   1200-1700, 35-45% (must be differentiated)


# TODO:
## Money                                               


Money is more complicated than this in North Sámi, because, as with months, we don´t have a "short hand" way of saying things using only numerals:


* kr 3,50:    golbma ruvnno ja vihttalogi evrre
* kr 155,50:  čuođivihttalogivihtta ruvnno ja vihttalogi evrre


What do we do with other currencies. Do we specify for each currency, like


* $56,50:     vihttalogiguhtta dollara ja vihttalogi sentte
* £56,50:     vihttalogiguhtta punda ja vihttalogi penni
* €56, 50:    vihttalogiguhtta euro ja vihttalogi sentte


Or do we just use *čuokkis* or *rihkku*:


* $56,50:     vihttalogiguhtta čuokkis vihttalogi dollara
* £56,50:     vihttalogiguhtta čuokkis vihttalogi punda
* €56,50:     vihttalogiguhtta čuokkis vihttalogi euro


There is also another class, BMONEY, where you have millions and trillions:


* NOK 2.5 mill:   guokte čuokkis vihtta miljovnna norgga ruvnno                    


## year
Sometimes the noun *lohku* follows the year:


Concord rules are not the same in these structures as they are otherwise. The numeral is the first part of a compound, and should not change. Compare with *golbmaoktalaš* (Pekka Sammallahti, personal communication).


```
1600-lohku:      guhttanuppelotčuohte-lohku (both are nominative)
1600-logu rájes: guhttanuppelotčuohte-logu rájes
1600-logus:      guhttanuppelotčuohte-logus
1600-lohkui:     guhttanuppelotčuohtelohkui
1600-loguin:     guhttanuppelotčuohteloguin
1600-loguid      guhttanuppelotčuohteloguid
1600-loguide:    guhttanuppelotčuohteloguide


1950-lohku:     ovccinuppelotčuođivihttalot-lohku
1950-logu rájes ovccinuppelotčuođivihttalot-logi rájes
1950-logus      ovccinuppelotčuođivihttalot-logus
1950-lohkui     ovccinuppelotčuođivihttalot-lohkui
1950-loguin     ovccinuppelotčuođivihttalot-loguin
1950-loguid     ovccinuppelotčuođivihttalot-loguid
1950-loguide    ovccinuppelotčuođivihttalot-loguide
```


## Number + jahkásaš etc:
we have this+ more combinations in lexicon


## To-From-expressions


Numbers separated by a hyphen


(This only includes expressions which are not separated by some word in the text, i.e., not things like *Vázzen mánáidskuvlla Mázes 1960 čavčča rájes gitta 1966 geassái*.)


Sometimes from-to- expressions should be separated by some word, sometimes not. When the numbers refer to years, a word lika *gitta* seems to be required. When the numbers refer to amounts, it is not always necessary to have a word intervene between them:


*ja borrá 20 000 – 30 000 divresuosa ovtta geasis*:
 *guokte-golbmalotduháha*, *guoktelot-golbmalotduháha* 
  Koloniseren (1200-1700) *guoktenuppelotčuođi gitta čiežanuppelotčuođi*


# Other things


Fractions:
|  1/4:     | njealjádas, njealját-oassi
|  3/4:     | golbma njealjádasa, golbma njealját-oassi 
|  1/2:     | bealli
|  1½:      | beannot, okta ja bealli


+ case marking of these.


Types with case marking:


```
NUM:    SAM-3014:s lea rievdan lohkanmearri.
        SAM golbmaduhátnjealljenuppelogis   
            LOC

        
NYER:   Lean bargan dáppe 1991 rájes.       
        ovccinuppelotčuođiovccilogiovtta             
        GEN
PRCT:   Jávkan lea lassánan 32%:s 40%:i.
        golbmalogiguovtti proseanttas njealljelot prosentii 
        GEN                 LOC         ATTR        ILL
NDATE:  Mii váldit vuostá studeantačállosiid 03.12 rájes 
        juovlamánu goalmmát beaivvi rájes
                            GEN
NTIME:  Mii fertet geargat 15:00 rádjái
        golmma rádjái
        GEN
```
