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
        errorCell.colSpan = 8; // Match number of columns in header (extra columns for addLangRepoTable)
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
        tbody.appendChild(addEmptyRow(8));
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
    // Add extra columns if requested
    if (extraColumn) {
        row.appendChild(addVersion(repo));
        row.appendChild(addLemmaCount(repo));
    }
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCoreCI(repo));
    row.appendChild(addCI(repo));

    return row;
}

// Lang-specific helper functions

function addVersion(repo) {
    let row_version = document.createElement('td');
    const version_image = document.createElement('img');
    version_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2Ffst-version.json&label=V'
    );
    version_image.setAttribute('alt', 'FST Version');
    row_version.appendChild(version_image);
    return row_version;
}

function addLemmaCount(repo) {
    let row_lemmas = document.createElement('td');
    const lemma_image = document.createElement('img');
    lemma_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2Ffst-lemmacount.json&label=L'
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

// Shared resources specific functions (for SharedResources.md)

function addSharedTableHeader() {
    // Table header for shared resources: no Deploy CI, includes Version
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Documen&shy;tation';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Version';
    heading_3.setAttribute('style', 'width: 11%;');
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Issues';
    heading_4.setAttribute('style', 'width: 11%;');
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Doc CI';
    heading_5.setAttribute('style', 'width: 12%;');
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = 'Core CI';
    heading_6.setAttribute('style', 'width: 13%;');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);

    return row_1;
}

function addSharedTR(repo) {
    // Table row for shared resources: includes Version, no Deploy CI
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addVersion(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addRDoc(repo));
    row.appendChild(addCoreCI(repo));

    return row;
}

function addCoreVersion(repo) {
    // Special version function for giella-core (uses version.json instead of fst-version.json)
    let row_version = document.createElement('td');
    const version_image = document.createElement('img');
    version_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2Fversion.json&label=V'
    );
    version_image.setAttribute('alt', 'Version');
    row_version.appendChild(version_image);
    return row_version;
}

function addCoreRDoc(repo) {
    // Special doc CI function for giella-core (uses docsgen.yml instead of docs.yml)
    let row_doc = document.createElement('td');
    const a_CI_doc = document.createElement('a');
    a_CI_doc.setAttribute('href', repo.html_url + '/actions');
    const CI_doc_image = document.createElement('img');
    CI_doc_image.setAttribute(
        'src',
        'https://img.shields.io/github/actions/workflow/status/giellalt/' +
        repo.name +
        '/docsgen.yml?label=D'
    );
    CI_doc_image.setAttribute('alt', 'Doc Build Status');
    a_CI_doc.appendChild(CI_doc_image);
    row_doc.appendChild(a_CI_doc);
    return row_doc;
}

function addCoreTR(repo) {
    // Special table row for giella-core: uses version.json and docsgen.yml
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addCoreVersion(repo));
    row.appendChild(addIssues(repo));
    row.appendChild(addCoreRDoc(repo));
    row.appendChild(addCoreCI(repo));

    return row;
}

function addSharedRepoTable(repos, mainFilter, filters) {
    // Table for shared resources (shared-*, giella-*, template-*)
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addSharedTableHeader());

    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 5; // Match number of columns in header
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
                // Use special TR for giella-core
                if (repo.name === 'giella-core') {
                    tbody.appendChild(addCoreTR(repo));
                } else {
                    tbody.appendChild(addSharedTR(repo));
                }
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    // Use special TR for giella-core
                    if (repo.name === 'giella-core') {
                        tbody.appendChild(addCoreTR(repo));
                    } else {
                        tbody.appendChild(addSharedTR(repo));
                    }
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
