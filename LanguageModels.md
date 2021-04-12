# Language models

(WIP - most documentation links go to nowhere / 404. All source links are working.)

Private repositories are not listed.

Grouped according to the [maturity](MaturityClassification.html) of the available resources.

{% assign lang_repos = site.github.public_repositories %}

## Production language resources ![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)

<div id="prod_languges" class="twocolumn" ></div>

## Beta language resources ![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)

<div id="beta_languges" class="twocolumn" ></div>

## Alpha language resources ![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)

<div id="alpha_languges" class="twocolumn" ></div>

## Experimental language resources ![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)

<div id="exper_languges" class="twocolumn" ></div>

## Language resources of undefined maturity ![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)

<div id="undef_languges" class="twocolumn" ></div>

# All languages

<div id="languge_container"></div>

<script src="/assets/js/langtable.js"></script>
<script>
const domContainer = document.querySelector('#languge_container');
domContainer.appendChild(langTables({{lang_repos|jsonify}}))
</script>


<script>
const domProdLangs = document.querySelector('#prod_languges');
domProdLangs.appendChild(addUnorderedList({{lang_repos|jsonify}}, 'lang-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_languges');
domBetaLangs.appendChild(addUnorderedList({{lang_repos|jsonify}}, 'lang-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_languges');
domAlphaLangs.appendChild(addUnorderedList({{lang_repos|jsonify}}, 'lang-', ['maturity-alpha']))
</script>

<script>
const domExperLangs = document.querySelector('#exper_languges');
domExperLangs.appendChild(addUnorderedList({{lang_repos|jsonify}}, 'lang-', ['maturity-exper']))
</script>

<script>
const domUndefLangs = document.querySelector('#undef_languges');
domUndefLangs.appendChild(addNegTable({{lang_repos|jsonify}}, 'lang-', ['maturity-exper', 'maturity-beta', 'maturity-alpha', 'maturity-prod']))
</script>
