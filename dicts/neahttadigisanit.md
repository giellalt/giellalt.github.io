# Neahttadigisánit

**Neahttadigisánit** (_NDS_) is a family of appr. 75 online reading dictionaries which use
analysers to find lemma forms, and sends them to dictionary lookup. The dictionaries are grouped
according to minority language, in [12 different dictionary pages](nds/NeahttadigisanitLanguagePairs.html)


# Linguistic documentation

## General documentation
- [**TODO-list:** A wishlist for new features to be added](NewFeatures.html)
- [Designing language resources for NDS](nds/DesigningResources.html) <!-- * [Moving language pairs](nds/NDSMovingLanguagePairs.html) -->
- [Testing dict-FSTs ](TestingDictFST.html)

## Maintenance (mostly UiT-specific)

- [Updating linguistic options](nds/NDSLinguisticSettings.html)
- [Updating Localisations](nds/NDSLocalisations.html)
- [Updating dictionaries and fsts on the server](nds/NDSUpdatingDictionaries.html) (UiT relevant)
- [Logging options and extraction](nds/LogExtraction.html)

# Dictionary editors

NDS dictionaries are written in xml. They may be edited:
- with an xml editor using css style sheet (graphical mode)
	- [The XMLMind dictionary editor](../infra/editing_dicts_w_XXE.md)
	- [Setup of the XMLMind editor](../tools/xmlmind-dictsetup.md)
	- [XMLMind in a web browser (not yet set up)](http://www.xmlmind.com/xmleditor/web_edition.shtml)
- with an exml editor without style sheets (the editor shows the dictionary as an xml tree)
	- Oxygen and almost all other xml editors
- text editors with syntax check
	- emacs and other editors for programmers 
- text editors without syntax check, but with syntax coloring
	- subethaedit and other general editors 

# Technical documentation

- [Source repository (on github)](https://github.com/giellatekno/neahttadigisanit) (Each subfolder contains a **README.md** file describing its content)
- [Management script (fab)](nds/nds_commands.html) (For updating, restarting, etc)
- [Configuration](nds/NDSConfiguration.md) (What goes into a configuration file)
- [Troubleshooting](nds/NDSTroubleshooting.html) (Common things that may go wrong)
- [API](nds/API.html) (The limited web API exposed by NDS)
- [Updating language-specific options](nds/NDSLinguisticSettings.html)
- [Flask: The software used for NDS](nds/FlaskSoftware.html)
- [How to start new language pairs](nds/StartingNewLanguagePairs.html)
- [*Including Neahttadigisánit as an option in a website*](nds/AddingNDSPluginToOtherSites.html)






# Meetings

- 2024: [27.1.](nds/referat/240127.html)
- 2016: [20.9.](nds/referat/160920.html) 
- 2013: [4.2.](nds/referat/130204.html) 


# Obsolete documentation

- [Detailed explanation of the configuration files](nds/ConfigFiles.html) A bulletpoint on installation, and virtual envs. Now covered in the README file in the repository.
- [Developing in NDS and virtualenv](nds/NDSDeveloping.html)
- [Overview over click-in-text functionality status](nds/NDSProjectsInBrowsersStatistics.html)

