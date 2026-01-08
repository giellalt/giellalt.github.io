# Setting up the XMLMind XML Editor (XXE)

For editing the Neahttádigisánit dictionary files, we recommend the
[XMLMind XML editor](https://www.xmlmind.com/xmleditor/). 
In order to see the dictionary files in XMLEditor, do the following:

# For all users, first-time installation

1. open XMLEditor
1. In the almost-rightmost menu `Options`, select `Preferences`
1. In the left part of the `Preferences` window, under `Tools`, select `Install add-ons`
1. For the window `Download add-ons form these servers`, click the `Add` button and add the following url: `http://divvun.no/static_files/list.xxe_addon`
1. Follow the instructions on [this page](../infra/editing_dicts_w_XXE.html) to set other preferences
1. Restart XMLEditor
1. Then go through the *update* procedure below:

# For all users, update

Every time the gt_dictionary dtd or css are updated, the
following procedure must be gone through:

1. open XMLEditor
1. In the almost-rightmost menu `Options`, select `Install Add-ons`
1. Scroll down till you find the plugin *Configuration: Giellatekno/Divvun dictionaries* with two arrows in a circle in front (the arrows indicate that there is an update available for the configuration).
1. Click in the check box to the left of the configuration, and click **Ok**.
1. Restart XMLEditor


# For the one maintaining the xmlmind configuration

1. Change the dtd and/or css in `$GTHOME/words/dicts/scripts` and check in.
1. `cd $GTHOME/tools/xxe/`
1. Add new version change descriptions in the file `gtdict-config/gtdict-config.xxe_addon` (Remember to add new version number **both** in the node `a:version` **and** in the description!)
1. Check in the new version of the gtdict-config.xxe_addon file
1. in `$GTHOME/tools/xxe/`, give the command `make`
 - **NB!** requires password for the sd user on divvun.no
1. Finally, go through the *For all users, update* section above

## During development

During development of a new feature, it is best to work locally, and only publish the updates once you are satisfied with the changes. To work like that, do the following:

1. uninstall the configuration installed above
1. run the following commands:
    1. `cd $GTHOME/tools/xxe/`
    1. `make install`
1. restart XXE

Now edit the CSS, DTD or whatever needs updates, and after each change, run `make install` and reload the open document used to test the configuration in XXE. For some changes (like dtd changes), you need to restart XXE to see the effect of the change.

When you are satisfied with your local changes, do the following to publish and revert to the public version of the configuration (and remember to update the version info etc. as described above):

1. run the following commands:
    1. `cd $GTHOME/tools/xxe/`
    1. `make uninstall`
    1. `make distribute`
1. install the configuration using the **Options > Install Add-ons…** menu
1. restart XXE
