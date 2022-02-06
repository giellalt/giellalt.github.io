# Documentation infrastructure

The documentation infrastructure is built on the following stones:

- [GirHub Flavoured Markdown (GFM)](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)
- [GitHub Pages](https://pages.github.com)
- the GH Pages theme [jekyll-theme-minimal](https://github.com/pages-themes/minimal)
- … with some modifications to create a page TOC to the left:
    - The first level 1 header in the document becomes the page title
    - There needs to be a second level 1 header to create a TOC

To update the online documentation, just commit Markdown files in the `docs/`
folder of the repository, run `git push`,
and the updated documentation will be online within a minute. The generated /
extracted source code documentation (see below) is built on each push, so no
extra effort is needed beyond committing & pushing the source code.

All source code containing
[documentation markup](infraremake/In-sourceDocumentationSpecification.md) will
be automatically parsed and the documentation extracted. The extracted
documentation will be automatically added to the site on the next `git push`.

Source file types being scanned for documentation comments are:

- lexc
- twolc
- cg3
- pmscript
- xfscript

The top directories `src/` and `tools/`, including all subdirs, are scanned.
*Generated* files of the above types are *not* scanned.

Possible, future improvements:

- [slide support through **Sli**dev](https://sli.dev)
- dark mode
- graph generation from ASCII art
