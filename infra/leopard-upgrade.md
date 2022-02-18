# Background


[Apple|http://www.apple.com/] has now released their next major version of Mac OS X, version 10.5, called [Leopard](http://www.apple.com/macosx). This page goes through a few points for updating to Leopard within the Divvun and University projects.


Besides the improvements (and not-so-improved features) it provides, it is also necessary to test our proofing tools under the new OS.


## Major wins


* our UTF-8 problems in bash are gone! Type æøå, delete one, and continue typing - it all works as it should:) Now, if only Apple could give us a decent META key... (see [http://www.snark.de/index.cgi/0006] for one work-around)
* very easy screen sharing for helping each other - now we can just show the screen to each other when we explain a problem
* better support for collaboration through iCal and the CalDav server, as well as other Leopard server features
* [hunspell](http://hunspell.sourceforge.net) compiles - horray for the updated standard conformance and new compilers!


## Set-backs or problems


* it isn't possible to open individual ports in the firewall in the GUI anymore. No known workaround at the moment, although the built-in behaviour seems to work ok. E.g. when starting forrest, one gets a question from the OS whether the application *Java* should accept incoming network connections, ie whether the needed port should be opened. Thus it seems that we can live with the way Leopard works.


# The update process


Updating the old PowerBook G4 went fine, without a problem, but on the new Intel machine I had some problems. Upon first installation attempt, it reported and installation error, and the installation was aborted. After that, the internal disk was not visible to the installer, and it was thus impossible to install Leopard.


The solution turned out to be to wait for several minutes, possibly as many as 10, at the initial installation dialog - that is, the one where one should select the main language of the installation. After having waited, I could continue as normal, and now the internal disk was found, and everything went fine. The waiting tip was found [here
| http://lifehacker.com/software/step-by-step/upgrade-mac-os-x-to-leopard-315637.php].


* remember to make a backup of your disk before you start
* select *Archive and install*, available behind an **Options…** button when selecting the disk
* make sure that X11 is included, to be able to run OOo


# Post-processing


* **Filemaker Pro** is said to require version *9*, but **FileMaker Pro 6 & 8** seem to work just fine...
* **cocoAspell** needs to be reinstalled
* some folders in `/usr/local/` might need to be resqued from `/Previous System/xxx/` to their original location, or reinstalled; this was the case with `forrest` for me
* **Parallels desktop** required reinstallation on my Mac. Until reinstalled, it would just display an error message; after the reinstallation, it worked just fine
* **Skype** may need to be reinstalled or updated (the latest version works fine)
* perl modules might have to be reinstalled
* VPN must be reinstalled (the same happened after upgrade to Tiger)


# Other notes


InputManagers are more tightly controlled, and have more restrictions on installation. But they do work if properly installed. I am using SIMBLE, IncrementalSearch, and one more, and they all seem to work fine. See [this web page](http://macromates.com/blog/2007/inputmanagers-on-leopard/) for details, including the updated note after Leopard was released.


On the G4, the OS always gives me a warning when I start [SEE](http://www.codingmonkeys.de/subethaedit/), asking me whether I want to run it. Quite annoying, but nothing that stops the show. On the Intel Mac, it runs without problems. The only difference I can remember, was that I updated to the latest SEE *before* the Leopard upgrade on the Intel Mac, whereas the G4 got the new SEE *after* I upgraded to Leopard.


Leopard contains a dictionary framework - we can turn our lexical resources in risten.no into online dictionaries accessible from the Dictionary application


All in all, no major problems, and several nice improvements and important bug fixes:)
