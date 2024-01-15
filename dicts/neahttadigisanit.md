# Neahttadigisánit

**Neahttadigisánit** (_NDS_) is an online reading dictionary which uses
analysers to find lemma forms, and sends them to dictionary lookup.

Each language has their own NDS. For example, the North Sami one is
[sanit.oahpa.no](https://sanit.oahpa.no). See
[Overview over existing language pairs](1) for all the instances.

  [1]: nds/NeahttadigisanitLanguagePairs.html


# Publications

[Publications and presentations related to dictionaries](../ped/dictpublications.html)


# Linguistic documentation and maintenance

* [Overview over existing language pairs](nds/NeahttadigisanitLanguagePairs.html)
* [Starting new language pairs](nds/StartingNewLanguagePairs.html)
* [Designing language resources for NDS](nds/DesigningResources.html)
* [Moving language pairs](nds/NDSMovingLanguagePairs.html)
* [Updating linguistic options](nds/NDSLinguisticSettings.html)
* [Updating dictionaries and fsts](nds/NDSUpdatingDictionaries.html)
* [Updating Localisations](nds/NDSLocalisations.html)
* [Logging options and extraction](nds/LogExtraction.html)


# Technical documentation

* [Source repository](https://github.com/giellatekno/neahttadigisanit) (Each subfolder contains a **README.md** file describing its content)
* [Management script (fab](nds/fab.html) (For updating, restarting, etc)
* [Configuration](nds/NDSConfiguration.md) What goes into a configuration file
* [Troubleshooting](nds/NDSTroubleshooting.html)
* [API](nds/API.html)
* [Flask: The software used for NDS](nds/FlaskSoftware.html)
* [Updating language-specific options](nds/NDSLinguisticSettings.html)


#  Using the NDS JavaScript Plugin on other sites.

**Neahttadigisánit** provides an [in-browser plugin](http://sanit.oahpa.no/read/)
that allows you to look up words by clicking on them. It is available by
bookmarklet, a bookmark that you click while on any site to include the
functionality, but it is also simple to include on other sites. For an example,
visit [Kursa](http://kursa.oahpa.no/).

If you are a site owner and want to include the plugin on your website
(so that the dictionary is available to all visitors), follow the
how-to guide:

* [Including Neahttadigisánit as an option in a website](nds/AddingNDSPluginToOtherSites.html)


# Older (conf)

Paradigms, tagsets, multi-word lookup

* [Detailed explanation of the configuration files](nds/ConfigFiles.html)


# Testing

* [Testing dict-FSTs ](TestingDictFST.html)
* [Overview over click-in-text functionality status](nds/NDSProjectsInBrowsersStatistics.html)


# Misc

## Issues

A page tracking some issues. More are in the TODOs file in the repository.
Newer issues are tracked on github.

* [New features](NewFeatures.html)


# Obsolete

A bulletpoint on installation, and virtual envs. Now covered in the README file
in the repository.

* [Developing in NDS and virtualenv](nds/NDSDeveloping.html)


# Meetings

* 2024: [27.1.](nds/referat/240127.html)
* 2016: [20.9.](nds/referat/160920.html) 
* 2013: [4.2.](nds/referat/130204.html) 
