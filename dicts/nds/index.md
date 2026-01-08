# Neahttadigisánit

**Neahttadigisánit** (_NDS_) is a family of appr. 75 online reading dictionaries which use
analysers to find lemma forms, and sends them to dictionary lookup. The dictionaries are grouped
according to minority language, in [12 different dictionary pages](NeahttadigisanitLanguagePairs.html)

## Linguistic documentation

### General documentation

- [**TODO-list:** A wishlist for new features to be added](NewFeatures.html)
- **Issue-tracker:** [github.com/giellaekno/neahttadigisanit/issues)(https://github.com/giellatekno/neahttadigisanit/issues)
- [Designing language resources for NDS](DesigningResources.html) <!-- * [Moving language pairs](NDSMovingLanguagePairs.html) -->
- [Testing dict-FSTs](TestingDictFST.html)

### Maintenance (mostly UiT-specific)

- [Updating linguistic options](NDSLinguisticSettings.html)
- [Updating Localisations](NDSLocalisations.html)
- [Updating dictionaries and fsts on the server](NDSUpdatingDictionaries.html) (UiT relevant)
- [Logging options and extraction](LogExtraction.html)

## Dictionary editors

The NDS dictionaries are written in xml. We recommend using an xml editor:

- We use:
  - [The XMLMind dictionary editor](editing_dicts_w_XXE.md)
  - XMLMind documentation to be updated
	- [Setup of the XMLMind editor](xmlmind-dictsetup.md) FIX
    - [XMLMind in a web browser (not yet set
    up)](http://www.xmlmind.com/xmleditor/web_edition.shtml) FIX

Other possible editors:

- xml editor without style sheets (the editor shows the dictionary as
  an xml tree) may also be used
  - Oxygen and almost all other xml editors
- text editors with syntax check
  - emacs and other editors for programmers
- text editors without syntax check, but with syntax coloring
  - subethaedit and other general editors

If you use editors that do not check for well-formedness, do check the
syntax before commiting your work, like this (here with V_smenob.xml
as example):

```
xmllint --noout --dtdvalid dtd/smenob.dtd src/V_smenob.xml
```

## Technical documentation

- [Source repository (on github)](https://github.com/giellatekno/neahttadigisanit) (Each subfolder contains a **README.md** file describing its content)
- [Management script ('nds')](nds_commands.html) (For updating, restarting, etc)
- [Configuration](NDSConfiguration.md) (What goes into a configuration file)
- [Troubleshooting](NDSTroubleshooting.html) (Common things that may go wrong)
- [API](API.html) (The limited web API exposed by NDS)
- [Updating language-specific options](NDSLinguisticSettings.html)
- [Flask: The software used for NDS](FlaskSoftware.html)
- [How to start new language pairs](StartingNewLanguagePairs.html)
- [_Including Neahttadigisánit as an option in a website_](AddingNDSPluginToOtherSites.html)

## Meetings

See [separate page](referat/index.md).

## Obsolete documentation

- [Detailed explanation of the configuration files](ConfigFiles.html) A bulletpoint on installation, and virtual envs. Now covered in the README file in the repository.
- [Developing in NDS and virtualenv](NDSDeveloping.html)
- [Overview over click-in-text functionality status](NDSProjectsInBrowsersStatistics.html)
