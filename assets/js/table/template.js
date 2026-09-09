// template-* repository table for SharedResources.md. (Former templatetable.js.)

import { addr, cell, th } from './dom.js';
import { reponame2templatename } from './names.js';
import { buildTable } from './core.js';
import { addRepo, addRLicense, addIssues, addRDoc, addVersion } from './cells.js';

// Documentation | Repository | Version | License | Issues | Doc CI
function templateHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(th('Documen&shy;tation'));
    tr.appendChild(th('Reposi&shy;tory'));
    tr.appendChild(th('Version', 'width: 11%;'));
    tr.appendChild(th('License'));
    tr.appendChild(th('Issues', 'width: 11%;'));
    tr.appendChild(th('Doc CI', 'width: 12%;'));
    return tr;
}

function templateRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2templatename(repo.name), repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(addVersion(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    return row;
}

export const addSharedTemplateTable = (repos, mainFilter, filters) =>
    buildTable({ repos, mainFilter, filters, colCount: 6, header: templateHeader, row: templateRow });
