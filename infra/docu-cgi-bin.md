[How to run the cgi programs locally](docu-cgi-bin-locally.md) for development.

CGI-setup
=========

Our programs are available on the net for analyzing and generating
wordforms and paradigms for different languages. The tools can be called
from pages on <http://giellatekno.uit.no/cgi>.

The pages are available for calling the tools in different languages.
For the time being, the supported user interface languages are English,
North, Lule and South Saami, Finnish, Russian and Norwegian. The tools
are available to a varying extent for the approximately 30 languages
found on the frontpage.

The cgi-bin scripts include scripts for analysing and generating words
and sentences in various way. The setup is divided between two systems,
the cgi-bin and forrest documentation. For example, when adding a new
language to the system, changes have to be made both in cgi-bin and
forrest documentation.

CGI-scripts
-----------

The relevant scripts cgi-bin scripts are:

-   smi.cgi  
    Language-independent cgi-script for calling different language
    technology applications: analysis, disambiguation, hyphenation and
    paradigm generation.
-   conf.pl  
    Configuration file that contains most of the variable definitons and
    their initial values.
-   num.cgi
    Numeral generators

All the scripts are developed in the svn-directory, under the module
`gt/script/cgi-scripts`. The official location of cg-scripts is on
gtweb, at the cgi-bin directory under /var/www. The latest versions are
moved to the official directory. There is a script doing this,
`cgi-export` exporting the latest version of the release-tagged
cgi-scripts to the directory. The user must have root privileges to be
able to run the script. In practice, we have been copying the files to
the official directory manually.

The cgi-bin script smi.cgi is located on gtweb, at the cgi-bin
directory. The script processes input sentences from the html scheme by
the user, and then sends it on to the transducers sme.fst for analysis
and isme.fst for generation. The language, charset and the action taken
are configured by the parameters given to the script.

The transducers are located at
`/opt/smi/LANG/bin/`and`/opt/smi/common/bin/`

The minimum requirements for an analyzer to work is the file`lang.fst.`

[Procedures for copying new fsts to /opt/smi is found
here](QuasicodeForKeepingTrackOfTransducers.html).

Forrest documentation and cgi-bin
=================================

The cgi-interface is integrated with Forrest documentation and the pages
are generated when needed. The pages are named after the language
technology application, the language of the application and the user
interface language. The prefixes `d- g- p- `stand for disambiguation
(and analysis and hyphenation), generation and paradigm generation. For
example the file d-sme.sme.html calls analysis tools for North Saami and
the user interface is in North Sámi. The file p-sme.eng.html calls
paradigm generation for North Sámi, the language of the user interface
being English. Finally the file g-sme.nor.html calls generator for North
Saami with Norwegian as the user interface language.

The texts for different user interface languages are stored in XML-files
in the documentation under the name:
`xtdoc/gtuit/src/documentation/content/xdocs/cgi/cgi-lang.xml`. There is
an xsl-script for creating the html-pages for different language
technology applications and transferring the texts from the XML-files to
the page. The script in question is
`xtdoc/gtuit/src/documentation/resources/stylesheets/cgi-index.xsl`. The
Forrest documentation does not pose a limit to the languages that are
used for the documentation.

After the cgi-script is called the user interface to the cgi is
regenerated together with the results of the query by `smi.cgi`. The
same XML-file that contains the texts for the user interface is used for
generating the new html-page.

An example: how to add new language to the documentation
========================================================

To add a new language, changes have to be made both in the server side
and in forrest documentation.

Changes to cgi-bin at gtweb
---------------------------

Compile relevant transducers and abbr.txt and copy them to the
transducer dir

    mkdir -p /opt/smi/lang/bin
    cp the/transducers/etcetera /opt/smi/lang/bin/
    chgrp cvs /opt/smi/lang/bin/*
    chmod 775 /opt/smi/lang/bin/*

If you want these files to be updated automatically each day, then add
the language code to the (now outdated) script `fst2opt`. Note that this
script must be outdated to reflect the new server etc.

Changes to forrest documentation
--------------------------------

In order to create a new interface language: First: Please don't. We
already have seven. Then, if you still want one: First create a page for
the language, LANG.xml and store it
to`xtdoc/gtuit/src/documentation/content/xdocs/`. Then add links to the
analysis pages as shown on the other LANG.xml pages.

The analysis pages are generated automatically by forrest. However, the
first versions are quite reduced, since there are no language specific
texts automatically available. To add text to the page, edit the
different interface texts in the catalogue cgi, e.g. for English the
file:

    xtdoc/gtuit/src/documentation/content/xdocs/cgi/cgi-eng.xml

Note that there are seven x 2 files in the cgi catalogue, and eight
language will then give rise to two new files.

Updating the transducers
========================

Earlier, the transducers and other relevant files were updated daily
using the `cron` facility. The script `gt/script/fst2opt` esd
responsible for retrieving the latest version from cvs, compiling the
binaries and copying them to the relevant directories. The crontab was
set up by the person who is responsible of the cgi-bin setup. Due to
unstable fsts we abandoned this system and instead went for a fully
manual system. Now, with the number of languages rising, we want a
semi-automatic system.

The cgi-bin scripts
===================

The cgi-bin files are written in Perl and use the Perl module CGI.pm.
The file smi.cgi is used for analysing and disambiguating as well as
generating for different languages. It can be used for new languages
without any additional configuration, when the tools that are used by
the script (lang.fst etc.) are in place.

The script contains a conversion from digraphs c1, s1, etc. to some
utf-8 characters: č, š, etc. for those who don't have Saami characters
in the keyboard. The latin-1 can be chosen as an input language as well,
but the page that is generated is utf-8 encoded. The option is tested at
the moment and it may turn out that it's not useful. We should consider
abandoning this option.

The files contain a very good documentation themselves (thanks to Ken
Beesley, their original author). For info on how to maintain them, see
available books on perl and cgi-bin.

1.  Edit the cgi-bin files in cvs-module `gt/script/cgi-scripts`
2.  Commit the changes to svn
3.  If the version is ready for release, tag the version with
    release-tag using command
    `cvs tag -F release filename1 filename2                ..`. (this is
    not in use)
4.  then:
    1.  either execute the script `cgi-export`. The tagged files are
        exported from the cvs to the official directory. (this option is
        presently not in use)
    2.  or (the option in use) copy the cgi-bin files manually to the
        var/www/smi/cgi-bin directory.
    3.  In any case, make sure the www catalogue and the svn catalogue
        are in synch!

Linking due to security
=======================

For security reasons, the webserver on gtweb.uit.no is run via symbolic
links.

The url to the cgi-bin scripts is:
`http://sami-cgi-bin.uit.no/cgi-bin/smi/`, and it is now moving to
`http://gtweb-bin.uit.no/cgi-bin/smi/`
