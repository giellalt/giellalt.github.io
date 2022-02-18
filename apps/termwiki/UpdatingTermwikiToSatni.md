Updating Termwiki To Satni
========

To run automatic termwiki database dump, and update eXist and svn:


In the same machine where termwiki is:
first run:

```
php /var/www/termwiki/maintenance/dumpBackup.php --conf=/var/www/termwiki/LocalSettings.php --current --filter=namespace:1362,1274,1354,1298,1210,1330,1338,1242,1096,1364,1102,1322,1346,1282,1234,1250,1118,1258,1314,1098,1202,1226,1266,1306,1218,1290 > /home/tomi/dump.xml
```




The machine where termwiki is it doesn't have svn working. So you need to change machine.


then convert it:
```
cd langtech/words/terms/termwiki
ant run
```


and finally store it to exist (same dir as previous step):
```
ant store
```


also commit the files to svn from `terms/` dir
