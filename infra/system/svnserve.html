Configuration of svnserve
=========================

The svnserve daemon serves the restricted part of our corpus. That
repository is located in `/var/repositories/boundcorpus`. The repository
should be accesible only from gtsvn, so the setup of the svnserve daemon
and the firewall reflects that decision.

Configuring automatic start up
------------------------------

To make svnserve start up automatically at boot time, the
`/etc/init.d/svnserve` script was added. The script was fetched from
[CentOS 5.2 SVN Server](http://www.mygeekproject.com/?p=152). The
variable named arthur was changed to
` --listen-host localhost -r /var/repositories`. This means that
svnserve only listens to requests from gtsvn itself, and serves the
repositories found in the directory `/var/repositories`.

Configuring the firewall
------------------------

The line
`-A INPUT -m state --state NEW -p tcp --dport 3690 -s localhost -j ACCEPT`
was added to the file `/etc/sysconfig/iptables`. The iptables service
was restarted by running the command `sudo /etc/init.d/iptables restart`
to pick up the changes in the setup.

Setting up restrictions
-----------------------

In the `[general]` section of
`/var/repositories/boundcorpus/conf/svnserve.conf` the following
variables have been set:

-   **anon-access = none:**  
    This means that nobody but the users defined in the user and
    password file `/var/repositories/boundcorpus/conf/passwd` have
    access to this repository.
-   **auth-access = write:**  
    This means that users defined in the user and password file by
    default have write access to the repository.
-   **password-db = passwd:**  
    The file `passwd` in `/var/repositories/boundcorpus/conf` contains
    users and their passwords
-   **authz-db = authz:**  
    This file sets up path based restrictions, which means that some
    users are allowed to read and write to this repository, others have
    only read access.
