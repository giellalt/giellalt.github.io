# How to install speller and grammarchecker on Linux


# Installing the speller and grammarchecker in LibreOffice


These commands install both the spellchecker and the grammarchecker as plugins integrated in LibreOffice.

Installation on ubuntu, in three steps:

1. Set up Linux as described in the [Linux getting started](/infra/GettingStartedOnLinux.html) guide.

2. Install LibreOffice and speller files (Other Linux distros exchange
   the "apt install" part with whatever applies to them.):

```sh
sudo apt install \
libreoffice \
libreoffice-divvun \
libvoikko1 \
giella-sme-speller \ 
giella-sma-speller \ 
giella-smj-speller # one or more languages
```



3. Activate the Divvun gramcheck/speller plugin:

- In **Tools > Settings > Language Settings > Writing tools** on LibreOffice, choose _Divvun_



# Alternative using plain voikko and locally compiled spellers

Install requirements:

```sh
sudo apt install libreoffice-voikko libvoikko-dev
```

Compile the spellcheckers you need:

```sh
cd lang-sma
./configure --enable-spellers
make
```

and copy them to the correct folder

```sh
lang-sma$ cp tools/spellcheckers/sma.zhfst ~/.voikko/3/
```

Activate them in Libreoffice in **Tools > Options > Language Settings > Writing Aids** by clicking on **Edit** next to **Available Language Modules**, choosing the language(s) you want and making sure "Spellchecker (Voikko)" is prioritized.


Note that the **ABC** symbol (indicating a working proofing tool)  does not necessarily show up to the left
of the language name in the LibreOffice list over proofing tools. If
in doubt as to whether the proofing tool was installed, **try using
it**, even though the **ABC** symbol is not in place.



# Grammarchecker plugin for Google Docs on Linux

The spellkechker and grammarchecker may be installed for Google Docs
on Linux:

- [instructions for regular users](https://divvun.no/en/korrektur/gramcheck.html)
- For IT admins: [how to enable the Office add-on](install-admin.md)


