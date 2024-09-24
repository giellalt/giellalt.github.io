# Gïelese client development

**For information on Phonegap, see phonegap/README.md**

## Getting started notes

The frontend client uses _Node.js_'s environment, and specifically _Brunch.io_
for compilation and project structure management. In order to prepare the
development environment, first install _Node.js_ and _npm_ (Node Package
Manager), then:

1.) In _~/main/apps/aajege/src/sma-client/_ run _npm install_.
2.) As a convenience, add _node_modules/.bin/_ to your _$PATH_ variable

Familiarize yourself a little with _Brunch.io_, but generally speaking you'll
be most interested in:

    brunch watch --server

Buildin for release on the other hand will require:

    brunch build --production

This will minify everything to prepare it for web or inclusion in apps.

## Languages required

- Coffeescript and Literate Coffeescript
- CSS is written in Stylus: <http://learnboost.github.io/stylus/>
- Templates are in eco: <https://github.com/sstephenson/eco>. Someone could
  change this if they feel the need, because eco may be on the way out.

## Project structure

This is just a short overview to the most important files and structure. For
details, look at any source file For details, look at any source file

- _config.coffee_: handles brunch configuration, file concatenation order
  overrides, minimization, and managing source directories.

- _package.json_: build dependencies and installation configuration for _npm_.

- _app/_: Source!

## app/ structure

- _application.coffee_: the main application file, handles initialization of
  all the basic stuff, routers, client-side database models and server/client
  synchronization.

- _routers/routers.coffee_: URL routing and view processing. New views need to
  be set up here.

- _views/_: The views directory should include one folder per view, each
  containing its own _templates/_ and _styles/_ folder. The build process
  automatically finds where to include new templates and styles, and there is
  no need to include them anywhere. Any general view documentation should be
  included in the main view file in each directory.

- _models/_: one file per model or collection. Models should be well
  documented, if they aren't, they need to be.

## Data structure / Models intro

The database structure data is fetched from the server on app initialization
and stored locally. (This means, word information, word relations to media
files, etc.). Some user data is more or less always live, and data on user
activity is synced automatically when a connection is available.

Backbone.js handles data storage, and generates models and collections for
searching htesse.

**General note on Collections and data fetching**

TODO: @fetch method; @server.offline_media vs. @server.path

### Concepts

_Concept_ is a general term for learning information. It may be a word, an
image or an audio file, but the data is all heavily cross-linked so that it is
easy to find a word for an image, or a related sound file.

### Categories / CategoryList

Maintains the main screen category list, as well as is used for an
organizational tool for question construction.

### Question

Several defaults are provided which happen to line up with the progression in
Gïelese, however question types are possible to be defined on the server side.
These are then fetched by the client for gameplay.

### UserProgression

## The complexity of rendering exercises...
