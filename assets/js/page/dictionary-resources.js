// Entry module for DictionaryResources.md
import { mountAll } from '../table/mount.js';
import { addDictRepoTable, addUnorderedDictList, addNegUnorderedDictList } from '../table/dict.js';

const MATURITY = [
    ['#prod_languges', 'maturity-prod'],
    ['#beta_languges', 'maturity-beta'],
    ['#alpha_languges', 'maturity-alpha'],
    ['#exper_languges', 'maturity-exper'],
];

const GEO = [
    ['#geo_nordic', 'geo-nordic'],
    ['#geo_europe', 'geo-europe'],
    ['#geo_russia', 'geo-russia'],
    ['#geo_northamerica', 'geo-northamerica'],
    ['#geo_africa', 'geo-africa'],
];

const FAMILY = [
    ['#fam_uralic', 'langfam-uralic'],
    ['#fam_indoeuropean', 'langfam-indoeuropean'],
    ['#fam_algic', 'langfam-algic'],
    ['#fam_eskimo_aleut', 'langfam-eskimo-aleut'],
    ['#fam_turkic', 'langfam-turkic'],
    ['#fam_nigercongo', 'langfam-niger-congo'],
];

export function render(repos) {
    return mountAll([
        ...MATURITY.map(([sel, tag]) => [sel, addDictRepoTable(repos, 'dict-', [tag])]),
        ['#undef_languges', addNegUnorderedDictList(repos, 'dict-', MATURITY.map(([, t]) => t))],

        ...GEO.map(([sel, tag]) => [sel, addUnorderedDictList(repos, 'dict-', [tag])]),
        ['#geo_other', addNegUnorderedDictList(repos, 'dict-', GEO.map(([, t]) => t))],
        ['#geo_undef', addNegUnorderedDictList(repos, 'dict-', ['geo-'])],

        ...FAMILY.map(([sel, tag]) => [sel, addUnorderedDictList(repos, 'dict-', [tag])]),
        ['#fam_other', addNegUnorderedDictList(repos, 'dict-', FAMILY.map(([, t]) => t))],
        ['#fam_undef', addNegUnorderedDictList(repos, 'dict-', ['langfam-'])],
    ]);
}
