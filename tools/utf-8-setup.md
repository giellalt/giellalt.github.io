This document is a plan for Utf-8 conversion. The document is derived
from an existing newsgroup discussion about Utf-8 conversion and it
expands and continues the conversion plan described in the newsgroup.

Tools
=====

This section shows what tools are affected by the conversion, and what
actions should be done to address the conversion task.

bash
----

To enable input and output processing of 8-bit bytes, put the following
lines into the file '.inputrc' (without quotes, in your home directory)
- without these instructions, bash will only operate in 7- bits, which
is not sufficient for UTF-8 (it's an 8-bit encoding!):

    # Enable 8bit input
    set meta-flag on
    set input-meta on

    # Turns off 8th bit stripping
    set convert-meta off

    # Keep the 8th bit for display
    set output-meta on

    # Will display all alternatives for completion after one tab keypress
    set show-all-if-ambiguous On

\[the last command has nothing to do with 8-bit processing, but is a
great timesaver compared to the default behaviour\]

In .bashrc add:

    export LANG=no_NO.utf8
    export LOCALE=UTF-8
    export LESSCHARSET='utf-8'
            

, and comment out other LANG, LOCALE and LESSCHARSET variables, e.g:

    #export LANG=no_NO
    #export LOCALE=latin-1
    #export LESSCHARSET=""
            

Terminal
--------

Enable UTF-8 display and input in Terminal.app

Version: 1.4.3 (v100) ('Om Terminal'/'About Terminal')

Now that the shell can handle 8-bit io, we need to define how we want
the terminal application to interpret those 8 bits. The following setup
is made for Appl's Terminal.app (in /Applications/Utilities/), similar
steps will need to be made for other terminal applications.

-   type Cmnd-I
-   in the pane 'Monitor' or '&lt;unknown monitor&gt;', select UTF-8 as
    the character encoding (towards the bottom); then: click the button
    at the bottom named 'Bruk innstillinger som standard'/'Use
    preferences as default'
-   in the pane 'Emulation' ('Emulering'), uncheck 'Escape-koder for
    ikke-ASCII-tegn'; then: click the button at the bottom named 'Bruk
    innstillinger som standard'/'Use preferences as default' again
-   to be able to input accented characters, or characters requiring the
    option key, make sure that the preference 'Bruk tilvalgstast som
    metatast'/'Use Option key as Meta key' is \_not\_ checked in the
    page 'Tastatur'/'Keyboard'

Now the basic setup is done, both the shell and the terminal are ready
for Unicode! Try cd or less a directory/file containing non-ASCII
characters - the filename should display correctly, and you should be
able to type the filename without problems. If you don't have such a
file or directory, you can make one in the Finder - all file and
directory names are stored as UTF-8 in the underlying file system (which
you see on the command line).

ls
--

To make ls display UTF-8, use the option -w when invoking ls. This
option makes ls send raw character codes through to the terminal,
instead of trying to interpret the byte sequences itself. Thus, the
terminal will receive the UTF-8 byte sequence, and display correctly. To
make this a little more convenient for yourself, put the following into
your \~/.profile or \~/.bashrc file:

    # The 'ls' family (this assumes you use the GNU ls)
    # NOT: --color is not recognised by the Apple ls, but...
    # ... it is sensitive to the CLICOLOR environment variable; thus
    # the folowing will turn on colour display in ls:
    export CLICOLOR=true
    # -w lets non-ASCII characters trhough as raw data; combine with UTF-8 as terminal
    #    character set to get full Unicode support with ls
    alias ls='ls -w'
    alias ll='ls -lw'         # standard vertical listing
    alias la='ls -Alw'        # show hidden files
    alias ls='ls -hFw'        # add colors for filetype recognition
    alias lx='ls -lXBw'       # sort by extension
    alias lk='ls -lSrw'       # sort by size
    alias lc='ls -lcrw'       # sort by change time
    alias lu='ls -lurw'       # sort by access time
    alias lr='ls -lRw'        # recursive ls
    alias lt='ls -ltrw'       # sort by date
    alias lm='ls -alw | less' # pipe through 'more'

less
----

To make less display UTF-8 correctly, add the following to your \~/
.profile:

    export LESSCHARSET='utf-8'

lynx
----

To make sure lynx will display UTF-8 encoded pages correctly, type the
following:

    lynx
    O (as in Options)

and move down to Display character set using the arrow down key; press
Return and select 'UNICODE (UTF-8)' (towards the bottom); press Return
again, and use the up arrow key to select 'Accept Changes' and press
Return.

emacs
-----

To enable UTF-8 display and editing, create or edit the file \~/ .emacs,
and put the following into it:

    ; Make Emacs UTF-8 compatible for both display and editing:
    (prefer-coding-system 'utf-8)
    (set-terminal-coding-system 'utf-8)
    (set-keyboard-coding-system 'utf-8)

    ;Remap delete keys
    (global-set-key [delete] 'delete-backward-char)
    (global-set-key [kp-delete] 'delete-backward-char)
    (global-set-key "\C-d" 'delete-backward-char)

    ; Turn on syntax colouring in all modes supporting it:
    (global-font-lock-mode t)

\[the last one is not related to UTF-8, but still quite useful\]

perl
----

Add UTF-8 support:
`use encoding 'utf-8';             use open ':utf8';                     `

Nothing to be done except checking the installed version, perl 5.8.x
uses UTF-8/Unicode as the default encoding. I have used it quite a bit,
and have not had any problems.

perl versions prior to 5.8.x had only partial support for Unicode, and
should be avoided.

The perl version included in MacOS X 10.3.x, is perl 5.8.1.

grep
----

Writing and using a new grep expression containing non-ASCII characters
(e.g. č or ŧ) works like a charm - I get all and only the correct lines.
When editing previous grep expressions (from the history), things go
hairy. It seems to be a problem with the command line editor of the
shell.

CVS
---

In CVS log messages we use external editor (such as emacs) and this
editor must be utf-8 compatible.

When browsing old log messages (pre UTF-8 messages), there might be
display problems for the non-ASCII characters in those messages.

Compiling & Working
===================

This section documents how to tackle the conversion in the compile &
work -process.

Makefiles
---------

In makefiles define static variables in the beginning of the file and
use these variables where they apply.

E.g:  
XFST = xfst -utf8

xfst
----

Invoke xfst tool using the UTF-8 switch:  
xfst -utf8

lexc
----

Invoke lexc tool using the UTF-8 switch:  
lexc -utf8

twolc
-----

Invoke twolc tool using the UTF-8 switch:  
twolc -utf8

preprocess
----------

Preprocessor is a Perl -tool, so only Perl has to be UTF-8 compatible.

lookup
------

Invoke lookup tool using the UTF-8 switch:  
lookup -utf8

vislcg
------

Vislcg probably must be compiled with gcc-3.4+

Source files
============

iconv
-----

From iconv manual pages:

    iconv - character set conversion
            
    iconv [-c] [-s] [-f encoding] [-t encoding] [inputfile ...]
    iconv -l

The iconv program converts text from one encoding to another encoding.
More precisely, it converts from the encoding given for the -f option to
the encoding given for the -t option. Either of these encodings defaults
to the encoding of the current locale. All the inputfiles are read and
converted in turn; if no inputfile is given, the standard input is used.
The converted text is printed to standard output.

The iconv -l command lists the names of the supported encodings, in a
system dependent format. For the libiconv implementation, the names are
printed in upper case, separated by whitespace, and alias names of an
encoding are listed on the same line as the encoding itself.

Remember to convert the CVS log files as well.

Own conversion scripts
----------------------

Make and use our own conversion scripts.
