# Setting upa multiuser server

This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes the steps you as a system administrator need to do to prepare the
server for the work done by the linguists, by installing the Giellatekno/Divvun
infrastructure core, and make it available to the linguists.


**NB!** It is *required* that the `giella-core` and all its subdirectories are
**readable** by all users, and shell scripts must be executable (but this should
be handled automatically by Subversion). Nothing more is required, nothing less.


To check out the core module and prepare it, do this:


```
svn co https://gtsvn.uit.no/langtech/trunk/giella-core
cd giella-core
./autogen.sh
./configure
make
sudo make install
```


The `giella-core` and the Giellatekno/Divvun infrastructure is under constant
development, and it is important that it is kept up-to-date to maintain a
functional working environment for the linguists. To keep it
up-to-date, make a shell script or cron job that does the following:


* daily svn up of the `giella-core/` directory
* if `giella-core/configure.ac` has changed since last svn up, run
  `make && sudo make install`


That's it. The linguists can now check out a single language, and the configure
script for that language will find the `giella-core` and everything else that is
needed. You can point the linguists to
[the following page](GettingStartedOnAServer.html) to get directions on how
to check out single languages.


**NB!!** If you get the following **error** from svn when checking out:


```
svn: Can't convert string from 'UTF-8' to native encoding:
```


it is indicative of your filesystem using a filename encoding not compatible
with Unicode. This will **stop** the svn checkout process, leaving you with an
incomplete and most likely non-functional working copy. Typically this can
happen if you or your sysadmin has set the following:


```
LC_ALL=C
```


To fix this, change or redefine the `LC_ALL` variable in your `~/.profile`
file to something like:


```
LC_ALL=en_UK.UTF-8
```
