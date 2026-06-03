# GiellaLT documentation

This is the repository for the site [giellalt.github.io](https://giellalt.github.io).
It contains technical and developer documentation for everything related to the GiellaLT infrastructure, linguistic work using this infrastructure, keyboard, proofing tools and machine translation development, and much more.

Feel free to fork and send us pull requests with improvements and corrections.

## Run the site on your own machine

Requirements: [rbenv](https://github.com/rbenv/rbenv) with Ruby 3.3 and Node.js 20+.

```sh
bundle install
bundle exec ruby fetch_github_repos.rb
```

Then for live reload during development:

```sh
bundle exec jekyll serve --watch --verbose
```

Or for a full production-like build with search:

```sh
bundle exec jekyll build --verbose && npx pagefind --site _site && npx serve _site -p 4001
```

See [DEVELOPING.md](DEVELOPING.md) for more detail.
