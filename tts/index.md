# Developing TTS

{% assign lang_repos = site.github.public_repositories | where_exp: "r", "r.name contains 'lang-'" | jsonify %}

This pages gives an overview of production of text-to-speech (TTS) programs for minority languages. Programs built so far can be found at the [Borealium resource page](https://borealium.org/category/text-to-speech/).

## TTS overview

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


# Phases in the production process

1. [Collecting and preparing text to be used](text-preparation.html) (**several months**)
2. [Recording the texts](recording.md) (**one week** of studio time)
3. [Text postprocessing](text-postprocessing.md) (**months**)
4. [Splitting the recordings and text transcripts to sentence-long individual files, eventually splitting exceptionally long strings](sentence-alignment.md)
5. [Procedures for normalisation of input text](text-normalisation.md)
6. [Building a voice](building-voice.md)
7. [Combining parts and distribution](combining.md)

# Resources

- [Overview of existing resources](../SpeechTechnologyResources.md)
- [ESpeakNG](ESpeakNG.md)

# Links to project pages for various languages

- [North Sámi](/speech-sme/)
- [Lule Sámi](/speech-smj/)
- [Inari Sámi](/speech-smn/)

