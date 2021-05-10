$ Maverick upgrade notes


There are no big changes when it comes to language support and language
technology in Maverick compared to Mountain Lion. The few points to mention:


* offline dictation is available for a select few languages (English, French,
  Italian, Japanese, Chinese, Korean, Spanish, German)
* the speller language preferences have been moved from the Language & Text
  control panel to the Keyboard control panel


# Changes to the development tools


The most important change is that XCode 5 under Maverick has no visible option
for installing command line tools. Instead one must use a command line tool with
a specific option:


```xcode-select --install```


The benefit of this is that one does not have to download and install the XCode
package at all, which also means that there is no need to create an iTunes
account just to get the command line tools.


## HFST compilation issues


Another effect of changes to the compilation of third party tools is that the
configure and make commands have to be slightly modified for Hfst to build:


```
./configure --without-foma --with-unicode-handler=glib --enable-all-tools \
    CXXFLAGS="-I/usr/include/c++/4.2.1" LDFLAGS=" -stdlib=libstdc++"
```


Comments:
* the first line lists the default configuration we use for the Divvun/GT infra
* the second line is the additional parameters needed for Hfst to build on
  OSX 10.9 / Maverick
** actually, the CXXFLAGS option is because of a bug in the OpenFST backend
   code([1]) meaning that the only Maverick specific issue is the LDFLAGS
   option([2])


For general info on how to build HFST, see [this page](compiling_HFST3.html).


# Summary of linguistic features/properties in MacOSX 10.9 / Maverick


* Unicode fonts: yes (at least 3)
* At least one font for every Unicode code point: no
* built-in keyboard layouts: 71 languages (many languages have multiple inpu
  methods/keyboard layouts) (Jf Trosterud 2004, Trosterud i Nordlyd 2012)
* User interface localisations: 33 languages (not extensible)
* built-in spellers: 11 languages, but — using Hunspell `.aff` and `.dic`
  files — extensible to any language; ISO 639-2 languages will be presented by
  name (i.e. "sma" will be presented as *South Sámi* in the language of the
  user interface), other languages will be presented using only the language
  code (the non-suffix part of the `.aff` and `.dic` files). Example:
  `abd.aff` and `abd.dic` will be presented as *abd*, not as *Manide*.
* speech synthesis: 28 languages
* speech recognition: 8 languages


----
Footnotes:
[#1] see [https://bugs.launchpad.net/libmemcached/+bug/1216521/comments/2] for
     further details
[#2] see
[http://mathematica.stackexchange.com/questions/34692/mathlink-linking-error-after-os-x-10-9-mavericks-upgrade]
for further details
