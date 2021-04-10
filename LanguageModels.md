# Language models

(WIP - most documentation links go to nowhere / 404. All source links are working.)

Private repositories are not listed.

{% assign lang_repos = site.github.public_repositories %}

## Production languages - test

<div id="prod_languges"></div>

## All languages

<div id="languge_container"></div>

<script src="/assets/js/langtable.js"></script>
<script>
const domContainer = document.querySelector('#languge_container');
domContainer.appendChild(langTables({{lang_repos|jsonify}}))
</script>

<script>
const domContainer = document.querySelector('#prod_languges');
domContainer.appendChild(addTable({{lang_repos|jsonify}}, 'lang-', ['maturity-prod']))
</script>
