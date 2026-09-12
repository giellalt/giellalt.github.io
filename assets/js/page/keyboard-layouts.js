// Entry module for KeyboardLayouts.md
import { mountAll } from '../table/mount.js';
import { addRepoTable, addUnorderedList, addNegUnorderedList } from '../table/lang.js';

const MATURITY = [
    ['#prod_keyboards', 'maturity-prod'],
    ['#beta_keyboards', 'maturity-beta'],
    ['#alpha_keyboards', 'maturity-alpha'],
    ['#exper_keyboards', 'maturity-exper'],
];

const GEO = [
    ['#geo_nordic', 'geo-nordic'],
    ['#geo_europe', 'geo-europe'],
    ['#geo_russia', 'geo-russia'],
    ['#geo_northamerica', 'geo-northamerica'],
    ['#geo_southamerica', 'geo-southamerica'],
    ['#geo_africa', 'geo-africa'],
    ['#geo_asian', 'geo-asian'],
    ['#geo_oceania', 'geo-oceania'],
];

const FAMILY = [
    ['#fam_uralic', 'langfam-uralic'],
    ['#fam_indoeuropean', 'langfam-indoeuropean'],
    ['#fam_algic', 'langfam-algic'],
    ['#fam_eskimo_aleut', 'langfam-eskimo-aleut'],
    ['#fam_niger_congo', 'langfam-niger-congo'],
];

export function render(repos) {
    return mountAll([
        ...MATURITY.map(([sel, tag]) => [sel, addRepoTable(repos, 'keyboard-', [tag])]),
        ['#undef_keyboards', addNegUnorderedList(repos, 'keyboard-', MATURITY.map(([, t]) => t))],

        ...GEO.map(([sel, tag]) => [sel, addUnorderedList(repos, 'keyboard-', [tag])]),
        ['#geo_undef', addNegUnorderedList(repos, 'keyboard-', ['geo-'])],

        ...FAMILY.map(([sel, tag]) => [sel, addUnorderedList(repos, 'keyboard-', [tag])]),
        ['#fam_other', addNegUnorderedList(repos, 'keyboard-', FAMILY.map(([, t]) => t))],
        ['#fam_undef', addNegUnorderedList(repos, 'keyboard-', ['langfam-'])],
    ]);
}
