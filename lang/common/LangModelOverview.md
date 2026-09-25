---
layout: default
title: GiellaLT Language Models
---

# Language model overview

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'lang-'" | jsonify %}

This page provides an overview of language models for different languages. The models are grouped according to
their [maturity levels](../../MaturityClassification.md). [Private repositories](https://github.com/divvun/private-registry)
are not listed.

Being in the **Production** group does not necessarily mean that a language model is in production for all purposes.
See the documentation for each language for further details.

## [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../../MaturityClassification.html) Production

<div id="prod_langmodels"></div>

## [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../../MaturityClassification.html) Beta

<div id="beta_langmodels"></div>

## [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../../MaturityClassification.html) Alpha

<div id="alpha_langmodels"></div>

## [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../../MaturityClassification.html) Experimental/Disabled

<div id="exper_langmodels" class="twocolumn"></div>

## [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../../MaturityClassification.html) Undefined maturity

<div id="undef_langmodels" class="twocolumn"></div>

<!-- Fill the divs above with data (see /assets/js/page/language-model-overview.js): -->
<script type="module">
import { render } from '/assets/js/page/language-model-overview.js';
render({{ lang_repos }});
</script>