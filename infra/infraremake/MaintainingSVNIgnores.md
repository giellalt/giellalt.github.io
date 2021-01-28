There are typically two maintenance cases. You want to:


* set some (default) `svn:ignore` on a new directory 
* change the `svn:ignore` on a directory from the default/existing to
  something new


Both will be described below.


**Two notes before you begin:**


Make sure the variable GIELLA_TEMPLATES is set in your .profile file. If not, add
export GIELLA_TEMPLATES=/path/to/$GTHOME/giella-templates/langs-templates to .profile.


Your `langs/Makefile` may be outdated. If in doubt, update it.
In your `*langs/` catalogue, do the following:


```
./autogen.sh && ./configure
``` 


Then you should be ready to begin.


# Set svn:ignore


The following two commands update the `svn:ignore` property for all dirs in all
languages in the `langs/` catalogue are (do `cd startup-langs` etc for the
others):


```
cd langs/
make svnignores
```




## How it works


The `make` target loops over all languages defined in the `make` variable
`ALL_LANGS` in the file `langs/Makefile.am`, checks that the language
directory exists, and then calls a template-specific shell script
(`$GIELLA_CORE/scripts/set-svn-ignores-langs.sh` in the case of `langs/`
dirs, `$GIELLA_CORE/scripts/set-svn-ignores-prooftesting.sh` in the case of
`prooftesting/` dirs).


After you have run the above commands, all dirs will have updated `svn:ignore`
properties, but usually this applies only to one or a few dirs per language -
all the other directories got updated to the same ignore patterns that they
already had.


## Default ignore pattern


The following snippet shows the default ignore pattern for the `langs` type of
`svn:ignore`:


```
mkfiles="Makefile
Makefile.in"


# [...]


fstfiles="*fst
*.hfstol
*.foma
*.bin
*.bcg3"
```


## Issues


There are some dirs that have manually set `svn:ignore` properties. At the
moment these dirs must be manually reverted before the whole `svn:ignore`
update is committed.


**Please** review the changes before committing them!


# Change svn:ignore


To change the actual ignore patterns, you must change the shell scripts that set
them. They are the ones mentioned earlier:


* `$GTCORE/scripts/set-svn-ignores-langs.sh`
* `$GTCORE/scripts/set-svn-ignores-prooftesting.sh`


They are applied to the template type as indicated by the last part of their
filename (`langs` or `prooftesting`).


Open the desired file, edit it following the code structure that is there, and
when done, run the svn:ignore commands described above. Look for the name of the
folder you want to change `svn:ignore` for, and add the required strings.


**NB!** Remember to commit the changes to these scripts after you have edited
them! And do commit the changes to each and every catalogue that got new
ignore patterns.
