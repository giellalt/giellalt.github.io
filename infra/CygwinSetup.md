These notes are not complete at the moment, but contains a number of things observed when helping a Cygwin user.


# Installing Cygwin


See [the Cygwin home page](http://cygwin.com), and follow the instructions there.


# Installing other Windows software


See [the Java home page](http://www.java.com/), and follow the instructions there.


# Most things are missing


The Cygwin environment is pretty bare-bones. This means that you need to install almost every tool and library using the Cygwin Setup.exe tool. Things you need to install:


* make
* python3
* ssh (named *openssh* in the list of available tools to install)
* zip
* nano


To setup these tools, you use the **Setup.exe** tool that you used to install Cygwin. It will also install all dependencies required by each tool.


## Setup.exe short usage guide


* Start it up, and follow the instructions (selecting the default should be fine) until you come to the page where you select the tools to install.
* Type the name of the tool you want to install, and expand the boxes listed until you find the exact tool.
* Click once on the tool name
* Click continue, and let Cygwin install the tool
* When done, click continue
* When you reach the page where the default button says *Finish*, you can click on the button *Back* if you want to install more tools; if not, just click *Finish*.


# Py-Yaml


To install py-yaml, go to [http://pyyaml.org/wiki/PyYAML], download the tar.gz package, and follow the instructions on that page.


# Saxon


Download the latest `saxon9he.jar` file from the [Saxon home page](http://saxon.sf.net/), and store it in the directory `lib/` in your Cygwin home directory (create the `lib/` dir if it isn't there already).


# Xerox tools


Lexc and Twolc are working with some quirks, but the build environment is now updated to work around those quirks.


Xfst is NOT working ATM, but the issues will be reported and hopefully fixed. The best alternative is to use HFST instead of Xerox (see below).


# HFST


The latest HFST source code compiles on Cygwin after one local modification:


* open the file
  `/usr/lib/gcc/i686-pc-cygwin/4.5.3/include/c++/tr1/functional_hash.h` in
  an editor
* search for the line containing
  `_TR1_hashtable_define_trivial_hash(unsigned long long);`
* comment that line out by typing `//` at the beginning of the line
* save the file


When done, follow these instructions:


* download the latest sources to your home directory \\ :
  `wget http://sourceforge.net/projects/hfst/files/hfst/hfst-3.4.2.tar.gz` -
  please check whether there is any newer version available by visiting
  `http://hfst.sf.net/`
* unpack the downloaded file \\ :
  `tar -xzf hfst-3.4.2.tar.gz`
* cd into the source dir that tar created \\ :
  `cd hfst-3.4.2`
* then do the following, one at a time:


```
./configure --with-foma --enable-lexc --enable-windows
make
make install
```


Now you should have a working HFST installation!


## HFST bugs


As of version 3.4.2, all Hfst tools are working, **except** `hfst-xfst`. This is a pretty serious limitation, and makes Hfst just as useful as the Xerox tools. But the bug has been reported, and will hopefully be fixed soon.


# Configuring your languages


Assuming that the Xerox tools remain useless and that Hfst is soon fixed, you need to configure your languages to use Hfst and not Xerox. You do this as follows:


```
./configure --without-xfst --with-hfst
```


The reason is that the Xerox tools remain default for the time being, and hfst is only made available if explicitly asked for.
