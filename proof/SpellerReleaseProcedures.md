# Speller release procedure

1. Create a branch from the codebase you want to use after testing the codebase
    - ... or add bug fixes to an existing release branch
1. build and upload the speller

# Build a bug fix release

1.  check out the branch for which you want to release a bug fix, e.g.:
  `https://gtsvn.uit.no/langtech/branches/sma-speller/4.0 sma-speller-4.0`
1. cd into the branch, then `giella-core`
1. `./autogen.sh && ./configure`
1. `export GTCORE=`pwd`` - to set the branch-specific `giella-core` as the
  Giella core to use
1. `cd ../$GIELLALANG/`
1. `./autogen.sh && ./configure`
    - Remember proper speller release configurations! Will vary a bit from language
   to language, but typically something like:

```sh
./configure --without-xfst --with-hfst --enable-spellers --disable-syntax --disable-transcriptors --disable-analysers --disable-generators --enable-alignment
```

Merge your changes as needed, e.g. to merge a single file, do as follows:

```sh
svn merge \
^/trunk/langs/smj/am-shared/tools-spellcheckers-fstbased-desktop-hfst_prods_n_upload-dir-include.am \
am-shared/tools-spellcheckers-fstbased-hfst_prods_n_upload-dir-include.am
```

In case you get conflicts, review and resolve them.

You can also specify the revisions you want to merge, to pick only the changes
you are interested in:

```sh
svn merge --revision 126367:128639 \
^/trunk/langs/smj/am-shared/tools-spellcheckers-fstbased-desktop-hfst-dir-include.am \
am-shared/tools-spellcheckers-fstbased-hfst-dir-include.am
```

Then build and test the spellers:

1. `time make -j`
1. test etc. (see next section)
1. if everything is ok, upload:

```sh
cd tools/spellcheckers/fstbased/[desktop/]hfst/
make upload
```

You can also upload just some of the packages, if the update is only
relevant for a subset:

```sh
make [uploadoxt | uploadxpi | uploadzip ]( uploadzhfst)
```

# Release

To finish the release:

1. create a new tag for the release
1. update version info page
1. add note to main speller page about the new release, check that the
  documentation is up-to-date
1. Update web site
1. announce the release on FB, G+, e-mail

# Testing

* technical testing:
    * download the spellers, install them and use them on some document
    * run some basic command line spelling process, check that the output is ok
* linguistic testing:
    * forthcoming, but involves several larger tasks to ensure we have no regressions and decent performance
    * only required if there have been linguistic changes (ie technical bug
   fixes usually do not require this type of testing)
