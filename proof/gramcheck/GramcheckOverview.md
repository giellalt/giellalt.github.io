---
layout: default
title: GiellaLT Grammar Checkers
---

# Spellchecker status overview

{% assign lang_repos = site.github.public_repositories|jsonify %}

This page provides an overview of grammar checkers for different languages. These tools are built from the language models in the [lang-* repositories](../../LanguageModels.md).

The grammar checkers are grouped according to __maturity__. [Private repositories](https://github.com/divvun/private-registry) are not listed.

The **[maturity levels](../../MaturityClassification.md)** are _production, beta, alpha_ and _experimental_. Some beta grammar checkers are used in practical applications.

Being in the **Production** group means the grammar checker has been tested and is considered stable enough for production use.

## Automatic classification

Grammar checkers are automatically classified based on version number and number of error detection rules:
- **Production**: version ≥ 1.0.0
- **Beta**: version < 1.0.0 and rule count > 10
- **Alpha**: version < 1.0.0 and rule count 5–10
- **Experimental**: version < 1.0.0 and rule count < 5
- **Undefined**: missing version or lemma count data

This objective classification ensures transparency and gives language teams clear upgrade criteria.

## [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../../MaturityClassification.html) Production

<div id="prod_gramchecks" ></div>

## [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../../MaturityClassification.html) Beta

<div id="beta_gramchecks" ></div>

## [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../../MaturityClassification.html) Alpha

<div id="alpha_gramchecks" ></div>

## [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../../MaturityClassification.html) Experimental

<div id="exper_gramchecks" ></div>

## [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../../MaturityClassification.html) Undefined maturity

<div id="undef_gramchecks" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<!-- Load required JavaScript modules -->
<script src="/assets/js/tablecommon.js"></script>
<script src="/assets/js/langtable.js"></script>
<script src="/assets/js/gramchecktable.js"></script>

<!-- Scripts for maturity classes: -->
<script>
const domProdGramchecks = document.querySelector('#prod_gramchecks');
addGramcheckRepoTableByMaturity({{lang_repos}}, 'lang-', 'production').then(table => {
    domProdGramchecks.appendChild(table);
});
</script>

<script>
const domBetaGramchecks = document.querySelector('#beta_gramchecks');
addGramcheckRepoTableByMaturity({{lang_repos}}, 'lang-', 'beta').then(table => {
    domBetaGramchecks.appendChild(table);
});
</script>

<script>
const domAlphaGramchecks = document.querySelector('#alpha_gramchecks');
addGramcheckRepoTableByMaturity({{lang_repos}}, 'lang-', 'alpha').then(table => {
    domAlphaGramchecks.appendChild(table);
});
</script>

<script>
const domExperGramchecks = document.querySelector('#exper_gramchecks');
addGramcheckRepoTableByMaturity({{lang_repos}}, 'lang-', 'experimental').then(table => {
    domExperGramchecks.appendChild(table);
});
</script>

<script>
const domUndefGramchecks = document.querySelector('#undef_gramchecks');
addGramcheckUnorderedListByMaturity({{lang_repos}}, 'lang-').then(list => {
    domUndefGramchecks.appendChild(list);
});
</script>
