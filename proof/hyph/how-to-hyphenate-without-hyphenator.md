Hyphenating text in the GiellaLT framework
==========================================

*This procedure is offered as a workaround while waiting for our hyphenators.*

At present (2022) the GiellaLT framework cannot offer hyphenation integrated in its proofing tools. What we can offer, however, is a hyphenation component, either based upon the phonological structure of the language or upon both phonological and morphological cues. 

In some cases, e.g. when wanting to publish a book, correct hypehenation becomes important. This procedure shows how a book manuscript may be hyphenated also whan the hyphenation tools are not (yet) integrated in the spellcheckers.

We assume that the manuscript is available in plain text format, in a file here called *manuscript.txt*, and that you have downloaded the `lang-xxx` catalogue from github (`xxx` being the ISO code for you language), as found [here](https://giellalt.github.io/LanguageModels.html). If so, do the following:

1. In the terminal window, go to your language catalogue `lang-xxx`
1. Set up the language for hyphenation (you may have other enable-options as well): 
	- `./configure --enable-fst-hyphenator` 
1. Compile the language hyphenator: 
	- `make -j`
1. If the manuscript contains the hyphen symbol, and you want to preserve it, change it to some symbol not in the text (say, "‰"). Then run the manuscript through the hyphenator:
	- `cat manuscript.txt |tr '\-' '‰' |
	hfst-lookup -q tools/hyphenators/hyphenator-gt-desc.hfstol | cut -f2 | uniq > hyph-manuscript.txt`
1. Open the file `hyph-manuscript.txt` in Microsoft Word
1. In Word, go to the menu **Edit > Search > Replace**, and replace the symbol "-" with the hyphenation symbol (you find it by pressing the ▾ symbol in the right corner of the "replace with" textfield)
1. If you want to restore your original hyphen marks, replace "‰" with "-"

**That's it! In 7 simple steps (!), you now have a book manuscript with hyphen boundaries exactly where you want to have them.**

