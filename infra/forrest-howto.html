Introduction
============

The documentation (the websites) for both [Divvun.no](http://divvun.no)
and [Giellatekno](http://giellatekno.uit.no) is served to the public via
[forrest](http://forrest.apache.org), and is renewed very often. When
you are offline you can read this documentation if you install forrest
on your own machine.

In this document we assume that your username is *niillas*, that you
checkout svn trunk and place forrest into the map
*/Users/niillas/Documents*. */Users/niillas/Documents* is also referred
to as *$HOME/Documents* throughout this document.

Fetching and compiling forrest on unix systems
==============================================

-   Open a terminal. Write `cd Documents` and press enter.
-   Then write
    `svn co http://svn.apache.org/repos/asf/forrest/trunk forrest`.
    Answer positively to all questions asked.
-   Then write `cd forrest/main` followed by `./build.sh`

Fetching and compiling forrest on Windows systems
=================================================

-   Go to [the forrest download mirror
    site](http://forrest.apache.org/mirrors.cgi#closest).
-   Download the *For Windows…* zip file, and install it on your own
    Windows machine.
-   [Here are some notes on Windows
    installation](http://forrest.apache.org/docs_0_100/your-project.html#Windows+2000).
-   Then look at the documentation, e.g. [the documentation site
    map](http://forrest.apache.org/linkmap.html).

To be honest, the rest of this page is mostly Unix-relevant. Feel free
to add any Windows-relevant documentation if you have some.

Setting up environment variables
================================

Open the file `~/.profile` (or `~/.bash_profile` or similar) using this
command in the terminal

`open -a subethaedit ~/.profile`

Write the following into that file:

    export FORREST_HOME=$HOME/Documents/forrest
    export PATH="$FORREST_HOME/bin:$PATH"

Close all terminals. Next time you open a terminal the changes will be
working. Or, if you hate closing terminals to make these kind of changes
write this command in your terminal(s):

`. $HOME/.bash_profile`

Installing the documentation
============================

Follow the instructions on [svn checkout](/tools/docu-svn-user.html) to
get our documentation.

To keep your documentation up to date, you will have to do a `svn up`
regularly in the directory were you have checked out our repository.

Setting up fonts for pdf versions the documentations
====================================================

First, fetch the
[DejaVu-fonts](http://dejavu-fonts.org/wiki/index.php?title=Download)
and install them on your computer.

Open the file
`$FORREST_HOME/plugins/org.apache.forrest.plugin.output.pdf/output.xmap`
for editing. The line that reads:

                    <user-config>/Users/sd/trunk/xtdoc/sd/src/documentation/resources/fonts/config.xml</user-config>
                

has to be changed so that forrest will find the config.xml file.
Assuming that svn has been checked out to `$HOME/Documents` and that
your username is niillas, the correct replacement will be:

                    <user-config>/Users/niillas/Documents/trunk/xtdoc/sd/src/documentation/resources/fonts/config.xml</user-config>
                

Save and close the file.

The next step is to edit the file
`$HOME/Documents/trunk/xtdoc/sd/src/documentation/resources/fonts/config.xml`.
All instances of
`/Users/sd/trunk/xtdoc/sd/src/documentation/resources/fonts/` with
`/Users/niillas/Documents/trunk/xtdoc/sd/src/documentation/resources/fonts/`.
When this is done, save and close the file.

Reading the documentation
=========================

Now that everything is in place, you will have to start up forrest. Open
a terminal, and issue this command:

`cd $HOME/Documents/trunk/xtdoc/sd; forrest run`

Forrest outputs a lot of messages, and the last stanza before it goes
live begins with:

`run_default_jetty:`

and ends with a line that goes something like this:

`10:02:27.301 EVENT Started org.mortbay.jetty.Server@290fbc`

where the important part is **org.mortbay.jetty** (what's before that is
the time, and what's behind varies from machine to machine).

Open a web browser, and go to the address <http://localhost:8888>

Running Forrest on a different port
===================================

If you want to run two different instances of Forrest (e.g. both the
`xtdoc/sd/` and `xtdoc/gtuit/` at the same time, or there is already
another one running Forrest on e.g. gtlab, and you want to run your own
instance), you have to specify a different port for Forrest to listen
to. You do that by adding an argument to the `forrest run` command as
shown below:

    forrest run -Dforrest.jvmargs="-Djetty.port=8889"

More help and hints can be found at Forrest's [FAQ
page](http://forrest.apache.org/faq.html).

Forrest, jspwiki and UTF-8
==========================

When running Forrest in MacOS X, the Java VM takes an 8-bit encoding as
its default file encoding. This breaks the parsing of the JSPWiki pages,
since the parser grammar is using the Java default (and thus OS default)
encoding to interpret the jspwiki files. To specify another default
encoding for Java, give Forrest the following startup argument:

    forrest run -Dforrest.jvmargs="-Dfile.encoding=utf-8"

To run forrest on a different port with correct handling of utf-8
encoded jspwiki files, use the following command:

    forrest run -Dforrest.jvmargs="-Dfile.encoding=utf-8 -Djetty.port=8889"

For some notes on the lack of a global setting for things like this
(e.g. a global setting of Java file encoding), see [this
reply](http://lists.apple.com/archives/java-dev/2002/Feb/msg00413.html)
from Apple's e-mail list for Java developers.

Updating Forrest from svn
=========================

If you would like to update Forrest from svn, then you can issue these
commands:

    cd $FORREST_HOME
    svn up
    cd main
    ./build.sh clean
    ./build.sh
                
