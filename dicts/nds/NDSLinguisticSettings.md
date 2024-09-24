# Neahttadigisánit linguistic settings

The documentation here concerns the directory and subdirectories in
`neahttadigisanit/neahtta/neahtta/configs/language_specific_rules/`. The
directory itself is divided into the following sections

1. tagsets
1. user_friendly_tags
1. paradigms
1. Contexts
1. paradigm layouts

If you update these files, be sure to run the test procedure and restart the
service, as explained in [Updating](NDSUpdatingDictionaries.html), but don't
forget to check in any new files created.

## Tagsets

In the repository folder `neahtta/neahtta/configs/language_specific_rules/tagsets`
there are YAML files with names on the form `ISO.tagset`, one for each language.
They define which tags are possible for the analyser of that language.

The contents are fairly self-explanatory, each tag group is listed, among with
its variants. Take a look at any file to understand it concretely. As always
in YAML, be sure to quote strings, to avoid the _Norway Problem_ (unquoted `no`
will be interpreted as `false`).

Tagsets are necessary for constructing certain types of rules for manipulating
lexical information and morphological information, either for generating forms,
or analyzing input, or even determining how entries should be displayed...
However, tagsets crucially operate on morphological analyzer output. Tagsets
are particularly integral in defining paradigms.

The _pos_ tagset is also particularly important, because it helps match up
morphological analyses with lexicon entries, as the lexicon lookup will include
_pos_ when a value is available. If entries in the search results appear to
be out of line, and do not match by _pos_, one of the causes may be that a
_pos_ is missing from the list.

Tagsets are file based because this makes it easier to duplicate them for
language variants, or share languages across dictionary instances--
particularly majority languages, for which it is easy to forget to check
settings for when they are used in multiple installations.

Symlinks in this directory are also permitted, if two language variants (i.e.
_SoMe_ and _sme_) need to share a tagset.

## User-friendly tags

```sh
    configs/language_specific_rules/user_friendly_tags/*.relabel
```

Each file is named with a suffix _.relabel_, but the name may be
anything. Organize tag relabel sets however you will, maybe on a
language-pair to language-pair basis, or by dictionary set instead.

Consider that you may have to repeat some tagsets, so maybe using YAML
aliases will make things easier.

## File structure

The file structure is quite simple, and at most it must contain a list
called _Relabel_. Each list item is a dictionary containing the keys:

- _source_morphology_ - The morphology name, usually an ISO, but
  sometimes something else in the case of language variants. (_sme_,
  _SoMe_, _kpv_)
- _target_ui_language_ - The language the user is browsing in-- must
  be an ISO.
- _tags_ - A dictionary of tags.

### Example

```yaml
Relabel:
  - source_morphology: "kpv"
    target_ui_language: "eng"
    tags: &some_alias_name
      V: "v."
      N: "n."
      A: "adj."

  - source_morphology: "kpv"
    target_ui_language: "fin"
    tags: &another_alias
      V: "v."
      N: "s."
      A: "adj."
      DO_NOT_SHOW: ""

  - source_morphology: "zzz"
    target_ui_language: "www"
    tags:
      <<: *some_alias_name
      <<: *another_alias
```

The last item in the list shows an example of inheriting from two
sources. Thus, the resulting tags will be:

```yaml
V: "v."
N: "s."
A: "adj."
DO_NOT_SHOW: ""
```

You can even set tags in another location, outside of the _Relabel_
list, if necessary.

```yaml
Aliases:
  tag_set_one: &some_alias_name
    V: "v."
    N: "n."
    A: "adj."

Relabel:
  - source_morphology: "kpv"
    target_ui_language: "eng"
    tags:
      <<: *some_alias_name
```

## Paradigm generation and paradigm design

The dictionary paradigms are managed by a file and directory structure based
around the language code for the language in question. This way multiple
projects may share language paradigm code.

### The paradigm folder structure

```sh
    paradigms/sme/common_nouns.paradigm
    paradigms/sme/proper_nouns.paradigm
    paradigms/sme/paradigm_group/foo.paradigm
    paradigms/sme/paradigm_group/bar.paradigm
```

Paradigm files can be ordered in any way you like within the language
directories, and may be grouped for convenience into other folders. A language
typically won't need many, and usually there will be one base paradigm for a
part of speech from which additional paradigms apply to subsets of words in
this part of speech.

Currently, there is no explicit setting for ordering the generation rules, and
ordering is determined by the complexity of the rules that match a given word
and entry. Thus, if one rule looks for [tagset](#tagsets) values of _pos_,
_valence_ and _context_, and another only looks for _pos_ and
_valence_, the first rule would will be applied if both match.

Symlinks in this directory are also tolerated, so if multiple language variants
need to use the same rule set (e.g., _sme_ and _SoMe_), simply make a
symlink between the directories.

For some more advanced examples, see the rules for _sme_ (particularly,
pluralia tanta rules).

### Paradigm file format (.paradigm)

_.paradigm_ files concern only which forms will be generated. If you wish to
define a specific way of displaying the generated forms, other than what the
system default is, see the section below on _.layout_ files.

Paradigm files are structured in the following way: one part is YAML, and the
other part is data in [Jinja](http://jinja.pocoo.org/docs/templates/) format.
Essentially what this says is, if the first part's (YAML) conditions are
matched, then we render the following template for the paradigm, and pass
it off to the generator tool.

The rules may be very simple, but here is one that combines _morphology_ and
_lexicon_ matching as an example:

```yaml
    name: "Proper noun paradigm"
    description: |
      Generate the proper noun if the entry contains sem_type="Prop" or
      "prop"
    morphology:
      pos: "N"
    lexicon:
      XPATH:
        sem_type: ".//l/@type"
      sem_type:
        - "Prop"
        - "prop"
    --
    ` lemma `+N+Prop+Sem/Plc+Sg+Gen
    ` lemma `+N+Prop+Sem/Plc+Sg+Ill
    ` lemma `+N+Prop+Sem/Plc+Sg+Loc
```

YAML settings:

- `name` - A short name to display when the service is loading (required)
- `description` (optional) - More words for other developers
- `morphology`, `lexicon` - one of these must be present, but both may be
  present as well

### Conditions together

Operating together, what the conditions essentially say is that for any
user-inputted wordform, if the analyzer rules find a matching analysis,
and the lexicon rules find a matching lexicon entry, then the paradigm
will be used for the entries where these align.

### Morphology conditions

Conditions that are possible to match on are set up in a variety of ways.
Analyzer conditions may be specified in the _morphology_ key, and each key
under that may be a [tagset](#tagsets) and a value, or a whole tag.

In the following example, the condition applies if the PoS is _V_, and if
there is a tag from the _infinitive_ tagset present.

```yaml
morphology:
  pos: "V"
  infinitive: true
```

Above we see that either a string value _"V"_ may be specified, or boolean
_true_, which means 'any member of the tag set is present'. A list may also
be specified, meaning that any of those values must be present for the
condition to be true. For example, tagset _infinitive_ is defined to be the
set _Inf1_, _Inf2_, _Inf3_, but we only want to match the first two, and
not the third:

```yaml
morphology:
  pos: "V"
  infinitive:
    - "Inf1"
    - "Inf2"
```

The _morphology_ condition also supports matching of whole tags, using the
_tag_ keyword, so for example, the above example may be reformulated in this
way:

```yaml
morphology:
  tag:
    - "V+Inf1"
    - "V+Inf2"
```

One additional keyword is _lemma_, available to both _morphology_ and
_lexicon_, to constrain the rule to a specific lemma:

```yaml
morphology:
  lemma: "diehtit"
```

**NB:** if there are problems matching a tag set, make sure that it is defined in
the language's corresponding tagset.

### Lexicon conditions

The _lexicon_ is also usable for providing conditions for a particular
paradigm. Some predefined keys are available, but these mostly require defining
XPATH statements to catch values from the entry, otherwise testing them is much
like the above morphology section, with the exception that there is nothing
similar to _tagsets_ defined elsewhere to match against.

For example, assuming we have some place-name lexicon entries like the
following, which we want to match:

```xml
    <e>
        <lg>
            <l sem_type="Plc">Minneapolis</l>
        </lg>
        ... etc ...
    </e>
```

A rule for the above might look like the following:

```yaml
lexicon:
  XPATH:
    sem_type: ".//l/@sem_type"
  sem_type: "Plc"
```

Note that you may also specify lists, as with the above:

```yaml
lexicon:
  XPATH:
    sem_type: ".//l/@sem_type"
  sem_type:
    - "Plc"
    - "Something"
```

## Paradigm definition

Paradigm definition is mostly plaintext, but since it is a template, it
is possible to do all sorts of template operations.

```
lemma +N+Sg+Nom
lemma +N+Sg+Acc
```

Certain variables are available by default:

- _lemma_

Additional variables are available as they are defined by the conditions, and
the variable will be set to the matched condition:

```yaml
    lexicon:
      XPATH:
        some_attribute: ".//l/@some_ttribute"
      some_attribute:
        - "Foo"
        - "Bar"
    --
```

`lemma`+Adj+`some_attribute`

It is also possible to specify additional variables that are not used in the
match condition:

```text
    lexicon:
      XPATH:
        some_attribute: ".//l/@some_ttribute"
        another: ".//l/@another_attribute"
      some_attribute:
        - "Foo"
        - "Bar"
    --
    { if another %}
    ` lemma `+Adj+` some_attribute `+` another `
    { else %}
    ` lemma `+Adj+` some_attribute `
    { endif %}
```

## Paradigm layouts and presentation

Paradigm layouts are defined in a similar way as paradigm generation: the file
structure is one half YAML rules, and the second half defines the layout. These
are split by a line containing only `--`. As in the YAML section, spacing
is very important, so make sure your text editor is able to see this. Note
also: only use spaces in the layout definition, tabs may result in errors in
processing: confirm that your text editor will not convert spaces to tabs in
any case.

First we will look at an example, and then following sections will describe all
the details and options.

### An example, and overview:

TODO: actual working example definition from itwêwina, as well as screenshots
of the result.

Most of the following example should look familiar based on the above
documentation of paradigm generation:

```yaml
    name: "basic"
    layout:
      type: "basic"
    morphology:
      pos: V
      animacy:
        - AI
        - TI
    --
|  "#"  |  "Sg"   |  "Pl"    |
|  "1p" | Prs+1Sg | Prs+1Pl  |
|  "2p" | Prs+2Sg | Prs+12Pl |
|       |         | Prs+2pl  |
|  "3p" | Prs+3Sg | Prs+3Pl  |
|  "4"  | Prs+4Sg |          |
```

In the example above, the first half shows that the paradigm is applied when
the morphological analyses for the entry match two [tagsets](#tagsets): `pos` and
`animacy`, where `pos` is exactly "V", and `animacy` is either "AI" or
"TI". For this to work, these two tagsets must also be defined in the language
project's tagset file.

Some additional information about the layout is also defined, the `name`, and
the layout `type`: layout type is relevant if multiple layouts are matched for
the word and corresponding rule. Multiple layouts will be rendered in the entry
with a tabbed navigation menu at the top.

Next is the actual layout:

1. spacing is important, - columns must match up
1. columns are marked with the pipe character `|`.
1. leave one space between the pipe character and any content
1. each row must begin with and end with `|`
1. the first row should not include any cells spanning multiple columns

## Associating the layout with a generated paradigm

There are two ways to target the layout to a paradigm, the first is the exact
same formulation as in paradigm generation, with _morphology_ and _lexicon_
keys, and their associated rules (see above, in _.paradigm_ files).

The second, is to associate the _.layout_ file with a _.paradigm_ file in
the _paradigm_ setting. Thus if the rule for a _.paradigm_ applies, so will
any associated _.layout_ files. The value for this setting should be the name
of a file in the same directory, no relative paths are allowed.

```yaml
name: "verb paradigm"
paradigm: "some-paradigm-file.paradigm"
layout:
  type: "basic"
```

## Layout options (YAML)

_Name_ is mostly used to render the startup log message as settings
are read.

_description_ may optionally be set. This will be displayed to users
underneath the table. This may either be a YAML string, which will be shown in
all languages, or a set of translations depending on the meta-language in use:

```yaml
name: "transitive"
description: "This is the transitive conjugation."
```

The following shows multiple languages, note that if one translation does not
exist, the first language will be used:

```yaml
name: "transitive"
description:
  eng: "This is the transitive conjugation."
  fra: "C'est ne pas une pipe."
```

YAML has several conventions for specifying strings: [YAML strings](https://en.wikipedia.org/wiki/YAML#Basic_components_of_YAML).

### Optional settings within _layout_

The following settings do not need to be defined at all, but help determine the
presentation of data within the table.

1. _type_ - (string) specify the type of the layout and thus its title in the tab menu if multiple layouts are matched.
1. _no_form_ - (string) If no form results from paradigm generation, by default, whatever is in the cell will pass through. Otherwise, set what will be shown: ex.) a space _" "_ for nothing, _"-"_ a dash, etc.
1. _value_separator_ - default is a line break in html, <br />), other ideas: comma, etc.

## Layout specification, features, options

Consider the table in the following example _.paradigm_ file and _.layout_
file:

_verbs.paradigm_ contains:

```yaml
    name: "basic"
    morphology:
      pos: V
    --
    ` lemma `+V+Prs+1Sg
    ` lemma `+V+Prs+2Sg
    ` lemma `+V+Prs+1Pl
    ` lemma `+V+Prs+2Pl
    ` lemma `+V+Prs+3P
    ` lemma `+V+Prt+1Sg
    ` lemma `+V+Prt+2Sg
    ` lemma `+V+Prt+1Pl
    ` lemma `+V+Prt+2Pl
    ` lemma `+V+Prt+3P
```

_verbs.layout_ contains:

```yaml
    name: "basic"
    morphology:
      pos: V
    --
|       |  "Sg"   |  "Pl"    |
|  "1p" | Prs+1Sg | Prs+1Pl  |
|  "2p" | Prs+2Sg | Prs+2Pl  |
|  "3p" |       Prs+3P       |
```

After the _.paradigm_ file is sent off to generation, two things occur here
to render the table:

1. Some values (quoted) are treated as strings, and rendered directly
1. Tags are matched against the generated paradigm, and inserted into the layout. Multiple forms will be inserted if multiple forms match.

## Matching wordforms

The default behavior is to match the value in the cell against all tags, as a
substring. This allows layouts definitions to be smaller and easier to read.
You may alternatively specify a whole tag:

```text
|  "1p" | V+Prs+1Sg |
|  "2p" | V+Prs+2Sg |
```

Two features borrowed from regular expression land are available: `^match`
'starts with "match"', `match$` 'ends with "match"', in order to help
disambiguate between instances where a substring would return multiple forms.

```text
|  "1p" | Prs+1Sg$ |
|  "2p" | Prs+2Sg$ |
```

TODO: examples from myv

## Heading values, and heading internationalization

`"quoted"` values will be passed through as headings. You can also access
_generation_tags_ in `user-friendly tags` by prepending an underscore to
the quoted string: `_"1Sg"`.

## Cell spanning

Cell spanning is accomplished by leaving out the pipe character.
Currently only spanning horizontally is supported, but not vertically.

```text


|  "Label" | "Label"   | "Label"         |
|  "Label" | +Some+Tag | +Some+Other+Tag |
|  "Label" |       +Some+Tag             |
|  "Label" | +Some+Tag | +Some+Other+Tag |


```

This also depends on a clearly-defined column layout. Cell-spanning is not
allowed in the first column, because this is used to set the layout.

As long as the pipe is missing, the value may be anywhere within.

### Cell text alignment

Aligning text or values within the cell is Value alignment is a matter
of using the character {:} next to the cell border character {|}. Make
sure to also leave a space between this and content inside:

```text


| : "Label" | +Tag    :| +Some+Other+Tag |
| : "Label" |:        +Tag              :|
| : "Label" | +Tag     | +Some+Other+Tag |


```

In most cases you will not need these, because the default style should
automatically center values in spanned cells, and header cells will be
automatically positioned, however you may use alignment to override
this.

## Contexts

Contexts are for applying additional helpful information to a generated
wordform, perhaps to improve legibility or provide linguistic queues for
important distinctions, such as adding adverbs to display tense or pronouns to
reinforce person agreement.

Contexts are defined within _.context_ files in the corresponding language
directory in `language_specific_rules/paradigms`. The filename may be
anything, so long as the suffix is _.context_. For convenience, _sme_ and
_sma_ match filenames between paradigms and context, but there is no need to
do so, and one _.context_ file could be used for everything.

### File structure

Context files are simply a YAML list, and each item is a dictionary
with the following keys:

- _entry_context_ - (string) matches the _@context_ attribute on each _<l />_
  node. Set to a string, or None
- _tag_context_ - (string) matches the tag used in generation. Must be
  set to something, as none would overapply the context.
- _template_ - jinja-format string, which accepts certain variables:

Template variables allowed:

- `word_form` - inserts the wordform
- `context` - inserts the context (usually not necessary)

Some examples:

```
    - entry_context: "sii"
      tag_context: "V+Ind+Prs+Pl3"
      template: "(odne sii) ` word_form `"
```

The above would thus generate:

```
    (odne sii) deaivvadit
```

Example without entry_context:

```
    - entry_context: None
      tag_context: "V+Ind+Prs+Sg1"
      template: "(daan biejjien manne) ` word_form `"
```

Note the lack of quotes around "None".

Otherwise, see the checked in files for more examples.
