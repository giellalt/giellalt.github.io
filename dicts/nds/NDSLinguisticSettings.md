#  Neahttadigisánit linguistic settings


The documentation here concerns the directory and subdirectories in
*neahttadigisanit/src/neahtta/configs/language_specific_rules/*.  The directory
itself is divided into the following sections, if you are new to NDS, read
these in order:


1. tagsets
1. user_friendly_tags
1. paradigms 
1. Contexts
1. paradigm layouts


If you update these files, be sure to run the test procedure and restart the
service, as explained in [Updating](NDSUpdatingDictionaries.html), but don't
forget to check in any new files created.


##  Tagsets


Tagsets are necessary for constructing certain types of rules for manipulating
lexical information and morphological information, either for generating forms,
or analyzing input, or even determining how entries should be displayed...
However, tagsets crucially operate on morphological analyzer output. Tagsets
are particularly integral in defining paradigms.


The *pos* tagset is also particularly important, because it helps match up
morphological analyses with lexicon entries, as the lexicon lookup will include
*pos* when a value is available. If entries in the search results appear to
be out of line, and do not match by *pos*, one of the causes may be that a
*pos* is missing from the list.


Tagsets are file based because this makes it easier to duplicate them for
language variants, or share languages across dictionary instances--
particularly majority languages, for which it is easy to forget to check
settings for when they are used in multiple installations.


Symlinks in this directory are also permitted, if two language variants (i.e.
*SoMe* and *sme*) need to share a tagset.


###  Tagset files


Each language has its own set of tagsets, and these are defined in a file in:


```
    configs/language_specific_rules/tagsets/
```


The filename must be *ISO.tagset*, where ISO is a variable for the 3-character
language ISO (even for languages like *se*, which should be listed in this
directory as *sme*).


The file format is YAML, and all that is permitted here is key-value settings,
where the key is the name of the tagset, and the value is a list of tags that
fit into this tagset.


###  Example


Here's an example of some tagsets from *sme*:


```
    pos:
     - "N"
     - "V"
     - "A"
     - "Pr"
     - "Po"
     - "Num"
     - "CS"
     - "CC"
     - "pron."
     - "subst."
     - "verb"
     - "adj."
     - "konj."
    type: 
     - "NomAg"
     - "G3"
     - "aktor"
     - "res."
     - "Prop"
     - "prop."
    number: ["Sg", "Pl"]
```


Note that YAML allows you to define lists in multiple ways, and strings may be
quoted or non-quoted, however, it is often a good idea to quote them anyway,
because certain values like *no* and *yes* may be translated to boolean values
*True* and *False*, instead of being used as plain strings.


The above example also shows the two alternate list formats, one with brackets,
and the other with hyphens.


Note that comments are also allowed (marked with *#*), and it may be useful
to document some sets as needed.


See [YAML documentation](http://en.wikipedia.org/wiki/YAML#Lists) for more info.


##  User-friendly tags


```
    configs/language_specific_rules/user_friendly_tags/*.relabel
```


Each file is named with a suffix *.relabel*, but the name may be
anything. Organize tag relabel sets however you will, maybe on a
language-pair to language-pair basis, or by dictionary set instead.


Consider that you may have to repeat some tagsets, so maybe using YAML
aliases will make things easier.


##  File structure


The file structure is quite simple, and at most it must contain a list
called *Relabel*. Each list item is a dictionary containing the keys:


- *source_morphology* - The morphology name, usually an ISO, but
   sometimes something else in the case of language variants. (*sme*,
   *SoMe*, *kpv*)
- *target_ui_language* - The language the user is browsing in-- must
   be an ISO.
- *tags* - A dictionary of tags.


###  Example


```
    Relabel:


      - source_morphology: 'kpv'
        target_ui_language: 'eng'
        tags: &some_alias_name
          V: "v."
          N: "n."
          A: "adj."


      - source_morphology: 'kpv'
        target_ui_language: 'fin'
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


```
          V: "v."
          N: "s."
          A: "adj."
          DO_NOT_SHOW: ""
```


You can even set tags in another location, outside of the *Relabel*
list, if necessary.


```
    Aliases:
      tag_set_one: &some_alias_name
        V: "v."
        N: "n."
        A: "adj."


    Relabel:
      - source_morphology: 'kpv'
        target_ui_language: 'eng'
        tags: 
          <<: *some_alias_name


```




##  Paradigm generation and paradigm design


The dictionary paradigms are managed by a file and directory structure based
around the language code for the language in question. This way multiple
projects may share language paradigm code. 


###  The paradigm folder structure


```
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
and entry.  Thus, if one rule looks for [tagset](#tagsets) values of *pos*,
*valence* and *context*, and another only looks for *pos* and
*valence*, the first rule would will be applied if both match.


Symlinks in this directory are also tolerated, so if multiple language variants
need to use the same rule set (e.g., *sme* and *SoMe*), simply make a
symlink between the directories.


For some more advanced examples, see the rules for *sme* (particularly,
pluralia tanta rules).


###  Paradigm file format (.paradigm)


*.paradigm* files concern only which forms will be generated. If you wish to
define a specific way of displaying the generated forms, other than what the
system default is, see the section below on *.layout* files.


Paradigm files are structured in the following way: one part is YAML, and the
other part is data in [Jinja](http://jinja.pocoo.org/docs/templates/) format.
Essentially what this says is, if the first part's (YAML) conditions are
matched, then we render the following template for the paradigm, and pass
it off to the generator tool.


The rules may be very simple, but here is one that combines *morphology* and
*lexicon* matching as an example:


```
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


 * `name` - A short name to display when the service is loading (required)
 * `description` (optional) - More words for other developers
 * `morphology`, `lexicon` - one of these must be present, but both may be
   present as well


###  Conditions together


Operating together, what the conditions essentially say is that for any
user-inputted wordform, if the analyzer rules find a matching analysis, 
and the lexicon rules find a matching lexicon entry, then the paradigm
will be used for the entries where these align.


###  Morphology conditions


Conditions that are possible to match on are set up in a variety of ways.
Analyzer conditions may be specified in the *morphology* key, and each key
under that may be a [tagset](#tagsets) and a value, or a whole tag.


In the following example, the condition applies if the PoS is *V*, and if
there is a tag from the *infinitive* tagset present.


```
    morphology:
      pos: "V"
      infinitive: true
```


Above we see that either a string value *"V"* may be specified, or boolean
*true*, which means 'any member of the tag set is present'. A list may also
be specified, meaning that any of those values must be present for the
condition to be true. For example, tagset *infinitive* is defined to be the
set *Inf1*, *Inf2*, *Inf3*, but we only want to match the first two, and
not the third: 


```
    morphology:
      pos: "V"
      infinitive:
        - "Inf1"
        - "Inf2"
```


The *morphology* condition also supports matching of whole tags, using the
*tag* keyword, so for example, the above example may be reformulated in this
way: 


```
    morphology:
      tag: 
        - "V+Inf1"
        - "V+Inf2"
```


One additional keyword is *lemma*, available to both *morphology* and
*lexicon*, to constrain the rule to a specific lemma:


```
    morphology:
      lemma: "diehtit"
```


**NB:** if there are problems matching a tag set, make sure that it is defined in
the language's corresponding tagset.


###  Lexicon conditions


The *lexicon* is also usable for providing conditions for a particular
paradigm. Some predefined keys are available, but these mostly require defining
XPATH statements to catch values from the entry, otherwise testing them is much
like the above morphology section, with the exception that there is nothing
similar to *tagsets* defined elsewhere to match against.


For example, assuming we have some place-name lexicon entries like the
following, which we want to match:


```
    <e>
        <lg>
            <l sem_type="Plc">Minneapolis</l>
        </lg>
        ... etc ...
    </e>
```


A rule for the above might look like the following:


```
    lexicon:
      XPATH:
        sem_type: ".//l/@sem_type"
      sem_type: "Plc"


```


Note that you may also specify lists, as with the above:


```

      
    lexicon:
      XPATH:
        sem_type: ".//l/@sem_type"
      sem_type: 
        - "Plc"
        - "Something"
```


##  Paradigm definition


Paradigm definition is mostly plaintext, but since it is a template, it
is possible to do all sorts of template operations.




    ` lemma `+N+Sg+Nom \\
    ` lemma `+N+Sg+Acc


Certain variables are available by default:


  - *lemma*


Additional variables are available as they are defined by the conditions, and
the variable will be set to the matched condition:


```
    lexicon:
      XPATH:
        some_attribute: ".//l/@some_ttribute"
      some_attribute:
        - "Foo"
        - "Bar"
    --
```
    ` lemma `+Adj+` some_attribute `


It is also possible to specify additional variables that are not used in the
match condition:


```
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


##  Paradigm layouts and presentation


Paradigm layouts are defined in a similar way as paradigm generation: the file
structure is one half YAML rules, and the second half defines the layout. These
are split by a line containing only ```--```. As in the YAML section, spacing
is very important, so make sure your text editor is able to see this. Note
also: only use spaces in the layout definition, tabs may result in errors in
processing: confirm that your text editor will not convert spaces to tabs in
any case.


First we will look at an example, and then following sections will describe all
the details and options.


###  An example, and overview:


TODO: actual working example definition from itwêwina, as well as screenshots
of the result.


Most of the following example should look familiar based on the above
documentation of paradigm generation:


```
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
1. columns are marked with the pipe character ` | `. 
1. leave one space between the pipe character and any content
1. each row must begin with and end with ` | `
1. the first row should not include any cells spanning multiple columns


##  Associating the layout with a generated paradigm


There are two ways to target the layout to a paradigm, the first is the exact
same formulation as in paradigm generation, with *morphology* and *lexicon*
keys, and their associated rules (see above, in *.paradigm* files).


The second, is to associate the *.layout* file with a *.paradigm* file in
the *paradigm* setting. Thus if the rule for a *.paradigm* applies, so will
any associated *.layout* files. The value for this setting should be the name
of a file in the same directory, no relative paths are allowed.


```
    name: "verb paradigm"
    paradigm: "some-paradigm-file.paradigm"
    layout:
      type: "basic"
```


##  Layout options (YAML)


*Name* is mostly used to render the startup log message as settings
are read.


*description* may optionally be set. This will be displayed to users
underneath the table. This may either be a YAML string, which will be shown in
all languages, or a set of translations depending on the meta-language in use:


```
    name: "transitive"
    description: "This is the transitive conjugation."
```


The following shows multiple languages, note that if one translation does not
exist, the first language will be used:


```
    name: "transitive"
    description:
      eng: "This is the transitive conjugation."
      fra: "C'est ne pas une pipe."
```


YAML has several conventions for specifying strings: [YAML strings](https://en.wikipedia.org/wiki/YAML#Basic_components_of_YAML).


###  Optional settings within *layout*


The following settings do not need to be defined at all, but help determine the
presentation of data within the table. 


1. *type* - (string) specify the type of the layout and thus its title in the tab menu if multiple layouts are matched.
1. *no_form* - (string) If no form results from paradigm generation, by default, whatever is in the cell will pass through. Otherwise, set what will be shown: ex.) a space *" "* for nothing, *"-"* a dash, etc.
1. *value_separator* - default is a line break in html, <br />), other ideas: comma, etc.


##  Layout specification, features, options

Consider the table in the following example *.paradigm* file and *.layout*
file:


*verbs.paradigm* contains:


```
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


*verbs.layout* contains:


```
    name: "basic"
    morphology:
      pos: V
    --
|       |  "Sg"   |  "Pl"    |
|  "1p" | Prs+1Sg | Prs+1Pl  |
|  "2p" | Prs+2Sg | Prs+2Pl  |
|  "3p" |       Prs+3P       |
```


After the *.paradigm* file is sent off to generation, two things occur here
to render the table:


1. Some values (quoted) are treated as strings, and rendered directly
1. Tags are matched against the generated paradigm, and inserted into the layout. Multiple forms will be inserted if multiple forms match.


##  Matching wordforms


The default behavior is to match the value in the cell against all tags, as a
substring. This allows layouts definitions to be smaller and easier to read.
You may alternatively specify a whole tag:


```
|  "1p" | V+Prs+1Sg |
|  "2p" | V+Prs+2Sg |
```


Two features borrowed from regular expression land are available: `^match`
'starts with "match"', `match$` 'ends with "match"', in order to help
disambiguate between instances where a substring would return multiple forms.


```
|  "1p" | Prs+1Sg$ |
|  "2p" | Prs+2Sg$ |
```


TODO: examples from myv


##  Heading values, and heading internationalization


`"quoted"` values will be passed through as headings. You can also access
*generation_tags* in `user-friendly tags` by prepending an underscore to
the quoted string: `_"1Sg"`.


##  Cell spanning


Cell spanning is accomplished by leaving out the pipe character.
Currently only spanning horizontally is supported, but not vertically.


```


|  "Label" | "Label"   | "Label"         |
|  "Label" | +Some+Tag | +Some+Other+Tag |
|  "Label" |       +Some+Tag             |
|  "Label" | +Some+Tag | +Some+Other+Tag |


```


This also depends on a clearly-defined column layout. Cell-spanning is not
allowed in the first column, because this is used to set the layout.


As long as the pipe is missing, the value may be anywhere within.


###  Cell text alignment 


Aligning text or values within the cell is Value alignment is a matter
of using the character {:} next to the cell border character {|}. Make
sure to also leave a space between this and content inside:


```


| : "Label" | +Tag    :| +Some+Other+Tag |
| : "Label" |:        +Tag              :|
| : "Label" | +Tag     | +Some+Other+Tag |


```


In most cases you will not need these, because the default style should
automatically center values in spanned cells, and header cells will be
automatically positioned, however you may use alignment to override
this.




##  Contexts


Contexts are for applying additional helpful information to a generated
wordform, perhaps to improve legibility or provide linguistic queues for
important distinctions, such as adding adverbs to display tense or pronouns to
reinforce person agreement.


Contexts are defined within *.context* files in the corresponding language
directory in `language_specific_rules/paradigms`. The filename may be
anything, so long as the suffix is *.context*. For convenience, *sme* and
*sma* match filenames between paradigms and context, but there is no need to
do so, and one *.context* file could be used for everything.


###  File structure


Context files are simply a YAML list, and each item is a dictionary
with the following keys:

 
- *entry_context* - (string) matches the *@context* attribute on each *<l />*
   node. Set to a string, or None
- *tag_context* - (string) matches the tag used in generation. Must be
   set to something, as none would overapply the context.
- *template* - jinja-format string, which accepts certain variables:


Template variables allowed:

- ` word_form ` - inserts the wordform
- ` context ` - inserts the context (usually not necessary)


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


