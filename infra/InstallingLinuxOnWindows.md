# Installing Linux on Windows

This page is a short version of [this longer introduction](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/). It explains how to get the Linux command line on Windows 10. *Note that this requires adminstrator password*.


1. Open **Control Panel > Programs > Turn Windows Features On Or Off** (Norw. text: *Aktiver eller deaktiver Windows-funksjoner*).
1. Turn **Windows subsystem for Linux** on. 
	1. Note that the text may differ: *Windows-delsystem for Linux*, ... If you do not have this option, your Windows 10 is too old, and you should  update it to [the October 2018 update](https://www.techradar.com/how-to/how-to-download-and-install-the-windows-10-fall-creators-update-right-now))
1. Restart the computer
1. Go to the Start Menu and chose **Microsoft Store**. Search for **Linux**, and under the **Linux on Windows?** banner, click **get the apps**.
1. Chose the Linux version you want. We recommend **Ubuntu**.

Now you could be done. If you only want to compile, and not to test your code, this will work. But **if you want to run our test tools** you need to update Ubuntu:

   6. update to 20.4. **Warning:** The second of these commands may take several hours:

```
sudo apt install update-manager-core

sudo do-release-ugrade
```

In the beginning, the command halts now and then. Press Y or ENTER as seems fit.


After this is install, you have access to the Linux command line on your Windows machine.

Now, return to the page [Getting started with the GiellaLT infrastructure on Windows](GettingStartedOnWindows.md) and proceed with setting up the work environment.


