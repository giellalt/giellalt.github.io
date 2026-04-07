// Spellchecker table functions
// This file contains functions specific to spellcheckers
// REQUIRES: tablecommon.js and langtable.js must be loaded first
//           (uses addLemmaCount and addCoreCI from langtable.js)

// Spellchecker-specific list item generation

function addSpellerLi(repo) {
    const li = document.createElement('li')
    li.appendChild(addr(reponame2langname(repo.name), repo.name + '/'))
    li.appendChild(document.createTextNode(' '))
    li.appendChild(addr('(source)', repo.html_url))

    return li
}

function addSpellerUnorderedList(repos, mainFilter, filters) {
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
                ul.appendChild(addSpellerLi(repo))
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

function addNegSpellerUnorderedList(repos, mainFilter, filters) {
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
                ul.appendChild(addSpellerLi(repo))
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

// Main table view for spellcheckers

function addSpellerTableHeader() {
    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Documen&shy;tation';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Lemma Count';
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Suggestion Quality';
    heading_4.setAttribute('style', 'width: 20%;');
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Typos test size';
    heading_5.setAttribute('style', 'width: 15%;');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);

    return row_1;
}

function addSpellerRepoTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addSpellerTableHeader());

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
                tbody.appendChild(addSpellerTR(repo));
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    tbody.appendChild(addSpellerTR(repo));
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

// Spellchecker-specific table row generation

function addSpellerSuggQuality(repo) {
    let row_sugg = document.createElement('td');
    const sugg_image = document.createElement('img');
    sugg_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fgh-pages%2Fspellersuggs.json&label=S'
    );
    sugg_image.setAttribute('alt', 'Suggestion Quality');
    row_sugg.appendChild(sugg_image);
    return row_sugg;
}

function addTyposTestSize(repo) {
    let row_typos = document.createElement('td');
    const typos_image = document.createElement('img');
    typos_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fgh-pages%2Ftypossize.json&label=T'
    );
    typos_image.setAttribute('alt', 'Typos test size');
    row_typos.appendChild(typos_image);
    return row_typos;
}

function addSpellerTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(addLemmaCount(repo));
    row.appendChild(addSpellerSuggQuality(repo));
    row.appendChild(addTyposTestSize(repo));

    return row;
}
