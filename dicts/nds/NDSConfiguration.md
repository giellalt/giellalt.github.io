# Configuration

Each instance (sometimes referred to as _"project"_) of NDS is defined by a
corresponding configuration file, stored in `configs/PROJECT.config.yaml`.
There are also many templates, or "inactive" configuration files in the same
folder, named with a `.in` suffix, such as `configs/sanit.config.yaml.in`.

# Overview

The format is [YAML](https://quickref.me/yaml). To prevent
["The Norway Problem"](1), all strings should be quoted with double-quotes
(an unquoted string `no`, will be interpreted as `false` - unquoted `yes` and
`no` are legal ways to specify `true` and `false` in YAML).

The file `configs/config_schema.json` is the actual schema file that will
be checked on startup. If anything is wrong in the config, the application will
not run. There are also descriptions in that file, but this document serves
as a more human-readable version of it.

# Schema

## Top-level mapping

The configuration file is divided into several main sections, each a key in
a top-level mapping:

| Key                   | Required |          Type           | Description                                    |
| :-------------------- | :------: | :---------------------: | :--------------------------------------------- |
| `ApplicationSettings` |   yes    | **ApplicationSettings** | name, locales, and such                        |
| `Tools`               |   yes    |        **Tools**        | Paths to FST tools, and formats                |
| `Morphology`          |    no    |     **Morphology**      | Paths to language specific FSTs, and options   |
| `Languages`           |   yes    |      **Languages**      | Languages available                            |
| `Dictionaries`        |   yes    |    **Dictionaries**     | Listing of dictionaries, paths to compiled XML |
| `ReaderConfig`        |   yes    |    **ReaderConfig**     | (?)                                            |

[1]: https://hitchdev.com/strictyaml/why/implicit-typing-removed/

## ApplicationSettings

**ApplicationSettings** is a mapping with the following keys:

| Key                                                   | Required  |         Type          | Description                                                                                                                                                                                                                                               |
| :---------------------------------------------------- | :-------: | :-------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app_name`                                            |  **yes**  |      **string**       | the name displayed in the menu bar, Neahttadigisánit, Nettidigisanat, etc                                                                                                                                                                                 |
| `short_name`                                          |  **yes**  |      **string**       | short name for the project, usually corresponding to the subdomain. This must be unique over all instances/projects                                                                                                                                       |
| `default_locale`                                      |  **yes**  |      **string**       | the default locale to display of those available, when any other locale cannot be detected from the browser                                                                                                                                               |
| `default_pair`                                        |  **yes**  | **list of 2 strings** | the default dictionary language pair to display                                                                                                                                                                                                           |
| `mobile_default_pair`                                 |  **yes**  | **list of 2 strings** | the default dictionary to display when a mobile browser is detected                                                                                                                                                                                       |
| `strip_spaces`                                        |  **no**   |      **boolean**      | Strip spaces from search inputs or not. (Default: `true`)                                                                                                                                                                                                 |
| `locales_available`                                   |  **yes**  |  **list of string**   | internationalisations available                                                                                                                                                                                                                           |
| `hidden_locales`                                      |  **no**   |  **list of string**   | Hidden locales. (Default: `[]`)                                                                                                                                                                                                                           |
| `meta_description`, `meta_keywords`                   | **no**(?) |      **string**       | these values will be inserted into the HTML `<meta />` tags in the header of all pages, and are important for search engines                                                                                                                              |
| `admins_to_email`                                     |  **yes**  |  **list of string**   | A list of email addresses to send server errors to                                                                                                                                                                                                        |
| `app_meta_title`, `meta_description`, `meta_keywrods` |  **yes**  |      **string**       | Fields for determining meta tags that search engines pay attention to                                                                                                                                                                                     |
| `grouped_nav`                                         |  **yes**  |      **string**       | For projects with many dictionary pairs, this allows another system for managing a long navigation list. Languages will be grouped by the source language, with minority languages prioritized. See the `Languages` section about marking these languages |

### Example

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

## FST path and format definitions (Morphology)

The **Morphology** section is a mapping from language codes, to an mapping with
the following keys:

| Key            | Required |    Type     | Description                                                                                                                                                                                                                                                                   |
| :------------- | :------: | :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tool`         | **yes**  | **string**  | path to the morphological tool                                                                                                                                                                                                                                                |
| `file`         | **yes**  | **string**  | path to the morphological analysis file                                                                                                                                                                                                                                       |
| `inverse_file` |  **no**  | **string**  | path to the morphological generation file                                                                                                                                                                                                                                     |
| `format`       | **yes**  | **string**  | format name (`"hfst"`, `"pyhfst"` or `"xfst"`). `"hfst"` uses subprocesses to call into `hfst-lookup`, etc, while `pyhfst` uses the python bindings to `libhfst` directly, but is not available on the server. `xfst` is the old format, and still supported, but not in use. |
| `options`      |  **no**  | **Options** | (see below)                                                                                                                                                                                                                                                                   |

The **Options** setting is a mapping with following keys:

| Key                | Required |    Type    | Description                                                                                                                                                                                    |
| :----------------- | :------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compoundBoundary` | **yes**  | **string** | the part of a morphological analysis tag that marks the compound boundary, i.e.,: `lemma+Tag+Tag+CompoundTag+lemma2+Tag+Tag`. This will be used to split a compound word into multiple lemmas. |
| `derivationMarker` | **yes**  | **string** | the part of a morphological analysis tag that marks a derivation. This is used in `sme` particularly, to only display non-derived analyses when one exists.                                    |
| `tagsep`           |  **no**  | **string** | the character that separates tags and lemmas (Default: `"+"`)                                                                                                                                  |
| `inverse_tagsep`   |  **no**  | **string** | the same, but for generation (Default: `"+"`)                                                                                                                                                  |

### Example

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

## Languages covered by the system (Languages)

A list of language ISO codes covered by the system. This may be going away at
some point, as its original purpose was language name translations, but for
that it turned out better to use Python-Babel and gettext.

All languages in the dictionary set must be here, as this helps control what
configuration directories are searched on initialization, and other things.

| Key             | Required |    Type     | Description                                                                                                                                                                      |
| :-------------- | :------: | :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iso`           | **yes**  | **string**  | 3-letter language code                                                                                                                                                           |
| `minority_lang` |  **no**  | **boolean** | this helps sort by minority and majority languages, and is particularly useful with grouped navigation, thus only minority languages may be the group parent. (Default: `false`) |
| `variant`       |  **no**  | **boolean** | ?                                                                                                                                                                                |

### Example

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

## XML dictionary paths (Dictionaries)

The dictionaries in the system. For now there are two different types of
definitions possible: a single direction dictionary, and a reversable
dictionary. The reasoning here is that some languages may have lexica
optimised for different directions. This is controlled by the key 'reversable'.

Dictionaries is a list of dictionaries, each dictionary defining the following keys:

| Key                | Required |       Type       | Description                                                               |
| :----------------- | :------: | :--------------: | :------------------------------------------------------------------------ |
| `source`           | **yes**  |    **string**    | 3-letter language code, or other short code, i.e. spellrelax variant      |
| `target`           | **yes**  |    **string**    | target language ISO                                                       |
| `path`             | **yes**  |    **string**    | path to the compiled xml dictionary file. usually `dicts/xxx-yyy.all.xml` |
| `show_korp_search` |  **no**  |   **boolean**    | include links to search for words and lemmas in Korp (Default: `false`)   |
| `reversable`       |  **no**  |   **boolean**    | ... (Default: `true`)                                                     |
| `input_variants`   |  **no**  | **InputVariant** | (see below)                                                               |

NOTE: the reversable feature is shakily implemented at the present moment.
Test before releasing into the wild.

### Input variants

If a language contains a spell-relaxed version, or multiple orthographies, for
which there are multiple input analysers, these must be defined with each
dictionary, which then populates the lists displayed to users.

**InputVariant** is a mapping of the following fields:

| Key           | Required |    Type    | Description                                                                                                                                                                                                                                                                                                          |
| :------------ | :------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`        | **yes**  | **string** | short descriptive term. "Reserved" terms are `standard`, `mobile`, and these control the presentation of certain variants, for instance, the default page that mobile users will see. If a variant is something other than these two things, an alternate orthography, use a different keyword apart from these two. |
| `description` | **yes**  | **string** | short phrase presented to users in the interface. Including the keyword !gettext before the string will ensure that the string is properly handled for localization                                                                                                                                                  |
| `short_name`  | **yes**  | **string** | the short name of the morphological analyser to use. (`sme`, `SoMe`, `kpvM`, etc.)                                                                                                                                                                                                                                   |

### Examples

```
Dictionaries:
 - source: olo
   target: fin
   path: 'dicts/olo-fin.xml'

  - source: sme
    target: nob
    path: 'dicts/sme-nob.all.xml'
    show_korp_search: True
    input_variants:
      - type: "standard"
        description: !gettext "Standárda (<em>áčđŋšŧž</em>)"
        short_name: "sme"
      - type: "mobile"
        description: !gettext "Sosiála media (maiddái <em>acdnstz</em>)"
        short_name: "SoMe"
```

## Notes

### Locales

When defining locales for localization, it is important to use the
two-character (ISO 639-1) code if one exists for the language, otherwise use
the three-character (ISO 639-3) code.

When defining language codes for dictionaries and morphological tools, use the
three-character code always.

### Yaml references

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

### Section from nds/ConfigFiles

**Note**: _This section is outdated, or not in use!_

Development features in `ApplicationSettings`:

These features may not be entirely finished, so use with care.

- `new_style_templates` - This enables the template
  system in configs/language_specific_options/ for local project-based control
  of dictionary appearance.
- `new_mobile_nav` - To be used with `grouped_nav`: this enables a new
  navigation style with submenus for language groups. Once this is complete,
  this setting will go away and be the default option in all projects.

## Additional lexicon settings

### Asynchronous paradigms

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

### Input variants

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

### On-screen keyboard/key palette

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
```

**Note**: Skolt Saami has lots of characters in the keyboard, so this example
is shortened.

### Korp integration

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

## Reader Settings (ReaderConfig)

This is another top-level configuration. Within this is one key for each
language ISO code. Within the ISO code, the following settings may be defined:

- _multiword_lookups_ (boolean)
- _multiword_range_ (string) - this setting specifies how many words before
  and after the user's cursor should be included in the lookup (see below)
- _word_regex_ (string) - a JavaScript formatted regular expression string
  which determines which word characters are contained within the language's
  words.
- _word_regex_opts_ (string) - any regular expression options. Most likely
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

## Wordform generation, tagsets, and analysis details (Paradigms)

These settings are no longer handled in the configuration file, as they are
more subject to change than any of the other settings.

See: [NDS Linguistic Settings](NDSLinguisticSettings.html)
