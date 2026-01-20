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

1. `brew install autoconf automake gawk make git-lfs icu4c pkg-config python3 saxon subversion openssl@3 pipx`
    1. NB! Note the **output** from icu4c, gawk and make installations. Do
       **follow** the instructions on how to add them to the path in your shell
       environment.
    1. You can recall the outputs whenever by `brew info icu4c`, `brew info
       gawk` and `brew info make`

