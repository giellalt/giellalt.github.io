Configuration of the web server
===============================

Debian stable has been installed on the server, and suns java sdk 1.5
has been installed on it. tomcat5 packages aren't available for debian
stable, so they have been fetched from the unstable distribution.

Howto make a debian package from suns java sdk
----------------------------------------------

-   Go to Suns [java download
    area](http://java.sun.com/j2se/1.5.0/download.jsp). Click on the
    link to the newest jdk, and download the Linux self-extracting file.
-   Fetch the java-package, using the command
    `apt-get install java-package`. This will make a debianized package
    of the jdk.
-   Go into the directory where you saved the jdk, and issue the command
    `make-jpkg <sun-jdk-package-name>`
-   Install, using the command `dpkg -i pkg-name`.

Installing tomcat5 from unstable on debian stable
-------------------------------------------------

Insert the following line into /etc/apt/sources.list

    deb ftp://ftp.no.debian.org/debian/ testing main contrib non-free

To set up what is your main version of Debian you should edit the
/etc/apt/apt.conf (it does not usually exist, create it if you don't
have one) to contain the following line:

    APT::Default-Release "stable";

Upgrade the package descriptions using the command: `apt-get update`.

Install tomcat5 packages:
`apt-get install -t unstable tomcat5 tomcat5-admin tomcat5-webapps`. The
tomcat5 server will be started automatically, as the user tomcat5. The
webapps live in the directory `/var/lib/tomcat5/webapps`.

### Starting and stopping tomcat5

-   The tomcat5 server can be stopped by using the command
    `/etc/init.d/tomcat5 stop`.
-   To start it use the command `/etc/init.d/tomcat5 start`.
-   To do a immidiate stop/start, use the command
    `/etc/init.d/tomcat5 restart`.

Setting up divvun.no and giellatekno.uit.no
-------------------------------------------

Make a war file using the command forrest war. Copy these files to the
directory `/var/lib/tomcat5/webapps`. The tomcat5 server will
automatically unpack these files and they are visible on the address
`http://localhost:8180/divvun-no` and
`http://localhost:8180/giellatekno`. Through some magic using dns and
routers these sites are available on the net as *http://www.divvun.no/*
and *http://giellatekno.uit.no/*.

Maintenance of the sites
------------------------

To maintain the sites we decided to make a script that automatically can
fetch updated files from the cvs server and copy them to the tomcat5
webapps area.

For the site we would like to use google as the search motor, as opposed
to local forrest run instances, where we would like to use lucene as the
search motor. This means that we make manual updates of the skinconf.xml
file. As a consequence only the xdocs directory are automatically
renewed.

If we need new features implemented in forrest, we will make new .war
files and deploy them. To do this we will have to stop the tomcat5
server, copy the war files to /var/lib/tomcat5/webapps, and then start
the tomcat5 server again.

If we need to change forrest.properties we only need to copy it into
`/var/lib/tomcat5/webapps/<site>/project/` and restart the tomcat5
server.

We have set up an user account on the server. This user account has a
private/public passwordless ssh key, to be able to fetch updates from
the cvs server.

The xtdoc cvs tree has been checked out, and skinconf.xml has been
edited to use google as a search motor for the site. The gt/doc tree has
been copied into the gtuit and sd trees.

This user has also been setup to be able to copy the updated files as
into the tomcat5 area as the tomcat5 user via sudo.

To be able to send error messages via mail postfix has been installed.

Details on how the maintenance script works is documented in the script
`gt/script/divvun2web`.
