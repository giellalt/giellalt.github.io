# ELAN

This page documents conventions, standards and relevant workflows used for ELAN annotations created by the [Freiburg-Tromsø Speech Corpora](freiburg.html). 

## Introduction


ELAN is a GUI tool for the creation of annotations on video and audio resources. It is used by many documentary linguists and several language documentation projects in [DOBES|http://dobes.mpi.nl/], [HRELP](http://www.hrelp.org/) and other similar programs.


The program allows for complex corpus searches using RegEx, multi-tier and multi-corpus (i.e. across several ELAN-files) as well as visualization of search results (concordance, frequency, etc.). For ELAN-files stored at [The Language Archive (TLA)|TLA.html], these features work also with the online tool [Trova](http://tla.mpi.nl/tools/tla-tools/trova/).


We use ELAN for annotating our video and audio ressources stored at TLA as well as for annoting and presenting our purely written text corpora (without links to multimedia). Here are the [ELAN Documentation Pages at TLA](http://tla.mpi.nl/tools/tla-tools/elan).




## ELAN-xml


The name extension for ELAN files is **.eaf**. These are basically XML files (and can be opened as such), but they can also be read by the program ELAN for beeing presented and further edited in a GUI.




# Workflow


## Current praxis
* Audio/Video raw data is stored at [TLA](TLA.html)
* Orthographic transcription is done in ELAN
* Translation into English and the main lingua franca (Swedish for Pite Saami, Russian for Komi, etc.) is done in ELAN
* Occasionally, more (deeper) annotations are created manually, e.g. pos-tagging


## Planned extension
* Exporting transcribed data from ELAN into the [FST](FST.html)-analyzer
* Morphological analyzis
* Back-importing lemmatized/pos-tagged/glossed wordforms into ELAN 


There is a script for this , at the [langdoc/elan-fst](https://github.com/langdoc/elan-fst) page at github, maintained by Niko Partanen, Joshua Wilbur and Mihael Rießler. The pipeline has been used for Komi (the Freiburg project), Pite Saami (Joshua Wilbur) and North Saami (in Oulu).


## Planned external project (Zhivotova) 
* Morphological analyzis using [Toolbox](Toolbox.html) 
* Back-importing pos-tagged/glossed wordforms into ELAN




# Annotation Conventions


## ELAN
*Documentation page for the [ELAN tier structures used by our projects](ELANtiers.html) and links to ELAN tier template files (XML file in ELAN's .etf-format)
*Documentation page for [Transcription conventions](Transcription.html) applied by our projects




# Related tools
*[WebLicht](http://de.clarin.eu/de/sprachressourcen/weblicht), a web-based tool to semi-automatically annotate texts for linguistics and humanities research. Interaction with WebLicht from ELAN is still only under development


