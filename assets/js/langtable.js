// Language repository table functions
// This file contains functions specific to lang-* repositories
//
// REQUIRES: tablecommon.js must be loaded first
// Other repository-specific files:
//   - dicttable.js for dict-* repositories
//   - corpustable.js for corpus-* repositories
//   - gametable.js for game-* repositories (wordguess)
//   - templatetable.js for template-* repositories

// Language-specific list item generation

function addLi(repo) {
    const li = document.createElement('li')
    li.appendChild(addr(reponame2langname(repo.name), repo.name + '/'))
    li.appendChild(document.createTextNode(' '))
    li.appendChild(addr('(source)', repo.html_url))

    return li
}

function addUnorderedList(repos, mainFilter, filters) {
    const ul = document.createElement('ul')
    
    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const p = document.createElement('p');
        p.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        p.style.textAlign = 'center';
        p.style.padding = '20px';
        p.style.backgroundColor = '#fff3cd';
        p.style.border = '1px solid #ffeaa7';
        p.style.borderRadius = '8px';
        p.style.color = '#856404';
        return p;
    }
    
    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addLi(repo))
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

function addNegUnorderedList(repos, mainFilter, filters) {
    ul = document.createElement('ul')
    
    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const p = document.createElement('p');
        p.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        p.style.textAlign = 'center';
        p.style.padding = '20px';
        p.style.backgroundColor = '#fff3cd';
        p.style.border = '1px solid #ffeaa7';
        p.style.borderRadius = '8px';
        p.style.color = '#856404';
        return p;
    }
    
    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (!doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addLi(repo))
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

// Main table view, default version:

function addRepoTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addTableHeader());

    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 6; // Match number of columns in header
        errorCell.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        errorCell.style.textAlign = 'center';
        errorCell.style.padding = '30px 20px';
        errorCell.style.backgroundColor = '#fff3cd';
        errorCell.style.border = '1px solid #ffeaa7';
        errorCell.style.borderRadius = '8px';
        errorCell.style.color = '#856404';
        errorRow.appendChild(errorCell);
        tbody.appendChild(errorRow);
        return table;
    }

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addTR(repo));
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

// Main table, language version with an additional lemma count column:
function addLangRepoTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addTableHeader(true));

    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 7; // Match number of columns in header (extra column for addLangRepoTable)
        errorCell.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        errorCell.style.textAlign = 'center';
        errorCell.style.padding = '30px 20px';
        errorCell.style.backgroundColor = '#fff3cd';
        errorCell.style.border = '1px solid #ffeaa7';
        errorCell.style.borderRadius = '8px';
        errorCell.style.color = '#856404';
        errorRow.appendChild(errorCell);
        tbody.appendChild(errorRow);
        return table;
    }

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                tbody.appendChild(addTR(repo, true));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addTR(repo, true));
                }
            }
        }
    }
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow(7));
    }
    return table;
}

// Language-specific table row generation

function addTR(repo, extraColumn = false) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    // Add extra column if requested
    if (extraColumn) {
        row.appendChild(addLemmaCount(repo));
    }
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCoreCI(repo));
    row.appendChild(addCI(repo));

    return row;
}

// Lang-specific helper functions

function addLemmaCount(repo) {
    let row_lemmas = document.createElement('td');
    const lemma_image = document.createElement('img');
    lemma_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fgh-pages%2Fbadgedata%2Ffst-lemmacount.json&label=L'
    );
    lemma_image.setAttribute('alt', 'Lemma Count');
    row_lemmas.appendChild(lemma_image);
    return row_lemmas;
}

function addCoreCI(repo) {
    let row_CI = document.createElement('td');
    const a_CI = document.createElement('a');
    a_CI.setAttribute(
        'href',
        'https://builds.giellalt.org/pipelines/' +
        repo.name +
        '/builds/latest'
    );
    const CI_image = document.createElement('img');
    CI_image.setAttribute(
        'src',
        'https://builds.giellalt.org/api/badge/' +
        repo.name +
        '/build?label=CI'
    );
    CI_image.setAttribute('alt', 'CI Build Status');
    a_CI.append(CI_image);
    row_CI.appendChild(a_CI);
    return row_CI;
}
