#!/usr/bin/env bash
# Repo-specific prep run by the shared docs workflow (giellalt/.github) before
# the Jekyll build, via its `prebuild_script` input. Nothing here is generic
# enough to belong in the shared workflow itself.
set -euo pipefail

echo "docs-prebuild: fetching GitHub repo data"
bundle exec ruby fetch_github_repos.rb

# Uncomment once Slidev presentations exist in this repo. The shared workflow
# already has Ruby (and the shared Gemfile) set up by the time this script
# runs; install Node yourself here since most repos don't need it.
#
# npm install -g @slidev/cli @slidev/theme-default @slidev/theme-seriph playwright-chromium
# CI=true NODE_ENV=production ./build-slidev.sh
