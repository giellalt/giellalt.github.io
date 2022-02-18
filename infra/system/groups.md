Managing groups
===============

Be root. The group ID number (here called nnn, is for ling 503) is found
in /etc/group

Add a new group called newname:

/usr/sbin/groupadd -g nnn newname RET

Add members to this group: Open the file /etc/group, and add a line that
looks the same as the line for the groups cvs and ling.

Check group membership: Be root, and give the command

groups trond

to check which groups trond belongs to.

Group attribute for files
=========================

The relevant commands are

chown trond -R directory/  
chgrp ling -R directory

to change to owner trond and group owner ling.
