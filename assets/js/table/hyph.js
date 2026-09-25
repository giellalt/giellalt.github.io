// Version-based overview tables for language tools.

import { addr, cell, repoLi, thLeft, th } from './dom.js';
import { reponame2langname } from './names.js';
import { addRepo, addCoreCI } from './cells.js';
import { endpointBadge } from './badges.js';
import { renderMaturityBuckets } from './maturity.js';

function toolHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(thLeft('Documen&shy;tation'));
    tr.appendChild(thLeft('Reposi&shy;tory'));
    tr.appendChild(th('Version', 'width: 15%; text-align: left;'));
    tr.appendChild(th('Core CI', 'width: 20%;'));
    return tr;
}

const versionCell = (repo, config) =>
    cell(endpointBadge(repo, config.versionFile, 'V', config.versionLabel));

function toolRow(repo, config) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), '/' + repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(versionCell(repo, config));
    row.appendChild(addCoreCI(repo));
    return row;
}

const toolLi = (repo) => repoLi(reponame2langname(repo.name), '/' + repo.name + '/', repo);

export const renderVersionOverview = (repos, targets, config) =>
    renderMaturityBuckets({
        repos, mainFilter: 'lang-', targets, config: { ...config, versionOnly: true },
        header: toolHeader, row: (repo) => toolRow(repo, config),
        colCount: 4, listItem: toolLi,
    });