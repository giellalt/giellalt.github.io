To build, do as follows:


```
cd $GTHOME/keyboards
./autogen.sh
./configure
cd $GTLANG/mobile
make
```


To install on Android, first enable developer mode on your Android phone:


Then allow your computer to install software on the phone:


Finally, run the following command:
```
$ANDROID_SDK/platform-tools/adb install -r build/SamiIME-debug.apk
```


The underlying commands used by the build system:


```
$ python3.4 softkbdgen.py --target android project.yaml


$ python3.4 softkbdgen.py --target ios -r ../brendans-tasty-imitation-keyboard/ -b master project.yaml
```


Build and install on your own phone


BuildAndInstallOnYourOwnPhone.jspwiki
