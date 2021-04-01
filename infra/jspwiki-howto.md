Headers and paragraphs
======================

The jspwiki format gives the possibility to use three levels of headers.
The first level is marked with: `!!!`, the second `!!` and the third is
`!`. Paragraphs are made by placing an empty line before and after a
paragraph.

Lists
=====

The jspwiki format gives the possibility to use ordered (numbered) and
unordered lists. Both list types can have up to three levels. The `#`
mark is used to make ordered lists, and the `*` mark is used to make
unordered ones. `#, ##,             ###` and `*, **, ***` gives the
first, second and third levels for respectively ordered and unordered
lists.

Miscellaneous
=============

Emphasis is made by putting `__` (two underscores) before and after the
word one wants to emphasise.

More than two underscores in a row crashes jspwiki output!

List of formatting conventions
==============================

Here comes a short documentation, in tabular format.

    ----       = (hyphen) make a horizontal ruler. Extra '-' is ignored.
    \\         = force a line break

    [link]     = create a hyperlink to an internal WikiPage called 'Link'.
    [this is also a link] = create a hyperlink to an internal WikiPage called
                            'ThisIsAlsoALink' but show the link as typed with spaces.
    [a sample|link] = create a hyperlink to an internal WikiPage called
                        'Link', but display the text 'a sample' to the
                        user instead of 'Link'.
    ~NoLink    = disable link creation for the word in CamelCase.
    [1]        = make a reference to a footnote numbered 1.
    [#1]       = mark the footnote number 1.
    [[link]    = create text '[link]'.

    !heading   = small heading with text 'heading'
    !!heading  = medium heading with text 'heading'
    !!!heading = large heading with text 'heading'

    ''text''   = print 'text' in italic.
    __text__   = print 'text' in bold.
    {{text}}   = print 'text' in monospaced font.

    * text     = make a bulleted list item with 'text'
    # text     = make a numbered list item with 'text'
    ;term:ex   = make a definition for 'term' with the explanation 'ex'

    ||table  ||header
    | second | row

Caveats
=======

There is an [example document](example.html) for testing that documents
the features that do work.

Breaking any of the following rules will cause parsing errors and an
error message:

-   No more than three levels of nested lists!
-   No mixing of \* and \# on the same list item!
-   Formatting constructs can't span several lines in the source file!
-   Horizontal rulers (-\|-\[-\|-) require at least one empty line on
    each side.
-   Forced line break (\\\\) requires at least one printable character
    following it on the same line.

The following mark-up won't cause syntax errors, but it doesn't parse as
intended, and thus produces unwanted XML/HTML:

-   Term lists are not parsed at all, and are rendered as the source
    text.
-   Mixing bullet and numbered lists at different levels works, but will
    break the outer list in two, and thus restart a numbered list (and
    insert extra vertical space).
