# How to install the grammarchecker

## Installing the grammarchecker plugin for Google Docs and Microsoft Word

- [instructions for regular users](https://divvun.no/en/korrektur/gramcheck.html)
- For IT admins: [how to enable the Office add-on](install-admin.md)

## Installing the grammarchecker integrated in LibreOffice on Linux

These commands install both the spellchecker and the grammarchecker

Commands on ubuntu:

### Setting up

Set up Linux as described in the [Linux getting started](/infra/GettingStartedOnLinux.html) guide.

### Install LibreOffice and speller files

```sh
sudo apt install \
libreoffice \
libreoffice-divvun \
libvoikko1 \
giella-sme-speller \
giella-sma-speller \
giella-smj-speller    # add more or other languages
```

### Activate the Divvun gramcheck/speller plugin

- In **Tools > Settings > Language Settings > Writing tools** on LibreOffice, choose _Divvun_
