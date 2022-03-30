# Config files

This document describes the Neahttadigisánit configuration


#  Neahttadigisánit Configuration


Individual dictionary services are configured via a
[YAML](http://www.yaml.org/refcard.html) file which is included in the path on
launch. The configuration file contains:


 * Main application settings: localisations, application subdomain/hostname, etc.
 * FST path and format definitions (compounding, tag structure, etc.)
 * Languages available
 * XML dictionary paths 
 * Reader configuration


Further configuration beyond this, formatting of lexicon entries, is covered
by other parts of the system.


For examples of configuration files, refer to the `configs/` directory.
Files are checked in, but when configuring these on an instance of a server,
make a copy and make changes locally. The "live" configs are kept out of Git
just to ensure that they do not accidentally get checked in during
development.


##  Main application settings (ApplicationSettings)


The ApplicationSettings key contains the following configuration settings:


 * `app_name` - defines the name displayed in the menu bar, Neahttadigisánit, Nettidigisanat, etc.
 * `short_name` - a short name for the project, usually corresponding to the subdomain. This must be unique.
 * `default_locale` - the default locale to display of those available, when any other locale cannot be detected from the browser.*
 * `default_pair` - the default dictionary language pair to display
 * `mobile_default_pair` - the default dictionary to display when a mobile browser is detected
 * `locales_available` - internationalisations available*. It is important that these are defined as strings with quotes (YAML allows for strings to be defined without quotes as well), otherwise problems occur for Norwegian ("no"). Without the quotes, YAML will process this as a boolean value, but with quotes it is unambiguously a string.
 * `meta_description`, `meta_keywords` - these values will be inserted into the HTML `<meta />` tags in the header of all pages, and are important for search engines.
 * `admins_to_email` - A list of email addresses to send server errors to.
 * `app_meta_title`, `meta_description`, `meta_keywrods` - Fields for
   determining meta tags that search engines pay attention to.
 * `grouped_nav` - For projects with many dictionary pairs, this allows
   another system for managing a long navigation list. Languages will be
   grouped by the source language, with minority languages prioritized. See the
   `Languages` section about marking these languages.


Development features in `ApplicationSettings`:


These features may not be entirely finished, so use with care.


 * `new_style_templates` - This enables the template
   system in configs/language_specific_options/ for local project-based control
   of dictionary appearance. 
 * `new_mobile_nav` - To be used with `grouped_nav`: this enables a new
   navigation style with submenus for language groups. Once this is complete,
   this setting will go away and be the default option in all projects.


###  Note on locales


When defining locales for localization, it is important to use the
two-character (ISO 639-1) code if one exists for the language, otherwise use
the three-character (ISO 639-2) code.


When defining language codes for dictionaries and morphological tools, use the
three-character code always.


###  Example


```
ApplicationSettings:
  app_name: "Nettidigisanat"
  short_name: "sanat"
  default_locale: "ru"
  default_pair: ["olo", "fin"]
  locales_available:
    - "fi"
    - "lv"
    - "ru"
    - "no"
  meta_description: >
     Free, mobile-friendly dictionaries for lots of languages.
  meta_keywords: >
     list, of, keywords
  app_meta_title: >
     Balto-finnic dictionaries
  admins_to_email:
    - "email@domain.com"
    - "email2@domain.com"
```





##  FST path and format definitions (Morphology)


The `Morphology` key contains a list of languages by ISO 639-2 code, but
other short strings are tolerated, in case a spell-relax FST needs to be
defined. Each language contains the following keys:


 * `tool` - path to the morphological tool
 * `file` - path to the morphological analysis file
 * `inverse_file` - path to the morphological generation file
 * `format` - format name ('xfst' currently only supported, but this value would probably also cover hfst) 
 * `options` - defined below


The options setting may contain the following keys:


* `compoundBoundary` - the part of a morphological analysis tag that marks the compound boundary, i.e.,: `lemma+Tag+Tag+CompoundTag+lemma2+Tag+Tag`. This will be used to split a compound word into multiple lemmas.
* `derivationMarker` - the part of a morphological analysis tag that marks a derivation. This is used in `sme` particularly, to only display non-derived analyses when one exists.
* `tagsep` - the character that separates tags and lemmas
* `inverse_tagsep` - the same, but for generation


```
  Morphology:
    liv:
      tool: '/usr/bin/lookup'
      file: '/opt/smi/liv/bin/analyser-dict-gt-desc-mobile.xfst'
      inverse_file: '/opt/smi/liv/bin/generator-dict-gt-norm.xfst'
      format: 'xfst'
      options:
        compoundBoundary: "+Use/Circ#"
        derivationMarker: "+Der"
        tagsep: '+'
        inverse_tagsep: '+'
```


Make note of the name you use for this key (i.e. `liv`), because this will be
referred to later.


#  Notes


If you look at existing configuration files, you'll see YAML references used
to define paths to tools and such in one place, such that for development, it
is easier to change these things and switch to new directories.


```
Tools:
  xfst_lookup: &LOOKUP '/usr/bin/lookup'
  opt: &OPT '/opt/smi/'

 
Morphology:
  olo:
    tool: *LOOKUP
    file: [*OPT, '/olo/bin/analyser-dict-gt-desc-mobile.xfst']
    inverse_file: [*OPT, '/olo/bin/generator-dict-gt-norm.xfst']
```


Note how string concatenation is handled in YAML.


##  Languages covered by the system (Languages)


A list of language ISO codes covered by the system. This may be going away at some point, as its original purpose was language name translations, but for that it turned out better to use Python-Babel and gettext.


```
Languages:
  - iso: olo
  - iso: fin
  - iso: liv
  - iso: fkv
  - iso: izh
  - iso: nob
  - iso: est
  - iso: lav
```


Optional arguments for each item:


 * `minority_lang: true`: this helps sort by minority and majority languages,
   and is particularly useful with grouped navigation, thus only minority
   languages may be the group parent.


##  XML dictionary paths (Dictionaries)


The dictionaries in the system. For now there are two different types of
definitions possible: a single direction dictionary, and a reversable
dictionary. The reasoning here is that some languages may have lexica
optimised for different directions. This is controlled by the key 'reversable'.


Dictionaries is a list of dictionaries, each dictionary defining the following keys: 


 * `source` - source language ISO (or other short code, i.e., spellrelax variant)
 * `target` - target language ISO
 * `path`


Following are some minimal examples:


```
Dictionaries:
 - source: olo
   target: fin
   path: 'dicts/olo-fin.xml'


 - source: liv
   target: fin
   path: 'dicts/liv.all.xml'


 - source: liv
   target: est
   path: 'dicts/liv.all.xml'


```


##  Additional lexicon settings


###  Asynchronous paradigms


Each dictionary may specify that paradigms are to be generated asynchronously.
This is because some generators may be a little slow while under development,
resulting in long page load times. We would rather finish rendering the page,
and let the paradigm load later.


```
 - source: lang_iso
   target: lang_iso
   asynchronous_paradigms: true
   path: 'dicts/dictionary.file.xml'
```


This causes the page to load, and the paradigm to be requested via a separate
AJAX request. When the request is finished, the user will be able to see the
paradigm.


###  Input variants


Some languages have optional spell-relax FSTs, either for converting from
various keyboards and alternate orthographies.


These may be marked as 'mobile' too, so that they appear by default when a
mobile browser is detected, and so that swapping between language pairs is
handled properly.


The "special" types are thus: `mobile` and `standard`. Anything that is
neither of these must have a separate type (which can be any word, i.e.
`molotsov`).


```
  - source: sme
    target: fin
    path: 'dicts/sme-fin.all.xml'
    input_variants:
      - type: "standard"
        description: "Standard (<em>áčđŋšŧž</em>)
        short_name: "sme"
      - type: "mobile"
        description: "Social media (with <em>acdnstz</em>)"
        short_name: "SoMe"
```


Here, each item in the `input_variants` key has a `type`, `description`
and `short_name`. `short_name` refers to the morphology name, and
description will be presented to the user in the interface.


The description string may be marked for translation with the `!gettext`
flag, which is a custom YAML function for NDS. Marked strings will then be
able to be extracted into `.po` files as normal.


```
      - type: "mobile"
        description: !gettext "Social media (with <em>acdnstz</em>)"
        short_name: "SoMe"
```


###  On-screen keyboard/key palette


The project maintainer may define an on-screen key palette to allow users to
input the specific symbols they desire, even though their keyboard does not
support them. This is because spell-relax may not always be an option for user
input: not because we cannot come up with spell-relax rules of any kind, but
because users may wish to be specific. This also works on mobile devices.


This is configured on a variant-to-variant basis, to reflect that each
variant may have its own input system.




```
  - source: sms
    target: fin
    input_variants: &spell_relax
      - type: "standard"
        description: !gettext "Standard"
        example: "(ǩ)"
        onscreen_keyboard: &SMS_KEYS
          - "â"
          - "č"
          - "ʒ"
          - "ǯ"
          # etc ... 


```


**Note**: Skolt Saami has lots of characters in the keyboard, so this example
is shortened.




###  Korp integration


Each item in the dictionary list may specify keys to include korp search links.
It's a little hacky now, and requires manually URL-encoding things:


What is essential is that the URL patterns included specify variables that
will be substituted with the user's search: USER_INPUT for an alternate search,
and INPUT_LEMMA for the lemma search links.


```
    show_korp_search: True
    # use http://meyerweb.com/eric/tools/dencoder/ if things are
    # unreadable or do not work
    #
    # Here, whatever the user input is will be replaced into the
    # following string, marked by USER_INPUT
    wordform_search_url: 
      "http://gtweb.uit.no/korp/#search=word%7CUSER_INPUT&page=0"
    #
    # Here, whatever the input lemma is will be replaced into the
    # following string, marked by INPUT_LEMMA
    #
    # cqp|[lemma = "INPUT_LEMMA"]
    lemma_search_url: 
      "http://gtweb.uit.no/korp/#page=0&search-tab=2&search=cqp%7C%5Blemma%20%3D%20%22INPUT_LEMMA%22%5D"


    # Specify a word delimiter for when there are many.
    # "] [word = "
    lemma_multiword_delimiter: &korp_lemma_delim 
      "%22%5D%20%5Bword%20%3D%20%22"
```


##  Wordform generation and analysis details (Paradigms)


The `Paradigms` section contains a part of speech (in all caps) and tag forms (minus
the part of speech) to generate forms for. The lists of tags here should be
the maximal set that will be generated for any given part of speech. If this
needs to be altered or reduced for any lexical set (i.e., singular only for
Proper nouns, or 3rd person only for specific weather verbs), rules for this
must be defined elsewhere.


If forms will be displayed, but pregenerated by some other rule, there must
be at least one entry for the part of speech. That set of tags will then be
passed to pregenerating functions and ignored, but, if the part of speech is
not set here, this will not happen.


```
Paradigms:
  olo:
    PRON:
      - "Pregenerate"
    N:
      - "Sg+Par"
      - "Sg+Apr"
      - "Sg+Gen"
      - "Pl+Par"
    V:
      - "Ind+Prs+ScSg1"
      - "Ind+Prs+ScSg3"
      - "Ind+Prs+ScPl3"
      - "Ind+Prt+ScSg1"
  liv:
    PRON:
      - "Pregenerate"
    N:
      - "Sg+Nom"
      - "Sg+Gen"
      - "Sg+Dat"
      - ... etc.
```


In the above example: "Pregenerate" is completely arbitrary and serves no programmatic function, however "PRON" being set is important.


##  Tag definitions (TagSets, TagTransforms)


Unfortunately it is not yet easy to use the babel and gettext translation
system to define what will be displayed to users. As such, YAML defines these things.




TagTransforms is a dictionary of language pairs, each of which contains
string pairs. Each string pair consists of the tag chunks from output from a
morphological tool (minus tag separator), and then the string that will be displayed to the users.


Each language pair is defined as the source language of the dictionary or
morphological tool, and then the language of the user interface and the formatting of this pair definition is important (see below). If
corresponding tags for the source dictionary - user interface pair are not
available, tags for the dictionary source language - dictionary target
language will be displayed. It may be useful to use aliases here too, but see
existing config files for examples.


```
TagTransforms:
  (olo, rus):
    "V": "v."
    "N": "s."
    "A": "adj."


  (liv, rus):
    "V": "v."
    "N": "s."
    "A": "adj."
```




NOTE: parentheses, comma, and space are important in the language pair
definition. Quotes are optional around the tag chunks on the left side, but
ideal to avoid any potential problem with conversion to strings.


###  TagSets


TagSets aren't particularly relevant within the configuration file, but are
meant to be an aid in producing language-specific rules (see elsewhere in the
documentation, or docstrings for now). TagSets are defined first by language
they apply to, but then each tagset consists of a name, and then a list of
tags that goes along with the set.


```
TagSets:
  sme:
    pos: ["N", "V", "A", "Pr", "Po", "Num"]
    type: ["NomAg", "G3", "aktor"]
```






##  Reader Settings (ReaderConfig)


This is another top-level configuration. Within this is one key for each
language ISO code. Within the ISO code, the following settings may be defined:


 * *multiword_lookups* (boolean)
 * *multiword_range* (string) - this setting specifies how many words before
   and after the user's cursor should be included in the lookup (see below)
 * *word_regex* (string) - a JavaScript formatted regular expression string
   which determines which word characters are contained within the language's
   words.
 * *word_regex_opts* (string) - any regular expression options. Most likely
   this will be "g"


An example of the word regular expression, which contains most characters
defined as words in unicode via unicode ranges, but also includes the hyphen
and apostrophe.


```
ReaderConfig
  myv:
    multiword_lookups: false
    word_regex: |
      [\u00C0-\u1FFF\u2C00-\uD7FF\w\-']+
    word_regex_opts: "g"
```


###  Multiword lookups


The reader may be configured to allow multiword environments, so, each click
will expand the word selection to include surrounding material. This operation
only respects word boundaries, but does not perform any linguistic computation
on the client side. It also results in more data being sent to the server.






