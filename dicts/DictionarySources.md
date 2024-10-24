# Dictionary Sources

<img src="../images/under-construction-symbol-icon.svg" alt="Under construction icon" height="60">
**_Under construction._**

This page contains a dynamically built list of all dictionary repositories. Private repositories are not listed.

Dictionary sources are grouped according to the **source** language, **_NOT_** the target language(s).

## Grouped according to maturity of the resources

The [maturity levels](../MaturityClassification.md) are _production, beta, alpha_ and _experimental_.

{% assign lang_repos = site.github.public_repositories|jsonify %}

### [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../MaturityClassification.html) Production dictionary resources

<div id="prod_languges" ></div>

### [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../MaturityClassification.html) Beta dictionary resources

<div id="beta_languges" ></div>

### [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../MaturityClassification.html) Alpha dictionary resources

<div id="alpha_languges" ></div>

### [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../MaturityClassification.html) Experimental dictionary resources

<div id="exper_languges" ></div>

### [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../MaturityClassification.html) Dictionary resources of undefined maturity

<div id="undef_languges" class="twocolumn" ></div>

## Grouped according to geography

### Languages of the Nordic countries

<div id="geo_nordic" class="twocolumn" ></div>

### Languages of Russia

<div id="geo_russia" class="twocolumn" ></div>

### Other European languages

<div id="geo_europe" class="twocolumn" ></div>

### Languages in North America

<div id="geo_northamerica" class="twocolumn" ></div>

### Languages in Africa

<div id="geo_africa" class="twocolumn" ></div>

### Languages in other parts of the world

<div id="geo_other" class="twocolumn" ></div>

### Languages with no geography tag

<div id="geo_undef" class="twocolumn" ></div>

## Grouped according to language family

### Uralic Languages

<div id="fam_uralic" class="twocolumn" ></div>

### Eskimo-Aleut Languages

<div id="fam_eskimo_aleut" class="twocolumn" ></div>

### Algic Languages

<div id="fam_algic" class="twocolumn" ></div>

### Indoeuropean languages

<div id="fam_indoeuropean" class="twocolumn" ></div>

### Niger-Congo Languages

<div id="fam_nigercongo" class="twocolumn" ></div>

### Turkic Languages

<div id="fam_turkic" class="twocolumn" ></div>

### Languages of other language families, isolates, artificial languages

<div id="fam_other" class="twocolumn" ></div>

### Languages with no language family tag

<div id="fam_undef" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<!-- Scripts for maturity classes: -->
<script src="/assets/js/langtable.js"></script>
<script>
const domProdLangs = document.querySelector('#prod_languges');
domProdLangs.appendChild(addDictRepoTable({{lang_repos}}, 'dict-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_languges');
domBetaLangs.appendChild(addDictRepoTable({{lang_repos}}, 'dict-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_languges');
domAlphaLangs.appendChild(addDictRepoTable({{lang_repos}}, 'dict-', ['maturity-alpha']))
</script>

<script>
const domExperLangs = document.querySelector('#exper_languges');
domExperLangs.appendChild(addDictRepoTable({{lang_repos}}, 'dict-', ['maturity-exper']))
</script>

<script>
const domUndefLangs = document.querySelector('#undef_languges');
domUndefLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'dict-', ['maturity-exper', 'maturity-beta', 'maturity-alpha', 'maturity-prod']))
</script>

<!-- Scripts for Geographic areas: -->
<script>
const domNordLangs = document.querySelector('#geo_nordic');
domNordLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['geo-nordic']))
</script>

<script>
const domEuroLangs = document.querySelector('#geo_europe');
domEuroLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['geo-europe']))
</script>

<script>
const domRussLangs = document.querySelector('#geo_russia');
domRussLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['geo-russia']))
</script>

<script>
const domNorALangs = document.querySelector('#geo_northamerica');
domNorALangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['geo-northamerica']))
</script>

<script>
const domAfricaLangs = document.querySelector('#geo_africa');
domAfricaLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['geo-africa']))
</script>

<script>
const domOthrLangs = document.querySelector('#geo_other');
domOthrLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'dict-', ['geo-nordic', 'geo-europe', 'geo-russia', 'geo-northamerica', 'geo-africa']))
</script>

<script>
const domUndefLangs = document.querySelector('#geo_undef');
domUndefLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'dict-', ['geo-]))
</script>

<!-- Scripts for language families: -->
<script>
const domUralicLangs = document.querySelector('#fam_uralic');
domUralicLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-uralic']))
</script>

<script>
const domIndEurLangs = document.querySelector('#fam_indoeuropean');
domIndEurLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-indoeuropean']))
</script>

<script>
const domAlgicLangs = document.querySelector('#fam_algic');
domAlgicLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-algic']))
</script>

<script>
const domEskAleutLangs = document.querySelector('#fam_eskimo_aleut');
domEskAleutLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-eskimo-aleut']))
</script>

<script>
const domTurkicLangs = document.querySelector('#fam_turkic');
domTurkicLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-turkic']))
</script>

<script>
const domNigerCongoLangs = document.querySelector('#fam_nigercongo');
domNigerCongoLangs.appendChild(addUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-niger-congo']))
</script>

<script>
const domOthrFamLangs = document.querySelector('#fam_other');
domOthrFamLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-uralic', 'langfam-indoeuropean', 'langfam-algic', 'langfam-eskimo-aleut', 'langfam-turkic', 'langfam-niger-congo']))
</script>

<script>
const domUndefFamLangs = document.querySelector('#fam_undef');
domUndefFamLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'dict-', ['langfam-']))
</script>
