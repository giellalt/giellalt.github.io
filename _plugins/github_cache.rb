require 'json'

# Overrides site.github with cached data from _data/github_repos.json when present,
# preventing all GitHub API calls during both local development and CI.
# The hash must include all site.github.* fields the theme reads.
#
# `site.github` isn't a real SiteDrop field, so both reads and writes of it
# fall through to site.config['github'] — whichever :pre_render hook runs
# LAST wins. jekyll-github-metadata's own pre_render hook (site_github_munger)
# unconditionally overwrites site.config['github'] with a live, API-backed
# drop. Whether that hook is registered before or after this one depends on
# *when* the gem gets required, which in turn depends on Gemfile bundler
# group placement — e.g. it's eager (via the :jekyll_plugins group) in a
# repo-owned Gemfile but lazy (via _config.yml's `plugins:` list) in the
# shared giellalt/.github build Gemfile. Rather than depend on that, force
# this hook to run after every default-priority hook — including
# jekyll-github-metadata's — regardless of registration order.
Jekyll::Hooks.register(:site, :pre_render, priority: :low) do |site, _payload|
  cache_file = File.join(site.source, '_data', 'github_repos.json')
  next unless File.exist?(cache_file)

  cached_repos = JSON.parse(File.read(cache_file))

  site.config['github'] = {
    'public_repositories' => cached_repos,
    'repository_url'      => 'https://github.com/giellalt/giellalt.github.io',
    'repository_nwo'      => 'giellalt/giellalt.github.io',
    'owner_url'           => 'https://github.com/giellalt',
    'owner_name'          => 'GiellaLT',
    'is_project_page'     => true,
    'is_user_page'        => false,
    'default_branch'      => 'main'
  }

  Jekyll.logger.info 'GitHub cache:', "Loaded #{cached_repos.count} repos from _data/github_repos.json"
end
