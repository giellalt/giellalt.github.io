# Compiling Voikko with hfst

# Overview


These instructions are based on LibVoikko 3.6 on Lion (MacOS X 10.7.5). Other systems and older versions of LibVoikko *have not been tested!*


There are also somewhat older & outdated build instrcuctions on the [Voikko home pages](http://voikko.sourceforge.net/source-mac.html). These were made for LibVoikko 2.x on Leopard (MacOS 10.5.x).


If you are looking for usage info, that can be found [here](/tools/UsingVoikkoWithHfst.html).


# Install dependencies


Using MacPorts, install the following dependencies for `hfst-ospell` and `libvoikko`:


* pkg-config ≥ 0.23
* gettext ≥ 0.17
* libxml++ 2
* libarchive
* libz


They can all be installed at once using this command:


```
sudo port install pkgconfig gettext libxmlxx2 libarchive zlib
```


The following is most likely not necesary anymore:
* [Malaga](http://home.arcor.de/bjoern-beutel/malaga/)
* Suomimalaga - part of the libvoikko checkout, see
  [here](http://voikko.sourceforge.net/source-mac.html) for details


## hfst-ospell


`hfst-ospell` is a speller library (and testing frontent) to use hfst-based transducers as spellers. It is required for the hfst backend for Voikko to work. You get it as follows:


```
svn co svn://svn.code.sf.net/p/hfst/code/trunk/hfst-ospell
```


Configure hfst-ospell with the following options (the `enable` options are required by Voikko):


```
./autogen.sh
./configure --enable-zhfst --enable-xml
```


followed by the usual:


```
make
sudo make install
```


# Build and install LibVoikko


These installation instructions assume we're using the git codebase. Start the build process by cloning `corevoikko` from git:


```
git clone https://github.com/voikko/corevoikko.git
```


The build receipt is the standard one, with one additional flag to enable
support for loading dictionaries shared by all users and for backwards and
Unix/Linux compatibility.


**NB!** This configuration is for OSX! For Windows and Linux/Unix dictionary
paths, see the Libvoikko documenation!


**NOTE!** These directories come in addition to the user-only directories (e.g.
~/.voikko etc.).


```
cd corevoikko/libvoikko
./autogen.sh
./configure --with-dictionary-path=/Library/Spelling/voikko:/usr/local/share/voikko:/usr/local/lib/voikko
make
sudo make install
```


Installation in other locations using `--prefix` is not recommended, especially for the dependent components. I have not been able to get it to work.


If you get **configure errors** about `libvoikko` being unble to find `hfstospell`, use this configure command line instead:


```
PKG_CONFIG_PATH=:/opt/local/lib/pkgconfig:/usr/local/lib/pkgconfig ./configure --enable-hfst
```


# Gory details - how to compile hfst-ospell and libvoikko as universal binaries for the LibreOffice extension


There is [a separate document](BuildingTheVoikkoExtensionForLibreOffice.html) for
building the libs as universal binaries and finally building the  LibreOffice
extension.
