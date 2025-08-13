# Install CLI tools using MacPorts

1. Install [MacPorts](http://www.macports.org)
2. Install required CLI tools with the following commands:

```sh
sudo port install autoconf automake libtool python311 py311-pip \
          py311-yaml wget bison cmake gawk saxon antiword wv libxslt \
          poppler tidy subversion gmake pipx

sudo port select --set pip3 pip311

sudo port select --set python3 python311

pipx ensurepath
pipx install git+https://github.com/divvun/morph-test
pipx install git+https://github.com/divvun/GiellaLTLexTools
pipx install git+https://github.com/divvun/GiellaLTGramTools
```
