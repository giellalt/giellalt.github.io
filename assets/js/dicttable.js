// Dictionary repository table functions
// This file contains functions specific to dict-* repositories
// REQUIRES: tablecommon.js must be loaded first

// Dictionary-specific functions

function addNegUnorderedDictList(repos, mainFilter, filters) {
    ul = document.createElement('ul')
    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (!doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addDictLi(repo))
            }
        }
    }
    // If no repos found, inform the user:
    if (!ul.firstChild) {
        const p = document.createElement('p')
        p.appendChild(document.createTextNode('No repos found.'))
        return p
    } else {
        return ul
    }
}

function addDictLi(repo) {
    const li = document.createElement('li')
    li.appendChild(addr(reponame2dictname(repo.name), '/../' + repo.name + '/'))
    li.appendChild(document.createTextNode(' '))
    li.appendChild(addr('(source)', repo.html_url))

    return li
}

function reponame2dictname(reponame) {
    parts = reponame.split('-');

    if (parts.length === 3) {
        return code2langname[parts[1]] + ' - ' + code2langname[parts[2]]
    }

    return code2langname[parts[1]] + ' - ' + code2langname[parts[2]] + ' (' + parts.slice(4).join('-') + ')'
}

function addDictTableHeader() {
    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Documen&shy;tation';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'License';
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Issues';

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);

    return row_1;
}

function addDictRepoTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addDictTableHeader());

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addDictTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addDictTR(repo));
                }
            }
        }
    }
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow(4));
    }
    return table;
}

function addDictTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2dictname(repo.name), '/../' + repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addRLicense(repo));
    row.appendChild(addIssues(repo));

    return row;
}

function addUnorderedDictList(repos, mainFilter, filters) {
    const ul = document.createElement('ul')
    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addDictLi(repo))
            }
        }
    }
    // If no repos found, inform the user:
    if (!ul.firstChild) {
        const p = document.createElement('p')
        p.appendChild(document.createTextNode('No repos found.'))
        return p
    } else {
        return ul
    }
}
