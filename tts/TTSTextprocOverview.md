# TTS overview

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'lang-'" | jsonify %}

The initial maturity classification uses the TTS version only:

- **Production**: version >= 1.0.0
- **Beta**: version < 1.0.0
- **Alpha** and **Experimental/Disabled**: reserved for a future classification based on additional TTS data
- **Undefined**: missing `tts-version.json`

Private repositories are not listed.

## [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](../MaturityClassification.html) Production

<div id="prod_tts"></div>

## [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](../MaturityClassification.html) Beta

<div id="beta_tts"></div>

## [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](../MaturityClassification.html) Alpha

<div id="alpha_tts"></div>

## [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](../MaturityClassification.html) Experimental/Disabled

<div id="exper_tts" class="twocolumn"></div>

## [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](../MaturityClassification.html) Undefined maturity

<div id="undef_tts" class="twocolumn"></div>

<script type="module">
import { render } from '/assets/js/page/tts-overview.js';
render({{ lang_repos }});
</script>


