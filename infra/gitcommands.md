Git commands
============

This document contains the basic commands for using git, both on the command line
and in Tower (with links to the relevant Tower help page).
Note that contrary to svn, git only

- **Check out:** `git pull` / [Tower: the Pull button](https://www.git-tower.com/help/guides/branches-and-tags/pull/mac), or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
    - **NB!** `git checkout` is a real command, it is used to switch branches! Don't use it!
- **Get an overview:** `git status` / [Tower: just open the relevant repo](https://www.git-tower.com/help/guides/working-copy/inspect-changes/mac)
- **Mark a file as committable:** `git add file.txt` / [Tower](https://www.git-tower.com/help/guides/working-copy/stage-changes/mac) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>
- **Check in locally:** `git commit -m "blabla" file.txt` / [Tower](https://www.git-tower.com/help/guides/working-copy/commit-changes/mac) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>, write your message, and <kbd>Cmd</kbd>+<kbd>Return</kbd> when done
- **Check in globally:** `git push` / [Tower](https://www.git-tower.com/help/guides/branches-and-tags/push/mac) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>U</kbd>
