iOS App Development And Debugging
==========

# Debugging


Apple has some general debugging tips [here](https://developer.apple.com/library/ios/qa/qa1747/_index.html). The most important info is:


* sync your phone with your computer using iTunes
* after syncing, you can find crash logs in:
** `~/Library/Logs/CrashReporter/MobileDevice/<DEVICE_NAME>` (Mac OS X)
** `C:\Documents and Settings\<USERNAME>\Application Data\Apple Computer\Logs\CrashReporter\MobileDevice\<DEVICE_NAME>` (Windows XP)
** `C:\Users\<USERNAME>\AppData\Roaming\Apple Computer\Logs\CrashReporter\MobileDevice\<DEVICE_NAME>` (Windows Vista, 7+)


# Apple dev user & iTunes Connect user


These two are different entities, but for simplicity's sake, use the same user account for both. Also, make sure your user account is a valid e-mail address. A non-e-mail address is not accepted by iTunes Connect.


# Building and submitting


## Building


* open your xcode project file in XCode
* Change the build setting from Debug to Release in Product > Scheme > Edit Scheme ...
* if you want to test on a phone, attach the phone with a USB cable, and select Product > Run (the phone must be in developer mode)


## Submitting


When the project is ready to be submitted, do as follows:


* build an archive: Product > Archive
* open the archive Window: Windows > Organizer
* submit using one of to alternatives:
** **either**
*** click on the submit button in the Archive windows (assumes your developer ID
    is the same as your Apple ID / iTunes Connect ID - if not, use the next
    alternative)
** **or**
*** export archive (click the export button)
*** open Application Loader, and log in with your iTunes Connect user account
*** click Deliver Your App, and select the exported file from two steps above




# Icons


## Tools


## Sizes


[Apple's documentation](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/IconMatrix.html)


og: [https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/AppIcons.html]


# Screenshots for the store pictures


## iOS


[https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Appendices/Properties.html]
