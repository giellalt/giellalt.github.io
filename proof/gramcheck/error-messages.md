Error messages
==============

Error messages are a central part of the grammarchecker. Each **error
tag** (the ones starting with `&`) must have one and only one **error message**, but
the same error message may be used for several error tags.

The tags are written in the files `errors-en.ftl` and `errors-xxx.ftl`
(xxx being the ISO 639-1 (if it exists) or ISO 639-3 code for the
target language).

Each tag must be declared in the `errors.json` file (tbw: one-many corr).

- [Syntax for .ftl files](https://projectfluent.org/fluent/guide/index.html)


