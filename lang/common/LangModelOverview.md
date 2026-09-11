---
layout: default
title: GiellaLT Language Models
---

# Language model overview

{% assign lang_repos = site.github.public_repositories|jsonify %}

This page provides an overview of language models for different languages. The language models are grouped according to __maturity__. [Private repositories](https://github.com/divvun/private-registry) are not listed.

The **[maturity levels](../../MaturityClassification.md)** are _production, beta, alpha_ and _experimental_. Some beta language models are used in practical applications.

Being in the **Production** group does not necessarily mean that a language model is in production for all purposes. See the documentation for each language for further details.

## [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../../MaturityClassification.html) Production

<div id="prod_langmodels" ></div>

## [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../../MaturityClassification.html) Beta

<div id="beta_langmodels" ></div>

## [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../../MaturityClassification.html) Alpha

<div id="alpha_langmodels" ></div>

## [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../../MaturityClassification.html) Experimental

<div id="exper_langmodels" ></div>

## [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../../MaturityClassification.html) Undefined maturity

<div id="undef_langmodels" class="twocolumn" ></div>

<!-- Scripts to fill the divs above with data: -->

<script src="/assets/js/tablecommon.js"></script>
<script src="/assets/js/langtable.js"></script>

<script>
const domProdLangModels = document.querySelector('#prod_langmodels');
domProdLangModels.appendChild(addLangModelOverviewTable({{lang_repos}}, 'lang-', ['maturity-prod']))
</script>

<script>
const domBetaLangModels = document.querySelector('#beta_langmodels');
domBetaLangModels.appendChild(addLangModelOverviewTable({{lang_repos}}, 'lang-', ['maturity-beta']))
</script>

<script>
const domAlphaLangModels = document.querySelector('#alpha_langmodels');
domAlphaLangModels.appendChild(addLangModelOverviewTable({{lang_repos}}, 'lang-', ['maturity-alpha']))
</script>

<script>
const domExperLangModels = document.querySelector('#exper_langmodels');
domExperLangModels.appendChild(addLangModelOverviewTable({{lang_repos}}, 'lang-', ['maturity-exper']))
</script>

<script>
const domUndefLangModels = document.querySelector('#undef_langmodels');
domUndefLangModels.appendChild(addNegUnorderedList({{lang_repos}}, 'lang-', ['maturity-exper', 'maturity-beta', 'maturity-alpha', 'maturity-prod']))
</script>
