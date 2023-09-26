# Task 1: add a new language

Description moved to a [separate page](HowToAddANewLanguage.md).

# Task 2: update template, propagate changes to all matching repos

Description moved to a [separate page](infraremake/HowToMergeUpdatesFromCore.md).

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
-s giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e "*"
```

------

**The following does not presently work, we are investigating it**

Based on experience, it is not advisable to send off all events, at least not if the recipient is IRC, Zulip and similar community tools. The following is a more restricted version that should provide a reasonably balance between staying up-to-date and not being spammed:

```sh
gut hook create -m json -o giellalt -r 'lang-smj' \
-u 'https://giella.zulipchat.com/api/v1/external/github?api_key=SECRETKEY&stream=smj' \
-e branch_protection_configuration branch_protection_rule check_run code_scanning_alert \
commit_comment create delete dependabot_alert deploy_key discussion discussion_comment \
fork gollum issue_comment issues label member membership merge_group milestone organization \
package ping project project_card project_column public pull_request pull_request_review \
pull_request_review_comment pull_request_review_thread push release repository \
repository_advisory repository_dispatch repository_import repository_vulnerability_alert \
secret_scanning_alert secret_scanning_alert_location security_advisory security_and_analysis \
star team team_add watch
```

This command is most powerful when used together with a script, to set a webhook with dynamic properties (e.g. based on reponame) for a large number of repos at once:

```sh
gut hook create -m json -o giellalt -r 'lang-' \
--script giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e branch_protection_configuration branch_protection_rule check_run code_scanning_alert \
commit_comment create delete dependabot_alert deploy_key discussion discussion_comment \
fork gollum issue_comment issues label member membership merge_group milestone organization \
package ping project project_card project_column public pull_request pull_request_review \
pull_request_review_comment pull_request_review_thread push release repository \
repository_advisory repository_dispatch repository_import repository_vulnerability_alert \
secret_scanning_alert secret_scanning_alert_location security_advisory security_and_analysis \
star team team_add watch
```

More information about the various webhook events can be found in the
[GitHub Documentation](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads).

# Task 9: add external repo using `git subtree`

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

# Task 10: Clone multiple repos in one go

The very basic task of getting started:

```sh
gut clone -o giellalt -r ^lang
```

This will clone all repos in the `giellalt` org matching the regular expression `^lang` in the repo name. Use option `-u` to clone using the `https` protocol instead of `ssh`:

```sh
gut clone -u -o giellalt -r ^lang
```

# Task 11: Set team access permission

NB! Requires owner permission by the user doing this!

```sh
gut set permission -o giellalt -p push -t GiellaLTstaff 
```

Result:

- will set __write__ permission for all members of the GiellaLTstaff team, in the organisation GiellaLT
- because we did not specify a regex to match repository names against, the command targets __all__
  repos in the organisation.

__NB!__ Repos not earlier assigned to the team __will silently be added!__
