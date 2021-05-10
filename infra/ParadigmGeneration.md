# Paradigm generation



In order to activate paradigm generation the following things must be in place:


 The /opt/smi/LANG/bin catalogue on gtweb must contain the files
* korpustags.LANG.txt
* paradigm.LANG.txt
* paradigm.min.LANG.txt
* paradigm.LANG.txt


These files should be created and kept up to date in svn in 
`$GTHOME/langs/LANG/test/data/`, and then copied to /opt


The paradigm option must be turned "on" for the language you
want to add paradigm generation for, this is done in the file
`$GTHOME/xtdoc/gtuit/src/documentation/resources/stylesheets/cgi-index.xsl`.




