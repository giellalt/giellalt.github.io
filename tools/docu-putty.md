PuTTY is a program that makes it possible to work on a remote Linux
machine from a Windows PC computer.

How to use PuTTY.exe
====================

You need two files, PuTTY.exe and psftp.exe. They can both be found and
downloaded from the same site.

What is PuTTY.exe and psftp.exe?
--------------------------------

Use the terminal: **PuTTY.exe** is a program that makes Windows users
establish a secure connection to Unix (and Linux) terminals, among other
things.

Copy files to and from the terminal: **psftp.exe** is a program that
makes it possible to copy files from victorio to your local machine and
vice versa.

How to get the programs
-----------------------

Go to the [PuTTY Download
Page](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).
Download both **PuTTY.exe** and **psftp.exe**.

How to set up PuTTY and connect to the terminal
-----------------------------------------------

Doubleclick on the PuTTY.exe icon, and get a small box in return. The
**first** time you use putty with a new terminal, the following, in this
order:

1.  Click on `Translation` in the category Window in the leftmost box.
2.  The default translation is `ISO-8859-1`, you should open the list
    and choose `UTF-8`
3.  Thereafter, click `Session` (the topmost node)
4.  To the right, under "Host Name", write *gtlab.uit.no*(or whatever
    terminal you log on to).
5.  Make sure Connection type is `SSH`
6.  Give the connection a name, e.g. "victorio" (in the space one field
    down).
7.  Click the `Save` button
8.  Now, the name ("victorio") appears on the list of predefined
    servers. To log in, double click on it (or select and click `Open`.

**NOTE!** There is a bug in the present PuTTY version: The Sami keyboard
is able to write all characters, except č, ŋ and ŧ. All characters are
displayed on the screen, though, and you can copy in the problematic
čŋŧ.

How to copy files between the terminal and your own machine
-----------------------------------------------------------

On [the PuTTY download
page](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html),
doubleclick on the psftp.exe icon. Write "open gtlab.uit.no" (or your
server name) at the prompt. Give your user name and password. To get the
file file1.txt from the remote machine to your own machine, you write

get file1.txt file2.txt

(advice: Use a different filename for the file, so that you do not need
to risk deleting your work if you use get instead of put etc.). To copy
a file file3.txt which is on *C:\\Users\\MyName* from your PC to the
remote machine , you write

put C:\\Users\\MyName\\file3.txt file4.txt The command is
`get sourcefile resultfile` (and the same for put). In order to copy
e.g. the file main/gt/sme/src/noun-sme-lex.txt to your own machine,
write this command:

get gt/sme/src/noun-sme-lex.txt noun.txt

Note that psftp.exe makes it possible to use standard unix commands. Cf.
[the psftp.exe help
file](http://the.earth.li/~sgtatham/putty/0.52/htmldoc/Chapter6.html)
for a list of commands.

Remember: *putty* is a program for working on the remote computer,
*psftp* is there for copying files to and fro.

Copy many files at the same time from the terminal to your machine with psftp.exe
---------------------------------------------------------------------------------

The psftp.exe program cannot use the \* notation when copying files, one
must write the name of each file separately. The way of copying many
files in one operation is to use putty.exe to lump them together in one
archive file, and then use psftp.exe to move that file to your local
machine, and unpack it there. The following command makes an archive
files.zip of all files ending in .txt in the terminal:

zip files.zip \*.txt

Then you must copy the files to your local machine. In order to do that,
open a window in psftp.exe, and give the following command, just as
described before (note that s.tar is so big that it might take some time
to download it.):

get files.zip f.zip

The file files.zip may then be opened on your local Windows machine with
the winzip program (or similarily).

Copy many files at the same time from your machine to the terminal with psftp.exe
---------------------------------------------------------------------------------

Put all the files you want to use in a folder, say its name is filmappe.
Right-click and choose

move to &gt; a zipped archive

(Norwegian: Send til &gt; Komprimert (zippet) mappe)

The resulting file is named filmappe.zip (even though the .zip is not
displayed). Copy the file as before, in psftp.exe:

`put filmappe.zip f.zip`

In the terminal (in putty) you then open it by writing

`unzip f.zip`
