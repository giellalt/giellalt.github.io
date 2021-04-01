
AndroidKeyboards
============

# Local setup and build instructions


1. Follow the instructions on
  [github](https://github.com/divvun/kbdgen/blob/master/docs/targets/android.md).
1. Install [Fastlane](http://fastlane.tools).


In addition to that, there are a couple of more things to be aware of:

* you need access to the signing certificate - ask Børre or Sjur
* you need to check out our private git repository, again ask Børre or Sjur for
  details. The location of your local clone should be stored in the environment
  variable XXX
* when building for release, you need to set to env. variables each containing
  a password. You can do something like this:


```
$ export STORE_PW=password
$ export KEY_PW=password
```


Remember to close the terminal window when done, so that the passwords are not
kept around in plain text!


The passwords are used to unlock the signing certificate.


**NB!** To ensure that the version number gets correctly updated in the apk file
remove the android/deps/ dir before building. This needs to be automated in the
future.


# Google Play instructions


The first time you build a new keyboard app, there is a certain amount of
manual work in Google Play. After this, updates to most things can be done using
the command line via fastlane. (**NB!** This is not yet implemented!)


## First time setup


1. You need to give the app a name and an ID
1. You need to provide a minimum of screen shots and descriptions for the
  Google Play store entry (what users are going to see when they open the Play
  page for the app)
1. You also need to provide an icon, normally the same as the app icon


Both screen shots and icon should be in exact the correct size/resolution.
Please see the [icon page](icons/Icons.html) for a command to resize graphic
files.


Google will guide you through all the necessary steps, just follow the on-screen
instructions.
