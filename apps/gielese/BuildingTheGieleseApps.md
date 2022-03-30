Gïelese has a client and a remote server for data storage. These steps focus on the compilation of the client.


These are the steps required to build the three apps presently supported by the Gïelese source code:


* (1) JavaScript web app
* (2) Client-side media files
* (3) PhoneGap Android app
* (4) PhoneGap iOS app


# Preparations


1. cd $GTHOME/apps/aajege/src/sma-client
1. sudo port install nodejs npm
1. npm install


##  Preparing the JavaScript environment


???


##  Preparing the media server


* Create a virtualenv, run it and initialize from requirements.txt
* `python -c "import os ; print os.urandom(24)" > secret_key`
* `python manage.py init_db`
* `python manage.py install_media -f ../data/sma_media.xml`
* `python manage.py append_lexical_data -f ../data/n_smanob_test.xml`


The latter only installs/updates definitions for existing words from the
first step, if you want to just install everything, use:


* `python manage.py install_lexicon -f ../data/n_smanob.xml`


Prepare JSON files.


* `python manage.py prepare_json`


##  Building the internationalisation


Extracting is a little tricky. Mind the dot at the end, as we need the
current directory too.


```pybabel compile -d translations```


##  Building the media directories for phonegap


In the main directory (~/$GTHOME/apps/aajege/src/) run the following command:


```make prepare-for-phonegap```


This will take a little while. It does the following:


1. Extracts database information to JSON
1. Copies JSON
1. Copies media files, and trims them depending on various parameters (target device)


#  Phonegap dependencies


PhoneGap system dependencies: 


*For building with Android*


1. Android SDK (standalone tools): http://developer.android.com/sdk/installing/index.html?pkg=tools
1. ant (via homebrew)


PhoneGap dependencies must be installed using 'npm', globally. NB: you may need sudo permissions for this.


```
$ npm install -g phonegap@3.6.3-0.22.6
$ npm install -g cordova@3.6.3-0.2.13
$ npm install -g ios-sim@3.1.1
```


These dependencies are checked in sma-client/phonegap/package.json


# Building the apps


1. `./node_modules/.bin/brunch build --production` => webapp
1. `???` => Android app
1. `???` => iOS app


#  Building for Android


```
    phonegap build android
    cd PATH_TO_RELEASE/platforms/android
    ant release
```


NB: you will be prompted for the keystore password (twice). This is in priv too.


The file will be generated in `bin`. This should be enough for building
Android .apk files for release, but but if this is not enough see further steps
in the following document.


Other relevant docs:


* [http://developer.android.com/tools/device.html]
* [http://developer.android.com/tools/publishing/app-signing.html]
* [http://stackoverflow.com/questions/17316910/phonegap-run-from-cli-with-release-and-self-signed-app-requires-me-to-patch-co]


NB: before uploading a new release to the android app store, be sure to update the versionCode in the AndroidManifest.xml file.


##  Debugging


If you encounter errors in the process of the *phonegap build android*
command, run the following instead:


```cordova build android```


This will return much more useful feedback.


##  Known issues


* saxon9.jar available in the library path in ~/lib/ may cause problems in the build. If you see errors about XPath transforms, move it out of your java path


#  Android Submission


?


#  Beta testers


##  iOS


?


##  Android


For beta testing on android, users must be a member of the Google group (gielese-tester-community), where they must follow the development link in order to get permission to download any beta versions. After the user is a member of the group, this is automatic.


Invites must be managed within the Group, as it is not listed as public.


###  Creating a beta testing group restriction


1. Follow the procedure on http://groups.google.com
1. Once complete, copy the group e-mail address (*@googlegroups.com)
1. In the Play admin page, select APK
1. After uploading a beta,  click 'Manage list of testers' in the Beta Testers section
1. Copy & Paste the group e-mail address into the field, and keep track of the k below
1. Share the link with potential beta testers. The easiest means here is to just add the link to the Google Group info, so testers will see this as the first thing


###  Beta tester enrollment


As a beta tester, follow this procedure: 


1. Join the group
1. If necessary, make sure an admin can confirm you are enrolled
1. Follow the link provided
1. Follow the instructions to download the beta


NB: Since it may take a few hours for APKs to be deployed to all of google
Play's servers, it may be so that you will be able to enroll in the beta
program, but not access the beta. If this is so, try back in a couple hours. 




#  Deploying an iOS app


In the Apple Developer Member Center, you must have the following things:


* a Provisioning profile
** The deploying user must have access to the production distribution profile
* a Deployment certificate
** After a distribution provisioning profile is created, the user must create
   a production certificate


The wizards used to create these will explain in good detail how to generate certificates.


The end result will be that you will need to install the Deployment Certificate
on your own machine through the Keychain Access app.




##  Xcode configuration


1. Add your Apple Dev Center account (which could be different from iTunes Store)
1. Account must be an admin in order to have access to provisioning profiles
1. In Xcode preferences, look at Accounts tab
1. Add the account, or if the account is already added, click on Details, and then click the refresh icon. 


##  Uploading


1. Build the project with destination iOS Device, and Build for Running.
1. Troubleshoot any errors that occur in the build process.
1. Once successful... Select from the *Product* menu: *Archive*
1. Once the archiving process completes, you will see a window with the latest archive
1. Select this, and choose *Submit*
1. Through the following dialog boxes, choose the correct project and team
1. Wait for archive to be signed (you may have to confirm some accesses to the Key Ring)
1. Upload it


NB: the Bundle ID must be the same for the upload to work. You can set this on
Apple's side within iTunes Connect.


* Exporting is also possible, but haven't identified a need for this yet




#  Upgrading cordova


Follow the documentation, but also make sure that you: 


 * cordova platform upgrade ios


And then check the installed plugins and, remove and add them all individually




#  Known issuess


##  Apple complains of aps-environment entitlement


Review process returns:


```
    Missing Push Notification Entitlement - Your app appears to include API used to
    register with the Apple Push Notification service, but the app signature's
    entitlements do not include the "aps-environment" entitlement. 
```


But, we don't use push notifications. 


1. https://github.com/meteor/meteor/issues/2974
1. http://forum.ionicframework.com/t/missing-push-notification-entitlement/5436/4


*Problem*: Phonegap 3.5 seems to automatically include API calls to set up
the push notification API, even though the phonegap project is not configured
to use a push notification plugin... Building the XCode project from PhoneGap
results in the inclusion of the following lines in
*Gielese/Classes/AppDelegate.m*. Apple is warning that the certificate does
not include these entitlements. One way would be to regenerate a provisioning
profile with these entitlements, but keeping the app simpler seems to be a better idea. 


```
    // repost all remote and local notification using the default NSNotificationCenter so multiple plugins may respond
    - (void)            application:(UIApplication*)application
        didReceiveLocalNotification:(UILocalNotification*)notification
    {
        // re-post ( broadcast )
        [[NSNotificationCenter defaultCenter] postNotificationName:CDVLocalNotification object:notification];
    }


    - (void)                                application:(UIApplication *)application
       didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
    {
        // re-post ( broadcast )
        NSString* token = [[[[deviceToken description]
                             stringByReplacingOccurrencesOfString: @"<" withString: @""]
                            stringByReplacingOccurrencesOfString: @">" withString: @""]
                           stringByReplacingOccurrencesOfString: @" " withString: @""];


        [[NSNotificationCenter defaultCenter] postNotificationName:CDVRemoteNotification object:token];
    }


    - (void)                                 application:(UIApplication *)application
        didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
    {
        // re-post ( broadcast )
        [[NSNotificationCenter defaultCenter] postNotificationName:CDVRemoteNotificationError object:error];
    }
```


Commenting these out, rebuilding, and resubmitting, is supposed to fix the
problem (currently waiting for proof from the approval process).


