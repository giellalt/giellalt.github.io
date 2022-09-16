# Installing Linux on Windows

This page is a short version of [this longer introduction](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/). It explains how to get the Linux command line on Windows 10. *Note that this requires adminstrator password*.

## The installation procedure in 5 small steps


1. Open **Control Panel > Programs > Turn Windows Features On Or Off** (Norw. text: *Aktiver eller deaktiver Windows-funksjoner*).
1. Turn **Windows subsystem for Linux** on. 
	- Note that the text may differ: *Windows-delsystem for Linux*, ... If you do not have this option, your Windows 10 is too old, and you should  update it to [the October 2018 update](https://www.techradar.com/how-to/how-to-download-and-install-the-windows-10-fall-creators-update-right-now))
1. Restart the computer
1. Go to the Start Menu and chose **Microsoft Store**. Search for **Linux**, and under the **Linux on Windows?** banner, click **get the apps**.
1. Chose the Linux version you want. We recommend **Ubuntu**.


## Basic or updated installation?

Now you are done with the basic installation. You now have to decide whether you are satisfied with that. 

- If you only want to use precompiled analysers (as explained on the [Linguistic analysis page](ling/LinguisticAnalysis.html), you are done. Go to that page and fetch the analysers you want (run the commands in your newly aquired **Ubuntu** window
- If you only want to compile, and not to test your code, this Linux version will work. Return to the page [Getting started with the GiellaLT infrastructure on Windows](GettingStartedOnWindows.md)
- **If you want to run our test tools** you need to update Ubuntu:


## Installation the updated version

Ok, you want to run tests you need to update your Ubuntu to 20.4. **Warning:** The second of these commands may take several hours. Run these two commands:

```
sudo apt install update-manager-core

sudo do-release-ugrade
```

In the beginning, the command halts now and then. Press Y or ENTER as seems fit.


After this is installed, you have access to an updated Linux command line on your Windows machine.

Now, return to the page [Getting started with the GiellaLT infrastructure on Windows](GettingStartedOnWindows.md) and proceed with setting up the work environment.


