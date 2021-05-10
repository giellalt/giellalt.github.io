# Installing Foma


**NB!** Support for building fst's using the `Foma` compiler is experimental, and only works
with a few languages at the moment. Specifically, the following is required:


* use an xfst script (suffix `.xfscript`) for the morphophonological description


Also, only a subset of the total package of fst's are built using `foma` for
now. More fst's will be added over time.


## Installation


To install Foma, do the following:


```
svn co http://foma.googlecode.com/svn/trunk/foma/ foma-read-only
cd foma
make
sudo make install
```


## Home page


There is a [Foma home page](https://code.google.com/p/foma/), where you may read
more about the compiler, and also download binaries (in case you have troubles installing).


## Use


To configure a language to be built with `foma`, do the following:
```
./configure --with-foma
```


To also turn off Xerox (if you have it installed), you can add
`--without-xfst`. The default is to always
use the Xerox tools, but if they are not installed, the fallback is to use
the Hfst tools if nothing else is specified. Foma must always be enabled
explicitly. If Foma is enabled, Hfst is turned off unless you explicitly also
enable Hfst.


## Differences between Foma and Xfst


There are a number of differences between Foma and Xfst, but most of them are
additions on top of Xfst. That is, Xfst-based source
files are always compatible with Foma.


There are a couple of exceptions, they are listed here as they are found:
* do not start an `echo` string with the character "=" - this turns `echo` 
  into a defined net with the name *echo*.
