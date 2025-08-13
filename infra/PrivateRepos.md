# Private repos

Some repos are private, for various reasons. This is true for at least `lang-` and `corpus-` repos.

## CI/Buildkite

The CI infra is built on [Buildkite](https://buildkite.com/). It handles private repos just as fine as public repos, but the CI status and build reports will only be accessible/viewable for those with GitHub access to those repos.

## [Zulip](https://zulip.com)

To keep all GitHub activies private, automatic posts from GitHub (commits, etc) and Buildkite sent to our collaboration and messaging tool [Zulip](http://giella.zulipchat.com/) are always posted to private channels, only visible to those working with those repos/languages. If you need access to a private repo and the corresponding Zulip channels, contact one of the administrators.

Most Zulip channels are named using ISO 639-3 codes only, like [#sme](https://giella.zulipchat.com/#narrow/channel/124552-sme) and [#sma](https://giella.zulipchat.com/#narrow/channel/124580-sma). Channels for private repos are named adding a `-priv` string to the ISO 639 code.
