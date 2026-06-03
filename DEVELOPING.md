# Local Development

## Requirements

- [rbenv](https://github.com/rbenv/rbenv) with Ruby 3.3.11 (`rbenv install 3.3.11`)
- Node.js 20+ (for Pagefind)

## Setup

```sh
bundle install
```

rbenv will pick up the required Ruby version from `.ruby-version` automatically.

## Fetch the GitHub repo cache

The site renders several pages (speller overview, keyboard layouts, dictionary resources, etc.) using live data from the GitHub API. To avoid slow and rate-limited API calls during local builds, fetch the data once and cache it:

```sh
bundle exec ruby fetch_github_repos.rb
```

This saves a slim copy of all public giellalt repos to `_data/github_repos.json`. The file is gitignored — it stays local. On CI the data is fetched fresh each run by a dedicated workflow step.

The script only makes ~5 paginated API calls so it works without authentication. Re-run it whenever you want fresher repo data.

## Build and preview

```sh
bundle exec jekyll build --verbose && npx pagefind --site _site && npx serve _site -p 4001
```

Or for live reload during theme development (no Pagefind index):

```sh
bundle exec jekyll serve --watch --verbose
```

## Testing with the local theme

This is only needed if you are also working on the [jekyll-theme-giellalt](https://github.com/giellalt/jekyll-theme-giellalt) theme itself. For normal content work, the remote theme is fetched automatically and you can skip this section.

If you have the theme repo cloned as a sibling directory (`../jekyll-theme-giellalt/`), create a gitignored `_config.local.yml` in the repo root:

```yaml
remote_theme: ../jekyll-theme-giellalt/
```

Then pass both configs when building or serving:

```sh
bundle exec jekyll serve --watch --config _config.yml,_config.local.yml
```

This overrides `remote_theme` for local builds without touching the committed config.

## How the GitHub repo pre-fetch works

`_plugins/github_cache.rb` hooks into Jekyll's `pre_render` phase. When `_data/github_repos.json` exists, it overwrites `site.github` with the pre-fetched data before any Liquid template runs, preventing all API calls during the build.
