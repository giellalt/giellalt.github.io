# Language models

(WIP - most documentation links go to nowhere / 404. All source links are working.)

Private repositories are not listed.

Grouped according to [maturity:](https://github.com/divvun/giellalt-svn2git/blob/master/doc/Aftermath.md#language-model-maturity-classification)

{% assign lang_repos = site.github.public_repositories %}

## ![Maturity: Production](https://img.shields.io/badge/M-Production-brightgreen.svg) languages

<div id="prod_languges" class="twocolumn" ></div>

## ![Maturity: Beta](https://img.shields.io/badge/M-Beta-yellow.svg) languages

<div id="beta_languges" class="twocolumn" ></div>

## ![Maturity: Alpha](https://img.shields.io/badge/M-Alpha-red.svg) languages

<div id="alpha_languges" class="twocolumn" ></div>

## All languages

<div id="languge_container"></div>

<script src="/assets/js/langtable.js"></script>
<script>
const domContainer = document.querySelector('#languge_container');
domContainer.appendChild(langTables({{lang_repos|jsonify}}))
</script>

<script>
const domProdLangs = document.querySelector('#prod_languges');
domProdLangs.appendChild(addTable({{lang_repos|jsonify}}, 'lang-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_languges');
domBetaLangs.appendChild(addTable({{lang_repos|jsonify}}, 'lang-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_languges');
domAlphaLangs.appendChild(addTable({{lang_repos|jsonify}}, 'lang-', ['maturity-alpha']))
</script>
