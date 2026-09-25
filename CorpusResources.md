# GiellaLT — Corpus Resources

<img src="images/under-construction-symbol-icon.svg" alt="Under construction icon" height="60">
**_Under construction._**

This page contains a dynamically built list of all corpus
repositories. For each language, there are two corpora, *corpus-lang-orig*
and *corpus-lang*, where the former contains original files and
metadata and the latter contains the corpus in text (xml) format. 

Repositories with original corpus files is only listed in the first overview table, not in the geographical distribution or language family distribution lists. Repositories with converted data is first listed in a separate overview table, then again in lists according to geographic location of the language, and language family affiliation.

Private repositories are not listed.

## Overview

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'corpus-'" | jsonify %}

### Original files

<div id="corp_orig" ></div>

### Converted corpus data (XML)

<div id="corp_xml" ></div>

## Grouped according to geography

Only converted data repos are listed, see above for repos for original data.

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

### Languages in Asia

<div id="geo_asian" class="twocolumn" ></div>

### Languages in other parts of the world

<div id="geo_other" class="twocolumn" ></div>

### Languages with no geography tag

<div id="geo_undef" class="twocolumn" ></div>

## Grouped according to language family

Only converted data repos are listed, see above for repos for original data.

### Eskimo-Aleut Languages

<div id="fam_eskimo_aleut" class="twocolumn" ></div>

### Indoeuropean languages

<div id="fam_indoeuropean" class="twocolumn" ></div>

### Niger-Congo Languages

<div id="fam_nigercongo" class="twocolumn" ></div>

### Turkic Languages

<div id="fam_turkic" class="twocolumn" ></div>

### Uralic Languages

<div id="fam_uralic" class="twocolumn" ></div>

### Languages of other language families, isolates, artificial languages

<div id="fam_other" class="twocolumn" ></div>

### Languages with no language family tag

<div id="fam_undef" class="twocolumn" ></div>

<!-- Fill the divs above with data (see /assets/js/page/corpus-resources.js): -->
<script type="module">
import { render } from '/assets/js/page/corpus-resources.js';
render({{ lang_repos }});
</script>
