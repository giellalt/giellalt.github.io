

Instead of compiling the tools yourself (as described elsewhere on these pages), you may also **download ready-compiled analysers for text analysis**. This page explains how:


When you have downloaded the files (cf. the **Download...** links below), you should run the following command in a terminal window:


```
cat yourtextfile.txt | hfst-tokenise -cg fin.pmhfst | vislcg3 -g fin.cg3 
```


The textfile is sent through a two-step analysis: First through the morphological analyser **fin.pmhfst**, 
by using the support program **hfst-tokenise**. The flag *-cg* ensures constraint grammar output format. 
Thereafter the output is disambiguated with the disambiguator fin.cg3, by using the support program vislcg3.
The flag *-g* identifies the file *fin.cg3* as the grammar file. In order to see more options, you may write
*hfst-tokenise -h* and *vislcg3 -h*.


# Download the required support programs


**On Mac:**
```
curl http://apertium.projectjj.com/osx/install-nightly.sh > install-nightly.sh
chmod a+x install-nightly.sh
sudo ./install-nightly.sh
```


**On Linux ubuntu:**
```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash
sudo apt-get -f install apertium-all-dev
```




# Download the analyser and disambiguator:


You will need both morphology and syntax. We use fin as an example:


**Morphological analyser:** 
```
curl http://divvun.no/static_files/tokeniser-disamb-gt-desc-fin.pmhfst > fin.pmhfst
```


**Syntactic disambiguator:** 
```
curl http://divvun.no/static_files/disambiguator-fin.cg3 > fin.cg3
```




Replace the language code **fin** with the language you want (note! the language code is mentioned **twice** in the commands above, replace both!):


* **sme**: North Saami
* **sma**: South Saami
* **smn**: Inari Saami
* **nob**: Norwegian Bokmål
* **olo**: Olonets
* **fao**: Faroese
* **rus**: Russian


More languages may be added upon request, from [this list](https://giellalt.uit.no/lang/index.html).






## More download platforms:


**Windows:**


[Install a Linux shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/). It is not too complicated, but requires admin rights on your machine. Thereafter, execute the commands for Linux ubuntu above.


**Linux fedora (e.g. on gtlab):**
```
curl https://apertium.projectjj.com/rpm/install-nightly.sh |sudo bash
sudo apt-get -f install apertium-all-devel
```


