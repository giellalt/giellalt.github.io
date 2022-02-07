[Cornerstone](https://www.zennaware.com/cornerstone/index.php) is a highly
aclaimed, commercial graphical [Subversion](https://subversion.apache.org)
client. It provides an easy interface to a number of advanced Subversion
features. It can be bought from the Cornerstone home page, or from the
Mac App Store.


[The Cornerstone web site](https://www.zennaware.com/cornerstone/index.php) has
a good introduction to its main features, and
useful [online help](https://www.zennaware.com/cornerstone/helpbook/index.html).
What follows below is a short overview of the main features needed in daily use.


# Initial setup


Start Cornerstone and either click **Add Repository** (if you don't have a local
working copy already) or **Add Working Copy** (if you *do* have a working copy
already):


[Cornerstone: initial setup](images/CornerstoneInitialSetup.png)


# Working with the local working copy


When all is set up, Cornerstone will give you a status listing directly in the
window. It will also indicate how many commits are in the repository since you
last updated (*1* in the picture below). There are premade filters to list
*All* files, only *Changed* files, *Conflicted* files, etc. In addition,
there is a search field where one can search on filename, author name
or revision number:


[Cornerstone: view of working copy](images/CornerstoneWorkingCopyWithUpdates.png)


When committing files, press *Cmd-Return* to get a diff view to help with
writing the commit message, and to verify that you are actually committing what
you intended:


[Cornerstone: commit with text diff](images/CornerstoneCommitWithTextDiff.png)


The diff view also works with images:


[Cornerstone: commit with image diff](images/CornerstoneCommitWithImageDiff.png)


One of the most powerful features of Cornerstone is the timeline view. Using it
one can compare any two revisions of a file:


[Cornerstone: timeline view](images/CornerstoneTimlineView.png)


This can be very useful e.g. when debugging, or tracking changes, especially
when combined with the *blame* labelling (turn on the blame labelling by
clicking the button highlighted with the red circle below):


[Cornerstone: timeline view with blame
enabled](images/CornerstoneTimelineViewWithBlameEnabled.png)


There are many more features in Cornerstone, e.g. merging and branching, that go
beyond this short guide. Look at the Cornerstone help linked to above, and don't
be afraid of asking for help.
