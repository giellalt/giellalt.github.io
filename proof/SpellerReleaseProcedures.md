# Speller release procedure

1. update the speller version number in `configure.ac`, using [semantic versioning](https://semver.org):
    - MAJOR version = incompatible changes, and going from beta to release (from `0.x.x` to `1.x.x`)
    - MINOR version = new / more words
    - PATCH version = actual bug fixes
1. create a new GIT tag for the release, using the following pattern:
    - `v` + version string from previous step. If the version string is `1.2.3`, the tag should be `v1.2.3`
1. push commits and tag to GitHub.

CI + CD will do everything, including a release to the pahkat server, as long as the tag is properly set.

The pahkat client installed as part of Divun Manager will then ensure that the new speller version is automatically installed on user machines on the next server poll.
