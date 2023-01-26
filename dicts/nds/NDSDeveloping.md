# Setting up NDS for development

Setting up a development or testing environment goes in three major steps.


1. Install virtualenv and initialize a virtual environment
1. Install requirements.txt in the virtualenv
1. Install node/client-side development requirements

These steps are explained below. For the impatient, here comes a **Summary**:


# Summary


## These commands for the first time only:

`neahttadigisanit` is where you have checked out the nds files.

```bash
cd neahttadigisanit/src/
python3 -m virtualenv -p /usr/bin/python3.9 env
. env/bin/activate
cd neahtta/
python -m pip install -r requirements.txt
npm install
``` 

## These commands every time:

```bash 
cd neahttadigisanit/src/
. env/bin/activate
cd neahtta/
fab saanih runserver
```


Then to the explanation proper.


# Python

Neahttadigisánit is tested with Python 3.9. Since commit e77ea11, Python 2.7 is no longer supported.
#  virtualenv

## Install virtualenv

The easiest way is: 


```bash
    python3 -m pip install virtualenv
```


For additional help, see [virtualenv](https://pypi.python.org/pypi/virtualenv).


##  Initialize a virtual environment with virtualenv


Enter the NDS *src* directory


```bash
    cd neahttadigisanit/src/
```


Find the path of your python3.9 installation

```bash
    which python3.9
    /usr/bin/python3.9
```

Create a virtualenv using the returned path


```bash
    python3 -m virtualenv -p /usr/bin/python3.9 env
```


Now whenever you intend to work in the project, you can run the following:


```bash
    . env/bin/activate
```


And this will switch the paths to use the proper Python installation, with all
of the projects packages installed.


You should see some feedback in the command line or path that the virtual
environment is active. To test that you are running the desired Python version, you may execute `python -V` while in the virtualenv, and ensure the response is the correct Python version.

#  Install prerequisites for python2 lxml

These are needed for installing the lxml package in pip.

In Debian/Ubuntu:

```bash
    sudo apt install python-dev libxml2-dev libxslt-dev
```

#  Install requirements.txt in the virtualenv


NB: you only need to do this the first time you install the virtualenv, or
whenever requirements.txt changes.


Switch to the *neahtta* directory:


```bash
    cd neahttadigisanit/src/neahtta/
```


And with the virtual environment active, run the following:


```bash
    python -m pip install -r requirements.txt
```


Note, you do *not* need to run this as a super user, if you do, there are some
other problems.


#  Installing node / npm requirements


NDS requires some Node modules to compress CSS and JS. First follow the install
steps on node's website for the current LTS edition: [http://nodejs.org/](http://nodejs.org/)


This should install both Node.js and the related package manager, `npm`. Once
done confirm `npm` is installed:


```bash
    npm
```


If it is there, switch to the *neahtta* directory, and install:


```bash
    cd neahttadigisanit/src/neahtta/
    npm install
```


This will read dependencies from `package.json` to the directory
`node_modules/` and run a post-install script for these.

#  Beginning a development session


With the environment prepared, you may start work on NDS. However, if you need
to set up the environment again, all you need to do is source the virtualenv
file:


```bash
    . env/bin/activate
```


... and then start a development server


```bash
    fab PROJNAME runserver
```


NB: for some changes to config files you will need to stop and restart the
development server.


#  Troubleshooting:


##  Missing SSH config file:


You might see an error like:


```bash
    (env) $ fab saanih runserver
    [localhost] Executing task 'saanih'


    Warning: Unable to load SSH config file '/Users/username/.ssh/config'
```


If this is the case, check your home directory `~/.ssh/config`, and confirm
that you have access to it: sometimes permissions get weird.


##  Missing node dependencies


```
    * Missing dependency in $PATH: uglifyjs
      Install the executable, check that it is available in $PATH,
        and check that it's executable.
```


The error means what it says, however there are some things to check:


Look at the output of `which uglifyjs`, if there is nothing:

1. Doublecheck that `npm install` really worked, and there are executables to be found in `.../neahtta/node_modules/.bin/`, and that there were no errors from that command
1. Check your *$PATH* variable for `node_modules/.bin/`


## UnknownLocaleError: unknown locale 'sma'

You may encounter the message `UnknownLocaleError: unknown locale 'sma'` or a similar one on starting up or compiling strings.

Some of our interface languages are not in the standard Babel list of possible locales (.dat files). Therefore, the required files must be copied from the NDS `localedata` ddirectory into babel's `locale-data` directory. This should be done automatically by NDS if encountered while running (see `i18n/utils.py:copy_custom_locales`), but if it is not, you may have to do it manually. The files should be put in `neahttadigisanit/src/env/lib/python3.9/site-packages/babel/locale-data/sma.dat` (or another file for another language). All existing custom localization files are provided for convenience in [the repository](https://github.com/giellatekno/neahttadigisanit/tree/master/src/localedata). If the one you need is not there, then you need to generate it yourself. See instructions at [NDSLocalisations](NDSLocalisations).