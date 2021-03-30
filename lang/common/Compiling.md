

This is a quick reminder of how to compile (build) the analysers. 
We assume the svn files and programs are set up on your computer, 
and that you have opened a terminal window in the directory of the language you work on (say, `langs/smn`). 


In order to check what analysers you are compiling, write


```
head config.log
```


The third last line or so reads


```
  $ ./configure 
``` 


And then perhaps with something else follwing it. If it reads *./configure*
only, it means that you use only the xfst (xerox) tools. They contain some bugs,
but they compile very fast, and are therefore usually used for development.


If you have some other configuration, but want to have quick compilation
for development, write the following on the command line:


```
./configure
```


Compiling all tools takes a long time, so we may turn the compilation of them 
on or off (with the **--enable** and **--disable** 
options, and choose compilers
(with the **--with-hfst, --without-xfst** options). Write


```
./configure --help
```


in order to get help.




