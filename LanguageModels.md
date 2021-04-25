# Language models

(WIP - most documentation links go to nowhere / 404. All source links are working.)

Private repositories are not listed.

# Grouped according to maturity of the resources

The maturity level is taken from a GitHub topic on each repo, one of: `maturity-prod`, `maturity-beta`, `maturity-alpha` and `maturity-exper`.

{% assign lang_repos = site.github.public_repositories|jsonify %}

## Production language resources [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](MaturityClassification.html)

<div id="prod_languges" class="twocolumn" ></div>

## Beta language resources [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](MaturityClassification.html)

<div id="beta_languges" class="twocolumn" ></div>

## Alpha language resources [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](MaturityClassification.html)

<div id="alpha_languges" class="twocolumn" ></div>

## Experimental language resources [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](MaturityClassification.html)

<div id="exper_languges" class="twocolumn" ></div>

## Language resources of undefined maturity [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](MaturityClassification.html)

<div id="undef_languges" class="twocolumn" ></div>

# Other language groupings

Other groupings of languages can be added ad lib, as long as the languages are topic-tagged in the GitHub repo, and the same tag text is used for filtering the repos. For an example, see how the maturity groups are made.

<script src="/assets/js/langtable.js"></script>
<script>
const domProdLangs = document.querySelector('#prod_languges');
domProdLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_languges');
domBetaLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_languges');
domAlphaLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['maturity-alpha']))
</script>

<script>
const domExperLangs = document.querySelector('#exper_languges');
domExperLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['maturity-exper']))
</script>

<script>
const domUndefLangs = document.querySelector('#undef_languges');
domUndefLangs.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['maturity-exper', 'maturity-beta', 'maturity-alpha', 'maturity-prod']))
</script>
