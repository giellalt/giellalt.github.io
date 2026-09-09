// dict-* repository table and lists. (Former dicttable.js.)

import { addr, cell, th } from './dom.js';
import { reponame2dictname } from './names.js';
import { buildTable, buildList } from './core.js';
import { addRepo, addRLicense, addIssues } from './cells.js';

// Dictionary pages live one directory below the dict repos, hence the '/../' hrefs.
const dictHref = (repo) => '/../' + repo.name + '/';

function dictLi(repo) {
    const li = document.createElement('li');
    li.appendChild(addr(reponame2dictname(repo.name), dictHref(repo)));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(addr('(source)', repo.html_url));
    return li;
}

function dictHeader() {
    const tr = document.createElement('tr');
    for (const label of ['Documen&shy;tation', 'Reposi&shy;tory', 'License', 'Issues']) {
        tr.appendChild(th(label));
    }
    return tr;
}

function dictRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2dictname(repo.name), dictHref(repo))));
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    return row;
}

export const addDictRepoTable = (repos, mainFilter, filters) =>
    buildTable({ repos, mainFilter, filters, colCount: 4, header: dictHeader, row: dictRow });

export const addUnorderedDictList = (repos, mainFilter, filters) =>
    buildList({ repos, mainFilter, filters, item: dictLi });

export const addNegUnorderedDictList = (repos, mainFilter, filters) =>
    buildList({ repos, mainFilter, filters, item: dictLi, negate: true });
