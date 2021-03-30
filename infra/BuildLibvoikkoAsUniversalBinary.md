# Build libvoikko as a dynamic universal binary with hfst support


## MacOSX 10.6
```
# LibVoikko, working univ. binary + hfst  configure:
./configure CXXFLAGS=" -arch i386 -arch x86_64" CPPFLAGS="-I/usr/local/include" \
	CFLAGS="-I/usr/local/include -L/usr/local/lib -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 \
	-mmacosx-version-min=10.5" LDFLAGS=" -arch i386 -arch x86_64" \
	--enable-static --disable-dependency-tracking --enable-hfst


# Libvoikko, working univ. binary + hfst make:
make CFLAGS="-I/usr/local/include -L/usr/local/lib -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LINK="gcc -framework CoreFoundation -framework Cocoa  -arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"


# Finally install the binaries:
sudo make install CFLAGS="-I/usr/local/include -L/usr/local/lib -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LINK="gcc -framework CoreFoundation -framework Cocoa  -arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"
```


Now you should have in `/usr/local/lib/` a file named `libvoikko.1.dylib` as a universal library including hfst support. This is the last step before making the `VoikkoSpellService` component, giving system-wide Voikko spellers.


## MacOSX 10.8 + XCode 5 & grammar checker enabled


Prerequisites:
* newest [hfst-ospell](BuildingHfst-ospellForInclusionInVoikko.html) from `svn`
* newest [vislcg3](/tools/docu-vislcg3.html) from `svn`
* very newest master branch of libvoikko


```
PKG_CONFIG_PATH=/usr/local/lib/pkgconfig ./configure --enable-hfst --enable-vislcg3 CC=llvm-gcc
make CXXFLAGS="-Qunused-arguments $CXXFLAGS" CFLAGS="-Qunused-arguments $CFLAGS"
```


**NB!** This is work in progress, and the code might crash, it might not build,
etc. Don't be surprised, but inform the developers about the issues so they can
be fixed.


# Build libvoikko as a static universal binary with hfst support


## MacOSX 10.6
Building `libvoikko` as a **static** library follows the same outline as for
[hfst-ospell](BuildingHfst-ospellForInclusionInVoikko.html). The details are as follows:


```
./configure CXXFLAGS=" -arch i386 -arch x86_64" \
	CPPFLAGS="-I/usr/local/include -L/Users/sjur/alibs" \
	CFLAGS="-I/usr/local/include -L/Users/sjur/alibs -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LDFLAGS=" -arch i386 -arch x86_64" \
	--enable-static --disable-dependency-tracking --enable-hfst --disable-shared
```


Then `make`:


```
make CFLAGS="-I/usr/local/include -L/Users/sjur/alibs -isysroot \
	/Developer/SDKs/MacOSX10.5.sdk -arch i386 -arch x86_64 -mmacosx-version-min=10.5" \
	LINK="gcc -framework CoreFoundation -framework Cocoa  -arch i386 -arch x86_64" \
	LDFLAGS="-framework CoreFoundation -framework Cocoa"
```


And finally `make install`:


```
sudo make install ... [the rest as above]
```




## MacOSX 10.8


The `./configure` step:
```
./configure CXXFLAGS=" -arch i386 -arch x86_64" \
            CPPFLAGS="-I/usr/local/include" \
            CFLAGS="-I/usr/local/include -L/usr/local/lib -L/Users/USERNAME/alibs \
                    -lhfstospell \
                    -larchive -lbz2 -lcrypto -liconv -llzma -lz -lxml2 \
                    -lxml++-2.6 -lglib-2.0 -lgiomm-2.4 -lglibmm-2.4 -lsigc-2.0 \
                    -lintl \
                    -isysroot \
/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.7.sdk \
                    -arch i386 -arch x86_64 -mmacosx-version-min=10.7" \
            LDFLAGS=" -arch i386 -arch x86_64" \
            --enable-static \
            --disable-dependency-tracking \
            --enable-hfst \
            HFSTOSPELL_CFLAGS=" -I/usr/local/include" \
            HFSTOSPELL_LIBS=" -L/Users/USERNAME/alibs \
                            -lhfstospell -lxml2 -larchive -lbz2 -lcrypto \
                            -liconv -llzma -lxml++-2.6 -lz -lglib-2.0 \
                            -lgiomm-2.4 -lglibmm-2.4 -lsigc-2.0 -lintl"
```


The `make` step:
```
make CXXFLAGS=" -arch i386 -arch x86_64" \
     CPPFLAGS="-I/usr/local/include" \
     CFLAGS="-I/usr/local/include -L/usr/local/lib -L/Users/smo036/alibs \
            -lhfstospell -larchive -lbz2 -lcrypto -liconv -llzma -lxml++-2.6 \
            -lz -lglib-2.0 -lgiomm-2.4 -lglibmm-2.4 -lsigc-2.0 -lintl \
            -isysroot
/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.7.sdk \
            -arch i386 -arch x86_64 -mmacosx-version-min=10.7" \
     LDFLAGS=" -arch i386 -arch x86_64 \
                -framework CoreFoundation -framework Cocoa"
```


# Final step


Copy the resulting `/usr/local/lib/libvoikko.a` to the same static library dir
we made above (`/Users/USERNAME/alibs/`).
