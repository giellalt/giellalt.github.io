---
layout: default
title: GiellaLT Spellers
---

# Spellchecker status overview

{% assign lang_repos = site.github.public_repositories|jsonify %}

This page provides an overview of spellcheckers for different languages. These tools are built from the language models in the [lang-* repositories](../../LanguageModels.md).

The spellers are grouped according to __maturity__. [Private repositories](https://github.com/divvun/private-registry) are not listed.

The **[maturity levels](../../MaturityClassification.md)** are _production, beta, alpha_ and _experimental_. Some beta spellers are used in practical applications.

Being in the **Production** group means the speller has been tested and is considered stable enough for production use.

**Automatic classification:** Spellers are automatically classified based on version number and lexicon size (lemma count):
- **Production**: version ≥ 1.0.0
- **Beta**: version < 1.0.0 and lemma count ≥ 10,000
- **Alpha**: version < 1.0.0 and lemma count 1,000–10,000
- **Experimental**: version < 1.0.0 and lemma count < 1,000
- **Undefined**: missing version or lemma count data

This objective classification ensures transparency and gives language teams clear upgrade criteria.

**Suggestion Quality (S):** The tables below include a "Suggestion Quality" column showing how well each spellchecker provides correct spelling suggestions. The badge displays three values: **First% \| Top5% \| Tests**

- **First%**: Percentage of typos where the correct word is the first suggestion
- **Top5%**: Percentage of typos where the correct word is in the top 5 suggestions  
- **Tests**: Number of typo test cases evaluated (formatted as "k" for thousands)

Badge colors indicate overall quality based on [these thresholds](https://github.com/giellalt/giella-core/blob/main/scripts/make-spellerbadge-json.sh#L84-L97):
- 🟢 **Green** (good): First ≥ 80% AND Top5 ≥ 90% AND Tests ≥ 1000
- 🟡 **Yellow** (medium): First ≥ 60% AND Top5 ≥ 70% AND Tests ≥ 500
- 🔴 **Red** (poor): First ≥ 40% AND Top5 ≥ 50% AND Tests ≥ 100
- ⚫ **Black** (very poor): Below red thresholds

## [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../../MaturityClassification.html) Production

<div id="prod_spellers" ></div>

## [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../../MaturityClassification.html) Beta

<div id="beta_spellers" ></div>

## [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../../MaturityClassification.html) Alpha

<div id="alpha_spellers" ></div>

## [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../../MaturityClassification.html) Experimental

<div id="exper_spellers" ></div>

## [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../../MaturityClassification.html) Undefined maturity

<div id="undef_spellers" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<!-- Load required JavaScript modules -->
<script src="/assets/js/tablecommon.js"></script>
<script src="/assets/js/langtable.js"></script>
<script src="/assets/js/spellertable.js"></script>

<!-- Scripts for maturity classes: -->
<script>
const domProdSpellers = document.querySelector('#prod_spellers');
addSpellerRepoTableByMaturity({{lang_repos}}, 'lang-', 'production').then(table => {
    domProdSpellers.appendChild(table);
});
</script>

<script>
const domBetaSpellers = document.querySelector('#beta_spellers');
addSpellerRepoTableByMaturity({{lang_repos}}, 'lang-', 'beta').then(table => {
    domBetaSpellers.appendChild(table);
});
</script>

<script>
const domAlphaSpellers = document.querySelector('#alpha_spellers');
addSpellerRepoTableByMaturity({{lang_repos}}, 'lang-', 'alpha').then(table => {
    domAlphaSpellers.appendChild(table);
});
</script>

<script>
const domExperSpellers = document.querySelector('#exper_spellers');
addSpellerRepoTableByMaturity({{lang_repos}}, 'lang-', 'experimental').then(table => {
    domExperSpellers.appendChild(table);
});
</script>

<script>
const domUndefSpellers = document.querySelector('#undef_spellers');
addSpellerUnorderedListByMaturity({{lang_repos}}, 'lang-').then(list => {
    domUndefSpellers.appendChild(list);
});
</script>
