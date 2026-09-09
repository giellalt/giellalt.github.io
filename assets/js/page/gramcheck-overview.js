// Entry module for proof/gramcheck/GramcheckOverview.md
import { mountAll } from '../table/mount.js';
import {
    addGramcheckRepoTableByMaturity,
    addGramcheckUnorderedListByMaturity,
} from '../table/gramcheck.js';

const BUCKETS = [
    ['#prod_gramchecks', 'production'],
    ['#beta_gramchecks', 'beta'],
    ['#alpha_gramchecks', 'alpha'],
    ['#exper_gramchecks', 'experimental'],
];

export function render(repos) {
    return mountAll([
        ...BUCKETS.map(([sel, level]) =>
            [sel, addGramcheckRepoTableByMaturity(repos, 'lang-', level)]),
        ['#undef_gramchecks', addGramcheckUnorderedListByMaturity(repos, 'lang-')],
    ]);
}
