# Task 1: convert keyboard layouts to new bundle structure

1. create a shell script `convert2bundle.sh` as follows:

```sh
#!/bin/bash
# Variables:
convertordir=/Users/smo036/gitlangtech/kbdgen/support/convertor
path=$(pwd)
language=$( basename $path | cut -d'-' -f2 )

if ! ( ls $path | grep kbdgen ) ; then
    cd $convertordir
    node index.js $path/project.yaml $path/$language.kbdgen
else
    echo "Already converted!"
fi
```

1. run script: `gut apply --script convert2bundle.sh -o giellalt -r keyboard`
1. check verbose status of all repos: `gut status -v -o giellalt -r keyboard-`; result:

```
+---------------------------------------------------+
| Repo                   branch  ±origin  U D M C A |
+===================================================+
| keyboard-smj           master  0        0 0 0 0 0 |
| keyboard-liv           master  0        1 0 0 0 0 |
| U liv.kbdgen/                                     |
| ----                                              |
| keyboard-myv           master  0        1 0 0 0 0 |
| U myv.kbdgen/                                     |
| ----                                              |
| keyboard-sme           master  0        0 0 0 0 0 |
| keyboard-nch           master  0        1 0 0 0 0 |
| U nch.kbdgen/                                     |
| ----                                              |
| keyboard-vro           master  0        1 0 0 0 0 |
| U vro.kbdgen/                                     |
| ----                                              |
| keyboard-ike           master  0        1 0 0 0 0 |
| U ike.kbdgen/                                     |
| ----                                              |
| keyboard-rom           master  0        1 0 0 0 0 |
| U rom.kbdgen/                                     |
| ----                                              |
| keyboard-rcf           master  0        1 0 0 0 0 |
| U rcf.kbdgen/                                     |
| ----                                              |
| keyboard-mns           master  0        0 0 0 0 0 |
| keyboard-mdf           master  0        1 0 0 0 0 |
| U mdf.kbdgen/                                     |
| ----                                              |
| keyboard-yrk           master  0        0 0 0 0 0 |
| keyboard-kon           master  0        1 0 0 0 0 |
| U kon.kbdgen/                                     |
| ----                                              |
| keyboard-sjd           master  0        1 0 0 0 0 |
| U sjd.kbdgen/                                     |
| ----                                              |
| keyboard-grn           master  0        1 0 0 0 0 |
| U grn.kbdgen/                                     |
| ----                                              |
| keyboard-nno           master  0        1 0 0 0 0 |
| U nno.kbdgen/                                     |
| ----                                              |
| keyboard-nds           master  0        1 0 0 0 0 |
| U nds.kbdgen/                                     |
| ----                                              |
| keyboard-smn           master  0        0 0 0 0 0 |
| keyboard-smi           master  0        0 0 0 0 0 |
| keyboard-niv           master  0        1 0 0 0 0 |
| U niv.kbdgen/                                     |
| ----                                              |
| keyboard-udm           master  0        1 0 0 0 0 |
| U udm.kbdgen/                                     |
| ----                                              |
| keyboard-izh           master  0        1 0 0 0 0 |
| U izh.kbdgen/                                     |
| ----                                              |
| keyboard-lin           master  0        1 0 0 0 0 |
| U lin.kbdgen/                                     |
| ----                                              |
| keyboard-sma           master  0        0 0 0 0 0 |
| keyboard-cux           master  0        0 0 0 0 0 |
| keyboard-kpv           master  0        0 0 0 0 0 |
| keyboard-sms           master  0        0 0 0 0 0 |
| keyboard-vot           master  0        1 0 0 0 0 |
| U vot.kbdgen/                                     |
| ----                                              |
| keyboard-ine           master  0        1 0 0 0 0 |
| U ine.kbdgen/                                     |
| ----                                              |
| keyboard-ckt           master  0        0 0 0 0 0 |
| keyboard-mhr           master  0        1 0 0 0 0 |
| U mhr.kbdgen/                                     |
| ----                                              |
| keyboard-bxr           master  0        1 0 0 0 0 |
| U bxr.kbdgen/                                     |
| ----                                              |
| keyboard-kca           master  0        1 0 0 0 0 |
| U kca.kbdgen/                                     |
| ----                                              |
| keyboard-urj           master  0        1 0 0 0 0 |
| U urj.kbdgen/                                     |
| ----                                              |
| keyboard-kio           master  0        1 0 0 0 0 |
| U kio.kbdgen/                                     |
| ----                                              |
| keyboard-template-und  master  0        1 0 0 0 0 |
| U template.kbdgen/                                |
| ----                                              |
| keyboard-ces           master  0        1 0 0 0 0 |
| U ces.kbdgen/                                     |
| ----                                              |
| keyboard-hak           master  0        1 0 0 0 0 |
| U hak.kbdgen/                                     |
| ----                                              |
| keyboard-mrj           master  0        0 0 0 0 0 |
| keyboard-crk           master  0        0 0 0 0 0 |
| keyboard-sju           master  0        1 0 0 0 0 |
| U sju.kbdgen/                                     |
| ----                                              |
| keyboard-see           master  0        0 0 0 0 0 |
| keyboard-hdn           master  0        1 0 0 0 0 |
| U hdn.kbdgen/                                     |
| ----                                              |
| keyboard-tyv           master  0        1 0 0 0 0 |
| U tyv.kbdgen/                                     |
| ----                                              |
| =====                                             |
| Total                          0        30        |
+---------------------------------------------------+
```
Looks good, all new (Untracked) files/dirs are looking correct.

3. commit all repos: `gut commit -o giellalt -r keyboard- -m "Convert repos to kbdgen 2 bundle structure."`
1. push all commits upstream: `gut push -o giellalt -r keyboard- -b master`

# Task 2: create a branch

```sh
gut create branch --push -n tts-experiment -o giellalt -r lang-XXX
```

This will create the branch `tts-experiment`, and push it to `remote origin`, for all repositories matching `lang-XXX`, for the organisation `giellalt`.

# Task 3: manage topics, info

## Set topics

```sh
gut topic set -o giellalt -r "lang-" -t finite-state-transducers constraint-grammar minority-language nlp proofing-tools language-resources
```

## Add more topics

Add one more topic to a subset of the languages:

```sh
gut topic add -o giellalt -r "lang-(s|cr)" -t indigenous-languages
```

## Specify website

```sh
gut set info -o giellalt -r "(lang-|giella-)" -w https://giellalt.uit.no
```

# Task 4: make repo(s) public/private

```sh
gut make -o giellalt -r "(lang-|giella-)" private
```

# Task 5: add description with dynamic content

```sh
gut set info -o giellalt -r 'lang-XXX' --des-script giella-core/devtools/gut-scripts/reponame2description.sh
```

**NB!** Make sure there is no trailing newline at the end of the output of the script, or it will fail. That is, use `printf`,  *not* `echo`.

# Task 6: create team, and populate with users

```sh
gut create team -o giellalt -t "Kainun kieli" \
-d "Team for working with the kveen language." -m Trondtr snomos
```

# Task 7: add users to an existing team

```sh
gut add users -o giellalt -t giellaltstaff -u ilm024 leneantonsen
```

# Task 8: add webhook

```sh
gut hook create -m json -o giellalt -r 'lang-' \
-s /Users/smo036/langtech/gut/giellalt/giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e "*"
```

Based on experience, it is not advisable to send off all events, at least not if the recipient is IRC, Zulip and similar community tools. The following is a more restricted version that should provide a reasonably balance between staying up-to-date and not being spammed:

```sh
gut hook create -m json -o giellalt -r 'lang-smj' \
-u 'https://giella.zulipchat.com/api/v1/external/github?api_key=SECRETKEY&stream=smj' \
-e check_run code_scanning_alert commit_comment create delete deploy_key fork gollum \
issue_comment issues label member milestone package ping project_card project_column \
project public pull_request pull_request_review pull_request_review_comment push \
release repository repository_import repository_vulnerability_alert secret_scanning_alert \
star team_add watch
```

More information about the various webhook events can be found in the
[GitHub Documentation](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads).

# Task 9: update template, propagate changes to all matching repos

This is a multistep process. Do as follows:

0. Move to the `giellalt` directory: \
`cd $GUTROOTDIR/giellalt`
1. Make sure you have all language repos by cloning all: \
  `gut clone -o giellalt -r '^lang-'` \
  Languages you already have cloned will error out harmlessly
1. `gut pull -o giellalt -r ^template-lang-und`
1. Make changes to the template as needed
1. increase `rev_id` in `.gut/template.toml`
1. commit the changes in the template
1. `gut template apply -o giellalt -r ^lang- -t template-lang-und`
    - review the changes (`gut status -v -o giellalt -r ^lang-` is useful here); when everything is ok, then:
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

Some of the steps explained:

- The sixth step performs the changes from the template to all matching repos,
- and the seventh one commits the changes.
- The eighth step updates the template reference point for each 
  language repo (the revision id in the `.gut/delta.toml` file), and commits it.
  This is necessary for the templating system to know which template
  commit to calculate a delta from, for each language.
- Step ten is just to ensure everything is updated locally before the last step.
- The eleventh and final step makes all changes available to others.

It makes sense to run the stuff through `-r ^lang-zxx` first for testing. 

**NB!** Please note that the repos need to be clean when running this command. Unclean/dirty repos will not be processed. Dirty repos are repos with untracked files, uncommitted changes etc.

**NB2!** If you are adding new files in the `ignored` section in `.gut/template.toml`, you need to copy them manually - these files are not automatically added to all repositories. This can be considered a bug, but it is easily worked around by a command like the followoing:

```sh
for i in lang-*; do cp -f template-lang-und/tools/tts/pipespec.xml.in $i/tools/tts/; done
```

# Task 10: add a new language

Description moved to the [regular infra maintenance page](https://giellalt.github.io/infra/HowToAddANewLanguage.html).

# Task 11: add external repo using `git subtree`

There are a lot of FST descriptions of languages out there, one major such source is [Apertium](https://github.com/apertium). But most of these projects do not make spelling checkers or many other tools based on their morphological description. Since we have the infrastructure and the tools in place to make all languages work, it might be useful to just take those repos, and compile their fst within our infra, and from there make spellers, tokenisers, and a lot of other stuff. To do that, add a new language as follows:

1. create a new language repo as shown above
1. add the external source using `git subtree` as follows:

```sh
git subtree add --prefix src/fst/ext-Apertium-nno https://github.com/apertium/apertium-nno.git master --squash
```
1. Modify `src/fst/Makefile.am` as needed to make everything build

When you later want to update the code from the external repository, do as follows:

```sh
git subtree pull --prefix src/fst/ext-Apertium-nno https://github.com/apertium/apertium-nno.git master --squash
```

# Task 12: Clone multiple repos in one go

The very basic task of getting started:

```sh
gut clone -o giellalt -r ^lang
```

This will clone all repos in the `giellalt` org matching the regular expression `^lang` in the repo name. Use option `-u` to clone using the `https` protocol instead of `ssh`:

```sh
gut clone -u -o giellalt -r ^lang
```

# Task 13: Set team access permission

NB! Requires owner permission by the user doing this!

```sh
gut set permission -o giellalt -p push -t GiellaLTstaff 
```

Result:

- will set __write__ permission for all members of the GiellaLTstaff team, in the organisation GiellaLT
- because we did not specify a regex to match repository names against, the command targets __all__
  repos in the organisation.

__NB!__ Repos not earlier assigned to the team __will silently be added!__
