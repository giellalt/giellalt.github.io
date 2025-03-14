# What is lynx?

Lynx is a text-based browser, offering "internet with no pictures". It
can be used to read the documentation if you work on gtlab rather than
on your local machine. After we ported our documentation to xml and
forrest, it is not required in the same way as before (you may use your
favourite browser on the files on your local Mac), but it still has its
friends and admirers.

## A crash course in lynx

### Basic commands

- **Start lynx::**  
  Write _lynx filename_
- **Quit lynx::**  
  Type q
- **Follow link::**  
  Right arrow (or: Enter)
- **Go back::**  
  Left arrow
- **Move to next and previous links in the document::**  
  Down arrow, up arrow
- **See the link history:**  
  Press the Bcksp (Left Delete) key

### How to get more help

Lynx is the text-based web browser. It works just like Netscape and
other browsers, except that it has no pictures, only text. The reason
why we use it in this project is that it is convenient to use on remote
machines in cases when a graphical interface cannot be established
(which is the case for our project). Many users prefer lynx to graphical
browsers in any case.

Lynx is started by writing _lynx filename.html_ at the prompt. Lynx also
read plain textfiles, but it is made to handle html documents.

The basic help is displayed at the bottom of each lynx page. Read it,
and try out the different options. Here they are:

    ----------------------------------------------------------------
    Arrow keys: Up and Down to move.  Right to follow a link;
    Left to go back. H)elp O)ptions P)rint G)o M)ain screen
    Q)uit /=search [delete]=history list
    ----------------------------------------------------------------

The best way of getting to know lynx is thus to press the h key, so this
page will be kept short. Just some advices to get you started:

In order to be easy to use, lynx should show links as numbers. If the
links you see are not numbered (like this: \[4\]), you should change the
lynx settings. Do this:

Press the key _o_ (for "option"), go down to "keypad mode" under
"Keyboard input". Press enter, and chose "Links are numbered". Use the
arrow keys and go back up to the top of the document, tick the option
"Save options to disk", and go then to "Accept changes" and press enter.
Now, the links should be numbered, and they can be accessed by printing
the appropriate number and pressing enter.

As the basic help says, the arrow keys are the most important ones. On
some terminal connections, it may be tricky to get the arrow keys
working as they should. If you are in such a position (arrows do not
work), there are workarounds (TAB to move, enter to follow link, and
Backspace to get a list of previously visited sites). This is
cumbersome, but not impossible, I lived with my Lynx like that because I
couldn't find a guru to help me with the keyboard settings. Don't give
up like I did, try to find someone to fix the keyboard settings for you
so that the arrow keys will work. For scrolling down, press space or
PgDn, for scrolling up, press - (dash, to the right of . on Nordic
keyboards) or PgUp.

Lynx is an excellent browser, but it has one weakness: It cannot read
tables. If you need to read tables (e.g. for the documentation on the
testing interface, or on South Sami, you need [links](docu-links.html),
a browser that is very much like lynx.
