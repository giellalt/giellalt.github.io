OmegaT and machine translation
===============================


# OmegaT as an MT platform


OmegaT is one of many [computer-assisted translation
](https://en.wikipedia.org/wiki/Computer-assisted_translation) (CAT)
programs, i.e. programs that help you translate documents from one
language to another. OmegaT is open source and it is thus possible to
adapt it to translation to and from Saami languages. Most of [our
resources for computer-assisted
translation](../../tm/TranslationMemory.html] can be used by [all CAT programs](https://en.wikipedia.org/wiki/Comparison_of_computer-assisted_translation_tools), though (the exception is machine translation, that works only for OmegaT).


# Installation


The user documentation page for OmegaT refers to installation and user documentation, and can be found here:


* [Installation instructions](http://wiki.apertium.org/wiki/Apertium_OmegaT_Native)
* [Documentation](http://omegat.org/documentation) (Go for the **English html** one)


## Internal plans for OmegaT development


What follows are our thoughts for developing CAT for Saami.


### Outline


The idea is to offer a set of ready-made folders, perhaps in two different formats:


1. as a one-time downloading of a zipped file archive
1. as svn checkout (via Tortoise on Windows) for access to updates


For the time being, the folders are at [https://gtsvn.uit.no/biggies/trunk/mt/omegat/].


The idea is to put the following resources into the following subdirectories:


* into `dictionary`: our StarDict dictionary smenob (OmegaT [documentation](http://omegat.sourceforge.io/manual-standard/en/chapter.dictionaries.html)) (**todo**)
* into `glossary`: term lists, partly fad-marked pairs, partly from satni.org, cf [documentation](http://omegat.sourceforge.io/manual-standard/en/chapter.glossaries.html) (**done**)
* into `tm`: our parallel texts, **all files fused into one .tmx file** (or one per theme), cf [documentation](http://omegat.sourceforge.io/manual-standard/en/chapter.translation.memories.html) (**done**)
* into `omegat`: a file segmentation.conf, for doing sentence level segmentation, cf. [documentation](http://omegat.sourceforge.io/manual-standard/en/chapter.segmentation.html) (**done** for sme)


The source and target folders are given *svn ignore* status, as we develop the folders we should determine what other files to ignore and what to share.




### The language pairs


The language pairs are of three types:


1. **smesmn, smesmj, smesmn:** The main thing here is MT, glossaries and
  dictionaries are less interesting since they are already in bidix,
  and since we do not have a OmegaT-compatible tokenizer to look up
  inflected words.
1. **nobsme, nobsmj, nobsma, finsme, finsmn, finsms:** Here we have no MT
  (except for finsme, which is not much developed). The focus here is
  on glossaries (fad project, etc.) and translation memory
1. **smasme, smjsme, smnsme, smenob:** these we ignore in OmegaT for now.
  They are mainly made for understanding, not for text production.


### Milestones


1. Add glossaries (**done for nobsmX**)
1. Improve mt  (**done for nobsmX**)
1. Develop segmentation.conf (**in progress for sme**)
1. Test and evaluate 


### Future plans


Adding more resources:


* Improve segmentation.conf
* Investigate the settings pane for optimal choices
* Add proofing tools (hunspell)
* Lemmatisation of dictionary lookup (FST or StarDict)


### HFST Tokenizer


You can get the hfst tokenizer ready compiled. You need to download:


* [Hfst
  tokenizer](http://divvun.no/static_files/omegat-hfst-tok/omegat-hfst-tokenizer-0.3.jar)
* [Hfst lookup library](http://divvun.no/static_files/omegat-hfst-tok/hfst-1.1.5.jar)
* [HPPC](https://repo1.maven.org/maven2/com/carrotsearch/hppc/0.7.3/hppc-0.7.3.jar)


And put them into `~/Library/Preferences/OmegaT/plugins` (create the dir if it's not there). Tested and works with OmegaT 4.x.


Hfst tokenizer source is at [github](https://github.com/divvun/OmegaT-hfst-tokenizer)
