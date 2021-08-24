Conversion errors
=========

**Note: The document is from 2011**

# Errors addressed so far (May 2011):


* dårlege originalfiler - gjev ugyldig xml
** desse blir fanga opp i dag
* kodefeil - desse gjev gyldig xml, men meiningslause bokstavar
** utf-som-macroman
** utf-som-latin1
** utf-som-html-hex
** utf-som-html-entitet
* skannefeil/ocr-feil - desse gjev meiningsfulle bokstavar, men meiningslaus tekst
** đ-som ó, osv.
* bad sentence-delimitation: one real sentence is one fragment in one language,
  3 fragments in the other -> alignment goes bunk
* files `freecorpus/converted/sme/admin/others/` 
** `STM200420050011000SE_PDFS.pdf.xml` 
  `STM200420050044000SE_PDFS.pdf.xml`
  have encoding errors that đ is represented as &nbsp; and the document is full of
  &nbsp;'s; thus these files should be deleted
** file `OTP200620070025000SE_PDFS.pdf.xml`
  has paragraphs with content '--------' so it should be deleted.
** file `STM200320040010000SE_PDFA.pdf.xml`
  has so many errors, it should be rescanned
** `uito-ohpenplana.txt.xml`
  the original file is corrupted


