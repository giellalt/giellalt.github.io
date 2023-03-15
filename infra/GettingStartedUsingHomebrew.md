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
- `brew install autoconf automake subversion pkg-config gawk saxon`
- `pip3 install PyYAML` (the actual name of `pip` may vary)

For those working with `git`:
- `brew install gh`
- `brew install openssl@3`
- `gh repo clone divvun/gut`

Build `gut` following [these instructions](https://divvun.no/divvun/gut).
Initialise your `gut` installation as follows:

```sh
gut init -r PATH_TO_DIR -t ghp_TOKEN
```

Then one can clone all language repositories with this command:

```sh
gut clone -o giellalt -r ^lang-
```

If `gut clone` fails with this message:

> Cannot clone repository with git@github.com:divvun/registry.git because of failed authentication for repository

use `gut clone -u …` (that is, `https` instead of `ssh`)
