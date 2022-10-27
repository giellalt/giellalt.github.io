# Fabric

**Fabric** is a Python library used to execute shell commands, both locally, and remotely over SSH.

# Installing

Fabric should already have been installed as a part of installing the requirements for NDS using pip. You may of course install it manually like this: `python3 -m pip install Fabric`.

# How to use Fabric – in general

To use Fabric, issue `fab` in the terminal followed by one or more commands. To see all available commands, issue `fab --list`.

Examples:
```
    $ fab sanit runserver
    $ fab baakoeh restart-service
    $ fab restart-running
```

# Our Fabric commands

Our most used commands require that we with the first argument specify which project the following arguments concern (sanit/baakoeh, ...). Only one project may be specified at a time.

To read in-code documentation of each command, issue `fab --help COMMAND`, e.g. `fab --help compile`.

## Commands that require a project name

```
    $ fab PROJECT compile
    $ fab PROJECT compile-dictionary
    $ fab PROJECT compile-fst
    $ fab PROJECT restart-service
    $ fab PROJECT runserver
    $ fab PROJECT test-project              # not in use
    $ fab PROJECT test-configuration
```

## Commands that use, but do not need, a project name

These two commands compile/extract all strings if no project is specified. Othersie they compile/extract only the relevant strings for that project.
```
    $ fab [PROJECT] compile-strings
    $ fab [PROJECT] extract-strings
    
```

## Commands that do not use a specified project name

```
    $ fab add-stem2dict     # only concerns sme-nob.all.xml
    $ fab doctest           # not in use
    $ fab find-babel
    $ fab find-running
    $ fab restart-running
    $ fab test-running      # not in use
    $ fab unittests         # not in use
    $ fab update-gtsvn
    $ fab update-repo
    $ fab update-strings
    $ fab where-is
```


# How Fabric works

Fabric invokes methods which are defined in the the file [fabfile.py](https://github.com/giellatekno/neahttadigisanit/blob/main/src/neahtta/fabfile.py) and decorated with @task. 

It is possible to tell Fabric to invoke several methods in succession, which is what we do when we first give Fabric a dictionary name and then commands to run on that name. Take `fab sanit runserver` as an example. First, the method `set_proj` (which `sanit` is an alias to) sets the variable `config.current_dict` to `"sanit"`. Then `runserver` reads that config value and starts the specified server.

Note that the underscores in method names are converted to hyphens in command names. Thus `fab restart-running` invokes the method `restart_running`.

# A closer look at some commands
## restart-service

This command tries restarting the server process in two ways. The second one is the one currently in use in practice.
1. If a file called `PROJECT.wsgi` exists, e.g. `sanit.wsgi`, touch it to restart the service.
2. If this file does not exist, run the command `sudo service nds-PROJECT restart`.
# Further reading

* [The Fabric website](https://www.fabfile.org/)
* [Fabric documentation](https://docs.fabfile.org/en/stable/)