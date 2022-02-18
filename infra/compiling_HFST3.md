# Compiling HFST


**NB!** The information below is up-to-date as of **HFST 3.11**.


Presently, HFST3 supports three different backends, all enabled by default:
* **OpenFST** - weighted transducers (*default*)
* **Foma** - xfst-compatible lexc and regex compiler, xfst
  scripts (*optional*)
* **SFST** - unweighted transducers, fast substitute (*optional*)


HFST3 abstracts over the different backends, and will make it easy to add
support for new backends in the future, to support even more FST source code and
transducer conversion options.


#  The simple installation (you download ready-made programs)


Run these commands:


**On Mac:**
```
curl http://apertium.projectjj.com/osx/install-nightly.sh > install-nightly.sh
chmod a+x install-nightly.sh
sudo ./install-nightly.sh
```


**On Linux ubuntu:**
```
wget https://apertium.projectjj.com/apt/install-nightly.sh -O - | sudo bash
sudo apt-get -f install apertium-all-dev
```


**On Linux fedora (e.g. on gtlab):**
```
curl https://apertium.projectjj.com/rpm/install-nightly.sh |sudo bash
sudo apt-get -f install apertium-all-devel
```


This downloads a shell script (1), makes it executable (2), and runs it (3). The shell script in turn will download and install prebuilt binaries for:


* hfst
* vislcg3
* apertium


You get the latest version of all required tools in one go, no compilation required! :)
Rerun with regular intervals to get the latest updates.


#  Installing the hard way (you build the programs yourself)


If you want to configure and compile the source code, do as follows:


## Checkout and configuration


We assume installation from svn here. You can downloaded a tarball from the
[Hfst Github site](https://github.com/hfst). Then
unzip and untar, and go directly to the `./configure` step.


```
svn co https://github.com/hfst/hfst.git/trunk hfst
cd hfst/
./autogen.sh
./configure --enable-all-tools --with-unicode-handler=glib
```


The configuration above is the default used by the Giella infra. To check what
other options there are, do `./configure --help`.


To avoid the very wordy output of `make`, and get only essential messages,
add the following `./configure` option:


```
--enable-silent-rules
```


## Make and install


The final steps to build and install `hfst` after the configuration are as
follows:


```
make
sudo make install
```


## installing the SWIG Python binding


**NB!!** The following info is most likely outdated. See the Hfst readme file
for further details.


If you want to run hfst from Python, you need to install the Python binding
provided through SWIG. First you need to install `swig` and the Swig submodule
for Python using MacPorts:


```
sudo port install swig
sudo port install swig-python
```


When done, you are ready to build and install the Python bindings:


```
python3.3 setup.py build_ext --inplace
```


# Extra considerations for older systems


## Special configuration on MacOSX 10.9


Due to a new default compiler on MacOSX 10.9 (with which the hfst code
- presumably the openfst backend - is not compatible), one needs additional
configuration flags. Try one of these:


```
./configure --without-foma --with-unicode-handler=glib --enable-all-tools \
            LDFLAGS=" -stdlib=libstdc++"
```


Or:


```
./configure --without-foma --with-unicode-handler=glib --enable-all-tools \
            CXXFLAGS=" -stdlib=libstdc++" LDFLAGS=" -stdlib=libstdc++"
```


Or:


```
./configure --without-foma --with-unicode-handler=glib --enable-all-tools \
            CXXFLAGS="-I/usr/include/c++/4.2.1" LDFLAGS=" -stdlib=libstdc++"
```


**NB!** Remember to `make clean` after each `./configure` run, and before
you `make`


**NB2!** This does NOT apply to MacOSX 10.10 - in this case, just configure
without any extra flags, as described earlier. This might be because the hfst
build instructions are improved, or because of changes in Apple's compilers. If
it is because of changes in the Hfst code base, the above workaround is probably
obsolete also on MacOSX 10.9, but this needs to be tested.


## Extra preparations on MacOSX 10.6


When building from the github source code,
OSX 10.6 and earlier requires newer versions of `automake` and `autoconf`
than provided by the system, and `hfst-ospell` requires `pkg-config` to
configure. Also the `flex` and `bison` versions installed breaks `hfst`
compilation. Ensure you have MacPorts installed, then do the following
**before anything else**:


```
sudo port install automake autoconf flex bison pkgconfig
```


After this, do `./autogen.sh` etc. as above.


