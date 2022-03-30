# Files for the The Neahttadigisánit Configuration


Individual dictionary services are configured via a [YAML](http://www.yaml.org/refcard.html) file which is included
in the path on launch. The configuration file contains:


- Main application settings: localisations, application subdomain/hostname, etc.
- FST path and format definitions (compounding, tag structure, etc.)
- Languages available
- XML dictionary paths 


Further configuration beyond this, formatting of lexicon entries, is covered
by other parts of the system.


For examples of configuration files, refer to the ```configs/``` directory.
Files are checked in, but when configuring these on an instance of a server,
make a copy and make changes locally. The "live" configs are kept out of Git
just to ensure that they do not accidentally get checked in during
development.


#  Main application settings (ApplicationSettings)


For a sample file to copy and work from, look in the `configs/` directory for `sample.config.yaml.in`.


The ApplicationSettings key contains the following configuration settings:


- `app_name` - defines the name displayed in the menu bar, Neahttadigisánit, Nettidigisanat, etc.
- `short_name` - a short name for the project, usually corresponding to the subdomain. This must be unique.
- `default_locale` - the default locale to display of those available, when any other locale cannot be detected from the browser.*
- `default_pair` - the default dictionary language pair to display
- `locales_available` - internationalisations available*. It is important that these are defined as strings with quotes (YAML allows for strings to be defined without quotes as well), otherwise problems occur for Norwegian ("no"). Without the quotes, YAML will process this as a boolean value, but with quotes it is unambiguously a string.
- `app_meta_title` - an alternate title that shows up in the address bar, and search <meta /> tags
- `meta_description`, `meta_keywords` - these values will be inserted into the HTML `<meta />`»A tags in the header of all pages, and are important for search engines.
- `admins_to_email` - a list of email addresses that receive server error emails


##  Note on locales


When defining locales for localization, it is important to use the two-character (ISO 639-1) code
if one exists for the language, otherwise use the three-character (ISO 639-2) code.


When defining language codes for dictionaries and morphological tools, use the three-character code always.


**Example:**


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
  admins_to_email:
    - "someone.goes.here@email.com"
    - "someone.else.goes.here@email.com"
  app_meta_title: >
     Online dictionary
  meta_description: >
     Free, mobile-friendly dictionaries for lots of languages.
  meta_keywords: >
     list, of, keywords
```


##  FST path and format definitions (Morphology)


The `Morphology` key contains a list of languages by ISO 639-2 code. Each language contains the following keys:


- `tool` - path to the morphological tool
- `file` - path to the morphological analysis file
- `inverse_file` - path to the morphological generation file
- `format` - format name ('xfst' currently only supported, but this value would probably also cover hfst) 
- `options` - defined below


The options setting may contain the following keys:


- `compoundBoundary` - the part of a morphological analysis tag that marks the compound boundary, i.e.,: `lemma+Tag+Tag+CompoundTag+lemma2+Tag+Tag`. This will be used to split a compound word into multiple lemmas.
- `derivationMarker` - the part of a morphological analysis tag that marks a derivation. This is used in `sme` particularly, to only display non-derived analyses when one exists.
- `tagsep` - the character that separates tags and lemmas
- `inverse_tagsep` - the same, but for generation


```
  liv:
    tool: '/usr/bin/lookup'
    file: '/opt/smi/liv/bin/analyser-dict-gt-desc.xfst'
    inverse_file: '/opt/smi/liv/bin/generator-dict-gt-norm.xfst'
    format: 'xfst'
    options:
      compoundBoundary: "+Use/Circ#"
      derivationMarker: "+Der"
      tagsep: '+'
      inverse_tagsep: '+'
```


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
    file: [*OPT, '/olo/bin/analyser-dict-gt-desc.xfst']
    inverse_file: [*OPT, '/olo/bin/generator-dict-gt-norm.xfst']
    options:
```


Note how string concatenation is handled.


##  Languages covered by the system (Languages)


A list of language ISO codes covered by the system. This may be going away at
some point, as its original purpose was language name translations, but for
that it turned out better to use Python-Babel and gettext.


All languages in the dictionary set must be here, as this helps control what
configuration directories are searched on initialization, and other things.


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




##  XML dictionary paths (Dictionaries)


The dictionaries in the system. For now there are two different types of
definitions possible: a single direction dictionary, and a reversable
dictionary. The reasoning here is that some languages may have lexica
optimised for different directions. This is controlled by the key 'reversable'.


Dictionaries is a list of dictionaries, each dictionary defining the following keys: 


- `source` - source language ISO (3 characters)
- `target` - target language ISO
- `path`
- optional: `show_korp_search` - include links to search for words and lemmas in Korp. Set to True, False, or leave out. (Default: False).
- optional: `reversable` - true.
- optional: `input_variants` - see below


Example:


```
Dictionaries:
 - source: olo
   target: fin
   path: 'dicts/olo-fin.xml'
   show_korp_search: True
   reversable: True


 - source: liv
   target: fin
   path: 'dicts/liv.all.xml'
   reversable: True


 - source: liv
   target: est
   path: 'dicts/liv.all.xml'


```


NOTE: the reversable feature is shakily implemented at the present moment.
Test before releasing into the wild.


#  Input variants


If a language contains a spell-relaxed version, or multiple orthographies, for
which there are multiple input analysers, these must be defined with each
dictionary, which then populates the lists displayed to users.


Example:


```
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


Each *input_variants* item must contain the following settings:


- `type` - a short descriptive term. "Reserved" terms are `standard`,
   `mobile`, and these control the presentation of certain variants, for
   instance, the default page that mobile users will see. If a variant
   is something other than these two things, an alternate orthography,
   use a different keyword apart from these two.
- `description` - a short phrase presented to users in the interface.
   Including the keyword !gettext before the string will ensure that the string
   is properly handled for localization
- `short_name` - the short name of the morphological analyser to use.
   (`sme`, `SoMe`, `kpvM`, etc.)


##  Wordform generation, tagsets, and analysis details (Paradigms)


These settings are no longer handled in the configuration file, as they are
more subject to change than any of the other settings.


See: [NDS Linguistic Settings](NDSLinguisticSettings.html)


