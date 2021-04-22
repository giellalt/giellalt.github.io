# Debugging in-source documentation

When running `make`, the in-source documentation will be extracted and stored in Markdown documents in the `docs/` directory. After you commit your changes (and push them, if using git), you can view the documentation on [GitHub Pages](LanguageModels.md).

But what if the result does not look like you expected?

## Common errors
The most common errors in the generated documentation are the following:

1. You have unbalanced marking, say you intend 
  `**word**` but write `**word*`.
  The former is correct and gives boldface, the latter
  will make one * visible, and render the rest differently.

## How to find and correct errors

- open the generated Markdown files in a Markdown editor
- look for wrong formatting, and play with the Markdown markup until you get what you want
- update the documetation in the source files

## How to write documentation

The Markdown syntax is described [elsewhere](https://www.markdownguide.org/cheat-sheet/).

In `lang-XXX/docs/` do:

```
make
```

Then open `index.md` in a Markdown editor, and start browsing, looking for errors.

Here some advices:

* Plan your documentation
    * Don't include text if you do not mean it
    * The double exclamation mark `!!` does not mean "very important", 
   it means "will be included in a document"
* Read the resulting documentation and see whether it makes any sense.
