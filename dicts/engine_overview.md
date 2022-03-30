# Dictionary engines


The requirements for candidate engines/clients are:
* can display reasonably complex entries (numbered senses, examples and their translations)
* supports some sort of point-and-wait/click/keypress in most/all applications OR supports tight integration with the main Office application on the OS
* allows creation of your own dictionary files
* is free


## Windows


A list of dictionary clients and servers can be found at [http://www.dicts.info/offline2.php].


Candidate engines found so far:
* [http://msdn.microsoft.com/en-us/library/aa159694.aspx] - MS Office System
* [StarDict](http://stardict.sourceforge.net/) - open-source, cross-platform
  solution (Linux/Mac/Win), quality unknown
* [http://www.lingoes.net/] - closed-source but free, open dictionary source
  format, requires the software author to compile the dictionary source to final
  dictionary files used by the application
* [http://www.babylon.com/] - closed-source, free application


## Mac


For the Mac, the main engine is the one included in OS X Leopard (10.5), for which we already have a working solution.


For users of older versions of the OS, some of the open-source, cross-plattform solutions described for *Windows* or *Linux* could be an alternative. Unfortunately, StarDict (the only cross-plattform solution) does only work on Leopard (ie 10.5) as for now.


## Linux


* [StarDict](http://stardict.sourceforge.net/) - open-source, cross-platform
  solution (Linux/Mac/Win), quality unknown


# Conclusion: StarDict


There is an XML format available for interchange of dictionary data, XDXF, described at [http://xdxf.revdanica.com/]. XDXF data can be used by StarDict (see above). Thus, the following scenario is within reach with little effort:


1. convert from our formats to XDXF using XSL (the real work)
1. install StarDict
1. install the dictionary file


StarDict is free, open-source, cross platform, and supports point-and-click (or something like it).


# StarDict short user guide


## Mac


1. Download [StarDict](http://stardict.sourceforge.net/download.php)
1. To make it work for a non-admin account, run it once in an admin account.
1. Dictionary files should be put in `/opt/gtk/usr/share/stardict/dic/`


I have not been able to get the point-and-click function working on the Mac, but since we have a superior solution for that platform, it is not a real problem.


## Win


1. Download [StarDict](http://stardict.sourceforge.net/download.php)
1. More to be written.


## Linux


1. Download [StarDict](http://stardict.sourceforge.net/download.php)
1. More to be written.
