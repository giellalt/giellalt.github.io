# Shared language model resources

There are a number of repositories for shared linguistic resources, such as names,
digits, symbols and punctuation. These resources are named according to target
language group, or after the language from which the resource is mainly taken.

This is a very recent addition, and more details about how to set up and use
shared resources will be added soon.

# List of repos with shared resources

{% assign shared_repos = site.github.public_repositories|jsonify %}

<div id="shared" class="twocolumn" markdown="1">
</div>

<script src="/assets/js/langtable.js"></script>

<script>
const domProdLangs = document.querySelector('#shared');
domProdLangs.appendChild(addRepoTable({{shared_repos}}, 'shared-', ['']))
</script>
