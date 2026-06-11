#!/usr/bin/env ruby
# Fetches all public repos for the giellalt org and writes them to
# _data/github_repos.json for use during Jekyll builds (both local and CI).
#
# Usage: bundle exec ruby fetch_github_repos.rb
#   Optionally set JEKYLL_GITHUB_TOKEN to avoid the 60 req/hr anonymous
#   rate limit, though the script only makes ~5 paginated calls so it is
#   unlikely to be needed in practice.
#
# WHY THIS EXISTS
#
# Several pages on this site (LanguageModels, DictionaryResources, SpellerOverview,
# etc.) assign site.github.public_repositories to a Liquid variable and pass it to
# JavaScript as inline JSON. Without this script, jekyll-github-metadata handles
# that by fetching the full Octokit Repository object for each repo. When Liquid
# serialises those objects via |jsonify, it triggers lazy-loaded per-repo API calls
# for releases and contributors — roughly 2 extra calls per repo. With ~470 public
# repos in the giellalt org that adds up to ~940 additional API calls on top of the
# initial paginated org repos fetch. This causes rate limiting locally and slow
# builds on CI.
#
# The JavaScript that consumes the data only ever accesses three fields:
#   repo.name, repo.html_url, repo.topics
#
# So this script fetches the repo list once (a handful of paginated calls), strips
# each object down to those three fields, and writes the result. The file is picked
# up by _plugins/github_cache.rb, which overwrites site.github before any Liquid
# template runs, preventing jekyll-github-metadata from making any API calls at all.
#
# Locally the file persists between builds (it is gitignored). On CI it is
# regenerated fresh each run by the "Fetch GitHub repo cache" workflow step.

require 'octokit'
require 'json'
require 'fileutils'

token = ENV['JEKYLL_GITHUB_TOKEN']

client = Octokit::Client.new(token ? { access_token: token } : {})
$stderr.puts 'Note: running unauthenticated (set JEKYLL_GITHUB_TOKEN to raise rate limit)' unless token
client.auto_paginate = true

$stderr.puts 'Fetching public repos for giellalt...'
repos = client.org_repos('giellalt', type: 'public', sort: 'full_name', per_page: 100)
$stderr.puts "Found #{repos.count} repos"

slim = repos.map { |r| { 'name' => r.name, 'html_url' => r.html_url, 'topics' => r.topics } }
FileUtils.mkdir_p('_data')
File.write('_data/github_repos.json', JSON.generate(slim))
$stderr.puts "Saved to _data/github_repos.json (#{File.size('_data/github_repos.json') / 1024}KB)"
