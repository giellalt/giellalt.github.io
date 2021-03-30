#  eXist installation (from svn)
* Checkout eXist: svn checkout svn://svn.code.sf.net/p/exist/code/trunk/eXist exist-code
* Build eXist: cd exist-code, ./build.sh
* Start eXist: bin/startup.sh


#  eXist app-installation


* Go to $GTHOME/apps/risten2
* Write ant. This builds the app. The result is an eXist-app, build/risten2-0.x.xar (where x is an integer)
* Goto to the app-repository (see documentation in http://exist-db.org/exist/quickstart.xml#app-repository)
* Click the upload tab
* Click the Choose file button, browse your way to the risten-0.x.xar file, then click Upload. The page changes focus to the Installed tab, the app exists as Risten2.
* Click the Paper box icon above the label Risten2, then click the local url, and voilá,  you are presented with the startup page of the app.


#  Installing eXide
* Goto to the app-repository (see documentation in http://exist-db.org/exist/quickstart.xml#app-repository)
* Click the public repo tab
* Click retrieve packages
* Click the Paper box icon above the label eXide. Click the install-icon. The page changes foces to the Installed tab. eXide exists as eXide.
* Click the Paper box icon above the label eXide, then click the local url and you are presented with the startup page of the eXide.


#  Create an eXist-app, searchtmx


* Open eXide
* Choose the Application->New Application
* A dialog (Deployment Editor) appears, fill out the values


##  Application properties (First screen)


These are the values I filled out:


* Template: HTML-template (default)
* Target collection: /db/searchtmx
* Name: http://divvun.no/apps/searchtmx
* Abbreviation: searchtmx
* Title: Search TMX
* Version: 0.1 (default)
* Status: Alpha (default)
* Pre-install XQuery: pre-install.xql (default)


Press Next


##  Description (Second screen)


* Author: Børre Gaup
* Description: Search for words in tmx-files
* Website: http://divvun.no


##  Default Permission (Third screen)


Don't fill in anything


Press Done


Open the start page of this new application by entering http://http://localhost:8080/exist/apps/searchtmx/index.html into the webbrowsers address field


##  Add the app to svn


* Make a directory searchtmx in svn
* Goto Application->Download in eXide, you'll end up with searchtmx-0.1.xar in Downloads
* Goto the searchtmx dir, unzip the downloaded .xar file in this directory
* svn add searchtmx, then svn ci


##  Adding changes in searchtmx to svn


* Make the changes you want in eXide to the searchtmx app
* Goto Application->Download in eXide, you'll end up with searchtmx-0.1.xar.1 in Downloads
* Goto the searchtmx dir, unzip the downloaded .xar file in this directory
* svn stat to see the changes
* svn ci to check in the changes


##  Syncing the svn version of searchtmx to eXist


* Goto the searchtmx directory
* Write ant to build the app. You'll now have a .xar file in build
* Goto to the app-repository (see documentation in http://exist-db.org/exist/quickstart.xml#app-repository)
* Click the upload tab 
* Click the Choose file button, browse your way to the searchtmx-0.1.xar file, then click Upload. The page changes focus to the Installed tab, the app exists as Searchtmx (0.1). (if an error is reported, repeat the previous and this step)
* Click the Paper box icon above the label Searchtmx (0.1), then click the local url and you are presented with the startup page of the app.
