# How To Merge Updates From Core

**NB!** Do **NOT** update the infrastructure without checking with the core
developers!!!! You should usually not need to touch the infrastructure at all.
The core maintainers will take care of these things, and the updates will be
propagated automatically via the svn repository.


# Initial work - the actual changes


The initial work to develop a new feature or fix a bug is done using your
favourite language as test case. When the feature or bug fix is working as
expected, do as follows


* copy the changes to the corresponding files in
  `$GTCORE/langs-templates/und/`
** make sure you do NOT bring any language-specific things over to the template
* edit the `und.timestamp` file (see next)


Now you are ready for the merge.


## How to edit the und.timestamp file


You should edit the top of the file only.


Before you touch it the 2-3 first lines of
`giella-templates/langs-templates/und/und.timestamp` look like


```
$Rev: 97047 $
Added WANT_OAHPA option for analysers for all languages (until now only generator)


```


You edit the file by writing the new message **under** the first line, and by
**copying** the revision number in as a new heading over the previous
login message, with a newline inbetween.


After you have edited it (but before checkin) it should look like this:


```
$Rev: 97047 $
And this is the new svn login message you write for your checkin.


r97047:
Added WANT_OAHPA option for analysers for all languages (until now only generator)
```


Then you check in the edited und.timestamp and the files that were changed in 
`giella-templates/langs-templates/und/`, preferabely **in the same commit**
and **with the same message** as you added to und.timestamp.




# Preferred: Merge all languages using make


In each of the `langs` directories, do as follows:


```
./autogen.sh
./configure
make templatemerge
```


That's it! After the merge:


1. check and resolve conflicts, if any
1. check all modifications made
1. commit (see details below)


Please review your changes, so that you won't commit changes that
do not belong to the merge! To that end, it might be better to have a completely
separate svn working copy for doing merges only.


Tips for verifying that the merge went well:


* count the number of modified files in the `und/` template - check that
  the number of modified files in each langs dir is the same number times the
  number of languages in that dir
* check for conflicts
* compare the diff for the modified files in the `und/` template and the same
  files in the `langs/` dir after the merge - the diff should be identical


## Commit details


When committing a merge, try to commit all languages at once as long as the
changes are relatively small and focused. If the merge covers a major change
with a lot of modified and new files, it is better to commit in blocks of say
ten files.


Add a line of the following format on top of the commit message of the `langs/`
dirs:


```
[Template merge - und/langs]
Your commit message here.
```


The idea is that we can easily identify these commits later on.


## Merge options


There are a couple of variables you can set for `make` when doing a merge:


```
 USERNAME=abc # needed if you get errors about url mismatch between repo and working copy
 UNSAFE=yes   # needed if you want to merge changes to modifiable files, like lexc files etc
 REVISION=123 # explicitly specify the revision to merge from
```


### Option USERNAME


Use the `USERNAME` option if you get error messages like the following when
doing a merge:


```
Copyfrom-url 'https://gtsvn.uit.no/langtech/trunk/giella-templates/langs-templates/und/am-shared/tools-spellcheckers-listbased-hunspell-dir-include.am' \
has different repository root than 'https://USERNAME@gtsvn.uit.no/langtech'
```


(replace USERNAME with your own username in subversion)


This message is caused by subversion trying to merge without a username, whereas
the repository root has a username specified, and thus the url's become
different. To avoid this error, first revert all changes from the failed attempt
to get a clean, new start, and then merge again as follows:


```
make templatemerge USERNAME=abc    # replace 'abc' with your actual user name
```


### Option UNSAFE


Give the `UNSAFE` variable a value `yes` to force merging of source files
considered dangerous to merge, like lexc files, yaml files, etc. Be prepared for
a lot of conflicts and manual cleanup afterwards!


```
make templatemerge UNSAFE=yes
```


### Option REVISION


Specify the revision number in the variable `REVISION` to force the merge to
start from that revision number, irrespective of the revision number of the
latest change to the `und.timestamp` file in `$GTCORE/langs-templates/und/`.
This can be used to repair partial merges done earlier, but is seldom needed.


```
make templatemerge REVISION=12345
```


## Renaming or moving files


The one thing that the merge scrimpt can't do well is to move files after a move
in the template dir. This is due to limitations in svn merge.


The merge process when moving or renaming files involves one additional step for
each file being moved or renamed, and the total process becomes:


1. change files in the template as needed, including moves and renames
1. commit changes in the template
1. **for each language in each language dir**, move or rename the corresponding file(s)
1. when all files are moved, merge as usual (see above). Ignore errors about files not found


A simple shell script for automating svn moves of files can look like this:


```
#!/bin/bash


# This is a maintenance script to help propagate file moves or renames in the
# core template to all languages. It loops over all language dirs as defined in
# the *.am file and svn mv the files specified.


# Extract the list of all languages from the *.am file:
ALL_LANGS=$(egrep '^ALL_LANGS=' < Makefile.am | sed -e 's/ALL_LANGS=//')


oldfile=$1
newfile=$2


for ll in $ALL_LANGS ; do
    if test -d $ll ; then
        svn mv $ll/$oldfile $ll/$newfile
    fi
done


echo
echo "*** Done: all languages updated. ***"
echo
```


Store this script in a file, place it in the top `lang/` dir, and use it as
follows:


```
./move-in-svn.sh src/old-file src/new-file
```


Do *NOT* specify the language dir (in front of `src/` in the example above).
It is automatically inserted by the shell script.


# Updating one language at a time


Steps to take for language `$GTLANG`:


1. `cd $GTHOME/langs/$GTLANG/`

1. `$GTCORE/scripts/merge-templates.sh`
	 1.one can try to add the option `--unsafe` to get the script to try to merge
   some more files than default (e.g. lexc files, yaml files, etc - it will
   anyway only merge the files that have been changed or added since the
   previous merge)
1. check and resolve conflicts, if any
1. check all modifications made by the merge
1. commit (see details above)


# Updating languages outside $GTHOME/langs/


The process is the same for all language directories, ie directories whose name
ends in `langs`, and which contains the proper `configure.ac` and
`Makefile.am` files.


# What if your language is not automatically updated?


Make sure that the language code is listed in:


* `$GTHOME/langs/configure.ac`
* `$GTHOME/langs/Makefile.am `


If not, add it to the list of language codes in those files. The same holds for
the same files in the other `langs` directories.


# Conflicts after the merge


The basis for the scalability of the infrastructure is to avoid svn conflicts,
so that all major updates can be rolled out automatically. From time to time
you need to change things that will eventually lead to conflicts, either
systematically or more randomly depending on the language.


## Systematic conflicts


These can be because there has been some change to the use of the language code
placeholder:


```
**UND**
```


In this case, merge as usual, and then do the following:


```
svn resolve --accept theirs-full */path/to/conflict/file
time make replace_langcodes FILE=path/to/conflict/file
```


Now everything should be ok again, **BUT:**
Review the changes before committing!


There can also be other causes of systematic conflicts, review in each case, and
try to find an automated approach to resolving the conflicts.


## Random conflicts


If there are just random conflicts because you needed to update one of the
language template files (template source files), then there is no other way than
resolving the conflicts manually. Preferably use a graphical merge and diff tool
to ensure you only changes things that need to be changed.
