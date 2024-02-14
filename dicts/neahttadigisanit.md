# Neahttadigisánit

**Neahttadigisánit** (_NDS_) is an online reading dictionary which uses
analysers to find lemma forms, and sends them to dictionary lookup.


# Overview

NDS is run in many instances. An instance contains all dictionaries related to
one language, or in some cases, a group of related languages. The instance
name is usually the word for "words" in that language. For example,
_sanit_ (_sánit_ = _words_) ([sanit.oahpa.no](https://sanit.oahpa.no)), for
North Sámi, has dictionaries

* North Sámi - Norwegian Bokmål
* Norwegian Bokmål - North Sámi
* North Sámi - Finnish
* Finnish - North Sámi
* Spanish - North Sámi

Each instance has its corresponding configuration file, which defines which
dictionaries it contains, as well as for which languages there exist an
analyser, and generator.


# Linguistic documentation and maintenance

* [Overview over existing language pairs](nds/NeahttadigisanitLanguagePairs.html)
* [Starting new language pairs](nds/StartingNewLanguagePairs.html)
* [Designing language resources for NDS](nds/DesigningResources.html)
<!-- * [Moving language pairs](nds/NDSMovingLanguagePairs.html) -->
* [Updating linguistic options](nds/NDSLinguisticSettings.html)
* [Updating dictionaries and fsts](nds/NDSUpdatingDictionaries.html)
* [Updating Localisations](nds/NDSLocalisations.html)
* [Logging options and extraction](nds/LogExtraction.html)


# Technical documentation

* [Source repository (on github)](https://github.com/giellatekno/neahttadigisanit) (Each subfolder contains a **README.md** file describing its content)
* [Management script (fab)](nds/fab.html) (For updating, restarting, etc)
* [Configuration](nds/NDSConfiguration.md) (What goes into a configuration file)
* [Troubleshooting](nds/NDSTroubleshooting.html) (Common things that may go wrong)
* [API](nds/API.html) (The limited web API exposed by NDS)
* [Updating language-specific options](nds/NDSLinguisticSettings.html)
* [Flask: The software used for NDS](nds/FlaskSoftware.html)


# Publications

[Publications and presentations related to dictionaries](../ped/dictpublications.html)


# Using the NDS JavaScript Plugin on other sites

**Neahttadigisánit** provides an [in-browser plugin](http://sanit.oahpa.no/read/)
that allows you to look up words by clicking on them. It is available by
bookmarklet, a bookmark that you click while on any site to include the
functionality, but it is also simple to include on other sites. For an example,
visit [Kursa](http://kursa.oahpa.no/).

If you are a site owner and want to include the plugin on your website
(so that the dictionary is available to all visitors), follow the
how-to guide:

* [Including Neahttadigisánit as an option in a website](nds/AddingNDSPluginToOtherSites.html)


# Misc

## Older (conf)

Paradigms, tagsets, multi-word lookup

* [Detailed explanation of the configuration files](nds/ConfigFiles.html)


## Testing

* [Testing dict-FSTs ](TestingDictFST.html)
* [Overview over click-in-text functionality status](nds/NDSProjectsInBrowsersStatistics.html)


## Issues

A page tracking some issues. More are in the TODOs file in the repository.
Newer issues are tracked on github.

* [New features](NewFeatures.html)


## Obsolete

A bulletpoint on installation, and virtual envs. Now covered in the README file
in the repository.

* [Developing in NDS and virtualenv](nds/NDSDeveloping.html)


## Meetings

* 2024: [27.1.](nds/referat/240127.html)
* 2016: [20.9.](nds/referat/160920.html) 
* 2013: [4.2.](nds/referat/130204.html) 
