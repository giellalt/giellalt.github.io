# In-Source Documentation Specification

# Doccomment variables and triggers

Trigger symbols (all are followed by **space**, with one exception):

* **`!! `**:  print the text after the markup to the output, possibly
                 using variable substitution (`@LEXNAME@/@RULENAME@`)
* **`!!=`**:  store the source code before the markup in the variable `@CODE@`,
                 and print the text after the markup, possibly using
                 variable substitution (`@LEXNAME@/@RULENAME@/@CODE@`);
                 **code whitespace preserved verbatim**
* **`!!≈`**:  store the source code before the markup in the variable `@CODE@`,
                 and print the text after the markup, possibly using
                 variable substitution (`@LEXNAME@/@RULENAME@/@CODE@`);
                 **leading/trailing whitespace in the source code is removed, the rest squeezed**
* **`!!€fst-type:`**:  Specifies the fst-type to run a test set against, must be
                 followed by the test name — **NOT** a space — and must be the first line in a
                 test set.
* **`!!€`**:  print positive test data to output
* **`!!$`**:  print negative test data to output

Variables:

* **`@LEXNAME@`**:  name of last seen lexc lexicon
* **`@RULENAME@`**:  name of last seen twol/cg3 rule
* **`@CODE@`**:  source code to the left of the last seen `!!=` / `!!≈`

The variables retain their values until they are reset (either by a new lexicon or rule name, or by a new `!!≈` or `!!=` symbol).

# Formatting of extracted comments

For all source files, the comments are formatted using [Markdown markup](https://www.markdownguide.org/cheat-sheet/).

# Build system behaviour

The build system will try to generate all files listed in `$MD_PAGES` in
`$GTLANG/doc/Makefile.am`. The Markdown filenames are derived from the source file names according to the follwing scheme:

```parentdir/sourcefile.lexc => sourcefile-parentdir.md```

The Markdown pages will be rebuilt whenever the corresponding source file is changed, in the standard way. Just type `make`, and the documentation will be rebuilt if needed.

There will also be built one large file, containing all the Markdown documentation on one page.
