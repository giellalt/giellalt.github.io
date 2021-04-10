# Language models

(WIP - most documentation links go to nowhere / 404. All source links are working.)

Private repositories are not listed.

{% assign lang_repos = site.github.public_repositories %}

<div id="languge_container"></div>

<script src="/assets/js/langtable.js"></script>
<script>
const domContainer = document.querySelector('#languge_container');
domContainer.appendChild(langTables({{lang_repos|jsonify}}))
</script>
