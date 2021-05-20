# Language models

(WIP - A lot of documentation is not up-to-date, but we are working actively to correct that. Production, Beta and Alpha repos have working sites, the documentation pages for the rest will most likely give an error / 404. All source links are working.)


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

# Language grouping according to geography

## Languages of the Nordic countries

<div id="geo_nordic" class="twocolumn" ></div>

## Other European languages

<div id="geo_europe" class="twocolumn" ></div>

## Languages of Russia

<div id="geo_russia" class="twocolumn" ></div>

## Languages in North America (US/Canada)

<div id="geo_northamerica" class="twocolumn" ></div>

## Languages in Other parts of the world

<div id="geo_other" class="twocolumn" ></div>

# Language grouping according to language family

## Uralic Languages

<div id="fam_uralic" class="twocolumn" ></div>

## Indoeuropean languages

<div id="fam_indoeuropean" class="twocolumn" ></div>

## Algic Languages

<div id="fam_algic" class="twocolumn" ></div>

## Eskimo-aleut Languages

<div id="fam_eskimo_aleut" class="twocolumn" ></div>

## Turkic Languages

<div id="fam_turkic" class="twocolumn" ></div>

## Languages of other language families, isolates, artificial languages

<div id="fam_other" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<!-- Scripts for maturity classes: -->
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

<!-- Scripts for Geographic areas: -->
<script>
const domNordLangs = document.querySelector('#geo_nordic');
domNordLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['geo-nordic']))
</script>

<script>
const domEuroLangs = document.querySelector('#geo_europe');
domEuroLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['geo-europe']))
</script>

<script>
const domRussLangs = document.querySelector('#geo_russia');
domRussLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['geo-russia']))
</script>

<script>
const domNorALangs = document.querySelector('#geo_northamerica');
domNorALangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['geo-northamerica']))
</script>

<script>
const domOthrLangs = document.querySelector('#geo_other');
domOthrLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['geo-other']))
</script>

<!-- Scripts for language families: -->
<script>
const domUralicLangs = document.querySelector('#fam_uralic');
domUralicLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-uralic']))
</script>

<script>
const domIndoEuroLangs = document.querySelector('#fam_indoeuropean');
domIndoEuroLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-indoeuropean']))
</script>

<script>
const domEskAleutLangs = document.querySelector('#fam_eskimo_aleut');
domEskAleutLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-eskimo-aleut']))
</script>

<script>
const domTurkicLangs = document.querySelector('#fam_turkic');
domTurkicLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-turkic']))
</script>

<script>
const domOthrFamLangs = document.querySelector('#fam_other');
domOthrFamLangs.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['langfam-uralic', 'langfam-indoeuropean', 'langfam-eskimo-aleut', 'langfam-turkic']))
</script>
