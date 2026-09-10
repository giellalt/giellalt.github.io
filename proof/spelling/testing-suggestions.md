# Testing speller suggestions

We test speller suggestion with divvunspell.

## Test procedures

### Testing `typos.tsv` on the command line

Stand in any language repository, and do:

```sh
./autogen.sh
./configure --enable-spellers
make -j
make check -j
```

These commands build the speller for the selected language, and then run (among other things) a test that generates a speller accuracy report at `docs/typosreport/report.json` (plus `docs/typosreport/report-<variant>.json` for each speller variant, if the language has any). The report is written only if `divvunspell` (with the `accuracy` subcommand) is installed; otherwise that test is skipped.

### Viewing the test report

#### On the web

The accuracy viewer is served by the shared Jekyll theme
([`giellalt/jekyll-theme-giellalt`](https://github.com/giellalt/jekyll-theme-giellalt)),
and the report data is published automatically on every CI build — you do **not**
commit `report.json`. After your speller changes are merged and the build has
run, the latest report is at:

`https://giellalt.github.io/lang-XXX/typosreport/`

#### View locally

The viewer is a WebAssembly app that lives in the theme, not in the language
repo, so a bare `python3 -m http.server` in `docs/` no longer shows anything.
Instead, run the helper script — it fetches the viewer from the theme, puts your
local `report.json` next to it, and serves the two together:

```sh
docs/typosreport/preview.sh
```

Then open `http://localhost:8000/` (the script tries to open it for you).

Options: `--port N` to change the port, `--refresh` to re-download the viewer,
`--no-open` to skip opening a browser. The script needs `curl` and `python3`;
everything it downloads goes in gitignored scratch dirs under `docs/typosreport/`.

Re-run `make check -j` to regenerate `report.json`, then re-run the script (or
just reload the page after re-running the script) to see the new numbers.

### Testing arbitrary tsv files on the command line

To try a `typos.tsv` that isn't in a language repo, generate a report with
`divvunspell` directly and view it with the same script. Build the speller
first (`make -j` in the language repo), then:

```sh
divvunspell accuracy --verbose \
    -o /path/to/lang-fit/docs/typosreport/report.json \
    my-typos.tsv \
    /path/to/lang-fit/tools/spellcheckers/fit.zhfst

/path/to/lang-fit/docs/typosreport/preview.sh
```

`my-typos.tsv` is a tab-separated `input<TAB>expected` list; rows with an empty
`expected` column are treated as correct words (to measure false positives).
`--verbose` adds the per-suggestion weight breakdown (lexicon / mutator /
reweight) to the report.

### Running a wordlist through divvunspell

The following command takes a wordlist (here, for **fit**), spits it out in _json_ format with 5 suggestions, and shows only the words that according to _divvunspell_ are spelled incorrectly.

`cat wordlist | divvunspell suggest --json -n 5 -a tools/spellcheckers/fit.zhfst |jq -c|tr '{' '\n'|grep -v ":true"`

## Evaluate test results

In order to evaluate the effect of the suggestion mechanism, one must for each target word (each suggestion) take the corpus weight into consideration. The corpus weight of each target word we get as follows:

`hfst-lookup tools/spellcheckers/analyser-desktopspeller-gt-norm.hfst`
