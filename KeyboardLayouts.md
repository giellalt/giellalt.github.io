# Keyboard Layouts

Private repositories are not listed.

# Grouped according to maturity of the keyboards

{% assign keyb_repos = site.github.public_repositories|jsonify %}

## Production keyboard layouts [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](/MaturityClassification.html)

<div id="prod_keyboards" class="twocolumn" ></div>

## Beta keyboard layouts [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](/MaturityClassification.html)

<div id="beta_keyboards" class="twocolumn" ></div>

## Alpha keyboard layouts [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](/MaturityClassification.html)

<div id="alpha_keyboards" class="twocolumn" ></div>

## Experimental keyboard layouts [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](/MaturityClassification.html)

<div id="exper_keyboards" class="twocolumn" ></div>

## Keyboard layouts of undefined maturity [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](/MaturityClassification.html)

<div id="undef_keyboards" class="twocolumn" ></div>

# Other language groupings

Other groupings of languages can be added ad lib, as long as the languages are topic-tagged in the GitHub repo, and the same tag text is used for filtering the repos. For an example, see how the maturity groups are made.

<script src="/assets/js/langtable.js"></script>
<script>
const domProdLangs = document.querySelector('#prod_keyboards');
domProdLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['maturity-prod']))
</script>

<script>
const domBetaLangs = document.querySelector('#beta_keyboards');
domBetaLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['maturity-beta']))
</script>

<script>
const domAlphaLangs = document.querySelector('#alpha_keyboards');
domAlphaLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['maturity-alpha']))
</script>

<script>
const domExperLangs = document.querySelector('#exper_keyboards');
domExperLangs.appendChild(addUnorderedList({{keyb_repos}}, 'keyboard-', ['maturity-exper']))
</script>

<script>
const domUndefLangs = document.querySelector('#undef_keyboards');
domUndefLangs.appendChild(addNegUnorderedList({{keyb_repos}}, 'keyboard-', ['maturity-exper', 'maturity-beta', 'maturity-alpha', 'maturity-prod']))
</script>
