Adding users on the Linux servers
=================================

For Mac (the divvun server), see below

To add a new user named *Laila Sara* with `laila` as the user name, do
the following:

Write the following command. It shall be written in one line:

    sudo /usr/sbin/adduser -c "Laila Sara, Samisk inst." laila

Then assign the new user a password, by writing:

    sudo passwd laila

In order to add `laila` to another group, use this command:

    sudo /usr/sbin/usermod -G corpus,cvs laila

Note that here, `laila` was already member of the group cvs, and we
wanted to make her member of corpus. We still had to give all intended
group memberships (except the personal group), otherwise she would have
been kicked out of cvs.

Remember to copy the `.bashrc, .bash_profile` and `.emacs` files to the
laila account while you are still a root user. Remember to run the
initial `svn co             https://gtsvn.uit.no/langtech/trunk gtsvn`
command, and then `gtsvn/gt/gtsetup.sh`.

If the user has forgotten his/her own password, enter the command
`sudo passwd laila`. You will not be prompted for the old password, and
the new one you enters will erase the old one.

Removing users
==============

For removing (in this example the user laila), be root, and use this
command (`-r` removes the files of the user as well):

    sudo /usr/sbin/userdel -r laila

Adding users on Mac servers
===========================

Mac servers have other commands. Use the dscl command. This example
would create the user "luser", like so:

    dscl . -create /Users/luser                             

    dscl . -create /Users/luser UserShell /bin/bash         

    dscl . -create /Users/luser RealName "Lucius Q. User"   

    dscl . -create /Users/luser UniqueID "1010"             

    dscl . -create /Users/luser PrimaryGroupID 80           

    dscl . -create /Users/luser NFSHomeDirectory /Users/luser

You can then use passwd to change the user's password, or use:

dscl . -passwd /Users/luser password

Cf. [a relevant documentation
page.](http://serverfault.com/questions/20702/how-do-i-create-user-accounts-from-the-terminal-in-mac-os-x-10-5)
