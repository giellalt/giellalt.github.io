# How to install the grammarchecker

## Installing the grammarchecker plugin for Google Docs and Microsoft Word

- [instructions for regular users](https://divvun.no/en/korrektur/gramcheck.html)
- For IT admins: [how to enable the Office add-on](install-admin.md)

## Installing the grammarchecker integrated in LibreOffice on Linux

These commands install both the spellchecker and the grammarchecker

Commands on ubuntu:

### Setting up

Set up Linux as described in the [Linux getting started](/infra/GettingStartedOnLinux.html) guide

### Install LibreOffice and speller files

```sh
sudo apt install libreoffice
sudo apt install giella-sme-speller python3-libdivvun # or: sma, smj, smn, fao`
```

### Build the [libreoffice-divvun](https://github.com/divvun/libreoffice-divvun) plugin

```sh
git clone https://github.com/divvun/libreoffice-divvun
cd libreoffice-divvun
make oxt -> the oxt exists in **build/divvun.oxt**
```

### Install the plugin

- LibreOffice
  - Open Extension Manager (**Tools -> Extension Manager**)
  - Press **Add**, navigate to **libreoffice-divvun/build** and choose the **divvun.oxt** file
  - In **Tools > Settings > Language Settings > Writing tools** on LibreOffice, choose _Divvun_

Now, you should be able to choose the language you installed and check for both spelling and grammar.
