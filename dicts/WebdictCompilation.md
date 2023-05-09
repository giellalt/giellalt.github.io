# Compiling the Apertium-style webdicts

This text documents the compilation process of [a set of Apertium-style web dictionaries](http://gtweb.uit.no/webdict/index.html).

## Prerequisites

* Make sure the environment variable GTHOME is defined
* The saxon library must be installed

Both these points should be fullfilled if the advices in [Gettings started](/infra/GettingStarted.md) have been done.

* apertium-dixtools must be installed (`git clone https://github.com/apertium/apertium-dixtools.git; cd apertium-dixtools; ant jar; sudo ant install`)

## Converting

* Go to the dictionary folder: `cd $GTHOME/words/dicts`
* Choose one of the dictionary folders there (e.g. `smenob`)
* Run `scripts/gtdict2webdict.py smenob` (replace smenob with your preferred folder)
* The resulting file will be found in `$GTHOME/apps/dicts/apertium_dict/dics/sme-nob-lr-trie.xml` (`sme` and `nob` will be different for other language pairs)


## Converting the webdicts on the UiT server (for Tromsø employees)

Read [this documentation](https://divvungiellatekno.github.io/giellalt.uit.no/dicts/WebdictCompilation.html)
