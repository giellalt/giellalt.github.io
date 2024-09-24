# How to install speller and grammarchecker on Linux


# Installing the speller and grammarchecker in LibreOffice


These commands install both the spellchecker and the grammarchecker as plugins integrated in LibreOffice.

Commands on ubuntu:

Set up Linux as described in the [Linux getting started](/infra/GettingStartedOnLinux.html) guide.

Install LibreOffice and speller files:

```sh
sudo apt install \
libreoffice \
libreoffice-divvun \
libvoikko1 \
giella-sme-speller \
giella-sma-speller \
giella-smj-speller    # add more or other languages
```

Other Linux distros exchange the "apt install" part with whatever applies to them.

Activate the Divvun gramcheck/speller plugin:

- In **Tools > Settings > Language Settings > Writing tools** on LibreOffice, choose _Divvun_

# Installing the grammarchecker plugin for Google Docs

- [instructions for regular users](https://divvun.no/en/korrektur/gramcheck.html)
- For IT admins: [how to enable the Office add-on](install-admin.md)


