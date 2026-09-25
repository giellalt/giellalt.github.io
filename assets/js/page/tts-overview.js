// Entry module for the TTS overview embedded in tts/index.md
import { renderVersionOverview } from '../table/hyph.js';

export function render(repos) {
    return renderVersionOverview(repos, {
        production: document.querySelector('#prod_tts'),
        beta: document.querySelector('#beta_tts'),
        alpha: document.querySelector('#alpha_tts'),
        experimental: document.querySelector('#exper_tts'),
        undefined: document.querySelector('#undef_tts'),
    }, {
        versionFile: 'tts-textproc-version.json',
        versionLabel: 'TTS version',
    });
}