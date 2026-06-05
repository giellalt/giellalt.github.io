# Extracting sentences for precision testing

This document explains how you may harvest sentences that get error tags in
large corpora. The first command gives all the sentences, and the second splits
them according to tag and formats them for yaml testing.

## Commands

The commands assume you have compiled the grammarchecker and tokeniser
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

The program will take any plain text input, use the `hfst-tokeniser` with the
tokeniser found in the language repo where the grammarchecker exists to divide
the input into sentences, then grammarcheck the sentences.

If the gramchecker archive is at
`$HOME/lang-smn/tools/grammarcheckers/smn.zcheck`, the output files will be
found in `$HOME/lang-smn/tools/grammarcheckers/tests/candidates`

The output will test files classified by error type as specified by the
grammarchecker.

The resulting files will contain tests with error markup as a result of what the
grammarchecker found. Typos will use `$` as markup sign, all errors use `§` as
the markup character.

### Integrating the result in regression testing

Move interesting sentences from
`<gramcheck-dir>/tests/candidates/<prefix>-<tag>-FAIL.yaml` to
`<gramcheck-dir>/tests/<tag>-FAIL.yaml`

Edit the markup of the tests you moved to suit the markup standards of your
language and to fix erroneous markup.

Then run
`gtgramtools test -c yaml --move-tests <gramcheck-dir>/tests/<tag>-FAIL.yaml`

This will move passing tests to `<gramcheck-dir>/tests/<tag>-PASS.yaml`. The
`*PASS.yaml` file is used for regression testing.
