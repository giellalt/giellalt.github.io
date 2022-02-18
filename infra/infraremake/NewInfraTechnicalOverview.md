# The new infra - a technical overview


Main components: *autotools, giella-core* and *templates*.


# Autotools


All languages are independent "projects/products"




## Building languages


Building is done (e.g. for *sme*) in the $GTHOME/langs/sme folder, with:


```
./autogen.sh -l
./configure 
make
sudo make install
```


(Note that the ./configure command may take different parameters, see directly below.)


The same commands are used for all languages in the different `langs/` dir, if one wants to build and
install more languages (note that there is a script *makeall.sh* to compile all languages).
(See also [the overview of the subdirectories in each language directory](NewinfraCatalogues.html).)




As mentioned, the command `./configure` is used to set up different options for compilation.
In order to see all the available options, write:
```
./configure --help
```


In order to see what installation you have set just now, write:
```
head config.log
```


The answer will read  **Invocation command line was**, and thereafter 
the `./configure` command, with the current settings displayed. A situation
where `make` will build fsts for dictionaries, but otherwise just give the
default values, will show as follows:
```
  ./configure --enable-dicts
```


Default options may be turned off with *disable*, e.g. by writing:
 ```./configure --disable-generators```

 
or, to turn off the *--with* options, write *--without*, and then what you do not want: 
```
 ./configure --without-xfst
 ```

 
Several options may be stacked after each other, in any order. 


## Note about the build and configure directories


```
<lang>/am-shared/ # shared build instructions - the real build stuff
       m4/        # configuration macros
```


**NEVER TOUCH THESE DIRECTORIES AND FILES!!!**


These files (and directories) are always updated by merging in changes from the
templates (see below). Such changes should only be done by the infrastructure
maintainers.


# Gtcore


`$GTHOME/giella-core/` - contains core:
* scripts
* xsl files
* common filters - sub filter, morpheme boundary mark filter, etc.
* templates (see below)


# Templates


Two templates defined so far (6.11.2012):
* und - the full basic infrastructure for all languages
* smi - contains lexicon(s) and features specific to the sami languages


The infrastructure of all languages are updated by merging in changes in the
templates. Only languages with a corresonding `.timestamp` file will be
merged.


Template updates **MUST** be coordinated - the merging is relatively fragile,
and at the same time modifies many files.


# Testing


There's a separate `test/` dir that contains a mirror hierarchy to the other
dirs, and which contains a couple of test shell script. The basic requirements
for the test scripts are:


* they must be executable
* the must return with an exit value of zero for success
* any other value indicates a failed test
* the exit value 77 indicates a test that was skipped (neither fail nor pass)
* the exit value 99 indicates a hard fail (ie a real crash of the tested
  process)
* the test scripts must be listed in a `TESTS` variable in one of the
  `Makefile.am` files


As long as these requirements are met, the test scripts can be written in any
language - even C!
