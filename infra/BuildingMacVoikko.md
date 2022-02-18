# Building MacVoikko


```
$ git clone --recursive https://github.com/divvun/MacVoikko.git
$ cd MacVoikko
$ git submodule update --init --recursive
$ cd thirdparty/
$ ./build.sh # eller 'make'
$ cd ../
$ open MacVoikko.xcodeproj
```


For å oppdatera lokal kode i eiga grein frå hovudkjelda:
```
git merge upstream/master
```
(men sjekk
[GitHub-dokumentasjonen](https://help.github.com/articles/syncing-a-fork/) for detaljar)


For å opppdatera git-submodulane:


```
git submodule foreach git pull origin master
```


Byt til underkatalogen `thirdparty`, og bygg biblioteka der:


```
cd thirdparty
make
```


No kan du byta til morkatalogen igjen, og opna XCode-prosjektet i XCode:


```
cd ..
open MacVoikko.xcodeproj
```


Bygg (Cmd-B).


Sjekk elles informasjonen [her](https://github.com/divvun/MacVoikko)


Dersom du får ein haug med feilmeldingar om at mykje som er standard ikkje
kunne byggjast, sjekk at du har byggjeinnstillingane rett (i **Build Settings**):


**Apple LLVM 7.1 - Language - Modules > Enable Modules (C and objective c) > NO**


[images/XCode_build_settings.png]


Jf.
[http://stackoverflow.com/questions/25999754/could-not-build-module-foundation]


Dersom du får ein haug med feilmeldingar á la:


```
/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.12.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFDateFormatter.h:53:33: Missing ',' between enumerators
```


avsluttar du XCode, og slettar denne mappa:


```
rm -rf ~/Library/Developer/Xcode/DerivedData
```
