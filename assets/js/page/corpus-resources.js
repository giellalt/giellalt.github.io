// Entry module for CorpusResources.md
//
// The geo / language-family lists here call addUnorderedList (lang) and
// addNegUnorderedDictList (dict). The old page only loaded corpustable.js, so
// those helpers were undefined and every list below the first table silently
// failed; wiring the imports makes them render.

import { mountAll } from '../table/mount.js';
import { addCorpusTable } from '../table/corpus.js';
import { addUnorderedList } from '../table/lang.js';
import { addNegUnorderedDictList } from '../table/dict.js';

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

        ...GEO.map(([sel, tag]) => [sel, addUnorderedList(repos, 'corpus-', [tag])]),
        ['#geo_other', addNegUnorderedDictList(repos, 'corpus-', GEO.map(([, t]) => t))],
        ['#geo_undef', addNegUnorderedDictList(repos, 'corpus-', ['geo-'])],

        ...FAMILY.map(([sel, tag]) => [sel, addUnorderedList(repos, 'corpus-', [tag])]),
        ['#fam_other', addNegUnorderedDictList(repos, 'corpus-', FAMILY.map(([, t]) => t))],
        ['#fam_undef', addNegUnorderedDictList(repos, 'corpus-', ['langfam-'])],
    ]);
}
