# OmegaT

OmegaT is an open source program for using translation memories when translating text. The best translation memory is the one built from one's own translations, but we also offer [translation memories for Nordic minority language pairs](TranslationMemories.html). There are [many CAT programs](https://en.wikipedia.org/wiki/Comparison_of_computer-assisted_translation_tools), what is special with OmegaT (apart from being open source and free) is that you may integrate it with machine translation from Apertium, including machine translation between Saami languages.

# Installation and use

## Installation

- [Installation](https://wiki.apertium.org/wiki/Apertium_OmegaT_Native)

Install also the "Apertium plug-in (Needed for machine translation)"

As explained in the installation guide there is a known bug on mac: the _Install Language Pairs_ window under _Options_ > _Apertium Native (Nightly)_ is too small. To be able to install the language pairs, you have to make the window bigger.

We recommend you to regularly update the machine translations pairs you are using.

![Install Language Pairs window](/../images/Language_Pairs_window.png)

## Creating projects

After installing you need to make projects for every language pair you are translation between. If you are translation between more languages make projects such as _North Sami-Lule Sami_, _Norwegian-Lule Sami_ and _Lule Sami-Norwegian_.

To create a project in OmegaT, select _Project_, then click _New_. The _Create a New Project_ dialog appears. In this window you add correct iso code for the language pair of the project, use lowercase letters. If you´re making a Northern Sami-Lule Sami project you have to add _sme_ as _Source file language_, and _smj_ as _Translated files language_.

### Iso codes

- Lule Sami = smj
- South Sami = sma
- Northern Sami = sme
- Bokmål = nob
- Finnish = fin
- Swedish = swe

## Translation memory

Download the [Translation Memory](https://giellalt.uit.no/tm/TranslationMemory.html?fbclid=IwAR1U2CSph4wpWrCIMVcucOYC3V10PWZWD38M3T_bQgkH46WvNFhI1qHoupE) file for the languages you are translating between. Move the _.tmx_ file to _tm_ folder in matching project folder.

## Glossary

Download [Glossary files](https://giellalt.uit.no/tm/TranslationMemory.html?fbclid=IwAR1U2CSph4wpWrCIMVcucOYC3V10PWZWD38M3T_bQgkH46WvNFhI1qHoupE) for the languages you are translating from. Move glossary file to _glossary_ folder in matching project folder.

Your translation memory is updated automatically when using OmegaT. New glossaries you will have to add manually: Right-click in the glossary pane or press _Ctrl+Shift+G_ to add a new glossary entry. So if you're translating something about frisbees form norwegian to lulesami, you may manually add the glossary _frisbee=littán_, and this will appear the next time you're translating and the word _frisbee_ appears.

### Prioritized glossary

You may add more glossary files to one project. If you're translation from norwegian to lule sami, you may also add norwegian-north sami and norwegian-south sami glossary files, to the _glossary_ folder in your _norwegian-lulesami project_ folder. Change the name of your main glossary file (in this case norwegian-lulesami) to _glossary.txt_, by doing this OmegaT prioritizes this glossary file, and markes it with bold letters.

![Prioritized glossary](/../images/glossary.png)

## North Sami and South Sami dictionaries

If you're translating from North Sami or South Sami you may download the dictionary files from [Digital dictionaries](https://dicts.uit.no/dicts/dict-stardict.eng.html) and move these files to the _dictionary_ folder in your project.

## Use

Read the documentation or search for "OmegaT" on Youtube.

- [Documentation](https://omegat.org/documentation)

A few tips:

- By default, OmegaT pastes the source text into the target text segment for you. We recommend you to change this to _Leave the segment empty_. Go to _Options_ > _Preferences_ > _Editor_.
- We also recommend you to read about the _Shortcuts customization_ in the documentation, these will help you use OmegaT effectively.

## Translating with two source languages

Sometimes you may have the source text available in two languages when you're translating to the third. You may for example be translating from norwegian to lule sami and also have a north sami translation available. If you want to have both norwegian and north sami as source in OmegaT, do the following:

- Make the folder _tmx2source_ in the _tm_ folder of your project. (For the example: in your norwegian-lule sami project).
- In OmegaT click _tools_ and _Align Files_.
- Choose correct iso code and lowercase letters (For the example _nob_ and _sme_) and upload the two text files (the norwegian and the north sami). Make sure the aligment is correct.
- Save the aligned file as _SE.tmx_ in _tmx2source_. It's very important that the file name is two capital letters then _.tmx_.

When opening the source file in your norwegian-lule sami project you should now see both the norwegian and north sami source text.

![Two source languages](/../images/two_source_languages.png)

## Spell checker

The sami spell checkers can not be used in OmegaT. We are working on it. If you want to use a sami spell checker, you have to do this on your target text. You may copy the target text into our [Online Speller](https://divvun.no/korrektur/speller-demo.html).
