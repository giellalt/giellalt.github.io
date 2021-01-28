This page is a part of the overall [Getting started](GettingStarted.html) page.
It describes the final steps before you can start developing for your language
when you are on a multiuser server. It is assumed the server
[has been prepared by a system administrator](SettingUpAMultiuserServer.html)
to contain everything you need to get going.


For each language you want to work on, do the following:


```
svn co https://gtsvn.uit.no/langtech/trunk/langs/LANGCODE --username <your_username>
```


where `LANGCODE` is the ISO 639-3 three-letter code for the language. You
can see a list of the languages we currently are working on by looking at
[https://gtsvn.uit.no/langtech/trunk/langs/].


Further svn commands and other commands useful in the daily work can be found on
[this page](/tools/docu-svn-user.html#Frequently+used+commands).
