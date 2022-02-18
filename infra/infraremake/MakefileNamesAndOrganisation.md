Naming and organisation of the makefiles
========

The directory structure is described in [this document](NewinfraCatalogues.html). Almost every
directory has one `make` file, named `Makefile.am`. The `.am` suffix is
there to indicate that the files are going to be processed by `automake`, to
produce `Makefile.in` files, which are processed by `configure` to produce
the final `Makefile`'s that `make` can process.


Most of the `Makefile.am` files have an `include` statement at the end, by
which they include shared build instructions, These shared build instructions
are common to all languages (thus *shared*), and they are always located in
`$top_srcdir/am-shared` (`$top_srcdir` refers to the language dir, like
`sme`, `sma`, etc.).


## The "am-shared" dir


There are three types of files in the **am-shared** dir, each with their own
file naming scheme:


1. named after the dir of the including file (these files should always be
   included by the `Makefile.am` files, then these included files can further
   include other include files, see below). These files **must always end** in
   `-dir-include.am`.
* `doc-dir-include.am`
* `src-morphology-dir-include.am` => included by the following file: \\
  `src/morphology/Makefile.am`
* `tools-grammarcheckers-dir-include.am`
* `tools-spellcheckers-fstbased-hfst-dir-include.am`
* `tools-spellcheckers-dir-include.am`


2. named after the type of source file to be processed by the makefile. These
   are utility include files, so to speak, in the sense that they will process
   files of one type irrespective of source file location, using the utility (or
   utilities) as indicated by the the file name of the include file. The name of
   these files do **not** include an underscore, and **not** the string
   `-dir`. This allows processing abstration over file types independent of
   location, and will make it easier to maintain the core build code for all
   file types.
* `vislcg3-include.am` => compile vislcg3 files
* `twolc-include.am  ` => compile twolc files
* `regex-include.am  ` => compile regex files


3. named after configure option/application-specific targets, and after the
   including file. These files are always included by another include file, and
   the purpose is to avoid filling up the main include file by all sorts of
   optional build code. The first part of the filename follows
   *the directory part* of the including file, then **followed by underscore**
   (` _ `) followed by the tag for the configure option, and finally ending
   with `-include.am` as usual.
* `src_dictionary-include.am` => included by `src-dir-include.am`
* `src_oahpa-include.am`
* `src_mt-include.am`


Summary: it is possible to programmatically identify all three types:
* main include files contain the string ` -dir- `
* configure option include files contain **underscore** (` _ `) 
* general compilation file names based on source type include neither


## Other (regular) dirs


The Automake files are everywhere else named `Makefile.am`.
These do always include the Automake include files in `am-shared/`, and always
and only the include file named after the directory which the `Makefile.am` is
located in. That is, the file `tools/spellcheckers/fstbased/Makefile.am`
includes the file `am-shared/tools-spellcheckers-fstbased-dir-include.am`.


There are a couple of conventions to observe:

1. the target `clean-local:` should always be defined in the local
  `Makefile.am` - not in the include files; if there is a need to define
  clean operations in the include files, it should be through the use of the
  variable `CLEANFILES`, e.g. something like:\\
  `CLEANFILES=$(BUILDFILES)`
1. the include file `am-shared/silent_build-include.am` should only be included
  by the `*-dir-include.am` files to avoid double inclusion and subsequent
  double definitions of the same variables


There might be some violations of these conventions, they should be cleaned up
as they are found.
