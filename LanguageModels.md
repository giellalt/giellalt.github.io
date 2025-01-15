# GiellaLT language models

{% assign lang_repos = site.github.public_repositories|jsonify %}

Beware that the documentation pages for most Experimental repos have little or no content, and that documentation for other languages probably is out-of-date. Writing documentation for each language repository is an ongoing effort, and part of the development process.

The languages are grouped in three different ways, according to _maturity, geography_ and _language family_. [Private repositories](https://github.com/divvun/private-registry) are not listed.

## Grouped according to maturity of the resources

The **[maturity levels](MaturityClassification.md)** are _production, beta, alpha_ and _experimental_. Some of the beta language models are used in practical applications.

Being in the **Production** group does not necessarily mean a language model is in production for all purposes, it could be for one only. See the documentation for each language for further details.

The columns in the tables below are as follows:

- **Documentation:** Link to the main documentation for the language resources.
- **Repository:** Link to the GitHub repository.
- **License:** A badge informing about the chosen license for the language resources. Clicking on the badge will take you to the full text of the license.
- **Issues:** Link to a list of open issues for the specific language
- **Doc CI:** Continous Integration status badge for building the online documentation, including documentation generated from source code. This is the documentation linked to in the first column. When clicking the badge you get to the GitHub list of workflow runs, so that one can click further to see the actual build log files and other details.
- **Tool CI:** [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) status badge for the core tools for each language. The exact list of tools varies, and is specified in the file `.build-config.yml` at the root of each repository. By default for new languages morphological analysers and spelling checkers are built, while `make check` is **NOT** run during CI. As the code is developed, one can turn on checks and more tools as part of the CI runs, by editing this file. — Clicking the badge takes you to the details page for the last build, with links to log files and other details.

### [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](MaturityClassification.html) Production

<div id="prod_languges" ></div>

### [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](MaturityClassification.html) Beta

<div id="beta_languges" ></div>

### [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](MaturityClassification.html) Alpha

<div id="alpha_languges" ></div>

### [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](MaturityClassification.html) Experimental

<div id="exper_languges" ></div>

### [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](MaturityClassification.html) Undefined maturity

<div id="undef_languges" class="twocolumn" ></div>

## Grouped according to geography

### The Nordic countries

<div id="geo_nordic" class="twocolumn" ></div>

### Russia

<div id="geo_russia" class="twocolumn" ></div>

### Other parts of Europe

<div id="geo_europe" class="twocolumn" ></div>

### North America

<div id="geo_northamerica" class="twocolumn" ></div>

### Africa

<div id="geo_africa" class="twocolumn" ></div>

### Other parts of the world

<div id="geo_other" class="twocolumn" ></div>

### No geography tag

<div id="geo_undef" class="twocolumn" ></div>

## Grouped according to language family

### Afro-Asiatic

<div id="fam_afroasiatic" class="twocolumn" ></div>

### Algic

<div id="fam_algic" class="twocolumn" ></div>

### Artificial

<div id="fam_artific" class="twocolumn" ></div>

### Austronesian

<div id="fam_austro" class="twocolumn" ></div>

### Eskimo-Aleut

<div id="fam_eskimo_aleut" class="twocolumn" ></div>

### Indoeuropean

<div id="fam_indoeuropean" class="twocolumn" ></div>

### Isolates

<div id="fam_isolates" class="twocolumn" ></div>

### Mongolic

<div id="fam_mongolic" class="twocolumn" ></div>

### Niger-Congo

<div id="fam_nigercongo" class="twocolumn" ></div>

### Turkic

<div id="fam_turkic" class="twocolumn" ></div>

### Uralic

<div id="fam_uralic" class="twocolumn" ></div>

### Other language families

<div id="fam_other" class="twocolumn" ></div>

### No language family tag

<div id="fam_undef" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<!-- Scripts for maturity classes: -->
<script src="/assets/js/langtable.js"></script>
<script>
const domProdLangs = document.querySelector('#prod_languges');
domProdLangs.appendChild(addRepoTable({{lang_repos}}, 'lang-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_languges');
domBetaLangs.appendChild(addRepoTable({{lang_repos}}, 'lang-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_languges');
domAlphaLangs.appendChild(addRepoTable({{lang_repos}}, 'lang-', ['maturity-alpha']))
</script>

<script>
const domExperLangs = document.querySelector('#exper_languges');
domExperLangs.appendChild(addRepoTable({{lang_repos}}, 'lang-', ['maturity-exper']))
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
const domAfricaLangs = document.querySelector('#geo_africa');
domAfricaLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['geo-africa']))
</script>

<script>
const domOthrLangs = document.querySelector('#geo_other');
domOthrLangs.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['geo-nordic', 'geo-europe', 'geo-russia', 'geo-northamerica', 'geo-africa']))
</script>

<script>
const domUndefLangs = document.querySelector('#geo_undef');
domUndefLangs.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['geo-]))
</script>

<!-- Scripts for language families: -->
<script>
const domAfroAsiaticLangs = document.querySelector('#fam_afroasiatic');
domAfroAsiaticLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-afro-asiatic']))
</script>

<script>
const domAlgicLangs = document.querySelector('#fam_algic');
domAlgicLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-algic']))
</script>

<script>
const domArtificialLangs = document.querySelector('#fam_artific');
domArtificialLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-artificial']))
</script>

<script>
const domAustorLangs = document.querySelector('#fam_austro');
domAustorLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-austronesian']))
</script>

<script>
const domEskAleutLangs = document.querySelector('#fam_eskimo_aleut');
domEskAleutLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-eskimo-aleut']))
</script>

<script>
const domIndEurLangs = document.querySelector('#fam_indoeuropean');
domIndEurLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-indoeuropean']))
</script>

<script>
const domIsolateLangs = document.querySelector('#fam_isolates');
domIsolateLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-isolate']))
</script>

<script>
const domMongolicLangs = document.querySelector('#fam_mongolic');
domMongolicLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-mongolic']))
</script>

<script>
const domNigerCongoLangs = document.querySelector('#fam_nigercongo');
domNigerCongoLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-niger-congo']))
</script>

<script>
const domTurkicLangs = document.querySelector('#fam_turkic');
domTurkicLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-turkic']))
</script>

<script>
const domUralicLangs = document.querySelector('#fam_uralic');
domUralicLangs.appendChild(addUnorderedList({{lang_repos}}, 'lang-', ['langfam-uralic']))
</script>

<script>
const domOthrFamLangs = document.querySelector('#fam_other');
domOthrFamLangs.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['langfam-afro-asiatic', 'langfam-algic', 'langfam-artificial', 'langfam-austronesian', 'langfam-eskimo-aleut', 'langfam-indoeuropean', 'langfam-isolate', 'langfam-mongolic', 'langfam-niger-congo', 'langfam-turkic', 'langfam-uralic']))
</script>

<script>
const domUndefFamLangs = document.querySelector('#fam_undef');
domUndefFamLangs.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['langfam-']))
</script>
