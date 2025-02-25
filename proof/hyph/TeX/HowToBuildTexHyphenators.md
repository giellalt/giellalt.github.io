# TeX /LibreOffice Hyphenators

The TeX / LibreOffice hyphenation system uses trigram patterns to identify the
hyphenation points. The patterns are extracted automatically from a given list
of hyphenated words. In the GiellaLT infrastructure, this list is generated from
an FST with all hyphenation points in place. More information about this FST can
be found on the [FST hyphenation page]().

The build requires that you have `patgen` installed on your system. `patgen` is
part of the TexLive package, which can be installed in several ways:

- Using MacPorts:
  ```sh
  sudo port install texlive-bin-extra
  ```
- Using Brew:
  ```sh
  brew install texlive
  ```
- By installing [MacTex](https://www.tug.org/mactex/).

If `patgen` is not found by `./configure`, search for it as follows:

```sh
find /usr/local -name 'patgen'
/usr/local/Cellar/texlive/20220321_4/bin/patgen
/usr/local/texlive/2022/bin/universal-darwin/patgen

find /opt/homebrew -name 'patgen'
/opt/homebrew/bin/patgen
/opt/homebrew/Cellar/texlive/20220321_4/bin/patgen
```

then specify the preferred path to `./configure` as follows:

```sh
./configure --enable-pattern-hyphenators --with-patgen=/usr/local/texlive/2022/bin/universal-darwin/
```

(But it might be enough to open a new terminal window after installing texlive.)

Continue as below.

## Configuration and Build

```sh
./configure --enable-pattern-hyphenators
make
```

This will create the following files:

```
XX_hyph.tex ## For use with TeX processors
hyph_XX.dic ## For use with LibreOffice and compatible systems
XX.pat      ## Existing hyphenation patterns, if any
```

`XX` is a language code, and will vary from language
to language. It will be ISO 639-1 if available, ISO 639-3 if not.

## The `*.pat` file

This file is empty the first time you make the hyphenation files. On subsequent
runs, an existing `*.tex` is used as input. Thus, by running `make` several
times, the hyphenation files can be improved, as the patterns are adjusted to
accomodate new data generated by each run.

:point_right: For this reason, the `*.dic` and `*.tex` files
**should be stored under version controll**. :point_left:

## The `*.tra` file

Contains mappings from upper to lower case. The default file should be ok, but
have a look to ensure proper mapping. The file can be empty if no mapping beyond
the default ASCII is needed. Some further documentation can be found at the
following places:

- [StackExchange](https://tex.stackexchange.com/questions/52589/how-to-use-translate-file-correctly-in-patgen-of-texlive)
- [Another StackExchange](https://tex.stackexchange.com/questions/205154/patgen-to-create-hyphenation-dictionary-for-utf-8-language)
- [PatGen tutorial](http://tug.ctan.org/info/patgen2-tutorial/patgen2-tutorial.pdf)
- [Another turorial](https://www.sys.kth.se/docs/texlive/texmf-dist/doc/support/patgen2-tutorial/patgen2.pdf)

## Makefile variables

The file `tools/hyphenation/Makefile.modification-pattern.am` contains some
variables that can be used to fine-tune the building process. They are (with
default values provided):

```make
PATTERN_WORD_LIST=15000
HYPH_START_FINISH="1 2"
PATR_START_FINISH="2 4"
GOOD_BAD_THRESHLD="1 1 1"
```

Explanations:

- `PATTERN_WORD_LIST` = size of generated word list for extracting patterns.
  The larger the better patterns are generated, but the longer the build time
  takes.
- `HYPH_START_FINISH`, `PATR_START_FINISH`, `GOOD_BAD_THRESHLD` = various settings
  for the `patgen` tool, see links to `patgen` documentation above.

## `patgen` errors

### "`Bad character`"

- **diagnostics**: `patgen` prints a problematic input string, then this message.
- **solution**: one of the following
  - have a look at the problematic string, and see if there are unexpected
    symbols. That includes checking for combining diacritics; these should be
    fixed in the lexicon/FST.
  - if all symbols/letters are ok, see if one of them is missing from the
    `*.tra` file - add it if that's the case.
- **example**: `hämit-teht-uv-sun` - the letter `ä` is not a precomposed `ä`,
  but `a` + combining diacricit. Find the source in the `LexC` files, and correct
  it there. If there exists no precomposed letter for a certain combination of
  base letter and combining diacritic, add it to the `*.tra` file (**NB!** This
  has not been tested!).

### "`Bad representation`"

- **diagnostics**: `patgen` prints a problematic input string, then this message.
- **solution**: one of the letters in the input string is missing from the
  `*.tra` file, and should be added
- **example**: `Gło-wac-kan-ges` - the letter `ł` could be missing (it is
  missing from the default coming from the template)
