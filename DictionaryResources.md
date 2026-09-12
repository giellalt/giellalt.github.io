# GiellaLT — dictionary sources


This page contains a dynamically built list of all dictionary repositories. Private repositories are not listed.

Dictionary sources are grouped according to the **source** language, **_NOT_** the target language(s).

## Grouped according to maturity of the resources

The [maturity levels](MaturityClassification.md) are _production, beta, alpha_ and _experimental_.

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'dict-'" | jsonify %}

### [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](MaturityClassification.html) Production dictionary resources

<div id="prod_languges" ></div>

### [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](MaturityClassification.html) Beta dictionary resources

<div id="beta_languges" ></div>

### [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](MaturityClassification.html) Alpha dictionary resources

<div id="alpha_languges" ></div>

### [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](MaturityClassification.html) Experimental dictionary resources

<div id="exper_languges" ></div>

### [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](MaturityClassification.html) Dictionary resources of undefined maturity

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

<!-- Fill the divs above with data (see /assets/js/page/dictionary-resources.js): -->
<script type="module">
import { render } from '/assets/js/page/dictionary-resources.js';
render({{ lang_repos }});
</script>
