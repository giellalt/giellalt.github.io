RCS, the single-user version control system for our .cgi files
==============================================================

Whereas the project source files are kept under CVS control, the .cgi
files in the /var/www/cgi-bin/smi/ directory are kept under RCS control.
If you want to edit the files in that directory, read this. If you are
not going to edit those files, you should definitely not read this page.

The short version
-----------------

1.  Check out the file to yourself by writing *co -l filename*.
2.  Edit the file, and save the changes!!
3.  Check in the file again by writing *ci -u filename*.
4.  When you check in, write a log message that described what you have
    done and why. The log message (and the access to earlier versions)
    is the reason why we use RCS on the cgi-bin files!

The last point is important! If you do not check it in again, other
users cannot modify it (well, without stealing your lock, but it it
better that you check in the file.

The -u flag is important. If you do not use that, you will delete the
copy of the file, and the web interface becomes useless.

What is RCS?
------------

RCS is a version control system, much like CVS, but it is older, and not
so advanced. The main difference is that with CVS, each user makes his
or her own copy of the file, whereas with RCS, there exist only two
versions of the same file. If you make one file se.cgi, then RCS keeps
an archive version se.cgi,v of the file se.cgi. The file se.cgi is then
kept read-only (locked, in RCS terminology), and only made writeable
(unlocked) during editing. After each revision, the person that has made
the changes shoudl describe them in the log message.

Basic RCS usage
---------------

To read the file, just open it. If you open it in emacs, you will see
the symbol %% to the left of the status bar under the page, this
indicates that the file is read only.

If you want to make changes to the file, you must first check it out.
This is done as follows (supposing you want to edit the file
*sme-lookup.cgi*:

co -l sme-lookup.cgi

Then you may open it in emacs, edit it, and save the changes.
Thereafter, you should check it **in** again (lock it). This is done
with the command

ci -l sme-lookup.cgi

If you want to see what has been done earlier (i.e., see the revision
history), you may inspect the log with the command

rlog sme-lookup.cgi \| less

(the less command just in case the log info stretches over more than one
page).

RCS and Emacs
-------------

Emacs has a module for RCS, called VC.

It is used in the following way:

You open the document with *C-x v v*, the file is then opened for use.

You edit the document, and save it as normally. Thereafter, press *C-x v
v*. Then write eventual comments, and quit with *C-c C-c*. As a result,
the file goes to RCS with the access 444, or r--r--r--.

Reference: List over RCS commands
---------------------------------

-   **ci *filename* :**  
    Check in RCS revisions. Note that the file you had in the working
    directory is deleted with this command
-   **ci -l *filename* :**  
    Check in RCS revisions, and keep a **locked** version of the file.
    This is the command that should be used for the cgi-bin scripts.
-   **ci -u *filename* :**  
    Check in RCS revisions, and keep an **unlocked** version of the
    file. This is a wise move only if you intend to keep on working on
    the file.
-   **co:**  
    Check out (read-only) RCS revisions
-   **co -l:**  
    Check out RCS revisions that you may edit yourself
-   **ident:**  
    Identify files
-   **merge:**  
    Three-way file merge
-   **rcs:**  
    Change RCS file attributes
-   **rcsclean:**  
    Clean up working files
-   **rcsdiff:**  
    Compare RCS revisions
-   **rcsmerge:**  
    Merge RCS revisions
-   **rlog:**  
    Print log messages and other info on RCS files

Of these, I have used ci, co, and rlog.

Literature
----------

-   Unix in a nutshell has a nice chapter on RCS.
-   Bolinger, Don & Tan Bronson1995: "Applying RCS and SCCS". O'Reilly.
    This is The Reference Book on RCS.
-   The net: ...
