# Getting started with the GiellaLT infrastructure on Linux

This page is a part of the overall [Getting started](GettingStarted.html) documentation. It describes what you need to install on **Linux** to be ready to develop language tools for your language.

Note that this documentation is relevant when you want to participate in **building and developing the grammatical tools yourself**. If you only want to use the ready-made grammatical analysers, see the [Linguistic analysis page](ling/LinguisticAnalysis.html).

## Installing required auxiliary programs

### Add the apertium nightly repository

`wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash`


### Install development tools.

If you have **Ubuntu** (or another Debian-based system), do the following:

```sh
sudo apt-get install hfst apertium-dev cg3 divvun-gramcheck libreoffice-divvun \
python3-libdivvun autoconf automake libtool libsaxonb-java xsltproc \
poppler-utils wget subversion openjdk-11-jdk cmake \
python3-yaml icu-devtools python3-corpustools python3-gtgramtools \
apertium-all-dev libdivvun-dev libhfst-dev git git-lfs pipx
```

For **Fedora** systems, use `dnf` to install packages. 

For **omarchy** and other Arch Linux system, we still do not have a
procedure in place, but we plan to set up one. While waiting, you may
use the `docker` and make an Ubuntu environment for GiellaLT there.


### Install testing tools

For some additional python based tools and automatic testing, set up pipx like
so:

```sh
pipx ensurepath
pipx install https://github.com/divvun/morph-test
pipx install https://github.com/divvun/GiellaLTGramTools
pipx install https://github.com/divvun/GiellaLTLexTools
```

Now go back to to [Getting Started page](GettingStarted.html) for the next step towards building, using and developing the linguistic analysers.
