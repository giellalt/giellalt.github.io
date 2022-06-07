# Updating dictionaries

This page documents both lexicon and fst updating, and restarting of the server.
One may update either lexica or fst or both, but in both cases configuring and
resetting of the surver must be run.


Administering NDS requires the use of Fabric, which is a system for performing
processes remotely.


All dictionaries are on gtdict, and require logging in
as the *neahtta* user. The compile process is
restricted, so that only the lexicon will be able to be compiled, but *not*
the FST files. FSTs must be compiled manually (see below in *Updating the FSTs*).


# Updating the lexica on gtdict


For the impatient: **The short version:**


```
    fab DICT compile
    fab DICT test-configuration
    fab DICT restart-service
```


**The longer explanation:**




1.) *Log in to the server via SSH*


Log in to gtdict, and thereafter do `sudo su neahtta`


Note that when logged in as the NDS user, the python virtualenv should be
activated automatically, and you will see this before the command prompt:


```
    (neahtta_env)[neahtta@gtdict ~]$
```


(If you do not see this, do the following commands from the home directory of
neahtta: *cd ~ && source neahtta_env/bin/activate*.)


When you see (neahtta_env) in the command prompt, continue.


2.) *Go to the neahtta catalogue and run the Fabric process*


```
	cd ~/neahtta/
	fab DICT compile-dictionary
```


Replace DICT below with sanit, baakoeh, etc. (to *fab sanit compile-dictionary* etc.)


If you have problems here, make sure that the environment variables for
*GTHOME*, and *GTCORE* are set, however the *neahtta* user should
automatically be configured properly. Either you will see errors, or you can
check with `echo $GTHOME`. The *neahtta* user has these set automatically
in its bash profile.


3.) *Check that there were no errors* 

You may also do `wc -l dicts/*.xml` to make sure there is content in the files.


If there is an error in an XML file used in compilation, Saxon will print out
the file name and line that was problematic. Before compilation, a backup file
will be stored, so if the compilation process overwrites this with a blank
file, you may revert to a previous version. Backup files are named *.bak, and
include a timestamp.


This process compiles all dictionaries to *dicts/*, which is the place that
most instances of NDS rely on, following the relevant configuration file in
*configs/DICT.config.yaml*. This will usually be enough, but if updates do
not seem to be visible on the web, it is a good idea to check that the
dictionaries are in the locations that the config expects, and alternatively
restarting the server process.


**NB:** The files checked in to Git are different from those actually used in
production on the server, this is to prevent accidental overwritings via *git push*.
Thus, you will need to edit and check in *configs/DICT.config.yaml.in*,
which is fine for use in development work, but the servers instances will be
running from *confgis/DICT.config.yaml*.




4.) *Test the configuration files*


An automatic tool to check that everything went well is also available.

Running the following command will evaluate the config, test dictionaries, and
then print FST paths and last updated date. If an FST is missing from its
expected path, it will be listed as MISSING. If you see any errors at the end
of the process, or worse, Python errors, something is wrong and you should
avoid restarting until this is corrected.


```
    fab DICT test-configuration
```


5.) *Restart the server process*


When everything is working, run the following:


```
    fab DICT restart-service
```


# Updating the FSTs

There are two ways to update the FSTs. For both of these options, you must
know first where the FSTs for each dictionary and language should lie.
FST locations are defined in the relevant config file in
*configs/DICT.config.yaml*, in the *Morphology* section near the top.
(Note the difference mentioned above between *.yaml.in* and *.yaml*.

As above, you can use the test command to see if the files were updated.


```
    fab DICT test-configuration
```

If you see any errors, be sure to correct them.


##  Updating on your own


The first way to update FSTs is to do so on your own, using whichever method
you are comfortable with, typically following the usual procedure for
*$GTLANGS*, and then copying them manually to the specified locations.


To find the FST locations:


```
    fab DICT test-configuration
```


This will output the following:


```
    SoMe:
      FOUND:   /opt/smi/sme/bin/analyser-dict-gt-desc-mobile.xfst
      UPDATED: Tue Nov  4 15:47:31 2014


      FOUND:   /opt/smi/sme/bin/generator-dict-gt-norm.xfst
      UPDATED: Tue Nov  4 15:47:31 2014




    sme:
      FOUND:   /opt/smi/sme/bin/analyser-dict-gt-desc.xfst
      UPDATED: Tue Nov  4 15:47:31 2014


      FOUND:   /opt/smi/sme/bin/generator-dict-gt-norm.xfst
      UPDATED: Tue Nov  4 15:47:31 2014


    ... snip ...


```


When you compile the analyzers on your own, copy them to these paths, and test
that their permissions allow them to be accessible to the neahtta user.


##  Updating via Fabric


**NB:** on gtdict this will work only by removing 'gtdict.uit.no' in the 
variable `no_fst_install` in the fabfile.py.


Fabric provides a quick shortcut to the build processes for each language.


When you are logged in and in the *~/neahtta/* directory, you may run these
commands.


Compiling FSTs with Fabric is as follows: you can compile all FSTs
individually with *fab DICT compile-fst --iso=ISO*, or,
*fab DICT compile* where DICT is the short name for the project. The
latter will compile all FSTs belonging to the DICT, together with the lexicon.


```
    fab DICT compile-fst --iso=ISO
    fab DICT compile
```


When you run these, follow the output to make sure no errors have occurred. The
process will automatically install the new FST files in their respective
locations, but only if the compilation process was successful.


Updates to FSTs do not require restarting the server, and changes will be made
live immediately. If you update the lexicon however, you should restart the
process.


Either of these will compile the FSTs in their original locations as defined in
the *Makefile* (which simply follows the procedures for *$GTLANGS*),
but it will also copy FST files to temporary locations within the dictionary
config directory as a prerequisite to the install targets.


#  Testing the configuration


Go to neahtta and configure the dictionaries


```
    cd ~/neahtta/
    fab DICT test-configuration
```


Here, replace DICT with the relevant name in configs/ that you are working on (the list of DICTs above).

If everything is good and there are no errors, you'll see FST paths, and some happy cyan text at the end.


# Resetting the server

Either use the fab process, or relevant system commands.


```
    cd ~/neahtta/
    fab DICT restart-service
```


**NB:** you may be prompted for the neahtta sudo password, and if this doesn't
work, something is broken and developers must fix it.




#  More on Fabric


## The Fabric system.


The Fabric system itself (cf [fabric.org](http://fabfile.org/)) is run,
and documented, in `neahtta/fabfile.py`. This file contains both
the actual commands and some documentation.


## Using Fabric


Most of the process here is delegated to other commands, and this is because
Fabric is a system for executing commands locally or remotely on other systems.


Two benefits for people who need to run these processes frequently are:


 * chaining commands together
 * running remotely


Commands can also be chained, for example (here with *sanit* as DICT):


```
    fab sanit compile test-configuration restart-service
```


This would execute everything after sanit in order: compilation, testing, and
restart. Chaining restart-service is not recommended, one should inspect the output of test-configuration (that everything is ok) before restarting.
