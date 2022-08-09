# Fetch (check out) and set up the linguistic files

The files containing the linguistic source code (as well as other repositories) may be fetched from [their git repository](http://github.com/giellalt/). This may be done in one of two ways: 

- If you have not used svn earlier, we recommend git. Read the **[1a. Instructions for *git* users](#1a. Instructions for *git* users)**.
- If you are familiar with **svn** you may perhaps want to continuing using svn. Scroll down to the chapter **[1b. Checkout instructions for *svn* users](#1b. Checkout instructions for *svn* users)**.

After having gone through either **1a** or **1b**, scroll down to the chapter **[2. Set up the files (for both git and svn users)](#2. Set up the files (for both git and svn users))** below to set up the files you just checked out.

# 1. Checkout instructions

<i>(We first explain checkout with **git**, and then the alternative method: checkout with **svn**)</i>

## 1a. Checkout instructions for *git* users
We first show how to get (= check out) the files, thereafter how to upheld the file.

### Check out the files

Download the files as follows (this is called *clone* in git:

1. Make a folder for containing your language models, you may call it *git* or *lang* or *langtech* or whatever.
1. Go into that folder, and *git clone* the language(s) you want (replace XXX with your language code)
	- `git clone git@github.com:giellalt/lang-XXX.git` 
	- Note: If you fetch the name from the repository's "green button", do **not** use the *HTTPS* download option, but go for **SSH**. Otherwise, you will have
1. After this, go into lang-XXX, and run: 
	- `./autogen.sh`
	- This will automatically clone the folders *giella-shared* and *giella-core* parallel to lang-XXX. You need to cd into each of these directories, and run `./autogen.sh && ./configure && sudo make install` there. 

When done, cd back to lang-XXX, and run:

```
./configure
make
```

This should compile the language models. If not, *read the error message*.

To make sure that your code is up-to-date, stand somewhere in lang-XXX, and run:

```
git pull
```

This will make sure all code is up-to-date.

When committing and pushing, your username and password is your GitHub username and password.

### Graphical client or command line

At UiT, we use (and have a licence for) the client [Tower](https://www.git-tower.com/), but any graphical git client will do.

### Running commands for multiple git catalogues on the command line

If you check out many repositories and want to update (and even check in) files in all of them at the same time by using the command line, you should look into the program [**gut**](SetUpGut.md) that we made for this purpose. Most users will not need this program.

If the **gut** command stumbles and demands *enter passphrase for key ... .ssh/id_rsa*, then adding this to yor `.profile` should help:

```
if [ ! -S ~/.ssh/ssh_auth_sock ]; then
  eval `ssh-agent`
  ln -sf "$SSH_AUTH_SOCK" ~/.ssh/ssh_auth_sock
fi
export SSH_AUTH_SOCK=~/.ssh/ssh_auth_sock
ssh-add -l > /dev/null || ssh-add
```

### Troubleshooting

(none we know of :-)



##  1b. Instructions for *svn* users 

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

You may continue with your old svn working habits, whenever you use the command line, Cornerstone, or some other program for handling svn.

### Troubleshooting

(none we know of :-)



# 2. Set up the files (for both git and svn users)

## Check-in rights

In git, you need to be *menber of the team* of the git repository (each language) you want to check in files for. If you are not, go to the git page for your language ([the list is here](../LanguageModels.md)). Look for contact information, and ask the relevant persons for checkin rights.

## Editing you settings file

In your home catalogue you have a bash settings file `.profile` (= standard for users of the giella infrastructure) or perhaps `.bashrc` for some users. Edit this file as follows:

Open it (with the editor `see` or your favourite editor):

`see ~/.profile`

Then add the following lines to the file (assuming here that you called the folder where you put lang-XXX `giellalt`, change it into whatever you called it:

```sh
export GTLANGS="$HOME/giellalt"
export GIELLA_CORE=$HOME/giellalt/giella-core
test -r "$GIELLA_CORE"/devtools/init.d/init.sh && . "$GIELLA_CORE"/devtools/init.d/init.sh
```

This should give you access to aliases such as *hufao, hdfao*, etc. (and similarly when your own language is something else than *fao*). Remember to open a new terminal window (or write `. .profile` before you test).

You may also make an alias for getting directly to the catalogue you work in by putting this alias into `.profile` (assuming you named your folder **lang** and your language is **fao**)::

```sh
alias fao="pushd ~/giellalt/lang-fao"
```

Thereafter, typing `fao` will bring you directly to the relevant folder.

## Further questions and help

The GiellaLT community can be found on Zulip. Please post any questions and need for help you might have in the Zulip stream svn-git, found here:

<https://giella.zulipchat.com/#narrow/stream/238905-svn-git>

For those not yet part of the GiellaLT Zulip community, you can join by clicking this link:

<https://giella.zulipchat.com/join/xgod3xxdw1pj927h64dny5ln/>

In the GiellaLT Zulip community, there is a stream for each language (named by the ISO code), suitable for discussing everything relating to that language. In those streams, also all commits / pushes to GitHub will be automatically posted, to make it easy to follow the development of each language. When committing/pushing, that also triggers an automatic build, and the output of that build is also posted in the stream. If the build failed, one can easily click a link to see why.

