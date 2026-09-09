// Entry module for proof/spelling/SpellerOverview.md
import { mountAll } from '../table/mount.js';
import {
    addSpellerRepoTableByMaturity,
    addSpellerUnorderedListByMaturity,
} from '../table/speller.js';

const BUCKETS = [
    ['#prod_spellers', 'production'],
    ['#beta_spellers', 'beta'],
    ['#alpha_spellers', 'alpha'],
    ['#exper_spellers', 'experimental'],
];

export function render(repos) {
    return mountAll([
        ...BUCKETS.map(([sel, level]) =>
            [sel, addSpellerRepoTableByMaturity(repos, 'lang-', level)]),
        ['#undef_spellers', addSpellerUnorderedListByMaturity(repos, 'lang-')],
    ]);
}
