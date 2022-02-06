# Documentation infrastructure

The documentation infrastructure is built on the following stones:

- [GirHub Flavoured Markdown (GFM)](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)
- [GitHub Pages](https://pages.github.com)
- the GH Pages theme [jekyll-theme-minimal](https://github.com/pages-themes/minimal)
- … with some modifications to create a page TOC. The TOC construction means that:
    - the first level 1 header in the document becomes the page title
    - there needs to be a second, level 1 header to create a TOC

To update the online documentation, just save Markdown files in the `docs/`
folder of the repository, commit etc,
and the updated documentation will be online within a minute.

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
- [dark](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) [mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- graph generation from ASCII art using [Mermaid](https://mermaid-js.github.io/)
