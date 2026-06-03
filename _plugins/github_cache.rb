require 'json'

# Overrides site.github with cached data from _data/github_repos.json when present,
# preventing all GitHub API calls during local development.
# On CI the file doesn't exist, so jekyll-github-metadata runs normally.
Jekyll::Hooks.register(:site, :pre_render) do |site, _payload|
  cache_file = File.join(site.source, '_data', 'github_repos.json')
  next unless File.exist?(cache_file)

  cached_repos = JSON.parse(File.read(cache_file))

  site.config['github'] = {
    'public_repositories' => cached_repos,
    'repository_url'      => 'https://github.com/giellalt/giellalt.github.io',
    'repository_nwo'      => 'giellalt/giellalt.github.io',
    'owner_url'           => 'https://github.com/giellalt',
    'owner_name'          => 'GiellaLT'
  }

  Jekyll.logger.info 'GitHub cache:', "Loaded #{cached_repos.count} repos from _data/github_repos.json"
end
