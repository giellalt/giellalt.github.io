
Compiling Apertium files
========================

Apertium needs three components:


1. The source language
1. The target language
1. the translation program


# Fetching the files from Apertium

We assume you have [installed the giellalt infrastructure already](https://giellalt.uit.no/infra/GettingStarted.html). The languages are found in their respective folders in `$GTHOME/langs/`.

Fetching the **Apertium** files is done [in the same way as for the giellalt files](https://giellalt.github.io/infra/SetUpTheFiles.html). In the path to download, exchange *giellalt* with *apertium*. The language (pair) string must of course also be changed. You probably want to put the giellalt and apertium directories in different *giellalt* and *apertium* directories.

Here we show how to fetch files. First, we show how to fetch *lang-sme* from giellalt, and then the *sme-sma* pair and the *nob* language model from apertium. The commands are for the ones using git with svn-style commands:


```sh
svn co https://github.com/giellalt/lang-sme.git/trunk lang-sme
svn co https://github.com/apertium/apertium-sme-sma.git/trunk apertium-sme-sma
svn co https://github.com/apertium/apertium-nob.git/trunk apertium-nob

```

Here are the same examples, fetched with git commands:

```sh
git clone git@github.com:giellalt/lang-sme.git
git clone git@github.com:apertium/apertium-sme-sma.git
git clone git@github.com:apertium/apertium-nob.git

```

Apertium is documented on its [github page](https://github.com/apertium) and on its [wiki](https://wiki.apertium.org/wiki/Main_Page). Released apertium language pairs can be used on [apertium.org](https://apertium.org/index.eng.html#?dir=nob-nno&q=)

# Compiling the source and target languages


For each language pair you first compile each language. Note that some languages are compiled **in Apertium**, others **in the Giellalt infrastrucutre**. Norwegian Bokmål and German are e.g. compiled in Apertium. Saami and northern languages are compiled on Giellalt.


## Compiling the languages in the *giellalt* infrastructure

Go to the relevant language folder, here e.g. `sme`, and set up the configuration for MT:

```sh
cd $GTLANGS/lang-sme/
./configure --enable-apertium
```

Now, be prepared to **wait**, from 15 minutes to several hours depending upon
the language and your computer.  The compilation procedure will store the binary
files in `tools/mt/apertium` in
each language folder and the apertium compilers will read them from that location.

While waiting, do the same for the other language(s) you want. Go to the
folder of the other language you want to translate as well (*sma, smj, smn*),
so that one for e.g. *sme-sma* must compile *sme* **and** *sma*.
Remember to reset the .configure option afterwards, e.g. to
`./configure` if that is what you use for FST work.

To check that you have compiled the relevant files, file, write:


```sh
ls -l tools/mt/apertium/*.gz
```

If everything went well, you have new `.gz` files in the apertium folder.

**Remember that you must have compiled BOTH the languages you want to translae between.**

## Compiling the languages in the *apertium* infrastructure.

For language pairs involving Giellalt languages, we take Norwegian Bokmål and German from Apertium. In addition to that, Apertium contains more than 100 languages (see the documentation on the Apertium github page or the Apertium wiki).

In the apertium-nob you fetched (above) folder, simply do:

```sh
./autogen.sh
make -j
```

Note that all Apertium folders contain a README file.

# Compiling the MT program itself

All Apertium language pairs (also the giellalt ones, e.g. sme-sma) are
stored on Apertium github:

- [https://github.com/apertium/apertium-sme-nob](https://github.com/apertium/apertium-sme-nob)
- [(https://github.com/apertium/apertium-sme-sma](https://github.com/apertium/apertium-sme-sma)
- etc. for other language pairs, cf. [the full list](https://github.com/apertium)

We assume you fetched your language pair folder as expleined above. For each language **pair** you must, in the folder of the language pair, set up a pointer to the **two languages in the language pair**:

For sme-sma (which is a pair with two giellalt languages), do this in the Apertium folder, e.g. `apertium-sme-sma`:

```sh
./autogen.sh --with-lang1=$GTLANGS/lang-sme/tools/mt/apertium --with-lang2=$GTLANGS/lang-sma/tools/mt/apertium
make -j
```

For pairs with **one** Apertium language, e.g. sme-nob, do this in `apertium-sme-nob`:

```sh
./autogen.sh --with-lang1=$GTLANGS/lang-sme/tools/mt/apertium --with-lang2=/path/to/apertium-nob
make -j
```

The command to test that everything is ok is, in each folder:

```sh
echo ja | apertium -d. sme-sma
echo ja | apertium -d. sme-nob
etc.
```

# In case of trouble

## cg compiler version mismatch

You may get this type of error message:

```sh
$ echo ja | apertium -d . fin-est
Error: Grammar revision is 9705, but this loader requires 10043 or later!
```

Now, you may have an old vislcg3 / cg-proc compiler. Test that:

```sh
vislcg3 --version
cg-proc --version
```

If the number you get (**0.9.9.10195**) is lower than the error message
requires, you should update vislcg3. It may be, however, that the version number
is ok but you still get the error message. In that case, you have old
binary files although you have updated your compeler. In that case,

- in the apertium-LANG1-LANG2 folder, write `make clean`
- in the `$GTLANGS/lang-<LANG>/` folder, delete the `tools/mt/apertium/*.gz` files

Thereafter, repeat the installation procedure.

## More

... to be written, when reported.
