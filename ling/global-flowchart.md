The flowchart shows parsing done with two different analysers: Method 1,
for hfst analysers where pre- and postprocessing is integrated in the
morphological analysis, and method 2, for xfst analysers, using perl for
pre- and postprocessing of the text.

Method 1 (hfst)
===============

            Action taken..              ..by means of the commands:
            **************              ****************************
    +------------------------------+
    |     take incoming text       |    cat filename.txt |
    +------------------------------+
                 \/
    +------------------------------+  
    | divide it into sentences and |
    | words and give each token    |
    | all possiblemorphological    |    hfst-tokenise -g tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst |
    | analyses                     |  
    +------------------------------+  
                 \/
    +------------------------------+
    | disambiguating the m-analysis|  
    | (= picking only the relevant |    vislcg3 -g src/syntax/disambiguation.cg3 |
    | morphological analyse)       |  
    +------------------------------+
                 \/
    +------------------------------+
    | adding syntactic functions   |    vislcg3 -g src/syntax/functions.cg3 |     
    +------------------------------+
                 \/
    +------------------------------+
    | adding depenency relations   |    vislcg3 -g src/syntax/dependency.cg3 
    +------------------------------+

Method 2 (xfst)
===============

Method 2 differs only in that the morphological analysis is divided in 3
separate components

            Action taken..              ..by means of the commands:
            **************              ****************************
    +------------------------------+
    |     take incoming text       |    cat filename.txt |
    +------------------------------+
                 \/
     +--------------------------+
     | preprocessing it:        |
     | moving one word per line,|       preprocess --abbr=bin/abbr.txt |  # method 1 |
     | finding sentence bound.  |    
     +--------------------------+
                 \/
    |-----------------------------+
    | morphological analysis:     |
    | give each word all possible |    lookup -flags mbTT -utf8 src/analyser-gt-desc.xfst |
    | analyses                    |
    |-----------------------------+  
                 \/
    |-----------------------------+
    | processing the output into  |
    | a format that fits the dis- |    lookup2cg 
    | ambiguator, w/a perlscript  |  
    |-----------------------------+
                \/
           ...
      ( then continue with disambiguation as shown above )
          

The commands assume you stand in the directory of the language you work
with. Method 2 may also be used with hfst (hfst-lookup), but method 1
works only for hfst.
