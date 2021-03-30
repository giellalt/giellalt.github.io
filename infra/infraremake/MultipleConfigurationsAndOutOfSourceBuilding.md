It is possible to have multiple configurations for the same source at once. This
is done using the out-of-source build support, also called VPATH building after
the `make` variable used to support this feature.


# Preparations


You only need to do this if you have earlier built a language in-source (the default). What you need to do is:


```
cd $GTLANG
make distclean
```


That is, cd into the language you want to reconfigure, and run the command `make distclean`. This command will not only delete the files you have built,
but also all the generated Makefile's and other generated build files. This is
necessary to not confuse the build system.


# Multiple configurations for a single language


The basic idea is to create a separate build directory for each configuration
you need, and call the configure script from there. Here is one possible setup:


```
cd $GTLANG
mkdir build
cd build
mkdir xerox
cd xerox
../../configure
make
cd ..
mkdir hfst
cd hfst
../../configure --with-hfst --without-xfst
make
```


We just created two build directories — `xerox` and `hfst` — within a common
`build` directory. Within each of them we called the configure script with the
options needed to build for only the fst implementation specified.
Everything should work as usual, including `make check`.


A setup like this can be used to have multiple configurations for the different
build types: for spellers only, for dictionaries only, for oahpa, etc. Using
this type of build setup, it is also easy to compare different build times,
to compare the output of fst's from different configurations, etc., since the
resulting fst's are in different build trees, and thus aren't overwritten by
the next make.


This can also be used to turn off some of the default targets, to speed up the
compilation process as much as possible for the targets one wants. Here is an
example of how to configure for building spellers, and spellers only:


```
cd $GTLANG
mkdir build
cd build
mkdir spellers
cd spellers
../../configure --with-hfst --without-xfst \
                --enable-spellers \
                --disable-analysers \
                --disable-generators \
                --disable-transcriptors
make
```


This will turn off compilation of the regular analysers and generators, and will
for some languages save considerable compilation time. A similar strategy can
of course be put to use for other specialised targets like MT.
(There seems to be some shortcomings that should be fixed, vislcg3 files and
generated documentation seems to be built always irrespective of configuration
options.)


**NB!** When using out-of-source / VPATH building, the aliases `usme`,
`dsme`, etc. do **NOT** work. This is because the aliases have hard-coded
paths relative to `$GTHOME/langs/`. The plan is to replace the aliases with
shell scripts, allowing us to test different locations for the fst files, and
thus be able to handle such build setups in a more intelligent way.


# Building many languages at once


It is possible to use this same strategy at the level of the `$GTHOME/langs/`
directory, with an additional option to only compile for a subset of the
languages. To do this, do as follows:


```
$GTHOME/langs/
mkdir build
cd build
mkdir xerox
cd xerox
../../configure --enable-langs="sma sme smj sms smn yrk"
make
```


We have just configured a build tree that will only build the default Xerox
fst's, and only for the languages `sma, sme, smj, sms, smn` and `yrk`. One
can also do `make check` to test that these languages (and these only) all
pass the tests that we have defined.


To do the same for Hfst type fst's, you specify the hfst option as usual:


```
$GTHOME/langs/build/
mkdir hfst
cd hfst
../../configure --enable-langs="sma sme smj sms smn yrk" --with-hfst --without-xfst
make
```


The `--enable-langs` option is understood by the `configure` script within
`$GTHOME/langs/`, the rest of the options are passed on to the `configure`
scripts in the language subdirectories.


Here is a configuration for compiling and testing all but a few languages:


```
 ../../configure --enable-langs="bxr chp ciw cor crk est fao fin fkv hdn ipk \
 izh kca kpv liv lut mdf mhr mns mrj myv nio nob olo ron rus sjd sma sme smj \
 smn sms som udm vep vro yrk"
```


The only languages left out are: `kal, rup, sje, tat, tku, vot`. Of these six
languages `kal` builds fine, but takes an awful lot of time, whereas the rest
have lexc errors that must be cleaned up. All other languages build just fine.
This configuration only builds Xerox since it is so much faster, but this makes
for a nice check that the code is syntactically valid.


**NB!** During configuration, the configuration script will traverse all
language directories and it looks like it will build all of them. But when it
comes to build time, only the specified languages will actually be built.


Using VPATH builds in the `langs/` directory is a much more flexible solution
than using a shell script to build all languages, as it allows as many
configurations as you want, with different language combinations, different fst
technologies, different target options, etc. To keep track of all the different
build configurations, it is probably wise to give the different build
directories descriptive names reflecting the intended/actual configuration used.


# Restrictions on VPATH building


There is really only one restriction:


You **can not combine** VPATH building with in-source building.


That is, you can't have both a separate `build/` directory **and** build
directly within your `$GTLANG/` directory. This means that as long as we rely
on the aliases mentioned above,
**you can't have both working aliases and VPATH building.**
