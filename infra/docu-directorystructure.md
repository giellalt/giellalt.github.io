# Directory structure for the source code

Documentation directories:

- _doc/_ = Documentation directory, which contains this documentation,
  and has the following subdirectories:
  - _admin/_ = Contains files related to project administration
  - _infra/_ = Documents how to set up users and machines and
    contains information on how the servers are set up.
  - _lang/_ = Contains documentation on the lexica and language
    files for the Saami languages.
  - _ling/_ = Contains documentation on topics common to all
    languages.
  - _tools/_ = Howtos for the tools used by the project.
- _script/_ = script files, with _cgi-bin_, _emacs_ and _testing_ as
  subdirectories, along with other script files
- _www/_ = directory for web-related issues

Forrest file structure:

The project specific documentation are in the xtdoc module, the divvun
project's files are in the sd directory, the university project's files
are in the gtuit directory. The common documentation and source code of
these two projects is in the gt svn module.
