# GiellaLT — Language models

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'lang-'" | jsonify %}

Beware that the documentation pages for most Experimental repos have little or no content, and that documentation for other languages probably is out-of-date. Writing documentation for each language repository is an ongoing effort, and part of the development process.

The languages are grouped in three different ways, according to _maturity, geography_ and _language family_. [Private repositories](https://github.com/divvun/private-registry) are not listed.

## Grouped according to maturity of the resources

The **[maturity levels](MaturityClassification.md)** are _production, beta, alpha_ and _experimental_. Some of the beta language models are used in practical applications.

Being in the **Production** group does not necessarily mean a language model is in production for all purposes, it could be for one only. See the documentation for each language for further details. The columns in the tables below are [explained here](LanguageModelColumns.md).


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

### South America

<div id="geo_southamerica" class="twocolumn" ></div>

### Africa

<div id="geo_africa" class="twocolumn" ></div>

### Asia

<div id="geo_asian" class="twocolumn" ></div>

### Oceania

<div id="geo_oceania" class="twocolumn" ></div>

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

### Na-Dene

<div id="fam_na_dene" class="twocolumn" ></div>

### Niger-Congo

<div id="fam_nigercongo" class="twocolumn" ></div>

### Tupian

<div id="fam_tupian" class="twocolumn" ></div>

### Turkic

<div id="fam_turkic" class="twocolumn" ></div>

### Uralic

<div id="fam_uralic" class="twocolumn" ></div>

### Other language families

<div id="fam_other" class="twocolumn" ></div>

### No language family tag

<div id="fam_undef" class="twocolumn" ></div>

<!-- Fill the divs above with data (see /assets/js/page/language-models.js): -->
<script type="module">
import { render } from '/assets/js/page/language-models.js';
render({{ lang_repos }});
</script>
