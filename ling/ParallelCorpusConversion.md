Parallel corpus conversion
=============

This is an example on how to:

-   fetch parallel documents
-   add metadata that make the parallel documents refer to each other
-   add the parallel documents and their metadata to the corpus
    repository
-   convert them to giellateknos xml format
-   move the converted documents to prestable/converted

Fetch parallel documents
========================

1.  Open Safari, go to this address:

    <http://www.samediggi.no/Dokumeantta/Oza-dokumeanttaid>

    Click on "Lávdegottit", "Dievasčoahkkimat" and "Møter"

    Choose some file and click on it. The document will be opened in
    another tab.

    Copy the document link.

2.  Open another tab in the same Safari window (Press cmd+t) and go to:

    <http://www.sametinget.no/Dokumenter/Soek-etter-dokumenter>

    Click on "Utvalg", "Plenumsmøter" and "Møter"

    Choose the norwegian version of the saami document and double click
    it. The document will open in a new tab.

    (You now have the saami pages in the left tab and the norwegian
    pages in the right tab)

3.  Open a new window in SubEthaEdit (cmd+n)

    \- paste (cmd+v) the link of the saami document - press cmd+f and
    replace & with \\& (replace all) - copy (cmd+c) the link

4.  Open a new Terminal window and go to:

    freecorpus/orig/sme/admin/sd/other\_files/

    Fetch the saami document with this command: wget (cmd+v, to paste
    the link we just copied)

    Change the name of the document: mv wf (press tab, the whole name
    will appear) dc2012-2.pdf

    Make the xsl file: convert2xml dc2012-2.pdf

5.  Go back to Safari and copy the link to the norwegian document.

6.  Go to the SubEthaEdit window

    \- paste (cmd+v) the link of the norwegian document - press cmd+f
    and replace & with \\& (replace all) - copy (cmd+c) the link

7.  Go the already opened Terminal. Press cmd+t to open a new tab and go
    to:

    freecorpus/orig/nob/admin/sd/other\_files/

    Fetch the norwegian document using this command: wget (press cmd+v,
    then paste the link using cmd+c)

    Change the name of the document: mv wf (press tab, the whole name
    will appear) sp2012-2.pdf

    Make the .xsl file: convert2xml sp2012-2.pdf

    (Now you have the saami pages in the left tab of Terminal and the
    norwegian pages in the right tab)

Add metadata
============

1.  Open the saami xsl file:

    see dc2012-2.pdf.xsl

2.  Open the norwegian xsl file:

    see sp2012-2.pdf.xsl

3.  Place the saami file on the left hand side and the norwegian file on
    the right hand side. Then fill in the metadata in the xsl files.

4.  These entries have be filled in:

    This entry has to be entered in the saami xsl file (don't fill in
    "translated from" in the norwegian xsl file):


        <xsl:variable name="filename" select="'http://innsyn.e-kommune.no/innsyn_sametinget_samisk/wfdocument.aspx?journalpostid=2012006934&amp;dokid=368243&amp;versjon=1&amp;variant=P&amp;ct=RA-PDF'"/>

                            

    --&gt;NB!! This is the full link, note that you have to replace some
    characters in the link. (Paste the link into a clean SubEthaEdit
    document, use the search and replace function and replace & with
    (&amp;). Don't include the paranthesis). Copy the link and paste it
    into the Terminal. IMPORTANT: replace & with &amp;


        <xsl:variable name="title" select="'Sámedikki dievasčoahkkin Čoahkkingirji 001/12'"/>
        <xsl:variable name="publisher" select="'Norgga Sámediggi'"/>
        <xsl:variable name="year" select="'2012'"/>
        <xsl:variable name="genre" select="'admin'"/>
        <xsl:variable name="translated_from" select="'nob'"/>

                            

    ---&gt;NB! Only use translated\_from if it is a translated document!


        <xsl:variable name="license_type" select="'free'"/>
        <xsl:variable name="sub_name" select="'Berit Eskonsipo'"/>
        <xsl:variable name="sub_email" select="'berit.nystad.eskonsipo@uit.no'"/>
        <xsl:variable name="mainlang" select="'sme'"/>
        <xsl:variable name="monolingual" select="'1'"/> <!--lg rec is off!-->
        <xsl:variable name="parallel_texts" select="'1'"/>
        <xsl:variable name="para_nob" select="'sp2012-1.pdf'"/>

                            

    Save!

Add the parallel documents and their metadata to the corpus repository
======================================================================

1.  Rerun convert2xml in the SME Terminál window (note that you can
    press up in the Terminal untill the right command appears.):

    convert2xml dc2012-2.pdf

2.  Write svn stat and the result is:

    ? dc2012-2.pdf ? dc2012-2.pdf.xsl

    (copy (cmd+v) dc2012-2.pdf)

3.  Write:

    svn add (cmd+v) (cmd+v+.+tab)

4.  Write:

    svn ci -m "your svn message"

5.  Rerun convert2xml in the NOB Terminal window (note that you can
    press up in the Terminal untill the right command appears.):

    convert2xml sp2012-2.pdf

6.  Write svn stat and the result is:

    ? sp2012-2.pdf ? sp2012-2.pdf.xsl

    (copy (cmd+v) sp2012-2.pdf)

7.  Write:

    svn add (cmd+v) (cmd+v+.+tab)

8.  Write:

    svn ci -m "your svn message"

Move the converted documents to prestable/converted
===================================================

1.  In the SME Terminal, write:

    `cd`  
    `cd freecorpus/converted/sme/admin/sd/other_files`

2.  Write this:

    pick (press tab, pick-parallel-docs.pl appears) dc2012-2.pdf.xml
    (pick-parallel-docs.pl only works on sme docs)

3.  Write this:

    `cd`  
    `cd freecorpus`

4.  Write svn stat and the result is:

    ? prestable/converted/nob/admin/sd/other\_files/sp2012-2.pdf.xml ?
    prestable/converted/sme/admin/sd/other\_files/dc2012-2.pdf.xml

5.  Write:

    svn add (copy and paste both paths, remember to add a space between
    them) prestable/converted/nob/admin/sd/other\_files/sp2012-2.pdf.xml
    prestable/converted/sme/admin/sd/other\_files/dc2012-2.pdf.xml

6.  Write:

    svn ci -m "added approved parallel files to prestable"

    YOU NOW HAVE ADDED NEW PARALLEL DOCUMENTS TO PRESTABLE
