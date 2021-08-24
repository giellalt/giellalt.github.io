# Following is a quick technical overview of the project. 


Gïelese is split into two major parts, the client and the server. The server is
very simple, and mainly serves media, but also maintains account information
and tracks user progression and grading, in addition it maintains some of the
application configuration information.


The Gïelese client is more complex. It:


1. renders exercises for users
1. downloads and syncs the media and exercise databases, allowing for offline play
1. tracks user progression, and chooses exercises based on existing progression


#  Stack


##  Server


The server uses Python, with the Flask web framework, and data is stored in
mongodb. Linguistic data is stored in XML, with references to media files and
rendered into JSON. The media is either served directly, or packaged with the
client for mobile apps.


In addition to using mongodb for user account information, Sqlite is used
temporarily during the media install process to package media information into
JSON.


We use Gunicorn to handle serving FastCGI data to the web server, which in this
case is nginx. 


Dependencies are tracked in *requirements.txt*, with which you should use
*virtualenv* and *pip* to install and manage a local environment.


See [Server Development](ServerDevelopment.html) for more information.


##  Client


The client is built in Coffeescript, a superset of JavaScript which is compiled
using node.js. Templates render into HTML5. The client uses Backbone.js to
manage views, and Brunch.io to handle building, JS compression, and other
tasks.


Dependencies are tracked in *package.json*, with which you should use *npm*
(a part of Node.js) to install and manage the environment.


See [Client Development](ClientDevelopment.html) for more information.


##  Client + PhoneGap


Phonegap is used to manage the build process. 


See [Building the Gielese Apps](BuildingTheGieleseApps.html) for more information.
