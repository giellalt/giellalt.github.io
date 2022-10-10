# Neahttadigisánit

**Neahttadigisánit** is an online reading dictionary which uses analysers to
find lemma forms, and send them to dictionary lookup. This page documents
developmental work on Neahttadigisánit.


#  Publications
[Publications and presentations related to dictionaries](../ped/dictpublications.html)




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


# Planning new features
* [New features](NewFeatures.html)




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


* [Source file directory](https://github.com/giellatekno/neahttadigisanit) (Each subfolder contains a **README.md** file describing its content)
* [Flask: The software used for NDS](nds/FlaskSoftware.html)
* [Developing in NDS and virtualenv](nds/NDSDeveloping.html)
* [Troubleshooting](nds/NDSTroubleshooting.html)
* [API](nds/API.html)
* [Fabric (fab) and how to use it](nds/Fabric.html)


## Configuration file


The file `app.config.yaml` contains the following things, and is in
[YAML](http://www.yaml.org/refcard.html) format:


 * FST path and format definitions
 * XML dictionary path and format definitions
 * Language name defininitions and localisations
 * Base form information: for each part of speech for each language, words
   that have an analysis matching these tags will be looked up in the lexicon
   and shown to users.
 * Paradigm generation: these are for the word detail views only, and these forms
   will be generated and presented to users.
 * Tag rewrites: Tags in FSTs or Lexicon files will be rewritten before being presented
   to users.


* [Detailed explanation of the configuration files](nds/ConfigFiles.html)
* [More explanations on the same files](nds/FilesForConfiguratingNDS.html)
* [Updating language-specific options](nds/NDSLinguisticSettings.html)


## Restarting the service


Log in to gtdict, switch to user neahtta, go to /home/neahtta/neahtta and issue:


```
      fab DICT restart-service
```


where DICT is the relevant name for the dictionary to restart (sanit, baakoeh, ...).


The service must be restarted each time lexica, FSTs, or the configuration file
have been updated. Sometimes this may take a little while, as XML files need to
be reparsed, and data structures for autocomplete need to be prepared.

To restart all running dictionaries, for example after updating the source code, issue:

```
      fab restart-running
```


# Testing
* [Testing dict-FSTs ](TestingDictFST.html)
* [Overview over click-in-text functionality status](nds/NDSProjectsInBrowsersStatistics.html)


# Meetings


* 2013: [4.2.](nds/referat/130204.html) 
* 2016: [20.9.](nds/referat/160920.html) 
