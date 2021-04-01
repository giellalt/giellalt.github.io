Menus and tabs
==============

For notes on Forrest layout, see the [Forrest Layout
document](ForrestLayout.html).

Menus and tabs are closely intertwined in forrest, but they are defined
in separate places.

Menu configuration is defined in the files
`xtdoc/sd/src/documentation/content/xdocs/site.xml` and
`xtdoc/sd/src/documentation/content/xdocs/doc/site-frag.xml`.

Tab configuration is defined in the files
`xtdoc/sd/src/documentation/content/xdocs/tabs.xml` and
`xtdoc/sd/src/documentation/content/xdocs/doc/tabs-frag.xml`

`site.xml` og `tabs.xml` respectively define the menus and the tabs in
the main site.

`site-frag.xml` and `tabs-frag.xml` define the menus and the tabs for
the technical documentation. The `site-frag.xml` file is included into
the site layout using the following line in the `site.xml file`:

    <xi:include href="doc/site-frag.xml#xpointer(/tech/*)"
    xmlns:xi="http://www.w3.org/2001/XInclude"/>

The same method is used to incorporate the `tabs-frag.xml` into the site
layout, using the following line in `tabs.xml`

    <xi:include href="doc/tabs-frag.xml"
    xmlns:xi="http://www.w3.org/2001/XInclude"/>

Defining a tab
--------------

A single tab is defined like this:
`<tab dir=""             id="northern-sami" label="Davvisámegiella" indexfile="index_sme.html"             />`

-   An entry has to start with the *tab* tag.
-   The *id* attribute has to be a unique name, which identifies the
    tab.
-   The *dir* attribute tells which folder is the working folder of tab.
-   The *label* attribute defines the name of the tab.
-   The *indexfile* attribute tells which file should be opened when
    clicking the tab.

### Subtabs

It is possible to define two levels of tabs in forrest. The following
example is fetched from the `tabs-frag.xml` file.

    <tab dir="doc" id="TechDoc" label="Tech. doc" indexfile="intro.html" >
        <tab dir="doc/admin" id="admin" label="Admin" indexfile="workplan.html" />
        <tab dir="doc/infra" id="infra" label="Infrastucture" indexfile="Infrastructure.html" />
        <tab dir="doc/lang"  id="lang"  label="Languages" indexfile="index.html" />
        <tab dir="doc/ling"  id="ling"  label="Linguistics" indexfile="common.html" />
        <tab dir="doc/tools" id="tools" label="Tools" indexfile="tools.html" />
    </tab>
                    

This stanza defines the tab labeled "Tech. Doc", with the subtabs
"Admin", "Infrastucture", "Languages", "Linguistics" and "Tools".

The way the subtabs are defined above, means that we can bind specific
menus to them. If you don't want that behaviour, then you can omit the
*id* attribute in the subtabs.

The *id* attribute is referred to from the menus, and this binds the tab
and the menu together.

Defining a menu
---------------

This piece of code is fetched from from
`xtdoc/src/documentation/content/xdocs/site.xml`, and defines the
introductory menu:

    <about label="About" tab="Home" >
        <index   href="index.html" label="Index" description="Welcome to divvun.no" />
        <changes href="changes.html" label="Changes" description="The projects history" />
        <todo    href="todo.html" label="Todo" description="The plan for the project" />
    </about>

A single menu entry contains a tag you define yourself (e.g. index,
changes, todo, whatever ...), a href (some internet adress), and an
optional description.

These entries are surrounded by the "about" tag. As stated above, we
could replace "about" with something else. The label attribute defines
the name of the menu entry, and the tab attribute defines *which tab*
should be highlighted when pressing this link.

### Further examples

The next example is from the file `gt/doc/site-frag.xml`. This is a part
of the menu that appears when clicking first the *Tech. Doc* tab, and
the *Admin* subtab.

    <admin href="docslashadminslash" label="Project" tab="admin" >
        <worktodo href="workplan.html" label="Work Plan" />
        <adr href="adr.html" label="Project workers" />
        ...
    </admin>

It has the same structure as the previous example, with one notable
exception, the *href* that points to the directory `doc/admin/`.

This means that the *hrefs* defined in the menu entries inside this one,
will point to files in this folder.

One crucial detail in the href is the final **/**. This one has to be
there, so that the submenu of the chosen tab shows. If the final **/**
is omitted, then all the menus defined in site.xml will be shown.
