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
layout, like this example from Võro:

```yaml
targets:
  win:
    locale: vro-Latn
    languageName: Võro kiil
```

This will make it possible to install spellers, and tie the speller to
the keyboard language, so that MS Office and other applications in Windows will
automatically use the correct speller when switching keyboards.

# macOS

You should consider adding a separate Cmd-key layer, to make the command key
behave identically to the majority language layout. If not, the command key will
be tied to the actual letters produced when pressing the relevant keys, which
will not always be what the users expect. Example:

* when pressing <kbd>Cmd</kbd> + <kbd>Q</kbd> when using the North Sámi keyboard from Apple,
  the output is <kbd>Cmd</kbd> + <kbd>Á</kbd>, since the letter "Á" has been placed on <kbd>Q</kbd>.
* to avoid this, one can specify a separate <kbd>Cmd</kbd> layer, where <kbd>Q</kbd> is
  actually producing the letter "Q" instead of the North Sámi "Á". When done
  like that, <kbd>Cmd</kbd>+<kbd>Q</kbd> will trigger the behavior expected by the users.
