

#  Important packages to know about


These, along with necessary version numbers are documented in
*requirements.txt*, however, a subset of these are important for developers
to be aware of and work with:


1. [flask](http://flask.pocoo.org/) - a web framework
1. [itsdangerous](http://pythonhosted.org/itsdangerous/) - a library for encoding data for transport
1. [schematics](https://schematics.readthedocs.org/en/latest/) - A JSON encoding, decoding, and validation library
1. [babel](http://babel.pocoo.org/) - i18n library
1. [transifex]() - not entirely a package, but worth knowing about here-- this is
  used for maintaining translations that non-technical users can have access to
  and translate. A python library is used to fetch these and install them in the server.
1. [sqlalchemy](http://sqlalchemy.org/) - a database ORM for managing database models, querying, etc.
1. [pymongo](http://api.mongodb.org/python/current/) - a database library for mongodb
1. [lxml](http://lxml.de/) - an XML parsing library
1. [gunicorn](http://gunicorn.org/) - a wsgi fcgi server library


There are of course, other important libraries, but those listed above are the
most critical. They are also very easy for developers unfamiliar with them to
pick up.


Of secondary interest are the Flask modules: 


1. [flask marrow mailer](http://flask-marrowmailer.readthedocs.org/en/latest/) -
  a library for generating and sending emails.
1. [flask babel](https://pythonhosted.org/Flask-Babel/) - an interface to babel from flask


#  Preparing the Development Environment


##  Checking out biggies


##  Initializing media server


Create a virtualenv, run it and initialize from requirements.txt


Create a secret key


```
    python -c "import os ; print os.urandom(24)" > secret_key`
```


Initialize and install the database.


```
    python manage.py init_db
    python manage.py install_media -f ../data/sma_media.xml
    python manage.py append_lexical_data -f ../data/n_smanob_test.xml
```


The latter only installs/updates definitions for existing words from the
first step, if you want to just install everything, use:


```
    python manage.py install_lexicon -f ../data/n_smanob.xml
```


##  Prepare JSON files


```
    python manage.py prepare_json
```


#  Internationalisation


Extracting is a little tricky. Mind the dot at the end, as we need the
current directory too.


```
    pybabel extract -F babel.cfg -o translations/messages.pot ../sma-client/ .
```


##  initialising translations


```
    pybabel init -i translations/messages.pot -d translations -l sma
    pybabel init -i translations/messages.pot -d translations -l no
    pybabel init -i translations/messages.pot -d translations -l sv
    etc
```


##  updating


```
    pybabel extract -F babel.cfg -o translations/messages.pot ../sma-client/ .
    pybabel update -i translations/messages.pot -d translations
```


##  compiling


```
    pybabel compile -d translations
```


##  Updating from transifex


In order to use the transifex client, you need two things:


 * the gïelese virtual environment enabled
 * a user-specific configuration file for transifex in your own home
   directory: ~/.transifexrc, otherwise, the
   project-specific configuration is already checked in in 
   `src/media-serv/.tx/config`


Transifex Documentation: http://support.transifex.com/customer/portal/articles/1000855-configuring-the-client


##  user-specific file: ~/.transifexrc


The short of it is to copy all this, and replace the password. If more
is necessary, refer to docs. Token must be left blank.


```
    [https://www.transifex.com]
    hostname = https://www.transifex.com
    password = yourpasswordgoeshere!
    token = 
    username = aajegebot
```


##  Basic operations


Once the virtualenv is enabled properly, this should mean that the
transifex command line client is available to use. Typically, all you
should need to be concerned with for fetching new translations is:


```
    tx pull
```


A specific language can be specified also: 


```
    tx pull -l sma
    tx pull --language sma
```


After updating translation strings in messages.pot, send them to the
server for translators to start working:


```
    tx push --source
```


If you have made modifications locally to any of the translation files,
you will need to include the `--translations` flag.


Further documentation on the command line tool's various options is here:


http://support.transifex.com/customer/portal/articles/960804-overview




##  Additional docs: 


```
 * http://support.transifex.com/customer/portal/topics/440187-transifex-client/articles
 * `tx --help`
```


#  Management scripts


This is somewhat of a TODO:. There are several managment scripts for various
tasks that will need to be unified at some point. Currently:


1. manage.py - For executing Flask-Actions, as well as database installation
   operations from lexicon files.
2. fabfile.py - for managing deployment tasks, compiling localization strings
   and fetching them from tx
3. read_media_directory.py - Specifically for managing the media directory
   structures


#  Data structure overview


# Concepts (media, or phonetic/orthographic content) - See documentation in
  *lexicon_models.py*


