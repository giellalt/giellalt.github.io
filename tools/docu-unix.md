Crashcourse in Unix/Linux for new users
=======================================

\[Note that I will write all commands (that is everything you are
supposed to write in) in **boldface**. After each command, press the
**enter** key. I print the answers from the machin in "quotes". I refer
to Unix, but everything I say holds for Linux as well. The first section
is a first aid for newcomers, you will find lists of commands and some
longer explanations further down in the document. And if you want to
close the session and leave gtlab for today: print **logout**.\]

Where am I, what do I do, and how do I move around?
---------------------------------------------------

To find out where you are, print **pwd**. This means "print working
directory", and does what it says. If your username is trond, and you
are in your home directory, it will answer "/home/trond". To list the
files and directories (a directory is the same as a folder in
mouse-based systems) in the working directory, print **ls**. Print **ls
-l** to see file size and date as well. The command **ls -lt** sorts
after date, **ls -lS** after size (there should be set up shortcut
commands **ll**, **lt** and **lS** for these, ask Trond if the shortcuts
do not work.

In Unix, directories can be referred to by absolute or relative
reference. No matter where I am, the command **ls -l /home/trond/gt/**
will always list the content of gt. Since the path starts with "/", it
refers to the Root directory, which always is the same. If I stand in my
home directory, I can write **ls -l gt** (since it contains gt), but if
I stand in any other directory (e.g. gt itself, or sme, etc.), I cannot
do that, since these directories do not contain a directory gt. Standing
in sme (a daughter of gt, I must write **ls -l ../**. So, standing in
your home directory, the command **ls ../** tells you the name of the
other users on the system.

To move from one directory to the other we use the **cd** (change
directory) command. To get from your home directory to the North Saami
directory, print **cd gt/sme**. To get one directory up, **cd ..**, to
get two up, **cd ../..**. Check where you are with the **pwd** command.
One up and one down (from North to Lule Sámi) **cd ../smj**.

To start a program (like emacs, lynx, lexc, twolc), print the name of
the program. With lynx, it is convenient to start with **lynx
gt/doc/index.html** (or **lynx index.html**, if you already are in the
doc directory). From index.html you can find all the other files (such
as this one).

Use the **TAB** character to complete names. So, if the directory name
(or file name) you want to type has a uniqe beginning, type it and press
**TAB**. In your home directory, print **ls g** and then print **TAB**.
It will complete with "t/" (if you have no other directories or files
that start with g). Then print **s** and **TAB**, it gives a pling
(there are more than one directory starting with "s". Press **TAB**
again, and it lists the 7 candidates. Then, complete with **me** (if you
want to go the North Sámi). The same you can do with file names as well.

Unix remembers all your previous commands. Typing the up arrow gives you
the previous command, down arrow the next. The command **history**
documents what you have done until now. Here is a typical case: You type
**lookup -flags mbTT bin/sme.fst** (because you want to check some North
Sámi words). Nothing happens. Then you do **pwd**, and finds yourself in
your own root directory, instead of in gt/sme, where you thought you
were (you get the answer "/home/trond" instead of "/home/trond/gt/sme".
Type **cd gt/sme** to get to the right place. Now, instead of typing the
long lookup command again, hit the up arrow key three times (one for the
cd command, one for the pwd one, and voila, you see the lookup command
again. Press enter, and this time it will work.

Editing input by means of the command line
------------------------------------------

Writing, saving, etc. is done in emacs or other programs. But we use the
command line as well.

To list all lines in a file with a certain content we use the command
**grep**. So, to list all lines that contain the string "Sg1" in the
file sme-lex.txt, write **grep Sg1 sme-lex.txt** (in the gt/sme
directory). If you want to search for whitespace (mellomrom, välilyönti)
as well, use the ' ': The command **grep 'an K' src/sme-lex.txt** gives
all suffixes ending in "an" and leading to the K lexicon. Similarily,
**grep ' in leat' corp/ntunix** (where "ntunix" is the name of the file
containing the New Testament) gives all the strings " in leat" in that
text. Note that **grep 'in leat' corp/ntunix** gives a different results
(it matches many other strings, e.g. "geain leat" as well). Grep and
other searches can be extended by REGULAR EXPRESSIONS. Thus, the symbol
"." means "any one character", and the search string **'lea. '** thus
matches both lean, leat and any other 4-letter word beginning with lea
(including the word "lea" followed by two empty spaces). A list of
regular expressions can be found below.

To see the content of a file, use the command **less**. Thus, (in src/)
to see the file punct-sme.txt, print **less punct-sme-lex.txt** (**less
pu** and then **TAB** will be enough, by the way). If the file is long
(e.g. noun-sme-lex.txt), less gives you one screenful at a time, and you
can go forward by hitting the space bar (mellomromstasten,
välilyöntinappi). You return to the command line by printing **q**.

Often, the output from grep and other commands is all to long for one
screenful. Here we need to do more than one thing at the time, and we
use the "\|" symbol (English: pipe, Finnish: putki, Norwegian: pipe,
dessverre). It is a VERY IMPORTANT symbol for all of us, and it means: I
take what I get from the left and give it to the right. Thus, since the
command **grep ' in leat' ntunix** returns more than one screenful, we
give the output of that command as input to the less command, by using
the pipe. Write: **grep ' in leat' ntunix \| less**, and you get the
result one screenful at the time. The command may be quite complex.
Thus, to see the analysis of the New Testament, write (in **sme)**

**`cat corp/ntunix | preprocess --abbr=bin/abbr.txt |                lookup -flags mbTT -utf8 bin/sme.fst | lookup2cg | vislcg                --grammar=src/sme-dis.rle | less`**

The first command (**cat ntunix**) just takes the text and feeds it to
the pipe. The second command (**preprocess --abbr=abbr.txt**) uses the
program preprocess to separate commmas, etc., and make the file into a
list of words. Thus, the string "No, todyay." becomes

No  
,  
today  
.

The third command, **lookup -flags mbTT sme.fst** uses the lookup
program to analyse the input, by using the North Sámi parser sme.fst.
The output, an analysed version of the New Testament, is given to the
less command, one screenful at a time, and the whole process takes less
than 3 seconds.

The output can be manipulated further. To extract all adverbs, replace
"less" above with the string **grep '+Adv' \| sort \| uniq -c \| sort \|
less** (to get them in alphabetical order) or **grep '+Adv' \| sort \|
uniq -c \| sort -nbr \| less** (to get them sorted according to
frequency).

The magic commands are **sort** (sort the file, one line at a time,
alphabetically), **uniq** (delete repeated identical lines), **rev**
(reverse lines, e.g. "every day" becomes "yad yreve"). Note how
combining rev and sort gives a reverse wordlist, sorted according to
last letter.

If you want to dismbiguate, you should write

**cat corp/ntunix \| preprocess --abbr=bin/abbr.txt \| lookup -flags
mbTT -utf8 bin/sme.fst \| lookup2cg \| vislcg --grammar=src/sme-dis.rle
\| less**

The string up to `lookup2cg` is the same as above. The command
`lookup2cg` calls for a script that changes the input from "Xerox style"
to "CG style", i.e. to the form that the constraint grammar program
`vislcg` demands. Then we call up vislcg, with the option
**`--grammar`**, and we set the grammar file to `sme-dis.rle`, i.e. to
our disambiguation file. If we also want to see the rule number, we add
the flag **--minimal**, and the whole command becomes

**cat corp/ntunix \| preprocess --abbr=bin/abbr.txt \| lookup -flags
mbTT -utf8 bin/sme.fst \| lookup2cg \| vislcg --grammar=src/sme-dis.rle
--minimal \| less**

The numbers S:1234 etc. are the line numbers in the sme-dis.rle file.

Editing the text on the command line itself
-------------------------------------------

Printing a long command line many times (as the example above) is a
waste of time. Instead, you should use the arrow up key, get a copy of
the last command(s), and edit it again. Also, if you do not know whether
your command will ork the way you plan, you may build it one command at
a time, and check the output for each part. Now, you need to edit the
text on the command line. If your arrowkeys are set, the arrow left /
arrow right will work. The most efficient way of editing is to use the
editing shortcuts that you already have learned (?!) for emacs. A short
recapitulation / introduction: **ctrl-a** beginning of line, **ctrl-e**
end of line, **ctrl-b ctrl-f** one step to the left/right, **ctrl-d**
delete the character under the cursor, **ctrl-k** delete from cursor and
to end of line. With **esc** instead of **ctrl** in front of **f, b, d**
you move and delete words instead of characters.

Switching between programs and the command line
-----------------------------------------------

You may jump out of any program (e.g. emacs, lynx, lookup), to the
command line, with the command **ctrl-Z**. Once on the command line, you
get back again by typing **fg**. This is nice if you have forgotten the
name of some file, if you just want to count how many words a certain
file contains midway in an emacs session, etc.

Remember to type fg, and not open the same program again! Otherwise, you
will end up with several parallel versions of the same program running.
If you suspect you did just that, then go to the command line (ctrl-Z),
and print **jobs**. This should give you a list of how many programs you
have open in the same window at the same time (no more than one is
recommended, unless you have a very tidy head).

Getting help
------------

Online help is available, especially via the **man** (short for "manual"
command. Thus, **man ls** explains the ls command. **man man** explains
the man command itself. There are two bad things with the man pages:
First, in order to read about a command, you must know its name. You
cannot write **man list** and accept Unix to understand that you want to
list files (instead you can read about a totally different command).
Second, the man pages are well known for being very cryptic (the best
guarantee for understanding them is that you know what the command does
already). Still, the man pages are useful to explore the properties of
the commands. For the **uniq** and **sort** command above, we added some
FLAGS, that is small letters with a "-" symbol in front of them (there
can be more than one flag, in which case only the first of them gets the
"-" sign, sort had e.g. 3 flags, and in an earlier example, ls had two.
As you can see from the man pages, the -c flag makes uniq count how many
identical lines there are, whereas the -nbr of sort lists it input
addording to number (n), ignoring blank lines (b) and reversed (r), that
is with the most common word first.

If the man page is too cryptic, you can instead write **info sort** (or
any command name). The info pages have much more text, stretching over
several pages. The text is structured as a primitive web browser:
**TAB** brings you to the next link, you follow the link by pressing
enter, and when the top of the screen says Next:, Prev:, Up:Top, etc.,
you go there by pressing **n**, **p**, **u**, etc. You leave both man
and info by pressing **q**.

Somtimes, but not always, the **apropos** command may also help. To have
a list of commands related to e.g. sorting, type **apropos sort**.
Searching around for help on a Unix system, not knowing what to look for
seldom is a good idea, thus, you should ask a local guru, and you should
buy a reference book.

List of commands
----------------

Indiana University has a very good list of commands on their [Unix
commands reference card](http://www.indiana.edu/~uitspubs/b017/). Fetch
it, print it out, and tape it to your computer!

### The basic commands that you need all the time

-   **pwd** where am I
-   **cd gt/sme** change to directory gt/sme
-   **cd ..** go one directory up
-   **cd ../doc** if in a directory that is the neighbour of doc, go one
    step up, and then down to doc
-   **cd \~** go to your home directory (the tilde (\~) is **AltGr** +
    the key to the right of **Å** on Norwegian keyboards)

### Commands to manipulate corpus text

### Commands to handle files

Slightly longer explanations
----------------------------

### Directory structure

tbw. some day.
