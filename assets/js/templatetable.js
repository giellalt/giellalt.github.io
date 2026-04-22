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

// Shared resources version for templates (for SharedResources.md)

function addSharedTemplateTableHeader() {
    // Table header for templates in SharedResources: includes Version, no Deploy CI
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Documen&shy;tation';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Version';
    heading_3.setAttribute('style', 'width: 11%;');
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'License';
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Issues';
    heading_5.setAttribute('style', 'width: 11%;');
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = 'Doc CI';
    heading_6.setAttribute('style', 'width: 12%;');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);

    return row_1;
}

function addSharedTemplTR(repo) {
    // Table row for templates in SharedResources: includes Version, no Deploy CI
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2templatename(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addVersion(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));

    return row;
}

function addSharedTemplateTable(repos, mainFilter, filters) {
    // Table for templates in SharedResources
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addSharedTemplateTableHeader());

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addSharedTemplTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addSharedTemplTR(repo));
                }
            }
        }
    }
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow(5));
    }
    return table;
}

// Note: code2templatename is defined in tablecommon.js
