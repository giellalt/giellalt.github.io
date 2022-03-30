# Lion installation notes


1. made a bootable backup partition of the old system disk
1. reformatted the old system disk
1. the system disk and the backup partition had the same name, this caused the Lion installer to not find any of them!
1. had to boot the computer from another Mac in target disk mode under Snow Leopard, and reformat the system disk with another name
1. after the renaming installation went smooth
1. copied system preferences, applications and the admin user, nothing more


# Xcode installation


Xcode for Lion needs to be "bought" from the Mac App Store (store application is included in Lion). The tool is free, but requires an AppleID/iTunes account, which usually requires a credit card associated with it. But there are ways to set up an iTunes account without specifying a credit card, search the Internet for more info.


With a working iTunes account (with or without credit card info), just install the free Xcode application from the Mac App Store.


After installation, zero or more of the following steps might be necessary:
1. install the command line tools by opening Xcode, and go to the menu:
  **Xcode > Preferences… > Downloads**, and intall the command-line tools
      1. please note that the command line tools are already on your machine, and might not need to be installed explicitly - test before you install!
2. use `xcode-select` to set the path to the Xcode installation (requires root
  power=sudo):
  `sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer`


## MacPorts additions


If you are upgrading from earlier OSX installations, and have an old MacPorts installation (most likely if you have done work with our languages earlier), you also need to do the following:


1. update macports to the latest version: `sudo port selfupdate`
1. run the MacPorts migration described [here](https://trac.macports.org/wiki/Migration) to reinstall all ports. This is painful but required to get back to a working state.


Further discussion and details can be found in the discussion [here](http://stackoverflow.com/questions/9323738/unable-to-get-macport-functionality-after-installing-xcode-4-3).


# Language-related observations


* many more languages are now recognised by the system, but still only one Saami language; this means that Lule and South Saami web pages are STILL NOT recognised/-able by e.g. the Safari browser
* also a number of new keyboards
* a large number of new synthetic voices for many languages, including all Nordic majority languages. Installed on demand if you turn on the voices (System preferences > Speech > Text-to-speech, click the System Voice menu, and select the last menu item "Customize", then select the voices you would like to install or use)
* the dictionary application has been given a slight interface update, with possible hits listed in a column on the left hand side of the window.
** for the japanese dictionaries, one can choose vertical layout, which will not only give top-to-bottom vertical layout, but also right-to-left orientation of the text segments: the japanese headword is in boldface as a vertical column to the very right in the window :D (try looking up "英和" to test)
** the SMA•NOB dictionary i have installed doesn't seem fully compatible with the new version of the dictionary application - at least no articles are displayed, only the headwords are listed as I search, *if I have selected all dictionaries*. If I select only the dictionary in which the entry is defined, everything is displayed just fine. The same problem is present also in the FKV•NOB dictionary, but not in the SME•NOB dictionary. This was tested with "Åarjelsaemien-daaroen digibaakoeh 1.2" and "Kvensk-Norsk testordbok (versjon 31.01.2010)".
