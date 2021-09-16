# Setting up NDS for development

Setting up a development or testing environment goes in three major steps.


1. Summary
1. Install virtualenv
1. Initialize a virtual environment
1. Install requirements.txt in the virtualenv
1. Install node/client-side development requirements


# Summary


First time:

```
cd main/apps/dicts/nds/src/
virtualenv -p /opt/local/bin/python2.7 env
. env/bin/activate
cd neahtta/
pip install -r requirements.txt
npm install
``` 

Every time:
``` 
cd main/apps/dicts/nds/src/
. env/bin/activate
cd neahtta/
fab saanih runserver
```








#  Install virtualenv


The easiest way is: 


```
    pip install virtualenv
```


Though you may need to prepend *sudo*.


For additional help, see [virtualenv](https://pypi.python.org/pypi/virtualenv).


#  Initialize a virtual environment


Enter the NDS *src* directory


```
    cd ~/main/apps/dicts/nds/src/
```


Create a virtualenv


```
    virtualenv env
```


Now whenever you intend to work in the project, you can run the following:


```
    source env/bin/activate
```


And this will switch the paths to use the proper Python installation, with all
of the projects packages installed.


You should see some feedback in the command line or path that the virtual
environment is active.


#  Install requirements.txt in the virtualenv


NB: you only need to do this the first time you install the virtualenv, or
whenever requirements.txt changes.


Switch to the *neahtta* directory:


```
    cd ~/main/apps/dicts/nds/src/neahtta/
```


And with the virtual environment active, run the following:


```
    pip install -r requirements.txt
```


Note, you do *not* need to run this as a super user, if you do, there are some
other problems.


#  Installing node / npm requirements


NDS requires some Node modules to compress CSS and JS. First follow the install
steps on node's website for the current LTS edition: [http://nodejs.org/](http://nodejs.org/)


This should install both Node.js and the related package manager, `npm`. Once
done confirm `npm` is installed:


```
    $ npm
```


If it is there, switch to the *neahtta* directory, and install:


```
    $ cd ~/main/apps/dicts/nds/src/neahtta/
    $ npm install
```


This will read dependencies from `package.json` to the directory
`node_modules/` and run a post-install script for these.


#  Beginning a development session


With the environment prepared, you may start work on NDS. However, if you need
to set up the environment again, all you need to do is source the virtualenv
file:


```
    source env/bin/activate
```


... and then start a development server


```
    fab PROJNAME runserver
```


NB: for some changes to config files you will need to stop and restart the
development server.


#  Troubleshooting:


##  Missing SSH config file:


You might see an error like:


```
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






