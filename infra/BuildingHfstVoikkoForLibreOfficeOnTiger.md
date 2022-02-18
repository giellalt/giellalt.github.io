# Building HfstVoikko for LibreOffice on Tiger

Tiger is quite old...


## Tools


1. Install XCode (download [from
   Apple|https://connect.apple.com/cgi-bin/WebObjects/MemberSite.woa/wa/getSoftware?bundleID=19907]
  - free membership required)
1. Install [Macports](http://macports.org/) (select the precompiled Tiger binary/dmg)
1. Install the svn binary package from 
   [http://svnbinaries.open.collab.net/files/documents/153/2715/file_2715.dat/Subversion%201.6.6%20Universal.dmg] (available on the page [http://svnbinaries.open.collab.net/servlets/ProjectDocumentList?folderID=164&expandFolder=164&folderID=171])
1. Install the git binary package for Tiger from
   [http://metastatic.org/source/git-osx.html]


Remember to update your `$PATH` as stated in the README for the Git and
Subversion packages.


## Prerequisites


Then use MacPorts to install the following requirements.
First, install the apple-gcc42 as a regular install (no universal binary - ppc
isn't supported in the gcc code itself):
```
sudo port install apple-gcc42
```


Then install the following:
```
sudo port install pkgconfig +universal gettext +universal libxmlxx2 +universal libarchive +universal zlib +universal
```


Copy the following files from `/opt/local/lib/` to a new, local dir (here:
`/Users/$USER/alibs/`:


```
libarchive.a
libbz2.a
libcrypto.a
libiconv.a
liblzma.a
libxml2.a
libz.a
```


## Hfst-ospell


Check out the hfst-ospell code and cd into the hfst-ospell dir:


```
svn co svn://svn.code.sf.net/p/hfst/code/trunk/hfst-ospell
cd hfst-ospell
```


Then do the following (remember to adjust the path to the actual user):


```
./autogen.sh


CPATH=/opt/local/include:/usr/local/include:/usr/include \
	./configure CXXFLAGS=" -arch i386 -arch ppc -I/opt/local/include" \
	CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
	CFLAGS="-I/usr/local/include -I/opt/local/include -L/Users/$USER/alibs \
	-L/usr/local/lib -isysroot /Developer/SDKs/MacOSX10.4.sdk -arch i386 \
	-arch ppc -mmacosx-version-min=10.4" \
	LDFLAGS=" -arch i386 -arch ppc -L/Users/$USER/alibs" \
	--enable-static --disable-dependency-tracking --disable-shared


make CFLAGS="-I/usr/local/include -L/Users/$USER/alibs -L/usr/local/lib \
	-isysroot /Developer/SDKs/MacOSX10.4.sdk -arch i386 -arch ppc \
	-mmacosx-version-min=10.4" \
	LINK="gcc -framework CoreFoundation -framework Cocoa -arch i386 -arch ppc" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"


sudo make install
```


and finally copy the static library to the alibs dir:


```
cp .libs/libhfstospell.a ../alibs/
```




## Libvoikko


Check out the source code, cd into it, and prepare configuration:


```
git clone git://github.com/voikko/corevoikko.git
cd corevoikko/libvoikko
./autogen.sh
```


Configure and build as follows:


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig/ ./configure \
	CXXFLAGS=" -arch i386 -arch ppc" \
	CPPFLAGS="-I/usr/local/include -I/usr/include -L/Users/adminis/alibs" \
	CFLAGS="-I/usr/local/include -I/usr/include -L/Users/adminis/alibs -isysroot \
	/Developer/SDKs/MacOSX10.4.sdk -arch i386 -arch ppc -mmacosx-version-min=10.4" \
	LDFLAGS=" -arch i386 -arch ppc" \
	--enable-static --disable-dependency-tracking --enable-hfst --disable-shared


make CFLAGS="-I/usr/local/include -I/usr/include -L/Users/adminis/alibs -isysroot \
	/Developer/SDKs/MacOSX10.4.sdk -arch i386 -arch ppc -mmacosx-version-min=10.4" \
	LINK="gcc -framework CoreFoundation -framework Cocoa  -arch i386 -arch ppc" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"


sudo make install
```


## LibreOffice Voikko Plugin


Follow the instructions to set up the [LibreOffice SDK](http://www.libreoffice.org/download).


Check out the libreoffice voikko plugin code:


```
git clone git://github.com/voikko/libreoffice-voikko.git
```


Inside the `libreoffice-voikko` dir, create the following dir tree:


```
extras/2/
       3/
```


There is no need for any files within this dir tree.


Edit the Makefile as follows:
* `LIBVOIKKO_PATH=/Users/$USER/alibs` (replace $USER)
* `STANDALONE_EXTENSION_PATH=extras`


Then just run `make` - and see that the compilation fails with lots of linking
errors. Possibly the linking warnings re dynamic libs can be ignored, but the
unknown symbols from the static libraries must be fixed. That means adding a
couple of more static libraries to the `alibs/` dir.


Copy `libintl` and `libsigc` from MacPorts:
```
cp /opt/local/lib/libintl.a ~/alibs/
cp /opt/local/lib/libsigc-2.0.a ~/alibs/
```


Two libraries are not available as static libraries via MacPorts, and must be
downloaded and built manually as static libraries:


* `glibmm-2.36.2`:
  [http://linux.softpedia.com/progDownload/glibmm-Download-15125.html]
* `libxml++`:
  [http://ftp.gnome.org/pub/GNOME/sources/libxml++/2.36/]


Configure and make as follows to build them as static libraries with both x86
and ppc architectures in a universal binary:


```
./configure \
CXXFLAGS=" -arch i386 -arch ppc" \
CFLAGS=" -isysroot /Developer/SDKs/MacOSX10.4.sdk \
-arch i386 -arch ppc -mmacosx-version-min=10.4" \
LDFLAGS=" -arch i386 -arch ppc" \
--enable-static --disable-dependency-tracking --disable-shared


make \
CFLAGS=" -isysroot /Developer/SDKs/MacOSX10.4.sdk \
-arch i386 -arch ppc -mmacosx-version-min=10.4" \
LINK="gcc -framework CoreFoundation -framework Cocoa  -arch i386 -arch ppc" \
LDFLAGS="-framework CoreFoundation -framework Cocoa"
```


Finally copy the static libraries to `alibs/` from their respective source dirs:
```
cp gio/giomm/.libs/libgiomm-2.4.a ../../alibs/
cp glib/glibmm/.libs/libglibmm-2.4.a ../../alibs/
cp ./libxml++/.libs/libxml++-2.6.a ../../alibs/
```


Now we are ready to adjust the last part of the Makefile:


```
ifeq "$(PLATFORM)" "macosx"
		$(LINK) $(COMP_LINK_FLAGS) $(LINK_LIBS) \
		-framework CoreFoundation -framework Cocoa \
		-o $@ $^ \
		$(CPPUHELPERLIB) $(CPPULIB) $(SALLIB) \
		-Wl,-dylib_file,@loader_path/libuno_cppuhelpergcc3.dylib.3:'/Applications/LibreOffice.app/Contents/ure-link/lib/libuno_cppuhelpergcc3.dylib.3' \
		-Wl,-dylib_file,@loader_path/libuno_cppu.dylib.3:'/Applications/LibreOffice.app/Contents/ure-link/lib/libuno_cppu.dylib.3' \
		-Wl,-dylib_file,@loader_path/libuno_sal.dylib.3:'/Applications/LibreOffice.app/Contents/ure-link/lib/libuno_sal.dylib.3' \
		-Wl,-dylib_file,@loader_path/libreg.dylib.3:'/Applications/LibreOffice.app/Contents/ure-link/lib/libreg.dylib.3' \
		-Wl,-dylib_file,@loader_path/libuno_salhelpergcc3.dylib.3:'/Applications/LibreOffice.app/Contents/ure-link/lib/libuno_salhelpergcc3.dylib.3' \
		-Wl,-dylib_file,@loader_path/libxmlreader.dylib:'/Applications/LibreOffice.app/Contents/ure-link/lib/libxmlreader.dylib' \
		/Users/$USER/alibs/libvoikko.a     \
		/Users/$USER/alibs/libhfstospell.a \
		/Users/$USER/alibs/libarchive.a    \
		/Users/$USER/alibs/libbz2.a        \
		/Users/$USER/alibs/libcrypto.a     \
		/Users/$USER/alibs/libgiomm-2.4.a  \
		/Users/$USER/alibs/libglib-2.0.a   \
		/Users/$USER/alibs/libglibmm-2.4.a \
		/Users/$USER/alibs/libiconv.a      \
		/Users/$USER/alibs/libintl.a       \
		/Users/$USER/alibs/liblzma.a       \
		/Users/$USER/alibs/libsigc-2.0.a   \
		/Users/$USER/alibs/libxml2.a       \
		/Users/$USER/alibs/libxml++-2.6.a  \
		/Users/$USER/alibs/libz.a
		$(INSTALL_NAME_URELIBS)  $@
else
```


The core of the changes is the following:
* add `-framework CoreFoundation -framework Cocoa` to link agains the core
  system frameworks (otherwise there will be unknown symbols from the OS)
* add one `-Wl,-dylib_file,@loader_path/...` for each LibreOffice dylib linked
  to - the above list covers LO 4.0, other versions (and OpenOffice) may require
  a slightly different list
* remove the variables `$(CPPUHELPERDYLIB) $(CPPUDYLIB) $(SALDYLIB)` to ensure
  that we don't link using non-working calls to the dynamic libraries
* remove the steps to build `build/voikko.map` and remove the inclusion of it
  in the linking command
* remember to replace `$USER` above with the real user account short-name!


NOW - finally - you can run `make oxt` and you will get a statically linked
LibreOffice extension for the Voikko speller *with* enabled support for
`zhfst` files.


Install the plugin, and all languages in the new infra will be available as
spellers with just two simple commands:


* `make`
* `sudo make install`


Enjoy!
