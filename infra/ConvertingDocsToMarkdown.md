# Converting documents to Markdown

As we continue to move to GitHub, we also need to update our documentation infrastructure. The basic ideas are as follows:

* we use the default site building features of GitHub
* this requires the use of Markdown; most features of
  html, forrest-xml and jspwiki can be replicated in Markdown, with a few excepsions:
    - all source formats:
        - definition lists: these are converted to regular lists with some extra formatting
          to make them look mostly like definition lists (this should be changed, and implemented using html instead - works fine with Markdown)
    - html/forrest-xml:
        - warnings and other message boxes: can probably be replicated as citation blocks, but
          that neeeds manual conversion

# Conversion commands

## Jspwiki ⇒ Markdown

```sh
gawk -f $GIELLA_CORE/scripts/jspwiki2md.awk WhatIsThis.jspwiki \
     > WhatIsThis.md
```

Or complete loop for all files and some cleanup:

```sh
find . -name "*.jspwiki" | while read i; do \
	gawk -f ../../giella-core/scripts/jspwiki2md.awk $i \
	| awk 'BEGIN{RS="";ORS="\n\n"}1' \
	| perl -p -e 'chomp if eof' > $i.tmp; \
	mv -f $i.tmp $i; \
	done
```

The files are still named `*.jspwiki`. Now commit the changed files, then rename
as follows:

```sh
find . -name "*.jspwiki" \
    | while read i; do mv $i ${i%.jspwiki}.md; done
```

Commit the renames.

By doing content change and rename in two steps with commits in between, there is
a greater chance that document history will be preserved (document history is one
of the biggest pain points in `git`).

## Forrest XML ⇒ Markdown

Must be done in two steps:

1. xml ⇒ html
1. html ⇒ Markdown

Also, to have a chance to retain document history across renames, you have to do content change and document renaming as two distinct operations, due to `git`s unwillingness to track files. That is, do as follows:

1. change content format, retain filename (ie overwrite the old file)
1. git add + commit
1. change the file name to match new content
1. git add + commit

It is still hard for `git` to track the file history across file renames, but doing it this way there is at least some hope of retaining it.

The baisc, single file commands are:

```sh
saxonXSL -s:docu-smj-lex.xml \
         -xsl:$GIELLA_CORE/devtools/forrest_xml2plain_html.xsl \
         > test.html
pandoc -f html -t gfm test.html -o test.md
```

Information on `pandoc` is found [at the bottom](#pandoc).

To process many files at a time, wrap the above commands in a `for` loop or similar:

```sh
# Convert xml files to html:
find . -name "*.xml" | while read i; do \
    echo $i; saxonXSL -s:$i \
        -xsl:$GIELLA_CORE/devtools/forrest_xml2plain_html.xsl \
        -o:$i.html; \
    mv -f "$i.html" "$i" ; \
done
# git add + commit using your favorite tool
#
# Rename xml files to html:
find . -name "*.xml" | while read i; do \
    mv -f "$i" "${i%.*}.html"; \
done
# git add + commit using your favorite tool
#
# Convert html files to Markdown:
find . -name "*.ht*" | while read i; do \
    pandoc -f html -t gfm "$i" -o "$i.tmp"; \
    mv -f "$i.tmp" "$i"; \
done
# git add + commit using your favorite tool
#
# Rename .html files to .md:
find . -name "*.html" | while read i; do \
    mv -f "$i" "${i%.*}.md"; \
done
```

# Aftermath

When all documents are converted, one needs to check and update links. Documentation internal links should point directly to the Markdown files (link to `test.md`, not to `test.html`), while external links should be complete URL's.

Beware of `html` files that should NOT be converted, e.g. speller test result pages. Such pages will be rendered as is, with the information given in the html source, using CSS, JS and everything. If the automatic processing above have turned such pages into Markdown, the change must be reversed before committing.

# pandoc

Install `pandoc` using MacPorts, Brew or download package:

* `sudo port install pandoc`
* `brew install pandoc`
* [Installer package for download](https://github.com/jgm/pandoc/releases/tag/2.11.3.2)

More info on the [home page](https://pandoc.org/index.html).
