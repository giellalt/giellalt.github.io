Morfeme border markup
=====================

We want to separate the following types of morfeme borders:

-   inflection: **&lt; &gt;** - *ver&lt;kauf&gt;en* ( that is,
    pref&lt;root&gt;suff)
-   derivation: **« »** - *boahti»goahtit* , *u«kast»ing*
-   word boundary: **\#** - *bil\#stol*
-   compound morfeme: - *trikk\|e\#tur*
-   clitics: **«\|** **\|»** - *gærja\|»gænnah* (these are multichar
    symbols that should be defined in the lexc and twolc alphabets)

When adding the markup to the lexical entries, it should be done in the
continuation lexica, not in the stem lexica.

      LEXCICON Adjectives
      stor cont ; ikkje stammemerke her!!!
      
      LEXICON cont
      +Def+Pl:%>e # ; ! men her
      +Der:%»aktig # ; ! and here
      

Other examples:

      stor»aktig>es
      ráhkis»vuođa>id
      
