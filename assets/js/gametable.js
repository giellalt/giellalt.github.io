// Game repository table functions
// This file contains functions specific to game-* repositories (wordguess games)
// REQUIRES: tablecommon.js must be loaded first

// Game-specific functions

function addGameTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addGameTableHeader());

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addGameTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addGameTR(repo));
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

function addGameTableHeader() {
    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Game page';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'License';
    heading_3.setAttribute('style', 'width: 15%;');
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Issues';
    heading_4.setAttribute('style', 'width: 15%;');
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Game page build';
    heading_5.setAttribute('style', 'width: 15%;');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    return row_1;
}

function addGameTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRGameDoc(repo));

    return row;
}

function addRGameDoc(repo) {
    let row_doc = document.createElement('td');
    const a_CI_doc = document.createElement('a');
    a_CI_doc.setAttribute('href', repo.html_url + '/actions');
    const CI_doc_image = document.createElement('img');
    CI_doc_image.setAttribute(
        'src',
        'https://github.com/giellalt/' +
        repo.name +
        '/workflows/Deploy/badge.svg'
    );
    CI_doc_image.setAttribute('alt', 'Doc Build Status');
    a_CI_doc.appendChild(CI_doc_image);
    row_doc.appendChild(a_CI_doc);
    return row_doc;
}
