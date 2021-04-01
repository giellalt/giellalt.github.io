Getting Started With Keyboard Development
=========


Below is a short description of what you need to install to be able to work with
the keyboard build system. We assume that you have already installed
[the packages needed for general linguistic work](../infra/GettingStarted.html).


# Preparations


## General
```
sudo pip-3.5 install lxml PyICU PyYAML
```


If you have *NOT* installed the other packages (e.g. if you are **only**
interested in keyboards), the following is the minimum you need on OSX (on other
systems, install the same packages using the preferred package manager):


```
sudo port install autoconf automake libtool pkgconfig \
     imagemagick apache-ant python35 py35-pip


sudo port select --set python3 python35


sudo pip-3.5 install lxml PyICU PyYAML
```


Also, it is a good idea to set up
[your signing environment](../infra/system/SettingUpSigningCertificates.html).


## Getting the source code


All keyboard code is now moved to [github](https://github.com/giellalt), and each
language has its own repository. Find the language you want to work with, and check it
out using either git or svn.


**NB!** The whole keyboard infrastructure is changing at the moment, as the keyboard
compiler tool ([kbdgen](https://github.com/divvun/kbdgen)) is being reworked to support
a cleaner keyboard resource layout. There might be surprises.


# Introduction


There is an overview of the basic concepts on
[this page](https://github.com/divvun/kbdgen/blob/master/doc/concepts.md).


# Desktop keyboards


It is pretty simple:
* edit `xxx.yaml`
* run `make`


where `xxx` is the language code of the language you want. `xxx` can also be
a longer name - it is possible to have multiple keyboards for the same project.


The `make` command produces several output files:


* `doc/xxx_keyboards.svg` - graphical overview of the layout
* `linux/hdn_keyboard.*` - linux files (needs to be merged with the rest of
  the keyboard subsystem, should be done once when the keyboard design is settled
* `macos/xxx_keyboard.*` - installation package (and source bundle) for macOS,
  ready to be installed
* `win/kbdxxxxx.klc` - source file for [MS Keyboard Layout
  Creator|https://www.microsoft.com/en-us/download/details.aspx?id=22339].
  Open the file in that app, and create an installer by selecting the menu
  **Project > Build DDL and Setup Package**


Things to consider/change:
* in `project.yaml`:
** name and description at least in English and the target language
** name of icon file (any `png` file will do)
** list the names of all yaml files (without the `.yaml` extension) under the
   `layouts:` key, separate with comma if you have several
** also change `author`, `e-mail`, `copyright` etc to your likings
* in the `xxx.yaml` file(s):
** add display names in the relevant languages
*** for languages with only an `ISO-639-3` code, consider adding the nearest
    `ISO-639-2` or `ISO-639-1` code (even if it is a macro-language code),
    this will help in getting the keyboard(s) better integrated into the host OS
    as many of the OS's don't a thing about `ISO-639-3` languages. The broader
    language code should be used instead of the correct code for the attribute
    `locale:` in the layout file. If you stick to the correct code, the end
    users will most likely only see the language code instead of a relevant
    language name.


## Technical documentation


The core component/tool for building keyboards is `kbdgen`, a Python script
that converts the yaml keyboard descriptors into actual keyboard files. The
[Github repo](https://github.com/divvun/kbdgen) contains the source code, and
[reference technical documentation](https://divvun.github.io/kbdgen/) is also
available.


Further notes:


### macOS


You can add a README file and a License file, as well as a background image for
the installer package. Supported file formats are:


* documents: `txt,html,rtf`
* images: `background` + `.jpg,.png`


Valid filenames for the documentation are: `readme`, `welcome`, `license`,
and `conclusion`. All filenames can be capitalised.


To make the files be used by the package builder, add a `resources:`key to
your `project.yaml` file under `targets:` like this:


```
targets:
  osx:
    packageId: no.uit.giella.keyboards.smj
    version: 0.1.0
    bundleName: *bundleName
    icon: icon.png
    resources: doc
```


The string `doc` in the example above is the name of a directory containing
the files you want included in the installer. They will be picked up
automatically given they follow the naming conventions described above.


**NB!** When using `html` as the file format, make sure you **do not** include
an xml header as the first line of text in the html file. That will cause the
file to be read as text, with all tags visible.


### Windows


With recent changes to the keyboard generation tool `kbdgen`, one can actually
build the final Windows installer in macOS or Linux. To do this, one has to run
the following setup sequence:


1. install [Wine](https://www.winehq.org/download) - ensure that you choose the
  latest devel version, only `wine-2.10` is known to work.
1. install [Winetricks](https://wiki.winehq.org/Winetricks)


Add the bin dir of Wine to your `$PATH`, and make sure that also `winetricks`
(a shell script) is available in the `$PATH`. **Close the terminal window**
and open a new one before continuing.


Next, you need to install further tools, most easily done by running the
following shell script (copy and paste into a suitable file, and make it
executable):


```
#!/bin/sh


export WINEARCH="win32"
if [ -z "$WINEPREFIX" ]; then
    export WINEPREFIX="$HOME/.wine"
fi


INNO=http://www.jrsoftware.org/download.php/is-unicode.exe
MSKLC=https://download.microsoft.com/download/1/1/8/118aedd2-152c-453f-bac9-5dd8fb310870/MSKLC.exe


echo "Getting Inno Setup…"
curl -OL "$INNO"


echo "Getting MSKLC…"
curl -O "$MSKLC"


echo "Installing dotnet20 with winetricks…"
winetricks -q dotnet20


echo "Installing MSKLC…"
unzip -o `basename $MSKLC`
msiexec /i MSKLC.msi /passive


echo "Installing Inno Setup…"
wine `basename $INNO` /SILENT




echo "Done!"
echo
echo "You will want to put the following in your .profile or a script you source before running kbdgen:"
echo
echo "export WINEARCH=\"win32\""
echo "export WINEPREFIX=\"$WINEPREFIX\""
echo "export INNO_PATH=\"\$WINEPREFIX/drive_c/Program Files/Inno Setup 5\""
echo "export MSKLC_PATH=\"\$WINEPREFIX/drive_c/Program Files/Microsoft Keyboard Layout Creator 1.4\""
```


After having saved the script and made it executable, run it, and follow the
instructions printed at the end of how to install the remaining dependencies.


Finally, you need to add a real `uuid` for each language. Run the command:


```
uuidgen
```


and paste the generated `uuid` in the `project.yaml` file under
`targets: win: uuid:`. Now you are ready to run
`make win`, and get a working installer. If no installer is built, uncomment
the `RELEASE` variable in `Makefile.am`.


In some cases, especially the Sámi languages, one has to add a locale
specification for Windows containing the Script system being used. That is, for
each layout file, you also need to add something like the following:


```
targets:
  win:
    locale: sma-Latn-NO
```


Repeat for all layout files. If not added, the keyboard won't integrate properly
with Windows. Identifying which languages will need such a specification is a
feature that will be added in the near future.


## Making a draft layout


Desktop keyboards are relatively complex things, and to get a head start, and at
the same time ensure that one is as close as possible to the majority language
keyboard that the users are accustomed to, one should create a draft keyboard
layout based on data from
[CLDR](http://www.unicode.org/cldr/charts/latest/keyboards/layouts/index.html).
The command is:


```
make draft XML_SRC=xx
```


where `xx` is either a two-letter language code, or the full filename +
platform string in the format `platform/filename`. If you don't know what
to put there, just leave out the `xx`, and you will be given a list of all
the alternatives. The two-letter language code will give you a macOS-based draft
keyboard layout. If you want to draft for another platform, you need the full
`platform/filename` specification.


## Compatibility notes


See the note above on the use of language codes for best compatibility with
Windows and macOS.


### Windows


The generated keyboard (using the linked MS Keyboard Layout Creator (see above)
can only be guaranteed to work with Windows 7 and newer. This is especially true
for languages with language codes only in `ISO 639-3`. The keyboard is
compatible with Windows 10.


### macOS


The keyboard package is compatible with most versions of macOS, going back all
the way to macOS version 10.2 (Jaguar).


### Linux


The generated code is directly compatible with existing code, but must be merged
with it. One should develop the keyboard using the other OS's, and only when one
is done with the keyboard layout should one submit the code for inclusion in the
Linux keyboard driver code.


# Mobile keyboard apps


The mobile keyboards have more dependencies, documentation is linked below. They
also differ from desktop keyboards in that the keyboards are full-blown apps,
and you need all the machinery to build and distribute apps through the relevant
stores. The desktop keyboards are less appy, mostly just plain text files (with
Windows keyboards as an exception).


## iOS build instructions


* follow instructions at [https://github.com/divvun/kbdgen/blob/master/doc/targets/ios.md]
* follow the instructions [here](../infra/system/SettingUpSigningCertificates.html) to get your signing identity
* `make ios`


This is not enough, more instructions to come.


## Android build instructions


* follow instructions at [https://github.com/divvun/kbdgen/blob/master/doc/targets/android.md]
* check out $GTPRIV
* define $GTPRIV
* define KEY_PW and STORE_PW to contain the password for the signing certificate
* `make android`


This is not enough, more instructions to come.


# Adding a new language


* requires that one has set `$GIELLA_TEMPLATES`


Run the commands:


```
export GIELLA_TEMPLATES=/path/to/giella-templates
cd $GTHOME/keyboards
./autogen.sh
./configure
make NEW_LANGS=xxx
```


Replace `xxx` with the actual language code of the language you want to add.
If you want to add multiple languages, enclose the list within double quotes.


When the new language dir is populated with Makefile's and template data, commit
the whole dir to svn. **Remember** to also commit the files
`$GTHOME/keyboards/configure.ac` and `$GTHOME/keyboards/Makefile.am`.


When done, start editing the `$NEW_LANGS.yaml` file, and run `make`. Have a
look at the layout of the keyboard by opening `doc/layout.html` in a web
browser.
