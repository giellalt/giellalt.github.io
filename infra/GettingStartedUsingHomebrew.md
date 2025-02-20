# Install CLI tools using Homebrew

- [brew.sh](https://brew.sh/)
- in case of the following error:

  ```sh
  Error: Failed to link all completions, docs and manpages:
  ```

  Run this command:

  ```sh
  sudo chown -R $(whoami): /usr/local/share/zsh
  ```

  (from [here](https://github.com/Homebrew/discussions/discussions/600))

Then:

1. `brew install autoconf automake gawk make git-lfs icu4c pkg-config python3 saxon subversion pyyaml openssl@3 pipx`
1. NB! Note the **output** from icu4c, gawk and make installations. Do **follow** the instructions on how to add them to the path in your shell environment.
1. `pipx ensurepath`
1. Restart Terminal (Cmd+Q)

And to ensure that accented letters are properly handled by git on macOS, run the following (may require a relatively new `git` version, tested with `2.40.0`):

```sh
git config --global core.fsmonitor true
git config --global core.quotepath false
git config --global core.precomposeunicode true
```

(See [this](https://www.git-tower.com/help/guides/faq-and-tips/faq/unicode-filenames/mac) for details on the Unicode issues.)

Download prebuilt binaries of `gut` [here](https://github.com/divvun/gut).
Then initialise your `gut` installation as follows:

```sh
gut init -r PATH_TO_DIR -t ghp_TOKEN
```

Replace `PATH_TO_DIR` and `ghp_TOKEN` with actual values. Generate your `ghp_TOKEN` by following
[these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Then one can clone all language repositories with this command:

```sh
gut clone -o giellalt -r ^lang-
```

If `gut clone` fails with this message:

> Cannot clone repository with git@github.com:divvun/registry.git because of failed authentication for repository

then use

```sh
gut clone -u -o giellalt -r ^lang-
```

instead (`-u` changes the protocol into `https` instead of `ssh`).

You can set the default protocos to `https` using the `gut init` command (option `-u`).

You can also set your default organisation with the `-o` option for the `gut init` command. Then there is no need to specify the organisation when working against the default GitHub organisation.
