





Changing the look of Forrest is not easy. There is a [tutorial on how to use Forrest](http://forrest.apache.org/docs_0_100/your-project.html). 


Forrest offers two ways to build the layout, themes and skins. Themes are a new mechanism that offers greater flexibility wrt both the content and the layouut, whereas skins are the old mechanism. Themes depend on the `dispatcher` plugin, whereas skins do not depend on anything but forrest.


See the Forrest [introduction to skins](http://forrest.apache.org/docs_0_90/skins.html)
and [themes](http://forrest.apache.org/pluginDocs/plugins_0_80/org.apache.forrest.plugin.internal.dispatcher/how/howto-dispatcher-structurer.html)




# Documentation for themes
tbw.


# Documentation for skin


## The css files


The css files are situated in `src/documentation/skins/$SKINNAME/css/` as seen in the dir where you start forrest. If you e.g. start forrest in `$GTHOME/xtdoc/gtuit/` then the full path from there on is: `src/documentation/skins/sdpelt/css/`. The name of the skin being used is defined in `forrest.properties`.


The css files are usually these:


* basic.css
* print.css
* profile.css.xslt
* screen.css


Each one is described below.


**basic.css:**


This is the common definitions used for all presentations (ie both print and onscreen viewing). Here we change the note, warning and fixme fields. The body text is defined here as well.


**screen.css:**


Here we give style to the elements that have a separate styling for print. This relates to tabs and menus, as well as some other elements. Elements not specified here either gets their styling from `basic.css` or uses the default browser stylesheet.


**print.css:**


This stylesheet formats elements for printing output. E.g. tabs, menus and TOC's are covered here (they are not displayed at all), as well as some other parts that has a printing-specific styling.

 
**profile.css.xslt:**


This is formally an XSLT stylesheet, but it produces a CSS stylesheet. The main point of going through the hassle of XSLT to arrive at CSS is to be able to specify sizes and colours and other CSS values programmatically.


All the values here can be specified in the file `skinconf.xml` (see below), but if unspecified they get default values from the skin.


## The skinconf.xml file


This file is located at `src/documentation/` relative to the forrest root of the documentation. The file contains a number of values that you typically set on a project/documentation site basis:


* name of the project/front page/home page/group
* what sort of alternative formats the pages will be available in (xml, pdf, etc)
* logo, trail links, copyright year
* credits
* Table-of-content limits (depths, minimum number of sections required, etc)
* colouring of the main elements of the pages
* feedback e-mail, credit


Then there is also a section called **extra-css**, which gives the possibility to style whatever requires a different treatment than the default skin values.


If you want to specify element colours here, the xml structure might not be in place. If so, please copy some sample xml structure from the `skinconf.xml` file in `$FORREST_HOME`.
