



When you have set up the prerequisites in the [Getting Started](GettingStarted.html) documentation, 
you want to compile the linguistic analysers and use them.


# The minimun build option


You build the analysers in the '*language folder*'. If you have checked out the whole tree, it the language is found in `langs` or one of the folder with a name ending in `-langs` under the main '*€GTHOME*' folder. Go to your language, e.g. for Pite Saami:


```
cd $GTHOME/langs/sje
``` 


First set up the files required to build the analysers (if you get error messages saying that some required files are missing you have probebly skipped some steps on the [Getting started](GettingStarted.html) pages):


```
./autogen.sh
```


Now, you must decied what analysers to build. Setup for the core ones you get with the command (for more options, see below)


```
./configure
```


You then build the analysers with the command


```
make -j
```


This command may take a couple of minutes to run. For our most developed languages (like North Saami) on a not too fast machine it may take half an hour or more.


When the process is done you should fine a new-built analyser file: `src/analyser-gt-desc.xfst` and several more like it in the src catalogue.


For more advanced build options, see the last section below.


# How to use and develop the analysers


* [How to user the analysers and generatore](../tools/docu-sme-manual.html)
* [Language-independent documentation](../lang/common/index.html) (how to work on developing the analysers)
* [Language-specific documentation](lang/index.html) (on the language you want to work on)
* Documentation for how to build a new language






# More advanced build options


The Giella infrastructure can build scores of different linguistic analysers and genrators, taylored for different purposes and using different compilers. The `./configure` command has a wide range of options for that. Different compilers are turned on and off by adding e.g. `--with-hfst` (compiles by using the hfst compiler). Different analysers can be built by adding the `--enable` option. To take an example: In order to enable your system to turn your language model into a spellchecker, add the following to the *./configure* option:


```
 ./configure --with-hfst --enable-spellers
 ```

 
 A full list of the options is given by writing

 
 ```
 ./configure --help
 ```

 
 Your current ./configure setting (which is valid until you change it) is shown by writing

 
 ```	
 head config.log 
 ```




