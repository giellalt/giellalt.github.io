# Migrating to `git`

This document is meant for people having checked out language technology files from Giellatekno and Divvun in Tromsø, and want to migrate them from svn to the new repository at github. The migration happened **13.5.2020**. 

If you just need help on checking out files, read [the file setup document](SetUpTheFiles.html) instead.

## Moving Tromsø files: How to check out & continue work

We recommend you continue to work with the files using the usual **svn commands**. If you are more familiar with git, scroll down to the section **Git users** below. 

###  SVN users

#### Check out the files

The new check-out URL is specific to each language, and follows this pattern:

1.  Make sure you have deleted the folders giella-core and giella-shared in your old svn repository (you see which one by typing `echo $GTHOME`
1.  Thereafter, make a folder for containing your language models, you may call it **git** or **lang** or **langtech** or whatever.
1.  Go into that folder, and check out the language you want (Replace XXX with the 3-letter ISO code of your language):
1. `svn co https://github.com/giellalt/lang-XXX.git/trunk lang-XXX`
1.  After you have checked out, cd into lang-XXX, and run: 

`./autogen.sh`

This will automatically check out giella-shared and giella-core parallel to lang-XXX.

Go to each of these directories and run the following setup commands:

```sh
cd ../giella-core
./autogen.sh
./configure
make
```

Then do the same for `giella-shared`. When done, cd back to lang-XXX, and run:

```sh
./autogen.sh
./configure
make
```

Then continue as you did before the move to git.

To make sure that your code is up-to-date, cd to the parent directory of lang-XXX, and run:

```sh
svn up *
```

This will make sure all code is up-to-date.


When committing, **your username and password is your GitHub username and password**.

### Graphical client or command line

You may continue with your old svn working habits, whenever you use the command line, Cornerstone, or some other program.

### Troubleshooting

If you by accident checked out the lang-XXX **before** you deleted the old $GTHOME/giella-* catalogues, the system will be guided to the wrong files (which will not be updated). In that case, the system has created symlinks of this type (standing in `lang-XXX` you see it by typing `ls -l ../`:

```
giella-core --> /Path/to/your/GTHOME/giella-core
giella-shared --> /Path/to/your/GTHOME/giella-shared
```

In that case, delete these symlinks, delete the giella- folders in $GTHOME, and check them out manually next to the lang-XXX folder (i.e. in the `lang` folder:

```sh
svn co https://github.com/giellalt/giella-core.git/trunk giella-core
svn co https://github.com/giellalt/giella-shared.git/trunk giella-shared
```

## Git users

### Check out the files

If you are using git, I assume you know what you are doing, but just to repeat, clone as follows:

1. Make sure you have deleted the folders giella-core and giella-shared in your old svn repository (you see which one by typing `echo $GTHOME`
1. Thereafter, make a folder for containing your language models, you may call it `lang` or `langtech` or `git` or whatever.
1. Go into that folder, and git clone the language(s) you want (replace XXX with your language code)
   `git clone git@github.com:giellalt/lang-XXX.git`
1. After you have checked out, cd into lang-XXX, and run: 
   `./autogen.sh`
   This will automatically clone giella-shared and giella-core parallel to lang-XXX. You need to cd into each of these directories, and run `./autogen.sh && ./configure && sudo make install` there. 

When done, cd back to lang-XXX, and run:

```sh
./configure ...
```

Then continue as normal.

To make sure that your code is up-to-date, cd to the parent directory of lang-XXX, and run:

```sh
git pull
```

This will make sure all code is up-to-date.

When committing and pushing, your username and password is your GitHub username and password.

### Graphical client or command line

Any graphical git glient will do.

If you want to use the command line, you should look into **gut** (documentation forthcoming) as well.

- Gut should be installed as follows: First you install *rust*, then *gut*.
- Rust can be installed following [this instruction](https://www.rust-lang.org/learn/get-started).
  If you have an old dysfunctional rust, as happened to this writer, do: `sudo port uninstall rust`,
  then go on and install rust as shown in the link above.
- Then open a new shell, or do `. .profile` to tell your computer that you have rust.
- Then install gut from [github.com/divvun/gut](https://github.com/divvun/gut).
  In a suitable folder, e.g. the `lang` folder, do (and note the final dot at the last command):

```sh
git clone https://github.com/divvun/gut.git
cd gut
cargo install --path .
```

Thereafter you need to set up gut:

```sh
gut init
# MEIR KJEM HER
```

In order to use *gut*, have a lok at [the gut usage page](https://github.com/divvun/gut/blob/main/USAGE.md).

### Troubleshooting

The same problem as reported for svn could turn up here as well. From the parent catalogue of `lang-XXX`, do:

```sh
git clone git@github.com:giellalt/giella-shared.git
git clone git@github.com:giellalt/giella-core.git
```

You then need to `cd` into each of these directories, and run `./autogen.sh && ./configure`. After that run `sudo make install` in each folder.

# Documentation for both git and svn users

## Check-in rights

In git, you need to be *menber of the team* of each git repository 
(each language). If you are not, go to the page, e.g. for fao:

[https://github.com/giellalt/lang-fao]

## Editing you settings file

In your home catalogue you have a bash settings file `.profile` (= standard for users of the giella infrastructure) or perhaps .bashrc for some users. Edit this file as follows:

Open it (with see or your favourite editor):
`see ~/.profile`

Then add the following lines to the file (assuming here that you called the folder where you put lang-XXX `lang`, change it into whatever you called it:

```sh
export GTLANGS="$HOME/lang"
export GTCORE=$HOME/lang/giella-core
test -r "$GTCORE"/devtools/init.d/init.sh && . "$GTCORE"/devtools/init.d/init.sh
```

This should give you access to aliases such as *ufao, dfao*, etc. (and similarly when your own language is something else than *fao*). Remember to open a new terminal window (or wrote `. .profile` before you test).

You may also make an alias for getting directly to the catalogue you work in by putting this alias into `.profile` (assuming you named your folder **lang** and your language is **fao**)::

```sh
alias fao="pushd ~/lang/lang-fao"
```

Thereafter, typing `fao` will bring you directly to the relevant folder.

# Further questions and help

Please post any further questions and need for help you might have in the Zulip stream svn-git, found here:

<https://giella.zulipchat.com/#narrow/stream/238905-svn-git>

For those not yet part of the GiellaLT Zulip community, you can join by clicking this link:

<https://giella.zulipchat.com/join/xgod3xxdw1pj927h64dny5ln/>

BTW, in the GiellaLT Zulip community, there is a stream for each language (named by the ISO code), suitable for discussing everything relating to that language. In those streams, also all commits / pushes to GitHub will be automatically posted, to make it easy to follow the development of each language. When committing/pushing, that also triggers an automatic build, and the output of that build is also posted in the stream. If the build failed, one can easily click a link to see why.

Thanks for your patience during the move!
