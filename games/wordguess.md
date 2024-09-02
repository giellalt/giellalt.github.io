# Word guesser game

The word guesser game is built on the same idea as MasterMind.

## Basic setup

- Follow the instructions in the [template repo]()

## Creating the word lists

- use identical lists for valid guesses and the word-of-the-day list
- use a pipe like the following (adapt to your language) to create the lists:

```sh
cat ../../main/words/lists/smj/2021-11-03_smj_lemma.freq | # use an existing lemma list if available
  grep -v ' Prop'                             | # Remove proper nounds - check the tag
  tr -s ' '                                   | # squeeze spaces (check output of previous command)
  cut -d' ' -f3                               | # use the third field for further processing
  grep -v -e '[-é\ /.]' -e '[A-Z]' -e '[0-9]' | # Remove lines containing various noise letters
  grep '^......$'                             | # Extract words only 6 letters long - adjust if needed
  hfst-lookup -q lang-smj/src/fst/analyser-gt-norm.hfstol | # analyse all extracted lemmas
  grep -v 'inf$'                              | # Remove unrecognised lemmas
  grep -v '^$' | cut -f1 | uniq               | # clean up the analysis output
  sort -R                                       # randomise the list of words
```

Alternatively, you can grab the list of lemmas directly from the `lexc` files:

```sh
./giella-core/scripts/extract-lemmas.sh \
  lang-sje/src/fst/morphology/stems/*lexc     | # Extract all lemmas from lexc
  grep '^......$'                             | # Grep all and only words with correct length
  grep -v -e '[A-ZÁÆØÅÄÖ]' -e '\.' -e '[0-9]' | # Grep away problem strings
  sort -u | sort -R                             # clean and randomise
```
