// Entry module for lang/common/LangModelOverview.md
import { renderLangModelOverview } from '../table/lang.js';

const TARGETS = {
    production: '#prod_langmodels',
    beta: '#beta_langmodels',
    alpha: '#alpha_langmodels',
    experimental: '#exper_langmodels',
    undefined: '#undef_langmodels',
};

export function render(repos) {
    const targets = Object.fromEntries(
        Object.entries(TARGETS).map(([level, selector]) => [
            level,
            document.querySelector(selector),
        ]),
    );
    return renderLangModelOverview(repos, targets);
}