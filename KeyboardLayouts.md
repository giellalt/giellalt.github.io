# Keyboard Layouts

Beware that the documentation pages for most Experimental repos have little or no content, and that documentation for other keyboards probably is out-of-date. Writing documentation is an ongoing effort, and part of the development process. Automatically generated SVG layouts is presently not working.

The languages are grouped in three different ways, according to *maturity, geography* and *language family*. [Private repositories](https://github.com/divvun/private-registry) are not listed.

# Grouped according to maturity of the keyboards

Being in the **Production** group does not necessarily mean it is in production for both mobile and desktop, it can be only one of them. We don't differentiate between the two categories, as soon as a keyboard is released for the general audience for at least one platform, it is in the **Production** category. See the documentation for each keyboard for further details.

{% assign keyb_repos = site.github.public_repositories|jsonify %}

## Production keyboard layouts [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](/MaturityClassification.html)

<div id="prod_keyboards" ></div>

## Beta keyboard layouts [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](/MaturityClassification.html)

<div id="beta_keyboards" ></div>

## Alpha keyboard layouts [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](/MaturityClassification.html)

<div id="alpha_keyboards" ></div>

## Experimental keyboard layouts [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](/MaturityClassification.html)

Initial experiments and student exercises.

<div id="exper_keyboards" ></div>

## Keyboard layouts of undefined maturity [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](/MaturityClassification.html)

<div id="undef_keyboards" class="twocolumn" ></div>

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

## Languages without geography tag

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

<div id="fam_niger_congo" class="twocolumn" ></div>

## Languages of other language families, isolates, artificial languages

<div id="fam_other" class="twocolumn" ></div>

## Languages with no language family tag

<div id="fam_undef" class="twocolumn" ></div>

<script src="/assets/js/langtable.js"></script>
<script>
const domProdLangs = document.querySelector('#prod_keyboards');
domProdLangs.appendChild(addRepoTable({{keyb_repos}}, 'keyboard-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_keyboards');
domBetaLangs.appendChild(addRepoTable({{keyb_repos}}, 'keyboard-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_keyboards');
domAlphaLangs.appendChild(addRepoTable({{keyb_repos}}, 'keyboard-', ['maturity-alpha']))
</script>

<script>
const domExperLangs = document.querySelector('#exper_keyboards');
domExperLangs.appendChild(addRepoTable({{keyb_repos}}, 'keyboard-', ['maturity-exper']))
</script>

<script>
const domUndefLangs = document.querySelector('#undef_keyboards');
domUndefLangs.appendChild(addNegUnorderedList({{keyb_repos}}, 'keyboard-', ['maturity-exper', 'maturity-beta', 'maturity-alpha', 'maturity-prod']))
</script>

<!-- Scripts for Geographic areas: -->
<script>
const domNordLangs = document.querySelector('#geo_nordic');
domNordLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-nordic']))
</script>

<script>
const domEuroLangs = document.querySelector('#geo_europe');
domEuroLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-europe']))
</script>

<script>
const domRussLangs = document.querySelector('#geo_russia');
domRussLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-russia']))
</script>

<script>
const domNorALangs = document.querySelector('#geo_northamerica');
domNorALangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-northamerica']))
</script>

<script>
const domAfricaLangs = document.querySelector('#geo_africa');
domAfricaLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-africa']))
</script>

<script>
const domOthrLangs = document.querySelector('#geo_other');
domOthrLangs.appendChild(addNegUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-nordic', 'geo-europe', 'geo-russia', 'geo-northamerica', 'geo-africa']))
</script>

<script>
const domUndefGeoLangs = document.querySelector('#geo_undef');
domUndefGeoLangs.appendChild(addNegUnorderedList({{keyb_repos}}, 'keyboard-', ['geo-']))
</script>

<!-- Scripts for language families: -->
<script>
const domUralicLangs = document.querySelector('#fam_uralic');
domUralicLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-uralic']))
</script>

<script>
const domIndEurLangs = document.querySelector('#fam_indoeuropean');
domIndEurLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-indoeuropean']))
</script>

<script>
const domAlgicLangs = document.querySelector('#fam_algic');
domAlgicLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-algic']))
</script>

<script>
const domEskAleutLangs = document.querySelector('#fam_eskimo_aleut');
domEskAleutLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-eskimo-aleut']))
</script>

<script>
const domNigerCongoLangs = document.querySelector('#fam_niger_congo');
domNigerCongoLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-niger-congo']))
</script>

<script>
const domOthrFamLangs = document.querySelector('#fam_other');
domOthrFamLangs.appendChild(addNegUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-uralic', 'langfam-indoeuropean', 'langfam-algic', 'langfam-eskimo-aleut', 'langfam-turkic', 'langfam-niger-congo']))
</script>

<script>
const domUndefFamLangs = document.querySelector('#fam_undef');
domUndefFamLangs.appendChild(addNegUnorderedList({{keyb_repos}}, 'keyboard-', ['langfam-']))
</script>
