# Installing a North Saami speller for php-enchant


This document describes how to install a North Saami spellchecker for php using voikko/enchant as a provider.




## Adding hfst-macports as MacPorts source


Open a terminal and write:


```
cd
git clone https://github.com/albbas/hfst-macports.git
cd hfst-macports
pwd
```


Open a second terminal. Edit the MacPorts sources.conf file, e.g.


```
sudo vim /opt/local/etc/macports/sources.conf
```


Above the line:
```
rsync://rsync.macports.org
```


Add
```
file://<the answer pwd gave in the first terminal>
```


In my case the line will become:
```
file:///Users/albbas/hfst-macports
```


Notice the **three** slashes after "file:"


Save and close the sources.conf file.


To check that this local port is active, write


```
port search libvoikko
```


in the terminal


The answer should be


```
libvoikko @4.0 (textproc, devel)
    Spell-checking library for Finnish and other languages
```


If the answer is


```
No match for libvoikko found
```


then check that your **file** line in sources.conf is correct.


## Install hfst-ospell


```
sudo port install hfstospell
```


## Install python3


libvoikko needs python3


```
sudo port install python35
sudo port select --set python3 python35  
```


## Install libvoikko


```
sudo port install libvoikko
```


## Install enchant with support for libvoikko


```
sudo port -v install enchant +libvoikko
```


## Install enchant for php


(Here it is assumed that php 5.6 is the active php version. Substitute php56 with your active version, eg php53)


```
sudo port install php56-enchant
```


When this install is finished, write this in a terminal:


```
enchant-lsmod
```


The answer should show this:
```
aspell (Aspell Provider)
ispell (Ispell Provider)
myspell (Myspell Provider
voikko (Voikko Provider)
```


where Voikko Provider is the interesting case for us


# Install the North Saami spellchecker


As the enchant/voikko combo only provides fi as of now (20151204), the North Saami spellchecker has to be shoehorned in. This means that to get North Saami spellchecking, one must specify fi as the speller language and install the spellchecker the way it is described below.


In the terminal write this:
```
sudo mkdir -p /opt/local/lib/voikko/3/
curl -o fi.zhfst http://divvun.no/static_files/zhfsts/se_avvir.zhfst
sudo cp fi.zhfst /opt/local/lib/voikko/3/
```




# Testing the North Saami spellchecker


To check if php/enchant/libkvoikko works as expected, you can fetch a
test script from the Divvun/Giellatekno repository.


Write this in the terminal


```
wget --no-check-certificate https://gtsvn.uit.no/langtech/trunk/gt/script/prooftools/test-enchant.php
php56 test-enchant.php
```


This should result in:


```
Current broker provides the following backend(s):
Array
(
    [0] => Array
        (
            [name] => aspell
            [desc] => Aspell Provider
            [file] => /opt/local/lib/enchant/libenchant_aspell.so
        )


    [1] => Array
        (
            [name] => ispell
            [desc] => Ispell Provider
            [file] => /opt/local/lib/enchant/libenchant_ispell.so
        )


    [2] => Array
        (
            [name] => myspell
            [desc] => Myspell Provider
            [file] => /opt/local/lib/enchant/libenchant_myspell.so
        )


    [3] => Array
        (
            [name] => voikko
            [desc] => Voikko Provider
            [file] => /opt/local/lib/enchant/libenchant_voikko.so
        )


)
Array
(
    [0] => Array
        (
            [lang_tag] => fi
            [provider_name] => voikko
            [provider_desc] => Voikko Provider
            [provider_file] => /opt/local/lib/enchant/libenchant_voikko.so
        )


)
dictionary fi provides:
Array
(
    [lang] => fi
    [name] => voikko
    [desc] => Voikko Provider
    [file] => /opt/local/lib/enchant/libenchant_voikko.so
)
Suggestions for 'nuvviDspeller':Array
(
    [0] => Divvun speller for Northern Sami
    [1] => se version 0.1, 04.12.2015, rev
    [2] => Built using HFST 3.8.3, rev4409
    [3] => nuvvispellet
    [4] => nuvvispiller
)
```
