# Build problems in $GTHOME/xtdoc/gtuit


Our documentation should be **validated** before checking in.
Do the following 


* cd $GTHOME/xtdoc/gtuit # (for the giellatekno docu):
* cd $GTHOME/ped/ # (for the icall documentation)


Then run the  debugging command:


```
forrest validate
```


It will return BUILD SUCCESSFUL or BUILD FAILED.


When encountering problems like this:


```
BUILD FAILED
/Users/boerre/Documents/forrest/main/targets/validate.xml:135: Could not validate document /Users/boerre/main/xtdoc/gtuit/src/documentation/content/xdocs/doc/lang/sme/build/tmp/plugins-1.xml
```


it means that the build process in $GTHOME/langs/sme has left garbage that
forrest doesn't like


Clean it up using this command (cut and paste into your terminal window):


```
cd $GTHOME/langs;
for i in `echo */`;
	do cd $i/doc;
	make clean;
	cd $GTHOME/langs ;
done
```
