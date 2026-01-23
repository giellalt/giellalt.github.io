# Speller release procedure

## Speller release step by step

**TL;DR** [Push the tag first, then the branch](https://github.com/divvun/maintenance2023/blob/main/inventory/how-the-pieces-fit-together.md#releasing-versions-and-tagging)

1. update the speller version number constant `SPELLERVERSION` in `configure.ac`, using [semantic versioning](https://semver.org):
   - MAJOR version = incompatible changes, and going from beta to release (from `0.x.x` to `1.x.x`)
   - MINOR version = new / more words
   - PATCH version = actual bug fixes
1. make sure that the new version is also recorded in `manifest.toml`, either by editing manually, or by running `make` after changing `configure.ac`
1. commit the changes in both `configure.ac` and `manifest.toml` (but
   **do not push yet**
1. create a new GIT tag for the release, using the following pattern:
   - `speller-` + language code + `/` +`v` + version string from previous step. If the version string is `1.2.3` and the language code is `fao`, the tag should be `speller-fao/v1.2.3`
1. push tag **TODO: Document how**
1. push commits
1. check for non-nightly pushes of the released language in this channel:
   <https://giella.zulipchat.com/#narrow/stream/124606-github/topic/pahkat.2Euit.2Eno-index.20.2F.20main>
1. **Only when a non-nightly push of your language appears in the above
   channel:** bump the bugfix number, e.g. from `1.2.3` t0 `1.2.4` in both
   `configure.ac` and `manifest.toml`. This is to prepare for the next release
   (which normally is either a bugfix or a minor release), and will ensure that
   everyone on the nightly channel receive updates automatically. If the release
   didn't go through, then see below on re-release before bumping the bugfix
   number.

CI + CD will do everything, including releasing the updated speller to the pahkat server, as long as the GIT tag is properly set.

The pahkat client installed as part of Divun Manager will then ensure that the new speller version is automatically installed on user machines on the next server poll.

### Re-release on error

If something caused the CI or CD to fail, fix the the issue, and add the **same** GIT tag to the new revision, the one containing the bug fixes. You will be told there already exists an identical tag, so force push to override the old one.

As long as the new version did not reach users, there is no need to update the version string. But if the buggy version DID get released, then you MUST start from the top, and create a new version. That should be a bugfix version.

## Tags, version strings and Divvun Manager channels

[Divvun Manager](https://divvun.org) has three channels to install from, selectable from the preferences (the actual text may be localised):

- Stable
- Beta
- Nightly

The channels are populated as follows:

### Stable

Any keyboard or language model commit that is:

- git-tagged with version number **at least** `v1.0.0` or **higher** (see above)
- a similar version string in:
  - spellers: `configure.ac` & `manifest.toml`
  - keyboards: `*.kbdgen/targets/*.yaml`

### Beta

Any keyboard or language model commit that is:

- git-tagged with version number **below** `v1.0.0` (see above)
- a similar version string in:
  - spellers: `configure.ac` & `manifest.toml`
  - keyboards: `*.kbdgen/targets/*.yaml`

### Nightly/Developer

Any keyboard or language model commit pushed to GitHub. That is, Nightly will always contain the
latest successful CI/CD build.

## Automatic updates in Divvun Manager

When an update is released, in any of the channels according to the rules above, older packages will be updated automatically from the active channel **as long as the version number is higher**. The version number comparison does **not** take into account suffixes like `-nightly`, so to ensure proper automatic installation, make sure to bump the version number after a regular (beta or stable) release.
