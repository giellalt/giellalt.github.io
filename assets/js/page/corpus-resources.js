// Entry module for CorpusResources.md
//
// The geo / language-family lists here used to call addUnorderedList (lang)
// and addNegUnorderedDictList (dict). The old page only loaded corpustable.js,
// so those helpers were undefined and every list below the first table
// silently failed. Wiring them up surfaced that they're also the wrong
// helpers for corpus-* repos (2-part names, plain '<repo>/' hrefs) — using
// the lang/dict variants renders "<lang> - undefined ()" text and a broken
// '/../' link for any repo not on the page's few positive-match lists. Use
// the corpus-specific list helpers instead.

import { mountAll } from '../table/mount.js';
import { addCorpusTable, addUnorderedCorpusList, addNegUnorderedCorpusList } from '../table/corpus.js';

const GEO = [
    ['#geo_nordic', 'geo-nordic'],
    ['#geo_europe', 'geo-europe'],
    ['#geo_russia', 'geo-russia'],
    ['#geo_northamerica', 'geo-northamerica'],
    ['#geo_africa', 'geo-africa'],
    ['#geo_asian', 'geo-asian'],
];

const FAMILY = [
    ['#fam_eskimo_aleut', 'langfam-eskimo-aleut'],
    ['#fam_indoeuropean', 'langfam-indoeuropean'],
    ['#fam_nigercongo', 'langfam-niger-congo'],
    ['#fam_turkic', 'langfam-turkic'],
    ['#fam_uralic', 'langfam-uralic'],
];

export function render(repos) {
    return mountAll([
        ['#corp_languges', addCorpusTable(repos, 'corpus-', [])],

        ...GEO.map(([sel, tag]) => [sel, addUnorderedCorpusList(repos, 'corpus-', [tag])]),
        ['#geo_other', addNegUnorderedCorpusList(repos, 'corpus-', GEO.map(([, t]) => t))],
        ['#geo_undef', addNegUnorderedCorpusList(repos, 'corpus-', ['geo-'])],

        ...FAMILY.map(([sel, tag]) => [sel, addUnorderedCorpusList(repos, 'corpus-', [tag])]),
        ['#fam_other', addNegUnorderedCorpusList(repos, 'corpus-', FAMILY.map(([, t]) => t))],
        ['#fam_undef', addNegUnorderedCorpusList(repos, 'corpus-', ['langfam-'])],
    ]);
}
