# Multiple configurations and out of source building

It is possible to have multiple configurations for the same source at once. This
is done using the out-of-source build support, also called VPATH building after
the `make` variable used to support this feature.

# Preparations

You only need to do this if you have earlier built a language in-source (the default). What you then need to do is:

```sh
cd $GTLANG # ie lang-xxx
make distclean
```

That is, cd into the language you want to reconfigure, and run the command `make distclean`. This command will not only delete the files you have built,
but also all the generated Makefile's and other generated build files. This is
necessary to not confuse the build system.

# Multiple configurations for a single language

The basic idea is to create a separate build directory for each configuration
you need, and call the configure script from there. Here is one possible setup:

```sh
cd $GTLANG # ie lang-xxx
mkdir build
cd build
mkdir xerox
cd xerox
../../configure --without-hfst --with-xfst
make
cd ..
mkdir hfst
cd hfst
../../configure
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

```sh
cd $GTLANG
mkdir build
cd build
mkdir spellers
cd spellers
../../configure --enable-spellers \
                --disable-syntax  \
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

**NB!** When using out-of-source (aka `VPATH`) building, the aliases `usme`,
`dsme`, etc. do **NOT** work. This is because the aliases have hard-coded
paths relative to `$GTHOME/langs/`. The plan is to replace the aliases with
shell scripts, allowing us to test different locations for the fst files, and
thus be able to handle such build setups in a more intelligent way.

# Restrictions on VPATH building

There is really only one restriction:

You **can not combine** VPATH building with in-source building.

That is, you can't have both a separate `build/` directory **and** build
directly within your `$GTLANG/` directory. This means that as long as we rely
on the aliases mentioned above,
**you can't have both working aliases and VPATH building.**
