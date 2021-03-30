# jenkins on Fedora 23


## Setup jenkins repository


https://jenkins.io/
Click link «Download weekly release, 2.6 war, fedora»


Leads to:
http://pkg.jenkins-ci.org/redhat/
Add the repository as instructed on the page


## Install and start jenkins
* sudo dnf install jenkins
* systemctl enable jenkins.service
* systemctl start jenkins
* jenkins now exists on http://localhost:8080
* No source code management, installed git and svn plugins from http://localhost:8080/pluginManager/


## Setup first job
* http://localhost:8080
* Click create new jobs
* CorpusTools as Item name, freestyle project, Ok
* Fill in description
* Under «Source Code Management», setup subversion fetching
* Under Build, write the following script:


```
PYENV_HOME=$WORKSPACE/.pyenv/


# Delete previously built virtualenv
if [ -d $PYENV_HOME ]; then
    rm -rf $PYENV_HOME
fi


# Create virtualenv and install necessary packages
virtualenv --no-site-packages $PYENV_HOME
. $PYENV_HOME/bin/activate
rsync -q /home/boerre/repos/CorpusTools/requirements.txt .
pip install --quiet --upgrade pip
pip install --quiet lxml
pip install --quiet nosexcover
pip install --quiet pylint
pip install --quiet --upgrade -r requirements.txt
pip install --quiet -e .
pip install --quiet $WORKSPACE/  # where your setup.py lives
nosetests --with-xcoverage --with-xunit --cover-package=corpustools --cover-erase
pylint -f parseable corpustools/ | tee pylint.out
```


## sma setup
First setup a new item, follow the instructions above


In source code management, add giella-core and sma. Set giella-core and sma as local module directories.


Under build step, add execute shell


The following shell runs the build process of sma


```
# make .bashrc, sma's autogen needs it
touch .bashrc


# setup giella-core
cd $WORKSPACE/giella-core
./autogen.sh
./configure


# setup sma
cd $WORKSPACE/sma
HOME=$WORKSPACE GTLANG_sma=`pwd` ./autogen.sh -l
HOME=$WORKSPACE PATH=$PATH:/usr/local/bin GTCORE=$WORKSPACE/giella-core ./configure
PATH=$PATH:/usr/local/bin make -j4
PATH=$PATH:/usr/local/bin make check
```
