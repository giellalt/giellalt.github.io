Introduction and overview
=========================

The language techonogy tools are available as a server, to be used by a
variation of client applications. One of these applications is the
cgi-bin interface. There is also a command line client for the server,
that offers an user interface to the language techonology tools. The
tools include Xerox tools such as lookup for analysis, generation and
hyphenation and vislcg for disambiguation. In addition, there is a
paradigm generator and preprocessor among other smaller scripts.

The disambiguator is not yet fully implemented.

Server interface
================

The communication with the server is implemented as tcp-socket. The
server listens and recieves the incoming client requests. Each client is
forked to it's own process, to ensure parallel clients. The
communication scheme does not follow any pre-existing protocol. It's
explained below.

Whenever a client connects to the server, the first communication after
welcome-message is the request for the tools. The request is given in
xml, and it includes the names of the tools and other information such
as the input language, and whether the input and/or output will be in
xml. The different tools are started only at the client request. After
the tools are initialized, they will be running until the client closes
the connection. More than one tool may be running simultaneously; the
tool can be selected in the xml-input.

The communication continues so that the client sends some input data
followed by a newline. The server processes the input and sends output
followed by "END\_REPLY". When the client sends "END\_REQUEST" or
otherwise stops, the server closes the connection.

Parameters
==========

The parameters sen with client request comprise the instructions to the
server. A sample xml containing the parameters for analyzer and
hyphenator:

    <parameters>
    <action tool="anl" fst="" args="">
    <action tool="hyph" filter="yes">
    <lang>sme</lang>
    <xml_in>
    <xml_out>
    </parameters>

The structure is explained in detail below:

-   **`action`:**  
    Contains the name of the tool, and command line arguments
    -   **tool:**  
        The available values are: anl, hyph, gen, para, dis and prep.
        They correspond analyzer, hyphenator, generator, paradigm
        generator, disambiguator and preprocessor.

    <!-- -->

    -   **fst:**  
        The transducer file can be given as an attribute to the server.
        The fst can be given as attribute to all the other tools but
        disambiguator. If the fst is not given, default file is used.

    <!-- -->

    -   **args:**  
        This attribute contains the other command line arguments. If not
        given, the default arguments are used. For lookup, they are
        `-flags mbTT -utf8`. Generation and paradigm generation have
        also the argument `-d.`

    <!-- -->

    -   **filter, filter\_script:**  
        Hyphenator output may be filtered so that double lines are
        removed, compounding boundaries rated and some
        lowercase/uppercase distinctions removed. The flter is used
        with` filter="yes"                      ` The location of the
        filter script can optionally be given in
        attribute` filter_script.`

    <!-- -->

    -   **mode:**  
        The attribute "mode" is available only for the paradigm
        generator. The mode describes the extent of the generated
        paradigm: whether it is minimum: containing just enough
        information to identify the inflection paradigm; standard, which
        gives the full paradigm without clitics and possessive suffixes;
        or maximum with everything included.

    <!-- -->

    -   **abbr, corr:**  
        These attributes are available for the preprocessor. They
        contain the pointer to the files "abbr.txt" and "corr.txt".

<!-- -->

-   **`language`:**  
    The languages that have most of the tools available are: sme, smj,
    sma. The other languages may be requested as well, then the compiled
    fsts may have to be given as command line.

<!-- -->

-   **`xml_in, xml_out`:**  
    These elements correspond of requests of input and/or output being
    in xml. If the element(s) are not present the input and/or output is
    assumed to be plain text.

Input and output
================

Input and output as plain text
------------------------------

Input and output to the server are given as they would be when the
application was started in command line. So for example the input and
output to the analyzer is:

    Oslo

    Oslo    Oslo+N+Prop+Plc+Sg+Acc
    Oslo    Oslo+N+Prop+Plc+Sg+Gen
    Oslo    Oslo+N+Prop+Plc+Sg+Nom

The special case is the paradigm generator, which recieves the lemma and
the POS tag separated with space as input:

    Oslo N

    ...

When the input is given as a plain text, only one tool may be running.
With xml-structure, it is possible for a client to start several tools
(but only on of the kind) and have the tool selected in the input.

xml-structures for input and output
-----------------------------------

The xml-structures of input and output are interconnected, since the
output from the preprocesser has to be valid input for the analyzer and
the same for analyzer and disambiguator. In the following, a sample
input and output of the analyzer:

    <root tool="anl"><w form="Oslo"/></root>

    <root>
      <w form="Oslo">
        <reading analysis="N+Prop+Plc+Sg+Acc" lemma="Oslo"/>
        <reading analysis="N+Prop+Plc+Sg+Gen" lemma="Oslo"/>
        <reading analysis="N+Prop+Plc+Sg+Nom" lemma="Oslo"/>
      </w>
      <w form="oslolaččat">
        <reading analysis="N+Prop+Plc+Der/laš+A+Adv" lemma="Oslo"/>
        <reading analysis="N+Prop+Plc+Der/laš+A+Pl+Nom" lemma="Oslo"/>
        <reading analysis="N+Prop+Plc+Der/laš+A+Sg+Acc+PxSg2" lemma="Oslo"/>
        <reading analysis="N+Prop+Plc+Der/laš+A+Sg+Gen+PxSg2" lemma="Oslo"/>
      </w>
    </root>

As a matter a fact, the element &lt;root&gt; is not named anywhere in
the program, so in principle any name can be used. However, the dtd is
more strict.

In the following some examples of the input and output are presented. In
the examples, there is always only one w-node, but there is no limit for
the number of input words.

### Hyphenator

    <root tool="hyph"><w form="oslolaččat"/></root>

    <output>
      <w form="oslolaččat">
        <reading hyph="os^lolač^čat"/>
      </w>
    </output>

### Generator

    <root tool="gen"><w form="Oslo+N+Prop+Sg+Loc"/></root>

    <root>
      <w analysis="N+Prop+Sg+Loc" lemma="Oslo">
        <surface form="Oslos"/>
        <surface form="Oslon"/>
      </w>
    </root>

### Paradigm generator

    <root tool="para"><w form="Oslo N"/></root>

    <root>
      <w analysis="N+Prop+Pl+Gen+Qst" lemma="Oslo">
        <surface analysis="N+Prop+Sg+Loc" form="Oslos"/>
        <surface analysis="N+Prop+Sg+Loc" form="Oslon"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosbe"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosba"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosbat"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosge"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosges"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosgen"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosgis"/>
        <surface analysis="N+Prop+Sg+Loc+Foc" form="Oslosgoson"/>
       ...
    </root>

The pos-tag should perhaps be moved to attribute as well.

### Preprocessor

    <root tool="prep">Mun in leat.</root>

    <root>
      <w form="Mun"/>
      <w form="in"/>
      <w form="leat"/>
      <w form="."/>
    </root>

The preprocessor output is thus analyzer or hyphenator input.

The locations of the tools etc.
===============================
