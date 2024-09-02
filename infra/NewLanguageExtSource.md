# Add new language with language data from an external repo

There are a lot of FST descriptions of languages out there, one major such source is [Apertium](https://github.com/apertium). But most of these projects do not make spelling checkers or many other tools based on their morphological description. Since we have the infrastructure and the tools in place to make all languages work, it might be useful to just take those repos, and compile their fst within our infra, and from there make spellers, tokenisers, and a lot of other stuff.

We use `git subtree` for adding external repos. To do that, add a new language as follows:

1. create a new language repo as shown [on this page](HowToAddANewLanguage.md)
1. add the external source using `git subtree` as follows:

```sh
git subtree add --prefix src/fst/morphology/ext-Apertium-nno \
https://github.com/apertium/apertium-nno.git master --squash
```

3. Modify `src/fst/morphology/Makefile.am` as needed to make everything build
4. add an `update` target to `Makefile.am` (ie in the root dir of the project); see other languages with an external data source for examples:

```make
update:
	git subtree pull --prefix src/fst/morphology/ext-Apertium-nno https://github.com/apertium/apertium-nno.git master --squash
```

When you later want to update the code from the external repository, you can just run the command `make update` in the root directory of the project.

**NB!** Replace `ext-Apertium-nno` and `https://github.com/apertium/apertium-nno.git` in the commands above with what is correct for your language.

**NB2!** The name of the directoy within `src/fst/morphology/` _must_ start with `ext-`, to make it easy to see that the source code is from an external repo.
