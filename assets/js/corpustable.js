// Corpus repository table functions
// This file contains functions specific to corpus-* repositories
// REQUIRES: tablecommon.js must be loaded first

// Corpus-specific functions

function addCorpusTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addTableHeader());

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addCorpusTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addCorpusTR(repo));
                }
            }
        }
    }
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow());
    }
    return table;
}

function addCorpusTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2corpusname(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCI(repo));

    return row;
}

function reponame2corpusname(reponame) {
    parts = reponame.split('-');

    if (parts.length === 2) {
        return code2langname[parts[1]] + ' (converted)'
    }

    if (parts.length === 3 && parts[2].length === 4) {
        return code2langname[parts[1]] + ' (original)'
    }

    return code2langname[parts[1]] + ' (' + parts.slice(3).join('-') + ')'
}
