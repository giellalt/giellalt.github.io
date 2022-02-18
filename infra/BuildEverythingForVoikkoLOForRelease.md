# Build everything for voikko LO for release


This document describes how to build everything you need to create the
**LibreOffice Voikko oxt** extension with Hfst support
*for distribution and final delivery*. The document is intended for the
maintainer of the MacOSX version of the oxt with hfst support.


If you only want to get the libvoikko tools installed on your local machine,
there are simpler build instructions available elsewhere on this site (link
forthcoming).


The build instructions take each component in order, gives the configure and
build instructions, and finally gives the instructions for how to assemble the
final oxt. The whole build process was done on a MacOSX 10.6 machine, with the
LibreOffice 4.1 SDK. This marks the lower bound on the supported OS & LO
versions.


The needed prerequisites are:
* libarchive with only zlib support
* tinyxml2
* hfst-ospell
* vislcg3 (optional, only needed for the grammar checker)
** vislcg3 depends on ICU - this dependency is not yet tested, and not covered
   in this document
* libvoikko


The document describes how to build VislCG3 in the proper format for inclusion
in the grammar checker, but otherwise does not specify the rest of the build
instructions needed for the grammar checker. The document will be updated when
the grammar checker is closer to a first test release.


The basic requirements are:
* build a universal binary (so that we also get i386 support - LibreOffice is so
  far i386 *only* on MacOSX, but the compiler will by default build only for
  the native architecture, which has for a long time been x86_64)
* build static libraries that can be linked in with the final oxt


# Libarchive


* download [https://github.com/libarchive/libarchive/archive/master.zip]
* configure and make as follows:


```
cmake \
-DCMAKE_OSX_ARCHITECTURES=i386\;x86_64 \
-DCMAKE_IGNORE_PATH=/opt/local/lib \
-DCMAKE_LIBRARY_PATH=/usr/lib \
-DENABLE_ACL=OFF         \
-DENABLE_BZip2=OFF       \
-DENABLE_COVERAGE=OFF    \
-DENABLE_CPIO=OFF        \
-DENABLE_CPIO_SHARED=OFF \
-DENABLE_EXPAT=OFF       \
-DENABLE_ICONV=OFF       \
-DENABLE_LZMA=OFF        \
-DENABLE_LibGCC=OFF      \
-DENABLE_NETTLE=OFF      \
-DENABLE_OPENSSL=OFF     \
-DENABLE_PCREPOSIX=OFF   \
-DENABLE_SAFESEH=OFF     \
-DENABLE_TAR=OFF         \
-DENABLE_TAR_SHARED=OFF  \
-DENABLE_TEST=OFF        \
-DENABLE_XATTR=OFF       \
CMakeLists.txt


make
```


Explanations to the configuration:
* the first line is the CMake universal binary directive
* the second line is to ensure we do not link against third-party libs
* the third line is likewise to ensure we link against system libs
* the remaining lines are there to turn off support for all archive formats but
  zlib (which is thus not mentioned, thus enabled)


If you get a message:


```
In file included from /Users/sjur/Downloads/libarchive-master/libarchive/archive_pack_dev.c:64:
/Users/sjur/Downloads/libarchive-master/libarchive/archive_pack_dev.h:38: error: redefinition of typedef ‘u_long’
/usr/include/sys/types.h:88: error: previous declaration of ‘u_long’ was here
```


... edit the file libarchive/archive_pack_dev.h, and remove line 38.


Then `make` again. Finally:
```
sudo make install
```


# TinyXML2


[Download TinyXML2](https://github.com/leethomason/tinyxml2/archive/master.zip).
To configure, make and install, do:
```
cmake \
-DCMAKE_OSX_ARCHITECTURES=i386\;x86_64 \
CMakeLists.txt
make
sudo make install
```


# Hfst-Ospell


These are the `configure` and `make` commands needed to build
`hfst-ospell` with proper support for `zhfst` files. Both `tinyxml2` and
the custom `libarchive` are linked against, and the build is a universal
binary.


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig/ \
CPATH=/usr/local/include:/usr/include \
./configure \
	--enable-zhfst \
	--without-libxmlpp \
	--with-tinyxml2 \
	CXXFLAGS=" -arch i386 -arch x86_64" \
	CPPFLAGS="-I/usr/local/include" \
	CFLAGS="-I/usr/local/include \
		-L/usr/local/lib -isysroot \
		/Developer/SDKs/MacOSX10.6.sdk \
		-arch i386 -arch x86_64 \
		-mmacosx-version-min=10.6" \
	LDFLAGS=" -arch i386 -arch x86_64" \
	--enable-static \
	--disable-dependency-tracking


make CFLAGS="-I/usr/local/include -L/usr/local/lib \
	-isysroot /Developer/SDKs/MacOSX10.6.sdk \
	-arch i386 -arch x86_64 \
	-mmacosx-version-min=10.6" \
	LINK="gcc -framework CoreFoundation -framework Cocoa \
	-arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"


sudo make install
```


# VislCG3


These are the configure and build instructions for `vislcg3`.


```
sudo port install icu
svn co http://beta.visl.sdu.dk/svn/visl/tools/vislcg3/trunk vislcg3
cd vislcg3
./get-boost.sh
./cmake.sh -DCMAKE_OSX_ARCHITECTURES=i386\;x86_64
make
sudo make install
```


Comments:
* `boost` is installed locally to avoid external dependencies (but it looks
  like it is just a source code library anyway, which will be compiled with the
  rest of the vislcg3 code)
* `icu` is needed for Unicode support
* no further testing is done with `vislcg3` - the grammar checker was left out
  of the package for now. This also means that the actual list of dependent
  libraries is unknown (ie we don't know how much of `icu` is needed)


# Libvoikko


The libvoikko config and build instructions follow the same patterns as above:
```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig \
./configure \
	--enable-hfst \
	CXXFLAGS=" -arch i386 -arch x86_64" \
	CPPFLAGS="-I/usr/local/include" \
	CFLAGS="-I/usr/local/include -L/usr/local/lib \
		-isysroot /Developer/SDKs/MacOSX10.6.sdk \
		-arch i386 -arch x86_64 \
		-mmacosx-version-min=10.6" \
	LDFLAGS=" -arch i386 -arch x86_64" \
	--enable-static \
	--disable-dependency-tracking


make CFLAGS="-I/usr/local/include -L/usr/local/lib \
	-isysroot /Developer/SDKs/MacOSX10.6.sdk \
	-arch i386 -arch x86_64 \
	-mmacosx-version-min=10.6" \
	LINK="gcc -framework CoreFoundation -framework Cocoa \
	-arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"


sudo make install
```


# LibreOffice


Finally the last step - building the actual oxt! First, extract only the i386
part of the static libraries to a separate dir, here called `alibs/` in the
home dir. This will greatly reduce the size of the final oxt:


```
mkdir ~/alibs/
lipo /usr/local/lib/libarchive.a    -output alibs/libarchive.a    -extract i386 
lipo /usr/local/lib/libhfstospell.a -output alibs/libhfstospell.a -extract i386 
lipo /usr/local/lib/libtinyxml2.a   -output alibs/libtinyxml2.a   -extract i386 
lipo /usr/local/lib/libvoikko.a     -output alibs/libvoikko.a     -extract i386
```


To build the oxt, you need both LibreOffice and the LibreOffice SDK, and you
also need to prepare your environment:


* download and install [LibreOffice](https://www.libreoffice.org)
* download the LibreOffice SDK
* cd into the SDK dir
* run `perl ./configure.pl `hostname` `pwd``


Then, each time you want to compile again, you need to do the following:


```
$ source $HOSTNAME/setsdkenv_unix.sh"
```


Check out the [voikko-libreoffice](https://github.com/voikko/libreoffice-voikko)
project, and cd into it. There the Makefile needs a few changes. Specify
`STANDALONE_EXTENSION_PATH` as follows:


```
STANDALONE_EXTENSION_PATH=/Users/$USERNAME/Downloads/libreoffice-voikko-master/lib/voikko
```


and change the MacOSX part of the linking command towards the end to the
following:
```
ifeq "$(PLATFORM)" "macosx"
		$(LINK) $(COMP_LINK_FLAGS) $(LINK_LIBS) -o $@ $^ \
		$(CPPUHELPERLIB) $(CPPULIB) $(SALLIB) $(CPPUHELPERDYLIB) $(CPPUDYLIB) $(SALDYLIB) \
		-lz -lxml2 \
		/Users/$USERNAME/alibs/libvoikko.a \
		/Users/$USERNAME/alibs/libarchive.a \
		/Users/$USERNAME/alibs/libhfstospell.a \
		/Users/$USERNAME/alibs/libtinyxml2.a
		$(INSTALL_NAME_URELIBS)  $@
else
```


Finally, you need to create the following dirs for holding proofing tool files
in the final oxt (without the dirs, `make` will error out):


```
mkdir -p lib/voikko/2
mkdir -p lib/voikko/3
```


Comments to the changes and the oxt configuration:
* this is an "empty" oxt - there are no language tools preinstalled (they should
  go into the `2/` or `3/` dirs, if wanted)
* make sure to replace `$USERNAME` in the pathname and linking command above
  with the real account user name
* the `-lz` and `-lxml2` link directives are needed due to hfst-ospell
  dependencies (they are system libs, and do not need further treatment)


Lastly, build the oxt:
```
make oxt
```


With the new oxt available, test it on a couple of machines:
* install it
* install a couple of languages - for each language do: \\
  `./configure --with-hfst --enable-spellers` \\
  `make` \\
  `sudo make install`
* test the spellers to see that the oxt works properly
* if yes, copy the oxt to `$GTHOME/prooftools/toollibs/mac/voikko`, unzip and
  commit the modified files to svn


Now the new oxt is available as a template for language-specific oxt's.


## Universal binary OXT


To build the OXT as a universal binary, you first have to build a 64-bit
version of the OXT. Repeat the previous step with the following modifications:


* ensure you are using a 64-bit SDK coupled with a 64-bit LibreOffice
  installation
* ensure you are linking against 64-bit versions of the static libraries: you
  can extract the 64-bit portion of the universal binaries of the libraries with
  the following command:
  `lipo /usr/local/lib/libarchive.a    -output alibs/libarchive.a    -extract x86_64`


The rest of the build is the same.


When you have a 64-bit OXT, there are really only two small changes:


* merge voikko.dylib from both into a universal binary dylib using `lipo`
* merge `META-INF/manifest.xml` using a text editor


The `lipo` merge should be something like the following:


```
lipo -create 32-bit-voikko.dylib 64-bit-voikko.dylib -output universal-voikko.dylib
```


The `manifest.xml` file should contain two entries with platform info, one for
each supported platform:


```
  <manifest:file-entry
   manifest:media-type="application/vnd.sun.star.uno-components;platform=MacOSX_x86_64"
   manifest:full-path="voikko.components"/>
  <manifest:file-entry
   manifest:media-type="application/vnd.sun.star.uno-components;platform=MacOSX_x86"
   manifest:full-path="voikko.components"/>
```


Replace the old files with the new ones, and you should have a template for universal binary OXT's.
