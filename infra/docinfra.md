# Documentation infrastructure

The documentation infrastructure is built on the following stones:

- [Markdown syntax](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)
- [GitHub Pages](https://pages.github.com)
- the GH Pages theme [jekyll-theme-minimal](https://github.com/pages-themes/minimal)
- … with some modifications to create a page TOC

For creating slideshows based on Markdown, and fairly easily integratable with
[GitHub Pages, **Sli**dev](https://sli.dev) seems to be the best choice.

There is no automatic support for **Sli**dev slides yet, but for everything else
just commit Markdown files in the `docs/` folder of the repository, `git push`,
and the documentation will be online within seconds.

All source code containing
[documentation markup](infraremake/In-sourceDocumentationSpecification.md) will
be automatically parsed
and the documentation extracted, and will be automatically added to the site on
the next `git push`.
