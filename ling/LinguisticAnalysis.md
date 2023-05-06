Linguistic analysis
================

Instead of compiling the grammatical tools yourself (as described elsewhere on these pages), you may also **download ready-compiled analysers for text analysis**. This page explains how. If you **have** compiled the tools on your machine, we recommend [this page](../tools/docu-sme-manual.md) instead.


## Automatic grammatical analysis

**Summary:** When you have downloaded the files (cf. the **Download...** links below), you will be able to run the following command in a terminal window (the language code *sme* is for North Saami, for other languages, see below):


```
cat yourtextfile.txt | hfst-tokenise -cg sme.pmhfst | vislcg3 -g sme.cg3 
```


The textfile is sent through a two-step analysis: First through the morphological analyser **sme.pmhfst**, 
by using the support program **hfst-tokenise**. The flag *-cg* ensures morphological analysis in the required format. 
Thereafter the output is disambiguated with the disambiguator sme.cg3, by using the support program vislcg3.
The flag *-g* identifies the file *sme.cg3* as the grammar file. In order to see more options, you may write
*hfst-tokenise -h* and *vislcg3 -h*.

You may also conduct automatic dictionary lookup, see below. 

# Download commands

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


## 2. Download the *analyser and disambiguator for your language:*


You will need both morphology and syntax. We use **sme** as an example:


**Morphological analyser:** 
```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/tokeniser-disamb-gt-desc.pmhfst > sme.pmhfst
```


**Syntactic disambiguator:** 
```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/disambiguator.cg3 > sme.cg3
```

**NOTE!** For North Sámi (but not for the other languages) you also should run this command:
```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/semsets.cg3 > semsets.cg3
```

The file *semset.cg3* should be in the same catalogue as the file *sme.cg3*.


Replace the language code **sme** with the language you want (note! the language code is mentioned **twice** in the commands above, replace both!):


- **sme**: North Saami
- **sma**: South Saami
- **smn**: Inari Saami
- **fin**: Finnish
- **nob**: Norwegian Bokmål
- **olo**: Olonets
- **fao**: Faroese
- **rus**: Russian (Note! For Russian only morphology is available)


More languages may be added upon request, from [this list](https://giellalt.github.io/LanguageModels.html).


## Download other programs

### dictionaries
You may also use the *Neahttadigisánit* dictionaries on the command line. **Warning!!** The program to be downloaded here gives translation equivalent only, not explanations or example sentences. For dictionary lookup the online dictionaries are thus far better, these programs are good for automatic lookup.

**Dictionary lookup:** 
```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/smenob-all.fst > smenob.fst
```
```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/nobsme-all.fst > nobsme.fst
```

For other languages, replace *sme/smenob-all.fst* above with *smn/smnfin-all.fst*, *smn/finsmn-all.fst*, *sma/smanob-all.fst*, *sma/nobsma-all.fst*, and correspondingly for *smenob.fst* etc.

The dictionaries may be used in two ways:

- send a list of baseforms through it: ``cat smn-words.txt | hfst-lookup smnfin-all.fst`` 
- use the dictionary interactively: ``hfst-lookup smnfin-all.fst``and thereafter write Inari Saami words and press ENTER. Leave the program with ``ctrl C``.

###  Word analysers

```
curl https://gtsvn.uit.no/biggies/trunk/bin/smn/smn.hfstol > smn.hfstol
```

###  Spellers
```
curl https://gtsvn.uit.no/biggies/trunk/bin/smn/smn.zhfst > smn.zhfst
```


# Running the analysers on Windows:
All the above works on Linux and Mac. In order to make it work on Windows, do the following:

[Install a Linux shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/). It is not too complicated, but requires admin rights on your machine. Thereafter, execute the commands for Linux ubuntu above.



