Using SVN on a Windows machine: TortoiseSVN
===========================================

The program
-----------

TortoiseSVN is a graphical program for using SVN. It can be downloaded
from [tortoisesvn.net](http://tortoisesvn.net/). Just download the
program and install it as any other Windows program. This is the program
we recommend for using SVN on Windows.

Installation
------------

Create the folder where you want to have your project files. Then right
click on it and select `TortoiseSVN → Checkout…`. Enter the URL to
checkout, in this case `https://gtsvn.uit.no/langtech/trunk` and click
on `OK`. The files are then downloaded to the folder.

In order to be able to check in, fill in your username and password.

Usage
-----

When the program is installed, go to the folder where you want to keep
the language technology files (e.g. `My Documents`). In that folder,
right-click with the mouse on an empty spot in the folder. You will note
that the context-sensitive menu has some additions in the middle, where
it reads SVN and something. Choose the `SVN Checkout`. You will then get
a panel, where you fill in your account data.

Now you may edit the files, e.g. with `EditPad Lite` or `XMLEditor`.
When you have edited them you will note that the green symbol attached
to the file symbol has turned orange. This means you should `check in`.
Right click on the file icon, and choose `check in`. Write a log
message, and click OK.

The general principles are the same for SVN usage here as elsewhere:
Always update before you start working (right-click, and SVN Update),
and always check in when you are done with your work, minimum once a
day.

There also is a [Extensive user
guide](http://tortoisesvn.net/docs/nightly/TortoiseSVN_en/index.html) .

Key chapters include:

-   [Check out the files for the first
    time"](http://tortoisesvn.net/docs/nightly/TortoiseSVN_en/tsvn-dug-checkout.html)
-   [Check in your work to the central
    repository"](http://tortoisesvn.net/docs/nightly/TortoiseSVN_en/tsvn-dug-commit.html)
-   [Update the working copy, or check out
    files](http://tortoisesvn.net/docs/nightly/TortoiseSVN_en/tsvn-dug-update.html)
