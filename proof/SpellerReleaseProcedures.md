# Speller release procedure

1. update the speller version number constant `SPELLERVERSION` in `configure.ac`, using [semantic versioning](https://semver.org):
    - MAJOR version = incompatible changes, and going from beta to release (from `0.x.x` to `1.x.x`)
    - MINOR version = new / more words
    - PATCH version = actual bug fixes
1. make sure that the new version is also recorded in `manifest.toml`, either by editing manually, or by running `make` after changing `configure.ac`
1. commit the changes in both `configure.ac` and `manifest.toml`
1. create a new GIT tag for the release, using the following pattern:
    - `v` + version string from previous step. If the version string is `1.2.3`, the tag should be `v1.2.3`
1. push commits and tag to GitHub.

CI + CD will do everything, including releasing the updated speller to the pahkat server, as long as the GIT tag is properly set.

The pahkat client installed as part of Divun Manager will then ensure that the new speller version is automatically installed on user machines on the next server poll.

# Re-release on error

If something caused the CI or CD to fail, fix the the issue, and add the **same** GIT tag to the new revision, the one containing the bug fixes. You will be told there already exists an identical tag, so force push to override the old one.

As long as the new version did not reach users, there is no need to update the version string. But if the buggy version DID get released, then you MUST start from the top, and create a new version.
