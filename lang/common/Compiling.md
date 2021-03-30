

This is a quick reminder of how to compile (build) the analysers. 
We assume the version control files and programs are set up on your computer (git or svn), 
and that you have opened a terminal window in the directory of the language you work on (say, `lang-smn`). 


In order to check what analysers you are compiling, write


```
head config.log
```


The third last line or so reads


```
  $ ./configure 
``` 


The option *./configure* (with no additions)
means that you use the *hfst* compilers. The hfst compiler is what we use for our end-user tools.

Another compiler is the set of *xfst* compilers. They contain some bugs, but they compile very fast, and are therefore usually used for development. write the following on the command line:


```
./configure --with-xfst --without-hfst
```

We also have a third compiler, *foma*. which is activated *--with-foma*.

The same language model is used for several purposes, this is typically done by making tailored transducers for each purpose. Compiling all the transducers takes a long time, so we may turn their compilation  
on or off (with the **--enable** and **--disable** 
options, and choose compilers
(with the **--with-hfst, --without-xfst** options). Write


```
./configure --help
```


in order to get help.




