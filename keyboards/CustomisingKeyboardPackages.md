Customising Keyboard Packages
===========

Most keyboard types (ie for most OS's) can be customised in various ways, either
the installer or the actual keyboard itself. Below follows a list of relevant
customisation options pr OS. Most of these customisations are specified as file
pointers in the `project.yaml` file.


# Android


* **App icon**: specify the image file in `targets: android: icon: ` in the
  `project.yaml` file; default location is in `images/`
* **Release signing**:  set or export `KEY_PW` and `STORE_PW` to hold the
  password to the signing keystore. Ask Sjur or Børre for the password,
  AND KEEP IT SAFE! Define these env. variables manually in the terminal window
  when building for release, and close the terminal window afterwards. That way
  the password will only be stored temporarily in memory. XXX what about the
  history file? This sounds like a huge security hole :O


# iOS


* **App icon**: specify the image file in `targets: android: icon: ` in the
  `project.yaml` file; default location is in `images/`
* **About text**: specify the text file directory in `targets: ios: aboutDir: ` in
  the `project.yaml` file; default location is in `ios/About.txt`


# macOS


* **Keyboard Icon**:  same as icon location above. This is the icon seen in the
  keyboard menu in the menu bar.
* Readme
* License


# Windows


* **Readme File**: specify the text file directory in `targets: win: readmePath: `
  in the `project.yaml`, and name the file(s) `LANGUAGECODE.suffix`, where
  `LANGUAGECODE` is the ISO 639 code, and `suffix` is one of `txt` and
  `rtf`, indicating the format of the file. The fallback language is `en`
  (English). Example: `targets: win: readmePath: readmes`, and in `readmes/*`
  you have `en.txt, nb.txt` but your installer supports `en`, `nb` and
  `sv`, then if someone choses Swedish, the UI would be Swedish, but the
  readme would show up in English.
* **License File**: specify the text file in `targets: win: licensePath: `


##  Custom Locale


Most languages we support do not have a preexisting locale in Windows (most Sámi
languages actually do, except Kildin, Pite and Ume). Presently we create
installers without a locale for these, but soon it will be a requirement to also
specify a custom locale to go with the keyboard.


More info will be added when the feature is ready.
