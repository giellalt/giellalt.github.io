# Morpheme border markup

We want to separate the following types of morfeme borders:

- inflection: **&lt; &gt;** - _ver&lt;kauf&gt;en_ ( that is,
  pref&lt;root&gt;suff)
- derivation: **« »** - _boahti»goahtit_ , _u«kast»ing_
- word boundary: **\#** - _bil\#stol_
- compound morfeme: - _trikk\|e\#tur_
- clitics: **«\|** **\|»** - _gærja\|»gænnah_ (these are multichar
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

