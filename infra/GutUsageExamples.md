# Task 1: Initialise `gut`

To set up `gut` for the first time, with `giellalt` as your default organisation (so you don't have to specify it for every `gut` operation, do as follows (remember to have your GitHub Peronal access token available):

```sh
gut init --root /path/to/your/gut/root/dir --token PERSONALACCESSTOKEN \
    --organisation giellalt --use-https
```

Using `https` has proven to be the most stable, but feel free to skip that part, and use the `git` protocol instead.

# Task 2: Clone multiple repos in one go

The very basic task of getting started:

```sh
gut clone -o giellalt -r ^lang
```

This will clone all repos in the `giellalt` org matching the regular expression `^lang` in the repo name. Use option `-u` to clone using the `https` protocol instead of `ssh`:

```sh
gut clone -u -o giellalt -r ^lang
```

# Task 3: Add a new language

Description moved to a [separate page](HowToAddANewLanguage.md).

# Task 4: Update many repos from template

Description moved to a [separate page](infraremake/HowToMergeUpdatesFromCore.md).

# Task 5: Manage topics, info

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

# Task 6: Make repo(s) public/private

```sh
gut make -o giellalt -r "(lang-|giella-)" private
```

# Task 7: Add description with dynamic content

```sh
gut set info -o giellalt -r 'lang-XXX' --des-script giella-core/devtools/gut-scripts/reponame2description.sh
```

**NB!** Make sure there is no trailing newline at the end of the output of the script, or it will fail. That is, use `printf`,  *not* `echo`.

# Task 8: Create team, and populate with users

```sh
gut create team -o giellalt -t "Kainun kieli" \
-d "Team for working with the kveen language." -m Trondtr snomos
```

# Task 9: Add users to an existing team

```sh
gut add users -o giellalt -t giellaltstaff -u ilm024 leneantonsen
```

# Task 10: Add webhook

```sh
gut hook create -m json -o giellalt -r 'lang-' \
-s giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e "*"
```

Based on experience, it is not advisable to send off all events, at least not if the recipient is IRC, Zulip and similar community tools. The following is a more restricted version that should provide a reasonably balance between staying up-to-date and not being spammed:

```sh
gut hook create -m json -o giellalt -r 'lang-smj' \
-u 'https://giella.zulipchat.com/api/v1/external/github?api_key=SECRETKEY&stream=smj' \
-e branch_protection_configuration -e branch_protection_rule -e check_run -e code_scanning_alert \
-e commit_comment -e create -e delete -e dependabot_alert -e deploy_key -e discussion \
-e discussion_comment -e fork -e gollum -e issue_comment -e issues -e label -e member \
-e membership -e merge_group -e milestone -e organization -e package -e ping -e project \
-e project_card -e project_column -e public -e pull_request -e pull_request_review \
-e pull_request_review_comment -e pull_request_review_thread -e push -e release -e repository \
-e repository_advisory -e repository_dispatch -e repository_import \
-e repository_vulnerability_alert -e secret_scanning_alert -e secret_scanning_alert_location \
-e security_advisory -e security_and_analysis -e star -e team -e team_add -e watch
```

This command is most powerful when used together with a script, to set a webhook with dynamic properties (e.g. based on reponame) for a large number of repos at once:

```sh
gut hook create -m json -o giellalt -r 'lang-' \
--script giella-core/devtools/gut-scripts/reponame2webhook.sh \
-e branch_protection_configuration -e branch_protection_rule -e check_run -e code_scanning_alert \
-e commit_comment -e create -e delete -e dependabot_alert -e deploy_key -e discussion \
-e discussion_comment -e fork -e gollum -e issue_comment -e issues -e label -e member \
-e membership -e merge_group -e milestone -e organization -e package -e ping -e project \
-e project_card -e project_column -e public -e pull_request -e pull_request_review \
-e pull_request_review_comment -e pull_request_review_thread -e push -e release -e repository \
-e repository_advisory -e repository_dispatch -e repository_import \
-e repository_vulnerability_alert -e secret_scanning_alert -e secret_scanning_alert_location \
-e security_advisory -e security_and_analysis -e star -e team -e team_add -e watch
```

More information about the various webhook events can be found in the
[GitHub Documentation](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads).

# Task 11: Add external repo using `git subtree`

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

# Task 12: Set team access permission

NB! Requires owner permission by the user doing this!

```sh
gut set permission -o giellalt -p push -t GiellaLTstaff 
```

Result:

- will set __write__ permission for all members of the GiellaLTstaff team, in the organisation GiellaLT
- because we did not specify a regex to match repository names against, the command targets __all__
  repos in the organisation.

__NB!__ Repos not earlier assigned to the team __will silently be added!__
