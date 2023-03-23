# Install CLI tools using MacPorts

1. Install [MacPorts](http://www.macports.org)
2. Install required CLI tools with the following commands:

```sh
sudo port install autoconf automake libtool python310 py310-pip \
          py311-yaml wget bison cmake gawk saxon antiword wv libxslt \
          poppler tidy subversion

sudo port select --set pip3 pip310

sudo port select --set python3 python310
```
