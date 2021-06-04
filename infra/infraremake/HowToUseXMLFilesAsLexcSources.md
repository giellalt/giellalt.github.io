# How to use XML files as lexc sources

.xml to .lexc generation in the `main/langs/LANG/src/morphology/stems` directory allows for reusing of lemma:stem:continuation information with other important dimensions of a given language. The same xml file might be used as a source file for the NDS reader's assistant, enabling storage of source language to target language word pairs for multiple target languages. It might also be used, at least in the initial work, with: ICALL (Oahpa environment); Constraint Grammar; Rule-based translation (Apertium), and text-to-speech applications. 




If you want to utilize .xml to .lexc generation in the `main/langs/LANG/src/morphology/stems` directory, there are few items to bear in mind:


* both source .xml and target .lexc files must be declared in the `main/langs/LANG/src/morphology/Makefile.am` file
* no work should be done in `main/langs/LANG/src/morphology/stems/...lexc` files.


In the `main/langs/LANG/src/morphology/stems/` directory, you may wish to change from simple .lexc work to generating these .lexc files from analogous .xml files. This will mean that comments should be moved out of the `main/langs/LANG/src/morphology/stems/...lexc` files and into perhaps the `main/langs/LANG/src/morphology/root.lexc` or the `main/langs/LANG/src/morphology/affixes/...lexc` files. 


Once comments have been moved out of the `main/langs/LANG/src/morphology/stems/...lexc` files, we are ready to declare generation targets and sources in the 
 `main/langs/LANG/src/morphology/Makefile.am` file.  There are three fields of declaration:  (1) Giellatekno lexc sources, maintained source lexc files;
 (2) generated lexc sources, these produced with xsl transformation, and (3) Giellatekno xml sources, the part-of-speech oriented database. If you are just beginning work with a language, your `main/langs/LANG/src/morphology/Makefile.am` file might look something like the following: 


START


```
# Set this to the names of all other source lexc files
GT_LEXC_SRCS=\
                         stems/abbr.lexc          \
                         stems/acro.lexc          \
                         stems/exceptions.lexc    \
                         stems/punct.lexc         \
                         stems/adjectives.lexc \
                         stems/adverbs.lexc \
                         stems/nouns.lexc \
                         stems/verbs.lexc \
                         affixes/adjectives.lexc  \
                         affixes/adverbs.lexc     \
                         affixes/nouns.lexc       \
                         affixes/verbs.lexc


# Set this to the names of all generated lexc files, if any
GENERATED_LEXC_SRCS=


# Set this to the names of all source xml files, if any
GT_XML_SRCS=
```


END


The changes you want to make in the declaration will include the removal of the files:


```
                         stems/adjectives.lexc \
                         stems/adverbs.lexc \
                         stems/nouns.lexc \
                         stems/verbs.lexc \
from the 
GT_LEXC_SRCS=\ 
declaration, and their declaration in
GENERATED_LEXC_SRCS=\
```


Please, note the commented new lines.


Additionally, the xml files must also be declared, resulting in the following:




START


```
# Set this to the names of all other source lexc files
GT_LEXC_SRCS=\
                         stems/abbr.lexc          \
                         stems/acro.lexc          \
                         stems/exceptions.lexc    \
                         stems/punct.lexc         \
                         affixes/adjectives.lexc  \
                         affixes/adverbs.lexc     \
                         affixes/nouns.lexc       \
                         affixes/verbs.lexc


# Set this to the names of all generated lexc files, if any
GENERATED_LEXC_SRCS=\
                        $(srcdir)/stems/adjectives.lexc    \
                        $(srcdir)/stems/adverbs.lexc       \
                        $(srcdir)/stems/nouns.lexc         \
                        $(srcdir)/stems/verbs.lexc




# Set this to the names of all source xml files, if any
GT_XML_SRCS=\
                        stems/adjectives.xml    \
                        stems/adverbs.xml       \
                        stems/nouns.xml         \
                        stems/verbs.xml


```


END


A few notes:


* all but the last file should have newline escaping, and experience indicates that you do not want intermittent files that are commented out
* the names of the .lexc files are generated from the source .xml file names, i.e. be sure you name your .xml files with that in mind.




As the .xml files become more extended and specific to your every need, you may choose to establish feeder .lexc files with simple lexc content.  If you want to do this, there are various solutions to choose from. One used in kpv is the `main/langs/LANG/src/morphology/stems/nouns_newwords.lexc` file.


Remember to declare the new file both in GT_LEXC_SRCS= of the `main/langs/LANG/src/morphology/Makefile.am` file and the new lexicon in the `main/langs/LANG/src/morphology/root.lexc` file, perhaps N_NEWWORDS would be a working lexicon name. 


So far the xml format has only been used by the AKU project. The xml files used in AKU make use of a mutual xsd description of the xml structure, and the xsl conversion features simple Finnish glossing in the generated .lexc source files.




Here are a couple of further points:




* the .xml files are checked against an .xsd schema 


```
<r xsi:noNamespaceSchemaLocation="$GTHOME/giella-core/schemas/fiu-dict-schema.xsd"
   xml:lang="mrj" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xmlns:xs="http://www.w3.org/2001/XMLSchema"
   xmlns:hfp="http://www.w3.org/2001/XMLSchema-hasFacetAndProperty"
   xmlns:fn="http://www.w3.org/2005/02/xpath-functions">
```




* as long as the files follow this schema, and the declarations are completed as illustrated above, just dropping them in the dir
  `src/morphology/stems/` is enough - they will then be automatically
  converted to lexc, and from there on to the lexical fst as usual.


Use of the xml format outside the AKU project may require some 
adaption or generalisations of the present structure.


* Features of the AKU project that may require adaptation are:
  The lexc derived from the xml provides a Finnish gloss directly derived
  from the first Finnish translation node in the xml structure.


The xsd provides a possibility for semantic classes to be added within
mg elements. These semantic classes correspond to semantic classes used in 
the [oahpa.no/davvi](http://oahpa.no/davvi) ICALL environment.
