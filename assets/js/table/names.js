// Turn a repository name into a human-readable label.
// (These used to be reponame2langname / reponame2corpusname / reponame2dictname /
//  reponame2templatename, scattered across four files.)

import { code2langname, code2scriptname, code2templatename } from '../iso-codes.js';

/** `lang-sme` → "Northern Sami"; `lang-sme-x-foo` → "Northern Sami (foo)". */
export function reponame2langname(reponame) {
    const parts = reponame.split('-');
    if (parts.length === 2) {
        return code2langname[parts[1]];
    }
    if (parts.length === 3 && parts[2].length === 4) {
        return code2langname[parts[1]] + ' (' + code2scriptname[parts[2]] + ')';
    }
    return code2langname[parts[1]] + ' (' + parts.slice(3).join('-') + ')';
}

/** `corpus-sme` → "Northern Sami (converted)"; three-part → "… (original)". */
export function reponame2corpusname(reponame) {
    const parts = reponame.split('-');
    if (parts.length === 2) {
        return code2langname[parts[1]] + ' (converted)';
    }
    if (parts.length === 3 && parts[2].length === 4) {
        return code2langname[parts[1]] + ' (original)';
    }
    return code2langname[parts[1]] + ' (' + parts.slice(3).join('-') + ')';
}

/** `dict-sme-nob` → "Northern Sami - Norwegian Bokmål". */
export function reponame2dictname(reponame) {
    const parts = reponame.split('-');
    if (parts.length === 3) {
        return code2langname[parts[1]] + ' - ' + code2langname[parts[2]];
    }
    return code2langname[parts[1]] + ' - ' + code2langname[parts[2]] +
        ' (' + parts.slice(4).join('-') + ')';
}

/** `template-lang` → "Language models". */
export function reponame2templatename(reponame) {
    return code2templatename[reponame.split('-')[1]];
}
