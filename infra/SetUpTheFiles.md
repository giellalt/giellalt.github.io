# Set up the files

The files may be fetched from [their git repository](http://github.com/giellalt/). If you are familiar to git, just do as usual and skip this document.

If git is new to you, you must decide whether to handle the files using **svn commands** or **git commands**. If you are familiar with svn you may consider continuing using them. We recommend you use the git commands. If you would rather use **svn**, scroll down to the chapter **svn users**.




## git users
We show first checkout commands, thereafter show how to upheld the file.

### Check out the files

If you are using git, clone (= download) as follows:

1. Make a folder for containing your language models, you may call it *git* or *lang* or *langtech* or whatever.
1. Go into that folder, and git clone the language(s) you want (replace XXX with your language code)
   `git clone git@github.com:giellalt/lang-XXX.git`
1. After this, go into lang-XXX, and run: 
   `./autogen.sh`
   This will automatically clone the folders *giella-shared* and *giella-core* parallel to lang-XXX. You need to cd into each of these directories, and run `./autogen.sh && ./configure && sudo make install` there. 

When done, cd back to lang-XXX, and run:

```sh
./configure
make
```

This should compile the language models. If not, *read the error message*.

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

```
sh gut init
# MEIR KJEM HER
```

In order to use *gut*, have a lok at [the gut usage page](https://github.com/divvun/gut/blob/master/USAGE.md).

### Troubleshooting

(none we know of :-)



##  svn users 

(this is for users preferring to use svn commands).
 We show first checkout commands, thereafter show how to upheld the file.


### Check out the files

The new check-out URL is specific to each language, and follows this pattern:

1. Make a folder for containing your language models, you may call it **git** or **lang** or **langtech** or whatever.
1.  Go into that folder, and check out the language you want (Replace XXX with the 3-letter ISO code of your language, and replace `yourusername` with your username in git.):
1. `svn co https://github.com/giellalt/lang-XXX.git/trunk lang-XXX --username yourusername`
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

This should compile the language models. If not, *read the error message*.

To make sure that your code is up-to-date, cd to the parent directory of lang-XXX, and run:

```sh
svn up *
```

This will make sure all code is up-to-date.


When committing, **your username and password is your GitHub username and password**.

### Graphical client or command line

You may continue with your old svn working habits, whenever you use the command line, Cornerstone, or some other program.

### Troubleshooting

(none we know of :-)



# Documentation for both git and svn users

## Check-in rights

In git, you need to be *menber of the team* of each git repository 
(each language). If you are not, go to the page, e.g. for fao:

[https://github.com/giellalt/lang-fao]

Look for contact information, and ask for checkin rights.

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
