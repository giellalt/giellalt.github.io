# Getting started with the GiellaLT infrastructure

This page enables you to **build, use and develop the GiellaLT grammatical tools** yourself. You should first ensure the *Hardware and operative system requirements* are set, thereafter you should *get the Giella source code*, and finally you should *compile the analysers*. Return to this page for the next step after going through each of **the steps 1-2-3** below.

If you do not want to compile the tools yourself, but only want to **use ready-made grammatical analysers out of the box**, stop reading and see the  [Linguistic analysis page](../ling/LinguisticAnalysis.html) instead. 

# Installing

Here come  **the three steps**.

## Step 1. Set up the computer

Set up the computer, using these instructions, for: [Macintosh](GettingStartedOnTheMac.md) // [Linux](GettingStartedOnLinux.md) // [Windows](GettingStartedOnWindows.md). Note that the computer must have a minimum of 8 Gb RAM (4 Gb is possible, but very, very slow). 


## Step 2. Getting the Giella source code for your language

**Step (a)** is for all users. **Step (b)** is for people working at Divvun/Giellatekno and **step (c)** is for system administrators.

### a. (For all users:) Download the core files and the language(s) you need 


Follow [these instructions](infraremake/GettingStartedWithTheNewInfra.md)
(under the *Only the GT core and the wanted language(s)* heading) to only
check out the required parts for working with a single or a few languages.


### b. (Relevant mostly for people WORKING at Giellatekno/Divvun:) Download svn documentation files 

[Check out our svn repository](../tools/docu-svn-user.md) , then ask the Tromsø folks for advice on setup.

### c. (For system administrators:) Setup on a multiuser server 
*Option (c) is relevant only to system administrators*. You may also set up the core and single languages on a multiuser server. To use this configuration, follow these instructions: [install giella-core (for sysadmins)](SettingUpAMultiuserServer.md) and [check out the language (for sysadmins)](GettingStartedOnAServer.md). You may also setup the documentation files on a server. Follow the instructions under (b). 


## Step 3. Compile the analysers


The page [Compiling And Using The Analysers](CompilingAndUsingTheAnalysers.md) 
tells you how to do just that. Thereafter you can start using the analysers and/or 
do the the development work…


For the full range of possibilities, there is 
[an overview of the technical documentation](Infrastructure.md) for details on how to use our
infrastructure to develop your morphologies, lexicons and more to create tools
for yourself and your language community.


# A final note


This list is written for people not working at Divvun or Giellatekno. You may
also look at [the longer list of what we install for our new workers](install-overview.md). But the present document will give you what you need to get started.
