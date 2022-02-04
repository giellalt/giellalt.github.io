# Unix for linguists


# Introduction


Linguists need Unix because Unix can manipulate text for us. To be able to use Unix, we need to use Unix's command line interface, the Shell. This is an introduction to what we need to know about Unix to do what we want. After each section there will be a small summary.

Unix is found on Linux and on macOS. The application we use to give commands is usually called the Terminal. On MS Windows, there is no Unix Shell. You may [install Linux](infra/GettingStartedOnWindows.html) your Windows computer (provided the Windows version is newer than Windows 10 (October 2018).

In order to use Unix on macOS or Linux just open the terminal program. On the Mac it is located in the folder for assistance programs. In Linux the terminal is in the folder for programming tools and on Windows it is the icon for the Linux version you just installed.


# Basic Commands


# Commands, not mouse click


Unix is not a program, it is an operating system. It differs from modern operating systems in that it has no graphical user interface. Instead, it has what we call a **command line**, i.e. the cursor is waiting for you to enter a command. Right after you have logged into your home directory you are in your home directory. To the left of the cursor there is a short text which tells you which directory you are in right now. 

You will now learn many commands. Commands must be written in a certain way. A unix command has two mandatory parts: The command must start with the name of a program, and it is completed when you press the ENTER key. 

- Let's try a simple command: 
  - Write date and press ENTER. 
  - In response, you should get the current date and time. 
- Another command: 
  - Write cal and press ENTER. 
  - The answer should be a small calendar. 

From now on we will assume that you always press ENTER after a command. "type ls" therefore means "type ls and press ENTER", and similarly for the other commands.

Most commands take one or more arguments. One such command is **mkdir**, which means "make directory" or create a directory. Try it: Write `mkdir`, press ENTER, and you will get a logical answer. In order to make  a directory unix needs an argument, a directory name. Write e.g. `mkdir hogwash`. To see what has happened, type `ls` (list the contents of the directory you are in right now). The directory you just made you may now remove by writing `rmdir hogwash`. Try it, and then try it again. (The `rmdir` command only works on empty directories.)

From a linguistic point of view, we can look at the commands as verbs. Since all commands represent our requests to the computer, we may see them as verbs in the imperative. Like other verbs also Unix commands are either transitive or intransitive. A command like **date** can be seen as an intransitive verb: You print `date` and the machine tells you what date it is. The **mkdir** command, however, is a transitive verb, it must have an object, namely the name of the new directory you want to create.

In the same way as regular verbs, Unix commands also operate with implicit objects. The interpretation depends on the context. When we say "eat!" we usually mean "Eat the food that is in front of you". The Unix command **ls** also has such a context-dependent, implicit object. What you're really saying is "list the contents of the directory I am standing in right now." If you want to list the content of a specific directory, you must state the name of the directory (see below). The same applies to **cal**. By typing `cal`, you get this year's calendar. If you want to know which day of the week we started a new millenium, type cal 2000.  We will later look at commands with two objects, the Unix version of ditransitive verbs.

Commands can also be modified. We may call these modifiers adverbs, but programmers call them options or flags. Different commands take different adverbs, or flags, and the meaning of the flag varies from command to command. Flags typically consist of one letter or number, and they begin with a hyphen. On some systems, the flags **-m** causes Monday to be the first day of the week, instead of Sunday and **-3** - to show the calendar of the 3rd month - March. 

Summary:
- Command syntax: command name or command name argument ENTER
- Commands: `date`, `cal`, `mkdir`

Commands can be seen as verbs in the imperative. These verbs may be intransitive or transitive (have none, one or more arguments) and they may take modifying adverbs (flags).


## The Unix landscape


Your home directory is located in another directory. It also contains other directories. But somewhere the chain of directories stop. The mother of all directories is the root directory. It has its own symbol in Unix, namely /. To see the content of your own root directory you may type `ls /`, i.e. "list the contents of the root directory". Remember to press ENTER. There you will see some cryptic names, all names of different directories.

On Linux systems the base of the directories in the root dicrectory is called `home`. The corresponding directory on Mac computers is called `Users`. This directory contains all users on the system. If you work on a laptop you are probably the only user. The command `ls /home` or `ls /Users` lists the contents. One of the user names is yours. If you write just `ls` you will see all the files and directories you have in the directory you are in right now.

Summary:
- home directory, root directory (**/**)
- Directory Structure: Directories are inside one another. In the graphical user interface, they are called folders
- Commands: `ls`, `ls /`, `ls /home`, `ls /Users`


## Creating directories and moving around


Create a directory for this course, let us call it `unixcourse`. You thus write `mkdir unixcourse`. Write `ls`, and you see that the directory has been created. If you then type `ls unixcourse` you can find out what's inside the new directory. Yes, quite right, nothing. On macOS, you can also type `open unixcourse` to get a graphical view of the directory you created. As you can see, the graphical world is a reflection of the command line world, and vice versa.

Then try to move into the directory. Type `cd unixcourse` (`cd` means "change directory"). Check if prompt change. If you then type `ls unixcourse` once you get a completely different answer compared to last time. Why?

The reason you now get the answer "No such file or directory" (or equivalent) is that the catalog `unixcourse` does not itself contain any directory called "unixcourse". Create now a new directory, writing for example `mkdir somename`. You can then go back to your home directory by typing `cd ..` (cd space dot dot). The two dots mean "the parent directory to the directory I now stand in". You may then type `ls unixcourse`, and get the answer "somename"). You may use the symbols **..** also in other contexts. The command `ls ..` means "list the contents of the parent directory to the directory I now stand in". If you stand in the directory `unixcourse`, and your home directory contains e.g. the directories `unixcourse` and `Documents`, you may list the content of `Documents` by typing `ls ../Documents`. The dots **..** means "one level up", and **/** means one level down. The name `Documents` tells which directory the system should list the contents of.

One directory is more important than all other directories: the home directory. If you are in the directory `unixcourse` and want to go home, you could write `cd ..` but if you're not sure where you are, or you will go directly home, you may write only `cd`. The command moves you right back to the home directory.

If you are wondering where you are, you may write `pwd`, which means "print working directory". In response you will receive the path from the root directory to the directory you are in right now.

Summary:

Directory structure: parent directory, daughter directory, the notation ..

Commands: 
- **cd** (moves me home) 
- **cd ..** (moves me one directory up)
- **-cd name** (moves me to the directory "name")
- **pwd** (print working directory)


# Relative and absolute reference


There are two ways to refer to files and directories in Unix. One is absolute and the other is relative. The way we have used so far is the relative one. When we use the relative reference the reference depends on where we stand. Suppose you are in the home directory, and there is a directory called "unixcourse". Then it is possible to write `ls unixcourse`. But if you stand in the sister directory `Documents`, it is not possible, then you must write `ls ../unixcourse` to see the content. Relative reference is thus relative to where in the system you are when you write the command. 

When you use absolute reference it plays no role where you stand, because the absolute reference shows you where the file or directory is located by referring to the root directory, which is called **/**. If your user name is trond, typing `ls /Users/trond/unixcourses/` will work, no matter what directory you are in. The reference to the directory unixcourse is no longer relative, but absolute, it is given in relation to the root directory.

Summary:
- Relative reference, depending on how you are in the system
_ Absolute reference refers via the root directory


# View the content of files


Go to the directory "unixcourse", that you have just created. If you do not know where you are, you may first write the command `cd`, and thereafter `cd unixcourse`, You can create a few files. Later we will create files with a text editor, now we make them in a slightly more convenient way, with the command **cat**. Write `cat > n-list`. The response is not the usual prompt, but a blank line. Write a word, e.g. Jane, press ENTER. Write another name, e.g. John, and press ENTER. Write some more namnes, e.g. Peter, Anne, Mark, Lena, with ENTER after each name. Finally end by the command Ctrl-d (hold down the Ctrl key and press the D key). Now you should get back the prompt. The symbol ">" means "send the output of the previous command to the file following the ">" symbol. This command thus creates the file "n-list".

If you then type `ls`, you see that you have a file, namely "n-list." If you wonder what is in the file you may write `cat n-list`. The **cat** command will then present the whole content of the file, and print it on the screen.

If the file had been very long, you would have preferred having it one screenful at a time. In order to get that, you may write `less n-list`. For a file stretching over several screenlengths, you may read forward by pressing the ENTER or SPACE key. When you come to the end of the file, it will say END in inverse video. In order to leave the less command and get back to the command line, press the Q key.

Summary:

Commands: 
- `cat`, `cat > filename`, `less`
- Get out of the `less` program and return to the command line: type `q`


# Commands to manipulate the contents of files

**sort**


The contents of the file "n-list" in the previous section may be used as an example in order to learn some very important commands. We would like to sort the lines of a file. Write `sort n-list` and you get the names in the file in the alphabetical order. An easier way would be to write `sort n` and then press **Tab**. If "n-list" is the only file in the directory that has n as its first letter, Unix will fill out the rest for you. We may then modify this command with flags (our "adverbs"). Flags are written with an initial hyphen (-) first, and placed between the command word and argument(s). Instead of writing `sort n-list` you may write `sort -r n-list`. 


The flag **-r** means "reversed", and the file is thus sorted in reverse order.

Summary:
- Flags, the flag -r
- Command: sort


**grep**


Another central command is **grep**. It stands for "global regular expression print", and pulls out all the lines that are of the type you have specified. Write `grep J n-list` and you get Jane and John as response. Write `grep a n-list` and you get Jane and Lena (but not Anne!) as response.


To search for more advanced expressions you use single or double quotation marks. The command `grep mii filename` in a Sami text finds both *mii* and *huksemiid*. To search only for *mii* at the beginning of words you may write `grep ' mii' filename`. To search for the word *mii* you may write `grep -w mii filename`


**rev**


The command `rev` reverses lines. Write `rev n-list`, and see what happens.

Did you see that? All names are now written backwards. That in itself is not so exciting, perhaps, but when combined with other commands it will be very useful to us.

Summary:
* Command: `rev`, reverse line ('father' becomes 'rehtaf')


# Combining commands with |


The character **|** or pipe, is one of the main symbols in unix. On the Macintosh, the pipe is found on alt-7, on other computers, the pipe symbol can be found on the key to the left of the number 1 on the top left of the keyboard. With **|** we combine multiple commands, or rather: we send the output from the first command as input to the next. We will now combine the commands **rev** and **sort**, and we do it in the following way: `rev n-list | sort | rev`. What has happened? We have reversed the names in our file, sorted the list, and reversed back to normal left-to-right-text. The result is a reverse sorted list of the names we started out with.


Summary:
The pipe symbol **|** *pipes* the output of one command as input to the next.


**wc**

Let us now expand our file with some other names. Write `cat >> n-list` and press ENTER. You get a blank line. Write the names Peter, Ben, Anne and Anne, all with ENTER between them. Then press **Ctrl-d**. The difference between the symbols **>** and **>>** is that in the first case you create a new file (or you overwrite an old), whereas in the second case, you add new content to an already existing file. This is a VERY IMPORTANT difference. If you have worked a long time with a file and written hundreds of lines of text, and just want to add a word or two at the end, use >>. However, if you forget  and write > instead, all those hundreds of lines disappeared, and all that is returned is the two poor words you would like to add. Unix knows no mercy. You will not get those hundreds of lines back. So be careful!

Now let's say that all goes well and you have a file that contains a total of nine names. How do you know that there are 9? The wc command (word count). Write wc n-list, and you see how many lines, words and characters the file contains. If you only want to see one of the three answers, you may do it with the flag -l, -w and -c, in the following way: wc -l. The flags may also be combined: wc -lw tells how many lines and words the file contains.

Summary:

* Command: wc (tells how many lines, words and characters there are in a file)
* Flag: the wc command has the flags -l, -w and -c (lines, words and characters)
* The symbol >> adds content to the end of the file you are sending it to

**uniq**


In the n-list several of the lines are now identical. Write `sort n-list`, and you'll see it. If you are interested only in how many different lines you have, and not in the repetitions, you may print `sort n-list | uniq`. If you are interested in how many there are of each name, you may add the flag **-c**, which stands for "count" to the uniq command: `sort n-list | uniq -c`. A more advanced command is the following, which sorts according to number of items:

```
sort n-list | uniq -c | sort -n
```

The command gets even better with the option **-nr**:

```
sort n-list | uniq -c | sort -nr
```

With this command we get a list sorted by frequency. The most common words come first, and the unique ones in the end. Words with the same frequency are sorted alphabetically.


**tr**

The command **tr** changes a character to another. This command differs from other commands by not taking filenames as argument. To change all letters "e" to "x" in the file n-list, enter the command

```
cat n-list | tr 'e' 'x' | less
```

(Remember that you leave the program less by pressing q). This command gives you the result on the screen. If you want to save the results to a new file type instead you may type 

```
cat n-list | tr 'e' 'x' > newfile
```

The new file is then saved as "newfile". Note that you can not use the same name on source file and destination file.

A very useful tr command is the one that turns a text into a list with one word per line. In order to achieve that we will replace all spaces with the newline character. The newline character we write as 

```
'\n'
``` 

Since what we have is a list, we start by turning it into a text:

```
cat n-list | tr '\n' ' ' > n-text
```

If you then type `cat n-text`, you wil see that the names list  are now on the same line. You may return to the list format by turning the command, and write:

```
cat n-text | tr ' ' '\n'
```


# Creative laziness: reusing the same command


Very soon the commands become long. Instead of typing the same command again and again, you may use the arrow keys. The key **Up Arrow** gives you the previous command. To execute it you must obviously press the ENTER key). **Up Arrow** once again gives you the command before the previous one.

If you then write history, you get a list of all the commands you have done. Each command has a number. If you want to do for example the command number 55 again, write !55, and the same command is executed again.

Long commands may also be edit. Let us say that you have written the command

```
grep e n-list | rev | sort | rev 
```

The result was a reverse sorted list of all names that contains an e. You may now press the Up Arrow, get the command again, and press the left arrow key until you reach the e. You then delete it, and write a instead, and thereafter you press ENTER. The result is a reverse sorted glossary of all the names containing the vowel a.

If the command is long it may take some time to get to the beginning. A faster way of getting there is pressing **ctrl-a**. To get back to the end you press **ctrl-e**.

Summary:

history shows previous commands
ctrl-a, ctrl-e
Exclamation mark plus rule number gives the same command again.


# Copy, move and rename files


Files are copied with the command **cp** (for "copy"). To copy the file n-list to a new file, which you may call the n-list2, type `cp n-list n-list2`. The order is thus "cp from to". To give a file a new name, use the command **mv** (move). The syntax is the same: `mv old name new name`. The name mv really means move. Try first making a new directory: 

```
mkdir oldfiles
```

Then the command:
```
mv n-list2 oldfiles
```

will not turn n-list2 into a file called oldfiles. Instead it will move the file n-list2 into the directory oldfiles.

| WARNING: If you rename the file to a filename already in use, the old file will be deleted. Unix does not have any regret button, so the content of the old file will be lost.


# Regular expressions


We use regular expressions to search for classes of characters. As a test document you may take the file *eng_vaalit2012.txt* in the catalogue [https://gtsvn.uit.no/langtech/trunk/courses/unix_korpus/]. Download the file. If you use a Mac and has set up the folder as above, and you stand in the unixcourse folder, you may copy the file to the folder unixcourse with the command

```
cp ../Downloads/eng_vaalit2012.txt .
```

In the command, the final dot means: "Copy the file to where I am now". Note the space between the filename and the dot.

To wildernesses string 'relay' in a text called list we write grep relay list. As an example we take these two sentences (if you practice you can copy them to a separate document, which you can call td list) .:

```
cat eng_vaalit2012.txt | tr ' ' '\n' | grep '^d'
cat eng_vaalit2012.txt | tr ' ' '\n' | grep 'd$'
cat eng_vaalit2012.txt | tr ' ' '\n' | sort | uniq -c | sort -nr | head
```

Here we also introduced a new command, head. The command head prints the first 10 lines of the output.

By the means of regular expressions we may get different sets of words from the text. The three following commands give all words ending in -ate, ending in the string ` a any character e`, in the string ` a any number of characters e`. The final command gives all words ending in d preceeded by a character other than e.

```
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep 'ate$'
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep 'a.e$'
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep 'a.*e$'
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep '[^e]d$'
```

It is also possible to search for classes of sounds. Thus [[aeiouy] is the class of all vowels in English. This search returns all words containing the consonant c plus a vowel:

```
grep 'c[aeiouy]' eng_vaalit2012.txt
```

All regular expressions can be combined. How do we present all cases of o plus any character plus a vowel:

```
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep 'o.*[aeiouy]'
```

The brackets may also be used to search for both capital and small letters:

```
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep '^in'
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|grep '^[Ii]n'
```

If we want to search for several strings, we need an extended grep command, egrep.
Here comes all words ending in -ing or -ed.

```
cat vaalit2012.txt | tr ' ' '\n' | sort|uniq|egrep '(ing|ed)$'
```

More information on regular expressions is found on Wikipedia:
* [http://en.wikipedia.org/wiki/Regular_expression]
* [http://ru.wikipedia.org/wiki/Регулярные_выражения]


# Unix's built-in help system: man, apropos and info


Unix has a very good help system built-in. If you know the name of the command and want more information, you may write **man** and the command name (e.g. `man grep`). 

There are two problems with this information: You must know the name of the command before you can ask, and the text is often a bit cryptic. The man pages are most suited to find out what flags to use with a command, and how they work.

In order to get a more educational text, you may write **info** instead of man. If also that is too cryptic, you may search on the net. In order to get an explanation on the command cat you may search: How to use the cat command.

If you are not sure of the command you are looking for, you may write `apropos command name` (for the command name you can enter a keyword you are looking information about). Apropos will then give you a list of command names that might have something to do with it (and maybe not!). Usually the 'apropos' command is not that useful.


List of unix commands:

* [http://en.wikipedia.org/wiki/List_of_Unix_utilities]
* [http://ru.wikipedia.org/wiki/Программы_UNIX-подобных_операционных_систем]