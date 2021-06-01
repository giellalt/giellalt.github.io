# Getting started with the GiellaLT infrastructure

**NOTE!** At Giellatekno and Divvun, we recently (May 2020) moved our linguistic source code and its core support files from *svn* to *github*. Our other pages (documentation, icall, administrative pages ...) are still in svn. Part of our documentation is still lagging behind, and refers to the state of affairs before the migration to *git*. References to linguistic content should be OK. 

These *getting started* instructions are up-to-date.


This page enables you to **build, use and develop the grammatical tools** yourself. You should first ensure the *Hardware and operative system requirements* are set, thereafter you should *get the Giella source code*, and finally you should *compile the analysers*. Each of these three steps are presented below, with links to relevant routines. Return to this page for the next step after each of the steps **1-2-3** below.

If you, on the other hand, do not want to build the tools yourself, but only want to use ready-made grammatical analysers out of the box, see the  [Linguistic analysis page](../ling/LinguisticAnalysis.html). 

## Installing

Here come the **three steps**.

### 1. Hardware and operating system requirements


- Machine requirements: 8 Gb RAM is needed for Hfst transducer compilation (4 Gb is fine if you only want to use the Xerox compilers)
- OS/System - you will need **unix/linux**, which is available on all modern OS's. This is set up in the follwoing way, depending on your OS:
	- Setup instructions for: [Macintosh](GettingStartedOnTheMac.md) // [Linux](GettingStartedOnLinux.md) // [Windows](GettingStartedOnWindows.md)


### 2. Getting the Giella source code for your language

Most users will need **only (a)**. The options (b) and (c) are for people working at Divvun/Giellatekno and for system administrators.

#### a. Download the core files and the language(s) you need (for all users)


Follow [these instructions](infraremake/GettingStartedWithTheNewInfra.md)
(under the *Only the GT core and the wanted language(s)* heading) to only
check out the required parts for working with a single or a few languages.


#### b. Download svn documentation files (relevant mostly for people working at or for Divvun or Giellatekno)

[Check out](../tools/docu-svn-user.md) our svn repository, then run `$GTHOME/gt/script/gtsetup.sh` - this gives you everything but is quite big,
more than 3.5Gb in download size, and it requires twice as much space on your hard-disk.

#### c. Setup on a multiuser server (for system administrators)
*Option (c) is relevant only to system administrators*. You may also set up the core and single languages on a multiuser server. To use this configuration, follow these instructions:


* install the `giella-core` -
  [instructions for sysadmins](SettingUpAMultiuserServer.md)
* check out your language -
  [instructions for linguists](GettingStartedOnAServer.md)

You may also setup the documentation files on a server. Follow the instructions under (b). 


### 3. Compile the analysers


The page [Compiling And Using The Analysers](CompilingAndUsingTheAnalysers.md) 
tells you how to do just that. Thereafter you can start using the analysers and/or 
do the the development work…


For the full range of possibilities, there is 
[an overview of the technical documentation](Infrastructure.md) for details on how to use our
infrastructure to develop your morphologies, lexicons and more to create tools
for yourself and your language community.


## A final note


This list is written for people not working at Divvun or Giellatekno. You may
also look at
[the longer list of what we install for our new workers](install-overview.md). But this document will give you what you need to get started.
