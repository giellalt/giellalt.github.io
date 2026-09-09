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

## Automatic classification

Spellers are automatically classified based on version number and lexicon size (lemma count):
- **Production**: version ≥ 1.0.0
- **Beta**: version < 1.0.0 and lemma count ≥ 10,000
- **Alpha**: version < 1.0.0 and lemma count 1,000–10,000
- **Experimental**: version < 1.0.0 and lemma count < 1,000
- **Undefined**: missing version or lemma count data

This objective classification ensures transparency and gives language teams clear upgrade criteria.
Later Suggestion Quality (see below) could also be added to the automatic classification.

## Suggestion Quality (S)

The tables below include a "Suggestion Quality" column showing how well each spellchecker provides correct spelling suggestions. The test data is taken from `tools/spellcheckers/test/typos.tsv` in each repository. The badge displays three values: **First% \| Top5% \| Tests**

- **First%**: Percentage of typos where the correct word is the first suggestion
- **Top5%**: Percentage of typos where the correct word is in the top 5 suggestions (including first position)
- **Tests**: Number of typo test cases evaluated (formatted as "k" for thousands) (only true positives in the file mentioned above, other entries are ignored in the calculation)

Badge colors indicate overall quality based on [these thresholds](https://github.com/giellalt/giella-core/blob/main/scripts/make-spellerbadge-json.sh#L84-L97):
- 🟢 **Green** (Good/prod. ready): **First** ≥ 75% AND **Top5** ≥ 90% AND **Tests** ≥ 1000
- 🟡 **Yellow** (Beta): **First** ≥ 60% AND **Top5** ≥ 70% AND **Tests** ≥ 500
- 🔴 **Red** (Alpha): **First** ≥ 40% AND **Top5** ≥ 50% AND **Tests** ≥ 100
- ⚫ **Black** (Experimental): Below red thresholds

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

<!-- Fill the divs above with data (see /assets/js/page/speller-overview.js): -->
<script type="module">
import { render } from '/assets/js/page/speller-overview.js';
render({{ lang_repos }});
</script>
