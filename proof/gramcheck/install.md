# How to install the grammarchecker

## Installing the grammarchecker plugin for Google Docs and Microsoft Word

- [instructions for regular users](https://divvun.no/en/korrektur/gramcheck.html)
- For IT admins: [how to enable the Office add-on](install-admin.md)

## Installing the grammarchecker integrated in LibreOffice on Linux

We assume you already installed LibreOffice on Linux (do not use Snap packages).

These commands install both the spellchecker and the grammarchecker

Commands on ubuntu:

1. Fetch apertium / hfst (TODO: Børre)
2. sudo apt install giella-sme-speller # or: sma, smj, smn, fao
3. In **Tools > Settings > Language Settings > Writing tools** on LibreOffice, choose _Divvun_

Now, you should be able to choose the language you installed and check for both spelling and grammar.
