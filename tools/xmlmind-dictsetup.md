# Setting up the XMLMind XML Editor (XXE)


In order to see the dictionary files in XMLEditor, do the following:


# For all users, first-time installation


# open XMLEditor
# In the almost-rightmost menu `Options`, select `Preferences`
# In the left part of the `Preferences` window, under `Tools`, select `Install add-ons`
# For the window `Download add-ons form these servers`, click the `Add` button and add the following url: `http://divvun.no/static_files/list.xxe_addon`
# Follow the instructions on [this page](../infra/editing_dicts_w_XXE.html) to set other preferences
# Restart XMLEditor
# Then go through the *update* procedure below:




# For all users, update


Every time the gt_dictionary dtd or css are updated, the 
following procedure must be gone through:


# open XMLEditor
# In the almost-rightmost menu `Options`, select `Install Add-ons`
# Scroll down till you find the plugin *Configuration: Giellatekno/Divvun dictionaries* with two arrows in a circle in front (the arrows indicate that there is an update available for the configuration).
# Click in the check box to the left of the configuration, and click **Ok**.
# Restart XMLEditor


# For all users who want to edit forrest documentation files


# Contact someone at Giellatekno/Divvun and get a **forrest** folder. 
# The forrest folder can be found here: *home folder / Library / Application Support / XMLMind /XMLEditor4 / addon* (note that the folder "library" might be called **Bibliotek** or **Kirjasto**, etc., dependent upon your language choice).
# Put the forrest folder in the same location at the reciever's folder
# Restart XMLEditor
# The forrest menu will show up between the menus *Tools* and *Windows* as soon as you open a forrest document.
## When you open a forrest document, you will now get an error message. Click, "OK", and ignore it.


# For the one maintaining the xmlmind configuration


# Change the dtd and/or css in `$GTHOME/words/dicts/scripts` and check in.
# `cd $GTHOME/tools/xxe/`
# Add new version change descriptions in the file `gtdict-config/gtdict-config.xxe_addon` (Remember to add new version number **both** in the node `a:version` **and** in the description!) 
# Check in the new version of the gtdict-config.xxe_addon file
# in `$GTHOME/tools/xxe/`, give the command `make`
 - **NB!** requires password for the sd user on divvun.no
# Finally, go through the *For all users, update* section above


## During development


During development of a new feature, it is best to work locally, and only publish the updates once you are satisfied with the changes. To work like that, do the following:


# uninstall the configuration installed above
# run the following commands:
## `cd $GTHOME/tools/xxe/`
## `make install`
# restart XXE


Now edit the CSS, DTD or whatever needs updates, and after each change, run `make install` and reload the open document used to test the configuration in XXE. For some changes (like dtd changes), you need to restart XXE to see the effect of the change.


When you are satisfied with your local changes, do the following to publish and revert to the public version of the configuration (and remember to update the version info etc. as described above):


# run the following commands:
## `cd $GTHOME/tools/xxe/`
## `make uninstall`
## `make distribute`
# install the configuration using the **Options > Install Add-ons…** menu
# restart XXE
