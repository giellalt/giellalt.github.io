# Corpus Resources

![Warning](images/Warning.svg)
__*Under construction.*__

This page contains a dynamically built list of all corpus repositories. Private repositories are not listed.

# Overview

{% assign lang_repos = site.github.public_repositories|jsonify %}

<div id="corp_languges" ></div>

# Grouped according to geography

## Languages of the Nordic countries

<div id="geo_nordic" class="twocolumn" ></div>

## Languages of Russia

<div id="geo_russia" class="twocolumn" ></div>

## Other European languages

<div id="geo_europe" class="twocolumn" ></div>

## Languages in North America

<div id="geo_northamerica" class="twocolumn" ></div>

## Languages in Africa

<div id="geo_africa" class="twocolumn" ></div>

## Languages in other parts of the world

<div id="geo_other" class="twocolumn" ></div>

## Languages with no geography tag

<div id="geo_undef" class="twocolumn" ></div>

# Grouped according to language family

## Uralic Languages

<div id="fam_uralic" class="twocolumn" ></div>

## Indoeuropean languages

<div id="fam_indoeuropean" class="twocolumn" ></div>

## Algic Languages

<div id="fam_algic" class="twocolumn" ></div>

## Eskimo-Aleut Languages

<div id="fam_eskimo_aleut" class="twocolumn" ></div>

## Niger-Congo Languages

<div id="fam_nigercongo" class="twocolumn" ></div>

## Turkic Languages

<div id="fam_turkic" class="twocolumn" ></div>

## Languages of other language families, isolates, artificial languages

<div id="fam_other" class="twocolumn" ></div>

## Languages with no language family tag

<div id="fam_undef" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<!-- Scripts for maturity classes: -->
<script src="/assets/js/langtable.js"></script>

<script>
const domProdLangs = document.querySelector('#corp_languges');
domProdLangs.appendChild(addRepoTable({{lang_repos}}, 'corpus-', []))
</script>

<!-- Scripts for Geographic areas: -->
<script>
const domNordLangs = document.querySelector('#geo_nordic');
domNordLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['geo-nordic']))
</script>

<script>
const domEuroLangs = document.querySelector('#geo_europe');
domEuroLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['geo-europe']))
</script>

<script>
const domRussLangs = document.querySelector('#geo_russia');
domRussLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['geo-russia']))
</script>

<script>
const domNorALangs = document.querySelector('#geo_northamerica');
domNorALangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['geo-northamerica']))
</script>

<script>
const domAfricaLangs = document.querySelector('#geo_africa');
domAfricaLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['geo-africa']))
</script>

<script>
const domOthrLangs = document.querySelector('#geo_other');
domOthrLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'corpus-', ['geo-nordic', 'geo-europe', 'geo-russia', 'geo-northamerica', 'geo-africa']))
</script>

<script>
const domUndefLangs = document.querySelector('#geo_undef');
domUndefLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'corpus-', ['geo-]))
</script>

<!-- Scripts for language families: -->
<script>
const domUralicLangs = document.querySelector('#fam_uralic');
domUralicLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['langfam-uralic']))
</script>

<script>
const domIndEurLangs = document.querySelector('#fam_indoeuropean');
domIndEurLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['langfam-indoeuropean']))
</script>

<script>
const domAlgicLangs = document.querySelector('#fam_algic');
domAlgicLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['langfam-algic']))
</script>

<script>
const domEskAleutLangs = document.querySelector('#fam_eskimo_aleut');
domEskAleutLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['langfam-eskimo-aleut']))
</script>

<script>
const domTurkicLangs = document.querySelector('#fam_turkic');
domTurkicLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['langfam-turkic']))
</script>

<script>
const domNigerCongoLangs = document.querySelector('#fam_nigercongo');
domNigerCongoLangs.appendChild(addUnorderedList({{lang_repos}}, 'corpus-', ['langfam-niger-congo']))
</script>

<script>
const domOthrFamLangs = document.querySelector('#fam_other');
domOthrFamLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'corpus-', ['langfam-uralic', 'langfam-indoeuropean', 'langfam-algic', 'langfam-eskimo-aleut', 'langfam-turkic', 'langfam-niger-congo']))
</script>

<script>
const domUndefFamLangs = document.querySelector('#fam_undef');
domUndefFamLangs.appendChild(addNegUnorderedDictList({{lang_repos}}, 'corpus-', ['langfam-']))
</script>
