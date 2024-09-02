# Updating dictionaries

This page documents both lexicon and fst updating, and restarting of the server.
One may update either lexica or fst or both, but in both cases configuring and resetting of the server must be run.

All dictionaries are on gtdict, and require logging in as the _neahtta_ user. The compile process is restricted, so that only the lexicon will be able to be compiled, but _not_ the FST files. FSTs must be compiled manually (see below in _Updating the FSTs_).

# Updating the lexica on gtdict

For the impatient: **The short version:**

```
    nds compile DICT
    nds test-config DICT
    nds restart DICT
```

**The longer explanation:**

1.) _Log in to the server via SSH_

Log in to gtdict, and thereafter do `sudo su neahtta`

Note that when logged in as the NDS user, the python virtualenv should be activated automatically, and you will see this before the command prompt:

```
    (venv)[neahtta@gtdict ~]$
```

(If you do not see this, do the following commands from the home directory of neahtta: _cd ~ && source venv/bin/activate_.)

When you see (venv) in the command prompt, continue.

2.) _Go to the neahtta catalogue and run the nds_commands process_

```
	cd ~/neahtta/
	nds compile DICT
```

Replace DICT below with sanit, baakoeh, etc. (to _nds compile sanit_ etc.)

If you have problems here, make sure that the environment variables for _GTHOME_, and _GTCORE_ are set, however the _neahtta_ user should automatically be configured properly. Either you will see errors, or you can check with `echo $GTHOME`. The _neahtta_ user has these set automatically in its bash profile.

3.) _Check that there were no errors_

You may also do `wc -l dicts/*.xml` to make sure there is content in the files.

If there is an error in an XML file used in compilation, the compile script will give an error. Before compilation, a backup file will be stored, so if the compilation process overwrites this with a blank file, you may revert to a previous version. Backup files are named \*.bak, and include a timestamp.

This process compiles all dictionaries to _dicts/_, which is the place that most instances of NDS rely on, following the relevant configuration file in _configs/DICT.config.yaml_. This will usually be enough, but if updates do not seem to be visible on the web, it is a good idea to check that the dictionaries are in the locations that the config expects, and alternatively restarting the server process.

**NB:** The files checked in to Git are different from those actually used in production on the server, this is to prevent accidental overwritings via _git push_. Thus, you will need to edit and check in _configs/DICT.config.yaml.in_, which is fine for use in development work, but the servers instances will be running from _confgis/DICT.config.yaml_.

4.) _Test the configuration files_

An automatic tool to check that everything went well is also available.

Running the following command will evaluate the config, test dictionaries, and then print FST paths and last updated date. If an FST is missing from its expected path, it will be listed as MISSING. If you see any errors at the end of the process, or worse, Python errors, something is wrong and you should avoid restarting until this is corrected.

```
    nds test-configuration DICT
```

5.) _Restart the server process_

When everything is working, run the following:

```
    nds restart DICT
```

# Updating the FSTs

There are two ways to update the FSTs. For both of these options, you must know first where the FSTs for each dictionary and language should lie. FST locations are defined in the relevant config file in _configs/DICT.config.yaml_, in the _Morphology_ section near the top. (Note the difference mentioned above between _.yaml.in_ and _.yaml_.

As above, you can use the test command to see if the files were updated.

```
    NDS test-configuration DICT
```

If you see any errors, be sure to correct them.

## Updating on your own

The only current way to update FSTs is to do so on your own, using whichever method you are comfortable with, typically following the usual procedure for _$GTLANGS_, and then copying them manually to the specified locations.

To find the FST locations:

```
    nds test-configuration DICT
```

This will output the following:

```
    SoMe:
      FOUND:   /opt/smi/sme/bin/analyser-dict-gt-desc-mobile.xfst
      UPDATED: Tue Nov  4 15:47:31 2014


      FOUND:   /opt/smi/sme/bin/generator-dict-gt-norm.xfst
      UPDATED: Tue Nov  4 15:47:31 2014




    sme:
      FOUND:   /opt/smi/sme/bin/analyser-dict-gt-desc.xfst
      UPDATED: Tue Nov  4 15:47:31 2014


      FOUND:   /opt/smi/sme/bin/generator-dict-gt-norm.xfst
      UPDATED: Tue Nov  4 15:47:31 2014


    ... snip ...


```

When you compile the analyzers on your own, copy them to these paths, and test that their permissions allow them to be accessible to the neahtta user.

## Updating via script

Updating via script has not been implemented in the newest nds_commands script, as this was not used in recent years. An automatic system for updating FSTs is on the wish list.

# Testing the configuration

Go to neahtta and configure the dictionaries

```
    cd ~/neahtta/
    nds test-configuration DICT
```

Here, replace DICT with the relevant name in configs/ that you are working on (the list of DICTs above).

If everything is good and there are no errors, you'll see FST paths, and some happy cyan text at the end.

# Resetting the server

Either use the nds process, or relevant system commands.

```
    cd ~/neahtta/
    nds restart DICT
```

**NB:** you may be prompted for the neahtta sudo password, and if this doesn't work, something is broken and developers must fix it.
