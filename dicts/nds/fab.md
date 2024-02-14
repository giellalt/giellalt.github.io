# Management script (fab)

(The script is called `fab.py`, and the command is `fab`, because previously
the `Fabric` library was used for this purpose, but later we moved away from
Fabric, but we kept the same 3-letter command.)

The `fab` command is used to do management, both on the server, and while
developing.

Quick usage help of `fab` is documented in a MOTD message when logging on to
the server, as well as with `--help` adding to the commands. For example
`fab --help` (for overall help), or `fab compile --help` (help with the compile
command).


# Commands

## update

(Aliases `up`, `update-dict`, `update-dicts`, `update-dictionary`, `update-dictionaries`).

Usage: `fab update PROJECT`

The `update` command updates the dictionaries. Dictionaries are git repositories,
managed by `gut`, and `fab` uses `gut`, as well as the configuration files to
determine which dictionaries needs to be `pull`ed.


## compile

(Aliases `compile`, `compile-dict`, `compile-dicts`, `compile-dictionary`
`compile-dictionaries`).

Usage: `fab compile PROJECT`

The `compile` command will compile (or *merge*) all `<e>` tags found in all
`.xml` source files, into one big `.xml` file, and stored in `dicts/xxx-yyy.all.xml`,
where `xxx` and `yyy` are the languages. It will do this for all dictionaries
defined in the `PROJECT`s configuration file. It uses `gut` to find the
repositories of the dictionaries.

By default, it will skip dictionary compilation if it detects that the already
existing `dicts/xxx-yyy.all.xml` file is newer than all of the source `.xml`
files found in the dictionary repository. If you want to force a re-compilation
anyway, run it with the `-f` or `--force` argument. For example,
`fab compile sanit --force` will re-create all dictionaries belonging to the
`sanit` instance.


## restart

(Aliases `restart`, `restart-service`).

Usage: `fab restart PROJECT`

Literally just executes `sudo systemctl restart nds-PROJECT`, restarting the
systemd service for the instance. It will only make sense, and work, on the
server.


# dev

Usage: `fab dev PROJECT`

Start a development server for that instance. `configs/PROJECT.config.yaml`
must exist and be configured, even when development locally.


# list-projects

(Aliases `list-projects`, `ls`).

Usage: `fab list-projects [-i|--include-inactive] [-d|--include-dicts]`

In the form without any parameters, it will show a list of all projects which
has an existing config file. Use the `-i` (or `--include-inactive`) argument
to also include the config files with the `.in` suffix. Use `-d` (or `--include-dicts`)
to show a list of which dictionaries the instances contain.


# compile-strings

Usage: `fab compile-strings PROJECT`

Run pybabel to compile translation strings found in .po files in the
`translations/` folder to `.mo` files.


# test

(Aliases `test`, `test-config`, `test-configuration`).

Usage: `fab test PROJECT`

Run a test against a project.


# add-stem

Usage: `fab add-stem`

Adds stem information to the smenob dictionary.
