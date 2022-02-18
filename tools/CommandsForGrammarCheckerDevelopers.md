# Commands for grammar checker developers

# Non-linguistic commands

These commands are for setup and compilation.

## update the compilers: *vislcg3, hfst*, etc.

```
su service
<passord>
cd source
sudo ./install-nightly.sh
<passord>
Ctrl-D
```






## Update the grammarchecker tools, *vislcg3, hfst, apertium*

```
sudo curl https://raw.githubusercontent.com/divvun/libdivvun/master/scripts/mac-build | bash
```


OR 


```
cd divvun-suggest
git pull
sudo bash scripts/mac-build
```


## svn / git issues


### resolve treeconflicts in the svn




```
svn revert file
svn up
```


OR:


```
svn revert --depth infinity dir
svn up
```


## get modes to work

```
cd $GTLANGS/lang-sme/tools/grammarcheckers
make dev
```


## make options in sme


### check which kind of options there are in ones make configuration


```
grep '/configure' $GTLANGS/lang-sme/config.log
```


### possible make configuration


```
cd $GTLANGS/lang-sme
./configure --with-hfst --without-xfst --enable-grammarchecker \
--enable-alignment --enable-reversed-intersect
```


### make commands


```
cd $GTLANGS/lang-sme
time make -j
```


```
cd $GTLANGS/giella-shared/
make
```


### make hfst only


```
cd $GTLANGS/lang-sme/src
time make -j analyser-gramcheck-gt-desc.hfstol
```


# Working on websites


```
cd $GTHOME/xtdoc/commontechdoc
f8
```


in Safari:

```
http://localhost:8888/tools/CommandsForGrammarCheckerDevelopers.html
```


# Install grammar checker in LibreOffice (Mac)


* Get newest version: (Link from Sjur in Zulip)
* Open LibreOffice
* Tools>Extension Manager>Writing aids based on Divvun 5.0 
* Remove
* Restart LibreOffice
* Tools>Extension Manager>Add>Downloads>divvun-...oxt (newest downloaded version)
* Restart LibreOffice
