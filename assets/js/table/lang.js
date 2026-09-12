// lang-* / keyboard-* / shared-* / giella-* repository tables and lists.
// (Former langtable.js.)

import { addr, cell, th, repoLi } from './dom.js';
import { reponame2langname } from './names.js';
import { buildTable, buildList } from './core.js';
import {
    addRepo, addIssues, addRDoc, addCI,
    addVersion, addLemmaCount, addCoreCI, addCoreVersion, addCoreRDoc,
} from './cells.js';

// --- list items -------------------------------------------------------------

const langLi = (repo) => repoLi(reponame2langname(repo.name), repo.name + '/', repo);

export const addUnorderedList = (repos, mainFilter, filters) =>
    buildList({ repos, mainFilter, filters, item: langLi });

export const addNegUnorderedList = (repos, mainFilter, filters) =>
    buildList({ repos, mainFilter, filters, item: langLi, negate: true });

// --- generic lang / keyboard table ----------------------------------------

// Documentation | Repository | [Version | Lemma Count] | Issues | Doc CI | Core CI | Deploy CI
function repoHeader(withCounts) {
    const tr = document.createElement('tr');
    const wide = 'width: 15%; word-break: normal; overflow-wrap: break-word; white-space: normal;';
    tr.appendChild(th('Documen&shy;tation', withCounts ? wide : null));
    tr.appendChild(th('Reposi&shy;tory', withCounts ? wide : null));
    if (withCounts) {
        tr.appendChild(th('Version', 'width: 11%;'));
        tr.appendChild(th('Lemma Count', 'width: 10%;'));
    }
    tr.appendChild(th('Issues', 'width: 11%;'));
    tr.appendChild(th('Doc CI', 'width: 12%;'));
    tr.appendChild(th('Core CI', 'width: 13%;'));
    tr.appendChild(th('Deploy CI', 'width: 13%;'));
    return tr;
}

function langRow(repo, withCounts) {
    const row = document.createElement('tr');

    const nameCell = cell(addr(reponame2langname(repo.name), repo.name + '/'));
    const repoCell = addRepo(repo);
    for (const td of [nameCell, repoCell]) {
        td.style.wordBreak = 'normal';
        td.style.overflowWrap = 'break-word';
        td.style.whiteSpace = 'normal';
    }

    row.appendChild(nameCell);
    row.appendChild(repoCell);
    if (withCounts) {
        row.appendChild(addVersion(repo));
        row.appendChild(addLemmaCount(repo));
    }
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCoreCI(repo));
    row.appendChild(addCI(repo));
    return row;
}

/** Six-column table (Documentation, Repository, Issues, Doc CI, Core CI, Deploy CI). */
export const addRepoTable = (repos, mainFilter, filters) =>
    buildTable({
        repos, mainFilter, filters, colCount: 6,
        header: () => repoHeader(false),
        row: (repo) => langRow(repo, false),
    });

/** Eight-column table that adds Version + Lemma Count and a fixed column layout. */
export const addLangRepoTable = (repos, mainFilter, filters) =>
    buildTable({
        repos, mainFilter, filters, colCount: 8,
        colWidths: ['15%', '15%', '11%', '10%', '11%', '12%', '13%', '13%'],
        header: () => repoHeader(true),
        row: (repo) => langRow(repo, true),
    });

// --- shared resources (SharedResources.md) --------------------------------

// Documentation | Repository | Version | Issues | Doc CI | Core CI
function sharedHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(th('Documen&shy;tation'));
    tr.appendChild(th('Reposi&shy;tory'));
    tr.appendChild(th('Version', 'width: 11%;'));
    tr.appendChild(th('Issues', 'width: 11%;'));
    tr.appendChild(th('Doc CI', 'width: 12%;'));
    tr.appendChild(th('Core CI', 'width: 13%;'));
    return tr;
}

function sharedRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(addVersion(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCoreCI(repo));
    return row;
}

// giella-core publishes version.json (not fst-version.json) and docsgen.yml.
function coreRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(addCoreVersion(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addCoreRDoc(repo));
    row.appendChild(addCoreCI(repo));
    return row;
}

export const addSharedRepoTable = (repos, mainFilter, filters) =>
    buildTable({
        repos, mainFilter, filters, colCount: 6,
        header: sharedHeader,
        row: (repo) => (repo.name === 'giella-core' ? coreRow(repo) : sharedRow(repo)),
    });
