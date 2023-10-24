# Shared resources

There are a number of repositories for shared linguistic resources, such as names,
digits, symbols and punctuation. These resources are named according to target
language group, or after the language from which the resource is mainly taken.

This is a very recent addition, and more details about how to set up and use
shared resources will be added soon.

There is also **giella-core**, which contains shared build instructions and
utilities for all languages.

Finally there is a section listing all template repositories. These are used partly
as a starting point for new repositories, partly to update all existing repositories
with new features or general improvements.

# List of repos with shared resources

{% assign shared_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'shared-'" | jsonify %}

<div id="shared">
</div>

# Core repository

{% assign core_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'giella-'" | jsonify %}

<div id="core">
</div>

# Templates

{% assign template_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'template-'" | jsonify %}

<div id="templ">
</div>

<script src="/assets/js/langtable.js"></script>

<script>
const domShared = document.querySelector('#shared');
domShared.appendChild(addRepoTable({{shared_repos}}, 'shared-', ['maturity']))
</script>

<script>
const domCore = document.querySelector('#core');
domCore.appendChild(addRepoTable({{core_repos}}, 'giella-', ['maturity']))
</script>

<script>
const domTempl = document.querySelector('#templ');
domTempl.appendChild(addTemplateTable({{template_repos}}, 'template-', []))
</script>
