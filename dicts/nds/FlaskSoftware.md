# Flask software


This text is taken from [Johnson, Antonsen and Trosterud 2013](http://www.ep.liu.se/ecp/085/010/ecp1385010.pdf)


# Software


## User Interface


Thanks to the open-source community, there are numerous resources available
which make it easy to produce designs with good cross-browser compatibility.
Previously, troubleshooting these issues for each individual browser would take
time, when one would rather focus on implementation and basically, producing
usable software. 


In this case, we used [Twitter Bootstrap](http://twitter.github.com/bootstrap) 
to get the most
for less, and it has resulted in an easy to use and very minimal layout. 
The layout works simultaneously on all the major browsers
for desktop operating systems, as well as the most popular mobile browsers. 
Thus, there is no real need to produce code specific to
Apple's iOS or the Android operating system, or pay for the licensing setup
involved with iOS development, and we get all of these things for free.




## Server Architecture


Having to not worry about the design meant that there was more time left for
developing functionality. Our dictionary is based on
[Flask](http://flask.pocoo.org/), a light, and flexible web
framework for Python. 


As mentioned above, the lexical data used in this application is stored in an
XML format, with one file per language pair, per direction (thus making
separate files for language 1 to language 2, and language 2 to language 1).
These files range in size from 2MB to 5MB, and are used in the live site,
without the need for a relational database to store the data.  On our server,
queries end up being quite fast, but to ensure that this continues to be true
for larger dictionaries, we have also used one of the quickest XML libraries
for Python currently available, [lxml](http://lxml.de), 
[benchmarks](http://lxml.de/performance.html). 
This allows us to
simply update the files, and restart the service, and any new lexical entries
are immediately available to users.


Because the application relies on external tools for lemmatisation and tagging,
communication between these processes are stored in an in-memory cache. All
analyses are cached by lemma, and all generated forms are cached by lemma and
tag. Thus, when a future query includes a compound word containing one of these
lemmas, we can just retrieve base forms from the cache, instead of sending them
directly to the external tools.


The need for a cache arose in response to the start-up time for some of the larger
FSTs, however once running, actual lookups are extremely fast. For
now caching is enough, however if usage and load indicate that optimisation is
necessary, one possible solution is to keep the external tools running in
separate processes, and simply communicate with them via sockets. There are a
variety of solutions for this, such that the work necessary would be minimal.


Our previous wordform dictionaries demanded installation in two steps:
installing a separate dictionary program (StarDict for Windows and Linux; and
the preinstalled Dictionary.app for Mac OS X), and then downloading and installing
the linguistic files in the dictionary program.  New and updated dictionary
versions demanded new downloading and installing.  Our new, web-based approach
naturally avoids all of this, as users only require the URL.  The web
dictionary may also be updated by the providers at any time, without the need
for users to be aware of and perform the updates themselves.


Compared to our web dictionary, the wordform dictionaries had one major
advantage: they could be used to click on words in any application running
within the operating system in order to get an analysis and definition, whereas
the similar functionality provided in the web dictionary only works on web
pages within the browser. However, newer versions of Mac OSX have lost a
user-friendly means of installing additional dictionaries to the preinstalled
dictionary application, as such, this has become a point in favor of web-based
solutions.


There is also an advantage for the providers of the dictionary, programmers and
linguists alike. With the previous wordform dictionaries, new versions of the
software (such as with StarDict), required adjustments in the format of the
dictionary files, and we would often find ourselves concerned over whether we
should add more linguistic content, or aim for smaller file sizes. As such,
running the dictionary on a server with already existing lexicons is a big step forward.


Having a server-based system also allows us to pay attention to actual usage of
the systems. As such, we log all incoming queries along with their
results, in order to detect areas where the dictionary needs expansion, and
these updates are then available to users as they are made.


# Dictionary API


In addition to being searchable via a form in the web interface, we provide
detailed lexical entries in an easily linkable HTML format, and in a more
bare-bones format, JSON (JavaScript Object Notation). JSON is a widely adopted,
and open standard for communication between applications, specifically with a
focus on web applications. The intent here is that data is provided not just
for our web-based dictionary via the interface that we provide, but that it may
also be used within external applications, on other websites, and even
potentially in mobile services.


The data is exposed in a couple of public-facing API endpoints or URL paths,
more or less following REST (Representational State Transfer) architecture. One
of the endpoints, which provides detailed word entries with inflectional
paradigms has already been included in MultiDict's
[Wordlink](http://multidict.net/multidict/), a reading
comprehension tool that includes many other languages and dictionaries.
WordLink is quite nice, but naturally, we had some of our own designs for how
to use this API.


# Example Applications


## Wordpress Plugin and Cross-browser Bookmarklet


Two of the learning tools already constructed for North Saami are $Kursa$ and
$Oahpa$.  $Kursa$ is a free, multimedia-rich set of online course materials in North Saami,
containing lessons with text, and audio recordings, which are implemented in
[WordPress](http://www.wordpress.org/), a free and open-source
blogging tool. 


To go with these learning materials, we have created a plugin for WordPress
written in JavaScript, jQuery, and Twitter Bootstrap, which provides access to
lemmatisation, compound analysis and lexicon lookup. Users simply
`Alt/Opt+Double Click` a word, and it is highlighted with a text-bubble
appearing below that contains word translations and wordform analysis
mobile. Users can quickly and easily look up as many words as they need
to comprehend a text, which erases one of the barriers to reading in a new
language, namely: the need to frequently look up words in a dictionary, while
being unacquainted with potential "dictionary" word forms.


The modular nature of the core library within the plugin allows it to be inserted
into several other potential situations with ease. For example, it could be
included on a specific page or website, or inserted via a web browser plugin in
any page.  We have ensured that the library works in the most commonly used,
and current web browsers, as such, this functionality is available on Windows,
Mac OS X and Linux; in Internet Explorer, Firefox, Chrome, Opera, and Safari. 


In addition to plugin for *Kursa*, we have produced a cross-browser solution
which is similar to a browser extension, but instead, is accessible via a
*bookmarklet*, which is a bookmark providing functionality, instead of a
link to a website. As it turns out, this option has been much more preferable
to developing (and also convincing users to install) browser specific plugins,
and "installation" is simply a drag-and-drop affair. Thus, when on a page they
wish to read, users may simply click the bookmarklet, which downloads and
includes the plugin source in the HTML document structure facing the user. Now
the world of news, blogs, or even Facebook, is accessible in all of the
language pairs that we support.






