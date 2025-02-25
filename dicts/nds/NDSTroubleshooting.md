﻿# Troubleshooting

To see logs of an instance on the server, run the following command:

`journalctl -xeu nds-INSTANCE`

## Frequent problems

### 500 error: `Invalid tagset <pos>. Choose one of: `

This means the tagset file is missing, or `pos` is not a valid category in that file.

To fix:

1. Go to: .../configs/language_specific_rules/tagsets
1. Check that ZZZ.tagset exists, where ZZZ is the language ISO (this may be `udm`,
1. `udmM`, or some other short code used within NDS for the language).
1. Then,
   - If it exists: edit the file and add a `pos` category with at least one entry
   - If it does not exist: create the file, and do the above.

For more information on tagsets, see [NDS Linguistic settings](NDSLinguisticSettings.html).

### HTML appears in templates

Try switching internationalization languages and see if the problem remains: if
it does not, then the problem is likely somewhere in a .po file, which means
that somewhere there is a string containing HTML that is not properly escaped.
This can be tricky to debug, but will usually arise by looking at Git diffs,
and comparing to working versions.

### Audio links do not work (opens new tab)

This is a newer feature and hasn't been tested on many projects, however the
easiest thing to check here:

1. go to language_specific_rules/templates/PROJNAME/
1. look for `includes.template`. If this file isn't there, create it, based on what exists in `itwewina/includes.template`. Copy the two JS include lines for SoundManager and audio_links.js

### String compilation failed, aborting: babel.core.UnknownLocaleError: unknown locale 'hdn'

There are two possible problems:

- Compile with a more specific version of this command, i.e., `fab PROJNAME compile` (this procedure is outdated)
- A locale is not installed in the project environment

In the case of the second, see the section _Dat files_ in [NDS Localisations](NDSLocalisations.html).

### 500: "unsupported format character "n" (0x6e) at index 20"

Cause: one of the python formatted variables in the translation strings has the
wrong syntax. This is not surprising, because variable formatting in python
strings has an annoying syntax:

```
    %(variable_name)s
```

Where both the % and the s are required parts of syntax. This is confusing,
because `s` will look surprisingly like the human languages contained in the
strings.

Fix:

- First: confirm that the server is running the most up-to-date versions of the localization files by updating from Git and compiling the strings, `nds strings compile` and restarting the service

- If there is still a problem, then likely one of the translation strings is misformatted. For the affected locale, search through the `.po` file for the affected template, and doublecheck that all translations marked with `#, python-format` have variables with the correct syntax.

  OR:

  Do a regular expression search for everything not in the correct format. In vim, I use the following expression: you may have to rewrite this to the correct regexp format for your own editor.

```
  %\((.*)\)[^s\w\s]
```

### Compounding problems

Make sure the tagstring is the correct one, the fst is correct, and the tags are declared.
