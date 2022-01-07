
Plan for å lage ei grammatisk ordbok
===========
*NB! Dette dokumentet er frå 2012, men ideen er framleis like god*

Ideen er å lage ei grammatisk ordbok, generert av *lexc*-filene:



# Bruksområde
* som en del av Oahpa
* som app for nedlastning til mobil, lesebrett osv (hvis vi bare finner en løsning for de sme-bokstaver, for sma er det ikke noe problem) vi kan ikkje skrive ŋŧ, men dei andre


# Innhald


Brukeren kan skrive inn et ord, f.eks. "girku" og så kan hun velge:

1. oversetting til norsk (hvis vi har - tanken var å legge inn hele leksikonet, evt gi oversetting til delene av et sammensatt ord)
1. morfologisk info, ala: girku er et likestavelses substantiv som ikke har stadieveksling. (dette tas rett fra lexc-fil)
1. standardparadigme (ifst)
1. eksempler fra korpus?
1. på server - også deepdict i samme grensesnittet ?

Andre døme:

* Ordbogi (app for iPhone) er bra (laga av eit spin-off frå Center for Sproggteknologi i Kbh.
* Vi har samisk WebDict...


Vi tenker videre på dette, ikke minst før møte med FAD 20.4.12. 



# Ryan sine tilleggskommentarar


Ein tanke kunne vera å lage ein service som står utafor Oahpa men kan då nyttast i Oahpa eller ein mobil app eller kor som helst (eg tenkjer ogso litt som ein erstatning til webdict, men med meir features). Men dersom ein app bør fungera på ein mobil utan nett tilkopling, hadde ein sånn API ikkje vore ein god idé. Ein offline app må ogso innehalda alle paradigmer, som kan vera ganske stor, avhengig av kor mange ord er inne. 


Ein kul feature kunne vera at ordboka nyttar ein FST ogso for å leite i ordboka, eller om nokon skriv inn ei ordform som ikkje er grunnformen, hadde det vore mogleg enno å finne ordet. Eg såg at nob-ordbok fungerer sånn, og eg hev laga ein liten somalisk ordbok app som hev dette kapabilitetet :)




