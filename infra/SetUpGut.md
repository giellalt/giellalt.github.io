# Documentation for _gut_

GiellaLT contains over 500 repositories. If you want to check out many (or all) of them, you may need a program to handle `git` operations over several repositories at the same time. For this we have made a tool called `gut`.

Download and install `gut` as [instructed here](https://github.com/divvun/gut).

Thereafter you need to configure gut:

```
gut init -r $HOME/langtech -o giellalt -u -t <YOUR-GITHUB-TOKEN>
```

where:

- `-r $HOME/langtech` specifies the root folder for `gut` - within it there will be one folder pr GibHub organisation (`giellalt` for <https://github.com/giellalt>), and within that folder all repositories from that organisation will reside;
- `-o giellalt` specifies the default GitHub organisation, so you don't have to do it for every `gut` command
- `-u` specifies that you want to use `https` instead of `ssh` for every interaction with GitHub (if that is what you want)
- `-t <YOUR-GITHUB-TOKEN>` tells `gut` your GitHub access credentials - make sure you create a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with the proper rights. Replace `<YOUR-GITHUB-TOKEN>` with the actual token.

In order to use `gut`, have a look at [the gut usage page](https://github.com/divvun/gut/blob/main/USAGE.md).

The core functionality is a limited set of `git` commands, with the addition of a `--regex` option. Use the regex to write a pattern to match against repository names. Repository names matching the regex are the ones on which the `git` command will be applied.

Commonly used commands are:

- clone
- pull
- push
- commit (with implicit add, so be careful)

There are many more commands, see the help text for more info.
