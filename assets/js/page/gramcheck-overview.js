// Entry module for proof/gramcheck/GramcheckOverview.md
import { renderGramcheckOverview } from '../table/gramcheck.js';

export function render(repos) {
    return renderGramcheckOverview(repos, {
        production: document.querySelector('#prod_gramchecks'),
        beta: document.querySelector('#beta_gramchecks'),
        alpha: document.querySelector('#alpha_gramchecks'),
        experimental: document.querySelector('#exper_gramchecks'),
        undefined: document.querySelector('#undef_gramchecks'),
    });
}
