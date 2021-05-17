# Grammar checker kompilation


## Get the divvun-gramcheck package:


```
 curl http://apertium.projectjj.com/osx/install-nightly.sh | sudo bash
 test -d ~/src | mkdir ~/src
 cd ~/src
 git clone https://github.com/divvun/divvun-gramcheck
 cd divvun-gramcheck
 scripts/get-pugixml-and-build
 sudo make install
``` 

 
## Set up and compile the grammarchecker


Have a look at [these course notes](https://gtsvn.uit.no/langtech/trunk/courses/grc/helsinki_2018/notes.txt)


In $GLANGS/lang-$LANG, do


```
./autogen.sh
./configure --enable-apertium --enable-syntax --enable-grammarchecker --enable-tokenisers --enable-alignment --enable-reversed-intersect
make
cd tools/grammarcheckers
make dev
```


For testing, see the commands at the beginning of the grammarchecker.cg3 file in tools/grammarcheckers
