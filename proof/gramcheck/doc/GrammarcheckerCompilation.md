# Grammar checker compilation

In order to work with grammarcheckers you need to install the grammarchecker tools.

# Get the divvun-gramcheck package

There are different commands for **Macintosh** and **Linux** (Linux-on-Windows works as Linux here)

## The command for **Mac**


```
 curl http://apertium.projectjj.com/osx/install-nightly.sh | sudo bash
```

## The command for **Linux**


```
TODO: Add command for Linux here
```

## Next steps

Find a place to store the divvun github files, e.g. in 

```
~/git/divvun/
```

Go to this folder, e.g. with a command like

```
cd ~/git/divvun/
``` 


Then clone the divvun-gramcheck folder from the divvun github site (via **https** as shown here, or via **ssh**) and compile and install it 
on your computer:

```
 git clone https://github.com/divvun/divvun-gramcheck
 
 cd divvun-gramcheck
 
 scripts/get-pugixml-and-build
 
 sudo make install
``` 

 
# Set up and compile the grammarchecker



In $GLANGS/lang-$LANG, do


```
./autogen.sh
./configure --enable-apertium --enable-syntax --enable-grammarchecker --enable-tokenisers --enable-alignment --enable-reversed-intersect
make
cd tools/grammarcheckers
make dev
```


# More documentation


Have a look at [these course notes](https://gtsvn.uit.no/langtech/trunk/courses/grc/helsinki_2018/notes.txt)


For testing, look at the **Testing** section on the [grammarcehcker documentation page](../GrammarCheckerDocumentation.md). You may also get some hints from the commands at the beginning of the `grammarchecker.cg3` file in the `tools/grammarcheckers` folder of your language.
