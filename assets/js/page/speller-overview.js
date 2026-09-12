// Entry module for proof/spelling/SpellerOverview.md
import { renderSpellerOverview } from '../table/speller.js';

export function render(repos) {
    return renderSpellerOverview(repos, {
        production: document.querySelector('#prod_spellers'),
        beta: document.querySelector('#beta_spellers'),
        alpha: document.querySelector('#alpha_spellers'),
        experimental: document.querySelector('#exper_spellers'),
        undefined: document.querySelector('#undef_spellers'),
    });
}
