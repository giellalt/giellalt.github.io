# Don't Panic!

**This page is for people with access to the Tromsø servers, and not relevant to others!**

What to do if ...

# The servers are down

## Get them up and running

* For the *gtsvn-01, gtlab, gtoahpa-01, gtweb-01* servers at uit.no
** Call *IT, Seksjon for applikasjoner og tjenester* (see plan/admin/emergency.txt)
* For the xserve, the *divvun.no* server
** Call Børre Gaup (the server is in the cellar under the A wing, second door to the left)

## Restart processes afterward

The following processes need to be restarted, and in the following way.

* [instructions for gtweb-01 (interactive web programs, MT, webdicts)](/ped/common/httpdserversgtweb.html)
* [the speller server (divvun.no)](SpellerServer.html)
* [instructions for gtoahpa-01 (oahpa.no and Konteaksta)](/ped/common/httpdserver.html)
* [instructions for gtdict (NDS)](/ped/common/httpdserversgtdict.html)
* [instructions for gtlab (testing.oahpa.no)](/ped/common/GtlabRestart.html)
* [instructions for restarting nginx](/ped/common/RestartingNginx.html)
* [instructions for Gïelese](../apps/gielese/GieleseRestarting.html) (TODO: Update documentation)
** Look for commands with *restart...*
* [Instructions for gtsvn-01](gtsvn.html)
* [Instructions for the satni.org server](satniorg.html)
* [When the webpages are not rebuilt](SiteBuildProblems.html)
* [Instructions for xserve](xserve.html) (SubEthaEdit, Jabber, Bugzilla)

## Test that everything is ok

(tbw.)

(We want automatic testing of web service availability.)

# A server is very slow

* Log in to the machine via ssh and find out which processes are using most CPU resource by giving the command:

```sh
    top
```

The output looks something like

```
 PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
15221 neahtta   20   0  512m 303m 2848 R 19.2  3.9   2:24.15 python
 9405 neahtta   20   0  512m 303m 2848 S 13.9  3.9   1:28.60 python
 6239 mysql     20   0  896m 185m 5500 S  0.3  2.4  19:10.63 mysqld
.......
```


Observe the column **%CPU**. If some of the processes remains in the top of the table with a high value in this column then this is obviously the cause of the problem. To get more information about the problematic process give the command


```
    ps -fp *PID*
```


where you replace *PID* by the concrete number, e.g. 15221 in the given example.


If it is an Oahpa (python2.7) process then you can see from this output which Oahpa it is. First, you can try to [restart the particular Oahpa instance](http://giellatekno.uit.no/ped/common/httpdserver.html). After doing that check with command **top** if the problem has disappeared. If not then you can stop the process using the command


```
    kill *PID*
```


(requires sudo rights)


# Analysers do not work


* The analysers are in /opt/smi. Check that they work, and recompile if they don't.
** One possible error source is mismatch between compiled programs and compilers that
   use them. The pipeline is documented in [the cgi-bin documentation](docu-cgi-bin.html).
** The naming conventions for fsts when compiled ("new") and in the web directories ("old") [are found here](infraremake/FstNamesInOldAndNewInfra.html)




# The svn application is down, yet the gtsvn server is up-n-running (test it by logging into the server)


* error messages
```
sme$ svnup
Updating '/Users/xxxxxx/gtsvn':
svn: E000060: Unable to connect to a repository at URL 'https://gtsvn.uit.no/langtech/trunk'
svn: E000060: Error running context: Operation timed out
```


* log into the gtsvn server


* find the processes running
```
[root@gtsvn ~]# lsof -i | grep http
httpd     26024    apache    4u  IPv6    15925      0t0  TCP *:http (LISTEN)
httpd     26024    apache    6u  IPv6    15929      0t0  TCP *:8099 (LISTEN)
httpd     26024    apache    8u  IPv6    15935      0t0  TCP *:https (LISTEN)
```


* kill them
```
[root@gtsvn ~]# kill -KILL 26024
```


* start the service anew
```
ot@gtsvn ~]# service httpd start
Starting httpd:                                            [  OK  ]
```


# Reference document


[Server Programs and Logs](ServerProgramsAndLogs.html)
