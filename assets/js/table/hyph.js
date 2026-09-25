// Hyphenator overview tables.

import { addr, cell, repoLi, thLeft, th } from './dom.js';
import { reponame2langname } from './names.js';
import { addRepo, addCoreCI } from './cells.js';
import { endpointBadge } from './badges.js';
import { renderMaturityBuckets } from './maturity.js';

const MATURITY = {
    versionFile: 'hyph-version.json',
    versionOnly: true,
};

function hyphHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(thLeft('Documen&shy;tation'));
    tr.appendChild(thLeft('Reposi&shy;tory'));
    tr.appendChild(th('Version', 'width: 15%; text-align: left;'));
    tr.appendChild(th('Core CI', 'width: 20%;'));
    return tr;
}

const versionCell = (repo) =>
    cell(endpointBadge(repo, MATURITY.versionFile, 'V', 'Hyphenator version'));

function hyphRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), '/' + repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(versionCell(repo));
    row.appendChild(addCoreCI(repo));
    return row;
}

const hyphLi = (repo) => repoLi(reponame2langname(repo.name), '/' + repo.name + '/', repo);

export const renderHyphenationOverview = (repos, targets) =>
    renderMaturityBuckets({
        repos, mainFilter: 'lang-', targets, config: MATURITY,
        header: hyphHeader, row: hyphRow, colCount: 4, listItem: hyphLi,
    });