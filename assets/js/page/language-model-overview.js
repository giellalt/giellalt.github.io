// Entry module for lang/common/LangModelOverview.md
import { mountAll } from '../table/mount.js';
import { addLangModelOverviewTable, addNegUnorderedList } from '../table/lang.js';

const MATURITY = [
    ['#prod_langmodels', 'maturity-prod'],
    ['#beta_langmodels', 'maturity-beta'],
    ['#alpha_langmodels', 'maturity-alpha'],
    ['#exper_langmodels', 'maturity-exper'],
];

export function render(repos) {
    const maturityTags = MATURITY.map(([, tag]) => tag);
    return mountAll([
        ...MATURITY.map(([selector, tag]) => [
            selector,
            addLangModelOverviewTable(repos, 'lang-', [tag]),
        ]),
        ['#undef_langmodels', addNegUnorderedList(repos, 'lang-', maturityTags)],
    ]);
}