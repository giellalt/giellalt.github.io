# Install CLI tools using Homebrew

- [brew.sh](https://brew.sh/index_nn)
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

1. `brew install autoconf automake subversion pkg-config gawk saxon python@python3.10`
1. Add `PATH="/usr/local/opt/python@3.10/libexec/bin:$PATH"` in `$HOME/.bash_profile`
1. Restart Terminal (Cmd+Q)
1. `python3 -m pip install PyYAML`

For those working with `git`:

- `brew install openssl@3`

Download prebuilt binaries of `gut` [here](https://divvun.no/divvun/gut).
Then initialise your `gut` installation as follows:

```sh
gut init -r PATH_TO_DIR -t ghp_TOKEN
```

Generate your `ghp_TOKEN` by following
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
