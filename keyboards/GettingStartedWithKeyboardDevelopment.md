Getting Started With Keyboard Development
=========

Below is a short description of what you need to install to be able to work with
the keyboard build system.

# Preparations

## General

Install [kbdgen](https://github.com/divvun/kbdgen) in your `$PATH`. Make sure you have
the latest version; current version as of this writing is:

```sh
$ kbdgen --version
kbdgen 3.0.0-beta.4
```

That's it!

## Getting the source code

All keyboard code is in [github.com/giellalt](https://github.com/giellalt), and each
language has its own repository. Find the language you want to work with, and check it
out using either git or svn.

# Introduction

There is an overview of the basic concepts on
[this page](https://divvun.github.io/kbdgen/user/kbdgen.html).

# Desktop keyboards

It is pretty simple:
* edit `xxx.kbdgen/layouts/xxx.yaml `
* run `./autogen.sh && ./configure && make` (first time, later on just `make`)

where `xxx` is the language code of the language you want. `xxx` can also be
a longer name - it is possible to have multiple keyboards for the same project,
such as one for each country the language of the keyboard is spoken in. `xxx` is
always and only a valid BCP-47 locale code.

The `make` command produces several output files:

* `build/mac/*` - installation package (and source bundle) for macOS
* `build/win/*` - files for [MS Keyboard Layout
  Creator (KLC)](https://www.microsoft.com/en-us/download/details.aspx?id=22339),
  and installer files. __REQUIRES `kbdgen` to be run on Windows, with KLC installed!__
* `build/chrome/*` - installation package (and source bundle) for ChromeOS

You can also build for only one platform using one of `make [mac|win|chrome]`.

The `make` file can also be used to output the following (__NB__ not working ATM):

* `make svg`: `docs/*.svg` - graphical overview of the layout
* `make x11` & `make m17n`:`build/linux/*` - linux files (needs to be merged with the rest of
  the keyboard subsystem, should be done once when the keyboard design is settled

Building locally is mostly useful for debugging & development, for distributable
builds one should rely on CI/CD & Divvun Manager. Once your commits are pushed to
GitHub, the Windows and macOS builds will run, be signed and after a short while be
available for installation/update & testing in the _nightly_ channel in Divvun
Manager.

Things to consider/change:

* name and description at least in English and the target language, in `*.kbdgen/project.yaml`
* also change `author`, `e-mail`, `copyright` etc to your likings in `*.kbdgen/project.yaml`
* update the keyboard icon file for macOS (`xxx.kbdgen/resources/macos/icon.xxx.png`)
  to something appropriate for your target language (any `png` file will do,
  but consider the size and readability of the icon)
* in the `*.kbdgen/layouts/*.yaml` file(s):
    * add display names in the relevant languages; the target locale __must__ be specified
    * for languages with only an `ISO-639-3` code, consider adding the nearest
    `ISO-639-2` or `ISO-639-1` code under `displayNames:` (even if it is a macro-language code),
    this will help in getting the keyboard(s) better integrated into the host OS
    as many of the OS's don't know a thing about `ISO-639-3` languages. If not, the end
    users will most likely only see the language code instead of a relevant
    language name.

## Technical documentation

The core component/tool for building keyboards is `kbdgen`, a tool written in Rust
that converts the yaml keyboard descriptors into actual keyboard files. The
[Github repo](https://github.com/divvun/kbdgen) contains the source code, and
[reference technical documentation](https://divvun.github.io/kbdgen/) is also
available.

Further notes:

### Windows

You need to add a real `uuid` for each language. Run the command:

```sh
uuidgen
```

and paste the generated `uuid` in the `*.kbdgen/targets/windows.yaml` file:

```yaml
uuid: 12345678-9ABC-DEF0-1234-567890ABCDEF
```

This should already be taken hand of for all existing keyboards, but must be
remembered for new keyboards.

For most languages one also has to add a locale
specification for Windows containing the Script system being used. That is, in
each layout file (`*.kbdgen/layouts/*.yaml`), you also need to add something
like the following:

```yaml
windows:
  config:
    locale: rus-Cyrl-NO
    languageName: Cyrillic Norway
```

If not added, the keyboard won't integrate properly
with Windows.

## Compatibility notes

See the note above on the use of language codes for best compatibility with
Windows and macOS.

### Windows

The generated keyboard (using the linked MS Keyboard Layout Creator (see above)
can only be guaranteed to work with Windows 10 and newer. This is especially true
for languages with language codes only in `ISO 639-3`.

### macOS

The keyboard package is compatible with most versions of macOS, going back all
the way to macOS version 10.2 (Jaguar). Divvun Manager (our main distribution
channel) is only compatible with the officially supported versions of macOS
(usually the newest one + the two preceding major releases).

### Linux

The generated code is directly compatible with existing code, but must be merged
with it upstreanms. One should develop the keyboard using the other OS's, and only when one
is done with the keyboard layout should one submit the code for inclusion in the
Linux keyboard driver code.

### Chrome

We have a separate ChromeOS keyboard app, in which the keyboard needs to be added.
Please file a GitHub issue requesting your keyboard to be added. The app is
compatible with all supported versions of ChromeOS.

# Mobile keyboard apps

The mobile keyboards have more dependencies, documentation is linked below. They
also differ from desktop keyboards in that the keyboards are full-blown apps,
and you need all the machinery to build and distribute apps through the relevant
stores.

It is possible to build a mobile keyboard app yourself, but that is a huge and
frustratingly complex undertaking, so please don't if you care about your own
sanity. We have figured it all out, and it is working flawlessly in our CI/CD
system.

To get your keyboard into the mobile apps, just ask us to add it using a GitHub
issue.

Please note that we first publish a keyboard using the __Divvun Dev Keyboards__ app,
for public testing and refinements. When everyone is satisfied we move the keyboard
to the __Divvun Keyboards__ app for regular use.

# Adding a keyboard for a new language

See the instructions [here](), just replace `lang` with `keyboard`.
