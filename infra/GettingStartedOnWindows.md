
# Getting started with the GiellaLT infrastructure on Windows


Ever since Windows 10, Anniversary Update 2018, it has been possible to install a Linux system on Windows. Follow the following instructions to install Linux/bash on Windows 10:

## Installation


* [Short version](InstallingLinuxOnWindows.html)
* [Long version with illustrative pictures](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

Then return here

## Set up the work environment


To access Windows file from the linux window, do `ls /mnt/` and navigate from there. A good idea would be to make an alias in the *.profile* file of your linux home folder, e.g. something along the lines of:

```
alias lgtech = "pushd /mnt/c/Users/YourUserName/Documents/lgtech"
```
... where **YourUserName** should be replaced with just that. The path starts with `/mnt/`, you should check that the rest of the path is what you want.

Then writing `lgtech` will bring you directly to the relevant folder. You then may want to install all language technology files here. 

The good thing with installing them here and not under the home directory is that you can access the 

Then follow the instructions [for Linux](GettingStartedOnLinux.html) to
get the things you need for participating in the development of
language technology tools. Note that if you only want to use the tools, you may instead just download the analysers, see the page on [linguistic analysis](https://giellalt.uit.no/ling/LinguisticAnalysis.html)


## Find an editor

In order to participate in the development work, you need an
**editor**, a program for editing text files. Here are some candidates:

- [Visual Studio Code(VSCode)](https://code.visualstudio.com/download) (take the version for Windows)
- [Atom for Windows](http://atom.io) is a good choice as well.  
- [EditPad lite](https://www.editpadlite.com/). This is a simple and nice editor for Windows. 
- [jEdit](http://www.jedit.org) should be fine (requires
Java, but that is already recommended for our infrastructure, and
should be in place when you have come this far).
- Window's own NotePad. No syntax colouring, but very robust. Note that we use UTF-8.
- Since ubuntu is Linux, editors like *vim* or *emacs* will do, if you are familiar with one of these, stick to them.

Any other editor handling UTF-8 should be fine as well.



When **Linux on Windows** is installed, continue this documentation [as if you were running Linux ubuntu](GettingStartedOnLinux.html).

