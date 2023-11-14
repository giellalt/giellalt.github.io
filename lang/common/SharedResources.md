# Shared resources

Some resources can be shared across languages. There are two types:

- build instructions
- linguistic data

# Build instructions

The build instructions are found in `giella-core`, and they are required for proper functioning of the infrastructure. `giella-core` is always cloned automatically if not already exsting in the default or specified location.

# Linguistic data

There are two types of shared linguistic data:

- lexical or other resources common to several languages
- lexical or other resources in one language used by another language

## Resources common to many languages

By default, all language repositories get data from `shared-mul`, which contains some lexical data believed to be useful to all languages, like symbols and emojis. The setup consists of two parts:

An inclusion specification in `configure.ac`:

```m4
gt_USE_SHARED([common], [shared-mul], [giella-shared-mul])
AM_CONDITIONAL([HAVE_SHARED_COMMON], [test x$gt_SHARED_common != xfalse])
```

and processing instructions in relevant `Makefile.am` files, e.g. in `src/fst/Makefile.am`:

```make
# change handling of shared lexical data here:
if HAVE_SHARED_COMMON
url.tmp.lexc: $(gt_SHARED_common)/src/fst/url.lexc
	$(AM_V_CP)cp -f $< $@

generated_files/mul-$(GLANG)-%.lexc: $(gt_SHARED_common)/src/fst/stems/%.lexc
	$(AM_V_at)$(MKDIR_P) generated_files
	$(AM_V_CP)cp -f $< $@
else
# this is "safe" fallback (compiles but you miss everything)
url.tmp.lexc:
	echo "LEXICON Root" > $@
	echo "< h t t p (s) %: %/ %/ ?*> # ;" >> $@

generated_files/mul-$(GLANG)-%.lexc:
	$(AM_V_at)$(MKDIR_P) generated_files
	echo "! Missing shared common data" > $@
endif
# add other lexical shared data handling here
```

Please note the use of the `else` clause, to provide a safe fallback in case the shared resource is not available for whatever reason.

Add more sections like the above if you need or want to include more shared resources. A list of repositories with shared linguistic resources can be found [here](../../SharedResources.md).

## Resources in one language used by another language

In addition to sharing resources common to many languages, one can also share resources among languages. This is used by the Sámi languages, to avoid duplication of data and maintenance spaghetti. The idea is that for example place names from all over Sápmi are useful in all languages, but maintaining a list of these names in each language repo is a waste of time, and prone to errors.

Thus, we maintain all SME names in the SME repo, and then *include* these names in the other Sámi repositories.

The setup is very much like above for shared resources, with one additional step to process the included data to fit the including language setup. This can involve changing some multichars, continuation lexicons, etc.

In the case of Sámi names, the inclusion is done according to the following algorithm:

- only include native names, ie exclude all names with an `+OLang/xxx` tag
- add an `+Olang/xxx` tag to the included names, denoting the source Sámi language
- only allow the included names in nominative, and no compounding — for now at least
