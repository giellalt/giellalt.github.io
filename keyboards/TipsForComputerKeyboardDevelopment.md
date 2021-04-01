Tips For Computer Keyboard Development
======


# General


If there are differences between the macOS and Windows versions of the keyboard layout of the majority language, you should keep those differences also in the
layout for the minority language. The idea is that we stay within the tradition
and specifications of each platform, and we try to make the differences as small
and as systematic as possible. This should make for the best user experience.


# Windows


For most of the languages in the Giella infrastructure, there is no predefined
locale within Windows. You can create one yourself to go along with the keyboard
layout. This will make it possible to install spellers, and tie the speller to
the keyboard language, so that MS Office and other applications in Windows will
automatically use the correct speller when switching keyboards.


(NB! This is still to be fully developed and tested, but initial tests are
looking promising).


(Instructions on how to build a locale: Forthcoming)


# macOS


You should consider adding a separate Cmd-key layer, to make the command key
behave identically to the majority language layout. If not, the command key will
be tied to the actual letters produced when pressing the relevant keys, which
will not always be what the users expect. Example:


* when pressing Cmd + the Q key when using the North Sámi keyboard from Apple,
  the output is Cmd + "á", since the letter "á" has been placed on the Q key.
* to avoid this, one can specify a separate Cmd key layer, where the Q key is
  actually producing the letter "q" instead of the North Sámi "á". When done
  like that, Cmd+Q will trigger the behavior expected by the users.
