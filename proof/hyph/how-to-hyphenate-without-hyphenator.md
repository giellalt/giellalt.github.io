Hyphenating text in the GiellaLT framework
==========================================

*This procedure is offered as a workaround while waiting for our hyphenators.*

At present (2023) the GiellaLT framework cannot offer hyphenation integrated in its proofing tools. What we can offer, however, is a hyphenation component, either based upon the phonological structure of the language or upon both phonological and morphological cues. 

In some cases, e.g. when wanting to publish a book, correct hypehenation becomes important. This procedure shows how a book manuscript may be hyphenated also whan the hyphenation tools are not (yet) integrated in the spellcheckers. It is a bit cumbersome, but compared to manual hyphenation you will literally save days of work on book manuscripts.

We assume that the manuscript is available in plain text format, in a file here called *manuscript.txt*, and that you have downloaded the `lang-xxx` catalogue from github (`xxx` being the ISO code for you language), as found [here](https://giellalt.github.io/LanguageModels.html), and explained [here](https://giellalt.github.io/infra/GettingStarted.html). 

If this is in place, do the following (parts 1-3 you do only once, 4-7 again for each new document):

1. In the terminal window, go to your language catalogue `lang-xxx`
1. Set up the language for hyphenation (you may have other enable-options as well): 
	- `./configure --enable-fst-hyphenator` 
1. Compile the language hyphenator: 
	- `make -j`
1. If the manuscript contains the hyphen symbol, and you want to preserve it, change it to some symbol not in the text (say, "‰"). Then run the manuscript through the hyphenator:
	- `cat manuscript.txt |tr '\-' '‰' |
	hfst-lookup -q tools/hyphenators/hyphenator-gt-desc.hfstol | cut -f2 | uniq > hyph-manuscript.txt`
1. Open the file `hyph-manuscript.txt` in Microsoft Word
1. In Word, go to the menu **Edit > Search > Replace**, and replace the symbol "-" with the **soft hyphen symbol** (you find it by pressing the **▾** symbol in the right corner of the *replace* textfield). When MS Word is localised, the menus have the following names:
	- Finnish: 
		- Edit > Search > Replace = Muokkaa > Etsii > Korvaa
		- Soft hyphen = Tavutusvihje
	- Norwegian:
		- Edit > Search > Replace = Rediger > Søk etter > Erstatt
		- Soft hyphen = Myk bindestrek
1. If you want to restore your original hyphen marks, replace "‰" with "-" in the same menu.

**That's it! In 7 simple steps (!), you now have a book manuscript with hyphen boundaries exactly where you want to have them.**

The example was done for Microsoft Word. You probably figure out how to repeat it in your favourite editor (if possible). Needless to say, we would have preferred for this to be integrated in your favourite text publisher tool. Have a look now and then for updates ad developments.

