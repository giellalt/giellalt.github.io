Configuring and updating MT Server
===========

#  Introduction


This is the documentation for how to configure and update the MT
interfaces at

* [jorgal.uit.no](https://jorgal.uit.no/)
* [gtweb.uit.no/tolkimine](https://gtweb.uit.no/tolkimine/)
* [gtweb.uit.no/mt](https://gtweb.uit.no/mt/)
* [gtweb.uit.no/mt-testing](https://gtweb.uit.no/mt-testing/)


The translation daemon/server is running under the user "apy" on the
server gtweb (gtweb.uit.no), and the html pages also reside under the
home directory of that user (hosted by the regular Apache server). The
whole configuration is hosted in git as
[https://github.com/unhammer/gtweb-apy-conf#readme] where you can read
more about how to install new pairs, update the code for
apertium-apy/apertium-html-pages, or reinstall everything in case the
server explodes.




#  Ensuring current pairs are up-to-date


ssh into gtweb and run
```
sudo dnf clean metadata
sudo dnf upgrade -y
sudo systemctl restart apy
```


The dnf upgrade should happen every morning, but if Tino's nightly
repo needs a lot of time to compile, or the build service is down,
things may lag a bit more. Look at the bottom of
http://apertium.projectjj.com/apt/logs/apertium-sme-nob/stderr.log if
you're interested in what might have happened.


#  What versions are running?


gtweb.uit.no/mt-testing, gtweb.uit.no/tolkimine and
gtweb.uit.no/jorgal are running the packages from Tino's nightly repo,
so they should be at most 24 hours out-of-date, given the build wasn't
broken (if the version in SVN doesn't compile when Tino's machine
tries updating, the package isn't updated). There are some more
details at /home/apy/README.org on gtweb.


(https://build.opensuse.org/package/show/home:TinoDidriksen:nightly/apertium-sme-nob  shows the latest available nightly sme-nob package, while http://apertium.projectjj.com/apt/logs/apertium-sme-nob/stderr.log shows the build log of that package.)




#  How do I see unknown words?


```
ssh gtweb /home/apy/dump-missing-words
```






# If jorgal is	down


The jorgal.uit.no page may give	the message `Oversettelse ikke tilgjengelig!`


This command should help:


```
  ssh -t gtweb
    sudo systemctl restart apy
    ```


