# Linguistic testing


## Spellers


* lexical coverage / false negatives
* error detection / true negatives
* error slip-through / false positives




## Hyphenators


* missing hyphenation points
* wrong hyphenation points




# Functional testing


* amount of correct suggestions for all misspellings (=correct suggestion in the
  list?)
* position of correct suggestion within suggestion list
* amount of "noise" / disturbing suggestions
* amount of empty suggestion lists (wrong spellings without suggestions)




# Technical testing


* crashes
* speed
* does it work?
* installation
* all host applications (=the whole Office suite, not only Word)




Log output in alpha / beta spellers? Question to both Polderland and Aspell (and
other engine providers in the future). This is important to be able to identify
appearent crashes or malfunctions.




# Internal testing routines


We have a set of tools to run automated tests, with different types of data.






# External testing (external beta testers)


## Goal


To get as broad a beta testing as possible, with many testers, testers on
different platforms, and within different genres and writing habits.


## Means


* create interest (press release from SD)
* ask everybody at SD, newspapers, schools, language centers to participate
* easy download, easy installation (installation instructions)
** Ask testers to register the issues we would like to have feedback on (mostly linguistic and functional testing).
* keep in touch: info on project home page, e-mail list (beta@divvun.no)
* getting and giving feedback
** Make FAQ
** Every release has a fix list (summary in se, smj, no, details in en)
* release often (linguistic updates)


## Feedback infrastructure


* e-mail list
* web form
* if speller logs, automated e-mailing (with confirmation) of the logs?
* automatic processing of web form






## Web form


Please use Bugzilla to report (create your own account if necessary):
* missing words
* wrong suggestions, or the correct one very low on the suggesion list




Please remember to *always* report the lexicon version number. This is done by
typing "nuvviDspeller" (please note the case), and check the suggestions - one should
inlude a string similar to:


```
Davvisámi, public beta 2, 2007-09-03
```


Select that suggestion (it should replace the text "nuvviDspeller"), and cut and paste
the new text into the bug report.
