# GiellaLT — Keyboard Layouts

{% assign keyb_repos = site.data.github_repos | where_exp: "r", "r.name contains 'keyboard-'" | jsonify %}

Beware that the documentation pages for most Experimental repos have little or no content, and that documentation for other keyboards probably is out-of-date. Writing documentation is an ongoing effort, and part of the development process. Automatically generated SVG layouts is presently not working.

The languages are grouped in three different ways, according to _maturity, geography_ and _language family_. [Private repositories](https://github.com/divvun/private-registry) are not listed.

## Grouped according to maturity of the keyboards

Being in the **Production** group does not necessarily mean it is in production for both mobile and desktop, it can be only one of them. We don't differentiate between the two categories, as soon as a keyboard is released for the general audience for at least one platform, it is in the **Production** category. See the documentation for each keyboard for further details.

The columns in the tables below are as follows:

- **Documentation:** Link to the main documentation for the language resources.
- **Repository:** Link to the GitHub repository.
- **License:** A badge informing about the chosen license for the language resources. Clicking on the badge will take you to the full text of the license.
- **Issues:** Link to a list of open issues for the specific language
- **Doc CI:** Continous Integration status badge for building the online documentation, including documentation generated from source code. This is the documentation linked to in the first column. When clicking the badge you get to the GitHub list of workflow runs, so that one can click further to see the actual build log files and other details.
- **Tool CI:** [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) status badge for building the desktop keyboards for each language. Clicking the badge takes you to the details page for the last build, with links to log files and other details. Mobile keyboards are built as part of [the mobile keyboard apps](https://github.com/divvun?q=giellakbd), and not covered by this overview.

### Production keyboard layouts [![Maturity: Production](https://img.shields.io/badge/Maturity-Production-brightgreen.svg)](/MaturityClassification.html)

<div id="prod_keyboards" ></div>

### Beta keyboard layouts [![Maturity: Beta](https://img.shields.io/badge/Maturity-Beta-yellow.svg)](/MaturityClassification.html)

<div id="beta_keyboards" ></div>

### Alpha keyboard layouts [![Maturity: Alpha](https://img.shields.io/badge/Maturity-Alpha-red.svg)](/MaturityClassification.html)

<div id="alpha_keyboards" ></div>

### Experimental keyboard layouts [![Maturity: Experiment](https://img.shields.io/badge/Maturity-Experiment-black.svg)](/MaturityClassification.html)

Initial experiments and student exercises.

<div id="exper_keyboards" ></div>

### Keyboard layouts of undefined maturity [![Maturity: Undefined](https://img.shields.io/badge/Maturity-Undefined-lightgrey.svg)](/MaturityClassification.html)

<div id="undef_keyboards" class="twocolumn" ></div>

## Grouped according to geography

### Languages of the Nordic countries

<div id="geo_nordic" class="twocolumn" ></div>

### Languages of Russia

<div id="geo_russia" class="twocolumn" ></div>

### Other European languages

<div id="geo_europe" class="twocolumn" ></div>

### Languages in North America

<div id="geo_northamerica" class="twocolumn" ></div>

### South America

<div id="geo_southamerica" class="twocolumn" ></div>

### Languages in Africa

<div id="geo_africa" class="twocolumn" ></div>

### Asia

<div id="geo_asian" class="twocolumn" ></div>

### Oceania

<div id="geo_oceania" class="twocolumn" ></div>

### Languages without geography tag

<div id="geo_undef" class="twocolumn" ></div>

## Grouped according to language family

### Uralic Languages

<div id="fam_uralic" class="twocolumn" ></div>

### Eskimo-Aleut Languages

<div id="fam_eskimo_aleut" class="twocolumn" ></div>

### Algic Languages

<div id="fam_algic" class="twocolumn" ></div>

### Indoeuropean languages

<div id="fam_indoeuropean" class="twocolumn" ></div>

### Niger-Congo Languages

<div id="fam_niger_congo" class="twocolumn" ></div>

### Languages of other language families, isolates, artificial languages

<div id="fam_other" class="twocolumn" ></div>

### Languages with no language family tag

<div id="fam_undef" class="twocolumn" ></div>

<script type="module">
import { render } from '/assets/js/page/keyboard-layouts.js';
render({{ keyb_repos }});
</script>
