# Moving languages between projects


When moving language pairs, one thing to consider is whether the morphology
will move along with the lexicon. Otherwise, the major parts to moving languages
and dictionaries are as follows:


1. Configuration file edits (*.yaml.in)
- *locales_available*: does the change result in needing new UI translations?
- *Morphology*: move the morphological analyzer configs for the language pairs
  between the files
- *Languages*: remove and add any languages that are relevant or not
- *Dictionaries*: move the dictionary definitions


2. dicts/Makefile

- move FST targets in the variables. For example: 


```
    SANAT_LANGS_ANALYSERS    :=  olo izh liv fin fkv


        -> 
    SANAT_LANGS_ANALYSERS    :=  olo         fin fkv
    SONAD_LANGS_ANALYSERS    :=      izh liv fin
```


- Do the same for *_WORDS_DICTS_LEXICA* and any customized lexicon targets. 


3. User-friendly tags

- This is not obligatory given the more open structure of the tag files, but
  if a language has tags in a generalized project-specific file, it may need to
  be moved.


4. Templates

- Copy or move any language specific templates in ./neahtta/configs/language_specific_rules/templates/
  to the corresponding project. For example: sanat/izh/* to sonad/izh/*


5. Providing a note to users about the move: create a file in the main
   *templates/* directory with a name following the pattern
   *notice.PROJECT.html*, where PROJECT will be replaced with a project name:
   sanit, baakoeh, sonad, etc.

   The file structure is extremely simple, and should at most contain a line of
   text (HTML possible), and alternately { trans %} tags.


```
    { trans %}We have moved some languages to <a
    href="http://sonad.oahpa.no/">Sonad</a>, please update your bookmarks.
    { endtrans %}
```


This notice will be displayed under the language pair list, and on 404
pages. To remove the notice, simply delete the file, or change the name so
it will not be found: *old_notice.PROJECT.html*.




