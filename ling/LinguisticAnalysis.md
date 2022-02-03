Linguistic analysis
================

Instead of compiling the grammatical tools yourself (as described elsewhere on these pages), you may also **download ready-compiled analysers for text analysis**. This page explains how.


**Synopsis:** When you have downloaded the files (cf. the **Download...** links below), you should run the following command in a terminal window (the language code *sme* is for North Saami, for other languages, see below):


```
cat yourtextfile.txt | hfst-tokenise -cg sme.pmhfst | vislcg3 -g sme.cg3 
```


The textfile is sent through a two-step analysis: First through the morphological analyser **sme.pmhfst**, 
by using the support program **hfst-tokenise**. The flag *-cg* ensures morphological analysis in the required format. 
Thereafter the output is disambiguated with the disambiguator sme.cg3, by using the support program vislcg3.
The flag *-g* identifies the file *sme.cg3* as the grammar file. In order to see more options, you may write
*hfst-tokenise -h* and *vislcg3 -h*.


# Download support programs and analysers separately:

## 1. Download the required *support programs*


These commands will download the compilers *hfst* and *vislcg3*. They require a unix system. For use on Windows, see below.


**Download on Mac:**
```
curl http://apertium.projectjj.com/osx/install-nightly.sh > install-nightly.sh
chmod a+x install-nightly.sh
sudo ./install-nightly.sh
```


**Download on Linux ubuntu:**
```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash
sudo apt-get -f install apertium-all-dev
```

**Download on Linux fedora:**
```
curl https://apertium.projectjj.com/rpm/install-nightly.sh |sudo bash
sudo apt-get -f install apertium-all-devel
```


## Download the *analyser and disambiguator for your language:*


You will need both morphology and syntax. We use **sme** as an example:


**Morphological analyser:** 
```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/tokeniser-disamb-gt-desc.pmhfst > sme.pmhfst
```


**Syntactic disambiguator:** 
```
curl https://github.com/giellalt/lang-sme/blob/main/src/cg3/disambiguator.cg3 > sme.cg3
```




Replace the language code **sme** with the language you want (note! the language code is mentioned **twice** in the commands above, replace both!):


- **sme**: North Saami
- **sma**: South Saami
- **smn**: Inari Saami
- **fin**: Finnish
- **nob**: Norwegian Bokmål
- **olo**: Olonets
- **fao**: Faroese
- **rus**: Russian


More languages may be added upon request, from [this list](https://giellalt.github.io/LanguageModels.html).






# Running the analysers on Windows:


[Install a Linux shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/). It is not too complicated, but requires admin rights on your machine. Thereafter, execute the commands for Linux ubuntu above.




