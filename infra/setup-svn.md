This document describes how to setup the svn client programs on Mac,
Windows and Linux

Mac
===

Download a suitable graphical client:
[Versions.app](http://versionsapp.com/), [svnX
program](http://www.lachoseinteractive.net/en/community/subversion/svnx/download/)
or
[RapidSVN](http://www.rapidsvn.org/index.php/Documentation#Mac_OS.2FX).
The [commandline client
program](http://homepage.mac.com/martinott/Subversion-1.4.4.pkg.zip) is
part of the system if you have installed the developer tools (XCode -
included on your installation CD). You may still want to install a newer
version if you are using MacOS X 10.4 (Tiger) or 10.5 (Leopard), though.
MacOS X 10.6 (Snow Leopard) has a pretty recent version of the
command-line tool.

Windows
=======

Download and install [TortoiseSVN](http://tortoisesvn.net/downloads) or
[RapidSVN](http://www.rapidsvn.org/index.php/Documentation#Windows).

Linux
=====

To install the commandline version of subversion, issue either the
command `sudo apt-get install             subversion` or
`sudo yum install subversion`

There are at least two alternatives if you want a graphical user
interface, kdesvn and rapidsvn. Under Debian/Ubuntu:
`sudo apt-get install rapidsvn` or `sudo apt-get install rapidsvn`

Under Fedora/CentOS/Red Hat `sudo yum install rapidsvn` or
`sudo yum install             kdesvn`.

CVS Infrastructure
==================

We use svn now

To make CVS commit mailings work, one has to edit the file
`CVSROOT/loginfo`. It should already be set-up correctly, but for the
sake of documentation and understanding, it is repeated here:

    ^gt          mail -s %s samicvs
    ^kt          mail -s %s samicvs
    ^st          mail -s %s samicvs
    ^termdb      mail -s %s samicvs
    ^xtdoc       mail -s %s samicvs

After that file is created/modified, we need to ensure that the mail
alias `samicvs` is working by editing `/etc/aliases`. At the bottom of
that file, that alias is defined as follows:

    samicvs: trond,boerre,sjur,tomi

More names can and will be added when we see that it works, and all has
been informed. When the alias is changed, or a new one created, one has
to run the command `newaliases` as root or superuser. Then all mail to
the alias samicvs will be forwarded to the local users listed.

Finally, to forward your e-mail to your regular account, create the
following file in your home directory: `.forward`, containing only the
mail address of the account you want to receive commit mails on.
Remember to add a linefeed at the end (that is, type return). For this
forward file to work correctly, it has to have correct permissions,
which you ensure with the following command:

    chmod 644 .forward

That's it! Now we should all get an e-mail each time someone commits a
file. Hint: as the amount of e-mail this generates can be quite high, it
is advisable to create a filter in your mail application that will put
all cvs and Bugzilla e-mails in a dedicated folder.
