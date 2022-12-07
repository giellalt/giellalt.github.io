# Shared resources

There are a number of repositories for shared linguistic resources, such as names,
digits, symbols and punctuation. These resources are named according to target
language group, or after the language from which the resource is mainly taken.

This is a very recent addition, and more details about how to set up and use
shared resources will be added soon.

There is also **giella-core**, which contains shared build instructions and
utilities for all languages.

# List of repos with shared resources

{% assign shared_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'shared-'" | jsonify %}

<div id="shared">
</div>

# Core repository

{% assign core_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'giella-'" | jsonify %}

<div id="core">
</div>

<script src="/assets/js/langtable.js"></script>

<script>
const domProdLangs = document.querySelector('#shared');
domProdLangs.appendChild(addRepoTable({{shared_repos}}, 'shared-', ['maturity']))
</script>

<script>
const domCore = document.querySelector('#core');
domCore.appendChild(addRepoTable({{core_repos}}, 'giella-', ['maturity']))
</script>
