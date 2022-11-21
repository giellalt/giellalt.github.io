Useful commands
===============



Here we add useful commands.


# MT commands


```
echo "Nu lea." | apertium -d . sme-smn
```


The program actually goes through 9 steps
in order to make the translation 
(cf. [this picture of the overall process](http://wiki.apertium.org/wiki/Apertium_for_Dummies),
if you are a visual person).


In order to see what goes on, we may stop on any of the 9 steps:


- **sme-smn-morph**	   <=== full morphology
- **sme-smn-disam**	   <=== morphological disambiguation
- **sme-smn-syntax** <=== syntactical disambiguation
- **sme-smn-biltrans**	   <=== includes bidix
- **sme-smn-lextor** <=== lexical selection
- **sme-smn-chunker** <=== t1x transfer rules
- **sme-smn-interchunk**   <=== t2x transfer rules
- **sme-smn-postchunk**	   <=== tx3 transfer rules
- **sme-smn**   <=== full MT
- **sme-smn-dgen**        <=== debugging-generation
- sme-smn-debug              <=== debugging


We thus write `echo "Nu lea." | apertium -d . sme-smn-morph`
etc. instead of only `sme-smn`, to get the output we want.
With all the tags the output may be messy. A practical advice 
is to output one word on each line:


```
echo "Nu lea." | apertium -d . sme-smn-morph | tr ' ' '\n'
```


[Here is the documentation for these modes](http://wiki.apertium.org/wiki/Modes)	


# The regression test


(Regression tests are tests ensuring things do not get worse).


To run the tests, write:


t/update-latest
t/regression-test


The number at the bottom indicates the number `success/test`.


To add tests, go to these pages, click "edit" and format as for the other sentences:


Pending tests (just add tests here)

- [http://wiki.apertium.org/wiki/North_Saami_and_South_Saami/Pending_tests]
- [http://wiki.apertium.org/wiki/Northern_Sámi_and_Lule_Sámi/Pending_tests]
- [http://wiki.apertium.org/wiki/Northern_Sámi_and_Inari_Sámi/Pending_tests]


Regression tests (Add tests that succeed here)

- [http://wiki.apertium.org/wiki/Northern_Sámi_and_Lule_Sámi/Regression_tests]
- [http://wiki.apertium.org/wiki/Northern_Sámi_and_Inari_Sámi/Regression_tests]


Cf. also [the documentation](https://github.com/unhammer/apertium-wiki-tests).


# Morphological analysis and generation

How to use the MT analysers and generators
**automorf** (for analysis) and **autogen** (for generation)




```
Analyse North Saami:
echo ja|hfst-proc -a sme-smn.automorf.hfst
^ja/ja<cnjcoo>$


Generate North Saami:
echo '^ja<cnjcoo>$'|hfst-proc -d sme-smn.autogen.hfst
ja


Analyse Inari Saami:
echo já|hfst-proc -a smn-sme.automorf.hfst
^já/já<cnjcoo>$


Generate Inari Saami:
echo '^já<cnjcoo>$'|hfst-proc -d sme-smn.autogen.hfst
já
```


