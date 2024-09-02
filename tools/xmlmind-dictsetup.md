# Setting up the XMLMind XML Editor (XXE)

In order to see the dictionary files in XMLEditor, do the following:

## For all users, first-time installation

1. open _XMLEditor_
2. In the almost-rightmost menu `Options`, select `Preferences`
3. In the left part of the `Preferences` window, under `Tools`, select `Install add-ons`
4. For the window `Download add-ons form these servers`, click the `Add` button and add the following url: `http://divvun.no/static_files/list.xxe_addon`
5. Follow the instructions on the page [Using XMLMind XM Editor (XXE) to edit dictionary files](../infra/editing_dicts_w_XXE.html) to set other preferences
6. Restart _XMLEditor_
7. Then go through the _update_ procedure below:

## For all users, update

Every time the gt_dictionary dtd or css are updated, the
following procedure must be gone through:

1. open _XMLEditor_
2. In the almost-rightmost menu `Options`, select `Install Add-ons`
3. Scroll down till you find the plugin _Configuration: Giellatekno/Divvun dictionaries_ with two arrows in a circle in front (the arrows indicate that there is an update available for the configuration).
4. Click in the check box to the left of the configuration, and click **Ok**.
5. Restart XMLEditor

## For the one maintaining the xmlmind configuration

1. Change the dtd and/or css in `$GTHOME/words/dicts/scripts` and check in.
2. `cd $GTHOME/tools/xxe/`
3. Add new version change descriptions in the file `gtdict-config/gtdict-config.xxe_addon` (Remember to add new version number **both** in the node `a:version` **and** in the description!)
4. Check in the new version of the gtdict-config.xxe_addon file
5. in `$GTHOME/tools/xxe/`, give the command `make`
   - **NB!** requires password for the sd user on divvun.no
6. Finally, go through the _For all users, update_ section above

### During development

During development of a new feature, it is best to work locally, and only publish the updates once you are satisfied with the changes. To work like that, do the following:

1. uninstall the configuration installed above
2. run the following commands:
   1. `cd $GTHOME/tools/xxe/`
   2. `make install`
3. restart XXE

Now edit the CSS, DTD or whatever needs updates, and after each change, run `make install` and reload the open document used to test the configuration in XXE. For some changes (like dtd changes), you need to restart XXE to see the effect of the change.

When you are satisfied with your local changes, do the following to publish and revert to the public version of the configuration (and remember to update the version info etc. as described above):

1. run the following commands:
   1. `cd $GTHOME/tools/xxe/`
   2. `make uninstall`
   3. `make distribute`
2. install the configuration using the **Options > Install Add-ons…** menu
3. restart XXE

## Almost obsolete documentation

This info is for users who want to edit documentation files written using the [forrest platform](https://forrest.apache.org/).

**Note:** The sites _divvun.no, divvun.org_ and _giellatekno.uit.no_ are written on forrest platforms, with some (the older) files written in _xml_ and newer files typically written in _jspwiki_. Current documentation (like this file and other files on this site) is written in Markdown. Read the documentation below only if you know that you are going to _edit xml files in forrest by using the XMLMind editor_.

1. Contact someone at Giellatekno/Divvun and get a **forrest** folder.
2. The forrest folder can be found here: _home folder / Library / Application Support / XMLMind /XMLEditor4 / addon_ (note that the folder "library" might be called **Bibliotek** or **Kirjasto**, etc., dependent upon your language choice).
3. Put the forrest folder in the same location at the reciever's folder
4. Restart XMLEditor
5. The forrest menu will show up between the menus _Tools_ and _Windows_ as soon as you open a forrest document.
6. When you open a forrest document, you will now get an error message. Click, "OK", and ignore it.
7. Continue edit the document.
