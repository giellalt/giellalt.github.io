# Compiling and using the analysers

When you have set up the prerequisites in the [Getting Started](GettingStarted.html) documentation,
you want to compile the linguistic analysers and use them.

# Compiling the basic analysers

You build the analysers in the '*language folder*'. Before you do so you must set up a variable `$GTLANGS` in your `~/.profile` file, pointing to the directories where your language directories are stored. Open the file, e.g. as follows `cd && open .profile`. (some unix systems use *.bashrc* or other files, ask your local unix expert). In this file, add the string:

```sh
export GTLANGS="$HOME/path/to/directory"
```

where *path/to/folder* is the path to the directory where you have stored the language directory.

If you have done that, you may go to this language directory. We use Pite Saami as our example (`lang-sje`), replace *sje* with the language code of the language you want to compile:

```sh
cd $GTLANGS/lang-sje
```

First set up the files required to build the analysers (if you get error messages saying that some required files are missing you have probably skipped some steps on the [Getting started](GettingStarted.html) pages):

```sh
./autogen.sh
```

For the first language you compile, you will be asked to go to `giella-core` and `giella-shared` to run some commands there. Do as the system tells you, and return to `lang-sje`.

Now, you must decied what analysers to build. Setup for the core ones you get with the command (for more options, see below)

```sh
./configure
```

You then build the analysers with the command

```sh
make -j
```

This command may take a couple of minutes to run. For our most developed languages (like North Saami) on a not too fast machine it may take half an hour or more.

When the process is done you should find a new-built analyser file: `src/analyser-gt-desc.hfstol` and several more like it in the src catalogue.

For more advanced build options, see the last section below.

# How to use and develop the analysers

The following pages give more information on how to use the analysers.

- [How to user the analysers and generatore](../tools/docu-sme-manual.html)
- [Language-independent documentation](../lang/common/index.html) (how to work on developing the analysers)
- [Language-specific documentation](lang/index.html) (on the language you want to work on)
- Documentation for how to build a new language (ask Trond or Sjur to have it set up and take it from there)

# More advanced build options

The Giella infrastructure can build scores of different linguistic analysers and genrators, taylored for different purposes and using different compilers. The `./configure` command has a wide range of options for that. Different compilers are turned on and off by adding e.g. `--with-xfst` (compiles by using the xfst compiler instead of the default hfst). To turn off hfst and compile with xfst only, write e.g. `--with-xfst --without-hfst`.

Different analysers can then be built by adding the `--enable` option (`--disable` turns off default options). To take an example: In order to enable your system to turn your language model into a spellchecker, add the following to the *./configure* option:

```sh
./configure --enable-spellers
```

 A full list of the options is given by writing

```sh
./configure --help
```

The list of programs that are build (or not) is found in the last half of the help text.

Your current ./configure setting (which is valid until you change it) is shown by writing

```sh
head config.log
```

After you have (re) set your *./configure* option, you must recompile, by writing `make -j` again.

It is possible to have multiple configurations in parallel. Follow
[these instructions](MultipleConfigurationsAndOutOfSourceBuilding.md)
if you want that.

# The full range of options

For the full range of possibilities, there is
[an overview of the technical documentation](Infrastructure.md) for details on how to use our infrastructure to develop your morphologies, lexicons and more to create tools for yourself and your language community.

# Troubleshooting

## CLASSPATH

You may encounter troubles with your CLASSPATH. We are working on it,
here is a fix if the compiler complains it is not set:
In the langs directory, write:

```sh
export CLASSPATH=
```
