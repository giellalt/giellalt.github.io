# Build Libvoikko gramamrchecker for Macos 10.9

Vegen frå enkeltkomponentar fram til Voikko-tillegg for MacOSX 10.9.


You need:
* libarchive with only zlib support
* tinyxml2++
* hfst-ospell
* vislcg3
* libvoikko
* voikko-libreoffice


All but the last one should be built as a universal binary. The last one will
automatically only be built for the i386 architecture.


# Dynamically linked - only local computer


Use latest available source of everything.


## libarchive with only zlib support


```
./configure --without-xml2 --without-nettle --without-bz2lib --without-lzo2 \
            --without-lzma --without-iconv \
            CXXFLAGS=" -arch i386 -arch x86_64" \
            CPPFLAGS="-I/usr/local/include" \
            CFLAGS="-I/usr/local/include -L/usr/local/lib \
                    -arch i386 -arch x86_64"
            LDFLAGS=" -arch i386 -arch x86_64"


make CXXFLAGS=" -arch i386 -arch x86_64" \
     CPPFLAGS="-I/usr/local/include" \
     CFLAGS="-I/usr/local/include -L/usr/local/lib -arch i386 -arch x86_64" \
     LDFLAGS=" -arch i386 -arch x86_64 \
               -framework CoreFoundation -framework Cocoa"
```


## tinyxml2++


```
cmake -DCMAKE_OSX_ARCHITECTURES=i386\;x86_64 CMakeLists.txt
make
```


## hfst-ospell


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:/opt/local/lib/pkgconfig \
CPATH=/opt/local/include:/usr/local/include:/usr/include \
./configure --enable-zhfst --enable-xml=tinyxml2 \
            CXXFLAGS=" -arch i386 -arch x86_64 -I/opt/local/include" \
            CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
            CFLAGS="-I/usr/local/include -I/opt/local/include \
                    -L/usr/local/lib -L/opt/local/lib \
                    -arch i386 -arch x86_64" \
            LDFLAGS=" -arch i386 -arch x86_64 -L/opt/local/lib"


make CFLAGS="-I/usr/local/include -L/usr/local/lib -arch i386 -arch x86_64" \
     LINK="gcc -framework CoreFoundation -framework Cocoa \
               -arch i386 -arch x86_64" \
     LDFLAGS="-framework CoreFoundation -framework Cocoa"
```


## vislcg3


```
CMAKE_OSX_ARCHITECTURES=i386\;x86_64 ./cmake.sh
make -j3
```


(many warnings, no errors)


## Libvoikko


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:/opt/local/lib/pkgconfig \
./configure CXXFLAGS=" -arch i386 -arch x86_64" \
            CPPFLAGS="-I/usr/local/include" \
            CFLAGS="-I/usr/local/include -L/usr/local/lib \
                    -arch i386 -arch x86_64" \
            LDFLAGS=" -arch i386 -arch x86_64 -stdlib=libstdc++" \
            --enable-hfst \
            --enable-vislcg3 \
            HFSTOSPELL_CFLAGS=" -I/usr/local/include"


make CXXFLAGS=" -arch i386 -arch x86_64" \
     CPPFLAGS="-I/usr/local/include -I/opt/local/include" \
     CFLAGS="-I/usr/local/include -I/opt/local/include \
             -L/usr/local/lib -L/opt/local/lib 
             -arch i386 -arch x86_64 " \
     LDFLAGS=" -L/opt/local/lib -L/usr/local/lib -arch i386 -arch x86_64 \
               -framework CoreFoundation -framework Cocoa \
               -stdlib=libc++ $LDFLAGS"
```


## voikko-libreoffice


Edit the Makefile as follows, lines 242-243:
* comment out the line
  `cat $(PRJ)/settings/component.uno.map > build/voikko.map`
* remove `build/voikko.map` from the linking command on the next line
* also possibly set the following: `VOIKKO_DEBUG=YES` (line 32)


```
make oxt
```


Now you have the oxt. All you need now is the grammar checker source files in
the correct location:


## Grammar checker files


Installation is manual for now. Here are the steps:


1. `cd $GTHOME/langs/sme`
1. `mkdir -p ~/.voikko/4/se-x-standard/`
1. `cp -f src/analyser-gt-desc.hfst                  ~/.voikko/4/se-x-standard`
1. `cp -f tools/grammarcheckers/errors.xml           ~/.voikko/4/se-x-standard`
1. `cp -f tools/grammarcheckers/gramchk.bin          ~/.voikko/4/se-x-standard`
1. `cp -f tools/spellcheckers/fstbased/hfst/se.zhfst ~/.voikko/4/se-x-standard`


Remove ref and example elements from the copied `errors.xml`.


Install the oxt in LibreOffice, open a new document and type some North Sámi
text, and see the blue lines across the page!


# Statically linked - for distribution


TBW.
