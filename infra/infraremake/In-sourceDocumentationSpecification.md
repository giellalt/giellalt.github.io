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

* **`@LEXNAME@`**:  name of last seen `lexc` lexicon
* **`@RULENAME@`**:  name of last seen `twolc`/`cg3` rule
* **`@CODE@`**:  source code to the left of the last seen `!!=` / `!!≈`
* **`@LEMMA@`**:  LexC source code: lemma only, from `!!=` / `!!≈`
* **`@LEXEME@`**:  LexC source code: everything to the left of `:`, from `!!=` / `!!≈`
* **`@STEM@`**:  LexC source code: stem — everything to the right of `:`, from `!!=` / `!!≈`
* **`@CONTLEX@`**:  LexC source code: contlex, from `!!=` / `!!≈`

The variables retain their values until they are reset (either by a new lexicon or rule name, or by a new `!!≈` or `!!=` symbol).

# Formatting of extracted comments

For all source files, the comments should be formatted using [Markdown markup](https://www.markdownguide.org/cheat-sheet/).

# Build system behaviour

The build system will automatically find all source files containing documentation comments, and extract the markdown document. This happens on all pushes to GitHub.

The Markdown pages can also be built manually. Just type `make`, and the documentation will be rebuilt if needed.

There will also be built one large file, containing all the in-source documentation on one page.
