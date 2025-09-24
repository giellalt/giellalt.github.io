# Linguistic analysis with GiellaLT models

The *Giellalt* tools described elsewhere on these pages may be downlaoded, compiled and used for linguistic analysis. Linguistic analysis may also be done without compiling the tools.
 
# Grammatical analysis online

A wide range of grammatical tools may be used via online tools:

- [Giellalt language tools online](https://gtweb-02.uit.no/webpipeline/)  Here, you may analyse words and text and generate wordforms and paradigms, you may hyphenate and transliterate text (to a varying degree for different languages)
- [Check a text against *Neahttadigisánit* dictionaries](https://gtweb-02.uit.no/webpipeline-simple/webpipeline-simple/) 
- [Make freqency-sorted lemmalists from texts](https://gtweb-02.uit.no/webpipeline-simple/webpipeline-simple/lemmalist)


# Tool download for analysis

You may also **download ready-compiled analysers for text analysis**, here we explain how. If you have compiled the tools on your machine **already**, we recommend [this page](../tools/docu-sme-manual.md) instead. If not, read on.


## 1. Download the programs

### 1.1. Download the required _support programs_

These commands will download the compilers _hfst_ and _vislcg3_. They
require a unix system. For use on Windows, see below.

The commands are different on the differeent operating systems:

**Download on Mac:**

Run **these three different commands, one by one**:

```
curl http://apertium.projectjj.com/osx/install-nightly.sh > install-nightly.sh

chmod a+x install-nightly.sh

sudo ./install-nightly.sh
```

**Download on Linux Ubuntu (and on Windows, if you installed Ubuntu there):** 

Run  **these two different commands, one by one**:


```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash

sudo apt-get -f install apertium-all-dev
```

**Download on Linux fedora:**

Run  **these two different commands, one by one**:

```
curl https://apertium.projectjj.com/rpm/install-nightly.sh |sudo bash

sudo dnf install apertium-all-devel
```


**Download on Arch Linux:**

Forthcoming


### 1.2. Download the _analyser and disambiguator for your language:_

You will need both morphology and syntax. We use North Sámi (ISO code:
**sme**) as an example, use the language code you need (and contact us
if your language is missing):


For each language, the **pmhfst** file gives a morphological analyser
and the **cg3** file gives the relevant analysis in the sentence.

#### North Sámi


```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/tokeniser-disamb-gt-desc.pmhfst > sme.pmhfst

curl https://gtsvn.uit.no/biggies/trunk/bin/sme/disambiguator.cg3 > sme.cg3
```

**NOTE!** For North Sámi (but not for the other languages) you also should run this command:

```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/semsets.cg3 > semsets.cg3
```

The file _semset.cg3_ should be in the same catalogue as the file _sme.cg3_.


#### South Sámi

```
curl https://gtsvn.uit.no/biggies/trunk/bin/sma/tokeniser-disamb-gt-desc.pmhfst > sma.pmhfst

curl https://gtsvn.uit.no/biggies/trunk/bin/sma/disambiguator.cg3 > sma.cg3
```


#### Other languages

Replace the language code **sme** with the language you want (note!
when the language code is mentioned **twice** in the commands above, replace both!):

- **fao**: Faroese
- **fin**: Finnish
- **smn**: Inari Saami
- **fit**: Meänkieli
- **sme**: North Saami
- **nob**: Norwegian Bokmål
- **olo**: Olonets
- **rus**: Russian (Note! For Russian only morphology is available)
- **sma**: South Saami
- **tkl**: Tokelauan

More languages may be added upon request, from [this list](https://giellalt.github.io/LanguageModels.html). Feel free to contact us if your language is missing.

## 2. Use the programs

### 2.1. Automatic grammatical analysis

**Summary:** When you have downloaded the files (cf. the **Download...** links above), you will be able to run the following command in a terminal window (again with **sme** as an example), exchange with **sma** or whatever you language code is:

```
echo ja | hfst-tokenise -cg sme.pmhfst | vislcg3 -g sme.cg3
```

The result should be `"ja" CC <W:0.0> <sme> @CVP`. If not, ask for help. If yes, you can proceed to the next step, and analyse whole **texts**. Note that the text must be in clean text format (Word files etc. must be saved as clean text). They you can run the following command.


```
cat yourtextfile.txt | hfst-tokenise -cg sme.pmhfst | vislcg3 -g sme.cg3
```

The textfile is sent through a two-step analysis: First through the morphological analyser `sme.pmhfst`,
by using the support program `hfst-tokenise`. The flag `-cg` ensures morphological analysis in the required format.
Thereafter the output is disambiguated with the disambiguator sme.cg3, by using the support program `vislcg3`.
The flag `-g` identifies the file `sme.cg3` as the grammar file. In order to see more options, you may write
`hfst-tokenise -h` and `vislcg3 -h`.

You may also conduct automatic dictionary lookup, see below.

## 3. Download other programs

### 3.1. Dictionaries

You may also use the _Neahttadigisánit_ dictionaries on the command line. **Warning!!** The program to be downloaded here gives translation equivalent only, not explanations or example sentences. For dictionary lookup the online dictionaries are thus far better, the programs presented here are good for automatic lookup.

#### 3.1.1. Fetching the dictionaries

The dictionaries are found in the catalogue of **the first language**, the language to translate **from**. Each dictionary has the file name _Lang1Lang2-all.hfst_.

Here are two command examples for fetching various dictionaries.

North Saami:

```
curl https://gtsvn.uit.no/biggies/trunk/bin/sme/smenob-all.hfst > smenob.hfst

curl https://gtsvn.uit.no/biggies/trunk/bin/nob/nobsme-all.hfst > nobsme.hfst

curl https://gtsvn.uit.no/biggies/trunk/bin/fin/finsme-all.hfst > finsme.hfst

curl https://gtsvn.uit.no/biggies/trunk/bin/fin/smefin-all.hfst > smefin.hfst

```


South Saami:

```
curl https://gtsvn.uit.no/biggies/trunk/bin/sma/smanob-all.hfst > smanob.hfst

curl https://gtsvn.uit.no/biggies/trunk/bin/nob/nobsma-all.hfst > nobsma.hfst

```

For other dictionaries, replace _sme/smenob-all.hfst_ above with _smn/smnfin-all.hfst_, _fin/finsmn-all.hfst_, _sma/smanob-all.hfst_, _nob/nobsma-all.hfst_, and correspondingly for _sme/smenob.hfst_ etc.

#### 3.1.2. Using the dictionaries

The dictionaries may be used in two ways:

- send a list of baseforms through it: `cat smn-words.txt | hfst-lookup smnfin-all.hfst`
- use the dictionary interactively: `hfst-lookup smnfin-all.hfst`and thereafter write Inari Saami words and press ENTER. Leave the program with `ctrl C`.

### 3.2. Word analysers

```
curl https://gtsvn.uit.no/biggies/trunk/bin/smn/smn.hfstol > smn.hfstol
```

Use the word analysers in two ways:

a, send lists with one word per line through them: `cat wordlist | hfst-lookup smn.hfstol`

b. use the analyser interactively (put it on stand-by) with ` hfst-lookup smn.hfstol` and feed it with one word at a time (press ENTER). Leave the program with `ctrl C`.

### 3.3. Spellers

**Note** The spellers will need the _hfst-ospell_ program (**TODO**: Document how to get hfst-ospell from nightly).

```
curl https://gtsvn.uit.no/biggies/trunk/bin/smn/smn.zhfst > smn.zhfst
```

Thereafter use them as follows (presuming you have the _hfst-ospell_ program:

```
hfst-ospell -S -n 5 smn.zhfst
```

The flag `-S` means "present a correction suggestion", and the flag `-n 5` specifles the number of suggestions (here: 5).

## 4. Running the analysers on Windows:

### Install

All the above works on Linux and Mac. In order to make it work on Windows, do the following (one or the other; with a new or updated computer you probably have Windows 11, check in the control panel if you are not sure):

- [Install a Linux shell on Windows 11](https://techcommunity.microsoft.com/discussions/windows11/how-to-install-the-linux-windows-subsystem-in-windows-11/2701207)
- [Install a Linux shell on Windows 10](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

It is not too complicated, but requires admin rights on your machine. Thereafter, execute the commands for **Linux ubuntu** above.

### Moving between the Linux and Windows worlds

After having installed Ubuntu on Windows, you have a terminal window
with `/home/yourusername/` as your home catalogue (where
*yourusername* is just that. Now, we want two things: Access windows
files via the terminal, and accessing the terminal via Windows File
Manager.

#### Accessing Windows files via the terminal

You can find the *path* to your Windows files by writing

```
/mnt/c/Users/
```

One of the folders (or subfolders!) shown will hopefully be your user
name. Note that this path will find files **on your computer**, not
eventual files in the cloud, such as *OneDrive*, etc.

#### Accessing your Linux folder via Windows File Manager

In the Ubuntu window, write

```
wslpath -w $HOME
```

The answer you get will help Windows find your Linux (Ubuntu)
files. To do that, open the yellow folder symbol, showing the files in
your computer. In the address field (the to the right of the arrows in
the top of the window), copy in the the answer you got from the
*wslpath* into this field, and press enter.

