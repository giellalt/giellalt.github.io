34 hovudspråk (=UI-språk)


143 andre språk


177 språk i alt




https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html


184 ISO 639-1-språk


Fleire av Apple-språka er eigentleg éitt språk: engelsk * 5, osb




For å leggja til eigne/andre språk:


```
$ defaults write -g AppleLanguages '(nn, se, nn-NO, nb, fi, is, sma, en-GB, en)'
```


* sma er nytt, resten er frå tidlegare.


For å få lista over allereie registrerte språk, bruk kommandoen:


```
defaults read -g AppleLanguages
```


Jf `man defaults` og [http://wiki.gnucash.org/wiki/Locale_Settings]
