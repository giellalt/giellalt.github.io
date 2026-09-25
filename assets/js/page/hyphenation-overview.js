// Entry module for proof/hyph/HyphenationOverview.md
import { renderVersionOverview } from '../table/hyph.js';

export function render(repos) {
    return renderVersionOverview(repos, {
        production: document.querySelector('#prod_hyphenators'),
        beta: document.querySelector('#beta_hyphenators'),
        alpha: document.querySelector('#alpha_hyphenators'),
        experimental: document.querySelector('#exper_hyphenators'),
        undefined: document.querySelector('#undef_hyphenators'),
    }, {
        versionFile: 'hyph-version.json',
        versionLabel: 'Hyphenator version',
    });
}