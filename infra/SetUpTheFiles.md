# Fetch (check out) and set up the linguistic files

The files containing the linguistic source code (as well as other repositories) may be fetched from [their git repository](http://github.com/giellalt/).

After having gone through **1**, scroll down to the chapter **[2. Set up the files](#2-set-up-the-files)** below to set up the files you just checked out.

## 1. Checkout instructions

We first show how to get (= check out) the files, thereafter how to upheld the file.

### Check out the files

Download the files as follows (this is called _clone_ in git:

1. Make a folder for containing your language models, you may call it _git_ or _lang_ or _langtech_ or whatever.
1. Go into that folder, and `git clone` the language(s) you want (replace XXX with your language code)
   - `git clone git@github.com:giellalt/lang-XXX.git`
   - Note: If you fetch the name from the repository's "green button" in GitHub, do **not** use the _HTTPS_ download option, but go for **SSH**.
1. After this, `cd` into `lang-XXX`, and run:
   - `./autogen.sh`
   - This will automatically clone the folders `giella-shared` and `giella-core` parallel to `lang-XXX`. You need to `cd` into each of these directories, and run `./autogen.sh && ./configure && make` there.

When done, `cd` back to `lang-XXX`, and run:

```sh
./configure
make
```

This should compile the language models. If not, _read the error message_.

To make sure that your code is up-to-date, stand somewhere in lang-XXX, and run:

```sh
git pull
```

This will make sure all code is up-to-date, by getting all the latest changes from other developers, and merging them with the source code on your machine.

When committing and pushing, your username and password is your GitHub username and password.

### Graphical client or command line

At UiT, we use (and have a university licence for) the `git` GUI client [Tower](https://www.git-tower.com/), but any graphical `git` client will do.

### Running commands for multiple `git` catalogues on the command line

If you check out many repositories and want to update (and even check in) files in all of them at the same time by using the command line, you should look into the program **[gut](SetUpGut.md)** that we made for this purpose. Most users will not need this program.

If the **gut** command stumbles and demands `enter passphrase for key ... .ssh/id_rsa`, then adding this to your `.profile` should help:

```sh
if [ ! -S ~/.ssh/ssh_auth_sock ]; then
  eval `ssh-agent`
  ln -sf "$SSH_AUTH_SOCK" ~/.ssh/ssh_auth_sock
fi
export SSH_AUTH_SOCK=~/.ssh/ssh_auth_sock
ssh-add -l > /dev/null || ssh-add
```

### Troubleshooting

#### Filenames with accented characters are listed as unknown by `git` (macOS only)

See [this discussion on StackOverflow](https://stackoverflow.com/questions/5581857/git-and-the-umlaut-problem-on-mac-os-x/15553796#15553796) for details, but the core of the issue is that filenames with accented or non-ASCII letters show up as unreadable strings in git, and that they are not recognised as being part of the `git` tree when the files have been added on a Windows or Linux machine.

The solution is:

```sh
git config --global core.precomposeunicode false
git config --global core.quotepath false
```

In the accepted StackOverflow solution (cf link above), the value of `core.precomposeunicode` is `true`, but changes in how macOS handles filename encoding have largely solved this problem. Try both `true` and `false` to see what works for you, and remember to delete the repo and re-clone between each change. You of course need a repo with such filenames initially added on Windows or Linux to test whether the configuration works as intended.

## 2. Working with the files

### Check-in rights

In GitHub, you need to have write access to the git repository (one for each language) you want to push changes for. If you do not, go to the GitHub page for your language ([the list is here](../LanguageModels.md)). Look for contact information, and ask the relevant persons for write access.

### Editing your settings file

In your home catalogue you have a bash settings file `.profile` (= standard for users of the giella infrastructure) or perhaps `.bashrc` for some users. Edit this file as follows:

Open it (with the editor `see`/[SubEthaEdit](https://subethaedit.net) (macOS only) or your favourite editor):

`see ~/.profile`

Then add the following lines to the file (assuming here that you called the folder where you put lang-XXX `giellalt`, change it into whatever you called it:

```sh
export GTLANGS="$HOME/giellalt"
export GIELLA_CORE=$HOME/giellalt/giella-core
test -r "$GIELLA_CORE"/devtools/init.d/init.sh && . "$GIELLA_CORE"/devtools/init.d/init.sh
```

This should give you access to aliases such as `hufao`, `hdfao`, etc. (and similarly when your own language is something else than `fao`). Remember to open a new terminal window (or write `. .profile`) before you test.

You may also make an alias for getting directly to the catalogue you work in by putting this alias into `.profile` (assuming you named your folder `lang-fao` when your language code is `fao`)::

```sh
alias fao="pushd ~/giellalt/lang-fao"
```

Thereafter, typing `fao` will bring you directly to the relevant folder.

### Further questions and help

The GiellaLT community can be found on Zulip. Please post any questions and need for help you might have in the Zulip stream svn-git, found here:

<https://giella.zulipchat.com/#narrow/stream/238905-svn-git>

For those not yet part of the GiellaLT Zulip community, you can join by clicking this link:

<https://giella.zulipchat.com/>

and log in with your GitHub username and password. An account will be created automatically for you.

In the GiellaLT Zulip community, there is a stream for each language (named by the ISO code), suitable for discussing everything relating to that language. In those streams, also all commits / pushes to GitHub will be automatically posted, to make it easy to follow the development of each language. When committing/pushing, that also triggers an automatic build, and the output of that build is also posted in the stream. If the build failed, one can easily click a link to see why.
