# Git usage notes

This document contains some useful notes for those wanting to start using Git
with the GiellaLT infra (when we have moved to GitHub, planned for May 2020).


#  Subversion (svn) checkout and commits


##  Checktout


To get the regular repo dir, you will normally want to check out using a URL
following this pattern:


```
svn co https://github.com/username/reponame.git/trunk reponame
```


The important part here is to append `/trunk` to the repo URL, so that you
avoid getting all branches and tags (unless you really want to work with them of
course). Then it is also useful to specify the plain `reponame` at the end, to
give the local folder a short and readable name.


##  Commits & authentication


The first time commit requires authentication (which is then cached for future
use). Unless you have set up a Personal Access Token, you specify the username
and password in the regular way:


* username: your github username
* password: your github password


Of course you need write access to the repo you are trying to commit to.


###  Personal Access Token


If you have configured a [Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
instead of the username and password, you provide the token in place of the
username, and an empty password. That's it! Also in this case the provided value
will be cached for future use, so there will normally not be necessary to input
the token again - everything works smoothly without a question.


#  Basic stuff


Clients:


* CLI - archane and with many pitfalls, avoid it if you are not sure what you
  are doing - really sure
* GUI:
** Tower is one of the best, but is proprietary and cost money. There's
   an option for getting it for free for academic institutions. If that is not
   possible, it is still very much worth the money.




#  Advanced topics


##  merge vs rebase


See
[this thread](https://stackoverflow.com/questions/804115/when-do-you-use-git-rebase-instead-of-git-merge),
epsecially the answers by Pace, Andrew Arnott (with link to an archived post by
Linus Torvalds) and Abdullah Khan (with link to a git-tower explanation which is
also veory useful).
