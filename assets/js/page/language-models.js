// Entry module for LanguageModels.md
import { mountAll } from '../table/mount.js';
import { addLangRepoTable, addUnorderedList, addNegUnorderedList } from '../table/lang.js';

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
    ['#geo_southamerica', 'geo-southamerica'],
    ['#geo_africa', 'geo-africa'],
    ['#geo_asian', 'geo-asian'],
    ['#geo_oceania', 'geo-oceania'],
];

const FAMILY = [
    ['#fam_afroasiatic', 'langfam-afro-asiatic'],
    ['#fam_algic', 'langfam-algic'],
    ['#fam_artific', 'langfam-artificial'],
    ['#fam_austro', 'langfam-austronesian'],
    ['#fam_eskimo_aleut', 'langfam-eskimo-aleut'],
    ['#fam_indoeuropean', 'langfam-indoeuropean'],
    ['#fam_isolates', 'langfam-isolate'],
    ['#fam_mongolic', 'langfam-mongolic'],
    ['#fam_na_dene', 'langfam-na-dene'],
    ['#fam_nigercongo', 'langfam-niger-congo'],
    ['#fam_tupian', 'langfam-tupian'],
    ['#fam_turkic', 'langfam-turkic'],
    ['#fam_uralic', 'langfam-uralic'],
];

// Exclusion list for "#fam_other" — kept verbatim from the old inline script
// (it predates the na-dene and tupian sections and does not list them).
const FAMILY_OTHER_EXCLUDES = [
    'langfam-afro-asiatic', 'langfam-algic', 'langfam-artificial',
    'langfam-austronesian', 'langfam-eskimo-aleut', 'langfam-indoeuropean',
    'langfam-isolate', 'langfam-mongolic', 'langfam-niger-congo',
    'langfam-turkic', 'langfam-uralic',
];

export function render(repos) {
    return mountAll([
        ...MATURITY.map(([sel, tag]) => [sel, addLangRepoTable(repos, 'lang-', [tag])]),
        ['#undef_languges', addNegUnorderedList(repos, 'lang-', MATURITY.map(([, t]) => t))],

        ...GEO.map(([sel, tag]) => [sel, addUnorderedList(repos, 'lang-', [tag])]),
        ['#geo_undef', addNegUnorderedList(repos, 'lang-', ['geo-'])],

        ...FAMILY.map(([sel, tag]) => [sel, addUnorderedList(repos, 'lang-', [tag])]),
        ['#fam_other', addNegUnorderedList(repos, 'lang-', FAMILY_OTHER_EXCLUDES)],
        ['#fam_undef', addNegUnorderedList(repos, 'lang-', ['langfam-'])],
    ]);
}
