# Doccomments — In-Source Documentation

There is now support for writing structured comments to document the
code directly in the source. That is, the lexicon structure, organisation and
content is documented directly *with* the lexicon files, as comments in a certain
format. This document describes that format, and how it all works.

# General notes

The basic idea is that comments following a certain format will be extracted and
converted to another format suitable for online publishing.

* **Basic rule**:  Everything that is supposed to be included in the published
 documentation **must** start with a double exclamation mark (the `LexC` comment starter) followed by a space,
 e.g. in LexC or TwolC it could look like the following:

```
!! Some documentation text here.
```

These comments will be extracted, and saved to a separate document for publishing.
The comments must be in **[Markdown markup](https://www.markdownguide.org/cheat-sheet/)** format.

That is, to write comments that should become part of the public documentation, you *first* type **two exclamation marks,** *then* **one space,** and *then* the **Markdown markup** you want. To get a heading, you thus type the following:

```
...some LexC code...
!! # Top-level heading
...some LexC code...
```

In the extracted Markdown dokument this will look like:

```
# Top-level heading
```

which will end up as:

> # Top-level heading

on the web (minus the quote).

# Basic formatting and code citation syntax

* **Formatting**:  For all source file types, the comments use
  [Markdown markup](https://www.markdownguide.org/cheat-sheet/). In addition, there is
support for specifying test data, and for extracting pieces of code to be cited in the Markdown document (see next).
* **`!!=`**:  To copy a line of source code as is, including all whitespace, into the
    documentation, start the doccomment with *two* exclamation marks followed by an *equal* sign `!!=`,
    then access the cited code using the reserved name `@CODE@`. Remember that whitespace before or after
    text might break Markdown formattting. Thus you may often want to use...
* **`!!≈`**: to copy a line of code and at the same time  remove all extra whitespace, that the
    doccomment with *two* exclamation marks followed by the *almost
    equal* to sign, that is: `!!≈`. Access the cited and whitespace-cleaned code
    by using the variable `@CODE@` at a suitable place in the doccomment.
* **Regular comments**:  If a **single** exclamation mark is used, that comment is ignored,
    and the text following the mark will **not** be part of the generated documentation. It is thus
    just a regular comment, only visible in the source file.

If you want to cite whole blocks of code, use triple backslashes as doccomments before and after
the target lines, and behind each line, just `!!= @CODE@` (but you can of course add your own comments as well):

```
!! ## A two-level rule
!! ```
"i-stem vowel deletion"		   !!= @CODE@
 i:0 <=> Cns: _ W3: ( ∑ ) #  ; !!= @CODE@
!! ```
```

This should give the following Markdown fragment:

````
## A two-level rule
```
"i-stem vowel deletion"
 i:0 <=> Cns: _ W3: ( ∑ ) #  ;
```
````

which should give you the following final view:

> ## A two-level rule
> ```
> "i-stem vowel deletion"
>  i:0 <=> Cns: _ W3: ( ∑ ) #  ;
> ```

(again minus the quote).

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
!! Short descrioption of this lexicon, and its purpose.
! 
 +N+Sg: N_ODD_SG ;
 +N+Pl: N_ODD_PL ;
 +N:    N_ODD_ESS ;
  +N+SgNomCmp:e%^DISIMP R ;
  +N+SgGenCmp:e%>%^DISIMPn R ;
  +N+PlGenCmp:%>%^DISIMPi R ;
  +N+Der1+Der/Dimin+N:%»adtj GIERIEHTSADTJE ;
```

The extracted doccomments should look like this:

```
# Nominal inflection sublexica

## Inflection for odd-syllable nouns: lexicon N_ODD

Short descrioption of this lexicon, and its purpose.
```

which should end up as (minus quote):

> # Nominal inflection sublexica
> 
> ## Inflection for odd-syllable nouns: lexicon N_ODD
> 
> Short descrioption of this lexicon, and its purpose.


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

`TwolC` doccommonts follow the same conventions as `LexC`. Instead of `@LEXNAME@` referencing the last seen lexicon name, you can use `@RULENAME@` to reference the last seen two-level rule name in your doccomment.

## Twolc test data

Similar to LexC, except that the output is turned into twolc test pairs used in the pair-testing tool.

To Be Written.

# Xfst script and regex files

*Support for xfscript and regex files is not yet implemented.*

# CG3

`CG3` doccommonts follow the same conventions as `LexC`.

# Compilation procedure

The documentation files are compiled when you run `make` in the root directory of your language repository. There is a makefile in the `docs/` catalogue that governs which sourcefiles to harvest for documentation. Linking to the generated files is done automatically, in the generated file `docs/Links.md`.

As a default, only the *root.lexc* file is scheduled for generating documentation. In order to add documentation for more source files, open the `docs/Makefile.am`
file, and specify the relevant file in the MD_PAGES list (nouns_stems.md for
`src/fst/stems/nouns.lexc`, etc). The Markdown files will then be generated, and linked to.

In order to compile again (regardless of compilation status), do `make -B` in $lang/doc.

There is no need to check in the converted Markdown files, as long as you check in the source files with doccomments. All generated files are built and published automatically on GitHub, and should be online within minutes after committing (svn)/pushing (git).
