# Doccomments - In-Source Documentation

There is now preliminary support for writing structured comments to document the
code directly in the source. That is, the lexicon structure, organisation and
content is documented directly *with* the lexicon files, as comments in a certain
format. This document describes how this is done.


First come some general notes, then an overview over differences between lexc, twolc and vislcg3 source files. At the end there is an overview of the compilation procedure.


# General notes


The basic idea is that comments following a certain format will be extracted and
converted to another format more suitable for publishing for a wider audience.


* **Basic rule**:  Everything that is supposed to be included in the published
 documentation **must** start with a double exclamation mark (the `LexC` comment starter) followed by a space,
 e.g. in LexC or TwolC it could look like the following:


```!! Some documentation text here.```


These comments will be extracted, and saved to a separate document for publishing.

The comments must be in **Markdown** format.

That is, to write comments that should become part of the public documentation, you *first* type **two exclamation marks,** *then* **one space,** and *then* the **Markdown markup** you want. To get a heading, you thus type the following:

```
...some LexC code...
!!  # Top-level heading
...some LexC code...
```

In the resulting Markdown dokument this is turned into:

```
# Top-level heading
```

* **Ignored comments**:  If a **single** exclamation mark is used, that comment is ignored,
    and the text following the mark will **not** be part of the generated documentation.


* **Formatting convention**:  For all source file types, the comments use
  [Markdown markup](https://www.markdownguide.org/cheat-sheet/). In addition, there is
support for specifying test data.


* **Raw copy of source code**:  To copy a line of source code as is into the
    documentation, add *two* comment symbols followed by an *equal* sign `!!=`
    (keeps all whitespace)
    The copied code is stored in the variable @CODE@, which can be used to insert
    the code whereever it is needed.

* **Cleaned copy of source code**: *two* comment symbols followed by the *almost
    equal* to sign `!!≈` (removes all excessive whitespace) at the
    end of the line you want to copy (possibly followed by your own comments).
    The copied code is stored in the variable @CODE@, which can be used to insert
    the code whereever it is needed.

Both `!!=` and `!!≈`  arer useful e.g. when you want to cite the code as it is used.

Example (the extra space in the triple { and } in the example is only needed to avoid double triplets, and should not be included in the actual code):

```
!! ## Symbols that need to be escaped on the lower side (towards twolc):
!! ```
 %[%>%] !!= @CODE@ - Literal >
 %[%<%] !!= @CODE@ - Literal <
!! ```
```

This should give the following Markdown fragment:


````
## Symbols that need to be escaped on the lower side (towards twolc):
```
 %[%>%] - Literal >
 %[%<%] - Literal <
```
````

The full syntax and specification for the markup conventions has its own [specification page](In-sourceDocumentationSpecification.html).

# LexC notes

## Conventions

Each lexicon is documented **below** the keyword *LEXICON*. It is possible to use the keyword `@LEXNAME@` in the text, where it will be replaced with the actual lexicon name. A typical lexicon could look like the following:

```
!  ================================
!! # Nominal inflection sublexica
!  ================================


LEXICON N_ODD
!! ## Inflection for odd-syllable nouns: lexicon @LEXNAME@
!  -------------------------------------------------------
! 
!!  Short descrioption of this lexicon, and its purpose.
! 
 +N+Sg: N_ODD_SG ;
 +N+Pl: N_ODD_PL ;
 +N:    N_ODD_ESS ;
  +N+SgNomCmp:e%^DISIMP R ;
  +N+SgGenCmp:e%>%^DISIMPn R ;
  +N+PlGenCmp:%>%^DISIMPi R ;
  +N+Der1+Der/Dimin+N:%»adtj GIERIEHTSADTJE ;
```

## Test data

```
!  Test data:
!!€gt-norm: gierehtse # Odd-syllable test
!!€ gierehtse           gierehtse+N+Sg+Nom
!!€ gierehtsem          gierehtse+N+Sg+Acc
!!$ gieriehtsem         gierehtse+N+Sg+Acc # negative test - don't accept this!
!!€ gierehtsen          gierehtse+N+Sg+Gen
```

The above test data corresponds to the following yaml file (sans header):

```
  gierehtse: # Odd-syllable test
    gierehtse+N+Sg+Nom:  gierehtse
    gierehtse+N+Sg+Acc:  gierehtsem
    gierehtse+N+Sg+Acc: ~gieriehtsem
    gierehtse+N+Sg+Gen:  gierehtsen
```

# Twolc notes

`TwolC` doccommonts follow the same conventions as `LexC`.

## Twolc test data

*Support for TwolC test data is not yet implemented.*

Similar to LexC, except that the output is turned into twolc test pairs used in the pair-testing tool.

To Be Written.

# Xfst script and regex files

*Support for Xfst files is not yet implemented.*

# CG3

`CG3` doccommonts follow the same conventions as `LexC`.

# Compilation procedure

The documentation files are compiled when you run `make` in the root directory of your language repository. There is a makefile in the `docs/` catalogue that governs which sourcefiles to harvest for documentation. Linking to the generated files is done automatically, in the generated file `docs/Links.md`.

As a default, only the *root.lexc* file is scheduled for generating documentation. In order to add documentation for more source files, open the `docs/Makefile.am`
file, and specify the relevant file in the MD_PAGES list (nouns_stems.md for
`src/fst/stems/nouns.lexc`, etc). The Markdown files will then be generated, and linked to.

In order to compile again (regardless of compilation status), do `make -B` in $lang/doc.

Check in the converted Markdown files.
