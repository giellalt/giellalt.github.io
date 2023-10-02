# How To Merge Updates From Core

This is a multistep process. Do as follows:

1. Move to the `giellalt` directory: \
`cd $GUTROOTDIR/giellalt`
1. Make sure you have all language repos by cloning all: \
  `gut clone -o giellalt -r '^lang-'` \
  Languages you already have cloned will error out harmlessly
1. `gut pull -o giellalt -r ^template-lang-und`
1. Make changes to the template as needed
1. increase `rev_id` in `.gut/template.toml`
1. commit the changes in the template
1. `gut template apply -o giellalt -r ^lang- -t template-lang-und`
    - review the changes (`gut status -v -o giellalt -r ^lang-` is useful here); when everything is ok, then go to next step
    - if some of the modified files are not included by default, add the option `--optional` to make `gut` also consider files in the `[optiona]` section in `.gut/template.toml` when doing merges
    - might not create new directories, use `rsync -av template-lang-und/path/to/newdir lang-zxx/path/to/`, pay attention to `/`
    - **NB!** If you need to start over (erase all changes, and merge from template again),
      run the above command with the `--abort` option, like this: \
      `gut template apply --abort -o giellalt -r ^lang- -t template-lang-und` \
      That will remove all changes to the matched repos, so that one can start over.
1. `gut commit  -o giellalt -r ^lang- -m "[Template merge] Some commit message"`
1. `gut template apply --continue -o giellalt -r ^lang- -t template-lang-und`
    - add `--skip-ci` if you want to skip CI when pushing all changes to GitHub (requires CI to react to the string `[skip ci]` in the commit message, this is working for all `lang-*` and `keyboard-*`repos in the GiellaLT GitHub organisation)
1. `gut push -o giellalt -r template-lang-und`
1. `gut pull -o giellalt -r ^lang-`
1. `gut push -o giellalt -r ^lang-`

# Some of the steps explained

- The 7th step applies the changes from the template to all matching repos,
- and the 8th one commits the changes in all matching repos.
- The 9th step updates the template reference point for each
  language repo (the revision id in the `.gut/delta.toml` file), and commits it.
  This is necessary for the templating system to know which template
  commit to calculate a delta from, for each language.
- Step 11 is just to ensure everything is updated locally before the last step.
- The 12th and final step makes all changes available to others.

It makes sense to run the stuff through `-r ^lang-zxx` first for testing.

**NB!** Please note that the repos need to be clean when running this command. Unclean/dirty repos will not be processed. Dirty repos are repos with untracked files, uncommitted changes etc.

**NB2!** If you are adding new files in the `ignored` section in `.gut/template.toml`, you need to copy them manually - these files are not automatically added to all repositories. This can be considered a bug, but it is easily worked around by a command like the followoing:

```sh
for i in lang-*; do cp -f \
    template-lang-und/tools/tts/pipespec.xml.in \
    $i/tools/tts/; done
```

# Errors

From time to time `gut template apply` hangs on one or a few repositories. The exact cause of this is not yet known, but here is how to continue, and fix the situation:

1. abort the process (<kbd>Ctrl</kbd>+<kbd>C</kbd>), and notice the name of the repo that hangs
1. rerun `gut template apply` on the remaining repos by using the `--regex` option to target repos that do not hang
    - if `lang-fao` hangs, use a regex like `-r '^lang-[g-z]` to target all repos after `lang-fro`
    - rerun with `-r '^lang-f[i-z]` to target all repos with ISO codes starting on `f` that comes after `fao`
1. manually make the changes needed in the problematic repo(s), and commit with the rest as usual, pr step 8 above
1. run step 9. as usual, the offending repo(s) will give an error message
1. manually update `.gut/delta.toml` with the new git hash and revision number, see one of the non-troubling repos for the correct values
1. commit the changes in the manually fixed repos
1. you probably have to run `gut template apply --abort -o giellalt -r ^lang- -t template-lang-und` at the end to zero out whatever is hanging around from the non-successfull template merge(s)

After this the troubling repositories should work as normal again.
