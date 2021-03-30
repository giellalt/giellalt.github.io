

## Analysáhtoriid kompileren giellatekno bealde




Go olmmoš bargá dušše dábálaš FST-barggu sme/sma/smj/smn-katalogas, de manná johtileappot jus čállá `./configure` ovdal go compilere (`make`).
Juohke configure-gohččun lea fámus dassážii go čállá eará configure-gohččuma, omd dan mii lea dás vuolábealde.


Go áiggut bargat Apertiumas, de berrešit juohke beaivvi kompileret sihke sme ja smX analysáhtoriid vai
du apertium analysa čájeha duohta dili. Danne go kompileren ádjána
guhka, de gánnáha bidjat johtui kompileremiid ovdalgo bargagoađát eará
áššiiguin.


Jus háliidat iskat guđemuš configure dus lea: \\
`head config.log`




1. Mana dán katalogii: `cd main/langs/sme/` dahje geavat alias `sme`
* `svn up`
* `./configure --with-hfst --enable-apertium`
* `make`


2. Open a new terminal, mana du giela katalogii, omd. `cd main/langs/smX/`, dahje geavat alias `smX`
* `svn up`
* `./configure --with-hfst --enable-apertium`
* `make`


Dáinna oažžu sihke dábálaš norm- ja desc-xfst, ja MT-heivejuvvon analysáhtoriid.


Dát kompileremat ádjánit guhká, erenoamážit sme. Muhto sáhtát beare álgit bargat eará terminálaláses.




3. Go kompileremat leat geargan, de berrešit kompileret ođđasit apertium-máhpas,\\  
`apertium/nursery/apertium-sme-smX`, dahje geavat alias `apsmX` 
* `svn up` (álo buorre dahkat vaikko ii leat dárbu dán oktavuođas)
* `make`


Dál apertium viežžá MT-heivejuvvon analysáhtoriid maid don leat kompileren 1. ja 2. čuoggáin.


