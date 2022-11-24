Git commands
============

This document contains the basic commands for using git, both on the command line
and in Tower (with links to the relevant Tower help page).
Note that contrary to svn, git only

| Action  | Git command line | Tower GUI | Tower keyboard shortcut |
| ------- | ---------------- | --------- | ----------------------- |
| **Check out:** | `git pull`| [the Pull button](https://www.git-tower.com/help/guides/branches-and-tags/pull/mac) | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
| **Get an overview:** | `git status` | [just open the relevant repo](https://www.git-tower.com/help/guides/working-copy/inspect-changes/mac)
| **Mark a file as committable:** | `git add file.txt` | [Tower](https://www.git-tower.com/help/guides/working-copy/stage-changes/mac) | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>
| **Check in locally:** | `git commit -m "blabla" file.txt` | [Tower](https://www.git-tower.com/help/guides/working-copy/commit-changes/mac) | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>, write your message, <kbd>Cmd</kbd>+<kbd>Return</kbd> when done
| **Check in globally:** | `git push` | [Tower](https://www.git-tower.com/help/guides/branches-and-tags/push/mac) | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>U</kbd>
