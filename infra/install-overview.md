# Introduction


This is a check-point list for setting up new users in our teams. Please add missing points as needed. See also [the checklist](../admin/checklist.html) for what new users should know. There is some overlap, but this doc is for the sys admin, the other one is for the new user.


People not working in our projects, but using our infrastructure, may look at [the shortlist](GettingStarted.html). 


# Hardware


* a portable Mac is our standard platform (portable because we do travel, Mac
  for a number of very good reasons, among them
  [SEE](http://www.codingmonkeys.de/subethaedit/index.html))
** 8 Gb RAM needed for hfst transducer compilation
** fast harddisk prefered
* preferably an external monitor
* headphone w. mic
* a backpack or similar for the computer
* possibly an external HD for TimeMachine/backup purposes (that extra security
  is definitely worth the money!)


# Accounts needed


* e-mail at UiT
* accounts on the following servers:
** [gtsvn og andre linux-boksar](system/addremove.html)
** XServe
* Bugzilla account
* SourceForge (for work on MT)


# Services to enable:


* git and/or svn
* iCal Server & Jabber on XServe


# Software to install


## Commercial software, local shop
* MS Office
* Divvun additions, for testing purposes:
** Parallels Desktop
** Windows 10
** MS Office for Windows


## Commercial software, Internet download
* [Versions.app](http://www.versionsapp.com/) - commercial GUI front end for
  [Subversion](https://subversion.apache.org/). It makes some operations much
  easier. If you use this app, please ensure that you also install
  `$GTHOME/gt/src/filemerge-tools/FileMerge_SaveMergedToSecondFile.sh` - just
  run make in that directory. Then select that script as your diff tool in
  Versions.app's preferences.
* [Unison](http://www.panic.com/unison/) for reading news (see below for an open
  source alternative)


## Free or open-source software
* [SEE](http://www.codingmonkeys.de/subethaedit/index.html)
* [XCode](InstallingXCode.html)
* [Skype](http://www.skype.com/)
* [Thunderbird](http://www.mozilla.com/en-US/thunderbird/) - open source
  alternative to Unison
* [SourceTree](http://www.sourcetreeapp.com) is a free Mac client for Git, Mercurial and SVN version control systems. It is the alternative to Versions.
* [HFST tools](compiling_HFST3.html)
* [Xerox tools](http://www.fsmbook.com)
* [Visl CG3](/tools/docu-vislcg3.html)
* [Forrest](forrest-howto.html) - we need our own tailored version at the moment,
  but work is going on to make us able to use the standard distribution
* [Saxon HE](http://saxon.sourceforge.net/#F9.4HE)
** Download the **Java** one, unzip it, place the saxon9he.jar file (.jar file, anyway) in ~/lib, give it the name saxon9.jar.
* [QuickSilver](https://qsapp.com/)
* [Cisco VPN client](http://helpdesk.ugent.be/vpn/en/akkoord.php)
* [LibreOffice](http://www.libreoffice.org/)
* [Mikogo](http://www.mikogo.com) - cross-plattform, multicast screen sharing

## Proofing tools to install
* our latest MS and LO/hunspell tools / lexicons (see our
  [Divvun home page](https://divvun.no/))
* [hunspell](http://hunspell.sourceforge.net/) command line tool (use MacPort,
  see instructions on the OpenXSpell home page)
* [Voikko](http://voikko.sourceforge.net/) - The base for using hfst as spellers


# Configurations


* Unix environment:
** [.bashrc](docu-setup-bash.html)
** ([.inputrc](docu-setup-bash.html#Setting+up+8-bit+input) - this is only
   required when setting up old computers running Tiger/MacOS X 10.4.x or older,
   in Leopard/10.5.x and newer, UTF-8 input/output is working properly in
   Terminal)
** [.emacs](setup-emacs-howto.html)
* SEE-modes - see `$GTHOME/tools/see4/`
* VPN setup - get the config file from your network admin


# Other setups


* [check out](/tools/docu-svn-user.html) our svn repository
  in order to get access to editing of icall, internal documentation,
  meetings and other topics.
* set up svn mail, by adding the users' email address to the
  `.forward` file under the users' home directory on gtsvn.
* Zulip
* Mail
* **separate** admin and user accounts on the Mac
** for security reasons it is better to have a separate admin account
** which means that the regular user account should be non-admin
** it is ok that the user **knows** the admin account name and password, to
   be able to install software, updates, tweak system settings etc. (the
   security benefit is that the normal processes, downloads, etc are done in a
   restricted user space, not in an administrative account; in the case of
   malware downloads, it will only affect that user, not the whole machine)
