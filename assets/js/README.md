# Repository-table scripts

The `*Resources.md` / `*Overview.md` / `LanguageModels.md` / `KeyboardLayouts.md`
/ `Games.md` pages render tables and lists of GitHub repositories client-side.
Each page pulls its repo list from `site.github.public_repositories` (via Liquid)
and hands it to one ES module:

```html
<script type="module">
import { render } from '/assets/js/page/<page>.js';
render({{ some_repos }});
</script>
```

## Layout

| path | what |
|------|------|
| `iso-codes.js`   | ISO 639 / ISO 15924 / repo-category lookup tables (large, generated) |
| `table/dom.js`      | element builders, the "data unavailable" + "no repos" markup |
| `table/filter.js`   | `mainFilter` + topic-tag matching |
| `table/names.js`    | `reponame2langname` and friends |
| `table/badges.js`   | docs-data URL helpers, shields.io endpoint badge, version/count parsing |
| `table/cells.js`    | per-repo `<td>` builders (license / issues / CI / version / …) |
| `table/maturity.js` | automatic production/beta/alpha/experimental classification + `renderMaturityBuckets` (streams rows into the overview pages) |
| `table/core.js`     | generic `buildTable` / `buildList` |
| `table/mount.js`    | drop a (pending) node into a page element by selector |
| `table/lang.js` `corpus.js` `dict.js` `game.js` `template.js` | per-category tables/lists, exported with their historical `add…` names |
| `table/speller.js` `gramcheck.js` | overview pages: `renderSpellerOverview` / `renderGramcheckOverview` fill the five maturity buckets |
| `page/*.js`         | one entry per Markdown page: imports the above, wires each `<div id>` |

No build step — the browser loads the modules directly. `jekyll serve` picks up
edits immediately. Native ES modules require a server (they do not load over
`file://`).
