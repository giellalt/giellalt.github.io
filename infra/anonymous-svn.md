# Anonymous svn

The source code is distributed partly under the GPL-license, and partly
under CC-BY. There is a license statement at the beginning of each file.

Preparation
===========

Anyone can download the source code via anonymous SVN. Using anonymous
svn you will not be able to directly add your changes to our svn
repository. If you have changes you want to be included, follow the
guidelines below in the section *Sending feedback and patches*.

To get the files, do the following: Open a terminal and use the
following command to fetch the files:

    svn co https://gtsvn.uit.no/langtech/trunk main

The files will then be copied to your machine (you will see a row of
filenames, preceeded by the letter A).

After you have checked out, please run the following script, and follow
the on-screen instructions:

    main/gt/script/gtsetup.sh

With the above commands, you have now on your local computer a copy of
the source code and the environment is set up properly.

Building, compiling and running
===============================

When everything is checked out and residing on your computer, you
probably want to compile and run our linguistic analysers. For this you
need to install the required tools. They are:

-   For morphological analysis there are two alternatives:
    -   **Xerox morphological transducer tools**, for morphological
        analysis. This is proprietary software, but can be downloaded
        from the [fsmbook site](http://fsmbook.com/). It is also
        included if you [buy the
        book](https://web.stanford.edu/group/cslipublications/cslipublications/site/1575864347.shtml)
        (Finite State Morphology by [Kenneth R.
        Beesley](https://204.academia.edu/KennethRBeesley) and
        [Lauri Karttunen](https://web.stanford.edu/~laurik/)),
        although the online software is more up-to-date. Nevertheless,
        if you are serious about doing lexc, xfst or twolc work, you
        really should get that book.
    -   There is an open source alternative for compiling our
        morphological analysers, though, the [Helsinki Finite State
        Transducer](http://www.ling.helsinki.fi/kieliteknologia/tutkimus/hfst/index.shtml),
        which can be downloaded from [the Hfst GitHub
        page](https://hfst.github.io/downloads/index.html). Our code compiles both on
        the Xerox and Hfst compilers, though the makefile for HFST
        compilation is still somewhat underdeveloped. Cf. our [internal
        HFST3 documentation](compiling_HFST3.html).
-   For disambiguation and syntactic analysis we use **vislcg3**. This
    is open source, The [homepage of
    vislcg3](http://beta.visl.sdu.dk/cg3.html) contains documentation
    and link to Subversion acces for binary download. We have written
    [instructions on how to compile and and use
    vislcg3](/tools/docu-vislcg3.html).

Other tools (perl scripts, shell scripts, etc.) are included in the SVN
check-out, and will be available after you have run the `gtsetup.sh`
script (see above). See our [technical
documentation](Infrastructure.html) and the subsection in the
corresponding menu for further details.

Reading the documentation off-line
==================================

The full documentation is available online on
[divvun.no](http://divvun.no/), but if you want to read the
documentation off-line, you are best off installing and running
**[Forrest](http://forrest.apache.org/)**.

We have made a [document](forrest-howto.html) on how to install and use
forrest, follow the instructions there to use forrest on your private
machine

Sending feedback and patches
============================

If you have improvements to our code, be it linguistic corrections,
C-code bug fixes, documentation enhancements or whatever, we would
welcome your contribution. Please make an `svn diff`, gzip it, and send
it [to us](mailto:giellatekno@uit.no).

Interactive feedback and discussions
------------------------------------

The whole team (and most of our active partners) is (are) available on
AIM, and we frequently keep discussions through our favourite AIM
client(s). Our AIM addresses can be found on our [contact
page](/admin/people.html).

We also use [SubEthaEdit](http://www.codingmonkeys.de/subethaedit/)
(SEE) a lot to do collaborative development, but SEE is Mac only, and
commercial (version 2.2 is available for free for non-commercial
purposes). A cross-platform alternative is
[Gobby](http://gobby.0x539.de/) (please see the [installation
notes](https://github.com/gobby/gobby/wiki)). Try it, or SEE -
realtime collaborative development is both very fun and productive, and
creates a whole new feeling of working together, even when sitting in
different countries! Much of what we have done would have taken 10 x the
time, or not been possible at all without SEE.

A third alternative is to use one of the many code-sharing sites. Some
of them also allow collaborative editing - not as quick and reliable as
SEE, but still quite useful.

If you have questions or problems, either e-mail us, or start a chat.
Further investigation can be done collaboratively and interactively
using SEE or Gobby. If you are using a Mac with a recent OS version
(10.4. or newer), you can even invite us to (group) voice or video chats
using [iChat](http://www.apple.com/ichat/). Non-group voice and video
chats should also work with earlier versions of MacOS, as well as with a
recent version of the AIM client for Windows (we haven't tried voice or
video chats with Windows users).
