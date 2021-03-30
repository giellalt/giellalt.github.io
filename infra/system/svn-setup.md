# Requirements


The svn setup requires a few things on the server:


* apache http server - that is, a full web server, and port 80 open
* discusss the svn setup with the IT guys:
** can we do it?
** more external access - is that ok?
* some additional httpd plugins
* we want restricted access to some parts of the repo (basically the polderland directories, since some of the content there is under legal embargo)


Access methods:
* http://-tilgang for alle (dvs anonym) - visse katalogar blokkert - berre les


* https://-tilgang for registrerte brukarar - visse katalogar ev. blokkert for nokre brukarar, les-skriv




## Users


* from the OS (such that users in a certain group is automatically included)
* from an AuthUser list/file (to allow "random" external users write access)


Find out what httpd modules are needed to support such a setup.






