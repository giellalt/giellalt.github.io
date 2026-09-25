---
layout: default
title: GiellaLT Hyphenators
---

# Hyphenator status overview

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'lang-'" | jsonify %}

This page provides an overview of hyphenators for different languages. These tools are built from the language models in the [lang-* repositories](../../LanguageModels.md).

The initial maturity classification uses the hyphenator version only:

- **Production**: version >= 1.0.0
- **Beta**: version < 1.0.0
- **Alpha** and **Experimental/Disabled**: reserved for a future classification based on additional hyphenator data
- **Undefined**: missing `hyph-version.json`

Private repositories are not listed.

## [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../../MaturityClassification.html) Production

<div id="prod_hyphenators"></div>

## [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../../MaturityClassification.html) Beta

<div id="beta_hyphenators"></div>

## [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../../MaturityClassification.html) Alpha

<div id="alpha_hyphenators"></div>

## [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../../MaturityClassification.html) Experimental/Disabled

<div id="exper_hyphenators" class="twocolumn"></div>

## [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../../MaturityClassification.html) Undefined maturity

<div id="undef_hyphenators" class="twocolumn"></div>

<!-- Fill the divs above with data (see /assets/js/page/hyphenation-overview.js): -->
<script type="module">
import { render } from '/assets/js/page/hyphenation-overview.js';
render({{ lang_repos }});
</script>