# Error markup for SMA - South Sámi

We want to extend (some of) the corpus files with markup for spelling
and other errors, to use them as gold standards for testing our spellers
(and in the future other tools as well). The markup is done manually,
and needs to follow certain rules.

- **Possible values for _errtype_::**  
  ( ??? )
- **Comments to each _errtype_ value:**
  - ???
- **Comments to some _pos_ values:**
  - typo = typical typo — as a POS value?
  - mix = used with errtype=ncmp, since the correct form is made of
    several words/POS's. Problem: there is no such _errtype_ value,
    only _wcmp_ and _cmp_.

By following these guidelines the resulting files should be readily
useable for (speller) testing, as soon as they are converted to xml.
