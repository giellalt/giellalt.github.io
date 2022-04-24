Compiling finite-state transducers
========

This is a short overview of how to compile (build) the linguistic programs (analysers and generators) in the GiellaLT infrastructure. 
We assume the version control files and programs are set up on your computer, 
and that you have opened a terminal window in the directory of the language you work on (`lang-XXX`, replace XXX with the ISO code for your language). 

In order to check what analysers you are compiling, write


```
head config.log
```


The third last line or so reads

```
  $ ./configure 
``` 
... or it has some options added to it.
If it reads *./configure* (with no additions), it
means that you use the *hfst* compilers. The hfst compiler is what we use for our end-user tools.

The same language model is used for several purposes, this is typically done by making tailored transducers for each purpose. Compiling all the transducers takes a long time, so we may turn their compilation  
on or off (with the **--enable** and **--disable** 
options, and choose compilers
(with the **--with-hfst, --without-xfst** options). Write


```
./configure --help
```


in order to get help.

## Other compilers

Above we assumed you use our default compiler, *hfst*, which is fine. You need no other, and in some instances only hfst will do. There are two alternatives, though.
 
One is the *xfst* compiler. It compiles much faster than hfst. If you think the compilation process is slow, you should consider xfst for development.  (for installation, look for **Xerox** on [this page](https://giellalt.github.io/infra/GettingStartedOnTheMac.html). Note that you will need hfst for using the GiellaLT infrastructure for making spell checkers etc.

To set up for xfst use, write the following on the command line (you may also compile with both, if so, drop the last part):

```
./configure --with-xfst --without-hfst
```

We also have a third compiler, *foma*. which is activated by the addition *--with-foma*. If you installed hfst as we suggested on our *Getting started* page, you already have foma installed. Note that foma does not support *twolc*.




