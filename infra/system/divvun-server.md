The divvun.no web service is automatically restarted by the script
`trunk/gt/script/restart-divvun`. Sometimes this script fails, and a
manual restart of the service has to be done. This is how to do it.

To do this operation smoothly, you would probably like to set up
[password less login](auto-pass.html)

Restarting the divvun server
============================

-   Log in as sd
-   Issue the command `screen -A -r`
-   Issue the command `ps ax | grep java | grep sd`
-   Kill all the processes that this command shows
-   Re-check that there are no java processes going by re-issuing the
    `ps ax ...` command, and kill remaining processes listed by that
    command
-   Go to the `$HOME/trunk/xtdoc/sd` directory, if you are not there
    already
-   Issue the command `forrest run &>divvun.log`
