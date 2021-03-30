Modern operating systems require that software is signed, or at least will the
signature make the user experience better and more trustworthy. The details vary
from system to system, but the basic idea is that you create a developer account
from the OS provider (for free or for pay), and then get a certificate that one
can use to sign software and installation packages with.


Below is a short overview of the developer accounts we have access to, and how
to set up the signing infrastructure on each computer.


# macOS & iOS


## Dev account


UiT has an Apple developer account, managed by (=Team Agent)
[Marcel Pogorzelski](https://uit.no/om/enhet/ansatte/person?p_document_id=334103&p_dimension_id=88226).
Sjur is an admin, and can invite others. Divvun has a shared admin account, to
be able to share credentials etc across computers and build systems. Ask Sjur or
Børre for details. The shared credentials are mainly used by iOS and Android
build systems, and is based on [Fastlane](https://fastlane.tools).


## Signing setup


# You need [XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
# after installing XCode, you use your AppleID to sign in in XCode:
##  **XCode > Preferences… > Accounts**
## click the **+** sign
## type in your AppleID + password
# if *The University of Tromso* does not show up as a team, you need to be
  invited - contact Marcel, Sjur or Børre


When done, and you are a member of the team, you need to install certificates.
When doing **iOS** development, the easiest is to use Fastlane to retrieve and
save the shared credentials using a private git repository. The start is
described [here](AccessToPrivateGit.html), for further details ask Børre or Sjur.


For **macOS** development, you need some certificates and signing identities
that can only be created by the Team Agent, others you can create yourself. You
know that you need the Team Agent when you get an error message like this:


[images/Permissions_failure.png]


For the ones that the Team Agent must create, the procedure is as follows:


# make Team Agent create the wanted certificate using XCode, by going to
  **XCode > Preferences… > Accounts**, selecting the UiT team, clicking
  **Manage Certificates…**, and finally clicking the **+** symbol in the
  lower, left corner:\\
  [images/Certificate_creation_menu.png]
# make the Team Agent **Download All Profiles** (in the same Account
  preferences pane)
# the Team Agent must export the private key from the local key chain:\\
  [images/Export_certificate.png]
## **Important!!** Use a strong password!
# send the encrypted private key to the team member(s)
# each team member must import the certificate into his/her key chain
## decrypt it using the same strong password!!!
# get info on the certificate, copy the name of the public part of the
  certificate (not the private key)
# use that name when signing installation packages


# Windows


TBW


# Android


TBW
