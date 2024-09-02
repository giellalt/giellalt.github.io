# NDS localisations

First we will look at typical maintenance tasks, and more detailed tasks will follow.

# Typical i18n process - making changes to strings, deploying them on the server

Here is how you can expect to work (be in _neahtta_):

- locally: make revisions to text
- locally: extract all strings (_nds strings extract_)
- locally: check in in Git (commit and push)
- on the server: _git pull_
- on the server: compile strings (_nds strings compile_)

# Typical i18n management tasks

The _nds_ script contains shortcuts for running all the following processes.

## Recompiling changes to the localization

First ensure you are logged in as the user _neahtta_ and are in the project directory.

```
	cd ~/neahtta/
```

Then, update the new translations you already checked in locally:

```
	git pull
```

Then, run the compile command

```
	nds strings compile
```

## Recompiling changes to all localizations

The following command will compile new strings to be localised based upon updates in the different templates, and may result in some errors if a locale is not installed on the system. If you do not need these locales, this is not a problem, and you should use the project-specific command above. If you need these locales, this is a problem, and see below on the section on _Adding new locales_.

```
	nds strings compile
```

## Extracting strings due to code changes.

Sometimes you (or other maintainers) want to revise or enlarge
the dictionary interface. This should be done in the underlying
html files, e.g. here:

- neahttadigisanit/src/neahtta/templates
- neahttadigisanit/src/neahtta/configs/language_specific_rules/templates/

If in doubt, be careful, read documentation on a relevant django page.

If the source code has changed, this has likely resulted in line numbers being out of date. Thus, you will need to re-extract the strings. Babel is pretty smart about doing this.

First ensure you are in the project directory.

```
	cd ~/neahtta/
```

Then, extract strings:

```
	nds strings extract
```

## Recompiling translations for production server

- log in to the server as the neahtta user
- switch to the project directory: `cd ~/neahtta/`
- write the command : \\ `nds strings compile`

If everything went good and there were no errors, continue, otherwise if you need help troubleshooting see the section below
(_Common error messages and troubleshooting_).

Then, you need to restart the relevant services.

```
	nds restart PROJNAME
```

(Where PROJNAME is a standin for the project name, e.g., _baakoeh_, _valks_, _sanit_, etc.)

# Writing localisation

## Translating the string to the localisation language

To write _localisation_ (translate the interface to different languages) you have to find the place of the specific file to localise

```
neahtta>find . -name "templates" -type d
./configs/language_specific_rules/templates
./templates
```

Then you go to the specific directory, for instance, here:

`configs/language_specific_rules/templates/`

There you find your directory (follow your ISO code). Edit the lines labeled _msgstr_ in the file `LC_MESSAGES/messages.po`. Note from the examples the way the quotation marks are put, with errors here the file will not work. **Do not change** the text on the lines marked `#:` or `msgid`.

Then check in your changes. To update the server, follow the procedure in the section **Recompiling translations for production server** below.

## What if you are not satisfied with the content of the msgid (the original)?

The form of the msgid is not important (it is translated), but an msgid with wrong or irrelevant content may lead the translators astray.

Over each _msgid_ there is a file reference, go there and correct the original text. It is always found with a tag

```
{ trans %}
```

before and a tag

```
{ endtrans %}
```

after the string to be translated. You thus change what you find between those two tags.

Then, you should compile new translations.po files. This is done on the NDS server. Go there, and do

```
nds strings compile
```

Afterwards, check in the new .po files in `translations/*/LC_MESSAGES/messages.po`

Also read [the Oahpa documentation on localisation](/ped/common/Localisation.html) in order to see how this works for Oahpa.

# To set up and maintain the localisation infrastructure

Internationalization (i18n) in Neahttadigisánit uses Flask-Babel
which is an interface for flask to the Python Babel extension

- [Flask and Babel documentation](http://packages.python.org/Flask-Babel/)
- [Babel documentation](http://babel.edgewall.org)

Translation strings are marked as they were in the _Oahpa_ programs, but NDS uses a slightly different template engine, there are however no major differences.

Marking translation strings in templates:
[Jinja documentation](http://jinja.pocoo.org/docs/templates/#i18n-in-templates)

## Running the commands

In order to run these commands locally on your own machine, you will need to have a _virtualenv_ installed. This is because there are a few packages required to extract strings, and it's easier to just use the automatic install script.

See: [Developing NDS](NDSDeveloping.html)

# Adding new locales

This comes in three main steps:

1. Make sure .dat files exist
1. Generate a .po file for the locale
1. Check in the .po files

On UiT's `gtdict` server the environment is already configured with the required tools. If you wish to do this on your local machine, you will need to set up your environment before this works.

For documentation on this, see: [Developing NDS](NDSDeveloping.html)

All further steps assume that you are doing this on gtdict, if you are developing on your own machine, you will need to know what paths you need to update.

## Dat files

The system knows some locales, but not all. Unknown locales such as `crk` and `sma` need to be defined somewhere. North Saami is in existence in se.dat, se_NO.dat and se_FI.dat, but this does not help with languages without two-letter codes. Thus, for those we need to copy some files.

The required files must be copied from the NDS `localedata` ddirectory into babel's `locale-data` directory. This should be done automatically by NDS if encountered while running (see `i18n/utils.py:copy_custom_locales`), but if it is not, you may have to do it manually. The files should be put in `neahttadigisanit/src/env/lib/python3.9/site-packages/babel/locale-data/sma.dat` (or another file for another language). All existing custom localization files are provided for convenience in [the repository](https://github.com/giellatekno/neahttadigisanit/tree/master/src/localedata). If the one you need is not there, then you need to generate it yourself. See instructions at [NDSLocalisations](NDSLocalisations).

Thus the new locale will be able to be initialized with the init command below.

NB: If we were feeling more specific in this step, we could create a new locale specifically for the language, but since specifics aren't required here it is fine to do it this way.

## .po files: generate a message template for a new language.

First make sure that all the message files have been updated to the most recent version of the code, by extracting all strings (above).

Now you can initialize a translation.

```
    pybabel init -i translations/messages.pot -d translations -l LANG
```

Where LANG is the ISO code for the language project.

# Additional notes...

## Activating the virtual environment

If you do not see the environment enabled in the command prompt when you log in as the Neahttadigisánit user, run the following from this user's home directory:

```
    source venv/bin/activate
```

If you do not see changes to the command prompt name, check _which python_ to make sure it is active if you do not see it in the bash prompt. If it still doesn't work, there are probably problems with virtualenv.

Typically you should see something like:

```
    (venv)[neahtta@gtdict ~]$
```

# ISO notes and internationalization language code vs. lexicon/FST language code

Because most browsers report what language they use using the 2-character ISO 639-1 code, any localization that has a 2-character code, (north sámi has se, so lucky!), we must use this code. If it doesn't, then creating new localizations with the 3-character code (ISO 639-2) will be necessary. Also, neahtta.py may not actually handle some of these 3-character localizations as well, so this will need to be fixed.

# Currently supported localizations:

May be found in translations/, but for ease of finding out:

- de German
- et Estonian
- fi Finnish
- fr French
- hu Hungarian
- kv (kpv) Komi (TODO: is this actually what komi users' browsers report?)
- lv (lav) Latvian
- mdf Moksha
- mhr Eastern Mari
- mrj Western Mari
- myv Erzya
- no (nob) Norwegian Bokmål
- olo Livvi-Karelian (Olonetsian)
- ru Russian
- se (sme) North Saami
- sjd Kildin Saami
- sma South Saami
- smn Inari Saami
- sms Skolt Saami
- sv Swedish
- yrk Nenets

# Common error messages and troubleshooting

## babel.core.UnknownLocaleError: unknown locale sms

This means that the locale directory is missing a .dat file for the locale. Follow the procedure in the 'Adding new locales' section.

## catalog translations/sma/LC_MESSAGES/messages.po is marked as fuzzy, skipping

Babel marks things with `#, fuzzy` when it can't find the line in the source code that the string belongs on, however it's not a big problem if line numbers are missing. As such, to compile, delete lines containing `#, fuzzy`, and alternatively determine why there are no line numbers.

Sometimes the first translation string in the catalogue will be marked fuzzy, but this is because it is blank. The first message must be blank for the meta-data, so delete the fuzzy comment if it appears, but leave the string.
