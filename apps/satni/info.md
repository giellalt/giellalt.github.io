satni.org
=======

[satni.org](https://satni.org) is a service running on `satni.uit.no`.


The webapp and its files are found in `/home/exist/eXist`


It has been started by running this command:

```
sudo service eXist-db start
#EXIST_HOME=/home/exist/eXist $EXIST_HOME/bin/startup.sh
```


# Apps


## Backend


Serves as a restful interface to dictionaries and term collections.


An obsolete version seems to live in `$GTHOME/apps/risten2/backend`, the current version is found in `/home/exist/eXist/webapp/WEB-INF/data/fs/db/apps/satni/`.
The obsolete code is correct and added to the latter folder by eXist when uploading files.


## Frontend


Serves as the search interface to dictionaries and term collections found in the satni backend.


An obsolete version seems to live in `$GTHOME/apps/risten2/frontend/index.js`, the current version is found in `/home/exist/eXist/webapp/WEB-INF/data/fs/db/apps/satni/index.js`
The obsolete version is compiled from `assets/` files and added to the latter folder by eXist when uploading files.


To get started with frontend development run `npm install` in `frontend/`.
This will install all dependencies.


`main.js` is the main code that loads satni component. satni is divided into smaller components, dictlist, search and articles. Each of them are in the satni interface in a row. They are called by the main satni component. Additionally there are rest component, util component, and translation component. They are dependent on `mithril` js framework, which is located in `mithril.js.org`. Also Bootstrap is used, but this is included in the backend by eXist shared resources. CSS file is located in `assets/css/` folder.


# Poking the backend app and get .json answers


To list all dictionaries:
[http://satni.uit.no:8080/exist/restxq/satni/dictionaries]


To search for all lemmas in all dictionaries starting starting with "juol":
[http://satni.uit.no:8080/exist/restxq/satni/search?query=juol]


To lookup the article on "juolgebáddi"
[http://satni.uit.no:8080/exist/restxq/satni/article/juolgeb%C3%A1ddi]


# Meetings
[Meetings](../../dicts/satni.org/index.html)




