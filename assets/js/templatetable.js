// Template repository table functions
// This file contains functions specific to template-* repositories
// REQUIRES: tablecommon.js must be loaded first

// Template-specific functions

function addTemplateTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addTableHeader());

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addTemplTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addTemplTR(repo));
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

function addTemplTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2templatename(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCI(repo));

    return row;
}

function reponame2templatename(reponame) {
    parts = reponame.split('-');
    return code2templatename[parts[1]]
}

// Note: code2templatename is defined in tablecommon.js
