# Lucene 
This information is useful only to project members and others having
access to our cvs repository. Do not try to update or create a lucene
index on the public site. It won't do any harm, but it won't do any good
either. The public site is fully searchable with Google.

Introduction
------------

To help us use the built-in search engine, and make it easier to
remember the existence of it, the basic links are now available in the
menu when opening the Tech Doc tab.

The index must be regenerated with regular intervals or after major
changes to the documentation, to stay up-to-date. (Actually, to be
completely up to date, it has to be regenerated each time there is a
change to any document within the `gt/doc/` hierarchy.)

It might be a good idea to let forrest be running all the time - any
changes to the documentation will be picked up automatically as you
update from cvs (with the exception of changes to `site-frags.xml` and
`tabs-frags.xml` - you need to `touch` the corresponding main files
`site.xml` and `tabs.xml` for the changes to be picked up).

Searching your local Forrest
----------------------------

Our public home page is searched with Google, but you can still search
the local copy of Forrest with the latest document updates. The default
search box is now Lucene based. The only thing to remember is to update
the Lucene index:

<http://localhost:8888/lucene-update.html> — or use the menu entry to
the left.

The above link, as well as the menu entry, will only work for local
instances of Forrest when started with default settings using the
command `forrest run`.

After the index has been (re)generated, just type in your search string
in the search box at the top of every page, and press Enter.
