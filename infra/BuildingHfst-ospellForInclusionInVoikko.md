# Building hfst-ospell for inclusion in Voikko

If you want to build hfst-ospell for inclusion in libvoikko (for further inclusions in the different packages of Voikko, like the LibreOffice-Voikko extension) the MacOSX systems, you should build your binary as a universal binary, and most likely as a *static* universal binary (required at least for the LibreOffice-Voikko extension). The MacOSX Voikko system speller should only need the dynamic libraries.


You also need to ensure backwards compatibility, which means that you most likely will have to build on a system with the minimum OS version you want to support. Apple's SDK's are mostly not backwards compatible, but usually forward compatible.


# Build hfst-ospell as a universal binary


Configure and make `hfst-ospell` using the following options (the text is linewrapped here for readability, all commands should be on one line). Choose the description suitable for your OS version:


## Snow Leopard or earlier(?) (≤ 10.6) build


OSX 10.6 and earlier require newer versions of `automake` and `autoconf` than provided by the system. Ensure you have MacPorts installed, then do the following:


```
sudo port install automake autoconf flex bison libtool pkgconfig
```


To reduce the number of dependencies, we build libarchive with as few dependencies as possible. To do this, do as follows:


* download [https://github.com/libarchive/libarchive/archive/v3.1.2.zip]
* unzip
* install `cmake`: `sudo port install cmake`
* configure and build as this:


```
./build/autogen.sh
# If the previous step fails, try:
autoreconf -i -v
./configure --without-xml2 --without-nettle --without-bz2lib --without-lzo2 --without-lzma --without-iconv
make
sudo make install
```


This leaves us with only one external dependency: zlib. This library is also
pretty standard, and can be assumed available on all systems(?).
to enable x386 binaries, but this is a start.


Another heap of dependencies comes with `libxml2++`, which can now be replaced
by [TinyXML2](http://www.grinninglizard.com/tinyxml2/). Do as follows:


* [Download TinyXML2](https://github.com/leethomason/tinyxml2/archive/master.zip)
* configure, build and install (requires cmake):


```
cd Downloads/tinyxml2-master/
cmake CMakeLists.txt
make
sudo make install
```


Now start to build hfst-ospell. The simple configuration (test this first):


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig/ ./configure --enable-zhfst --enable-xml=tinyxml2
```


If this works – and the freshly installed hfst-ospell works – then start over
with a more complex configuration, to get proper support for x386:


```
# If you have run make before, run make distclean just to ensure you
# start from scratch:
make distclean


# HFST-ospell, working univ. binary config:
CPATH=/opt/local/include:/usr/local/include:/usr/include \
	./configure --enable-zhfst --enable-xml=tinyxml2 \
	CXXFLAGS=" -arch i386 -arch x86_64 -I/opt/local/include" \
	CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
	CFLAGS="-I/usr/local/include -I/opt/local/include \
		-L/usr/local/lib -L/opt/local/lib -isysroot \
		/Developer/SDKs/MacOSX10.5.sdk \
		-arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LDFLAGS=" -arch i386 -arch x86_64 -L/opt/local/lib" \
	--enable-static \
	--disable-dependency-tracking \
	--disable-shared


# HFST-ospell, working univ. binary make:
make CFLAGS="-I/usr/local/include -L/usr/local/lib -isysroot /Developer/SDKs/MacOSX10.5.sdk \
	-arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LINK="gcc -framework CoreFoundation -framework Cocoa -arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"


# Finaly, install the binaries:
sudo make install CFLAGS="-I/usr/local/include -L/usr/local/lib -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LINK="gcc -framework CoreFoundation -framework Cocoa -arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"
```


It is possible that these can be simplified a bit, but at least they work. Please note that `--disable-dependency-tracking` is **required** when configuring for a universal binary!


## Lion (= 10.7) build


The XCode development tool, libraries etc was moved in Lion, thus the SDK path has to be changed for the build to work. In addition, the lowest OS version supported is 10.6. The updated configure command looks like the following:


```
CPATH=/opt/local/include:/usr/local/include:/usr/include ./configure --enable-zhfst \
	CXXFLAGS=" -arch i386 -arch x86_64 -I/opt/local/include" \
	CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
	CFLAGS="-I/usr/local/include -I/opt/local/include \
		-L/usr/local/lib -L/opt/local/lib -lstdc++-static -isysroot \
		/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.6.sdk \
		-arch i386 -arch x86_64 -mmacosx-version-min=10.6" \
	LDFLAGS=" -arch i386 -arch x86_64 -L/opt/local/lib" \
	--enable-static \
	--disable-dependency-tracking \
	--disable-shared
```


Similar changes need to be made to the make command.


## Mountain Lion (= 10.8) build


There are stricter rules for building static libraries under 10.8: minimum system version must be 10.7, and no static linking of core libraries. The updated configure command looks like the following:


```
CPATH=/opt/local/include:/usr/local/include:/usr/include ./configure --enable-zhfst \
	CXXFLAGS=" -arch i386 -arch x86_64 -I/opt/local/include" \
	CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
	CFLAGS="-I/usr/local/include -I/opt/local/include \
	-L/usr/local/lib -L/opt/local/lib -isysroot \
	/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.7.sdk \
	-arch i386 -arch x86_64 -mmacosx-version-min=10.7" \
	LDFLAGS=" -arch i386 -arch x86_64 -L/opt/local/lib" \
	--enable-static \
	--disable-dependency-tracking \
	--disable-shared
```


Similar changes need to be made to the make command.


## Maverick / 10.9 build


By default, only backwards compatible with 10.8. The following is for dynamic libs only. Configuration:
```
CPATH=/opt/local/include:/usr/local/include:/usr/include \
./configure --enable-zhfst \
	CXXFLAGS=" -arch i386 -arch x86_64 -I/opt/local/include" \
	CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
	CFLAGS="-I/usr/local/include -I/opt/local/include \
	-L/usr/local/lib -L/opt/local/lib -isysroot \
	/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.8.sdk \
	-arch i386 -arch x86_64 -mmacosx-version-min=10.8" \
	LDFLAGS=" -arch i386 -arch x86_64 -L/opt/local/lib" \
	--disable-dependency-tracking
```


Make:
```
```


# Build hfst-ospell as a STATIC universal binary


If you want to build `hfst-ospell` as a **static** library (e.g. as part of another component made for external distribution), there are a couple of changes. First, copy the following files to a separate dir (I have used `/Users/USERNAME/alibs/`):


```
libarchive.a
libbz2.a
libcrypto.a
libiconv.a
liblzma.a
libxml2.a
libz.a
```


Then configure it as follows:


```
CPATH=/opt/local/include:/usr/local/include:/usr/include \
	./configure --enable-zhfst \
	CXXFLAGS=" -arch i386 -arch x86_64 -I/opt/local/include" \
	CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
	CFLAGS="-I/usr/local/include -I/opt/local/include -L/Users/USERNAME/alibs \
	-L/usr/local/lib -isysroot /Developer/SDKs/MacOSX10.5.sdk -arch i386 \
	-arch x86_64 -mmacosx-version-min=10.5" \
	LDFLAGS=" -arch i386 -arch x86_64 -L/Users/USERNAME/alibs" \
	--enable-static --disable-dependency-tracking --disable-shared
```


The essential point here is that the library flag `-L` now points to the separate dir we just made. This is required to force OSX to use static libraries when linking - if both a static and a dynamic version of a library is found in the same dir, OSX will *always* prefer the dynamic one. Hence the separate dir.


The `make` command line is modified in the same way:


```
make CFLAGS="-I/usr/local/include -L/Users/USERNAME/alibs -L/usr/local/lib -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LINK="gcc -framework CoreFoundation -framework Cocoa -arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"
```


Finally install this using the same `make` command as we just used, but add `sudo` and `install`:


```
sudo make install ... [the rest as above]
```


When done, you should have a freshly compiled and installed file `/usr/local/lib/libhfstospell.a`. Copy it to the same library dir we made above, together with the rest of the library files (in my case `/Users/USERNAME/alibs/`).
