# Using XMLMind XM Editor (XXE) to edit dictionary files


This is a brief guide for using [XMLMind XML Editor (XXE)](http://www.xmlmind.com/xmleditor/) to edit xml-based dictionaries.


# Preferences


To avoid unneccessary noise in our commits, it is important that we use identical settings for whitespace handling. Choose **Preferences > Save**, and make sure that the following settings are as in the picture below:


* Indent (=3)
* Max. line length (120)
* Add open lines - **not** checked
* Favor interoperability with HTML and SGML - **not** checked


[XXE Whitespace settings](images/xxe-whitespace-settings.png)


This is the basic setup to make things work good enough wrt our svn repository. Open a file and start editing (details below). When done, check in, and the commit will **only** contain *your* changes - no changes in the whitespace of the document.


If you don't have write access to the repository, you can instead [make a patch|http://ariejan.net/2007/07/03/how-to-create-and-apply-a-patch-with-subversion/] and [send it to us](mailto:feedback@divvun.no).


# XXE configuration for dictionary files


If you are going to do more substantial editing, it is very helpful to install the XXE configuration for our dictionaries. To do that, first add the following URL to the **Install add-ons** section in the XXE preferences (once). Then install the add-on.


```http://divvun.no/static_files/list.xxe_addon```


## Add config URL to the XXE preferences


First click the **Add…** button:


[XXE Add-on preferences](images/xxe-addon-prefs.png)


Then paste the URL into the URL dialog:


[XXE Add-on preferences](images/xxe-addon-site-dialog.png)


The resulting preference pane should look like this:


[XXE Add-on preferences](images/xxe-addon-prefs-with-gturl.png)


## Install/update the dictionary config


Open the menu **Options > Install Add-ons…**, and click in the check box in front of the Giellatekno/Divvun dictionary configuration:


[images/xxe-update-dictconfig.png]


The two arrows in a circle in front of the check box indicates that there is an update available. If this is the first time you install the configuration, there are no such arrows there.


When done, click OK, and restart XXE.


# Editing


You can do almost all editing using point and click (demo, including showing the xpath path).


But to work efficiently, you should switch to the keyboard. Here are the most important keyboard shortcuts:


* adding/changing attribute values - ⌘E / ⌃E
* adding elements:
** insert **Before** - ⌘B / ⌃H (⌘H is reserved on the Mac)
** **Insert** - ⌘I / ⌃I
** insert after (j follows i) - ⌘J / ⌃J
* transforming from one element to another - ⌘T / ⌃T
* splitting an element into two (only under certain conditions, see below) - insertion point at splitting point, then ⌘↑ / ⌃↑ to select parent element, then Esc-⏎


Specific points:
* inserting new entries will give you a full template
* inserting mg, tg, xg will also give you the complete subtree (ie all required elements, but only empty attributes)
* when editing an empty but required attribute, the attribute will be automatically selected - you only have to type the first few characters of the attribute + return
* splitting elements works only on elements with no required attributes (restriction in XXE); this is unfortunate, since proably the most common operation will be splitting t (translation) elements into several - which can't be done using the keyboard shortcut mentioned above because t requires @pos.


The dictionary configuration automatically opens two views, one resembling a traditional dictionary article, and another with most elements on a line by itself. These are just *views* of the same underlying xml document, which means that changes in one view is immediately visible in the other. The same goes for selections.


It is also possible to open a third view (and a fourth, and fifth) to the right (or top / bottom) e.g. with the regular tree view, but that should normally not be necessary. Most, if not all, tree structure operations can be done without that view, by clicking on the appropriate places, or using command+up arrow.


Clicking the appropriate places means:
* xpath bar
* frames
* generated content such as bullets and numbers in lists, attr. values, etc


The official quickstart guide is available at the [xmlmind site](http://www.xmlmind.com/xmleditor/_distrib/doc/help/quickstart.html).


# Editing guideline for dictionaries


* use the appropriate tag
** re = domain restriction
** t = translation (single words)
** tf = translation phrase (multiword translations/phrase translations)
** te = translation explanation
* always add POS to single words
