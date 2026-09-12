// Grammar-checker overview tables. (Former gramchecktable.js.)
//
// Repos are bucketed by automatic maturity classification; the page renders one
// table per bucket plus an "undefined" list.

import { addr, cell, th, thLeft, repoLi } from './dom.js';
import { reponame2langname } from './names.js';
import { addRepo } from './cells.js';
import { fetchBadgeData, endpointBadge } from './badges.js';
import { renderMaturityBuckets } from './maturity.js';

const MATURITY = {
    versionFile: 'gramcheck-version.json',
    countFile: 'gramcheck-rules.json',
    betaMin: 11, // "more than 10 rules"
    alphaMin: 5,
};

// --- cells ---------------------------------------------------------------

function gramcheckHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(thLeft('Documen&shy;tation'));
    tr.appendChild(thLeft('Reposi&shy;tory'));
    tr.appendChild(th('Version', 'width: 11%; text-align: left;'));
    tr.appendChild(th('Rule Count', 'width: 11%; text-align: left;'));
    return tr;
}

async function versionCell(repo) {
    const version = await fetchBadgeData(repo, MATURITY.versionFile);
    const badge = endpointBadge(repo, MATURITY.versionFile, 'V', 'Gramcheck version');
    if (!version) return cell(badge);

    // Link the badge to the matching GitHub release tag (gramcheck-<lang>/<version>).
    const langCode = repo.name.replace(/^lang-/, '');
    const link = document.createElement('a');
    link.setAttribute('href',
        `https://github.com/giellalt/${repo.name}/releases/tag/gramcheck-${langCode}%2F${version}`);
    link.appendChild(badge);
    return cell(link);
}

const ruleCountCell = (repo) =>
    cell(endpointBadge(repo, MATURITY.countFile, 'R', 'Rule Count'));

async function gramcheckRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), '/' + repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(await versionCell(repo));
    row.appendChild(ruleCountCell(repo));
    return row;
}

const gramcheckLi = (repo) => repoLi(reponame2langname(repo.name), '/' + repo.name + '/', repo);

// --- public API ---------------------------------------------------------

/** Fill { production, beta, alpha, experimental, undefined } host elements. */
export const renderGramcheckOverview = (repos, targets) =>
    renderMaturityBuckets({
        repos, mainFilter: 'lang-', targets, config: MATURITY,
        header: gramcheckHeader, row: gramcheckRow, colCount: 4, item: gramcheckLi,
    });
