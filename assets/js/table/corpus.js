// corpus-* repository table. (Former corpustable.js.)

import { addr, cell, th } from './dom.js';
import { reponame2corpusname } from './names.js';
import { buildTable } from './core.js';
import { addRepo, addRLicense, addIssues } from './cells.js';

function corpusHeader() {
    const tr = document.createElement('tr');
    for (const label of ['Documen&shy;tation', 'Reposi&shy;tory', 'License', 'Issues']) {
        tr.appendChild(th(label));
    }
    return tr;
}

function corpusRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2corpusname(repo.name), repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    return row;
}

export const addCorpusTable = (repos, mainFilter, filters) =>
    buildTable({ repos, mainFilter, filters, colCount: 4, header: corpusHeader, row: corpusRow });
