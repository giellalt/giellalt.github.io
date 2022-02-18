SVN is a program which keeps track of all the different versions of our
source files. People familiar with its predecessor, *cvs* should read
on. This documentation is written because of our transition to SVN. When
the transition period is over, we will rewrite these pages. While
waiting, this page will contain information useful for our present cvs
users.

Our main subversion repository is at the address
[http://gtsvn.uit.no/langtech/](https://gtsvn.uit.no/langtech/).
Subversion documentation is available as a [browsable
book](http://svnbook.red-bean.com/index.html).

Subversion communicates with us in cryptical ways. **m** is "me", and
**u** is you, right? Here is the full story:

[svn-status-code-cheat-sheet](http://www.knaddison.com/technology/svn-status-code-cheat-sheet)

Graphical Subversion clients
============================

If you want to use a graphical Subversion client, the recommended
clients are documented on the following pages:

-   [Windows - TortoiseSVN](docu-svn-user-tortoisesvn.html) - an
    open-source GUI front-end for Windows; this is the program we have
    experience with on Windows. ([home page](http://tortoisesvn.net/),
    [Wikipedia page](http://en.wikipedia.org/wiki/TortoiseSVN))
-   [Cornerstone](UsingCornerstone.html) - a Mac only, commercial client
    ([home page](https://www.zennaware.com/cornerstone/index.php))

There are also other clients for which we have written some
documentation, but the documentation is outdated, and some of the
clients are not actively supported anymore:

-   [Versions.app](docu-svn-user-versionsapp.html) - a Mac only,
    commercial client ([home page](http://www.versionsapp.com/))
-   [RapidSVN](docu-svn-user-rapidsvn.html) - a multi-platform,
    open-source GUI front-end ([home page](http://rapidsvn.tigris.org/))
-   [SvnX](docu-svn-user-svnx.html) - a Mac only, open-source client
    (home page [here](http://code.google.com/p/svnx/) and
    [here](http://www.lachoseinteractive.net/en/community/subversion/svnx/features/))

Please follow the recommendations for daily routines at the end of this
document!

Use svn on the command line
===========================

To *check out* means that you copy all the documents that our projects
are working on to your computer.

The first commands
------------------

This may be done in two ways:

1.  You want to check out the files for only one or a limited number of
    languages. In that case, follow [these
    instructions](../infra/infraremake/GettingStartedWithTheNewInfra.html),
    especially the section "Only the GT core and the wanted
    language(s)".
2.  You work on many languages and / or many end user projects
    (dictionaries, Oahpa, ...). In that case, read on.
3.  To control exactly what you need from our svn, use the options
    `--depth` and `--set-depth`. More info on [Stack
    Overflow](https://stackoverflow.com/questions/11650156/svn-checkout-depth)

Thus, to check o to your home directory (write `cd`), and give the
following command:

    svn co https://gtsvn.uit.no/langtech/trunk main --username <your_username>

... where you have replaced &lt;your\_username&gt; with the username you
have aquired from the admin. This will enable you to check in your work.
If you don't have a user name or just want to browse our code, just skip
the username.

After you have checked out, please run the following script, and follow
the on-screen instructions:

    main/giella-core/devtools/gtsetup.sh

With the above commands, you have now on your local computer a copy of
the source code and the environment is set up properly.

There are also other svn repositories that may be checked out, with the
same command. Some of them are closed, and you need a password to access
them. Here are the open ones:

    svn co https://gtsvn.uit.no/freecorpus freecorpus  # corpus files for many languages, mainly Saami 
    svn co https://gtsvn.uit.no/rusfree rusfree        # corpus files for languages in Russia
    svn co https://gtsvn.uit.no/biggies/trunk biggies        # large files

They may be checked out with the same command as for langtech above.

Frequently used commands
------------------------

Now that you have checked out your repository, you can use a set of
commands to manipulate your copy of the source code. We recommend to
always *update* the repository before you begin to edit files inside it.
After having edited some files you usually want to have an overview of
which files have been *modified*. To share our work with the others we
*check in* our work. We can also *add*, *delete*, *move* and *copy*
files inside the repository. A brief overview of the commands needed for
these actions is given below, for further details see the references at
the end of this document.

-   **Update your working copy:**  
    svn up
-   **Schedule a file for addition:**  
    svn add filename
-   **Schedule a file for deletion:**  
    svn delete filename
-   **You may also copy and move files and directories with these two
    commands, but read about them in the svn book first::**  
    svn copy filename  
    svn move filename
-   **Examine your changes:**  
    svn status
-   **Examine the file history:**  
    `svn log FILE`
-   **Change the commit message for a specific revision:**  
    `svn propedit svn:log --revprop -r REV FILE`  
    This will bring up the existing log text for the specified revision
    in your default editor (typically Emacs), where you can edit and
    change it as you want. This is useful if you accidentally committed
    some changes with an empty or uninformative log message.
-   **Compare your modified file to the version in the repository:**  
    `svn diff FILE`
-   **Compare some earlier versions, say here versions 123 and 120:**  
    `svn diff -r 123:120 FILE`
-   **Undo your local changes (ie revert to the repository status):**  
    `svn revert FILE`
-   **Resolve Conflicts (Merge Others' Changes):**  
    svn update  
    svn resolved
-   **Commit your changes:**  
    `svn ci -m "Your description of the changes here." FILE`  
    (Note that the above changes, add, delete, copy, move, must all be
    committed by ci in order to take effect)

Ignoring items
--------------

The key insight to understanding svn ignore can be summarised in two
sentences (quoting [Joseph Pecoraro's excellent
article](http://blog.bogojoker.com/2008/07/command-line-svnignore-a-file/)):

*You don’t svn:ignore a file. You put an svn:ignore property on the
directory to ignore that filename pattern!*

Here is the command for making directories ignoring files, assuming you
want to ignore files in the directory *where you stand now*:

    $ svn propedit svn:ignore .

Then add the files or suffixes you want to ignore (e.g. \*.toc), and
save (if in emacs: ctrl X C). Then you must *check in* the *directory*
(here represented by the "."):

    $ svn ci -m "Vi ignorerer toc-filer" .

More details about ignoring files can be found in *Chapter 3: Advanced
Topics*, in the section *Ignoring Unversioned Items*, in the [SVN
book](http://svnbook.red-bean.com/).

Daily routines
==============

-   Update in the morning, and allways before you check in.
-   Always check in the files at the end of the day.
-   If you know that other people are working on the same file, you
    should check in several times a day.
-   Check in after you have done major revisions.
-   Remember to compile the program before you check in, so that you
    know you do not check in a defect file.

What do I write in the log message
==================================

The best way to learn to write good log messages is to read other log
messages. Pick a file (e.g. twol-sme.txt, sme-lex.fst), and read the log
(the command is **svn log filename \| less**). If the log message tells
you what you want to know, then it is a good log message.

In svn it is possible to edit and correct bad log messages. See the list
of useful commands above for how to do this.

Digging out svn deleted files from the repository
=================================================

After you did `svn rm file, svn ci -m removed file`, the file is still
there. To get it, do the following:

-   First find the number of the deletion, by logging the parent folder,
    with the flag -v: svn log -v parentfollder/ \|less (Deletion was
    some number, say r61000)
-   Then get the deleted file with the command: svn cat
    url/of/file@lastrevisionthefileexisted -r
    latrevisionthefileexisted &gt; file
-   thus: svn cat
    https://gtsvn.uit.no/langtech/trunk/kt/mhr/src/mhr-num.txt@62505 -r
    62505 &gt; asdf

Revert back to an earlier version of a file
-------------------------------------------

[Read
this.](http://svnbook.red-bean.com/en/1.5/svn.branchmerge.basicmerging.html#svn.branchmerge.basicmerging.undo)

Further reading
---------------

The [Basic work
cycle](http://svnbook.red-bean.com/en/1.4/svn.tour.cycle.html) in the
[SVN book](http://svnbook.red-bean.com) covers daily usage in great
detail. [Appendix B](http://svnbook.red-bean.com/en/1.4/svn.forcvs.html)
covers some details for users accustomed to CVS.

The [RapidSVN wiki](http://www.rapidsvn.org/index.php/Main_Page) has a
[tutorial](http://www.rapidsvn.org/index.php/Documentation#Tutorial.2C_Part_1)
that covers our daily usage pattern.
