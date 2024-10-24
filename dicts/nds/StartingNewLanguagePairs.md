# Starting new language pairs

This document explains how to start new Neahttadigisánit projects.

## Starting a new project

Commands here may assume that you have already configured the virtual
environment. If you are not sure, you probably have not done so. See
[Developing in NDS and virtualenv](NDSDeveloping.html).

Also this assumes you have determined a project short name already. These can
be changed at a later time, but with some amount of find/replace work, and
moving directories. Below, PROJNAME will stand in for this. Replace it with
your project name.

### Create the configuration file

1. In the terminal, move to `neahttadigisanit/neahtta/neahtta/`
2. Copy `configs/sample.config.yaml.in` to `configs/PROJNAME.yaml.in`
3. Open the file in a text editor, and read through the settings. There are
   numerous comments to guide you.
4. When you are done, check in the changes.

### Adding language names

1. Open the file `configs/language_names.yaml`
1. For each language in the project, check the following (there are plenty of comments to guide you):
   1. the `NAMES` variable contains the ISO codes, and then a string marked for
      localization with the language names in English
   1. the `LOCALISATION_NAMES_BY_LANGUAGE` contains ISO codes, and the language's
      own name / endonym
   1. the `ISO_TRANSFORMS` contains any potential pairs of two-character and
      three-character ISO codes

### Create additional directories and files

TODO: explain.

### Test the configuration

1. In the terminal, move to `neahttadigisanit/neahtta/neahtta/`
1. Activate the virtualenv
1. Run `nds compile PROJNAME`, to compile the dictionaries.
1. Run `nds dev PROJNAME`. If all is okay, this will start up the local
   development server. It can be reached on
   (http://localhost:5000)[http://localhost:5000]

### Check in the configurations

Check in the following config files

- config/language_names.py
- config/PROJNAME.config.yaml.in

## Server-side configuration

### Adding opt directories for FST deployment

If, while editing the Makefile, you are creating new languages in the _opt_
directory for deployment, there are three things to do:

- create _/opt/smi/LANG/bin_
- check permissions on directories _/opt/smi/LANG/bin_ and _/opt/smi/LANG_, if it is owned by the group _neahtta_, and writeable by that group

### Configuring nginx

Nginx configuration files are found at /etc/nginx/conf.d/. Copy an existing one and change what is needed.

### Configuring systemd

To run the new dictionary as a service, you need to create a systemd service and a socket. They are found at /etc/systemd/system/. Copy existing files and configure as needed. Enable the socket using systemctl.

## Added polish

Now that we have a running instance, it's time for some extra configuration.

### Flags

For languages that have a translation available in the interface, a flag is
necessary for the menu. Wikipedia provides pretty much all flags in SVG format,
and automatically converts to PNG. To get a roughly 20 x 15 px flag, use the
following steps:

- Find the flag `.svg` page in wikipedia, e.g. by browsing to the language
  page or region page, and click on the flag:
  [http://en.wikipedia.org/wiki/File:Flag_of_Nenets_Autonomous_District.svg]
- Look for the link just below: "This image rendered as PNG in other sizes:
  200px, 500px, 1000px, 2000px."
- Click any size, preferrably the smallest, and alter the url path, to change
  the width of the flag to 20px:

```
    http://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Nenets_Autonomous_District.svg/200px-Flag_of_Nenets_Autonomous_District.svg.png
    ->
    http://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Nenets_Autonomous_District.svg/20px-Flag_of_Nenets_Autonomous_District.svg.png
```

Save the file to static/img/flags/, and match the path name so that it is
`LOCALE_20x15.png`.

### Linguistic configuration (paradigms, etc.)

See [NDS Linguistic Settings](NDSLinguisticSettings.html).

## Configuring a new pair in an existing instance

So far the process is a little complex, but there are things that can be
done mostly by linguists once the basic structure is in place. In each
following section, I'll mark who the role is best suited for, thus it's
clearer where work can be shared.

This following process assumes that there is already a service existing
to which a new language pair is being added.

### 1.) Establish a build process for the and lexicon

**Intended**: Programmers

#### Lexicon in the Makefile

### 2.) Edit the .yaml file for new FSTs and Dictionaries

**Intended**: Programmers, linguists

Realistically anyone can do this as long as the build process is
working, since most of this should be a cut-and-paste job.

Once you're done, save the file and attempt to restart the service.

If everything seems to be working, do not check in the config file
itself, but copy the values to _INSTANCE.config.yaml.in_, and check that
in. This is simply so that no incoming updates to config files will
destroy existing production configs.

#### *Morphology*  section

This needs to have the paths to the new analysers, for each language
ISO. Follow one of the existing languages and adjust the values as
necessary. If any language variants (mobile spellrelax) need to be
included, a good idea is to use the language ISO as the key, but with
one letter appended, i.e., _udm_ for mobile would be _udmM_.

In any case, the morphology section should contain a new entry like the
following:

```
    YYY:
      tool: *LOOKUP
      file: [*OPT, '/YYY/bin/dict-YYY.fst']
      inverse_file: [*OPT, '/YYY/bin/dict-iYYY-norm.fst']
      format: 'xfst'
      options:
        compoundBoundary: "+Use/Circ#"
        derivationMarker: "+Der"
        tagsep: '+'
        inverse_tagsep: '+'
```

Where `YYY` is the language ISO path. Note the weird way that forming
paths with aliases is handled here in YAML, they may be strings or
lists, and if they are lists, they will be automatically concatinated
into strings. This must be done because YAML does not allow string
concatenation with aliases/variables.

#### *Languages*  section

Add a new entry for the language ISO code to this list.

#### *Dictionaries*  section

Here, add a new item to the list of dictionaries, relative to the
`neahtta` path, i.e., `dicts/file-name.xml`.

```
    Dictionaries:


      ## [... snip ...]


      - source: udm
        target: hun
        path: 'dicts/udm-all.xml'
```

For more information on all the settings for this chunk, see the page on YAML
configuration:
[The Neahttadigisánit Configuration](FilesForConfiguratingNDS.html)

### 3.) Define language names and translation strings

**Intended**: Linguists

Open the file _configs/language_names.py_. Here you will need to add the
language ISO to several variables. Save when done, and be sure to check
in in Git.

#### NAMES

Here we define the name in English, so that it will be available for
translation to any interface languages.

```
    ('sme', _(u"North Sámi")),
```

The most easy way is to copy one existing line, and replace the contents
of the strings. If you're unfamiliar with Python, be careful not to
remove any underscores around the strings, and only edit the contents.

The first value should be the language ISO, **or** the language variant
(_SoMe_, _udmM_, _kpvS_, etc.)

#### LOCALISATION_NAMES_BY_LANGUAGE

Here we have the ISO and the language's name in the language.

```
    ('sme', u"Davvisámegiella"),
```

Again, copy and paste a line, and only edit the strings.

#### ISO_TRANSFORMS

If the language has a two-character ISO as well as a three-character
ISO, we must have these defined here.

```
    ('se', 'sme'),
    ('no', 'nob'),
    ('fi', 'fin'),
    ('en', 'eng'),
```

### 4.) Define tagsets, and paradigms, user-friendly tag relabels

**Intended**: Linguists

If you wish to have paradigms visible in the language, you will need two
things:

- _Tagsets_ files: [NDS Linguistic Settings](NDSLinguisticSettings.html)
- _.paradigm_ files: [NDS Linguistic Settings](NDSLinguisticSettings.html)
- _.context_ files: [NDS Linguistic Settings](NDSLinguisticSettings.html)
- _.relabel_ files: [NDS Linguistic Settings](NDSLinguisticSettings.html)

The easiest means of course is to look at existing languages and copy
what they do.

When done with these steps, be sure to add the new files and directories
to Git and check them in.

## Server config

Things to consider:

- nginx configuration file
- init.d script: make sure to pick an unused port, change the config file, and
  also the path to the pid file, otherwise bad things happen

## Linguistic requirements

**Intended**: Linguists

- The xml format of the lexicon should match sme-nob or sma-nob format as
  closely as possible (`words/dicts/smanob/src`)
- morphological analysers (FSTs, described below)
- lists of tag pairs, what is in FST to convert to what users will see
- lists of paradigms for parts of speech
  - they can be either as detailed as one paradigm per part of speech, or several
    paradigms for parts of speech and varying sub-types. These will have to be
    marked in the lexicon in some way, for exampl, plural-only proper noun
    paradigms for North Saami
- description of attributes in the XML that need to be displayed to the user

## Collecting the materials...

### FSTs

#### Lookup FST

Lookup FST tags may be in any format, as these can be relabeled for users at a
later stage.

```
    vuovdi
    vuovdi  vuovdit+V+TV+PrsPrc
    vuovdi  vuovdit+V+TV+Imprt+Du2
    vuovdi  vuovdit+V+TV+Der/NomAg+N+Sg+Nom
    vuovdi  vuovdit+V+TV+Der/NomAg+N+Sg+Gen
    vuovdi  vuovdit+V+TV+Der/NomAg+N+Sg+Acc
    vuovdi  vuovdi+Sem/Plc+N+Sg+Nom
    vuovdi  vuovdi+A+Sg+Nom
    vuovdi  vuovdi+A+Sg+Gen
    vuovdi  vuovdi+A+Sg+Acc
    vuovdi  vuovdi+Sem/Hum+N+NomAg+Sg+Nom
    vuovdi  vuovdi+Sem/Hum+N+NomAg+Sg+Gen
    vuovdi  vuovdi+Sem/Hum+N+NomAg+Sg+Acc
```

It is best to use the analysers compiled with
_--enable-dicts_, because this will strip extraneous tags.

#### Spell relax FST

Spell relaxing FSTs should follow the exact same format as the lookup FST, but
naturally point to the normative lemmas, or whatever lemmas will be used in
lookups in the lexicon. These could be of three types:

1. Normalizing non-standard spellings
1. Compensating for keyboards without certain characters
1. Switching orthographies, e.g., accepting latin for cyrillic, or vice versa.

Whatever the use case, the analyzed lemma must match up with the lexicon
entry.

Spellrelax behaviour is governed in `$GTLANGS/$LANG/src/orhtography`.
Here, there are two scripts: _spellrelax.regex_ and
_spellrelax-mobile-keyboard.regex_. These will result in two analysers,
the first containing the spellrelax.regex rules, and the latter will
contain the rules for both regex files. The latter is intended for the
SoMe option (see e.g. [sanit.oahpa.no](http://sanit.oahpa.no)).

- `analyser-dict-gt-desc.xfst`
- `analyser-dict-gt-desc-mobile.xfst`

Put variation **within** the norm, and variation invisible to the user,
in the former file, and ad hoc / dirty hack variation in the latter.

#### Compound marking

Must have a defined (and consistent) method for marking compounds:

```
    vuovdedoaibma
    vuovdedoaibma   vuovdi subst.  + #doaibma subst. ent. nom.
    vuovdedoaibma   vuovdi adj.  + #doaibma subst. ent. nom.
    vuovdedoaibma   vuovdedoaibma subst. ent. nom.
```

**Compound marker**: `"  + #"`

This setting can be configured in the YAML settings file.

#### Derivation marking

Must also be able to specify how all derivational suffixes are marked, because
this affects how lexicalized words are displayed when a derivation has a
lexicalized form.

```
    oahpásmahttit
    oahpásmahttit   oahpásmuvvat verb avl.suff.-ahtti verb inf.
    oahpásmahttit   oahpásmuvvat verb avl.suff.-ahtti verb imp. 2.p.flt.
    oahpásmahttit   oahpásmuvvat verb avl.suff.-ahtti verb ind. pres. 1.p.flt.
    oahpásmahttit   oahpásmuvvat verb avl.suff.-ahtti verb nom.Ag. subst. fl. nom.
```

**Derivation marker**: `"suff."`

This setting can be configured in the YAML settings file.

#### Generation FST

For generation, currently sme and sma use the typical tag format for GT, but,
we have a special generator FST that removes non-standard forms. Also, sma has
some special entries that are marked with a hid attribute
(göövledh+1, göövledh+2) were generation depends on
meaning. These must be included in the generation FST.

### Lexicon

It may be that the analysis FST does not match absolutely with the lexicon, and
this is okay. But, if this is so, it is important to know where the differences
are.

For instance, the above examples show "noun" and "verb" as
the part of speech in the analyzer, but the lexicon only knows "N"
and "V". Thus, in order to line up these tools, the programmers will
need to have a list of all of these things to formulate rules.
