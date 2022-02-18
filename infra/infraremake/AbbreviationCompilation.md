Compiling tools for abbreviation handling
=================


Text is preprocessed and made into words and sentences. In order to do
the latter we need to handle abbreviations. The linguistic sides of
the issue are found
[in this document](/lang/sme/docu-sme-preprocessor.html), here is
[a more specific documentation on the linguistic reasoning](../../ling/preprocessor.html)
see also the [Preprocessor Specification](../../proof/gramcheck/doc/PreprocessorSpecification.html)
on the pmatch fst behind the hfst method.


Here we look at how to compile and use the preprocessor that deals
with the abbreviations.


## Abbreviation handling with hfst


This is the recommended approach. Compile and test with the following
setting (here with sme as example):


```
./configure --with-hfst --enable-tokenisers
make
echo "dr. Watson."|hfst-tokenise  $GTHOME/langs/sme/tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst
```


The result should treat the first period as part of the abbreviation
"dr.", but the second as a period separated from the word it was
attached to.




## Abbreviation handling with xfst


This method is not actively maintained, but documented here in case you have not installed hfst.


Standing in the catalogue `$GTHOME/langs/$LANG` check whether you have a file abbr.txt in the
folder `tools/tokenisers`. If you do, you should be fine, and can write


```
echo "dr. Watson."|preprocess --abbr=tools/tokenisers/abbr.txt
```


The result should be as above.


If you don't have this file, you may compile it as follows:


In the $LANG catalogue (the catalogue of your language), give the
compilation setting and compile as follows:


```
./configure --enable-abbr
cd tools/tokenisers
make abbr
```


The result should be a file `abbr.txt` in `tools/tokenisers`, and
you may test it with the `preprocess` command as given above. 


