# satni.org

On the `satni.uit.no` server we run the termwiki and the sátni databases.


**TODO:** Write what to do in case of an emergency.


Some information can be found [here](../apps/satni/Setup.html).


# termwiki
The termwiki stops once in a while because the root disk is filled with log files and such.


There is a cronjob that takes care of deleting unneeded log files:
```
00 21 * * * find /var/log -name "*log-*"|xargs rm -v
10 21 * * * dnf clean all
20 21 * * * yum clean all
```


* The first line removes archived log files (this needs to be done first, the next lines will warn about a full disk otherwise)
* The next two lines removes cached package info


If the termwiki is down, manually perform the jobs above, in the listed order, then do the following commands. This should be enough to get termwiki on its feet again.


```
sudo systemctl restart mysqld
sudo systemctl restart php-fpm
sudo systemctl restart httpd
```
