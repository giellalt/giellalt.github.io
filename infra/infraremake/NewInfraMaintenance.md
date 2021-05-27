# Infrastructure maintenance

Below there are a couple of example tasks, and steps to take to realise them.

#  Task - modify an existing target

If you want to change the build procedure (e.g. to add or remove a new feature from a specific fst for all languages), work through this task.

Here is the procedure, with `dictionary-include.am` in 
`am-shared` as an example.
The local directory `am-shared` is an exact copy of:
`$GTCORE/langs-templates/und/am-shared/`

1. Change `dictionary-include.am` locally (for your test language)
  and make sure everything works.
1. copy your local `dictionary-include.am` to the `und/am-shared/` directory
1. write a checkin message in `und/und.timestamp` 
1. check in **both** `dictionary-include.am` and `und.timestamp`.
1. `cd $GTHOME/langs`
1. `./update-all-from-core.sh -t und`
1. check that things are working correctluy for 1-2 other languages
1. when everything looks fine, check in *all languages at once* (but preferably
  *only* the changes coming from `und/`

#  Task - add a new fst type

When a new fst type is called for, the procedure is roughly the same as above,
with a few additions. As an example, we will create a new fst for dictionary
analysers (ie to be used for analysing input to dictionary lookup).

But first we need to answer the following question: where do we add the code for
building the new fst? The idea so far has been to add default targets to the
file `am-shared/topdir-include.am`, and optional targets (turned on via
`configure` options) to separate include files such as
`dictionary-incluce.am`. Generally this line will continue, but if the list of
default targets grow too long, even those might be split out in separate include
files.

For our example, we will edit `dictionary-incluce.am`. As always, edit in a
local language dir first, to test that the new target works. When all is done
and works fine, copy the modifications to the `und` template. Here are the
steps to go through:

1. edit `am-shared/dictionary-incluce.am` - the following steps will tell the
  system **how** to build the fst:
	1. add a new target `analyser-dict-gt-desc.tmp.hfst` 
		2.  it is important that
   the target is named `*.tmp.*` to allow local overrides.
	1. write the build instructions for the *language neutral parts* of the build
   1. if language specific additions, changes or filters are required, these
   should be added to a separate `*.tmp.hfst -> *.hfst` target in the local
   Makefile.am (if no such changes are needed, `*.tmp.hfst` will just be
   copied to `*.hfst`).
	1. ensure that all filters required are actually built in the `filters/` dir,
   and add dependencies to them all (such that the build will break properly if
   a filter is not available, and all required filters are rebuilt if needed).
1. edit `src/Makefile.am` - the following steps will tell the system **when**
  to build the fst target:
	1. to tell the build system that we want a target to be built, it must be added
   to the variable `GT_ANALYSERS_HFST` (for hfst transducers).
	1. ... but since we only want this transducer to be built when the user has
   explicitly requested dictionary fst's, we need to wrap that variable
   assignment within a conditional: \\ find the text
   `if WANT_DICTIONARIES` and within that `if` block, write the following:\\
   `GT_ANALYSERS_HFST+=analyser-dict-gt-desc.hfst`\\
   (the `+=` part will add the new fst to the list of fst's already assigned
   to the variable)
	1. if you need to make use of a new conditional, that requires some `M4` work
   and will be covered in a separate tutorial
1. test - remember to `./configure` with the proper option
1. if everything works as it should, copy to the `und` template, add a note in
  `und.timestamp`, and commit
1. to populate all languages with the new feature, run
  `$GTHOME/langs/update-all-from-core.sh -t und`
1. check that the new (and old) build(s) work(s) in a couple of languages - if
  everything is ok, commit all languages at once (but only the changes belonging
  to the new feature - it is best to merge with a clean version of the
  `langs/` dir)

# Task - add a new template

Task: add **plx** and **Hunspell** conversion to the new infra, but only for a limited set of languages (sma, smj, later sme).

Steps:
1. create a new template, and populate it
1. add template timestamp to the relevant languages
1. add a plx option to the automake and autoconf files
1. merge the template
1. build and test
1. fix bugs in the template, rerun from 3

# The steps in detail

## create a new template, and populate it

We want a new template named `plxtools`.

Then, we need to fill that template with the following content:

```
plxtools.timestamp
am-shared/plx-include.am            # this is the real build file
tools/spellcheckers/plx/
                        Makefile.am # includes plx-include.am
                        src/        # shared src files - rsrc, rev, version
                        tmp/        # large plx files, make clean safe
```

The **Hunspell** conversion is common to all languages, and is thus part of the `und/` template. These parts need to be added to that template:

```
am-shared/regex-include.am           # this is the real build file
tools/spellcheckers/filters/            # move common filters in here
                            Makefile.am # includes the usual regex-include.am
```

## add template timestamp to the relevant languages

This is pretty simple:

```
cd $GTLANG
touch plxtools.timestamp
svn add plxtools.timestamp
```

As soon as the file is created, the merge script will pick take notice, and start merging files from that template to the language with the timestamp file for that template.

## add a plx option to the automake and autoconf files

Both Hunspell and PLX spellers should by default **not** be built. To turn them on, one should use something like `--enable-plx` and `--enable-hunspell`. See the Oahpa ditto for a way of doing this.

## merge the templates

Merge the template for a specific language as follows:

```
cd $GTLANG
../../giella-core/scripts/merge-templates.sh -t plxtools
```

That is, specify the template you want to merge using the -t option, both to avoid timeconsuming operations, and to avoid merging several unrelated things at the same time.

## build and test

Essentially:

```
make
make check
```

and looking at the output.

## fix bugs and redo

After the known bugs have been fixed, re-merge, test and evaluate. Iterate till everything works as planned.

# Other issues

There are definitely a number of other issues. The goal is to have a portable build system with as few dependencies as possible, and with all dependencies checked for and reported properly to the user if missing.

These goals require that we follow the Autotools conventions, and use supported variables and macros where we earlier often used more homegrown solutions.

See the following sites for useful documentation and help:
* [automake manual](http://www.gnu.org/software/automake/manual/automake.html)
* [autoconf manual](http://www.gnu.org/software/autoconf/manual/autoconf.html)
* [Autotools myth buster](http://www.flameeyes.eu/autotools-mythbuster/index.html)

## Important pitfalls

* use AC_PROG etc for defining programs and tools;
* use the special MKDIR variable (check the docu for the full name)
* don't require more than really necessary - let the rest be optional, this will allow most stuff to be built on more systems

#  Makefile debugging

Install [make2graph](https://github.com/lindenb/makefile2graph)

```
make -Bnd sma-mobile.zhfst | make2graph | dot -Tpng -o sma-mobile-dag.png
```

Result: a visual representation of the dependency graph, making it easy to spot wrong dependency chains, and
where the problem most likely is.
