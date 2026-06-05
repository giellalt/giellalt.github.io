# Extracting sentences for precision testing

This document explains how to harvest sentences that receive error tags in large
corpora.

## Commands

The command assumes you have compiled the grammar checker and tokeniser
(`./configure --enable-grammarchecker --enable-tokenisers`).

Use `gtgramtool create-candidates` to generate candidate YAML files. Input is
read from stdin only. The default prefix for candidate files is today's date in
`YYYY-mm-dd` format.

- From a file: `gtgramtool create-candidates path/to/archive.zcheck < input.txt`
- From a pipe:
  `cat input.txt | gtgramtool create-candidates path/to/archive.zcheck`
- With custom prefix:
  `cat input.txt | gtgramtool create-candidates path/to/archive.zcheck --candidate_prefix my-prefix`
- Using ccat:
  `ccat -l <mylang> -a $GTLANGS/corpus-<mylang>/converted/<interesting-genre> | gtgramtool create-candidates $GTLANGS/lang-<mylang>/tools/grammarcheckers/<mylang-possibly-two-letters-long>.zcheck`
  (e.g. `gle` is `ga`, `kal` is `kl`, `fao` is `fo`)

The program takes plain-text input, uses `hfst-tokeniser` with the tokeniser
from the language repository where the grammar checker exists to divide the
input into sentences, and then grammar-checks the sentences.

If the grammar checker archive is at
`$HOME/lang-smn/tools/grammarcheckers/smn.zcheck`, the output files will be
found in `$HOME/lang-smn/tools/grammarcheckers/tests/candidates`.

The output consists of test files classified by error type, as specified by the
grammar checker.

The resulting files contain tests with error markup based on what the grammar
checker found. Typos use `$` as the markup sign; all other errors use `§` as the
markup character.

### Integrating the result in regression testing

Move interesting sentences from
`<gramcheck-dir>/tests/candidates/<prefix>-<tag>-FAIL.yaml` to
`<gramcheck-dir>/tests/<tag>-FAIL.yaml`

Edit the markup of the tests you moved to match your language's markup standards
and to fix incorrect markup.

Then run
`gtgramtool test -c yaml --move-tests <gramcheck-dir>/tests/<tag>-FAIL.yaml`

This will move passing tests to `<gramcheck-dir>/tests/<tag>-PASS.yaml`. The
`*PASS.yaml` file is used for regression testing.
