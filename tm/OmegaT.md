OmegaT
======

OmegaT is an open source program for using translation memories when translating text. The best translation memory is the one built from one's own translations, but we also offer [translation memories for Nordic minority language pairs](TranslationMemories.html). There are [many CAT programs](https://en.wikipedia.org/wiki/Comparison_of_computer-assisted_translation_tools), what is special with OmegaT (apart from being open source and free) is that you may integrate it with machine translation from Apertium, including machine translation between Saami languages.



# Installation and use

## Installation
- [Installation](https://wiki.apertium.org/wiki/Apertium_OmegaT_Native)

Install also the  "Apertium plug-in (Needed for machine translation)"

As explained in the installation guide there is a known bug on mac: the *Install Language Pairs* window under *Options* > *Apertium Native (Nightly)* is too small. To be able to install the language pairs, you have to make the window bigger.

We recommend you to regually update the machine translations pairs you are using. 

![Install Language Pairs window](/../images/Language_Pairs_window.png)


## Creating projects
After installing you need to make projects for every language pair you are translation between. If you are translation between more languages make projects such as *North Sami-Lule Sami*, *Norwegian-Lule Sami* and *Lule Sami-Norwegian*. 

To create a project in OmegaT, select *Project*, then click *New*. The *Create a New Project* dialog appears. In this window you add correct iso code for the language pair of the project. If you´re making a Northern Sami-Lule Sami project you have to add *sme* as *Source file language*, and *smj* as *Translated files language*.

* Lule Sami = smj
* South Sami = sma
* Northern Sami = sme
* Bokmål = nob
* Finnish = fin
* Swedish = swe

## Translation memory 

Go to [Translation Memory](https://giellalt.uit.no/tm/TranslationMemory.html?fbclid=IwAR1U2CSph4wpWrCIMVcucOYC3V10PWZWD38M3T_bQgkH46WvNFhI1qHoupE). Download the translation memory file for the languages you are translating between. Move the .tmx file to tm folder in matching project folder.

## Gloassary
Go to [Glossary files](https://giellalt.uit.no/tm/TranslationMemory.html?fbclid=IwAR1U2CSph4wpWrCIMVcucOYC3V10PWZWD38M3T_bQgkH46WvNFhI1qHoupE). Download the gloassary file for the language you are translating from. Move glossary file to glossary folder in matching project folder. 

## North Sami and South Sami dictionaries

If you're translation from North Sami or South Sami you may dowloand the dictionary files from [Digital dictionaries] (https://dicts.uit.no/dicts/dict-stardict.eng.html) and move these files to the dictionary folder in your project. 


## Use

Read the documentation or search for "OmegaT" on Youtube. 
- [Documentation](https://omegat.org/documentation)

A few tips:

By default, OmegaT pastes the source text into the target text segment for you.  We recommend you to change this to *Leave the segment empty*. Go to *Options* > *Preferences* >  *Editor*.


We also recomend you to read about the *Shortcuts customization* in the documentation, these will help you use the OmegaT effctivly. 
