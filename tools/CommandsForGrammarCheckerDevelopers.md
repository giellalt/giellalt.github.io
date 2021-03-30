# Non-linguistic commands


## update vislcg3, hfst, etc.
```su service
<passord>
cd source
sudo ./install-nightly.sh
<passord>
Ctrl-D
```






## update grammarchecker tools, vislcg3, hfst, apertium (also for Duommá)
```sudo curl https://raw.githubusercontent.com/divvun/libdivvun/master/scripts/mac-build | bash
```


OR 


```cd divvun-suggest
git pull
sudo bash scripts/mac-build
```


## svn issues


### resolve treeconflicts in the svn




```svn revert file
svn up
```


OR:


```svn revert --depth infinity dir
svn up
```


## get modes to work
```
cd $GTHOME/langs/sme/tools/grammarcheckers
make dev
```


## make options in sme


### check which kind of options there are in ones make configuration


```
grep '/configure' $GTHOME/langs/sme/config.log
```


### possible make configuration


```
cd $GTHOME/langs/sme
./configure --with-hfst --without-xfst --enable-grammarchecker \
--enable-alignment --enable-reversed-intersect
```


### make commands


```
cd $GTHOME/langs/sme
time make -j
```


```
cd $GTHOME/giella-shared/
make
```


### make hfst only


```
cd $GTHOME/langs/sme/src
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
