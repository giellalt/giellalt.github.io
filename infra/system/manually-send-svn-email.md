Sending svn e-mail manually
===========================

Generic pattern
---------------

    $REPOSITORY_DIRECTORY/hooks/post-commit $REPOSITORY_DIRECTORY #REVISION

Sending langtech mails for a specific revision
----------------------------------------------

    ~/svn/langtech/hooks/post-commit ~/svn/langtech 135500

Sending a sequence of langtech mails
------------------------------------

    i=135307
    while [ $i -lt 135315 ]
    do
        ~/svn/langtech/hooks/post-commit ~/svn/langtech $i
        i=$((i+1))
    done
                    

To send svn e-mails for other repositories, just exchange "langtech"
found in the commands above with one of the other repositories found in
\~svn on gtsvn.
