Mobile keyboard app icons
=====

Short description of how the mobile keyboard app icons were made.

# Basic info

* Font used: [Noto sans](http://www.fontsquirrel.com/fonts/noto-sans)
* [Key cap source code](http://all-free-download.com/free-vector/vector-clip-art/tango_preferences_desktop_keyboard_shortcuts_115846.html) (apparently removed, but a similar image seems to be available [here](https://www.freeimages.com/icon/tango-preferences-desktop-keyboard-shortcuts-5299692)).
  Lisence: public domain

# Original source file editing

Removed irrelevant keys using Inkscape, saved remaining key cap as pdf, imported
into OmniGraffle for further editing and adaptation.

# OmniGraffle edits
* added letters
* exported as png with high resolution

Text is 120 point, vertically centered, and then lifted using text offset Y -6%.

# Other tidbits

To convert the large-resolution png with alpha to a useful iTunes art, do as follows:

```sh
$ convert images/Sami-icon3.png -background white -alpha remove -resize 1024x1024 images/Sami-icon-1024.png
```

To create the app store / Google play icon, do as follows:

```sh
$ convert images/Sami-icon3.png -resize 512x512 images/Sami-icon-120.png
```

Adjust the size parameter as needed in each case.

__NB!__ Please note that resizing and conversion to the proper format is now done automatically
as part of the CI/CD build steps for the keyboard apps.
