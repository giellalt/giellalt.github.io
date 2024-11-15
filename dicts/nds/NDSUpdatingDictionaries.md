# Updating dictionaries

This page documents updating lexicon and fsts on the server.


## Updating the lexica (dictionaries) on gtdict

For the impatient: **The short version:**

```
    ssh gtdict.uit.no
    sudo su neahtta
    nds update DICT
    nds compile DICT
    nds restart DICT
```

**The longer explanation:**

1.) _Log in to the server, and become the neahtta user_

```
    ssh gtdict.uit.no
    sudo su neahtta
```

The python virtual environment should be activated automatically, this is
indicated by the starting `(venv)` in your prompt. You will also be placed
in the `~/neahttadigisanit/neahtta` folder. So, your prompt should look like:

```
(venv) neahtta@gtdict-02:~/neahttadigisanit/neahtta$
```

If this does not happen, then run

```
cd /home/neahtta/neahttadigisanit/neahtta
. venv/bin/activate
```

When you see (venv) in the command prompt, continue.

2.) _Run the update command_

```
	nds update DICT
```

Replace `DICT` with `sanit`, `baakoeh`, etc.

The output will tell you what happened, and which dictionaries were updated.

**READ THIS (TEMPORARY ERRORS)**: As of November 2024, The `nds update DICT`
command *DOES NOT WORK PROPERLY*! You are going to have to go to each
individual `~/gut/giellalt/dict-xxx-yyy` folder, and run `git pull` manually.
To make sure everything is correct, also run `git status` in the dictionaries
after pulling, to see that the git status is in order. If anything is out of
place, for example, it may say that a _rebase_ is in progress, then steps
will have to be taken to get the git status back to normal.

Hint: Use `nds ls -d DICT` to see which `dict-xxx-yyy` are a part of that
dictionary instance.

3.) _Run the compile command_

```
    nds compile DICT
```

The output will show you which dictionaries got compiled, and how many entries
(`<e>` nodes) it found in total. You may also look at the compiled
`dicts/xxx-yyy.xml` files directly to see that they look like expected. For
example, that they contains roughly as many lines as all the corresponding
`dict-xxx-yyy/src/*.xml` files combined.

If there is an error in an XML file used in compilation, the compile script
will give an error, and the existing compiled `dicts/xxx-yyy.xml` file will
NOT be written to.

Notice that if you run the compile command again, then no dictionaries will
be compiled, because the `nds` script detects that the already compiled
dictionary is newer than the sources. You can use `nds compile DICT -f` to force
recompilation, for example to reset `sme-nob` to not have stem information.

4.) _Restart the instance_

```
    nds restart DICT
```

If it fails to start, it will print out information about what went wrong.
The instance will not start unless everything in the configuration file is in
order. If an instance is meant to run without an fst, for example, then simply
comment-out the line specifying the fst in the config file, and run again.

There is a command that can also run these checks, and print out information.

```
    nds test-configuration DICT
```

Running it will evaluate the config, test dictionaries, and then print FST
paths and last updated date. If an FST is missing from its expected path,
it will be listed as MISSING. If you see any errors at the end of the process,
or worse, Python errors, something is wrong and you should avoid restarting
until this is corrected.


## Updating the FSTs

As of November 2024, all FSTs running on the server are the ones from
apertium nightly. They are updated through the operating system's usual update
mechanics, namely:

```
    sudo apt-get update && sudo apt-get upgrade
```

You can see the paths to all FSTs used in all dictionaries, by running:

```
    rg "file:" neahtta/configs/*.config.yaml
```

You will see all FST files are located in the apertium nightly folder, namely
`/usr/share/giella/LANG/FILE`.

If, in the future, some dictionary uses an FST that is not from apertium
nightly, then of course that will have to be updated manually.

