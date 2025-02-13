# Gut Usage Examples

How to use `gut` for various operations on many `git` repositories at once.

**NB!** Note that many of the commands require at least admin access to the affected repos. Basic git operations like `clone`, `pull`, `commit` and `push` only requires read and (for push) write access.

Tip 1: `git` supports way more commands and operations than `gut`. To apply a non-supported `git` command to a set of repos, write a simple shell script for the `git` command you need, and run it using `gut apply -r reporegex --script path/to/script.sh`. A number of example scripts can be found in `giella-core/devtools/gut-scripts/`.

Tip 2: when initialising `gut`, specify your default organisation, so that you don't have to write it out for each command.

## Reponame regexes

The core of `gut` is to run `git` commands over a set of repos with reponames matching a regex. `gut` supports "extended" regexes, so one can easily match complex patterns if needed. In daily use very simple regexes are usually enough. `^` and `$` are bound to the beginning and end of the reponame.

Some examples:

- `-r ^lang-` — match all repos beginning with `lang-`, thus excluding the repo `template-lang-und`
- `-r '^keyboard-s[jm]'` — match all Sámi keyboard repos
- `-r ^corp-.*-private` — match all private corpus repos
- `-r '^lang-(mhr|fin|kal|izh|kpv|fkv|olo|mdf|sje|sm.|vro)$'` — match a specific set of repos

If a regex (ie `-r`) is **not** specified, the command will match all local repos for commands acting locally, and all repos in a GitHub organisation for commands that asks GitHub for matches.

Regexes are **case insensitive**.

## Task 1: Initialise `gut`

To set up `gut` for the first time, with `giellalt` as your default organisation (so you don't have to specify it for every `gut` operation, do as follows (remember to have your GitHub Peronal access token available):

```sh
gut init --root /path/to/your/gut/root/dir --token PERSONALACCESSTOKEN \
    --organisation giellalt --use-https
```

Using `https` is easiest to set up but less secure.

To use the `git`/`ssh` protocol instead, you need to set up an `ssh` key for GitHub. Follow [these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Non-admin tasks

### Task 2: Clone many repos

The very basic task of getting started:

```sh
gut clone -o giellalt -r ^lang
```

This will clone all repos in the `giellalt` org matching the regular expression `^lang` in the repo name. Use option `-u` to clone using the `https` protocol instead of `ssh`/`git`:

```sh
gut clone -u -o giellalt -r ^lang
```

### Task 3: Pull many repos

To pull all repos you have cloned, do this:

```sh
gut pull -o giellalt
```

And if you have defined `giellalt` as your default GitHub organisation, this can be shortened to:

```sh
gut pull
```

### Task 4: See status of many repos

To see the status of all Sámi languages, both keyboard and language model repos, do as follows:

```sh
gut status -o giellalt -r '^[kl].*-s[jm]'
```

The result could be like this:

```
+--------------------------------------------------------+
| Repo                 branch     ±origin  U  D  M  C  A |
+========================================================+
| keyboard-sjd         main             0  0  0  0  0  0 |
| keyboard-sje         main             0  0  0  0  0  0 |
| keyboard-sju         main             0  0  0  0  0  0 |
| keyboard-sma         main             0  0  0  0  0  0 |
| keyboard-sme         main             0  0  0  0  0  0 |
| keyboard-smj         main             0  0  0  0  0  0 |
| keyboard-smn         main             0  0  0  0  0  0 |
| keyboard-sms         main             0  0  0  0  0  0 |
| lang-sjd             main             0  0  0  0  0  0 |
| lang-sje             main             0  0  0  0  0  0 |
| lang-sjt             main             0  0  0  0  0  0 |
| lang-sju-x-sydlapsk  main             0  0  0  0  0  0 |
| lang-sma             main             0  0  0  0  0  0 |
| lang-sme             main            -9  0  0  0  0  0 |
| lang-smj             main            -1  0  0  0  0  0 |
| lang-smn             main             0  0  0  0  0  0 |
| lang-sms             main             0  0  0  0  0  0 |
| ================                                       |
| Repo Count           Dirty   fetch/push  U  D  M  C  A |
| 17                   0                2  0  0  0  0  0 |
+--------------------------------------------------------+
```

The table should be read as follows:

- the regex matched 17 repos (the exact matches depends on which repos are cloned locally)
- there are no locally untracked files (`U`)
- there are no locally deleted files (`D`)
- there are no locally modified files (`M`)
- there are no locally files with conflicts (`C`)
- there are no locally added files (`A`)
- there are two repos (see bottom line) with external changes, the number of commits behind for each is listed in the table; positive numbers indicate how many local commits have not yet been pushed to GitHub

### Task 5: Commit in many repos

```sh
gut commit -o giellalt -r ^lang- -m "Your commit message"
```

It is ok for the regex to match repos with no changes, `gut` will just skip them with a message that nothing was changed.

#### Multiline commit message

`gut` does accept multiline commit messages. You write them on the command line, starting with the opening quote, entering each line as you go. The important thing is to NOT type the closing quote until the whole message is finished.

You can use this to add a note to skip CI, ie for commits that are non-substantial - no reason to kick of many tens of parallel builds if the changes are minimal. You do this by having the string `[skip ci]` on a line by itself:

```sh
gut commit -r ^lang- -m "Commit message

[skip ci]
"
```

NB! You need another empty line after this string, or it won't trigger the non-CI thing.

### Task 6: Push all local changes

```sh
gut push -o giellalt
```

It is ok for the regex to match repos with no commits, they will be skipped in the push.

## Admin tasks

### Task 7: Add a new language

Description moved to a [separate page](HowToAddANewLanguage.md).

### Task 8: Update repos from template

Description moved to a [separate page](infraremake/HowToMergeUpdatesFromCore.md).

### Task 9: Manage topics, info

#### Set topics

```sh
gut topic set -o giellalt -r "lang-" -t finite-state-transducers constraint-grammar minority-language nlp proofing-tools language-resources
```

#### Add more topics

Add one more topic to a subset of the languages:

```sh
gut topic add -o giellalt -r "lang-(s|cr)" -t indigenous-languages
```

#### Specify website

```sh
gut set info -o giellalt -r "(lang-|giella-)" -w https://giellalt.uit.no
```

### Task 10: Make repo(s) public/private

```sh
gut make -o giellalt -r "(lang-|giella-)" private
```

### Task 11: Set description dynamically

Use a script to generate the content, including dynamic parts that varies with the repo name, and use the script as follows:

```sh
gut set info -o giellalt -r '^lang-' --des-script giella-core/devtools/gut-scripts/reponame2description.sh
```

**NB!** Make sure there is no trailing newline at the end of the output of the script, or it will fail. That is, use `printf`, _not_ `echo`.

### Task 12: Create team with users

```sh
gut create team -o giellalt -t "Kainun kieli" \
-d "Team for working with the kveen language." -m Trondtr snomos
```

### Task 13: Add users to existing team

```sh
gut add users -o giellalt -t giellaltstaff -u ilm024 leneantonsen
```

### Task 14: Add webhook

```sh
gut hook create -m json -o giellalt -r 'lang-' \
-s giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e "*"
```

Based on experience, it is not advisable to send off all events, at least not if the recipient is IRC, Zulip and similar community tools. The following is a more restricted version that should provide a reasonably balance between staying up-to-date and not being spammed:

```sh
gut hook create -m json -o giellalt -r 'lang-smj' \
-u 'https://giella.zulipchat.com/api/v1/external/github?api_key=SECRETKEY&stream=smj' \
-e branch_protection_configuration -e branch_protection_rule \
-e check_run -e code_scanning_alert -e commit_comment -e create \
-e delete -e dependabot_alert -e deploy_key -e discussion \
-e discussion_comment -e fork -e gollum -e issue_comment \
-e issues -e label -e member -e membership -e merge_group \
-e milestone -e organization -e package -e ping -e project \
-e project_card -e project_column -e public -e pull_request \
-e pull_request_review -e pull_request_review_comment \
-e pull_request_review_thread -e push -e release -e repository \
-e repository_advisory -e repository_dispatch -e repository_import \
-e repository_vulnerability_alert -e secret_scanning_alert \
-e secret_scanning_alert_location -e security_advisory \
-e security_and_analysis -e star -e team -e team_add -e watch
```

This command is most powerful when used together with a script, to set a webhook with dynamic properties (e.g. based on reponame) for a large number of repos at once:

```sh
gut hook create -m json -o giellalt -r 'lang-' \
--script giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e branch_protection_configuration -e branch_protection_rule \
-e check_run -e code_scanning_alert -e commit_comment -e create \
-e delete -e dependabot_alert -e deploy_key -e discussion \
-e discussion_comment -e fork -e gollum -e issue_comment \
-e issues -e label -e member -e membership -e merge_group \
-e milestone -e organization -e package -e ping -e project \
-e project_card -e project_column -e public -e pull_request \
-e pull_request_review -e pull_request_review_comment \
-e pull_request_review_thread -e push -e release -e repository \
-e repository_advisory -e repository_dispatch -e repository_import \
-e repository_vulnerability_alert -e secret_scanning_alert \
-e secret_scanning_alert_location -e security_advisory \
-e security_and_analysis -e star -e team -e team_add -e watch
```

More information about the various webhook events can be found in the
[GitHub Documentation](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads).

### Task 15: Add external repo

The instructions are moved to [a separate page](NewLanguageExtSource.md).

### Task 16: Set team access permission

NB! Requires owner permission by the user doing this!

```sh
gut set permission -o giellalt -p push -t GiellaLTstaff
```

Result:

- will set **write** permission for all members of the GiellaLTstaff team, in the organisation GiellaLT
- because we did not specify a regex to match repository names against, the command targets **all**
  repos in the organisation.

**NB!** Repos not earlier assigned to the team **will silently be added!**
