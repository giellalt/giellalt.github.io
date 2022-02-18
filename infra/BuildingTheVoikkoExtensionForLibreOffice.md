# Building the Voikko extension for LibreOffice

# Gory details - how to compile hfst-ospell and libvoikko as static universal binaries


**NB!** This documentation is likely outdated, and should be taken as a guide to new efforts only. Please update the document as necessary when building the extension again.


First, ensure that you have universal binaries of the things that both `hfst-ospell` and `libvoikko` depends on by specifying the `+universal` option in MacPorts. Or make the `+universal` variant default by adding it to the file:


```
/opt/local/etc/macports/variants.conf
```


(see [http://trac.macports.org/wiki/howto/buildUniversal] for more details,
including how to add more architectures for the universal build.)


**NB!** LibreOffice 4 still supports MacOSX on PPC all the way back to Tiger. To
ensure that the Voikko plugin with hfst support actually runs on those systems,
it should probably be built on such a system (assuming that the compiled plugin
is more likely forward compatible than backwards compatible). Also, presently the MacOSX builds of LibreOffice (and OpenOffice) are 32-bit only, thus all libraries need to be available for that architecture. The easiest solution is to install everything using MacPorts with the `+universal` flag.


**NB2!** As of LibreOffice 4.1, support for PPC on the Mac has been dropped. Depending on how backwards compatible we want to be (or not), dropping PPC for the LO Voikko plugin can also be considered.


For `hfst-ospell` the required dependencies mean the following libraries (some of these might be on your system already, just check that they are universal binaries):


* libarchive
* liblzma
* libxml++2
* libz
* libiconv
* libcrypto


Depending on OS version and LibreOffice versions, the list might be longer. The only way to tell is to see what the linker complains about, and then build the missing libraries.


## Future work


`hfst-ospell` will in the near future be rewritten to *not* rely this long list of dependencies, mainly by replacing libxml++2 with a selfcontained library (e.g. `tinyxml`). This should make compilation of `hfst-ospell` for linking into Voikko much easier.


**Update:** The first step is now done (as of hfst svn r3625), and is enabled by configuring `hfst-ospell` as follows:


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig/ ./configure --enable-zhfst --enable-xml=tinyxml2
```


This does of course require that `tinyxml2` has been built and installed first.


# Check the architecture of the installed libraries


To check that they really are universal, first get a list of which installed libraries `hfst-ospell` is dependent on:


```
$ otool -L /usr/local/lib/libhfstospell.1.dylib
```


Then, for each library in that list, use the following command:


```
$ file /usr/local/lib/libhfstospell.1.dylib
/usr/local/lib/libhfstospell.1.dylib: Mach-O universal binary with 2 architectures
/usr/local/lib/libhfstospell.1.dylib (for architecture i386):	Mach-O dynamically linked shared library i386
/usr/local/lib/libhfstospell.1.dylib (for architecture x86_64):	Mach-O 64-bit dynamically linked shared library x86_64
```


For those libraries that give the above output, all is fine. But if you get a message that there is only one architecture for a library, you have to recompile and reinstall that library as a universal binary. You do that as follows:


```
sudo port -f install PORTNAME +universal
```


## Grammar checker update


As we now also have started to work on a grammar checker, there are two more dependencies to build:
* vislcg3
* tinyxml2


Both have their makefiles constructed by CMake, and none of them are available through MacPorts (at least not in a recent enough version).


To build universal binaries, do as follows:


VislCG3: cd into the source dir, and do:
```
CMAKE_OSX_ARCHITECTURES=i386\;x86_64 ./cmake.sh
make clean
make
sudo make install
```


For TinyXML2, the configuration command is:


```
cmake -DCMAKE_OSX_ARCHITECTURES=i386\;x86_64 CMakeLists.txt
make
```


Then do the following:


* [Build hfst-ospell for inclusion in voikko](BuildingHfst-ospellForInclusionInVoikko.html)
* [Build libvoikko as a universal binary](BuildLibvoikkoAsUniversalBinary.html)


# Compiling the VoikkoSpellService


Copy the file `/usr/local/lib/libvoikko.1.dylib` to your VoikkoSpellService source dir + `Resources/voikko/`. Then open the XCode project, and compile. Hopefully that should be enough.


# Building the LibreOffice extension


The first time you're compiling, you need to prepare your environment:
* download the LibreOffice SDK
* cd into the SDK dir
* run `perl ./configure.pl `hostname` `pwd``


Then, each time you want to compile again, you need to do the following:
* in your home dir, source `. $HOSTNAME/setsdkenv_unix.sh"`


Then, follow the guidelines in the `Makefile`, pointing `LIBVOIKKO_PATH` to our static library dir. If you want a static build (which you want if you intend to distribute the extension), you also need to enable `STANDALONE_EXTENSION_PATH`, pointing it to a dir containing the required voikko dir structure and files for at least one supported language. One possible setup, using the default Malaga-based Finnish proofing tools is:


```
lib/
└── voikko
    └── 2
        └── mor-standard
            ├── voikko-fi_FI.lex_l
            ├── voikko-fi_FI.mor_l
            ├── voikko-fi_FI.pro
            └── voikko-fi_FI.sym_l
```


In this case, `STANDALONE_EXTENSION_PATH` should be set to `lib/voikko`. When done, just `make oxt` and distribute the final `.oxt` file.


Finally you need to modify the build step for the oxt macosx version as follows:
```
ifeq "$(PLATFORM)" "macosx"
		cat $(PRJ)/settings/component.uno.map > build/voikko.map
		nm -gx $^ | $(ADDSYMBOLS) >> build/voikko.map
		$(LINK) $(COMP_LINK_FLAGS) $(LINK_LIBS) -o $@ $^ \
		-framework CoreFoundation -framework Cocoa \
		$(CPPUHELPERLIB) $(CPPULIB) $(SALLIB) \
		$(CPPUHELPERDYLIB) $(CPPUDYLIB) $(SALDYLIB) \
		/Users/USERNAME/alibs/libvoikko.a \
		/Users/USERNAME/alibs/libarchive.a \
		/Users/USERNAME/alibs/libbz2.a \
		/Users/USERNAME/alibs/libcrypto.a \
		/Users/USERNAME/alibs/libgiomm-2.4.a \
		/Users/USERNAME/alibs/libglib-2.0.a \
		/Users/USERNAME/alibs/libglibmm-2.4.a \
		/Users/USERNAME/alibs/libhfstospell.a \
		/Users/USERNAME/alibs/libiconv.a \
		/Users/USERNAME/alibs/libintl.a \
		/Users/USERNAME/alibs/liblzma.a \
		/Users/USERNAME/alibs/libsigc-2.0.a \
		/Users/USERNAME/alibs/libvoikko.a \
		/Users/USERNAME/alibs/libxml++-2.6.a \
		/Users/USERNAME/alibs/libxml2.a \
		/Users/USERNAME/alibs/libz.a
		$(INSTALL_NAME_URELIBS)  $@
else
```


**NB!!!** The above build instructions are only tested on Snow Leopard, and the
resulting OOo / LibreOffice extension is known to *only* work on Snow Leopard
(aka MacOS X 10.6) and Mountain Lion (aka MacOS X 10.8).
