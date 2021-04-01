
Compiling Apertium files
====================

Apertium needs three components:


1. The source language
1. The target language
1. the translation program




# Compiling the source and target languages


For each language pair you first compile each language.


**Compiling the Saami languages and Finnish and Estonian in the giella infrastructure**


We assume you have [installed the giella infrastructure already](https://giellalt.uit.no/infra/GettingStarted.html). The Saami languages and Finnish are found in their respective folders in `$GTHOME/langs/`.


Go to the relevant language folder, here e.g. `sme`, and set up the configuration for MT:


```
cd $GTLANGS/lang-sme/
./configure --enable-apertium 
```


Now, be prepared to **wait**, from 15 minutes to several hours depending upon 
the language and your computer.  The compilation procedure will store the binary 
files in `tools/mt/apertium` in 
each language folder and the apertium compilers will read them from that location.  


While waiting, do the same for the other language(s) you want. Go to the
folder of the other language you want to translate as well (*sma, smj, smn*), 
so that one for e.g. *sme-sma* must compile *sme* **and** *sma*.
Remember to reset the .configure option afterwards, e.g. to 
`./configure` if that is what you use for FST work.


To chech the file, write:


```
ls -l tools/mt/apertium/*.gz
```


If everything went well, you have new `.gz` files in the apertium folder.


**Compiling Bokmål (for sme-nob, sma-nob, smj-nob)**


For Bokmål, we do not use the Giellatekno version, but the one
on Apertium github, for nob:


* [https://github.com/apertium/apertium-nob]

In the apertium-nob folder do:


```
./autogen.sh
make -j
```




## Compiling the MT program itself


All language pairs (also the Giellatekno/Divvun ones, e.g. sme-sma) are 
stored on Apertium github:


* [https://github.com/apertium/apertium-sme-nob]
* [https://github.com/apertium/apertium-sme-sma]
* etc. for other language pairs, cf. [the full list](https://github.com/apertium)


For each language pair you must, in the folder of the language pair, set up
a pointer to the respective languages:


For sme-sma (pairs with two giella languages), do this in the Apertium folder, e.g. `apertium-sme-sma`:


```
./autogen.sh --with-lang1=/path/to/giellatekno/langs/sme/tools/mt/apertium --with-lang2=/path/to/giellatekno/langs/sma/tools/mt/apertium
make -j
```


For pairs with one Apertium language, e.g. sme-nob, do this in `apertium-sme-nob`:


```
./autogen.sh --with-lang1=/path/to/giellatekno/langs/sme/tools/mt/apertium --with-lang2=/path/to/apertium-nob
make -j
```


The command to test that everything is ok is, in each folder:


```
echo ja | apertium -d. sme-nob
echo ja | apertium -d. sme-sma
etc.
```




## In case of trouble


### cg compiler version mismatch


You may get this type of error message:


```
$ echo ja | apertium -d . fin-est
Error: Grammar revision is 9705, but this loader requires 10043 or later!
```


Now, you may have an old vislcg3 / cg-proc compiler. Test that:


```
vislcg3 --version
cg-proc --version
```


If the number you get (**0.9.9.10195**) is lower than the error message
requires, you should update vislcg3. It may be, however, that the version number
is ok but you still get the error message. In that case, you have old 
binary files although you have updated your compeler. In that case,


* in the apertium-LANG1-LANG2 folder, write *make clean* 
* in the $GTHOME/langs/LANG/ folder, delete the tools/mt/apertium/*.gz files


Thereafter, repeat the installation procedure.


### More


... to be written, when reported.








