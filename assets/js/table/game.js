// wordguess-* game repository table. (Former gametable.js.)

import { addr, cell, th } from './dom.js';
import { reponame2langname } from './names.js';
import { buildTable } from './core.js';
import { addRepo, addRLicense, addIssues, addRGameDoc } from './cells.js';

function gameHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(th('Game page'));
    tr.appendChild(th('Reposi&shy;tory'));
    tr.appendChild(th('License', 'width: 15%;'));
    tr.appendChild(th('Issues', 'width: 15%;'));
    tr.appendChild(th('Game page build', 'width: 15%;'));
    return tr;
}

function gameRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRGameDoc(repo));
    return row;
}

export const addGameTable = (repos, mainFilter, filters) =>
    buildTable({ repos, mainFilter, filters, colCount: 5, header: gameHeader, row: gameRow });
