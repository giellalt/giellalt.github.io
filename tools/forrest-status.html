Describing the project status
=============================

The project status and progress can easily be followed by maintaining
the `status.xml` file, found at the project root, at the same location
as `forrest.properties`. The purpose of this file is to communicate the
technical progress and development of the project without forcing people
to scrutinize our bug database. Also, it can be used to state progress,
changes and whatever that is not related to the bug db at all.

Exactly what we put into the status file can vary, but the latest
version of Forrest (0.7) has a mechanism to filter out entries with a
certain property, such that one can get overview reports as well as
detailed lists of bugs fixed.

If we look at how it is used in the [Forrest
project](http://forrest.apache.org/docs_0_70/changes.html) itself, each
entry contains a very short description (typically one sentence) with
reference to the bug report(s) it relates to. It is easy to
automatically create links to the bug reports.

Format of the status.xml file
=============================

The `status.xml` file is heavily
<a href="http://forrest.apache.org/pluginDocs/plugins_0_70/org.apache.forrest.plugin.input.projectInfo/" class="fork">under-documented in Forrest</a>,
and the description below is based on what I have found in the XSL
stylesheet processing `status.xml`, as well as the example `status.xml`
found in
`$FORREST_HOME/plugins/org.apache.forrest.plugin.input.projectInfo/`.
The basic outline of the file is as follows:

    <!DOCTYPE status PUBLIC "-//APACHE//DTD Status V1.3//EN" "status-v13.dtd">
    <status>

      <!-- List developers here, the ID is used as reference further down -->
      <developers>
        <person name="Sjur N. M." email="xx(a)samediggi.no" id="SNM"/>
      </developers>

      <!-- List type of change here, the ID is used as reference further down -->
      <contexts>
       <context id="code" title="Changes to the Code Base"/>
       <context id="docs" title="Changes to Documentation"/>
      </contexts> 

      <changes>
        <!-- Add new releases here -->
        <release version="0.1" date="25 May 2005">
          <notes>
            <p>Notes pertaining to this release.</p>
          </notes>

          <action dev="SNM" type="fix" context="code"
           fixes-bug="85" due-to="Børre Gaup">
            Short description of what was fixed.
          </action>
          <!-- Add more actions here -->
        </release>
      </changes>

      <todo>
        <!-- 'actions' can have priorities 'high', 'medium' or 'low' -->
        <actions priority="high">
          <action context="code" dev="open">
            Short description of feature request here.
          </action>
        </actions>
      </todo>

    </status>

Each of the main sections above will be described further below.

developers
----------

The format is straight-forward. The ID is used further down in the
listed actions, to identify the developer behind that action.

contexts
--------

Each context defines a logical domain of work. The ID is used in the
actions to classify each action with respect to the defined domains, and
the title is used as section titles for each domain in the generated
page. The contexts predefined by the project-info plugin are the
following:

      <contexts>
       <context id="code"   title="Changes to the Code Base"/>
       <context id="docs"   title="Changes to Documentation"/>
       <context id="admin"  title="Changes to Project Administration"/>
       <context id="design" title="Changes to Design"/>
       <context id="build"  title="Changes to Build"/>
      </contexts> 

This is a reasonable set, but we are of course free to add, remove or
redefine this list at will.

changes/release
---------------

All changes are found within the `<changes>` element, and further
encapsulated in one or more `<release>` elements. The following
attributes are available:

-   **changes/@title:**  
    If used, will give the title of the page. If not, the text "History
    of Changes" will be used.
-   **release/@version:**  
    The version number of the release.
-   **release/@date:**  
    The date of the release.

action
------

Within each release, action elements describe each change or action
taken. The following attributes are available:

-   **@context:**  
    One of the contexts defined earlier
-   **@type:**  
    The type of change. By default, the following action types are
    recognised by Forrest:
    -   add
    -   fix
    -   remove
    -   update
    -   hack

    *Recognised by Forrest* means that the action types are given icons
    by Forrest, as shown above. For other action types, Forrest will
    look for jpeg images named after the action type, thus
    `images/type.jpg`, where `type` should be replaced by the actual
    type string.
-   **@dev:**  
    The ID of the developer behind the action.
-   **@due-to:**  
    The name of an external person helping out with an issue.
-   **@due-to-email:**  
    The e-mail of an external person helping out with an issue.
-   **@fixes-bug:**  
    The ID of the bug(s) fixed as numbered in Bugzilla, separated with
    commas. If forrest.properties is configured correctly (it is now),
    Forrest will automatically create links to the bugs listed. We only
    have to add the bug numbers.

todo/actions
------------

All todo items are found within the `<todo>` element, and further
encapsulated in one or more `<actions>` elements. The following
attributes are available:

-   **todo/@title:**  
    If used, will give the title of the page. If not, the text "Todo
    List" will be used.
-   **actions/@priority:**  
    An arbitrary string describing the priority. Will be used as section
    title for all contained actions.

action
------

Only the following attributes are available for `<action>` elements
within the `<todo>` element:

-   **@context:**  
    One of the contexts defined, or an arbitrary string.
-   **@dev:**  
    The developer responsible for the task.
