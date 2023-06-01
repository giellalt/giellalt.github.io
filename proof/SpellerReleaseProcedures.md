# Speller release procedure

# Speller release step by step

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

## Re-release on error

If something caused the CI or CD to fail, fix the the issue, and add the **same** GIT tag to the new revision, the one containing the bug fixes. You will be told there already exists an identical tag, so force push to override the old one.

As long as the new version did not reach users, there is no need to update the version string. But if the buggy version DID get released, then you MUST start from the top, and create a new version.

# Tags, version strings and Divvun Manager channels

[Divvun Manager](https://divvun.org) has three channels to install from, selectable from the preferences (the actual text may be localised):

- Stable
- Beta
- Nightly

The channels are populated as follows:

## Stable

Any keyboard or language model commit that is:

- git-tagged with version number **at least** `v1.0.0` or **higher** (see above)
- a similar version string in:
    - spellers: `configure.ac` & `manifest.toml`
    - keyboards: `*.kbdgen/targets/*.yaml`

## Beta

Any keyboard or language model commit that is:

- git-tagged with version number **below** `v1.0.0` (see above)
- a similar version string in:
    - spellers: `configure.ac` & `manifest.toml`
    - keyboards: `*.kbdgen/targets/*.yaml`

## Nightly

Any keyboard or language model commit pushed to GitHub. That is, Nightly will always contain the
latest successful CI/CD build.

# Automatic updates in Divvun Manager

When an update is released, in any of the channels according to the rules above, older packages installed **from the same channel** will be updated automatically: a beta release will automatically update an older, installed beta release of the same package, a stable release will automatically update an older stable release, and so on.
