Adding or changing user and the password
========================================

    sudo htpasswd -m /etc/subversion/svn-auth-file sally
    New password: *******
    Re-type new password: *******
    Adding password for user sally

Add the user on the commmitters line in the file
/etc/subversion/svn-authz. Relevant user info is found in admin in a
private folder -- and should be kept.

Adding users to the svn mailing alias
=====================================

Optionally, add the user to the alias *samicvs* in the file
`/etc/aliases`, and *run the program* `newaliases`.

Adding new aliases for svn mail (i.e., new sets of files to send mail about to different users)
===============================================================================================

New aliases for groups of files for svn should be added to the file
`/etc/aliases`. Thereafter, they will be used in the so-called
post-commit hook (i.e. their svn messages will be sent to the members of
the alias in question. Do as follows:

-   Make a new alias `aliasname` for svn mail by adding a *new line* in
    the file /etc/aliases in this format
    `aliasname:                your.address@uit.no, some.person@gmail.com`.
    The aliasname may be the relevant directory, e.g. chr
-   Copy the last line of the post-commit script (the file
    /home/svn/langtech/hooks/post-commit), add the copy as a new last
    line of the same file, and change the path following *-m* to the
    path with the files you want to be covered by the alias. Change the
    address to aliasname@localhost. The resulting line should look like
    this:
    -   `LC_ALL=se_NO.UTF-8 commit-email.pl "$REPOS" "$REV" -m "<path of interest>" -h "gtsvn.uit.no"                      -s langtech aliasname@localhost`
-   The post-commit scripts are here:
    -   /home/svn/langtech/hooks/post-commit
    -   /home/svn/biggies/hooks/post-commit
    -   /home/svn/dasago/hooks/post-commit
    -   /home/svn/freecorpus/hooks/post-commit
    -   /home/svn/boundcorpus/hooks/post-commit
    -   /home/svn/private/hooks/post-commit
    -   /home/svn/speech/hooks/post-commit

TODO: Document the implementation of this
