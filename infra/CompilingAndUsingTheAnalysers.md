# Compiling and using the analysers



When you have set up the prerequisites in the [Getting Started](GettingStarted.html) documentation, 
you want to compile the linguistic analysers and use them.


## The minimum build option


You build the analysers in the '*language folder*'. We assume you have set up a variable `$GTLANGS` in your `~/.profile` file, pointing to the directories where your language directoriess are stored. If you have done that, you may go to your language directory. We use Pite Saami as our example (`sje`), replace *sje* with the language code of the language you want to compile:


```
cd $GTLANGS/lang-sje
``` 

If you have not set up the variable `$GTLANGS`, just go to the language folder you have just checked out.

First set up the files required to build the analysers (if you get error messages saying that some required files are missing you have probably skipped some steps on the [Getting started](GettingStarted.html) pages):


```
./autogen.sh
```

For the first language you compile, you will be asked to go to `giella-core` and `giella-shared` to run some commands there. Do as the system tells you, and return to 

Now, you must decied what analysers to build. Setup for the core ones you get with the command (for more options, see below)


```
./configure
```


You then build the analysers with the command


```
make -j
```


This command may take a couple of minutes to run. For our most developed languages (like North Saami) on a not too fast machine it may take half an hour or more.


When the process is done you should find a new-built analyser file: `src/analyser-gt-desc.hfstol` and several more like it in the src catalogue.


For more advanced build options, see the last section below.


## How to use and develop the analysers


* [How to user the analysers and generatore](../tools/docu-sme-manual.html)
* [Language-independent documentation](../lang/common/index.html) (how to work on developing the analysers)
* [Language-specific documentation](lang/index.html) (on the language you want to work on)
* Documentation for how to build a new language






## More advanced build options


The Giella infrastructure can build scores of different linguistic analysers and genrators, taylored for different purposes and using different compilers. The `./configure` command has a wide range of options for that. Different compilers are turned on and off by adding e.g. `--with-xfst` (compiles by using the xfst compiler instead of the default hfst). To turn off hfst and compile with xfst (or foma) only, write e.g. `--with-xfst --without-hfst`. 

Different analysers can then be built by adding the `--enable` option (`--disable` turns off default options). To take an example: In order to enable your system to turn your language model into a spellchecker, add the following to the *./configure* option:


```
 ./configure --enable-spellers
 ```

 
 A full list of the options is given by writing

 
 ```
 ./configure --help
 ```

 
 Your current ./configure setting (which is valid until you change it) is shown by writing

 
 ```	
 head config.log 
 ```

After you have (re) set your *./configure* option, you must recompile, by writing `make -j` again.


