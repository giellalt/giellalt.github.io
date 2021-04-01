Notes on the bash shell
=======================

Setup environment variables
---------------------------

To make the programs we use behave as we would like, we'll have to setup
the environment variables in bash. These variables has to be set up in
the files, **.bash\_profile** and **.bashrc** . **.bash\_profile** gets
read when we start Terminal.app from the dock or finder. **.bashrc** is
read whenever we start a new shell from the commandline writing `bash`,
or when we open a new Terminal.app window.

### Example .bash\_profile

    # .bash_profile

    # Get the aliases and functions
    if [ -f ~/.bashrc ]; then
        . ~/.bashrc
    fi

    # User specific environment and startup programs
    FORREST_HOME=$HOME/Documents/forrest
    PATH=$HOME/bin:$FORREST_HOME/bin:/usr/local/bin:$HOME/Documents/gt/script:$PATH
    BASH_ENV=$HOME/.bashrc

    export BASH_ENV PATH FORREST_HOME
    unset USERNAME
    export CVS_RSH=ssh

    #Locale-definisjon

    # UTF-8
    #######
    export LANG=no_NO.UTF-8
    export LOCALE=UTF-8
    export LESSCHARSET='utf-8'
        

Examples to add to the .profile file
------------------------------------

    # .profile

    # User specific aliases and functions

    # Source global definitions
    if [ -f /etc/bashrc ]; then
        . /etc/bashrc
    fi

    #alias-tillegg
    alias em="emacs -nw" # if needed
    alias l="less"
    alias ll="ls -l"
    alias la="ls -a"
    alias lt="ls -lt"
    alias lS="ls -lS"
    alias up="cvs -q up"
    alias who="who | sort"
        

Tweaking the shell
==================

    # Will display all alternatives for completion after one tab keypress
    set show-all-if-ambiguous On
          

\[the last command has nothing to do with 8-bit processing, but is a
great timesaver compared to the default behaviour\]
