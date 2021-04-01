Building and installing hunspell
================================

This procedure was done using a virtual machine, using Kubuntu inside
Parallels. Hunspell is crashprone under Mac OS X, and not all versions
will get compiled. The problem is probably due to errouneous dictionary
files.

-   [Get
    hunspell](http://sourceforge.net/project/showfiles.php?group_id=143754),
    preferrably version 1.1.10
-   Unpack it
-   Run ./configure
-   Run make
-   Run make install

Building hunspell dictionaries and testing
==========================================

To be able to build hunspell dictionaries we will have to build and
install a hunspell specific transducer, then build and run the java
program that generates the hunspell dictionaries.

Building and installing the transducer
--------------------------------------

-   Goto $GTHOME/gt and do svn up
-   Build the hunspell transducer, make TARGET=sme i-hunspellfst
    M4FLAGS=-DHUNSPELL
-   Move the resulting transducer to /opt, sudo cp
    sme/bin/i-hunspell-sme.fst /opt/sme/bin

Building and installing the java program
----------------------------------------

-   Go gt/src/lexc2xspell
-   Build the program, ant

Generate dictionaries and debugging output
------------------------------------------

While generating dictionaries, the program can also produce debugging
output, by making full paradigms of the words we try to generate for
hunspell. If the --debug option is used, then the debugging output will
placed inside gt/src/lexc2xspell, in the files debug-$POS-$LANG.txt. The
dictionary files are placed in sme.dic and sme.aff.

-   Generate the hunspell dictionaries and debugging output, java -cp
    build Lexc2hunspell --debug ../../sme/src/noun-sme-lex.txt

Testing the dictionaries
------------------------

To test the quality of the generation, we will have to build one POS at
the time, then do the following.

-   hunspell -d ./sme -l debug-$POS-$LANG.txt &gt; feil-$POS-$LANG.txt
-   Find the error percentage:
    -   wc -l feil-$POS-$LANG.txt
    -   wc -l sme.dic
    -   Divide the first number with the second

To test the speller for real, build all the POS's, then do the
following: hunspell -d ./sme -l &lt;test-text&gt;
